import { Router } from '@angular/router';
import { Component,OnInit} from '@angular/core';
import { DialogueboxComponent } from '../dialoguebox/dialoguebox.component';
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {ViewChild} from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit{

  add = "Add Course";
  displayedColumns: string[] = ['course_id', 'title', 'description','price'];
  dataSource !: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(public dialog: MatDialog,private api:ApiService, private route:Router) {}

  ngOnInit(): void {
    this.displayData();
  }

  //fetching data
displayData()
{
  this.api.getProduct().subscribe({
    next:(response)=>
    {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    },
    error:()=>{
      console.log("Status 404 not found");
    }
  })
}

   //filtering process
  applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}


  //dialogue box component
  openDialogue()
  {
    this.dialog.open(DialogueboxComponent).afterClosed().subscribe(val=>{
      if(val === 'save')
      {
        this.displayData();
      }
    })
  }

}


