package com.example.backend.User;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.BDDMockito.*;
import static org.mockito.Mockito.*;

@SpringBootTest
class UserServiceTest {

    @Autowired
    private  UserService userService;

    @MockBean
    private UserRepository userRepository;

    @MockBean
    private UserMapper userMapper;

    @Test
    void registerUser() {

        UserModel userModel = UserModel.builder()
                .id(1L)
                .name("user")
                .email("user@user.pl")
                .cityName("Kielce")
                .password("haslo")
                .postalCode("12-234")
                .role(UserRole.USER)
                .build();

//        when(userService.registerUser(userModel)).thenReturn(UserModel.builder().build());

        userService.registerUser(userModel);
        verify(userRepository,times(1)).save(userModel);

    }

    @Test
    void getAllUsers() {
    }

    @Test
    void shouldThrowExceptionWhenUserToDeleteNotExists() {
        UserModel userModel = UserModel.builder()
                .id(1L)
                .name("user")
                .email("user@user.pl")
                .cityName("Kielce")
                .password("haslo")
                .postalCode("12-234")
                .role(UserRole.USER)
                .build();
//        given(userRepository.findById()).willReturn(Optional.empty());

        assertThrows(Exception.class, () -> {
            userService.deleteUserById(3L);
        });
    }

    @Test
    void getUserById() {
    }
}