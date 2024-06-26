package com.example.backend.CarModel;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("api/v1/car")
@RestController
@AllArgsConstructor
public class CarModelController {

    private final CarService carService;

    @PostMapping
    public ResponseEntity<String> addCarModel(@RequestBody CarModelDTORequest carModelDTORequest){

        carService.addCarModel(carModelDTORequest);
        return ResponseEntity.ok("Successfully added");
    }

    @GetMapping("/getAllCarModels")
    public List<CarModelDTO> getAllCarModels(){
        return carService.getAllCarModels();
    }

    @GetMapping("/getCarModelById/{id}")
    public CarModelDTO getCarModelById(@PathVariable Long id){
        return carService.getCarModelById(id);
    }

    @DeleteMapping("/deleteAllCarModels")
    public void deleteAllCarModels(){
        carService.deleteAllCarModels();
    }

    @DeleteMapping("/deleteCarModelById/{id}")
    public ResponseEntity<String> deleteCarModelById(@PathVariable ("id") Long id){
        carService.deleteCarModelById(id);
        return ResponseEntity.ok("Successfully deleted");
    }

    @DeleteMapping("/deleteCarModelWithCommercial/{carId}/{commercialId}")
    public ResponseEntity<String> deleteCarModelWithCommercial(@PathVariable ("carId") Long carId, @PathVariable ("commercialId") Long commercialId){
        carService.deleteCarModelWithCommercial(carId,commercialId);
        return ResponseEntity.ok("Successfully deleted!");
    }

    @PutMapping("/updateCar")
    public ResponseEntity<String> updateCarModel(@RequestBody CarModelUpdateRequestDTO carModelUpdateRequestDTO){
        carService.updateCarModel(carModelUpdateRequestDTO);
        return ResponseEntity.ok("Successfully updated!");
    }

}



