import { NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { sidebar } from '@core/mocks/sidebar.mock';
import { NavItem } from '@core/interfaces/nav-item.interface';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLinkActive, RouterLink, NgOptimizedImage],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  host: {
    class: 'sidebar',
  },
})
export class SidebarComponent {
  @Output()
  public toggleSidebar: EventEmitter<void>;

  public links: NavItem[];

  constructor() {
    this.links = sidebar;

    this.toggleSidebar = new EventEmitter<void>();
  }

  public toggle(): void {
    this.toggleSidebar.emit();
  }
}
