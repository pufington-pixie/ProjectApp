import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project, ProjectResponse } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  providers: [ProjectService]
})

export class ProjectListComponent implements OnInit {
  projects!: Project[];
  selectedProjectId!: number;
  selectedProjectName!:string;
  selectedProject!:Project
  

  constructor(private projectService: ProjectService, private router: Router) {}
  ngOnInit() {
    this.getProjects();
  }

getProjects() {
  this.projectService.getProjects()
    .subscribe((response: ProjectResponse) => {
      if (response.data) {
        this.projects = response.data;
      }
    });
}

  editProject(projectId: number) { 
    this.router.navigate(['/projects', projectId,'edit']);
  }

  createProject() {
    this.router.navigate(['/projects/new']);
  }
  

  deleteProject() {
    if (this.selectedProjectId && confirm('Are you sure you want to delete this project?')) {
      this.projectService.deleteProject(this.selectedProjectId)
        .subscribe(() => {
          console.log('Project deleted:', this.selectedProjectId);
          this.getProjects();
        });
    }
  }
  

  selectProject(project: Project) {
    this.selectedProjectId = project.id,
    this.selectedProject = project;
  }
  
}
