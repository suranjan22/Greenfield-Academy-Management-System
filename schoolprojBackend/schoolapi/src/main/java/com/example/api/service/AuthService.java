package com.example.api.service;

import com.example.api.dto.LoginRequest;
import com.example.api.dto.LoginResponse;
import com.example.api.model.User;
import com.example.api.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    public LoginResponse login(LoginRequest request) {
        User user = userRepository.findByEmail(request.getEmail()).orElse(null);

        if (user == null) {
            return new LoginResponse(false, "User not found", null, null);
        }

        if (!user.getPassword().equals(request.getPassword())) {
            return new LoginResponse(false, "Invalid password", null, null);
        }

        if (!user.getRole().name().equalsIgnoreCase(request.getRole())) {
            return new LoginResponse(false, "Invalid role selected", null, null);
        }

        return new LoginResponse(true, "Login successful", user.getEmail(), user.getRole().name());
    }
}
