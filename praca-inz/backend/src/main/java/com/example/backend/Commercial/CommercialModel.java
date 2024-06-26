package com.example.backend.Commercial;

import com.example.backend.CarModel.CarModel;
import lombok.*;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Builder
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

    @OneToOne
    @JoinColumn(name = "car_model_id", nullable = true)
    private CarModel carModel;

}