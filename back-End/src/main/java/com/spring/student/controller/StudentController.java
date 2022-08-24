package com.spring.student.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spring.student.model.Student;
import com.spring.student.service.StudentService;

@CrossOrigin("http://localhost:4200/")
@RestController
@RequestMapping("system/")
public class StudentController {
    private StudentService studentService;

    @Autowired
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping("students")
    public List<Student> getStudent(){
        return studentService.getStudent();
    }

    @GetMapping("student")
    public Student getStudentById(@RequestParam Long id){
        return studentService.getStudentById(id);


    }




}
