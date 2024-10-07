package com.scholarship.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.scholarship.entity.Scholarship;

@Repository
public interface ScholarshipRepository extends JpaRepository<Scholarship, Long> {
}
