import { Component,OnInit} from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit{
  courses: check[] = [

    {id : 1, title : "Java", desc : "this is java course", price : 500},
    {id : 2, title : "Python", desc : "this is python course", price : 1000},
    {id : 3, title : "Angular", desc : "this is Angular course", price : 1500},
    {id : 4, title : "React", desc : "this is React course", price : 2000}
  ];


  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.displayData();
  }


  displayedColumns: string[] = ['id', 'title', 'desc','price'];
  dataSource = this.courses;

  //fetching data using api
displayData()
{
  this.api.getProduct().subscribe({
    next:(response)=>
    {
      console.log(response);
    },
    error:()=>{
      console.log("Status 404 not found");
    }
  })
}


}
export interface check {
  id: number;
  title: string;
  desc: any;
  price : number;
}

