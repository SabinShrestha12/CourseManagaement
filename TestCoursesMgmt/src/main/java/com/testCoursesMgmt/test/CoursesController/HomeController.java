package com.testCoursesMgmt.test.CoursesController;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.testCoursesMgmt.test.entities.AllCourses;
import com.testCoursesMgmt.test.services.CourseService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class HomeController {

    //creating an object for course service\
    @Autowired
    private CourseService courseServices;


    //fetching all courses
    @GetMapping(value = "/courses")
    public ResponseEntity<List<AllCourses>> allCourseslist() {
        List<AllCourses> list = this.courseServices.getCourses();
        if(list.size()>0)
        {
            return ResponseEntity.of(Optional.of(list));

        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();

    }


    //fetching particular course
    @GetMapping(value = "/courses/{id}")
    public ResponseEntity<AllCourses> course(@PathVariable int id)
    {
        AllCourses course = this.courseServices.getParticularCourse(id);
        if(course!=null)
        {
            return ResponseEntity.of(Optional.of(course));
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }


    //adding course
    @PostMapping(path = "/addCourse", consumes = "application/json")
    public ResponseEntity<AllCourses> addCourse(@RequestBody AllCourses course)
    {
        AllCourses data = null;
        try{
            data = this.courseServices.addCourse(course);
            return ResponseEntity.status(HttpStatus.CREATED).body(data);
        }
        catch (Exception e)
        {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }


    //update course
    @PutMapping(value = "update/{courseId}")
    public ResponseEntity<AllCourses> update(@RequestBody AllCourses course , @PathVariable("courseId") int courseId)
    {

        try
        {
            this.courseServices.update(course, courseId);
            return ResponseEntity.of(Optional.of(course));
        }
        catch (Exception e)
        {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }


    //delete course
    @DeleteMapping(value = "/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") int id)
    {
        try{
            this.courseServices.delete(id);
            return ResponseEntity.ok().build();
        }
        catch(Exception e)
        {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }


    }




}
