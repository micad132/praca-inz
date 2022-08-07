package com.example.backend.CarModel;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class CarService {

    private final CarModelRepository carModelRepository;

}
