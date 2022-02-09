import { LoginComponent } from './FrontModules/custom-module/components/login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddCourseComponent} from './FrontModules/custom-module/components/add-course/add-course.component';
import {ViewCourseComponent} from './FrontModules/custom-module/components/view-course/view-course.component';
import { UpdateCourseComponent } from './FrontModules/custom-module/components/update-course/update-course.component';
import { DeleteCourseComponent } from './FrontModules/custom-module/components/delete-course/delete-course.component';

const routes: Routes = [

  {path : '', component:LoginComponent},
  //using lazy loading concept
  {path : 'add',  component:AddCourseComponent},
  {path : 'view', component : ViewCourseComponent},
  {path : 'update', component : UpdateCourseComponent},
  {path : 'delete', component : DeleteCourseComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
