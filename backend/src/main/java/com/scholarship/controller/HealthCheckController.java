package com.scholarship.controller;


import com.scholarship.repository.ScholarshipRepository;
import com.scholarship.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping({"","/"})  // This will map the base URL, such as /, to this controller
public class HealthCheckController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ScholarshipRepository scholarshipRepository;

    @GetMapping
    public String healthCheck() {
        long userCount = userRepository.count();  // Get the number of users
        long scholarshipCount = scholarshipRepository.count();  // Get the number of scholarships

        // Returning improved HTML response with styling
        return "<html>" +
                "<head>" +
                "<title>Server Status</title>" +
                "<style>" +
                "body {" +
                "  font-family: Arial, sans-serif;" +
                "  background-color: #f4f4f4;" +
                "  color: #333;" +
                "  text-align: center;" +
                "  margin: 0;" +
                "  padding: 0;" +
                "  display: flex;" +
                "  justify-content: center;" +
                "  align-items: center;" +
                "  height: 100vh;" +
                "}" +
                "h1 {" +
                "  color: #4CAF50;" +
                "  font-size: 36px;" +
                "}" +
                "p {" +
                "  font-size: 20px;" +
                "  margin: 10px 0;" +
                "}" +
                "div {" +
                "  background-color: #fff;" +
                "  padding: 20px;" +
                "  border-radius: 10px;" +
                "  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);" +
                "  width: 300px;" +
                "  text-align: left;" +
                "}" +
                "</style>" +
                "</head>" +
                "<body>" +
                "<div>" +
                "<h1>Server is up and running!</h1>" +
                "<p><strong>Total number of users:</strong> " + userCount + "</p>" +
                "<p><strong>Total number of scholarships available:</strong> " + scholarshipCount + "</p>" +
                "</div>" +
                "</body>" +
                "</html>";
    }
}
