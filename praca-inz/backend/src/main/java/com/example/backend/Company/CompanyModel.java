package com.example.backend.Company;

import com.example.backend.Image.ImageModel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "company_model")
public class CompanyModel {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "company_model_seq")
    @SequenceGenerator(name = "company_model_seq", allocationSize = 1)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "city_name")
    private String cityName;

    @Column(name = "yea_r")
    private Integer yea_r;

    @Column(name = "street_name")
    private String streetName;

    @Column(name = "director_name")
    private String directorName;

    @Column(name = "additional_info", length = 500)
    private String additionalInfo;

    @OneToOne(orphanRemoval = true)
    @JoinColumn(name = "image_model_id")
    private ImageModel imageModel;

}