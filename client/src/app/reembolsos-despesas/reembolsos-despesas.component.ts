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
}
