import { Component, Injector } from '@angular/core';
import { EditItensReembolsosDespesaGenerated } from './edit-itens-reembolsos-despesa-generated.component';
import { DomSanitizer } from '@angular/platform-browser';
import { SecurityService } from '../security.service';
import { RolesService } from '../roles.service';

@Component({
  selector: 'page-edit-itens-reembolsos-despesa',
  templateUrl: './edit-itens-reembolsos-despesa.component.html'
})
export class EditItensReembolsosDespesaComponent extends EditItensReembolsosDespesaGenerated {
    private sanitizer: DomSanitizer;
    private roleService: RolesService;
    origemVisible: boolean = false;
    destinoVisible: boolean = false;
    entradaVisible: boolean = false;
    saidaVisible: boolean = false;
    referenciaVisible: boolean = false;
    dataEnabled: boolean = true;
    origemEnabled: boolean = true;
    destinoEnabled: boolean = true;
    entradaEnabled: boolean = true;
    saidaEnabled: boolean = true;
    referenciaEnabled: boolean = true;
    empresaEnabled: boolean = true;
    valorConcedidoEnabled: boolean = true;
    valorGastoEnabled: boolean = true;
 


    constructor(injector: Injector, roleService: RolesService) {
        super(injector);

        this.sanitizer = injector.get(DomSanitizer);
        this.roleService = roleService;
    }

    public getSantizeUrl(url: string) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }

    load() {
        this.canEdit = true;

        this.fieldsEnable();

        this.pnld.getItensReembolsosDespesaByItemReembolsoDespesa(this.parameters.ItemReembolsoDespesa)
            .subscribe((result: any) => {
                this.itensreembolsosdespesa = result;
                this.fieldsRender(this.itensreembolsosdespesa);
            }, (result: any) => {
                this.canEdit = !(result.status == 400);
            });

        this.getReembolsosDespesasPageSize = 10;

        this.pnld.getReembolsosDespesas(null, this.getReembolsosDespesasPageSize, 0, null, true, null, null, null)
            .subscribe((result: any) => {
                this.getReembolsosDespesasResult = result.value;

                this.getReembolsosDespesasCount = result['@odata.count'];
            }, (result: any) => {

            });

        this.getTiposItensReembolsosDespesasPageSize = 10;

        this.pnld.getTiposItensReembolsosDespesas(null, this.getTiposItensReembolsosDespesasPageSize, 0, null, true, null, null, null)
            .subscribe((result: any) => {
                this.getTiposItensReembolsosDespesasResult = result.value;

                this.getTiposItensReembolsosDespesasCount = result['@odata.count'];
            }, (result: any) => {

            });

        this.pnld.getComprovantes(`ItemReembolsoDespesa eq ${this.parameters.ItemReembolsoDespesa}`, this.grid0.allowPaging ? this.grid0.pageSize : null, this.grid0.allowPaging ? 0 : null, null, this.grid0.allowPaging, null, null, null)
            .subscribe((result: any) => {
                this.getComprovantesResult = result.value;

                this.getComprovantesCount = this.grid0.allowPaging ? result['@odata.count'] : result.value.length;
            }, (result: any) => {

            });
    }


    fieldsRender(itensreembolsosdespesa: any) {
        if (itensreembolsosdespesa.Tipo == '1' ||
            itensreembolsosdespesa.Tipo == '3' ||
            itensreembolsosdespesa.Tipo == '4' ||
            itensreembolsosdespesa.Tipo == '5') {
            this.origemVisible = true;
            this.destinoVisible = true;
            this.entradaVisible = false;
            this.saidaVisible = false;
            this.referenciaVisible = false;
        } else if (itensreembolsosdespesa.Tipo == '2') {
            this.origemVisible = false;
            this.destinoVisible = false;
            this.entradaVisible = true;
            this.saidaVisible = true;
            this.referenciaVisible = false;
        } else if (itensreembolsosdespesa.Tipo == '6' ||
            this.tipo.value == '7') {
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

       
    }

    fieldsEnable() {
        if (this.security.user.isInRole(this.roleService.ROLE_COLABORADOR)) {
            this.valorConcedidoEnabled = false;
        } else if (this.security.user.isInRole(this.roleService.ROLE_CONTROLADOR)) {
            this.dataEnabled = false;
            this.origemEnabled = false;
            this.destinoEnabled = false;
            this.entradaEnabled = false;
            this.saidaEnabled = false;
            this.referenciaEnabled = false;
            this.empresaEnabled = false;
            this.valorGastoEnabled = false;
            this.valorConcedidoEnabled = true;
        } else {
            this.dataEnabled = true;
            this.origemEnabled = true;
            this.destinoEnabled = true;
            this.entradaEnabled = true;
            this.saidaEnabled = true;
            this.referenciaEnabled = true;
            this.empresaEnabled = true;
            this.valorGastoEnabled = true;
            this.valorConcedidoEnabled = true;
        }
    }
}
