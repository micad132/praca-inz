package com.example.backend.Image;

import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RequestMapping("/api/v1/image")
@RestController
@AllArgsConstructor
public class ImageController {

    private final ImageService imageService;

    @PostMapping
    public void addImage(@RequestBody ImageModel imageModel){
        imageService.addImage(imageModel);
    }

    @PostMapping("/upload/image")
    public void addImage(@RequestParam("image") MultipartFile file) throws IOException {
        imageService.addImage(file);
    }

    @GetMapping(path = {"/get/image/{name}"})
    public ResponseEntity<byte[]> getImage(@PathVariable("name") String name) throws IOException {

        final Optional<ImageModel> dbImage = imageService.getImageByName(name);

        return ResponseEntity
                .ok()
                .contentType(MediaType.valueOf(dbImage.get().getType()))
                .body(ImageUtility.decompressImage(dbImage.get().getImage()));
    }

    @GetMapping("/getAllImages")
    public List<ImageModel> getAllImages(){
        return imageService.getAllImages();
    }

    @DeleteMapping("/deleteAllImages")
    public void deleteAllImages(){
        imageService.deleteAllImages();
    }


}
