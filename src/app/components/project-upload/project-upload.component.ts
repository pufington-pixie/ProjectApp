import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { tap } from 'rxjs';
import { Project } from 'src/app/models/project';
import { FileUploadService } from 'src/app/services/file-upload.service';

@Component({
  selector: 'app-project-upload',
  templateUrl: './project-upload.component.html',
  styleUrls: ['./project-upload.component.css'],
  providers: [FileUploadService]
})
export class ProjectUploadComponent {
  selectedFile: File | undefined;
  @Input() projectId: number | null = null;

  constructor(private http: HttpClient, private uploadService: FileUploadService) {}
  

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }
  onSubmit() {
    if (this.selectedFile && this.projectId) {
      this.uploadService.uploadFile(this.selectedFile, this.projectId)
        .pipe(
          tap((response: HttpResponse<any>) => {
            console.log('CSV file uploaded successfully!', response);
          })
        )
        .subscribe(
          () => {}
        );
    }
  }
}
