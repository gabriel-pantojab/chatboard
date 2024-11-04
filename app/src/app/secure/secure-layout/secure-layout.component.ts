import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from '@secure/components/header/header.component';
import { SidebarComponent } from '@secure/components/sidebar/sidebar.component';

@Component({
  selector: 'app-secure-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent],
  templateUrl: './secure-layout.component.html',
  styleUrl: './secure-layout.component.css',
})
export class SecureLayoutComponent {
  @ViewChild('burguer') burger!: ElementRef;

  public toggleSidebar(): void {
    this.burger.nativeElement.checked = !this.burger.nativeElement.checked;
  }
}
