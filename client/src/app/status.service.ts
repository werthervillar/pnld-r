import { Injectable, Injector } from "@angular/core";
import { SecurityService } from "./security.service";
import { RolesService } from "./roles.service";

@Injectable()
export class StatusService {
    public REEMBOLSO_EM_ABERTO: string = "1";
    public REEMBOLSO_PAGO: string = "2";
    public REEMBOLSO_PENDENTE: string = "1002";
    public REEMBOLSO_PARA_PAGAMENTO: string = "1003";
    public REEMBOLSO_AGUARDANDO: string = "1004";

    constructor(injector: Injector, private security: SecurityService, private rolesService: RolesService) {
       
    }

    wcStatusReembolsoDespesas(filter: string): string {
        let newFilter = filter;

        if (this.security.user.isInRole(this.rolesService.ROLE_COLABORADOR)) {
            if (newFilter == null) {
                newFilter = ' StatusReembolsoDespesa in (' + this.REEMBOLSO_EM_ABERTO + ',' + this.REEMBOLSO_PENDENTE + ',' + this.REEMBOLSO_AGUARDANDO + ')';
            } else {
                newFilter = newFilter + ' and StatusReembolsoDespesa in (' + this.REEMBOLSO_EM_ABERTO + ',' + this.REEMBOLSO_PENDENTE + ',' + this.REEMBOLSO_AGUARDANDO + ')';
            }
        }

        return newFilter;
    }
}