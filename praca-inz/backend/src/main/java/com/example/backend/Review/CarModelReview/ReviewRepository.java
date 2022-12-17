package com.example.backend.Review.CarModelReview;

import com.example.backend.Review.CarModelReview.ReviewModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewRepository extends JpaRepository<ReviewModel,Long> {
}
