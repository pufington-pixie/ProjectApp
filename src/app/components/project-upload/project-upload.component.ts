import { Component, OnInit } from '@angular/core';
import { project } from 'src/app/models/project';
import { projectService } from 'src/app/services/project.service';


@Component({
  selector: 'app-project-upload',
  templateUrl: './project-upload.component.html',
  styleUrls: ['./project-upload.component.css'],
  providers:[projectService]
})
export class projectUploadComponent implements OnInit {
  fileSelected: boolean = false;
  projects: project[] = [];

  constructor(
    private projectService: projectService,
  
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