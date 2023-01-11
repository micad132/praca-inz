package com.example.backend.Review.PostModelReview;

import com.example.backend.Post.PostModel;
import com.example.backend.Post.PostModelRequestDTO;
import com.example.backend.Post.PostRepository;
import com.example.backend.Review.CarModelReview.ReviewModelDTO;
import com.example.backend.User.UserWrapper;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.Instant;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@Service
public class PostModelReviewService {

    private final PostModelReviewRepository postModelReviewRepository;

    private final PostRepository postRepository;

    private final PostModelReviewMapper postModelReviewMapper;


    public void addPostReview(Long id, PostModelReviewRequestDTO postModelReviewRequestDTO, UserWrapper userWrapper){
        PostModel  postModel = postRepository.findById(id).orElseThrow(() -> new UsernameNotFoundException("Not found"));
        PostModelReview postModelReview = postModelReviewMapper.mapDTOToEntity(postModelReviewRequestDTO);
        postModelReview.setPostModel(postModel);
        postModelReview.setDate(Timestamp.from(Instant.now()));
        postModelReview.setIsVulgar(false);
        postModelReview.setIsCarModelReview(false);
        postModelReview.setUserModel(userWrapper.getUserModel());
        postModelReviewRepository.save(postModelReview);
    }

    public List<PostModelReviewDTO> getAllPostReviews(){
        return postModelReviewRepository.findAll().stream().map(postModelReviewMapper::mapEntityToDTO).collect(Collectors.toList());
    }

    public List<PostModelReviewDTO> getPostReviews(Long id){
        PostModel  postModel = postRepository.findById(id).orElseThrow(() -> new UsernameNotFoundException("Not found"));
        return postModel.getPostModelReviews()
                .stream()
                .map(postModelReviewMapper::mapEntityToDTO)
                .sorted(Comparator.comparing(PostModelReviewDTO::getDate))
                .collect(Collectors.toList());
    }

    public void updatePostReview(Long id, Boolean isVulgar){
        PostModelReview postModelReview = postModelReviewRepository.findById(id).orElseThrow(() -> new UsernameNotFoundException("not found"));
        postModelReview.setIsVulgar(isVulgar);
        postModelReviewRepository.save(postModelReview);
    }

    public void deletePostReviewById(Long id){
        postModelReviewRepository.deleteById(id);
    }
}
