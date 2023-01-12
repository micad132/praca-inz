package com.example.backend.Review;

import com.example.backend.CarModel.CarModel;
import com.example.backend.CarModel.CarModelRepository;
import com.example.backend.Post.PostRepository;
import com.example.backend.Review.CarModelReview.ReviewModel;
import com.example.backend.Review.CarModelReview.ReviewModelDTO;
import com.example.backend.Review.CarModelReview.ReviewRepository;
import com.example.backend.Review.CarModelReview.ReviewService;
import com.example.backend.Review.PostModelReview.PostModelReviewRepository;
import com.example.backend.Review.PostModelReview.PostModelReviewService;
import com.example.backend.User.UserModel;
import com.example.backend.User.UserRepository;
import com.example.backend.User.UserWrapper;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.sql.Timestamp;
import java.time.Instant;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.BDDMockito.*;

@SpringBootTest
public class ReviewServiceTest {

    @MockBean
    private ReviewRepository reviewRepository;

    @MockBean
    private PostModelReviewRepository postModelReviewRepository;

    @MockBean
    private CarModelRepository carModelRepository;

    @MockBean
    private PostRepository postRepository;

    @MockBean
    private UserRepository userRepository;

    @Autowired
    private ReviewService reviewService;

    @Autowired
    private PostModelReviewService postModelReviewService;

    @Test
    void shouldAddReviewToCarModel(){

        CarModel carModel = CarModel.builder().id(1L).build();
        UserModel userModel = UserModel.builder().id(1L).name("test").build();

        when(carModelRepository.findById(anyLong())).thenReturn(Optional.of(carModel));
        when(userRepository.findById(anyLong())).thenReturn(Optional.of(userModel));
        ReviewModelDTO reviewModelDTO = ReviewModelDTO.builder()
                .reviewModelId(1L)
                .description("testtest")
                .rate(2.5)
                .date(Timestamp.from(Instant.now()))
                .carModelId(carModel.getId())
                .userNick(userModel.getName())
                .isVulgar(false)
                .isCarModelReview(false)
                .reviewHeader("Test komentarz")
                .build();

        reviewService.addReview(1L,reviewModelDTO,new UserWrapper(userModel));

        verify(reviewRepository, times(1)).save(any());
    }
}
