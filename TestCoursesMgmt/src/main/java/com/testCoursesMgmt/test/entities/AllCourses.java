package com.testCoursesMgmt.test.entities;

import javax.persistence.*;

@Entity
@Table(name = "all_courses")
public class AllCourses {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(updatable = false, nullable = false)
    private int course_id;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "price")
    private int price;


    public AllCourses(){}

    public AllCourses(int course_id, String title, String description, int price) {
        this.course_id = course_id;
        this.title = title;
        this.description = description;
        this.price = price;
    }

    @Override
    public String toString() {
        return "AllCourses{" +
                "course_id=" + course_id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", price=" + price +
                '}';
    }

    public int getCourse_id() {
        return course_id;
    }

    public void setCourse_id(int course_id) {
        this.course_id = course_id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }
}
