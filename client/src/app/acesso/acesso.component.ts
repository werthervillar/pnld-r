import { Component, Injector } from '@angular/core';
import { AcessoGenerated } from './acesso-generated.component';

@Component({
  selector: 'page-acesso',
  templateUrl: './acesso.component.html'
})
export class AcessoComponent extends AcessoGenerated {
    constructor(injector: Injector) {
    super(injector);
  }   
}
