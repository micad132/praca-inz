package com.example.backend.Part;

import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class PartService {

    private final PartRepository partRepository;

    private final PartMapper partMapper;

    public void addPart(PartModelDTO partModelDTO){

        PartModel partModel = partMapper.mapDTOToEntity(partModelDTO);
        partRepository.save(partModel);
    }

    public void deletePart(Long id){
        PartModel partModel = partRepository.findById(id).orElseThrow(() -> new UsernameNotFoundException("Not found"));
        partRepository.delete(partModel);
    }

    public void updatePart(PartModelDTO partModelDTO){
        PartModel partModel = partRepository.findById(partModelDTO.getPartId()).orElseThrow(() -> new UsernameNotFoundException("Not found"));
        partModel.setName(partModelDTO.getPartName());
        partModel.setPrice(partModelDTO.getPartPrice());
        partRepository.save(partModel);
    }

    public List<PartModelDTO> getAllParts(){
        List<PartModel> partModels = partRepository.findAll();
        return partModels.stream().map(partMapper::mapEntityToDTO).collect(Collectors.toList());
    }
}
