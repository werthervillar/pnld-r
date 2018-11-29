import { Component, Injector } from '@angular/core';
import { RegistrarUsuarioGenerated } from './registrar-usuário-generated.component';

@Component({
  selector: 'page-registrar-usuário',
  templateUrl: './registrar-usuário.component.html'
})
export class RegistrarUsuarioComponent extends RegistrarUsuarioGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
