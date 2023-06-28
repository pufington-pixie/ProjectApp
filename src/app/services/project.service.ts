import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiUrl}/projects`);
  }

  getProject(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.apiUrl}/projects/${id}`);
  }

  createProject(project: Project): Observable<Project[]> {
    return this.http.post<Project[]>(`${this.apiUrl}/projects`, project);
  }

  updateProject(id: number, project: Project): Observable<Project[]> {
    return this.http.put<Project[]>(`${this.apiUrl}/projects/${id}`, project);
  }

  deleteProject(id: number): Observable<Project> {
    return this.http.delete<Project>(`${this.apiUrl}/projects/${id}`);
  }
}
