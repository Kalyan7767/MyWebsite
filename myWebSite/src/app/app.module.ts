import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import {FormsModule} from "@angular/forms";
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideNavTogglerComponent } from './side-nav-toggler/side-nav-toggler.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { PageContentComponent } from './page-content/page-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ProjectDetailComponent,
    DashboardComponent,
    TopNavComponent,
    SideNavTogglerComponent,
    SideNavComponent,
    PageContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
