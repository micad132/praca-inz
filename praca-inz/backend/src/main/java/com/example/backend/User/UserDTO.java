package com.example.backend.User;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class UserDTO {

    private Long id;
    private String name;
    private String cityName;
    private String postalCode;
    private String userRole;

}
