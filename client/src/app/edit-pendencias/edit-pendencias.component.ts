import { Component, Injector } from '@angular/core';
import { EditPendenciasGenerated } from './edit-pendencias-generated.component';

@Component({
  selector: 'page-edit-pendencias',
  templateUrl: './edit-pendencias.component.html'
})
export class EditPendenciasComponent extends EditPendenciasGenerated {
    public observacoesDisabled: boolean;
    public respostasDisabled: boolean;

  constructor(injector: Injector) {
    super(injector);
  }

    load() {
        super.load();

        this.observacoesDisabled = false;
        this.respostasDisabled = false;

        if (this.security.isInRole("Colaborador")) {
            this.observacoesDisabled = true;
        }

        if (!this.security.isInRole("Colaborador")) {
            this.respostasDisabled = true;
        }
    }
}
