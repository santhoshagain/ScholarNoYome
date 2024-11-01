package com.scholarship.config;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.beans.factory.annotation.Qualifier;

@Configuration
public class EnvConfig {

    private final Dotenv dotenv;

    public EnvConfig() {
        this.dotenv = Dotenv.load();
    }

    @Bean
    @Qualifier("dbUrl")
    public String getDbUrl() {
        return dotenv.get("DB_URL");
    }

    @Bean
    @Qualifier("dbUsername")
    public String getDbUsername() {
        return dotenv.get("DB_USERNAME");
    }

    @Bean
    @Qualifier("dbPassword")
    public String getDbPassword() {
        return dotenv.get("DB_PASSWORD");
    }
    
    @Bean
    @Qualifier("frontendUrl")
    public String getFrontendUrl() {
        return dotenv.get("FRONTEND_URL");
    }
}
