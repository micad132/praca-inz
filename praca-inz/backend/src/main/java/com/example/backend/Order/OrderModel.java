package com.example.backend.Order;

import com.example.backend.Product.ProductModel;
import com.example.backend.User.UserModel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.LinkedHashSet;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "order_model")
public class OrderModel {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "order_model_seq")
    @SequenceGenerator(name = "order_model_seq", allocationSize = 1)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "delivery_start", nullable = false)
    private Timestamp deliveryStart;

    @Column(name = "delivery_end", nullable = false)
    private Timestamp deliveryEnd;

    @Column(name = "status", nullable = false)
    private String status;



    @ManyToMany
    @JoinTable(name = "order_model_product_models",
            joinColumns = @JoinColumn(name = "order_model_id"),
            inverseJoinColumns = @JoinColumn(name = "product_models_id"))
    private Set<ProductModel> productModels = new LinkedHashSet<>();

}