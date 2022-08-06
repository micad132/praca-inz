package com.example.backend.Review;

import com.example.backend.CarModel.CarModel;
import com.example.backend.Post.PostModel;
import com.example.backend.Product.ProductModel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Review")
@Entity
public class ReviewModel {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "review_seq")
    @SequenceGenerator(name = "review_seq", allocationSize = 1)
    @Column(name = "id", nullable = false)
    private Long id;

    private String description;

    private Double rate;

    private Date date;

    private PostModel postModel;

    private ProductModel productModel;

    private CarModel carModel;
}
