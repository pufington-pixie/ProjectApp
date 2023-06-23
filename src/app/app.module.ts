import { ClassProvider, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from  './components/sidebar/sidebar.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { LoggingInterceptor } from './services/logging-interceptor.service';

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
    SidebarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ LOGGING_INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
