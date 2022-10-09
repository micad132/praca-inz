package com.example.backend.Review;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ReviewService {

    private final ReviewRepository reviewRepository;

    public List<ReviewModel> getAllReviews(){
        return reviewRepository.findAll();
    }

    public void addReview(ReviewModel reviewModel){
        reviewRepository.save(reviewModel);
    }
}
