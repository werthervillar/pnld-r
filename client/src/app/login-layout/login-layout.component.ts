import { Component, Injector } from '@angular/core';
import { LoginLayoutGenerated } from './login-layout-generated.component';

@Component({
  selector: 'page-login-layout',
    templateUrl: './login-layout.component.html',
    styleUrls: ['./login-layout.component.css']
})
export class LoginLayoutComponent extends LoginLayoutGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
