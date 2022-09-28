package com.example.backend.Image;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ImageService {

    private  final ImageRepository imageRepository;

    public void addImage(ImageModel imageModel){
        imageRepository.save(imageModel);
    }

    public void addImage(MultipartFile file) throws IOException {
        imageRepository.save(ImageModel.builder()
                .name(file.getOriginalFilename())
                .type(file.getContentType())
                .image(ImageUtility.compressImage(file.getBytes())).build());
    }

    public Optional<ImageModel> getImageByName(String name){
        return imageRepository.findByName(name);
    }

    public List<ImageModel> getAllImages(){
        return imageRepository.findAll();
    }
}
