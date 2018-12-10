import { Component, Injector } from '@angular/core';
import { HomeGenerated } from './home-generated.component';
import { RolesService } from '../roles.service';

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html'
})
export class HomeComponent extends HomeGenerated {
    constructor(injector: Injector, private roleService: RolesService) {
    super(injector);
  }

    load() {
        let isColaborador = this.security.isInRole(this.roleService.ROLE_COLABORADOR);
        let filter = null;

        if (isColaborador) {
            filter = `ColaboradorEmail eq '${this.security.user.name}'`
        }

        this.pnld.getReembolsosChartLists(filter, null, null, null, null, null, null, null)
            .subscribe((result: any) => {
                this.getReembolsosChartListsResult = result.value;

                this.TotalGasto = result.value.map(p => p.ValorGasto).reduce((a, b) => a + b);

                this.TotalConcedido = result.value.map(p => p.ValorConcedido).reduce((a, b) => a + b);
            }, (result: any) => {

            });
    }
}
