import { Component, Injector } from '@angular/core';
import { EditParticipanteGenerated } from './edit-participante-generated.component';

@Component({
  selector: 'page-edit-participante',
  templateUrl: './edit-participante.component.html'
})
export class EditParticipanteComponent extends EditParticipanteGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
