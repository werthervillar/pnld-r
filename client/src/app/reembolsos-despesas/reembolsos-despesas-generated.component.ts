/*
  This file is automatically generated. Any changes will be overwritten.
  Modify reembolsos-despesas.component.ts instead.
*/
import { ChangeDetectorRef, ViewChild, AfterViewInit, Injector, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';

import { DialogService, DIALOG_PARAMETERS, DialogRef } from '@radzen/angular/dist/dialog';
import { NotificationService } from '@radzen/angular/dist/notification';
import { ContentComponent } from '@radzen/angular/dist/content';
import { HeadingComponent } from '@radzen/angular/dist/heading';
import { GridComponent } from '@radzen/angular/dist/grid';
import { ButtonComponent } from '@radzen/angular/dist/button';
import { AddReembolsosDespesaComponent } from '../add-reembolsos-despesa/add-reembolsos-despesa.component';
import { EditReembolsosDespesaComponent } from '../edit-reembolsos-despesa/edit-reembolsos-despesa.component';
import { RelatorioReembolsoComponent } from '../relatorio-reembolso/relatorio-reembolso.component';
import { EditPendenciasComponent } from '../edit-pendencias/edit-pendencias.component';

import { PnldService } from '../pnld.service';
import { SecurityService } from '../security.service';

export class ReembolsosDespesasGenerated implements AfterViewInit, OnInit, OnDestroy {
  // Components
  @ViewChild('content1') content1: ContentComponent;
  @ViewChild('pageTitle') pageTitle: HeadingComponent;
  @ViewChild('grid0') grid0: GridComponent;

  router: Router;

  cd: ChangeDetectorRef;

  route: ActivatedRoute;

  notificationService: NotificationService;

  dialogService: DialogService;

  dialogRef: DialogRef;

  _location: Location;

  _subscription: Subscription;

  pnld: PnldService;

  security: SecurityService;

  getReembolsosDespesasResult: any;

  getReembolsosDespesasCount: any;

  getReembolsosDespesasListsResult: any;

  getReembolsosDespesasListsCount: any;

  parameters: any;

  constructor(private injector: Injector) {
  }

  ngOnInit() {
    this.notificationService = this.injector.get(NotificationService);

    this.dialogService = this.injector.get(DialogService);

    this.dialogRef = this.injector.get(DialogRef, null);

    this.router = this.injector.get(Router);

    this.cd = this.injector.get(ChangeDetectorRef);

    this._location = this.injector.get(Location);

    this.route = this.injector.get(ActivatedRoute);

    this.pnld = this.injector.get(PnldService);
    this.security = this.injector.get(SecurityService);
  }

  ngAfterViewInit() {
    this._subscription = this.route.params.subscribe(parameters => {
      if (this.dialogRef) {
        this.parameters = this.injector.get(DIALOG_PARAMETERS);
      } else {
        this.parameters = parameters;
      }
      this.load();
      this.cd.detectChanges();
    });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }


  load() {
    this.pnld.getReembolsosDespesas(null, this.grid0.allowPaging ? this.grid0.pageSize : null, this.grid0.allowPaging ? 0 : null, null, this.grid0.allowPaging, `ItensReembolsosDespesas`, null, null)
    .subscribe((result: any) => {
      this.getReembolsosDespesasResult = result.value;

      this.getReembolsosDespesasCount = this.grid0.allowPaging ? result['@odata.count'] : result.value.length;
    }, (result: any) => {

    });

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
  }

  grid0Add(event: any) {
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

  grid0Delete(event: any) {
    this.pnld.deleteReembolsosDespesa(event.ReembolsoDespesa)
    .subscribe((result: any) => {
      this.pnld.getReembolsosDespesasLists(null, null, null, null, null, null, null, null)
      .subscribe((result: any) => {
        this.getReembolsosDespesasListsResult = result.value;
      }, (result: any) => {

      });

      this.notificationService.notify({ severity: "success", summary: `Success`, detail: `ReembolsosDespesa deleted!` });
    }, (result: any) => {
      this.notificationService.notify({ severity: "error", summary: `Error`, detail: `Unable to delete ReembolsosDespesa` });
    });
  }

  grid0LoadData(event: any) {
    this.pnld.getReembolsosDespesas(`${event.filter}`, event.top, event.skip, `${event.orderby}`, event.top != null && event.skip != null, `ItensReembolsosDespesas`, null, null)
    .subscribe((result: any) => {
      this.getReembolsosDespesasResult = result.value;

      this.getReembolsosDespesasCount = event.top != null && event.skip != null ? result['@odata.count'] : result.value.length;
    }, (result: any) => {

    });

    this.pnld.getReembolsosDespesasLists(`${event.filter}`, event.top, event.skip, `${event.orderby}`, event.top != null && event.skip != null, ``, null, null)
    .subscribe((result: any) => {
      this.getReembolsosDespesasListsResult = result.value;

      this.getReembolsosDespesasListsCount = event.top != null && event.skip != null ? result['@odata.count'] : result.value.length;
    }, (result: any) => {

    });
  }

  grid0RowSelect(event: any) {
    this.dialogService.open(EditReembolsosDespesaComponent, { parameters: {ReembolsoDespesa: event.ReembolsoDespesa}, width: 900, title: 'Reembolso de Despesa' })
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

  button0Click(event: any, data: any) {
    this.dialogService.open(EditPendenciasComponent, { parameters: {ReembolsoDespesa: data.ReembolsoDespesa}, width: 800, title: 'Histórico e Pendências' });
  }

  button1Click(event: any, data: any) {
    this.dialogService.open(RelatorioReembolsoComponent, { parameters: {Reuniao: data.ReuniaoId, ReembolsoDespesa: data.ReembolsoDespesa}, width: 900, height: 600, title: 'Relatório de Reembolso' });
  }
}
