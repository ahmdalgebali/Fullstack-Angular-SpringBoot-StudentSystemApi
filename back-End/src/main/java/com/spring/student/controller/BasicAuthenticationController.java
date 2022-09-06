package com.spring.student.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
<<<<<<< HEAD
import com.spring.student.model.AuthenticationBean;

@CrossOrigin("http://localhost:4200/")
=======

import com.spring.student.model.AuthenticationBean;

@CrossOrigin("http://localhost:4200")
>>>>>>> 6154341f8171b4fd4f72a1ee3eebbe6ca61e9601
@RestController
public class BasicAuthenticationController {


    // http://localhost:8080/basicauth
<<<<<<< HEAD
    @GetMapping("basicauth")
=======
    @GetMapping("/basicauth")
>>>>>>> 6154341f8171b4fd4f72a1ee3eebbe6ca61e9601
    public AuthenticationBean BasicAuthentication(){
        return new AuthenticationBean ("you are Authenticated");
    }

}