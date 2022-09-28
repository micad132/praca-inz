package com.example.backend.Product;

import com.example.backend.Image.ImageModel;
import com.example.backend.User.UserModel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "product_model")
public class ProductModel {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "product_model_seq")
    @SequenceGenerator(name = "product_model_seq", allocationSize = 1)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "price", nullable = false)
    private Double price;

    @Column(name = "short_desc", nullable = false)
    private String short_desc;

    @ManyToOne
    @JoinColumn(name = "user_model_id")
    private UserModel userModel;

    @ManyToMany
    @JoinTable(name = "product_model_image_models",
            joinColumns = @JoinColumn(name = "product_model_id"),
            inverseJoinColumns = @JoinColumn(name = "image_models_id"))
    private List<ImageModel> imageModels = new ArrayList<>();

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        ProductModel that = (ProductModel) o;
        return id != null && Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }


}