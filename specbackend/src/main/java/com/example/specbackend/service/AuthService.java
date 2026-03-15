package com.example.specbackend.service;

import com.example.specbackend.dto.LoginRequest;
import com.example.specbackend.dto.RegisterRequest;
import com.example.specbackend.model.User;

public interface AuthService {
User register(RegisterRequest request);
User login(LoginRequest request);
}
