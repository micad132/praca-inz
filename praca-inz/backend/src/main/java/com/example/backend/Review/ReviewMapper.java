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
                .rate(reviewModel.getRate())
                .date(reviewModel.getDate())
                .build();
    }
}
