import { Component,Inject,OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {ViewChild} from '@angular/core';
import { DialogueboxComponent } from '../dialoguebox/dialoguebox.component';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import {NgToastService} from 'ng-angular-popup';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit{

  displayedColumns: string[] = ['id', 'title', 'description','price','action'];
  dataSource !: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private api:ApiService,private dialog : MatDialog, private toast : NgToastService){}


  ngOnInit(): void {
    this.displayData();
  }

  //filtering process
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
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

  //update portion
  update(row:any)
  {
    this.dialog.open(DialogueboxComponent,{
    data : row
    }).afterClosed().subscribe(val=>{
      if(val === 'update')
      {
        this.displayData();
        this.toast.success({
          detail : "updated successfully",
          summary : "Data Updated successfully",
          duration: 5000
        })
      }
    })
  }
  delete(id:number)
  {
   this.api.deleteCourse(id).subscribe({
     next: (res)=>
     {
      //  alert("data deleted success");
       this.toast.success({
        detail : "Deleted successfully",
        summary : "Data Deleted successfully",
        duration: 5000
      });
       this.displayData();
     },
     error : ()=>
     {
      this.toast.warning({
        detail : "Operation Failed",
        summary : "Delete Operation Failed",
        duration : 5000
      })
     }
   })
  }

}

