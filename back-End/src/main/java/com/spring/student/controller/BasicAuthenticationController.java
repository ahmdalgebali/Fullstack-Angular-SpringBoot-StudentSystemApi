package com.spring.student.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin("http://localhost:4200")
@RestController
public class BasicAuthenticationController {


    // http://localhost:8080/basicauth
    @GetMapping("/basicauth")
    public String BasicAuthentication(){
        return  ("you are Authenticated");
    }

}