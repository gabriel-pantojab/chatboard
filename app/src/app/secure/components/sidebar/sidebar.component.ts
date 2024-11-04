import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  host: {
    class: 'sidebar',
  },
})
export class SidebarComponent {
  @Output()
  public toggleSidebar: EventEmitter<void>;

  public links: { label: string; path: string }[];

  constructor() {
    this.links = [
      { label: 'Chats', path: '/secure/chats' },
      { label: 'Status', path: '/secure/status' },
    ];

    this.toggleSidebar = new EventEmitter<void>();
  }

  public toggle(): void {
    this.toggleSidebar.emit();
  }
}
