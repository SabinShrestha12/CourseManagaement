import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AddCourseComponent } from './components/add-course/add-course.component';
// import { ViewCourseComponent } from './components/view-course/view-course.component';
// import { UpdateCourseComponent } from './components/update-course/update-course.component';
// import { DeleteCourseComponent } from './components/delete-course/delete-course.component';
// import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  // {path : "course", component : AddCourseComponent},
  // {path : "allcourse", component : ViewCourseComponent}
  // {path : 'dashboard/add', component : AddCourseComponent},
  // {path : 'view', component : ViewCourseComponent},
  // {path : 'update', component : UpdateCourseComponent},
  // {path : 'delete', component : DeleteCourseComponent},
  // {path : 'dashboard', component : DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomModuleRoutingModule { }
