import { Component, Injector } from '@angular/core';
import { RelatorioReembolsoGenerated } from './relatorio-reembolso-generated.component';

@Component({
  selector: 'page-relatorio-reembolso',
  templateUrl: './relatorio-reembolso.component.html'
})
export class RelatorioReembolsoComponent extends RelatorioReembolsoGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
