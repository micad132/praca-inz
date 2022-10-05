package com.example.backend.User;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

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
                .filter(f -> f.getPrincipal() instanceof  UserWrapper)
                .map(Authentication::getPrincipal)
                .map(UserWrapper.class::cast)
                .map(UserWrapper::getUserModel)
                .orElse(null);
        return ResponseEntity.ok(loggedUser);
    }

//    @GetMapping("/getUserDetails")
//    public UserDTO getUserDetails(@RequestBody UserModel userModel){
//        UserDTO userDTO = userService.convertUserToUserDTO(userModel);
//        return userDTO;
//    }
    @GetMapping("/getUserDetails")
    public ResponseEntity<UserDTO> getUserDetails() {
//        UserDTO userDTO = userService.convertUserToUserDTO(userModel);
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserModel loggedUser = Optional.ofNullable(authentication)
                .filter(f -> f.getPrincipal() instanceof  UserWrapper)
                .map(Authentication::getPrincipal)
                .map(UserWrapper.class::cast)
                .map(UserWrapper::getUserModel)
                .orElse(null);
        UserDTO userDTO = userService.convertUserToUserDTO(loggedUser);
        return ResponseEntity.ok(userDTO);
    }


    @PutMapping("/updateUserDetails")
    public void updateUserDetails(@RequestBody UserDTO newUserDetails){
        userService.updateUserDetails(newUserDetails);
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
