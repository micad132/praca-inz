package com.example.backend.Post;

import com.example.backend.Image.ImageModel;
import com.example.backend.Image.ImageRepository;
import com.example.backend.Post.PostModelDTO;
import com.example.backend.User.UserWrapper;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class PostService {

    private final PostRepository postRepository;

    private final ImageRepository imageRepository;

    private final PostMapper postMapper;

    public void addPost(PostModelRequestDTO postModelRequestDTO, UserWrapper userWrapper){

        ImageModel imageModel = imageRepository.findById(postModelRequestDTO.imageId).orElseThrow(() -> new UsernameNotFoundException("not found"));
        PostModel postModel = postMapper.mapDTORequestToEntity(postModelRequestDTO);
        postModel.setImageModel(imageModel);
        postModel.setUserModel(userWrapper.getUserModel());
        postModel.setDate(Timestamp.from(Instant.now()));
        postRepository.save(postModel);
    }

    public List<PostModelDTO> getAllPosts(){
        return postRepository.findAll().stream().map(postMapper::mapEntityToDTO).collect(Collectors.toList());
    }

    public PostModelDTO getPostById(Long id){
        PostModel postModel = postRepository.findById(id).orElseThrow(() -> new UsernameNotFoundException("not found"));
        return postMapper.mapEntityToDTO(postModel);
    }

    public void deletePost(Long id){
        postRepository.deleteById(id);
    }
}
