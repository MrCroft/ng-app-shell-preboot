import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

/**
 * TODO:
 * remove AppShellComponent and `shell` route
 * after https://github.com/angular/angular-cli/issues/8929 gets fixed
 * WORKAROUND: import AppShellComponent
 */
import { AppShellComponent } from './app-shell/app-shell.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'videos', loadChildren: './videos/videos.module#VideosModule' },
  /**
   * TODO:
   * remove AppShellComponent and `shell` route
   * after https://github.com/angular/angular-cli/issues/8929 gets fixed
   * WORKAROUND: define `shell` route below
   */
  { path: 'shell', component: AppShellComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
