package com.spring.student.controller;

import com.spring.student.model.AuthenticationBean;
import com.spring.student.model.JwtLogin;
import com.spring.student.service.TokenService;
import org.springframework.web.bind.annotation.*;


@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/")
public class Login {

    private TokenService tokenService;

    public Login(TokenService tokenService) {
        this.tokenService = tokenService;
    }

    @PostMapping("signin")
    public AuthenticationBean login(@RequestBody JwtLogin loginUser){
        System.out.println(loginUser.getUsername());
        return new AuthenticationBean(tokenService.login(loginUser));
    }
}
