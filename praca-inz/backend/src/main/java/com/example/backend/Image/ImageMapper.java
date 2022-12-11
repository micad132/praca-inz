package com.example.backend.Image;

import org.springframework.stereotype.Component;

@Component
public class ImageMapper {

    public ImageDTO mapImageModelToDTO(ImageModel imageModel){
        return ImageDTO
                .builder()
                .id(imageModel.getId())
                .imageName(imageModel.getName())
                .build();

    }
}
