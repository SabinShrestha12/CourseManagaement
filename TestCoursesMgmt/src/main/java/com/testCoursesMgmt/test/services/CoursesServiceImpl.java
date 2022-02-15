package com.testCoursesMgmt.test.services;

import com.testCoursesMgmt.test.entities.AllCourses;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CoursesServiceImpl implements CourseService {
    List<AllCourses> list;
    public CoursesServiceImpl()
    {
        this.list = new ArrayList<>();
        this.list.add(new AllCourses(14,"java course","this is all about java",1200));
        this.list.add(new AllCourses(12,"pyhthon course","this is all about python",1200));
    }
    //returning all courses to controller
    @Override
    public List<AllCourses> getCourses() {
        return this.list;
    }


    //returning course of given id to controller class
    @Override
    public AllCourses getParticularCourse(long id){
        AllCourses data = null;
        for(AllCourses course : list)
        {
            if(course.getCourse_id()==id)
            {
                data = course;
                break;
            }

        }
        return data;
    };

    //adding course
    @Override
    public AllCourses addCourse(AllCourses course)
    {
        this.list.add(course);
        return course;
    }

    //updation part
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
}
