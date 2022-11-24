package com.example.backend.Post;

import com.example.backend.Image.ImageModel;
import com.example.backend.Review.ReviewModelDTO;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.sql.Timestamp;
import java.util.List;

@AllArgsConstructor
@Data
@Builder
public class PostModelDTO {

    private Long postId;
    private String title;
    private String author;
    private Timestamp date;
    private String description;
//    private String imageSrc;
    private ImageModel imageModel;
    private List<ReviewModelDTO> reviewModels;

}
