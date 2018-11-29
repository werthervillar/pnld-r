import { Component, Injector } from '@angular/core';
import { AddItensReembolsosDespesaGenerated } from './add-itens-reembolsos-despesa-generated.component';

@Component({
  selector: 'page-add-itens-reembolsos-despesa',
  templateUrl: './add-itens-reembolsos-despesa.component.html'
})
export class AddItensReembolsosDespesaComponent extends AddItensReembolsosDespesaGenerated {
    origemVisible: boolean = false;
    destinoVisible: boolean = false;
    entradaVisible: boolean = false;
    saidaVisible: boolean = false;
    referenciaVisible: boolean = false;

  constructor(injector: Injector) {
    super(injector);
    }
    ngOnInit() {
        super.ngOnInit();
    }

    TipoChange(event: any) {
        super.TipoChange(event);

            if (event.TipoItemReembolsoDespesa == '1' ||
                event.TipoItemReembolsoDespesa == '3' ||
                event.TipoItemReembolsoDespesa == '4' ||
                event.TipoItemReembolsoDespesa == '5') {
                this.origemVisible = true;
                this.destinoVisible = true;
                this.entradaVisible = false;
                this.saidaVisible = false;
                this.referenciaVisible = false;
            } else if (event.TipoItemReembolsoDespesa == '2') {
                this.origemVisible = false;
                this.destinoVisible = false;
                this.entradaVisible = true;
                this.saidaVisible = true;
                this.referenciaVisible = false;
            } else if (event.TipoItemReembolsoDespesa == '6' ||
                event.TipoItemReembolsoDespesa == '7') {
                this.origemVisible = false;
                this.destinoVisible = false;
                this.entradaVisible = false;
                this.saidaVisible = false;
                this.referenciaVisible = true;
            } else {
                this.origemVisible = false;
                this.destinoVisible = false;
                this.entradaVisible = false;
                this.saidaVisible = false;
                this.referenciaVisible = false;
        }

        this.reembolsoDespesa = this.parameters.ReembolsoDespesa;
        }
}
