import { Component, Injector } from '@angular/core';
import { EditarUsuarioGenerated } from './editar-usuário-generated.component';

@Component({
  selector: 'page-editar-usuário',
  templateUrl: './editar-usuário.component.html'
})
export class EditarUsuarioComponent extends EditarUsuarioGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
