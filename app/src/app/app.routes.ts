import { Routes } from '@angular/router';
import { PublicViewComponent } from './public/views/public-view/public-view.component';

export const routes: Routes = [
  {
    path: '',
    component: PublicViewComponent,
    loadChildren: () => import('./public/public.routes').then(r => r.publicRoutes),
  },
];
