import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../project.service";
import {Project} from "../project";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  projects: Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.projectService.getProjects()
      .subscribe(projects => this.projects = projects);
  }

}
