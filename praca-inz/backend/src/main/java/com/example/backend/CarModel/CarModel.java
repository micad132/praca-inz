package com.example.backend.CarModel;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "CarModel")
@Entity
public class CarModel {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "carmodel_seq")
    @SequenceGenerator(name = "carmodel_seq", allocationSize = 1)
    @Column(name = "id", nullable = false)
    private Long id;

    private String name;

    private Double price;

    private Double rating;

    private String description;

    private String[] imgPath;
}
