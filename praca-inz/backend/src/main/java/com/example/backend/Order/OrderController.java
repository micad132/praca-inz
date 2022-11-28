package com.example.backend.Order;

import com.example.backend.User.UserWrapper;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RequestMapping("/api/v1/order")
@AllArgsConstructor
@RestController
public class OrderController {

    private OrderService orderService;

    @PostMapping("/addOrder/{id}")
    public ResponseEntity<String> addOrder(@PathVariable Long id, Authentication authentication){

        UserWrapper loggedUser = Optional.ofNullable(authentication)
                .filter(f -> f.getPrincipal() instanceof UserWrapper)
                .map(Authentication::getPrincipal)
                .map(UserWrapper.class::cast)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Bad request"));
        orderService.addOrder(id, loggedUser);
        return ResponseEntity.ok("Successfully added");
    }

    @GetMapping("/getAllOrders")
    public ResponseEntity<List<OrderDTO>> getAllOrders(){
        return ResponseEntity.ok(orderService.getAllOrders());
    }

}
