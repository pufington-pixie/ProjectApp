import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getProjectData(projectId: number) {
    return this.http.get(`${this.apiUrl}/data/${projectId}`);
  }

  uploadFile(projectId: number, formData: FormData) {
    return this.http.post(`${this.apiUrl}/upload/${projectId}`, formData,{responseType: 'text'});
  }
}
