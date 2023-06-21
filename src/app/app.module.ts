import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { projectDetailsComponent } from './components/project-details/project-details.component';
import { projectFormComponent } from './components/project-form/project-form.component';
import { projectListComponent } from './components/project-list/project-list.component';
import { projectUploadComponent } from './components/project-upload/project-upload.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from  './components/sidebar/sidebar.component';
import { Routes } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    projectListComponent,
    projectDetailsComponent,
    projectFormComponent,
    projectUploadComponent,
    NavbarComponent,
    SidebarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
