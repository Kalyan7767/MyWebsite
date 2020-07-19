import {Component, OnInit} from '@angular/core';
import {Project} from "../project";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {ProjectService} from "../project.service";

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  project: Project;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private location: Location) { }

  ngOnInit(): void {
    this.getProject();
  }

  getProject() {
    const id = this.route.snapshot.paramMap.get('id');
    this.projectService.getProject(id)
      .subscribe(project => this.project = project);
  }

}
