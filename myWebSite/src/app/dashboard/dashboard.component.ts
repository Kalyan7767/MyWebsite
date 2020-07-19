import { Component, OnInit } from '@angular/core';
import {Project} from "../project";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  projects: Project[];

  constructor() { }

  ngOnInit(): void {
  }
}
