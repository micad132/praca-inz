package com.example.backend.Review;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/v1/review")
@AllArgsConstructor
@RestController
public class ReviewController {

    private final ReviewService reviewService;

    @PostMapping
    public void addReview(@RequestBody ReviewModel reviewModel){
        reviewService.addReview(reviewModel);
    }

    @GetMapping("/getAllReviews")
    public List<ReviewModel> getAllReviews(){
        return reviewService.getAllReviews();
    }

    @DeleteMapping("/deleteReviews")
    public void deleteReviews(){
        reviewService.deleteReviews();
    }
}


