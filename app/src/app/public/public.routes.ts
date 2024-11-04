import { Routes } from '@angular/router';

export const publicRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home-page/home-page.component').then(c => c.HomePageComponent),
  },
  {
    path: 'auth/sign-in',
    loadComponent: () => import('./pages/login-page/login-page.component').then(c => c.LoginPageComponent),
  },
];
