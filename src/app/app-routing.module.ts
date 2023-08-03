import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

const Routes: Routes = [
  {
    path: 'Home',
    component: HomeComponent

  },
  {
    path: 'About',
    component: AboutComponent
  },
  {
    path: 'Contact',
    component: ContactComponent

  },
  {
    path:'Posts',
    loadChildren: () => import('./pages/posts/posts.module').then(m => m.PostModule)
  },
  {
    path:'**',
    redirectTo: 'Home'
  }
  
];




@NgModule({
  imports: [
    RouterModule.forRoot(Routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
