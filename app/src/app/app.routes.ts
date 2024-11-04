import { Routes } from '@angular/router';
import { PublicLayoutComponent } from './public/public-layout/public-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    loadChildren: () => import('./public/public.routes').then(r => r.publicRoutes),
  },
  {
    path: 'secure',
    loadComponent: () => import('./secure/secure-layout/secure-layout.component').then(m => m.SecureLayoutComponent),
    loadChildren: () => import('./secure/secure.routes').then(r => r.secureRoutes),
  },
];
