import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomModuleModule } from './FrontModules/custom-module/custom-module.module';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule}from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

//toast module
import {NgToastModule} from 'ng-angular-popup';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomModuleModule,
    MatGridListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    NgToastModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
