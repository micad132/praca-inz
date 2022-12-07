package com.example.backend.User;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@AllArgsConstructor
@Component
public class UserMapper {

    public UserModel mapDTOToEntity(UserDTO userDTO) {
        return UserModel.builder()
                .cityName(userDTO.getName())
                .build();
    }

    public UserDTO mapEntityToDTO(UserModel userModel){
        return UserDTO.builder()
                .id(userModel.getId())
                .name(userModel.getName())
                .cityName(userModel.getCityName())
                .postalCode(userModel.getPostalCode())
                .userRole(userModel.getRole().toString())
                .build();
    }


}
