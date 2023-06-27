import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class FileUploadService {
  private apiUrl = 'http://localhost:8080/api/upload';

  constructor(private http: HttpClient) {}

  uploadFile(file: File, id: number): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    const url = `${this.apiUrl}/${id}`;

    return this.http.post(url, formData,{responseType: 'text'});
  }
}
