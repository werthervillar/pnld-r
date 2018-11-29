import { Component, Injector } from '@angular/core';
import { EditComprovanteGenerated } from './edit-comprovante-generated.component';

@Component({
  selector: 'page-edit-comprovante',
  templateUrl: './edit-comprovante.component.html'
})
export class EditComprovanteComponent extends EditComprovanteGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
