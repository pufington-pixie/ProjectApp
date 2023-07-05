import { ClassProvider, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';


import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { LoggingInterceptor } from './services/logging-interceptor.service';
import { ProjectDataComponent } from './components/project-data/project-data.component';
import { ProjectDetailComponent } from './components/project-details/project-details.component';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { TabViewModule } from 'primeng/tabview';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from "primeng/checkbox";
import { ToolbarModule } from 'primeng/toolbar';








const LOGGING_INTERCEPTOR_PROVIDER: ClassProvider = {
  provide: HTTP_INTERCEPTORS ,
  useClass: LoggingInterceptor,
  multi: true
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectListComponent,
    ProjectFormComponent,
    ProjectFormComponent,
    NavbarComponent,
    ProjectDataComponent,
    ProjectDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    TableModule,
    DialogModule,
    ToastModule,
    TabViewModule,
    FontAwesomeModule,
    ButtonModule,
    CheckboxModule,
    ToolbarModule
  ],
  providers: [ LOGGING_INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
