package com.scholarship.repository;


import com.scholarship.entity.Application;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ApplicationRepository extends JpaRepository<Application, Long> {
    // You can add custom queries here if needed, like finding applications by user or scholarship
	@Query("SELECT a FROM Application a WHERE a.studentId = :studentId")
    List<Application> findApplicationsByStudentId(int studentId);
}
