package com.example.backend.Image;

import com.example.backend.CarModel.CarModel;
import com.example.backend.Commercial.CommercialModel;
import com.example.backend.Post.PostModel;
import com.example.backend.Product.ProductModel;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@Entity
@Table(name = "image_model")
public class ImageModel {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "image_model_seq")
    @SequenceGenerator(name = "image_model_seq", allocationSize = 1)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "type")
    private String type;

    @Column(name = "image", unique = false, nullable = false, length = 100000)
    private byte[] image;

//    @ManyToOne
//    @JoinColumn(name = "car_model_id")
//    private CarModel carModel;

//    @ManyToOne
//    @JoinColumn(name = "car_model_id")
//    private CarModel carModel;

//    @Column(name = "image_path", nullable = false)
//    private String imagePath;



//    @ManyToOne
//    @JoinColumn(name = "product_model_id")
//    private ProductModel productModel;
//
//    @JsonIgnore
//    @ManyToOne
//    @JoinColumn(name = "car_model_id")
//    private CarModel carModel;
//
//    @ManyToOne
//    @JoinColumn(name = "post_model_id")
//    private PostModel postModel;
//
//    @OneToOne(orphanRemoval = true)
//    @JoinColumn(name = "commercial_model_id")
//    private CommercialModel commercialModel;

}