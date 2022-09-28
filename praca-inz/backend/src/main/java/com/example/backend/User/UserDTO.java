package com.example.backend.User;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDTO {

    private Long id;
    private String name;
    private String cityName;
    private String postalCode;

}
