import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { project } from 'src/app/models/project';
import { projectService } from 'src/app/services/project.service';


@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css'],
  providers:[projectService]
})
export class projectFormComponent implements OnInit {
  project: project = {
    Id:0,
    Name:'string',
    Title:'string',
    Date:'',
    Description:'string',
    StatusId:0,
    BranchId:0,
    Sapnumber:0,
    Notes:'string',
    ServiceId:'string',
    ServiceName:'string',


  };
  isNewproject: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: projectService
  ) {}

  ngOnInit(): void {
    const projectId = this.route.snapshot.params['id'];
    if (projectId) {
      this.isNewproject = false;
      this.projectService.getproject(projectId).subscribe(
        (project: project) => {
          this.project = project;
        });
    }
  }

  saveproject(): void {
    if (this.isNewproject) {
      this.projectService.createproject(this.project).subscribe(
        () => {
          this.router.navigate(['/projects']);
        });
    } else {
      this.projectService.updateproject( this.project.Id,this.project).subscribe(
        () => {
          this.router.navigate(['/projects']);
        });
    }
  }
}
