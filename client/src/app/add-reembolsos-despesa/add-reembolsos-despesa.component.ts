import { Component, Injector } from '@angular/core';
import { AddReembolsosDespesaGenerated } from './add-reembolsos-despesa-generated.component';

@Component({
  selector: 'page-add-reembolsos-despesa',
  templateUrl: './add-reembolsos-despesa.component.html'
})
export class AddReembolsosDespesaComponent extends AddReembolsosDespesaGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
