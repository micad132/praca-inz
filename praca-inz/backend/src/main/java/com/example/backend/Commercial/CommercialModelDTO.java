package com.example.backend.Commercial;

import com.example.backend.CarModel.CarModelDTO;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CommercialDTO {
    private Long commercialId;
    private String name;
    private String description;
    private CarModelDTO carModelDTO;
}
