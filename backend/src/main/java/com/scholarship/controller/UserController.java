package com.scholarship.controller;


import com.scholarship.entity.User;
import com.scholarship.repository.UserRepository;
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

    // Signup endpoint
    @PostMapping("/signup")
    public ResponseEntity<Object> signup(@RequestBody User user) {
        // Check if email is already taken
        if (userRepository.findByEmail(user.getEmail()) != null) {
            return new ResponseEntity<>(
                "{\"message\": \"Email already in use\"}",
                HttpStatus.CONFLICT
            );
        }

        // Save the user to the database
        userRepository.save(user);

        return new ResponseEntity<>(
            "{\"message\": \"Signup successful. You can now log in.\"}",
            HttpStatus.OK
        );
    }

    // Login endpoint
    @PostMapping("/login")
    public ResponseEntity<Object> login(@RequestBody User loginUser) {
        User user = userRepository.findByEmail(loginUser.getEmail());
        if (user == null || !user.getPassword().equals(loginUser.getPassword())) {
            return new ResponseEntity<>(
                "{\"message\": \"Invalid credentials\"}",
                HttpStatus.UNAUTHORIZED
            );
        }
        return new ResponseEntity<>(
            "{\"message\": \"Login successful\"}",
            HttpStatus.OK
        );
    }
}
