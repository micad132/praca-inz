package com.example.backend.Post;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class PostModelRequestDTO {

    Long imageId;
    String description;
    String title;
    String postCategory;

}
