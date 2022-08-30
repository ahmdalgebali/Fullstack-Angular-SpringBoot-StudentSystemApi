package com.spring.student.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.spring.student.doa.StudentRepository;
import com.spring.student.model.Student;

@Service
public class StudentService {
    private StudentRepository studentRepository;

    @Autowired
    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public List<Student> getStudent(){
        return studentRepository.findAll();
    }
    public Student getStudentById(Long id){
        return studentRepository.findById(id).get();
    }

    public Student saveStudent(Student student){

        return studentRepository.save(student);

    }

    public Student ediStudent(Student student){
        return studentRepository.save(student);
    }

    public void removeStudent(Long id){
        studentRepository.deleteById(id);

    }

    public List<Student> findByFullName(String fullname){
        
        return this.studentRepository.findByFullName(fullname);
        
    }

}
