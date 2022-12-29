package com.example.backend.CarModel;

import com.example.backend.Commercial.CommercialModel;
import com.example.backend.Commercial.CommercialRepository;
import com.example.backend.Image.ImageModel;
import com.example.backend.Image.ImageRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class CarService {

    private final CarModelRepository carModelRepository;

    private final ImageRepository imageRepository;

    private final CommercialRepository commercialRepository;

    private final CarModelMapper carModelMapper;

    public void addCarModel(CarModelDTORequest carModelDTORequest){
        ImageModel imageModel = imageRepository.findById(carModelDTORequest.imageId).orElseThrow(() -> new UsernameNotFoundException("not found"));
        CarModel carModel = carModelMapper.mapDTORequestToEntity(carModelDTORequest);
        carModel.setImageModel(imageModel);
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

    public void deleteCarModelById(Long id){
        carModelRepository.deleteById(id);
    }

    public void deleteCarModelWithCommercial(Long carId, Long commercialId) {
        commercialRepository.deleteById(commercialId);
        carModelRepository.deleteById(carId);
    }
}
