package com.example.backend.Order;

import com.example.backend.Part.PartModel;
import com.example.backend.Part.PartRepository;
import com.example.backend.User.UserWrapper;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;

    private final PartRepository partRepository;

    private final OrderMapper orderMapper;

    public void addOrder(Long id, UserWrapper userWrapper, Integer partAmount){

        PartModel partModel = partRepository.findById(id).orElseThrow(() -> new UsernameNotFoundException("error"));
        OrderModel orderModel = new OrderModel();
        orderModel.setPartModel(partModel);
        orderModel.setOrderDate(Timestamp.from(Instant.now()));
        orderModel.setUserModel(userWrapper.getUserModel());
        orderModel.setPartAmount(partAmount);
        orderModel.setTotalPrice(partAmount * partModel.getPrice());
        orderRepository.save(orderModel);
    }

    public List<OrderDTO> getAllOrders(){

        List<OrderModel> orderModels = orderRepository.findAll();
        return orderModels.stream().map(orderMapper::mapEntityToDTO).collect(Collectors.toList());
    }

    public void deleteOrder(Long id){
        OrderModel orderModel = orderRepository.findById(id).orElseThrow(() -> new UsernameNotFoundException("Not found"));
        orderRepository.delete(orderModel);
    }
}
