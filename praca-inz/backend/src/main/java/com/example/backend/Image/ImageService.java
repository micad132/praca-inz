package com.example.backend.Image;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class ImageService {

    private  final ImageRepository imageRepository;
}
