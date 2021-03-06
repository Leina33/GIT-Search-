import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
// import {NotFoundComponent} from './not-found/not-found.component';


const routes: Routes = [
  {"path":"about","component":AboutComponent},
  {"pathMatch":"full","redirectTo":"home","path":""},
  // {"path":"**","component":NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
