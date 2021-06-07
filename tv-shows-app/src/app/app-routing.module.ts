import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { ShowsListComponent } from './shows-list/shows-list.component';

const routes: Routes = [
  { path:"shows", component: ShowsListComponent},
  { path:"shows/:id", component: ShowDetailsComponent},
  { path:"**", redirectTo: "/shows"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
