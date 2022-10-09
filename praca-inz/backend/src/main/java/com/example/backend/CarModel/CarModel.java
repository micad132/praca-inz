package com.example.backend.CarModel;

import com.example.backend.Image.ImageModel;
import com.example.backend.Review.ReviewModel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
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

    @Column(name = "description", nullable = false)
    private String description;

    @ManyToMany
    @JoinTable(name = "car_model_image_models",
            joinColumns = @JoinColumn(name = "car_model_id"),
            inverseJoinColumns = @JoinColumn(name = "image_models_id"))
    private List<ImageModel> imageModels = new ArrayList<>();

    @OneToMany(mappedBy = "carModel", orphanRemoval = true)
    private List<ReviewModel> reviewModels = new ArrayList<>();

}