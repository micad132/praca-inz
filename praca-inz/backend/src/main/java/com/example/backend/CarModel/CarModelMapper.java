package com.example.backend.CarModel;

import com.example.backend.Review.CarModelReview.ReviewMapper;
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

    public CarModel mapDTORequestToEntity(CarModelDTORequest carModelDTORequest){
        return CarModel.builder()
                .carBody(carModelDTORequest.getCarBody())
                .description(carModelDTORequest.getDescription())
                .engineCapacity(carModelDTORequest.getEngineCapacity())
                .enginePower(carModelDTORequest.getEnginePower())
                .gearbox(carModelDTORequest.getGearbox())
                .name(carModelDTORequest.getName())
                .price(carModelDTORequest.getPrice())
                .productionCountry(carModelDTORequest.getProductionCountry())
                .rating(carModelDTORequest.getRating())
                .build();
    }

    public CarModel mapUpdateRequestDTOToEntity(CarModelUpdateRequestDTO carModelUpdateRequestDTO){
        return CarModel.builder()
                .id(carModelUpdateRequestDTO.getCarId())
                .carBody(carModelUpdateRequestDTO.getCarBody())
                .description(carModelUpdateRequestDTO.getDescription())
                .engineCapacity(carModelUpdateRequestDTO.getEngineCapacity())
                .enginePower(carModelUpdateRequestDTO.getEnginePower())
                .gearbox(carModelUpdateRequestDTO.getGearbox())
                .name(carModelUpdateRequestDTO.getName())
                .price(carModelUpdateRequestDTO.getPrice())
                .productionCountry(carModelUpdateRequestDTO.getProductionCountry())
                .rating(carModelUpdateRequestDTO.getRating())
                .build();
    }
}
