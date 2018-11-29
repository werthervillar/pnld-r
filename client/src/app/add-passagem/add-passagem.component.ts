import { Component, Injector } from '@angular/core';
import { AddPassagemGenerated } from './add-passagem-generated.component';

@Component({
  selector: 'page-add-passagem',
  templateUrl: './add-passagem.component.html'
})
export class AddPassagemComponent extends AddPassagemGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
