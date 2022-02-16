package com.testCoursesMgmt.test.services;

import com.testCoursesMgmt.test.entities.AllCourses;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface CourseService {
    public List<AllCourses> getCourses();
    public AllCourses getParticularCourse(int id);
    public AllCourses addCourse(AllCourses course);
    public void update(AllCourses course,int id);
    public void delete(int id);
}
