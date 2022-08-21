package com.spring.student.doa;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.spring.student.model.Student;


@CrossOrigin("http://localhost:4200/")
// @RepositoryRestResource(collectionResourceRel ="fdf" ,path ="ddd" )
@RepositoryRestResource
public interface StudentRepository extends JpaRepository <Student,Long> {


  
}
