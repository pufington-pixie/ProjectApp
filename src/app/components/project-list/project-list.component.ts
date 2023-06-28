import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  providers: [ProjectService]
})
export class ProjectListComponent implements OnInit {
  projects: any = [];
  selectedProjectId: number | null = null;

  constructor(private projectService: ProjectService, private router: Router) {}

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.projectService.getProjects()
      .pipe(
        tap((response: any) => {
          console.log('GET Projects Response:', response);
        })
      )
      .subscribe((response: any) => {
        this.projects = response.data;
      });
  }

  createProject() {
    this.router.navigate(['projects/new']);
  }
  
  editProject() {
    if (this.selectedProjectId !== null) {
      this.router.navigate(['/projects', this.selectedProjectId,'edit']);
    }
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
    this.selectedProjectId = project.id;
  }
}
