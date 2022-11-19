package com.example.backend.Commercial;

import com.example.backend.CarModel.CarModel;
import com.example.backend.CarModel.CarModelRepository;
import com.example.backend.User.UserModel;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class CommercialService {

    private final CommercialRepository commercialRepository;
    private final CarModelRepository carModelRepository;

    private final CommercialMapper commercialMapper;


    public void addCommercial(CommercialModel commercialModel){
        commercialRepository.save(commercialModel);
    }

    public void addCommercialForCarModel(CommercialModelDTO commercialModelDTO, String id){
        CarModel carModel = carModelRepository.findById(Long.valueOf(id)).orElseThrow(() -> new UsernameNotFoundException("nie ma"));
        CommercialModel commercialModel = commercialMapper.mapDTOToEntity(commercialModelDTO);
        commercialModel.setCarModel(carModel);
        commercialRepository.save(commercialModel);

    }

    public List<CommercialModelDTO> getAllCommercials(){

        return commercialRepository.findAll().stream().map(commercialMapper::mapEntityToDTO).collect(Collectors.toList());
    }

    public void deleteCommercialById(Long id){
        commercialRepository.deleteById(id);
    }
}
