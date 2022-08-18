package com.spring.student.doa;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.spring.student.studentsystem.model.Student;
@RepositoryRestResource
public interface StudentRepository extends JpaRepository <Student,Long> {



    
}
