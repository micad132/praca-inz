package com.example.backend.Post;

import com.example.backend.User.UserWrapper;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RequestMapping("/api/v1/post")
@RestController
@AllArgsConstructor
public class PostController {

    private final PostService postService;

    @PostMapping("/addPost")
    public ResponseEntity<String> addPost(@RequestBody PostModelRequestDTO postModelRequestDTO, Authentication authentication){

        UserWrapper loggedUser = Optional.ofNullable(authentication)
                .filter(f -> f.getPrincipal() instanceof UserWrapper)
                .map(Authentication::getPrincipal)
                .map(UserWrapper.class::cast)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Bad request"));
        postService.addPost(postModelRequestDTO,loggedUser);
        return ResponseEntity.ok("Successfully added!");
    }

    @GetMapping("/getAllPosts")
    public List<PostModelDTO> getAllPosts(){
        return postService.getAllPosts();
    }


    @GetMapping("/getPostById/{id}")
    public PostModelDTO getPostById(@PathVariable ("id") Long id){
        return postService.getPostById(id);
    }

    @DeleteMapping("/deletePost/{id}")
    public ResponseEntity<String> deletePost(@PathVariable ("id") Long id){
        postService.deletePost(id);
        return ResponseEntity.ok("Successfully deleted!");
    }


}
