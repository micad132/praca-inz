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

    private final ImageMapper imageMapper;

    @PostMapping
    public void addImage(@RequestBody ImageModel imageModel){
        imageService.addImage(imageModel);
    }

    @PostMapping("/upload/image")
    public ImageDTO addImage(@RequestParam("image") MultipartFile file) throws IOException {
        ImageModel imageModel = new ImageModel();
        imageModel.setName(file.getOriginalFilename());
        imageModel.setType(file.getContentType());
        imageModel.setImage(ImageUtility.compressImage(file.getBytes()));
        imageService.addImage(imageModel);
        return imageMapper.mapImageModelToDTO(imageModel);
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

    @DeleteMapping("/deleteImage/{id}")
    public void deleteImageById(@PathVariable ("id") Long id){
        imageService.deleteImageById(id);
    }


}
