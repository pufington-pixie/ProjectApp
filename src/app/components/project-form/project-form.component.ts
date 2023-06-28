import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css'],
  providers: [ProjectService]
})
export class ProjectFormComponent implements OnInit {
  project: Project = {
    id: 0,
    name: '',
    title: '',
    date: '',
    statusId: 0,
    branchId: 0,
    sapNumber: '',
    notes: '',
    filePath: '',
    services: {
      id: 0,
      serviceName: ''
    }
  };
  isNewProject: boolean = true;
  fileSelected: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService,

  ) {}

  ngOnInit(): void {
    // Check if the route parameter contains a project ID
    this.route.params.subscribe((params) => {
      const projectId = params['id'];
      if (projectId) {
        this.isNewProject = false;
        this.getProject(projectId);
      }
    });
  }

  getProject(projectId: number): void {
    this.projectService.getProject(projectId).subscribe(
      (response: any) => {
        this.project = response.data ;
       }
    );
  }

  saveProject(): void {
    if (this.isNewProject) {
      this.projectService.createProject(this.project).pipe(
        tap((response: any) => {
          console.log('New project created:', response);
        })
      ).subscribe((response: any) => {
        console.log('Response received:', response);
        this.router.navigate(['/projects']);
      });
    } else {
      this.projectService.updateProject(this.project.id, this.project).pipe(
        tap((response: any) => {
          console.log('Project updated:', response);
        })
      ).subscribe((response: any) => {
        console.log('Response received:', response);
        this.router.navigate(['/projects']);
      });
    }
  }
}  
  


