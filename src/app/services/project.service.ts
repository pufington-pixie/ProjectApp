import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { Project, ProjectResponse } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  // Create a project
  createProject(project: Project): Observable<ProjectResponse> {
    return this.http.post<ProjectResponse>(`${this.apiUrl}/projects`, project);
  }

  // Get a project by ID
  getProject(id: number): Observable<ProjectResponse> {
    return this.http.get<ProjectResponse>(`${this.apiUrl}/projects/${id}`);
  }

  // Update a project
  updateProject(project: Project): Observable<ProjectResponse> {
    return this.http.put<ProjectResponse>(`${this.apiUrl}/projects/${project.id}`, project);
  }

  // Delete a project
  deleteProject(id: number): Observable<ProjectResponse> {
    return this.http.delete<ProjectResponse>(`${this.apiUrl}/projects/${id}`);
  }

  // Get all projects
  getProjects(): Observable<ProjectResponse> {
    return this.http.get<ProjectResponse>(`${this.apiUrl}/projects`);
  }
}
