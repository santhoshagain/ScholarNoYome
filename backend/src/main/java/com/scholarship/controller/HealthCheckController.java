package com.scholarship.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthCheckController {

    @GetMapping("/")
    public String healthCheck() {
        return "ScholarNoyome server is up and running. This is the backend server.\n" +
               "This is the frontend link: https://scholar-no-yome.vercel.app/";
    }
}