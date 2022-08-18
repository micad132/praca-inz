package com.example.backend.Image;

import com.example.backend.CarModel.CarModel;
import com.example.backend.Commercial.CommercialModel;
import com.example.backend.Post.PostModel;
import com.example.backend.Product.ProductModel;
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
@Table(name = "image_model")
public class ImageModel {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "image_model_seq")
    @SequenceGenerator(name = "image_model_seq", allocationSize = 1)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "image_path", nullable = false)
    private String imagePath;

    @ManyToOne
    @JoinColumn(name = "product_model_id")
    private ProductModel productModel;

    @ManyToOne
    @JoinColumn(name = "car_model_id")
    private CarModel carModel;

    @ManyToOne
    @JoinColumn(name = "post_model_id")
    private PostModel postModel;

    @OneToOne(orphanRemoval = true)
    @JoinColumn(name = "commercial_model_id")
    private CommercialModel commercialModel;

}