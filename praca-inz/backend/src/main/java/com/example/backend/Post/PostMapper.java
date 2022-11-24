package com.example.backend.Post;

import com.example.backend.Review.ReviewMapper;
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
                .author(postModel.getUserModel().getName())
                .reviewModels(postModel.getReviewModels().stream().map(reviewMapper::mapEntityToDTO).collect(Collectors.toList()))
//                .imageSrc(postModel.getImageModel().getName())
                .imageModel(postModel.getImageModel())
                .build();
    }
}
