import { Component,OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit{

  displayedColumns: string[] = ['id', 'title', 'description','price'];
  dataSource !: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private api:ApiService) { }


  ngOnInit(): void {
    this.displayData();
  }


  //fetching data using api
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

}

