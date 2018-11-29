import { Component, Injector } from '@angular/core';
import { ComprovantesGenerated } from './comprovantes-generated.component';

@Component({
  selector: 'page-comprovantes',
  templateUrl: './comprovantes.component.html'
})
export class ComprovantesComponent extends ComprovantesGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
