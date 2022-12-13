package com.example.backend.Post;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/v1/post")
@Controller
@AllArgsConstructor
public class PostController {

    private final PostService postService;

    @PostMapping("/addPost")
    public ResponseEntity<String> addPost(@RequestBody PostModelRequestDTO postModelRequestDTO){

        return ResponseEntity.ok("Successfully added!");
    }

    @GetMapping("/getAllPosts")
    public List<PostModelDTO> getAllPosts(){
        return postService.getAllPosts();
    }

    @DeleteMapping("/deletePost/{id}")
    public ResponseEntity<String> deletePost(@PathVariable ("id") Long id){
        postService.deletePost(id);
        return ResponseEntity.ok("Successfully deleted!");
    }


}
