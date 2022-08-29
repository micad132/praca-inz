package com.example.backend.User;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api/v1/user")
@AllArgsConstructor
@RestController
public class UserController {

    private final UserService userService;

    @PostMapping
    public void addUser(@RequestBody UserModel userModel){
        userService.registerUser(userModel);
    }

    @DeleteMapping("/{userId}")
    public void deleteUser(@PathVariable(value = "userId")Long userId){
        userService.deleteUserById(userId);
    }
}