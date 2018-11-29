import { Component, Injector } from '@angular/core';
import { AddComprovanteGenerated } from './add-comprovante-generated.component';

@Component({
  selector: 'page-add-comprovante',
  templateUrl: './add-comprovante.component.html'
})
export class AddComprovanteComponent extends AddComprovanteGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
