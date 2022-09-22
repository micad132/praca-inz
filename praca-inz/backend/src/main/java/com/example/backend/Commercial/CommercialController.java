package com.example.backend.Commercial;

import com.example.backend.User.UserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/v1/commercial")
@RestController
public class CommercialController {

    private final CommercialService commercialService;


    @Autowired
    public CommercialController(CommercialService commercialService) {
        this.commercialService = commercialService;
    }

    @PostMapping
    public void addCommercial(@RequestBody CommercialModel commercialModel){
        commercialService.addCommercial(commercialModel);
    }

    @DeleteMapping("/{carModelId}")
    public void deleteCommercial(@PathVariable(value = "carModelId")Long userId){
        commercialService.deleteCommercialById(userId);
    }

    @GetMapping("/getAllCommercials")
    public List<CommercialModel> getAllCommercial(){
        return commercialService.getAllCommercials();
    }
}
