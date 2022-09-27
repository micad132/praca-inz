package com.example.backend.User;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;
import java.util.List;
import java.util.Optional;

@RequestMapping("/api/v1/user")
@AllArgsConstructor
@RestController
public class UserController {

    private final UserService userService;

    @PostMapping
    public void addUser(@RequestBody UserModel userModel){
        userService.registerUser(userModel);
    }

    @GetMapping("/getLoggedUser")
    public ResponseEntity<UserModel> getLoggedUser(Authentication authentication){
        UserModel loggedUser = Optional.ofNullable(authentication)
                .filter(f -> f.getPrincipal() instanceof  UserModel)
                .map(Authentication::getPrincipal)
                .map(UserModel.class::cast)
                .orElseThrow(()-> new UsernameNotFoundException("Username not logged"));
        return ResponseEntity.ok(loggedUser);
    }

    @DeleteMapping("/{userId}")
    public void deleteUser(@PathVariable(value = "userId")Long userId){
        userService.deleteUserById(userId);
    }

    @GetMapping("/getAllUsers")
    public List<UserModel> getAllUsers(){
        return userService.getAllUsers();
    }
}
