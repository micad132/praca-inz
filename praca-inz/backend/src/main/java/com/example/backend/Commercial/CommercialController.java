package com.example.backend.Commercial;

import com.example.backend.CarModel.CarModel;
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

    @PostMapping("/{id}")
    public void addCommercialForCarModel(@RequestBody CommercialModelDTO commercialModelDTO, @PathVariable(value = "id") String id){


//        commercialService.addCommercial(commercialModel);
          commercialService.addCommercialForCarModel(commercialModelDTO,id);
    }

    @DeleteMapping("/delete/{carModelId}")
    public void deleteCommercial(@PathVariable(value = "carModelId")Long commercialId){
        commercialService.deleteCommercialById(commercialId);
    }

    @GetMapping("/getAllCommercials")
    public List<CommercialModelDTO> getAllCommercial(){
        return commercialService.getAllCommercials();
    }
}
