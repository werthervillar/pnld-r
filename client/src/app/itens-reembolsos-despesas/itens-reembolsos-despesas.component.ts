import { Component, Injector } from '@angular/core';
import { ItensReembolsosDespesasGenerated } from './itens-reembolsos-despesas-generated.component';

@Component({
  selector: 'page-itens-reembolsos-despesas',
  templateUrl: './itens-reembolsos-despesas.component.html'
})
export class ItensReembolsosDespesasComponent extends ItensReembolsosDespesasGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
