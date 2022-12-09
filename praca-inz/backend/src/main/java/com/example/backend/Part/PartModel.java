package com.example.backend.Part;

import com.example.backend.Image.ImageModel;
import com.example.backend.User.UserModel;
import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@Entity
@Table(name = "part_model")
public class PartModel {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "part_model_seq")
    @SequenceGenerator(name = "part_model_seq", allocationSize = 1)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "price", nullable = false)
    private Double price;

}