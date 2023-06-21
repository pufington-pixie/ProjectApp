import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class projectService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getprojects(): Observable<project[]> {
    return this.http.get<project[]>(`${this.apiUrl}/projects`);
  }

  getproject(id: number): Observable<project> {
    return this.http.get<project>(`${this.apiUrl}/projects/${id}`);
  }

  createproject(project: project): Observable<project[]> {
    return this.http.post<project[]>(`${this.apiUrl}/projects`, project);
  }

  updateproject(id: number, project: project): Observable<project> {
    return this.http.put<project>(`${this.apiUrl}/projects/${id}`, project);
  }

  deleteproject(id: number): Observable<project> {
    return this.http.delete<project>(`${this.apiUrl}/projects/${id}`);
  }
  deleteprojects(projects: project[]): Observable<project[]> {
    return forkJoin(
      projects.map((project) =>
        this.http.delete<project>(`${this.apiUrl}/${project.Id}`)
      )
    );
  }
}
