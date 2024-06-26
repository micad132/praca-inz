package com.example.backend.Review.CarModelReview;

import com.example.backend.CarModel.CarModel;
import com.example.backend.CarModel.CarModelRepository;
import com.example.backend.Post.PostModel;
import com.example.backend.Post.PostRepository;
import com.example.backend.User.UserWrapper;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.Instant;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ReviewService {

    private final ReviewRepository reviewRepository;

    private final CarModelRepository carModelRepository;

    private final PostRepository postRepository;

    private final ReviewMapper reviewMapper;

    public List<ReviewModelDTO> getAllReviews(){
        return reviewRepository.findAll().stream().map(reviewMapper::mapEntityToDTO).collect(Collectors.toList());
    }

//    public List<ReviewModelForNewsDTO> getAllNewsReviews(){
//        return reviewRepository.findAll().stream().map(reviewMapper::mapEntityToReviewDTO).collect(Collectors.toList());
//    }

    public void addReview(Long id , ReviewModelDTO reviewModelDTO, UserWrapper userWrapper){

        CarModel carModel = carModelRepository.findById(id).orElseThrow(() -> new UsernameNotFoundException("Not found"));
        ReviewModel reviewModel1 = reviewMapper.mapDTOToEntity(reviewModelDTO);
        reviewModel1.setUserModel(userWrapper.getUserModel());
        reviewModel1.setCarModel(carModel);
        reviewModel1.setDate(Timestamp.from(Instant.now()));
        reviewModel1.setIsVulgar(false);
        reviewModel1.setIsCarModelReview(true);
        reviewRepository.save(reviewModel1);
    }

//    public void addReviewForNews(Long id , ReviewModelDTO reviewModelDTO, UserWrapper userWrapper){
//
//        PostModel postModel = postRepository.findById(id).orElseThrow(() -> new UsernameNotFoundException("Not found"));
//        ReviewModel reviewModel1 = reviewMapper.mapDTOToEntity(reviewModelDTO);
//        reviewModel1.setUserModel(userWrapper.getUserModel());
//        reviewModel1.setPostModel(postModel);
//        reviewModel1.setDate(Timestamp.from(Instant.now()));
//        reviewModel1.setIsVulgar(false);
//        reviewRepository.save(reviewModel1);
//    }

    public void updateReview(Long id, Boolean isVulgar){
        ReviewModel reviewModel = reviewRepository.findById(id).orElseThrow(() -> new UsernameNotFoundException("Not found"));
        reviewModel.setIsVulgar(isVulgar);
        reviewRepository.save(reviewModel);

    }


    public void deleteReviews(){
        reviewRepository.deleteAll();
    }

    public void deleteReviewById(Long id) {
        reviewRepository.deleteById(id);
    }

    public List<ReviewModelDTO> getReviewsForCarModel(Long id){
        CarModel carModel = carModelRepository.findById(id).orElseThrow(() -> new UsernameNotFoundException("Car model not found"));
        return carModel.getReviewModels()
                .stream()
                .map(reviewMapper::mapEntityToDTO)
                .sorted(Comparator.comparing(ReviewModelDTO::getDate))
                .collect(Collectors.toList());
    }
}
