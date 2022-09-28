package com.example.backend.Commercial;

import com.example.backend.CarModel.CarModel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "commercial_model")
public class CommercialModel {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "commercial_model_seq")
    @SequenceGenerator(name = "commercial_model_seq", allocationSize = 1)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "description", nullable = false)
    private String description;

//    @Column(name = "img_path", nullable = false)
//    private String imgPath;

    @OneToOne(orphanRemoval = true, cascade = {CascadeType.REMOVE})
    @JoinColumn(name = "car_model_id")
    private CarModel carModel;

}