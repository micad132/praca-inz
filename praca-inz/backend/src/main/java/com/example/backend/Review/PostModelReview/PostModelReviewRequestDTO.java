package com.example.backend.Review.PostModelReview;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class PostModelReviewRequestDTO {

    private String description;
    private Double rate;
}
