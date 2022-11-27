package com.example.backend.Part;


import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class PartModelDTO {

    Long partId;
    String partName;
    Double partPrice;

}
