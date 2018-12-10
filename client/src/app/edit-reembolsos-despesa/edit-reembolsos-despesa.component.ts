import { Component, Injector } from '@angular/core';
import { EditReembolsosDespesaGenerated } from './edit-reembolsos-despesa-generated.component';
import { StatusService } from '../status.service';
import { EditItensReembolsosDespesaComponent } from '../edit-itens-reembolsos-despesa/edit-itens-reembolsos-despesa.component';
import { AddItensReembolsosDespesaComponent } from '../add-itens-reembolsos-despesa/add-itens-reembolsos-despesa.component';
import { RolesService } from '../roles.service';

@Component({
  selector: 'page-edit-reembolsos-despesa',
  templateUrl: './edit-reembolsos-despesa.component.html'
})
export class EditReembolsosDespesaComponent extends EditReembolsosDespesaGenerated {
    addItemVisible: boolean = true;
    deleteItemVisible: boolean = true;

    constructor(injector: Injector, private statusService: StatusService, private roleService: RolesService) {
    super(injector);
  }

    load() {
        this.canEdit = true;

        this.fieldsRender();

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

        this.pnld.getItensReembolsosDespesasLists(`ReembolsoDespesa eq ${this.parameters.ReembolsoDespesa}`, this.grid1.allowPaging ? this.grid1.pageSize : null, this.grid1.allowPaging ? 0 : null, null, this.grid1.allowPaging, null, null, null)
            .subscribe((result: any) => {
                this.getItensReembolsosDespesasListsResult = result.value;

                this.getItensReembolsosDespesasListsCount = this.grid1.allowPaging ? result['@odata.count'] : result.value.length;

                this.TotalGasto = result.value.map(p => p.ValorGasto).reduce((a, b) => a + b);

                this.TotalConcedido = result.value.map(p => p.ValorConcedido).reduce((a, b) => a + b);
            }, (result: any) => {

            });

   
    }

    grid1RowSelect(event: any) {
        this.dialogService.open(EditItensReembolsosDespesaComponent, { parameters: { ItemReembolsoDespesa: event.ItemReembolsoDespesa }, title: 'Item de Reembolso' })
            .afterClosed().subscribe(result => {
                this.pnld.getItensReembolsosDespesasLists(`ReembolsoDespesa eq ${event.ReembolsoDespesa}`, null, null, null, null, null, null, null)
                    .subscribe((result: any) => {
                        this.getItensReembolsosDespesasListsResult = result.value;

                        this.TotalGasto = result.value.map(p => p.ValorGasto).reduce((a, b) => a + b);

                        this.TotalConcedido = result.value.map(p => p.ValorConcedido).reduce((a, b) => a + b);
                    }, (result: any) => {

                    });
            });
    }

    grid1Add(event: any) {
        this.dialogService.open(AddItensReembolsosDespesaComponent, { parameters: { ReembolsoDespesa: this.parameters.ReembolsoDespesa }, title: 'Cadastrar Item de Reembolso' })
            .afterClosed().subscribe(result => {
                this.pnld.getItensReembolsosDespesasLists(`ReembolsoDespesa eq ${this.parameters.ReembolsoDespesa}`, null, null, null, null, null, null, null)
                    .subscribe((result: any) => {
                        this.getItensReembolsosDespesasListsResult = result.value;

                        this.TotalGasto = result.value.map(p => p.ValorGasto).reduce((a, b) => a + b);

                        this.TotalConcedido = result.value.map(p => p.ValorConcedido).reduce((a, b) => a + b);
                    }, (result: any) => {

                    });
            });
    }

    grid1Delete(event: any) {
        this.pnld.deleteItensReembolsosDespesa(event.ItemReembolsoDespesa)
            .subscribe((result: any) => {
                this.pnld.getItensReembolsosDespesasLists(`ReembolsoDespesa eq ${event.ReembolsoDespesa}`, null, null, null, null, null, null, null)
                    .subscribe((result: any) => {
                        this.getItensReembolsosDespesasListsResult = result.value;

                        this.TotalGasto = result.value.map(p => p.ValorGasto).reduce((a, b) => a + b);

                        this.TotalConcedido = result.value.map(p => p.ValorConcedido).reduce((a, b) => a + b);
                    }, (result: any) => {

                    });

                this.notificationService.notify({ severity: "success", summary: `Alerta`, detail: `Registro excluido!` });
            }, (result: any) => {
                this.notificationService.notify({ severity: "error", summary: `Alerta`, detail: `Erro ao excluir!` });
            });
    }

    fieldsRender() {
        if (this.security.user.isInRole(this.roleService.ROLE_CONTROLADOR)) {
           this.addItemVisible = false;
            this.deleteItemVisible = false;
        }
    }
}
