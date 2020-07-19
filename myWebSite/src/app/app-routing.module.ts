import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectComponent} from "./project/project.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProjectDetailComponent} from "./project-detail/project-detail.component";

const routes: Routes = [
  {path: 'projects', component: ProjectComponent},
  {path: 'project/:id', component: ProjectDetailComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
