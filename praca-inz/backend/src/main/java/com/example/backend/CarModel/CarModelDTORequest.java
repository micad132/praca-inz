package com.example.backend.CarModel;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CarModelDTORequest {
    Long imageId;
    String carBody;
    String description;
    Double engineCapacity;
    Double enginePower;
    String gearbox;
    String name;
    Double price;
    String productionCountry;
    Double rating;
}
