package com.example.backend.CarModel;

import com.example.backend.Review.ReviewMapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.stream.Collectors;

@Component
@AllArgsConstructor
public class CarModelMapper {

    private final ReviewMapper reviewMapper;

    public CarModel mapDTOToEntity(CarModelDTO carModelDTO){
        return CarModel.builder()
                .description(carModelDTO.getDescription())
                .build();
    }

    public CarModelDTO mapEntityToDTO(CarModel carModel){
        return CarModelDTO.builder()
                .carModelId(carModel.getId())
                .name(carModel.getName())
                .price(carModel.getPrice())
                .rating(carModel.getRating())
                .description(carModel.getDescription())
                .enginePower(carModel.getEnginePower())
                .engineCapacity(carModel.getEngineCapacity())
                .gearbox(carModel.getGearbox())
                .carBody(carModel.getCarBody())
                .productionCountry(carModel.getProductionCountry())
                .reviewModels(carModel.getReviewModels().stream().map(reviewMapper::mapEntityToDTO).collect(Collectors.toList()))
                .imageModel(carModel.getImageModel())
                .build();
    }
}
