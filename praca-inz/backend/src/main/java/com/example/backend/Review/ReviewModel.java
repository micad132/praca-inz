package com.example.backend.Review;

import com.example.backend.CarModel.CarModel;
import com.example.backend.Post.PostModel;
import com.example.backend.Product.ProductModel;
import com.example.backend.User.UserModel;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.sql.Timestamp;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Builder
@Table(name = "review_model")
public class ReviewModel {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "review_model_seq")
    @SequenceGenerator(name = "review_model_seq", allocationSize = 1)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "rate", nullable = false)
    private Double rate;

    @Column(name = "date", nullable = false)
    private Timestamp date;



    @ManyToOne
    @JoinColumn(name = "car_model_id", nullable = false)
    private CarModel carModel;

    @ManyToOne
    @JoinColumn(name = "user_model_id", nullable = false)
    private UserModel userModel;

    @Column(name = "is_vulgar")
    private Boolean isVulgar;

    @ManyToOne
    @JoinColumn(name = "post_model_id")
    private PostModel postModel;

//    @ManyToOne
//    @JoinColumn(name = "product_model_id")
//    private ProductModel productModel;
//
//    @ManyToOne
//    @JoinColumn(name = "car_model_id")
//    private CarModel carModel;
//
//    @ManyToOne
//    @JoinColumn(name = "post_model_id")
//    private PostModel postModel;
//
//    @ManyToOne
//    @JoinColumn(name = "user_model_id")
//    private UserModel userModel;

}