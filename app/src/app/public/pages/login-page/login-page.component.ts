import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LoginFormComponent } from '@public/components/login-form/login-form.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [LoginFormComponent, RouterLink],
  templateUrl: './login-page.component.html',
  styles: ``,
})
export class LoginPageComponent {}
