package com.example.backend.Order;

import com.example.backend.Part.PartModelDTO;
import lombok.Builder;
import lombok.Data;

import java.sql.Timestamp;

@Builder
@Data
public class OrderDTO {

    private Long orderId;
    private Timestamp orderDate;
    private String userNick;
    private PartModelDTO partModelDTO;

}
