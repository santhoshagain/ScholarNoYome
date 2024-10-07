package com.scholarship.config;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;

@Configuration
public class DataSourceConfig {

    @Autowired
    private EnvConfig envConfig;

    @Bean
    public DataSource dataSource() {
        HikariConfig hikariConfig = new HikariConfig();
        hikariConfig.setJdbcUrl(envConfig.getDbUrl());
        hikariConfig.setUsername(envConfig.getDbUsername());
        hikariConfig.setPassword(envConfig.getDbPassword());
        hikariConfig.setDriverClassName("com.mysql.cj.jdbc.Driver");
        return new HikariDataSource(hikariConfig);
    }
}
