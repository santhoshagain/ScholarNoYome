package com.scholarship.controller;

import com.scholarship.entity.Application;
import com.scholarship.service.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/applications") // Base path for all the application endpoints
public class ApplicationController {

    private final ApplicationService applicationService;

    @Autowired
    public ApplicationController(ApplicationService applicationService) {
        this.applicationService = applicationService;
    }

    // Endpoint to apply for a scholarship
    @PostMapping("/apply")
    public ResponseEntity<Application> applyForScholarship(@RequestBody Application application) {
        try {
            Application createdApplication = applicationService.applyForScholarship(application);
            return ResponseEntity.ok(createdApplication);
        } catch (Exception e) {
            System.err.println("Error applying for scholarship: " + e.getMessage());
            return ResponseEntity.status(500).body(null);
        }
    }

    // Endpoint to get all applications (for Admin to view)
    @GetMapping("/all")
    public ResponseEntity<List<Application>> getAllApplications() {
        List<Application> applications = applicationService.getAllApplications();
        return ResponseEntity.ok(applications);
    }
    
 // Fetch applications by studentId
    @GetMapping("/{studentId}")
    public ResponseEntity<List<Application>> getApplicationsByStudentId(@PathVariable int studentId) {
        List<Application> applications = applicationService.getApplicationsByStudentId(studentId);
        if (applications.isEmpty()) {
            return ResponseEntity.noContent().build(); // Return 204 if no applications found
        }
        return ResponseEntity.ok(applications);
    }

    // Endpoint to accept an application
    @PutMapping("/{id}/accept") // Remove "/apply" to match the correct path
    public ResponseEntity<Application> acceptApplication(@PathVariable Long id) {
        Application application = applicationService.acceptApplication(id);
        return ResponseEntity.ok(application);
    }

    // Endpoint to reject an application
    @PutMapping("/{id}/reject") // Remove "/apply" to match the correct path
    public ResponseEntity<Application> rejectApplication(@PathVariable Long id) {
        Application application = applicationService.rejectApplication(id);
        return ResponseEntity.ok(application);
    }
}
