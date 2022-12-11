package com.example.backend.Image;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class ImageDTO {
    private Long id;
    private String imageName;
}
