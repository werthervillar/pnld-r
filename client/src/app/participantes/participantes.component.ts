import { Component, Injector } from '@angular/core';
import { ParticipantesGenerated } from './participantes-generated.component';

@Component({
  selector: 'page-participantes',
  templateUrl: './participantes.component.html'
})
export class ParticipantesComponent extends ParticipantesGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
