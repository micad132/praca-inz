package com.example.backend.Review.PostModelReview;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api/v1/postreview")
@AllArgsConstructor
@RestController
public class PostModelReviewController {

    private final PostModelReviewService postModelReviewService;


}
