import { Routes } from '@angular/router';
import { PublicLayoutComponent } from './public/public-layout/public-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    loadChildren: () => import('./public/public.routes').then(r => r.publicRoutes),
  },
];
