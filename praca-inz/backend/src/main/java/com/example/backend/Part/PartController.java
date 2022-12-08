package com.example.backend.Part;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/v1/part")
@RestController
@AllArgsConstructor
public class PartController {

    private PartService partService;

    @PostMapping("/addPart")
    public ResponseEntity<String> addPart(@RequestBody PartModelDTO partModelDTO){
        partService.addPart(partModelDTO);
        return ResponseEntity.ok("Successfully added");
    }

    @DeleteMapping("/deletePart/{id}")
    public void deletePart(@PathVariable ("id") Long id){
        partService.deletePart(id);
    }

    @PutMapping("/updatePart")
    public ResponseEntity<String> updatePart(@RequestBody PartModelDTO partModelDTO){
        partService.updatePart(partModelDTO);
        return ResponseEntity.ok("Successfully updated!");
    }

    @GetMapping("/getAllParts")
    public ResponseEntity<List<PartModelDTO>> getAllParts(){
        return ResponseEntity.ok(partService.getAllParts());
    }
}
