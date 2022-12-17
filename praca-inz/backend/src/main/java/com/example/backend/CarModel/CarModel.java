package com.example.backend.CarModel;

import com.example.backend.Image.ImageModel;
import com.example.backend.Review.CarModelReview.ReviewModel;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Builder
@Table(name = "car_model")
public class CarModel {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "car_model_seq")
    @SequenceGenerator(name = "car_model_seq", allocationSize = 1)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "price", nullable = false)
    private Double price;

    @Column(name = "rating", nullable = false)
    private Double rating;

    @Column(name = "description", nullable = false, length = 500)
    private String description;


    @Column(name = "engine_power")
    private Double enginePower;

    @Column(name = "engine_capacity")
    private Double engineCapacity;

    @Column(name = "gearbox")
    private String gearbox;

    @Column(name = "car_body")
    private String carBody;

    @Column(name = "production_country")
    private String productionCountry;

//    @ManyToMany
//    @JoinTable(name = "car_model_image_models",
//            joinColumns = @JoinColumn(name = "car_model_id"),
//            inverseJoinColumns = @JoinColumn(name = "image_models_id"))
//    private List<ImageModel> imageModels = new ArrayList<>();




    @OneToMany(mappedBy = "carModel", orphanRemoval = true)
    private List<ReviewModel> reviewModels = new ArrayList<>();

    @OneToOne(orphanRemoval = true)
    @JoinColumn(name = "image_model_id")
    private ImageModel imageModel;

//    @OneToMany(mappedBy = "carModel", orphanRemoval = true)
//    private List<ImageModel> imageModels = new ArrayList<>();

}
