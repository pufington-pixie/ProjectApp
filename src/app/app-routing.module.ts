import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { projectListComponent } from './components/project-list/project-list.component';
import { projectDetailsComponent } from './components/project-details/project-details.component';
import { projectFormComponent } from './components/project-form/project-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes : Routes = [
  { path: 'projects', component: projectListComponent },
  { path: 'project', component: projectDetailsComponent },
  { path: 'projecxt', component: projectFormComponent },
  { path: 'home', component: NavbarComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
