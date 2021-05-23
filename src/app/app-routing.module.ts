import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tu-fraccionamiento/inicio',
    pathMatch: 'full'
  },
  {
    path: 'tu-fraccionamiento/inicio',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'tu-fraccionamiento/colonos',
    loadChildren: () => import('./pages/news/section-feed/section-feed.module').then(m => m.SectionFeedModule),
  },
  {
    path: 'tu-fraccionamiento/economia',
    loadChildren: () => import('./pages/news/section-feed/section-feed.module').then(m => m.SectionFeedModule),
  },
  {
    path: 'tu-fraccionamiento/sociedad',
    loadChildren: () => import('./pages/news/section-feed/section-feed.module').then(m => m.SectionFeedModule),
  },
  {
    path: 'tu-fraccionamiento/deportes',
    loadChildren: () => import('./pages/news/section-feed/section-feed.module').then(m => m.SectionFeedModule),
  },
  {
    path: 'tu-fraccionamiento/ocasion',
    loadChildren: () => import('./pages/news/section-feed/section-feed.module').then(m => m.SectionFeedModule),
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule),
  },
  {
    path: '**',
    redirectTo: 'tu-fraccionamiento/inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
