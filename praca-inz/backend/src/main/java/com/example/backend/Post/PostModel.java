package com.example.backend.Post;

import com.example.backend.Image.ImageModel;
import com.example.backend.Review.ReviewModel;
import com.example.backend.User.UserModel;
import lombok.*;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@Entity
@Table(name = "post_model")
public class PostModel {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "post_model_seq")
    @SequenceGenerator(name = "post_model_seq", allocationSize = 1)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "date", nullable = false)
    private Timestamp date;

    @Column(name = "title", nullable = false)
    private String title;


    @Column(name = "description", nullable = false, length = 1500)
    private String description;

    @ManyToOne
    @JoinColumn(name = "user_model_id")
    private UserModel userModel;

    @OneToMany(mappedBy = "postModel", orphanRemoval = true)
    private List<ReviewModel> reviewModels = new ArrayList<>();

    @OneToOne(orphanRemoval = true)
    @JoinColumn(name = "image_model_id")
    private ImageModel imageModel;

    @Enumerated(EnumType.STRING)
    @Column(name = "post_categories")
    private PostCategories postCategories;

    //    @ManyToMany
//    @JoinTable(name = "post_model_image_models",
//            joinColumns = @JoinColumn(name = "post_model_id"),
//            inverseJoinColumns = @JoinColumn(name = "image_models_id"))
//    private List<ImageModel> imageModels = new ArrayList<>();

}