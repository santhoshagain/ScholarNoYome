package com.scholarship.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.scholarship.entity.Scholarship;
import com.scholarship.service.ScholarshipService;

import java.util.List;

@RestController
@RequestMapping("/api/scholarships")
public class ScholarshipController {

    @Autowired
    private ScholarshipService scholarshipService;

    // Endpoint to fetch all scholarships
    @GetMapping
    public ResponseEntity<List<Scholarship>> getAllScholarships() {
        List<Scholarship> scholarships = scholarshipService.getAllScholarships();
        return ResponseEntity.ok(scholarships);
    }
}
