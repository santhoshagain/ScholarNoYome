package com.scholarship.controller;


import com.scholarship.entity.User;
import com.scholarship.repository.UserRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    
    @GetMapping({"","/"})
    public String healthCheck() {
        // Fetch some data from the database
        List<User> users = userRepository.findAll();  // Example to fetch all users

        // You can also return data from the database in JSON format
        if (users.isEmpty()) {
            return "No users found in the database";
        } else {
            return "Number of users in the database: " + users.size();
        }
    }

 // Signup endpoint
    @PostMapping("/signup")
    public ResponseEntity<Object> signup(@RequestBody User user) {
        if (userRepository.findByEmail(user.getEmail()) != null) {
            return new ResponseEntity<>(
                "{\"message\": \"Email already in use\"}",
                HttpStatus.CONFLICT
            );
        }

        // Save the user with role
        userRepository.save(user);

        return new ResponseEntity<>(
            "{\"message\": \"Signup successful. You can now log in.\"}",
            HttpStatus.OK
        );
    }



    @PostMapping("/login")
    public ResponseEntity<Object> login(@RequestBody User loginUser) {
        // Retrieve the user by email
        User user = userRepository.findByEmail(loginUser.getEmail());

        // Check if user exists and password matches
        if (user == null || !user.getPassword().equals(loginUser.getPassword())) {
            return new ResponseEntity<>(
                "{\"message\": \"Invalid credentials\"}",
                HttpStatus.UNAUTHORIZED
            );
        }

        // Prepare a response with role information
        Map<String, Object> responseBody = new HashMap<>();
        responseBody.put("message", "Login successful");
        responseBody.put("role", user.getRole());

        return new ResponseEntity<>(responseBody, HttpStatus.OK);
    }

}
