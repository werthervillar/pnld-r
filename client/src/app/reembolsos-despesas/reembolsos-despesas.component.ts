import { Component, Injector } from '@angular/core';
import { ReembolsosDespesasGenerated } from './reembolsos-despesas-generated.component';
import { AddReembolsosDespesaComponent } from '../add-reembolsos-despesa/add-reembolsos-despesa.component';
import { GenerateReembolsosComponent } from '../generate-reembolsos/generate-reembolsos.component';

@Component({
  selector: 'page-reembolsos-despesas',
  templateUrl: './reembolsos-despesas.component.html'
})
export class ReembolsosDespesasComponent extends ReembolsosDespesasGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
    button3Click(event: any) {
        this.dialogService.open(AddReembolsosDespesaComponent, { parameters: {}, title: 'Cadastrar Reembolso de Despesa' })
            .afterClosed().subscribe(result => {
                if (this.security.user.isInRole('Colaborador') == true) {
                    this.pnld.getReembolsosDespesasLists(`ColaboradorEmail eq '${this.security.user.name}'`, null, null, null, null, null, null, null)
                        .subscribe((result: any) => {
                            this.getReembolsosDespesasListsResult = result.value;
                        }, (result: any) => {

                        });
                }

                if (this.security.user.isInRole('Colaborador') != true) {
                    this.pnld.getReembolsosDespesasLists(null, null, null, null, null, null, null, null)
                        .subscribe((result: any) => {
                            this.getReembolsosDespesasListsResult = result.value;
                        }, (result: any) => {

                        });
                }
            });
    }

    button2Click(event: any) {
        this.dialogService.open(GenerateReembolsosComponent, { parameters: {}, width: 900, title: 'Gerar Reembolsos' })
            .afterClosed().subscribe(result => {
                if (this.security.user.isInRole('Colaborador') != true) {
                    this.pnld.getReembolsosDespesasLists(null, this.grid0.allowPaging ? this.grid0.pageSize : null, this.grid0.allowPaging ? 0 : null, null, this.grid0.allowPaging, null, null, null)
                        .subscribe((result: any) => {
                            this.getReembolsosDespesasListsResult = result.value;

                            this.getReembolsosDespesasListsCount = this.grid0.allowPaging ? result['@odata.count'] : result.value.length;
                        }, (result: any) => {

                        });
                }

                if (this.security.user.isInRole('Colaborador') == true) {
                    this.pnld.getReembolsosDespesasLists(`ColaboradorEmail eq '${this.security.user.name}'`, this.grid0.allowPaging ? this.grid0.pageSize : null, this.grid0.allowPaging ? 0 : null, null, this.grid0.allowPaging, null, null, null)
                        .subscribe((result: any) => {
                            this.getReembolsosDespesasListsResult = result.value;

                            this.getReembolsosDespesasListsCount = this.grid0.allowPaging ? result['@odata.count'] : result.value.length;
                        }, (result: any) => {

                        });
                }
            });
    }

    load() {
        this.pnld.getReembolsosDespesas(null, this.grid0.allowPaging ? this.grid0.pageSize : null, this.grid0.allowPaging ? 0 : null, null, this.grid0.allowPaging, `ItensReembolsosDespesas`, null, null)
            .subscribe((result: any) => {
                this.getReembolsosDespesasResult = result.value;

                this.getReembolsosDespesasCount = this.grid0.allowPaging ? result['@odata.count'] : result.value.length;
            }, (result: any) => {

            });

            this.pnld.getReembolsosDespesasLists(this.security.user.isInRole("Colaborador") ? ` ColaboradorEmail eq '${this.security.user.name}'` : null, this.grid0.allowPaging ? this.grid0.pageSize : null, this.grid0.allowPaging ? 0 : null, null, this.grid0.allowPaging, null, null, null)
                .subscribe((result: any) => {
                    this.getReembolsosDespesasListsResult = result.value;

                    this.getReembolsosDespesasListsCount = this.grid0.allowPaging ? result['@odata.count'] : result.value.length;
                }, (result: any) => {

                });
    }

    grid0LoadData(event: any) {
        this.pnld.getReembolsosDespesas(`${event.filter}`, event.top, event.skip, `${event.orderby}`, event.top != null && event.skip != null, `ItensReembolsosDespesas`, null, null)
            .subscribe((result: any) => {
                this.getReembolsosDespesasResult = result.value;

                this.getReembolsosDespesasCount = event.top != null && event.skip != null ? result['@odata.count'] : result.value.length;
            }, (result: any) => {

            });

        this.pnld.getReembolsosDespesasLists(this.security.user.isInRole("Colaborador") ? `${event.filter == '' ? '' : event.filter + ' and '} ColaboradorEmail eq '${this.security.user.name}'` : `${event.filter}`, event.top, event.skip, `${event.orderby}`, event.top != null && event.skip != null, ``, null, null)
            .subscribe((result: any) => {
                this.getReembolsosDespesasListsResult = result.value;

                this.getReembolsosDespesasListsCount = event.top != null && event.skip != null ? result['@odata.count'] : result.value.length;
            }, (result: any) => {

            });
    }

    grid0Delete(event: any) {
        this.pnld.deleteReembolsosDespesa(event.ReembolsoDespesa)
            .subscribe((result: any) => {
                if (this.security.user.isInRole('Colaborador') != true) {
                    this.pnld.getReembolsosDespesasLists(null, this.grid0.allowPaging ? this.grid0.pageSize : null, this.grid0.allowPaging ? 0 : null, null, this.grid0.allowPaging, null, null, null)
                        .subscribe((result: any) => {
                            this.getReembolsosDespesasListsResult = result.value;

                            this.getReembolsosDespesasListsCount = this.grid0.allowPaging ? result['@odata.count'] : result.value.length;
                        }, (result: any) => {

                        });
                }

                if (this.security.user.isInRole('Colaborador') == true) {
                    this.pnld.getReembolsosDespesasLists(`ColaboradorEmail eq '${this.security.user.name}'`, this.grid0.allowPaging ? this.grid0.pageSize : null, this.grid0.allowPaging ? 0 : null, null, this.grid0.allowPaging, null, null, null)
                        .subscribe((result: any) => {
                            this.getReembolsosDespesasListsResult = result.value;

                            this.getReembolsosDespesasListsCount = this.grid0.allowPaging ? result['@odata.count'] : result.value.length;
                        }, (result: any) => {

                        });
                }

                this.notificationService.notify({ severity: "success", summary: `Success`, detail: `ReembolsosDespesa deleted!` });
            }, (result: any) => {
                this.notificationService.notify({ severity: "error", summary: `Error`, detail: `Unable to delete ReembolsosDespesa` });
            });
    }
}
