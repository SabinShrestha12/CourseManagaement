package com.testCoursesMgmt.test.repositories;

import com.testCoursesMgmt.test.entities.AllCourses;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CoursesRepositories extends CrudRepository<AllCourses, Integer> {

    public AllCourses findById(int id);
}
