package com.example.backend.Review;

import lombok.Builder;
import lombok.Data;

import java.sql.Timestamp;

@Data
@Builder
public class ReviewModelDTO {
    private Long reviewModelId;
    private String description;
    private Double rate;
    private Boolean isVulgar;
    private Timestamp date;
    private Long carModelId;
    private String carName;
    private String userNick;
}
