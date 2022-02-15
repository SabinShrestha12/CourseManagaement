package com.testCoursesMgmt.test.CoursesController;
import java.util.List;

import com.testCoursesMgmt.test.entities.AllCourses;
import com.testCoursesMgmt.test.services.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class HomeController {

    //creating an object for course service\
    @Autowired
    private CourseService courseServices;


    //fetching all courses
    @GetMapping(value = "/courses")
    public List<AllCourses> allCourseslist() {return this.courseServices.getCourses();}


    //fetching particular course
    @GetMapping(value = "/courses/{id}")
    public AllCourses course(@PathVariable String id)
    {
        return this.courseServices.getParticularCourse(Long.parseLong(id));
    }


    //adding course
    @PostMapping(path = "/addCourse", consumes = "application/json")
    public AllCourses addCourse(@RequestBody AllCourses course)
    {
        return this.courseServices.addCourse(course);
    }


    //update course
    @PutMapping(value = "update/{courseId}")
    public AllCourses update(@RequestBody AllCourses course , @PathVariable("courseId") long courseId)
    {
        this.courseServices.update(course, courseId);
        return course;
    }


    //delete courses
    @GetMapping(value = "/delete/{id}")
    public String delete(int id)
    {
        return "course deleted";
    }




}
