import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [],
  templateUrl: './login-form.component.html',
  styles: `
    :host {
      width: 100%;
    }
  `,
})
export class LoginFormComponent {
  constructor(private _router: Router) {}

  public login(): void {
    this._router.navigate(['/secure']);
  }
}
