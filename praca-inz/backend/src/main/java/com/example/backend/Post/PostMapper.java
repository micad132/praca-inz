package com.example.backend.Post;

import com.example.backend.Post.ResponseDTO.PostModelDTO;
import com.example.backend.Review.CarModelReview.ReviewMapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.stream.Collectors;

@AllArgsConstructor
@Component
public class PostMapper {

    private final ReviewMapper reviewMapper;


    public PostModel mapDTOToEntity(PostModelDTO postModelDTO){
        return PostModel.builder()
                .description(postModelDTO.getDescription())
                .title(postModelDTO.getTitle())
                .imageModel(postModelDTO.getImageModel())
                .build();
    }

    public PostModelDTO mapEntityToDTO(PostModel postModel){
        return PostModelDTO.builder()
                .postId(postModel.getId())
                .title(postModel.getTitle())
                .description(postModel.getDescription())
                .date(postModel.getDate())
                .postCategory(postModel.getPostCategories().toString())
                .author(postModel.getUserModel().getName())
                .reviewModels(postModel.getReviewModels().stream().map(reviewMapper::mapEntityToDTO).collect(Collectors.toList()))
//                .imageSrc(postModel.getImageModel().getName())
                .imageModel(postModel.getImageModel())
                .build();
    }

    public PostModel mapDTORequestToEntity(PostModelRequestDTO postModelRequestDTO){
        return PostModel.builder()
                .description(postModelRequestDTO.getDescription())
                .title(postModelRequestDTO.getTitle())
                .postCategories(PostCategories.valueOf(postModelRequestDTO.getPostCategory()))
                .build();
    }
}
