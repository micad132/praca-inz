package com.example.backend.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfigurationSource;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(
            HttpSecurity httpSecurity,
            CorsConfigurationSource corsConfigurationSource
    ) throws Exception {

        httpSecurity
                .formLogin()
                .loginProcessingUrl("/login")
                .defaultSuccessUrl("http://localhost:3000")
                .failureUrl("http://localhost:3000/failed")
                .loginPage("http://localhost:3000/login")
                .and()
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeRequests(auth -> {
                    auth.antMatchers("/").permitAll();
                    auth.antMatchers("/user").hasRole("USER");
                    auth.antMatchers("/admin").hasRole("ADMIN");

                })
                .httpBasic(Customizer.withDefaults())
                .headers()
                .frameOptions().disable();
        httpSecurity.cors().configurationSource(corsConfigurationSource);

        return httpSecurity.build();
    }



}