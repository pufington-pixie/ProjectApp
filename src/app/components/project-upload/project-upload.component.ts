import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';



@Component({
  selector: 'app-project-upload',
  templateUrl: './project-upload.component.html',
  styleUrls: ['./project-upload.component.css'],
  providers:[ProjectService]
})
export class ProjectUploadComponent implements OnInit {
  fileSelected: boolean = false;
  projects: Project[] = [];

  constructor(
    private projectService: ProjectService,
  
  ) {}

  ngOnInit(): void {
 
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.fileSelected = true;
    } else {
      this.fileSelected = false;
    }
  }

  onSubmit(): void {
    if (!this.fileSelected) {
      return;
    }
  
    
  }
}