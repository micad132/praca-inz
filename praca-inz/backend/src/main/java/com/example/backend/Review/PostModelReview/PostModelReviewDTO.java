package com.example.backend.Review.PostModelReview;

import lombok.Builder;
import lombok.Data;

import java.sql.Timestamp;

@Data
@Builder
public class PostModelReviewDTO {

    private Long postModelReviewId;
    private String description;
    private Double rate;
    private Boolean isVulgar;
    private Timestamp date;
    private String userNick;
    private String reviewHeader;
    private Long postId;

}
