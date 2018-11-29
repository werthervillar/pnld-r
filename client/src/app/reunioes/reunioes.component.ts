import { Component, Injector } from '@angular/core';
import { ReunioesGenerated } from './reunioes-generated.component';

@Component({
  selector: 'page-reunioes',
  templateUrl: './reunioes.component.html'
})
export class ReunioesComponent extends ReunioesGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
