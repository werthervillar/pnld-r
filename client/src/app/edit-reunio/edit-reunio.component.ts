import { Component, Injector } from '@angular/core';
import { EditReunioGenerated } from './edit-reunio-generated.component';

@Component({
  selector: 'page-edit-reunio',
  templateUrl: './edit-reunio.component.html'
})
export class EditReunioComponent extends EditReunioGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
