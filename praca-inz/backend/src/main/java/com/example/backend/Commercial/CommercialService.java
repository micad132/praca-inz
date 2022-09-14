package com.example.backend.Commercial;

import com.example.backend.User.UserModel;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class CommercialService {

    private final CommercialRepository commercialRepository;


    public void addCommercial(CommercialModel commercialModel){
        commercialRepository.save(commercialModel);
    }

    public List<CommercialModel> getAllCommercials(){
        return commercialRepository.findAll();
    }

    public void deleteCommercialById(Long id){
        commercialRepository.deleteById(id);
    }
}
