package com.example.backend.Commercial;

import com.example.backend.CarModel.CarModel;
import com.example.backend.CarModel.CarModelRepository;
import com.example.backend.User.UserModel;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class CommercialService {

    private final CommercialRepository commercialRepository;
    private final CarModelRepository carModelRepository;


    public void addCommercial(CommercialModel commercialModel){
        commercialRepository.save(commercialModel);
    }

    public void addCommercialForCarModel(CommercialModel commercialModel, String id){
        Optional<CarModel> carModel = Optional.of(carModelRepository.findById(Long.valueOf(id)).orElseThrow());
        carModel.ifPresent(commercialModel::setCarModel);
        commercialRepository.save(commercialModel);


    }

    public List<CommercialModel> getAllCommercials(){
        return commercialRepository.findAll();
    }

    public void deleteCommercialById(Long id){
        commercialRepository.deleteById(id);
    }
}
