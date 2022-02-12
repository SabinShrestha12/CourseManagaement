import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomModuleRoutingModule } from './custom-module-routing.module';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ViewCourseComponent } from './components/view-course/view-course.component';
import { UpdateCourseComponent } from './components/update-course/update-course.component';
import { DeleteCourseComponent } from './components/delete-course/delete-course.component';
import { MatTableModule } from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogueboxComponent } from './components/dialoguebox/dialoguebox.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
//api module
import { HttpClientModule } from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    LoginComponent,
    ViewCourseComponent,
    UpdateCourseComponent,
    DeleteCourseComponent,
    DialogueboxComponent,
    AddCourseComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    CustomModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatDialogModule,
    HttpClientModule,
    MatSidenavModule,
  ],
  exports : [
    LoginComponent,
    ViewCourseComponent,
    UpdateCourseComponent,
    DeleteCourseComponent,
    AddCourseComponent,
  ]
})
export class CustomModuleModule { }
