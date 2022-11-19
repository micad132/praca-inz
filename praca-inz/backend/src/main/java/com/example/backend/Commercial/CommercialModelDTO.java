package com.example.backend.Commercial;

import com.example.backend.CarModel.CarModelDTO;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CommercialModelDTO {
    private Long commercialId;
    private String name;
    private String description;
    private Long carModelId;
    private String imageName;
}
