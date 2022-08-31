package com.spring.student.doa;

import java.util.List;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.spring.student.model.Student;



// @RepositoryRestResource(collectionResourceRel ="fdf" ,path ="ddd" )
@Repository
public interface StudentRepository extends JpaRepository <Student,Long> {

    public List<Student> findByFullNameContaining(String fullname,Pageable pageable);
    
    @Query("select COUNT(id) from student")
    public Long getStudentsLength();
    
}
