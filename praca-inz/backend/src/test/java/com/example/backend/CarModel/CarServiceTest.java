package com.example.backend.CarModel;

import com.example.backend.Image.ImageModel;
import com.example.backend.Image.ImageRepository;
import com.example.backend.Image.ImageService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.BDDMockito.*;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class CarServiceTest {

    @MockBean
    private CarModelRepository carModelRepository;

    @MockBean
    private ImageRepository imageRepository;

    @Autowired
    private CarService carService;

    @Autowired
    private ImageService imageService;



    @Test
    void shouldAddCarModel() {

        ImageModel imageModel = ImageModel.builder()
                        .name("snow.jpg").id(1L).type("image/jpeg").build();
        imageService.addImage(imageModel);

        CarModelDTORequest carModelDTORequest = CarModelDTORequest.builder()
                .name("BMW")
                .description("test")
                .carBody("sedan")
                .engineCapacity(2.5)
                .enginePower(250D)
                .gearbox("automatyczna")
                .imageId(imageModel.getId())
                .price(25000D)
                .productionCountry("Poland")
                .rating(2.5)
                .build();
        when(imageRepository.findById(1L)).thenReturn(Optional.of(ImageModel.builder().build()));
        carService.addCarModel(carModelDTORequest);
        verify(carModelRepository,times(1)).save(any());
    }

    @Test
    void shouldThrowExceptionWhenThereIsNoImageForCar(){

        CarModelDTORequest carModelDTORequest = CarModelDTORequest.builder()
                .name("BMW")
                .description("test")
                .carBody("sedan")
                .engineCapacity(2.5)
                .enginePower(250D)
                .gearbox("automatyczna")
                .price(25000D)
                .productionCountry("Poland")
                .rating(2.5)
                .build();
        when(imageRepository.findById(anyLong())).thenReturn(Optional.empty());
        assertThrows(Exception.class, () -> {
            carService.addCarModel(carModelDTORequest);
        });
    }

    @Test
    void shouldDeleteCarModel() {

        when(carModelRepository.findById(anyLong())).thenReturn(Optional.ofNullable(CarModel.builder().build()));
        carService.deleteCarModelById(anyLong());
        verify(carModelRepository, times(1)).deleteById(anyLong());

    }
}