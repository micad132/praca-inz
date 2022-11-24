package com.example.backend.Post;

import com.example.backend.User.UserWrapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.Instant;

@Service
@AllArgsConstructor
public class PostService {

    private final PostRepository postRepository;

    private final PostMapper postMapper;

    public void addPost(PostModelDTO postModelDTO, UserWrapper userWrapper){

        PostModel postModel = postMapper.mapDTOToEntity(postModelDTO);
        postModel.setUserModel(userWrapper.getUserModel());
        postModel.setDate(Timestamp.from(Instant.now()));
        postRepository.save(postModel);
    }
}
