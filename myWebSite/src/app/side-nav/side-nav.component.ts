import { Component, OnInit } from '@angular/core';
import {SideNavService} from "../side-nav.service";
import {Page} from "../page";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  pages: Page[] = [
    {
      title: 'Home',
      location: ''
    },
    {
      title: 'Projects',
      location: 'projects'
    },
    {
      title: 'Education',
      location: 'education'
    },
    {
      title: 'Achievements',
      location: 'achievements'
    },
    {
      title: 'Contact',
      location: 'contactInfo'
    }
  ]

  constructor(public sideNavService: SideNavService) { }

  ngOnInit(): void {
  }

}
