import { Component, Injector } from '@angular/core';
import { AddReunioGenerated } from './add-reunio-generated.component';

@Component({
  selector: 'page-add-reunio',
  templateUrl: './add-reunio.component.html'
})
export class AddReunioComponent extends AddReunioGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
