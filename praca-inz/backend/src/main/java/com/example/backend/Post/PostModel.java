package com.example.backend.Post;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Timestamp;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
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

    @Column(name = "short_desc", nullable = false)
    private String short_desc;

    @Column(name = "description", nullable = false, length = 1500)
    private String description;

    @ManyToOne
    @JoinColumn(name = "post_category_model_id")
    private PostCategoryModel postCategoryModel;

}