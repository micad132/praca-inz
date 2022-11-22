package com.example.backend.Review;

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
                .rate(reviewModel.getRate())
                .carName(reviewModel.getCarModel().getName())
                .date(reviewModel.getDate())
                .build();
    }
}
