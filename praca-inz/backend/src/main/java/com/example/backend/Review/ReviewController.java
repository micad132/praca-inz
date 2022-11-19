package com.example.backend.Review;

import com.example.backend.User.UserWrapper;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RequestMapping("/api/v1/review")
@AllArgsConstructor
@RestController
public class ReviewController {

    private final ReviewService reviewService;

    @PostMapping("/{id}")
    public void addReview(@PathVariable Long id,@RequestBody ReviewModelDTO reviewModel, Authentication authentication){
        UserWrapper loggedUser = Optional.ofNullable(authentication)
                .filter(f -> f.getPrincipal() instanceof UserWrapper)
                .map(Authentication::getPrincipal)
                .map(UserWrapper.class::cast)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Bad request"));
        reviewService.addReview(id,reviewModel,loggedUser);
    }

    @GetMapping("/{id}")
    public List<ReviewModelDTO> getReviewById (@PathVariable Long id){
        return reviewService.getReviewsForCarModel(id);
    }

    @GetMapping("/getAllReviews")
    public List<ReviewModelDTO> getAllReviews(){
        return reviewService.getAllReviews();
    }

    @PutMapping("/updateReview/{id}")
    public void updateComment(@PathVariable("id")Long id, @RequestParam Boolean isVulgar){
        reviewService.updateReview(id,isVulgar);
    }

    @DeleteMapping("/deleteReviews")
    public void deleteReviews(){
        reviewService.deleteReviews();
    }

    @DeleteMapping("/deleteById/{id}")
    public void deleteReviewById(@PathVariable Long id){
        reviewService.deleteReviewById(id);
    }
}


