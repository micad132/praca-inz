package com.example.backend.CarModel;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class CarService {

    private final CarModelRepository carModelRepository;

    private final CarModelMapper carModelMapper;

    public void addCarModel(CarModel carModel){
        carModelRepository.save(carModel);
    }

    public List<CarModelDTO> getAllCarModels(){
        return carModelRepository.findAll()
                .stream()
                .map(carModelMapper::mapEntityToDTO)
                .collect(Collectors.toList());
    }

    public CarModelDTO getCarModelById(Long carId){
        return carModelRepository.findById(carId).map(carModelMapper::mapEntityToDTO).orElseThrow(IllegalArgumentException::new);
    }

    public void deleteAllCarModels(){
        carModelRepository.deleteAll();
    }
}
