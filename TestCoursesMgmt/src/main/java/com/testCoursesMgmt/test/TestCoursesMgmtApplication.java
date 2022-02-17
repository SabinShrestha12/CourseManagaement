package com.testCoursesMgmt.test;

import com.testCoursesMgmt.test.entities.AllCourses;
import com.testCoursesMgmt.test.repositories.CoursesRepositories;
import org.hibernate.dialect.MySQL5Dialect;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.util.Iterator;
import java.util.Optional;

@SpringBootApplication
public class TestCoursesMgmtApplication {

	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(TestCoursesMgmtApplication.class, args);
		CoursesRepositories repo = context.getBean(CoursesRepositories.class);


//		inserting first data
//		AllCourses courses = new AllCourses();
//		courses.setTitle("java");
//		courses.setPrice(1200);
//		courses.setDescription("Testing java course");
//		System.out.println(repo.save(courses));

//		inserting second data

//		AllCourses course1 = new AllCourses();
//		course1.setTitle("python");
//		course1.setPrice(1500);
//		course1.setDescription("Testing python course");
//		System.out.println(repo.save(courses));

		//inserting third data
//		AllCourses course2 = new AllCourses();
//		course2.setTitle("angular");
//		course2.setPrice(1800);
//		course2.setDescription("Testing Angular course");
//		System.out.println(repo.save(course2));

		//inserting fourth data
//		AllCourses courses3 = new AllCourses();
//		courses3.setTitle("react");
//		courses3.setPrice(1800);
//		courses3.setDescription("Testing react course");
//		System.out.println(repo.save(courses3));



		//CRUD Operations from here

		System.out.println(repo.findById(1));
		System.out.println(repo.findAll());

		//updating using id
//		Optional<AllCourses> optional = repo.findById(3);
//		AllCourses data = optional.get();
//		data.setTitle("updated title");
//		data.setDescription("description updated");
//		data.setPrice(800);
//		repo.save(data);
//		System.out.println("Data updated");

		//deleting particular id
//		repo.deleteById(11);
//		repo.deleteById(10);
//		System.out.println("data deleted");

		//finding all data in database table using lambda functions
		Iterable <AllCourses>  itr=repo.findAll();
		itr.forEach(AllCourses->{
			System.out.println(AllCourses);
		});

		//second way to iterate through all datas
		System.out.println("Second way of traversing through datas inside table");
		Iterable <AllCourses>  itr1=repo.findAll();
		Iterator<AllCourses> courseData = itr1.iterator();
		while(courseData.hasNext())
		{
			System.out.println(courseData.next());
		}
	}

}
