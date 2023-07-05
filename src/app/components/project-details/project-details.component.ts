import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectDataComponent } from '../project-data/project-data.component';
import { ProjectFormComponent } from '../project-form/project-form.component';
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
  providers:[TabViewModule]
})

export class ProjectDetailComponent implements OnInit {
  projectId: number | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    
  }

}
