import { Component } from '@angular/core';
import {Page} from "./page";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myWebSite';

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
}
