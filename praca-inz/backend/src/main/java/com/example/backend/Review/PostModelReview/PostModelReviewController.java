package com.example.backend.Review.PostModelReview;

import com.example.backend.Post.PostModelRequestDTO;
import com.example.backend.User.UserWrapper;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RequestMapping("/api/v1/postreview")
@AllArgsConstructor
@RestController
public class PostModelReviewController {

    private final PostModelReviewService postModelReviewService;


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

    @PostMapping("/addPostReview/{id}")
    public ResponseEntity<String> addPostReview(@PathVariable ("id") Long id,@RequestBody PostModelReviewRequestDTO postModelReviewRequestDTO, Authentication authentication) {
        UserWrapper loggedUser = Optional.ofNullable(authentication)
                .filter(f -> f.getPrincipal() instanceof UserWrapper)
                .map(Authentication::getPrincipal)
                .map(UserWrapper.class::cast)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Bad request"));
        postModelReviewService.addPostReview(id,postModelReviewRequestDTO,loggedUser);
        return ResponseEntity.ok("Successfully added!");
    }

    @GetMapping("/getAllPostReviews")
    public List<PostModelReviewDTO> getAllPostReviews(){
        return postModelReviewService.getAllPostReviews();
    }

    @GetMapping("/getPostReviews/{id}")
    public List<PostModelReviewDTO> getPostReviews(@PathVariable ("id") Long id){
        return postModelReviewService.getPostReviews(id);
    }

    @DeleteMapping("/deletePostReview/{id}")
    public ResponseEntity<String> deletePostReviewById(@PathVariable ("id") Long id){
        postModelReviewService.deletePostReviewById(id);
        return ResponseEntity.ok("Successfully deleted!");
    }

}
