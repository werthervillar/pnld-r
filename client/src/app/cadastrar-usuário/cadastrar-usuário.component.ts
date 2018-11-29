import { Component, Injector } from '@angular/core';
import { CadastrarUsuarioGenerated } from './cadastrar-usuário-generated.component';

@Component({
  selector: 'page-cadastrar-usuário',
  templateUrl: './cadastrar-usuário.component.html'
})
export class CadastrarUsuarioComponent extends CadastrarUsuarioGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
