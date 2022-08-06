package com.example.backend.Commercial;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Commercial")
@Entity
public class CommercialModel {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "commercial_seq")
    @SequenceGenerator(name = "commercial_seq", allocationSize = 1)
    @Column(name = "id", nullable = false)
    private Long id;

    private String name;

    private String description;

    private String imgPath;
}
