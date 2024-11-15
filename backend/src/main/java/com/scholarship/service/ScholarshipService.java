package com.scholarship.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.scholarship.entity.Scholarship;
import com.scholarship.repository.ScholarshipRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ScholarshipService {

    @Autowired
    private ScholarshipRepository scholarshipRepository;

    public List<Scholarship> getAllScholarships() {
        return scholarshipRepository.findAll();
    }
    
    public Scholarship addScholarship(Scholarship scholarship) {
        return scholarshipRepository.save(scholarship);
    }
    
 // Method to update an existing scholarship
    public Scholarship updateScholarship(Long id, Scholarship scholarship) {
        Optional<Scholarship> existingScholarship = scholarshipRepository.findById(id);
        if (existingScholarship.isPresent()) {
            Scholarship updatedScholarship = existingScholarship.get();
            updatedScholarship.setName(scholarship.getName());
            updatedScholarship.setDescription(scholarship.getDescription());
            updatedScholarship.setAmount(scholarship.getAmount());
            return scholarshipRepository.save(updatedScholarship);
        }
        return null; // Return null or throw an exception if not found
    }

    // Method to delete a scholarship by ID
    public void deleteScholarship(Long id) {
        scholarshipRepository.deleteById(id);
    }
    
}
