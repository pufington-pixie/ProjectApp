import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { project } from 'src/app/models/project';
import { projectService } from 'src/app/services/project.service';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  providers:[projectService]
})
export class projectListComponent implements OnInit {
  projects: any = [];
  selectedproject: project | null = null;

  constructor(private projectService: projectService, private router: Router) { }

  ngOnInit() {
    this.getprojects();
  }

  getprojects() {
    this.projectService.getprojects().subscribe(
      (response: any) => {
        this.projects = response.data;
        console.log(response);
      }
    );
  }

  createproject() {
    const newProject: project = {
      // Set initial values for the new project
      Id: 0,
      Title: '',
      Date: '',
      Name: '',
      Description: '',
      StatusId: 0,
      BranchId: 0,
      Sapnumber: 0,
      Notes: '',
      ServiceId: '',
      ServiceName: ''
    };

    this.projectService.createproject(newProject).subscribe(
      (response: any) => {
        this.projects = response.data;
        console.log('New project created:', newProject);
      }
    );
  }

  editproject() {
    if (this.selectedproject) {
      this.router.navigate(['/projects', this.selectedproject.Id, 'edit']);
    }
  }

  deleteProject() {
    if (this.selectedproject && confirm('Are you sure you want to delete this project?')) {
      this.projectService.deleteproject(this.selectedproject.Id).subscribe(
        () => {
          console.log('Project deleted:', this.selectedproject);
          this.getprojects();
        }
      );
    }
  }

  selectproject(project: project) {
    this.selectedproject = project;
  }
}
