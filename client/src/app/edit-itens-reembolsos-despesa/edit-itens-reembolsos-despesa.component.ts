import { Component, Injector } from '@angular/core';
import { EditItensReembolsosDespesaGenerated } from './edit-itens-reembolsos-despesa-generated.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-edit-itens-reembolsos-despesa',
  templateUrl: './edit-itens-reembolsos-despesa.component.html'
})
export class EditItensReembolsosDespesaComponent extends EditItensReembolsosDespesaGenerated {
    private sanitizer: DomSanitizer;

    constructor(injector: Injector) {
        super(injector);

        this.sanitizer = injector.get(DomSanitizer);
    }

    public getSantizeUrl(url: string) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }

}
