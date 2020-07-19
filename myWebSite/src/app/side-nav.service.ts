import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {

  isSideBadOpen: boolean = true;

  constructor() { }

  toggleSideBar() : void {
    this.isSideBadOpen = !this.isSideBadOpen;
  }
}
