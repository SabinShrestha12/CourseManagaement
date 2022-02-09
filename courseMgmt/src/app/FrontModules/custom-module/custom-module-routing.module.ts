import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddCourseComponent} from './components/add-course/add-course.component';
import {ViewCourseComponent} from './components/view-course/view-course.component';

const routes: Routes = [
  // {path : "course", component : AddCourseComponent},
  // {path : "allcourse", component : ViewCourseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomModuleRoutingModule { }
