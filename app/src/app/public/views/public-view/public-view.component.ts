import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-public-view',
  standalone: true,
  imports: [RouterModule, HeaderComponent],
  templateUrl: './public-view.component.html',
  styles: ``,
})
export class PublicViewComponent {}
