import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './header.component.html',
  styles: ``,
})
export class HeaderComponent {
  public showTitle: boolean;

  constructor() {
    this.showTitle = false;
  }
}
