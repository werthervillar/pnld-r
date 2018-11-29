import { Component, Injector } from '@angular/core';
import { ReembolsosDespesasGenerated } from './reembolsos-despesas-generated.component';

@Component({
  selector: 'page-reembolsos-despesas',
  templateUrl: './reembolsos-despesas.component.html'
})
export class ReembolsosDespesasComponent extends ReembolsosDespesasGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
