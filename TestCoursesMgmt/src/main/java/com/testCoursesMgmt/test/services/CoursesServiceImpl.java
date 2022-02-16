package com.testCoursesMgmt.test.services;

import com.testCoursesMgmt.test.entities.AllCourses;
import com.testCoursesMgmt.test.repositories.CoursesRepositories;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CoursesServiceImpl implements CourseService {
    @Autowired
    private CoursesRepositories courseRepo;
    public CoursesServiceImpl() {}
    //All course handler
    @Override
    public List<AllCourses> getCourses() {
        List<AllCourses> list = (List<AllCourses>) this.courseRepo.findAll();
        return list;
    }


    //single course handler
    @Override
    public AllCourses getParticularCourse(int id){

        AllCourses data = null;
        try {
            data = this.courseRepo.findById(id);

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
        AllCourses result = courseRepo.save(course);
        return result;
    }

    //updation course handler
    @Override
    public void update(AllCourses course , int id)
    {
         AllCourses data = this.courseRepo.findById(id);
         data.setTitle(course.getTitle());
         data.setPrice(course.getPrice());
         data.setDescription(course.getDescription());
         this.courseRepo.save(data);

         //another way you can update the data
         /*course.setCourse_id(id);
        this.courseRepo.save(course);*/

    }

    //delete handler
    @Override
    public void delete(int id)
    {
        courseRepo.deleteById(id);
    }
}
