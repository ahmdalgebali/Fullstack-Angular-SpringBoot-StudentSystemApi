package com.spring.student.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.spring.student.model.AuthenticationBean;

@CrossOrigin("http://localhost:4200")
@RestController
public class BasicAuthenticationController {
    // http://localhost:8080/basicauth
    @GetMapping("/basicauth")
    public AuthenticationBean BasicAuthentication(){
        return new AuthenticationBean ("you are Authenticated");
    }

}