package com.example.backend.User;

import com.example.backend.Review.ReviewModel;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "user_model")
public class UserModel {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_model_seq")
    @SequenceGenerator(name = "user_model_seq", allocationSize = 1)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "city_name", nullable = false)
    private String cityName;

    @Column(name = "postal_code", nullable = false)
    private String postalCode;

    @Enumerated(EnumType.STRING)
    @Column(name = "role", nullable = false)
    private UserRole role;


    @JsonIgnore
    @OneToMany(mappedBy = "userModel", orphanRemoval = true)
    private List<ReviewModel> reviewModels = new ArrayList<>();

}