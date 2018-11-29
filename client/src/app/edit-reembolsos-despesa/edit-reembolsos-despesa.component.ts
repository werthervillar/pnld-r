import { Component, Injector } from '@angular/core';
import { EditReembolsosDespesaGenerated } from './edit-reembolsos-despesa-generated.component';

@Component({
  selector: 'page-edit-reembolsos-despesa',
  templateUrl: './edit-reembolsos-despesa.component.html'
})
export class EditReembolsosDespesaComponent extends EditReembolsosDespesaGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
