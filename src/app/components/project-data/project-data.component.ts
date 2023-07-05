import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DataResponse, Datapoints } from 'src/app/models/datapoints';
import { ProjectDataService } from 'src/app/services/file-upload.service';


@Component({
  selector: 'app-project-data',
  templateUrl: './project-data.component.html',
  styleUrls: ['./project-data.component.css'],
  providers:[MessageService]
})
export class ProjectDataComponent implements OnInit {
  
  @Input() projectId: number;
  selectedFile: File;
  displayModal: boolean = false;
  datapoints:Datapoints[] = [];
  selectedDataPointId! :number;
  selectedDataPoint! :Datapoints;


  constructor(
    private route: ActivatedRoute,
    private projectDataService: ProjectDataService,
    private messageService: MessageService
    ) {}

  ngOnInit() {
  this.route.params.subscribe((params) => {
    const projectId = params['id'];
    this.projectId = projectId;
  
  });
  this.getDatapoints()

  }

  selectProject(datapoint: Datapoints) {
    this.selectedDataPointId = datapoint.id
    this.selectedDataPoint = datapoint
  }
  onSort(){
    
  }

  onFileSelected(event:any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append("file", this.selectedFile);

      this.projectDataService.uploadFile(this.projectId, formData).
      subscribe({
        next: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'File Uploaded',
            detail: `${this.selectedFile.name} uploaded successfully.`
          });
          this.selectedFile = null;
          this.displayModal = false;
        },
        error: (err) => {
          console.log(err);
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'An error occured while uploading the file.'
          });
        }
      });
    }
  }
  getDatapoints() {
    this.projectDataService.getProjectData(this.projectId)
      .subscribe((response: DataResponse) => {
        if (response.data) {
          this.datapoints = response.data;
        }
      });
  }
  editdatapoint(){

  }

  onCancel() {
    this.selectedFile = null;
    this.displayModal = false;
  }
  showDialog() {
    this.displayModal = true;
  }
}
