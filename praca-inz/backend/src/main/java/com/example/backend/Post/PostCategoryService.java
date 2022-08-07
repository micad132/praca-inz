package com.example.backend.Post;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class PostCategoryService {

    private final PostCategoryRepository postCategoryRepository;
}
