package com.scholarship.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.scholarship.entity.Application;
import com.scholarship.repository.ApplicationRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ApplicationService {

    @Autowired
    private ApplicationRepository applicationRepository;

    // Get all applications
    public List<Application> getAllApplications() {
        return applicationRepository.findAll();
    }
    
 // Fetch applications by studentId
    public List<Application> getApplicationsByStudentId(int studentId) {
        return applicationRepository.findApplicationsByStudentId(studentId);
    }
    // Accept an application
    public Application acceptApplication(Long id) {
        Optional<Application> applicationOptional = applicationRepository.findById(id);
        if (applicationOptional.isPresent()) {
            Application application = applicationOptional.get();
            application.setStatus("Accepted");  // Update status to "Accepted"
            return applicationRepository.save(application);  // Save to database
        }
        throw new RuntimeException("Application not found with id: " + id);
    }

    // Reject an application
    public Application rejectApplication(Long id) {
        Optional<Application> applicationOptional = applicationRepository.findById(id);
        if (applicationOptional.isPresent()) {
            Application application = applicationOptional.get();
            application.setStatus("Rejected");  // Update status to "Rejected"
            return applicationRepository.save(application);  // Save to database
        }
        throw new RuntimeException("Application not found with id: " + id);
    }

    // Apply for a scholarship (create a new application)
    public Application applyForScholarship(Application application) {
        application.setStatus("Pending");  // Default status when applying
        return applicationRepository.save(application);  // Save the new application to the database
    }
}
