package com.scholarship.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service
public class MyService {

    private final String dbUrl;
    private final String dbUsername;
    private final String dbPassword;

    @Autowired
    public MyService(@Qualifier("dbUrl") String dbUrl, 
                     @Qualifier("dbUsername") String dbUsername, 
                     @Qualifier("dbPassword") String dbPassword) {
        this.dbUrl = dbUrl;
        this.dbUsername = dbUsername;
        this.dbPassword = dbPassword;
    }

    // Your service methods here
}
