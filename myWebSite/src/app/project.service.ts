import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Project} from "./project";


export const PROJECTS: Project[] = [
  {
    name:'Project 1',
    description:'Some Project Description',
    roles:'Some Roles',
    company:'Company1',
    id: '123'
  }
]

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProjects(): Observable<Project[]> {
    return of(PROJECTS);
  }

  getProject(id: string) : Observable<Project> {
    // @ts-ignore
    return of(PROJECTS.find( project => project.id === id));
  }
}
