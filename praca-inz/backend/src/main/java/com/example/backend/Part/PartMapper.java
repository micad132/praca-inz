package com.example.backend.Part;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class PartMapper {

    public PartModel mapDTOToEntity(PartModelDTO partModelDTO){
        return PartModel.builder()
                .id(partModelDTO.getPartId())
                .name(partModelDTO.getPartName())
                .price(partModelDTO.getPartPrice())
                .build();
    }

    public PartModelDTO mapEntityToDTO(PartModel partModel){
        return PartModelDTO.builder()
                .partId(partModel.getId())
                .partPrice(partModel.getPrice())
                .partName(partModel.getName())
                .build();
    }
}
