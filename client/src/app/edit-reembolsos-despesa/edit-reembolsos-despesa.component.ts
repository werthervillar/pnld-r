import { Component, Injector } from '@angular/core';
import { EditReembolsosDespesaGenerated } from './edit-reembolsos-despesa-generated.component';
import { StatusService } from '../status.service';

@Component({
  selector: 'page-edit-reembolsos-despesa',
  templateUrl: './edit-reembolsos-despesa.component.html'
})
export class EditReembolsosDespesaComponent extends EditReembolsosDespesaGenerated {
    constructor(injector: Injector, private statusService: StatusService) {
    super(injector);
  }

    load() {
        this.canEdit = true;

        this.pnld.getReembolsosDespesaByReembolsoDespesa(this.parameters.ReembolsoDespesa)
            .subscribe((result: any) => {
                this.reembolsosdespesa = result;
            }, (result: any) => {
                this.canEdit = !(result.status == 400);
            });

        this.getStatusReembolsosDespesasPageSize = 10;

        let filter: string = this.statusService.wcStatusReembolsoDespesas(null);

        this.pnld.getStatusReembolsosDespesas(filter, this.getStatusReembolsosDespesasPageSize, 0, null, true, null, null, null)
            .subscribe((result: any) => {
                this.getStatusReembolsosDespesasResult = result.value;

                this.getStatusReembolsosDespesasCount = result['@odata.count'];
            }, (result: any) => {

            });

        this.getReuniosPageSize = 10;

        this.pnld.getReunios(null, this.getReuniosPageSize, 0, null, true, null, null, null)
            .subscribe((result: any) => {
                this.getReuniosResult = result.value;

                this.getReuniosCount = result['@odata.count'];
            }, (result: any) => {

            });

        this.getParticipantesPageSize = 10;

        this.pnld.getParticipantes(null, this.getParticipantesPageSize, 0, null, true, null, null, null)
            .subscribe((result: any) => {
                this.getParticipantesResult = result.value;

                this.getParticipantesCount = result['@odata.count'];
            }, (result: any) => {

            });

        this.security.getUsers(null, null, null, null, null, null)
            .subscribe((result: any) => {
                this.getUsersResult = result.value;
            }, (result: any) => {

            });

        this.pnld.getItensReembolsosDespesas(`ReembolsoDespesa eq ${this.parameters.ReembolsoDespesa}`, this.grid0.allowPaging ? this.grid0.pageSize : null, this.grid0.allowPaging ? 0 : null, null, this.grid0.allowPaging, `TiposItensReembolsosDespesa`, null, null)
            .subscribe((result: any) => {
                this.getItensReembolsosDespesasResult = result.value;

                this.getItensReembolsosDespesasCount = this.grid0.allowPaging ? result['@odata.count'] : result.value.length;

                this.TotalGasto = result.value.map(p => p.ValorGasto).reduce((a, b) => a + b);

                this.TotalConcedido = result.value.map(p => p.ValorConcedido).reduce((a, b) => a + b);
            }, (result: any) => {

            });
    }

    
}
