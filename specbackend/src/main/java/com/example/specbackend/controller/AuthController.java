package com.example.specbackend.controller;

import com.example.specbackend.dto.LoginRequest;
import com.example.specbackend.dto.RegisterRequest;
import com.example.specbackend.model.User;
import com.example.specbackend.service.AuthService;
import com.example.specbackend.service.AuthServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class AuthController {
    @Autowired
    private AuthServiceImpl authService;

    @PostMapping("/register")
    public User register(@RequestBody RegisterRequest registerRequest){

        return authService.register(registerRequest);
    }

    @PostMapping("/login")
    public User login(@RequestBody LoginRequest request){
        return authService.login(request);
    }
}
