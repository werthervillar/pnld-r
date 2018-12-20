import { Component, Injector } from '@angular/core';
import { GenerateReembolsosGenerated } from './generate-reembolsos-generated.component';
import { environment } from 'environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'page-generate-reembolsos',
  templateUrl: './generate-reembolsos.component.html'
})
export class GenerateReembolsosComponent extends GenerateReembolsosGenerated {
    constructor(injector: Injector, private http: HttpClient) {
    super(injector);
  }

    selectedParticipantes: number[] = [];

    ngOnDestroy() {
        super.ngOnDestroy();
        this.selectedParticipantes = null;
    }

    button0Click(event: any) {
        if (this.dropdown0.value == null) {
            this.notificationService.notify({ severity: "error", summary: `Alerta`, detail: `Reunião deve ser informada` });
        } else if (this.selectedParticipantes.length == 0) {
            this.notificationService.notify({ severity: "error", summary: `Alerta`, detail: `Pelo menos um participante deve ser informado` });
        } else {
            const url = environment.pnld.replace(/odata.*/, '');

            let httpParams = new HttpParams()
                .append("participantes", this.selectedParticipantes.join(","))
                .append("reuniao", this.dropdown0.value)
                .append("nomeResponsavel", this.security.user.name);

            this.http
                // Request the GetData action method
                .get(`${url}api/GenerateReembolsos/Generate`, {
                    // Pass the type parameter
                    params: httpParams
                }).subscribe((result: any) => {
                    if (this.dialogRef) {
                        this.dialogRef.close();
                    } else {
                        this._location.back();
                    }
                }, (result: any) => {
                    this.notificationService.notify({ severity: "error", summary: `Error`, detail: `Erro ao gerar Reembolsos` });
                });
        }

        
    }

    checkbox0Change(event: any, data: any) {
        if (event) {
            this.selectedParticipantes.push(data.Participante);
        } else {
            this.selectedParticipantes.splice(data.Participante);
        }
    }
}
