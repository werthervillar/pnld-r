import { Component, Injector } from '@angular/core';
import { AddReembolsosDespesaGenerated } from './add-reembolsos-despesa-generated.component';
import { RolesService } from '../roles.service';
import { StatusService } from '../status.service';

@Component({
  selector: 'page-add-reembolsos-despesa',
  templateUrl: './add-reembolsos-despesa.component.html'
})
export class AddReembolsosDespesaComponent extends AddReembolsosDespesaGenerated {
    constructor(injector: Injector, private rolesService: RolesService, private statusService: StatusService) {
        super(injector);
  }

    load() {
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

        this.formData = {};

        if (this.form0.form.controls.Responsavel.value == null) {
            this.security.getUsers(`UserName eq '${this.security.user.name}'`, null, null, null, null, null)
                .subscribe((result: any) => {
                    this.form0.form.controls.Responsavel.setValue(result.value[0].Id)
                }, (result: any) => {

                });
        }
    }

    form0LoadData(event: any) {
        if (event.property == 'Status') {
            let filter: string = this.statusService.wcStatusReembolsoDespesas(`${event.filter}`);

            this.pnld.getStatusReembolsosDespesas(filter, event.top, event.skip, `${event.orderby}`, true, null, null, null)
                .subscribe((result: any) => {
                    this.getStatusReembolsosDespesasResult = result.value;

                    this.getStatusReembolsosDespesasCount = result['@odata.count'];
                }, (result: any) => {

                });
        }

        if (event.property == 'Reuniao') {
            this.pnld.getReunios(`${event.filter}`, event.top, event.skip, `${event.orderby}`, true, null, null, null)
                .subscribe((result: any) => {
                    this.getReuniosResult = result.value;

                    this.getReuniosCount = result['@odata.count'];
                }, (result: any) => {

                });
        }

        if (event.property == 'Colaborador') {
            this.pnld.getParticipantes(`${event.filter}`, event.top, event.skip, `${event.orderby}`, true, null, null, null)
                .subscribe((result: any) => {
                    this.getParticipantesResult = result.value;

                    this.getParticipantesCount = result['@odata.count'];
                }, (result: any) => {

                });
        }
    }
}
