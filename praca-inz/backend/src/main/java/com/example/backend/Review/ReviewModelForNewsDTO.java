package com.example.backend.Review;

import lombok.Builder;
import lombok.Data;

import java.sql.Timestamp;

@Data
@Builder
public class ReviewModelForNewsDTO {
    private Long reviewModelId;
    private String description;
    private Double rate;
    private Boolean isVulgar;
    private Timestamp date;
    private Long postId;
    private String postTitle;
    private String userNick;
}
