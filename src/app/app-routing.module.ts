import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectDataComponent } from './components/project-data/project-data.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectDetailComponent } from './components/project-details/project-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectListComponent },
  {
    path: 'projects/:id',
    component: ProjectDetailComponent,
    children: [
      { path: '', redirectTo: 'form', pathMatch: 'full' },
      { path: 'edit', component: ProjectFormComponent },
      { path: 'data', component: ProjectDataComponent }
    ]
  },
  { path: 'projects/new', component: ProjectFormComponent },
  { path: 'projects/:id/edit', component: ProjectFormComponent },
  { path: 'projects/:id/data', component: ProjectDataComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
