package com.example.backend.Post;

import com.example.backend.User.UserWrapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

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

    public List<PostModelDTO> getAllPosts(){
        return postRepository.findAll().stream().map(postMapper::mapEntityToDTO).collect(Collectors.toList());
    }

    public void deletePost(Long id){
        postRepository.deleteById(id);
    }
}
