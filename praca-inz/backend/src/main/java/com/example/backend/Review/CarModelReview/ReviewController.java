package com.example.backend.Review.CarModelReview;

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
    public void addReview(@PathVariable Long id, @RequestBody ReviewModelDTO reviewModel, Authentication authentication){
        UserWrapper loggedUser = Optional.ofNullable(authentication)
                .filter(f -> f.getPrincipal() instanceof UserWrapper)
                .map(Authentication::getPrincipal)
                .map(UserWrapper.class::cast)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Bad request"));
        reviewService.addReview(id,reviewModel,loggedUser);
    }

//    @PostMapping("/addReviewForNews/{id}")
//    public ResponseEntity<String> addReviewForNews(@PathVariable Long id, @RequestBody ReviewModelDTO reviewModelDTO, Authentication authentication){
//        UserWrapper loggedUser = Optional.ofNullable(authentication)
//                .filter(f -> f.getPrincipal() instanceof UserWrapper)
//                .map(Authentication::getPrincipal)
//                .map(UserWrapper.class::cast)
//                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Bad request"));
//        reviewService.addReviewForNews(id,reviewModelDTO,loggedUser);
//        return ResponseEntity.ok("Successfully added!");
//    }

    @GetMapping("/{id}")
    public List<ReviewModelDTO> getReviewById (@PathVariable Long id){
        return reviewService.getReviewsForCarModel(id);
    }

    @GetMapping("/getAllReviews")
    public List<ReviewModelDTO> getAllReviews(){
        return reviewService.getAllReviews();
    }

//    @GetMapping("/getAllNewsReviews")
//    public List<ReviewModelForNewsDTO> getAllNewsReviews(){
//        return reviewService.getAllNewsReviews();
//    }

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


