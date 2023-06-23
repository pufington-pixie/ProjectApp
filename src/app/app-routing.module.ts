import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectUploadComponent } from './components/project-upload/project-upload.component';
import { HomeComponent } from './components/home/home.component';

const routes : Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectListComponent },
  { path: 'projects/new', component: ProjectFormComponent },
  { path: 'projects/:id/edit', component: ProjectFormComponent },
  { path: 'projects/:id/upload', component: ProjectUploadComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
