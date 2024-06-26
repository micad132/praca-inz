package com.example.backend.Review.CarModelReview;

import org.springframework.stereotype.Component;

@Component
public class ReviewMapper {

    public ReviewModel mapDTOToEntity(ReviewModelDTO reviewModelDTO){
        return ReviewModel.builder()
                .description(reviewModelDTO.getDescription())
                .rate(reviewModelDTO.getRate())
                .build();
    }

    public ReviewModelDTO mapEntityToDTO(ReviewModel reviewModel){
        return ReviewModelDTO.builder()
                .reviewModelId(reviewModel.getId())
                .carModelId(reviewModel.getCarModel().getId())
//                .userModelId(reviewModel.getUserModel().getId())
                .userNick(reviewModel.getUserModel().getName())
                .description(reviewModel.getDescription())
                .isVulgar(reviewModel.getIsVulgar())
                .isCarModelReview(reviewModel.getIsCarModelReview())
                .rate(reviewModel.getRate())
                .reviewHeader(reviewModel.getCarModel().getName())
                .date(reviewModel.getDate())
                .build();
    }

//    public ReviewModelForNewsDTO mapEntityToReviewDTO(ReviewModel reviewModel){
//        return ReviewModelForNewsDTO.builder()
//                .reviewModelId(reviewModel.getId())
//                .postId(reviewModel.getPostModel().getId())
//                .userNick(reviewModel.getUserModel().getName())
//                .description(reviewModel.getDescription())
//                .isVulgar(reviewModel.getIsVulgar())
//                .rate(reviewModel.getRate())
//                .postTitle(reviewModel.getPostModel().getTitle())
//                .date(reviewModel.getDate())
//                .build();
//    }
}
