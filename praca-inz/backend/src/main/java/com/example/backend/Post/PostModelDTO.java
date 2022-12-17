package com.example.backend.Post;

import com.example.backend.Image.ImageModel;
import com.example.backend.Review.CarModelReview.ReviewModelDTO;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.sql.Timestamp;
import java.util.List;

@AllArgsConstructor
@Data
@Builder
public class PostModelDTO {

    Long postId;
    String title;
    String author;
    Timestamp date;
    String description;
    String postCategory;
    //    private String imageSrc;
    ImageModel imageModel;
    List<ReviewModelDTO> reviewModels;

}

