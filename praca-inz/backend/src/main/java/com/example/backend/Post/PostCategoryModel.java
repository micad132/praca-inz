package com.example.backend.Post;

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
@Table(name = "post_category_model")
public class PostCategoryModel {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "post_category_model_seq")
    @SequenceGenerator(name = "post_category_model_seq", allocationSize = 1)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

}