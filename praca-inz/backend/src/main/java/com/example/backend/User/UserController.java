package com.example.backend.User;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
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
    @GetMapping("/getUserDetails/{userId}")
    public ResponseEntity<UserDTO> getUserDetails(@PathVariable(value = "userId") Long userId) {
//        UserDTO userDTO = userService.convertUserToUserDTO(userModel);
        UserModel loggedUser = userService.getUserById(userId);
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

    @GetMapping("/getAllUsersDTO")
    public List<UserDTO> getAllUsersDTO() {
        return userService.getAllUsersDTO();
    }

    @GetMapping("/getUserById")
    public UserModel getUserById(Authentication authentication){
        UserModel loggedUser = Optional.ofNullable(authentication)
                .filter(f -> f.getPrincipal() instanceof  UserWrapper)
                .map(Authentication::getPrincipal)
                .map(UserWrapper.class::cast)
                .map(UserWrapper::getUserModel)
                .orElse(null);
        if(loggedUser == null){
            return new UserModel();
        }
        return userService.getUserById(loggedUser.getId());
    }

    @PutMapping("/updateUserRole/{id}/{role}")
    public void updateUserRole(@PathVariable("id") Long id ,@PathVariable("role") String role){
            userService.updateUserRole(id,role);
    }
}
