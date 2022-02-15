package com.testCoursesMgmt.test.CoursesController;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @RequestMapping("/api/home")
    public String display()
    {
        return "Hello from home controller";
    }

}
