import { Routes } from '@angular/router';

export const secureRoutes: Routes = [
  {
    path: '',
    redirectTo: 'chats',
    pathMatch: 'full',
  },
  {
    path: 'chats',
    loadComponent: () => import('./pages/chats-page/chats-page.component').then(c => c.ChatsPageComponent),
  },
  {
    path: 'status',
    loadComponent: () => import('./pages/status-page/status-page.component').then(c => c.StatusPageComponent),
  },
];
