import { Component,OnInit} from '@angular/core';
import { DialogueboxComponent } from '../dialoguebox/dialoguebox.component';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit{

  constructor(public dialog: MatDialog) {}
  add = "Add Course";


  courses: check[] = [

    {id : 1, title : "Java", desc : "this is java course", price : 500},
    {id : 2, title : "Python", desc : "this is python course", price : 100},
    {id : 3, title : "Angular", desc : "this is Angular course", price : 1500},
    {id : 4, title : "React", desc : "this is React course", price : 2000}
  ];


  displayedColumns: string[] = ['id', 'title', 'desc', 'price'];
  dataSource = this.courses;
  ngOnInit(): void {
  }


  //dialogue box component
  openDialogue()
  {
    this.dialog.open(DialogueboxComponent)
  }

}
export interface check {
  id: number;
  title: string;
  desc: any;
  price : number;
}


