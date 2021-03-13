import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MvpHomeComponent} from "./pages/mvp-home/mvp-home.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: MvpHomeComponent,
  },
  {
    path: '**',
    redirectTo: 'inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
