package com.example.backend.Order;

import com.example.backend.Part.PartModel;
import com.example.backend.User.UserModel;
import lombok.*;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.LinkedHashSet;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@Entity
@Table(name = "order_model")
public class OrderModel {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "order_model_seq")
    @SequenceGenerator(name = "order_model_seq", allocationSize = 1)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "order_date", nullable = false)
    private Timestamp orderDate;


    @ManyToOne
    @JoinColumn(name = "user_model_id")
    private UserModel userModel;

    @ManyToOne
    @JoinColumn(name = "part_model_id")
    private PartModel partModel;

}