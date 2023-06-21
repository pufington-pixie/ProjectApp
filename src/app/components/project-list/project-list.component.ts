import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { project } from 'src/app/models/project';
import { projectService } from 'src/app/services/project.service';



@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  providers: [projectService]
})
export class projectListComponent implements OnInit {
  projects: any = [];

  constructor(private projectService: projectService, private router: Router) { }

  ngOnInit() {
    this.getprojects();
  }

  getprojects() {
    this.projectService.getprojects().subscribe(
      (response: any) => {
        this.projects = response;
        console.log(response.data)
      }
    );
  }

  editproject(project: project) {
    this.router.navigate(['/projects', project.Id, 'edit']);
  }

  deleteproject(project: project) {
    if (confirm('Are you sure you want to delete this project?')) {
      this.projectService.deleteproject(project.Id).subscribe(
        () => {
          this.getprojects();
        }
      );
    }
  }
}
