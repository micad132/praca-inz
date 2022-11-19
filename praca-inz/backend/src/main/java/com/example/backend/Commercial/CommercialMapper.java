package com.example.backend.Commercial;

import com.example.backend.CarModel.CarModelMapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class CommercialMapper {


    private final CarModelMapper carModelMapper;

    public CommercialModel mapDTOToEntity(CommercialModelDTO commercialModelDTO){
        return CommercialModel.builder()
                .description(commercialModelDTO.getDescription())
                .name(commercialModelDTO.getName())
                .build();
    }

    public CommercialModelDTO mapEntityToDTO(CommercialModel commercialModel){
        return CommercialModelDTO.builder()
                .commercialId(commercialModel.getId())
                .name(commercialModel.getName())
                .description(commercialModel.getDescription())
                .carModelId(commercialModel.getCarModel().getId())
                .imageName(commercialModel.getCarModel().getImageModel().getName())
                .build();
    }
}
