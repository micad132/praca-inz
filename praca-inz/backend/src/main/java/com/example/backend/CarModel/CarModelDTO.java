package com.example.backend.CarModel;

import com.example.backend.Image.ImageModel;
import com.example.backend.Review.CarModelReview.ReviewModelDTO;
import lombok.Builder;
import lombok.Data;

import java.util.List;


@Data
@Builder
public class CarModelDTO {
    private Long carModelId;
    private String name;
    private Double price;
    private Double rating;
    private String description;
    private Double enginePower;
    private Double engineCapacity;
    private String gearbox;
    private String carBody;
    private String productionCountry;
    private List<ReviewModelDTO> reviewModels;
    private ImageModel imageModel;

}
