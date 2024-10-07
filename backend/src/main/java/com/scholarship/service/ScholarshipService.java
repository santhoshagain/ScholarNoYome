package com.scholarship.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.scholarship.entity.Scholarship;
import com.scholarship.repository.ScholarshipRepository;

import java.util.List;

@Service
public class ScholarshipService {

    @Autowired
    private ScholarshipRepository scholarshipRepository;

    public List<Scholarship> getAllScholarships() {
        return scholarshipRepository.findAll();
    }
}
