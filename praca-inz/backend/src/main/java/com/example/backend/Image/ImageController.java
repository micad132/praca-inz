package com.example.backend.Image;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/v1/image")
@RestController
@AllArgsConstructor
public class ImageController {

    private final ImageService imageService;

    @PostMapping
    public void addImage(@RequestBody ImageModel imageModel){
        imageService.addImage(imageModel);
    }

    @GetMapping("/getAllImages")
    public List<ImageModel> getAllImages(){
        return imageService.getAllImages();
    }


}
