package com.example.backend.CarModel;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("api/v1/car")
@RestController
@AllArgsConstructor
public class CarModelController {

    private final CarService carService;

    @PostMapping
    public void addCarModel(@RequestBody CarModel carModel){
        carService.addCarModel(carModel);
    }

    @GetMapping("/getAllCarModels")
    public List<CarModel> getAllCarModels(){
        return carService.getAllCarModels();
    }

}



