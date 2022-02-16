package com.testCoursesMgmt.test.services;

import com.testCoursesMgmt.test.entities.AllCourses;
import com.testCoursesMgmt.test.repositories.CoursesRepositories;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CoursesServiceImpl implements CourseService {
    CoursesRepositories courseRepo;
    List<AllCourses> list;
    public CoursesServiceImpl()
    {
        this.list = new ArrayList<>();
        this.list.add(new AllCourses(14,"java course","this is all about java",1200));
        this.list.add(new AllCourses(12,"pyhthon course","this is all about python",1200));this.list = new ArrayList<>();
    }
    //All course handler
    @Override
    public List<AllCourses> getCourses() {
        return this.list;
    }


    //single course handler
    @Override
    public AllCourses getParticularCourse(long id){
        AllCourses data = null;
        try {
            for (AllCourses course : list) {
                if (course.getCourse_id() == id) {
                    data = course;
                    break;
                }

            }
        }catch(Exception e)
        {
            System.out.println(e.getMessage());
        }
        return data;
    };

    //new course handler
    @Override
    public AllCourses addCourse(AllCourses course)
    {
        this.list.add(course);
        return course;
    }

    //updation course handler
    @Override
    public void update(AllCourses course , long id)
    {
      this.list = this.list.stream().map(c->{
           if(c.getCourse_id()==id)
           {
               c.setTitle(course.getTitle());
               c.setDescription(course.getDescription());
               c.setPrice(course.getPrice());
           }
            return c;
       }).collect(Collectors.toList());

    }

    //delete handler
    @Override
    public void delete(int id)
    {
        this.list.stream().filter(course->{
            if(course.getCourse_id()!=id)
            {
                return true;
            }
            else
            {
                return false;
            }
        }) .collect(Collectors.toList());
    }
}
