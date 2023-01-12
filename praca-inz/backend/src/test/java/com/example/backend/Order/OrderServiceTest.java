package com.example.backend.Order;

import com.example.backend.Part.PartModel;
import com.example.backend.Part.PartRepository;
import com.example.backend.User.UserWrapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.BDDMockito.*;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class OrderServiceTest {

    @Autowired
    private OrderService orderService;

    @MockBean
    private OrderRepository orderRepository;

    @MockBean
    private PartRepository partRepository;

    @Test
    void shouldAddOrderToPart() {

        PartModel partModel = PartModel.builder()
                .id(1L)
                .name("Kierownica")
                .price(250D)
                .build();

        when(partRepository.findById(anyLong())).thenReturn(Optional.of(partModel));

        orderService.addOrder(1L, new UserWrapper(null), 2);

        verify(orderRepository,times(1)).save(any());
    }

    @Test
    void editOrder() {
    }

    @Test
    void shouldThrowExceptionWhenPartInOrderDoesNotExists() {

        when(partRepository.findById(anyLong())).thenReturn(Optional.empty());
        assertThrows(Exception.class, () -> {
            orderService.addOrder(1L, new UserWrapper(null), 3);
        });
    }
}