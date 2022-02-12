import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit{

  constructor() { }


  courses: check[] = [

    {id : 1, title : "Java", desc : "this is java course", price : 500},
    {id : 2, title : "Python", desc : "this is python course", price : 1000},
    {id : 3, title : "Angular", desc : "this is Angular course", price : 1500},
    {id : 4, title : "React", desc : "this is React course", price : 2000}
  ];


  displayedColumns: string[] = ['id', 'title', 'desc','price','action'];
  dataSource = this.courses;


  ngOnInit(): void {
  }

  //update portion
  update()
  {
    alert("update success");
  }
  delete()
  {
    alert("delete success");
  }

}

export interface check {
  id: number;
  title: string;
  desc: any;
  price: number;
}
