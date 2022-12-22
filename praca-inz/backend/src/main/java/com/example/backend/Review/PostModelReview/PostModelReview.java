package com.example.backend.Review.PostModelReview;

import com.example.backend.Post.PostModel;
import com.example.backend.User.UserModel;
import lombok.*;

import javax.persistence.*;
import java.sql.Timestamp;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Builder
@Table(name = "post_model_review")
public class PostModelReview {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "post_model_review_seq")
    @SequenceGenerator(name = "post_model_review_seq")
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "rate", nullable = false)
    private Double rate;

    @Column(name = "date", nullable = false)
    private Timestamp date;

    @ManyToOne
    @JoinColumn(name = "user_model_id", nullable = false)
    private UserModel userModel;

    @Column(name = "is_vulgar")
    private Boolean isVulgar;

    @ManyToOne
    @JoinColumn(name = "post_model_id")
    private PostModel postModel;

    @Column(name = "is_car_model_review")
    private Boolean isCarModelReview;

}
