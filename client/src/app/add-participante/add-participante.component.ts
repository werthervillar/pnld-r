import { Component, Injector } from '@angular/core';
import { AddParticipanteGenerated } from './add-participante-generated.component';

@Component({
  selector: 'page-add-participante',
  templateUrl: './add-participante.component.html'
})
export class AddParticipanteComponent extends AddParticipanteGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
