package com.testCoursesMgmt.test.repositories;

import com.testCoursesMgmt.test.entities.AllCourses;
import org.springframework.data.repository.CrudRepository;

public interface CoursesRepositories extends CrudRepository<AllCourses, Integer> {
}
