package com.example.backend.User;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.List;
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
    void shouldProperlyRegisterUser() {

        UserModel userModel = UserModel.builder()
                .id(1L)
                .name("user")
                .email("user@user.pl")
                .cityName("Kielce")
                .password("haslo")
                .postalCode("12-234")
                .role(UserRole.USER)
                .build();

        userService.registerUser(userModel);

        verify(userRepository,times(1)).save(userModel);

    }

    @Test
    void shouldThrowExceptionWhenEmailIsInvalid() {
        UserModel userModel = mock(UserModel.class);
        doThrow(IllegalStateException.class).when(userModel).setEmail("jfjsjdjfsdjfhsjdfhjsjfhdsjf");
        assertThrows(IllegalStateException.class, () -> {
            userModel.setEmail("jfjsjdjfsdjfhsjdfhjsjfhdsjf");
        });
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

        userService.registerUser(userModel);
        given(userRepository.findById(163L)).willReturn(Optional.empty());

        assertThrows(Exception.class, () -> {
            userService.deleteUserById(163L);
        });
    }

    @Test
    void getUserById() {
    }
}