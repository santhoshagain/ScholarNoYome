package com.scholarship.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
    
    // Endpoint to add a new scholarship
    @PostMapping
    public ResponseEntity<Scholarship> addScholarship(@RequestBody Scholarship scholarship) {
        Scholarship savedScholarship = scholarshipService.addScholarship(scholarship);
        return ResponseEntity.ok(savedScholarship);
    }
    
 // Endpoint to update an existing scholarship
    @PutMapping("/{id}")
    public ResponseEntity<Scholarship> updateScholarship(@PathVariable Long id, @RequestBody Scholarship scholarship) {
        Scholarship updatedScholarship = scholarshipService.updateScholarship(id, scholarship);
        return ResponseEntity.ok(updatedScholarship);
    }

    // Endpoint to delete a scholarship by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteScholarship(@PathVariable Long id) {
        scholarshipService.deleteScholarship(id);
        return ResponseEntity.noContent().build();
    }
    
}


