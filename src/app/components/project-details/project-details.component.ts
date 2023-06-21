import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { project } from 'src/app/models/project';
import { projectService } from 'src/app/services/project.service';


@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
  providers:[projectService]
})
export class projectDetailsComponent implements OnInit {
  @Input() project: project;

  constructor(
    private router: Router,
    private projectService: projectService
  ) { }

  ngOnInit(): void {}

  updateproject(): void {
    this.projectService.updateproject(this.project.Id, this.project)
      .subscribe(() => {
        console.log('project updated successfully!');
        this.router.navigate(['/projects']);
      });
  }

  deleteproject(): void {
    this.projectService.deleteproject(this.project.Id)
      .subscribe(() => {
        console.log('project deleted successfully!');
        this.router.navigate(['/projects']);
      });
  }
}
