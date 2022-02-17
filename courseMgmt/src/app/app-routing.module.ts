import { LoginComponent } from './FrontModules/custom-module/components/login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViewCourseComponent} from './FrontModules/custom-module/components/view-course/view-course.component';
import { UpdateCourseComponent } from './FrontModules/custom-module/components/update-course/update-course.component';
import { AddCourseComponent } from './FrontModules/custom-module/components/add-course/add-course.component';
import { DashboardComponent } from './FrontModules/custom-module/components/dashboard/dashboard.component';
const routes: Routes = [

  {path : '', component:LoginComponent,pathMatch : 'full'},
  //using lazy loading concept
  {path : 'dashboard', component : DashboardComponent,children :[
    {path : 'add',  component:AddCourseComponent},
    {path : 'view', component : ViewCourseComponent},
    {path : 'update', component : UpdateCourseComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
