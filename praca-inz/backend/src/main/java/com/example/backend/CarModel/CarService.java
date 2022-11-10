package com.example.backend.CarModel;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class CarService {

    private final CarModelRepository carModelRepository;

    public void addCarModel(CarModel carModel){
        carModelRepository.save(carModel);
    }

    public List<CarModel> getAllCarModels(){
        return carModelRepository.findAll();
    }

    public CarModel getCarModelById(Long carId){
        return carModelRepository.findById(carId).orElseThrow(IllegalArgumentException::new);
    }

    public void deleteAllCarModels(){
        carModelRepository.deleteAll();
    }
}
