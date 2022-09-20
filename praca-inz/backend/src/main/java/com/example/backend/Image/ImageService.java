package com.example.backend.Image;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ImageService {

    private  final ImageRepository imageRepository;

    public void addImage(ImageModel imageModel){
        imageRepository.save(imageModel);
    }

    public List<ImageModel> getAllImages(){
        return imageRepository.findAll();
    }
}
