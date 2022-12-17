package com.example.backend.Review.PostModelReview;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostModelReviewRepository extends JpaRepository<PostModelReview, Long> {
}
