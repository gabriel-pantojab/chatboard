import { Routes } from '@angular/router';

export const secureRoutes: Routes = [
  {
    path: '',
    redirectTo: 'chats',
    pathMatch: 'full',
  },
  {
    path: 'chats',
    loadComponent: () => import('./chats/pages/list-page/list-page.component').then(c => c.ListPageComponent),
  },
  {
    path: 'status',
    loadComponent: () => import('./status/pages/status-page/status-page.component').then(c => c.StatusPageComponent),
  },
  {
    path: 'chats/:id',
    loadComponent: () => import('./chats/pages/chat-page/chat-page.component').then(c => c.ChatPageComponent),
  },
];
