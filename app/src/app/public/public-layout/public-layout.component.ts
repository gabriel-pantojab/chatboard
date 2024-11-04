import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from '@public/components/header/header.component';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './public-layout.component.html',
  styles: ``,
})
export class PublicLayoutComponent {}
