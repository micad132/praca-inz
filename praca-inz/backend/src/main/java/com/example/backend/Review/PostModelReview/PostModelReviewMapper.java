package com.example.backend.Review.PostModelReview;

import org.springframework.stereotype.Component;

@Component
public class PostModelReviewMapper {

    public PostModelReviewDTO mapEntityToDTO(PostModelReview postModelReview){
        return PostModelReviewDTO.builder()
                .reviewModelId(postModelReview.getId())
                .postId(postModelReview.getPostModel().getId())
                .description(postModelReview.getDescription())
                .rate(postModelReview.getRate())
                .isVulgar(postModelReview.getIsVulgar())
                .date(postModelReview.getDate())
                .userNick(postModelReview.getUserModel().getName())
                .reviewHeader(postModelReview.getPostModel().getTitle())
                .build();
    }

    public PostModelReview mapDTOToEntity(PostModelReviewRequestDTO postModelReviewRequestDTO){
        return PostModelReview.builder()
                .description(postModelReviewRequestDTO.getDescription())
                .rate(postModelReviewRequestDTO.getRate())
                .build();
    }
}
