package com.example.backend.Order;

import com.example.backend.Part.PartMapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class OrderMapper {

    private final PartMapper partMapper;

    public OrderModel mapDTOToEntity(OrderDTO orderDTO){
        return OrderModel.builder()
                .id(orderDTO.getOrderId())
                .orderDate(orderDTO.getOrderDate())
                .partModel(partMapper.mapDTOToEntity(orderDTO.getPartModelDTO()))
                .build();
    }

    public OrderDTO mapEntityToDTO(OrderModel orderModel){
        return OrderDTO.builder()
                .orderId(orderModel.getId())
                .orderDate(orderModel.getOrderDate())
                .partModelDTO(partMapper.mapEntityToDTO(orderModel.getPartModel()))
                .userNick(orderModel.getUserModel().getName())
                .build();
    }
}
