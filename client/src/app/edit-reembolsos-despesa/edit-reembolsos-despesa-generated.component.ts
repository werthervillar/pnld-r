/*
  This file is automatically generated. Any changes will be overwritten.
  Modify edit-reembolsos-despesa.component.ts instead.
*/
import { ChangeDetectorRef, ViewChild, AfterViewInit, Injector, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';

import { DialogService, DIALOG_PARAMETERS, DialogRef } from '@radzen/angular/dist/dialog';
import { NotificationService } from '@radzen/angular/dist/notification';
import { ContentComponent } from '@radzen/angular/dist/content';
import { HeadingComponent } from '@radzen/angular/dist/heading';
import { TabsComponent } from '@radzen/angular/dist/tabs';
import { TemplateFormComponent } from '@radzen/angular/dist/template-form';
import { LabelComponent } from '@radzen/angular/dist/label';
import { DropDownDataGridComponent } from '@radzen/angular/dist/dropdown-datagrid';
import { RequiredValidatorComponent } from '@radzen/angular/dist/required-validator';
import { DatePickerComponent } from '@radzen/angular/dist/datepicker';
import { DropDownComponent } from '@radzen/angular/dist/dropdown';
import { NumericComponent } from '@radzen/angular/dist/numeric';
import { TextBoxComponent } from '@radzen/angular/dist/textbox';
import { ButtonComponent } from '@radzen/angular/dist/button';
import { GridComponent } from '@radzen/angular/dist/grid';
import { RelatorioReembolsoComponent } from '../relatorio-reembolso/relatorio-reembolso.component';
import { EditPendenciasComponent } from '../edit-pendencias/edit-pendencias.component';
import { AddItensReembolsosDespesaComponent } from '../add-itens-reembolsos-despesa/add-itens-reembolsos-despesa.component';
import { EditItensReembolsosDespesaComponent } from '../edit-itens-reembolsos-despesa/edit-itens-reembolsos-despesa.component';

import { PnldService } from '../pnld.service';
import { SecurityService } from '../security.service';

export class EditReembolsosDespesaGenerated implements AfterViewInit, OnInit, OnDestroy {
  // Components
  @ViewChild('content1') content1: ContentComponent;
  @ViewChild('pageTitle') pageTitle: HeadingComponent;
  @ViewChild('tabs0') tabs0: TabsComponent;
  @ViewChild('form0') form0: TemplateFormComponent;
  @ViewChild('label1') label1: LabelComponent;
  @ViewChild('Reuniao') reuniao: DropDownDataGridComponent;
  @ViewChild('ReuniaoRequiredValidator') reuniaoRequiredValidator: RequiredValidatorComponent;
  @ViewChild('label7') label7: LabelComponent;
  @ViewChild('Colaborador') colaborador: DropDownDataGridComponent;
  @ViewChild('ColaboradorRequiredValidator') colaboradorRequiredValidator: RequiredValidatorComponent;
  @ViewChild('label2') label2: LabelComponent;
  @ViewChild('DataSaida') dataSaida: DatePickerComponent;
  @ViewChild('label8') label8: LabelComponent;
  @ViewChild('DataRetorno') dataRetorno: DatePickerComponent;
  @ViewChild('label3') label3: LabelComponent;
  @ViewChild('Responsavel') responsavel: DropDownDataGridComponent;
  @ViewChild('ResponsavelRequiredValidator') responsavelRequiredValidator: RequiredValidatorComponent;
  @ViewChild('label9') label9: LabelComponent;
  @ViewChild('Status') status: DropDownComponent;
  @ViewChild('StatusRequiredValidator') statusRequiredValidator: RequiredValidatorComponent;
  @ViewChild('label4') label4: LabelComponent;
  @ViewChild('ValorGasto') valorGasto: NumericComponent;
  @ViewChild('label10') label10: LabelComponent;
  @ViewChild('ValorConcedido') valorConcedido: NumericComponent;
  @ViewChild('label5') label5: LabelComponent;
  @ViewChild('Banco') banco: TextBoxComponent;
  @ViewChild('label11') label11: LabelComponent;
  @ViewChild('Agencia') agencia: TextBoxComponent;
  @ViewChild('label6') label6: LabelComponent;
  @ViewChild('Conta') conta: TextBoxComponent;
  @ViewChild('SaveButton') saveButton: ButtonComponent;
  @ViewChild('CancelButton') cancelButton: ButtonComponent;
  @ViewChild('button0') button0: ButtonComponent;
  @ViewChild('button1') button1: ButtonComponent;
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

  canEdit: any;

  reembolsosdespesa: any;

  getStatusReembolsosDespesasPageSize: any;

  getStatusReembolsosDespesasResult: any;

  getStatusReembolsosDespesasCount: any;

  getReuniosPageSize: any;

  getReuniosResult: any;

  getReuniosCount: any;

  getParticipantesPageSize: any;

  getParticipantesResult: any;

  getParticipantesCount: any;

  getUsersResult: any;

  getItensReembolsosDespesasResult: any;

  getItensReembolsosDespesasCount: any;

  TotalGasto: any;

  TotalConcedido: any;

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
    this.canEdit = true;

    this.pnld.getReembolsosDespesaByReembolsoDespesa(this.parameters.ReembolsoDespesa)
    .subscribe((result: any) => {
      this.reembolsosdespesa = result;
    }, (result: any) => {
      this.canEdit = !(result.status == 400);
    });

    this.getStatusReembolsosDespesasPageSize = 10;

    this.pnld.getStatusReembolsosDespesas(null, this.getStatusReembolsosDespesasPageSize, 0, null, true, null, null, null)
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

    this.pnld.getItensReembolsosDespesas(`ReembolsoDespesa eq ${this.parameters.ReembolsoDespesa}`, this.grid0.allowPaging ? this.grid0.pageSize : null, this.grid0.allowPaging ? 0 : null, null, this.grid0.allowPaging, `TiposItensReembolsosDespesa`, null, null)
    .subscribe((result: any) => {
      this.getItensReembolsosDespesasResult = result.value;

      this.getItensReembolsosDespesasCount = this.grid0.allowPaging ? result['@odata.count'] : result.value.length;

      this.TotalGasto = result.value.map(p => p.ValorGasto).reduce((a, b) => a + b);

      this.TotalConcedido = result.value.map(p => p.ValorConcedido).reduce((a, b) => a + b);
    }, (result: any) => {

    });
  }

  form0Submit(event: any) {
    this.pnld.updateReembolsosDespesa(this.parameters.ReembolsoDespesa, event)
    .subscribe((result: any) => {
      if (this.dialogRef) {
        this.dialogRef.close();
      } else {
        this._location.back();
      }
    }, (result: any) => {
      this.canEdit = !(result.status == 400);

      this.notificationService.notify({ severity: "error", summary: `Error`, detail: `Unable to update ReembolsosDespesa` });
    });
  }

  ReuniaoLoadData(event: any) {
    this.pnld.getReunios(`${event.filter}`, event.top, event.skip, `${event.orderby}`, true, null, null, null)
    .subscribe((result: any) => {
      this.getReuniosResult = result.value;

      this.getReuniosCount = result['@odata.count'];
    }, (result: any) => {

    });
  }

  ColaboradorLoadData(event: any) {
    this.pnld.getParticipantes(`${event.filter}`, event.top, event.skip, `${event.orderby}`, true, null, null, null)
    .subscribe((result: any) => {
      this.getParticipantesResult = result.value;

      this.getParticipantesCount = result['@odata.count'];
    }, (result: any) => {

    });
  }

  CancelButtonClick(event: any) {
    if (this.dialogRef) {
      this.dialogRef.close();
    } else {
      this._location.back();
    }
  }

  button0Click(event: any) {
    this.dialogService.open(EditPendenciasComponent, { parameters: {ReembolsoDespesa: this.reembolsosdespesa.ReembolsoDespesa}, width: 800, title: 'Edit Pendencias' });
  }

  button1Click(event: any) {
    this.dialogService.open(RelatorioReembolsoComponent, { parameters: {Reuniao: this.reembolsosdespesa.Reuniao, ReembolsoDespesa: this.reembolsosdespesa.ReembolsoDespesa}, width: 800, title: 'Relatório de Reembolso' });
  }

  grid0Add(event: any) {
    this.dialogService.open(AddItensReembolsosDespesaComponent, { parameters: {ReembolsoDespesa: this.parameters.ReembolsoDespesa}, height: -2, title: 'Cadastrar Item de Reembolso' })
        .afterClosed().subscribe(result => {
              this.pnld.getReembolsosDespesaByReembolsoDespesa(this.reembolsosdespesa.ReembolsoDespesa)
      .subscribe((result: any) => {
        this.reembolsosdespesa = result;
      }, (result: any) => {

      });
    });
  }

  grid0Delete(event: any) {
    this.pnld.deleteItensReembolsosDespesa(event.ItemReembolsoDespesa)
    .subscribe((result: any) => {
      this.pnld.getReembolsosDespesaByReembolsoDespesa(this.reembolsosdespesa.ReembolsoDespesa)
      .subscribe((result: any) => {
        this.reembolsosdespesa = result;
      }, (result: any) => {

      });

      this.notificationService.notify({ severity: "success", summary: `Alerta`, detail: `Registro excluido com sucesso!` });
    }, (result: any) => {
      this.notificationService.notify({ severity: "error", summary: `Alerta`, detail: `Erro ao excluir registro!` });
    });
  }

  grid0LoadData(event: any) {
    this.pnld.getItensReembolsosDespesas(`${event.filter} && ReembolsoDespesa eq ${this.parameters.ReembolsoDespesa}`, event.top, event.skip, `${event.orderby}`, event.top != null && event.skip != null, ``, null, null)
    .subscribe((result: any) => {
      this.getItensReembolsosDespesasResult = result.value;

      this.getItensReembolsosDespesasCount = event.top != null && event.skip != null ? result['@odata.count'] : result.value.length;
    }, (result: any) => {

    });
  }

  grid0RowSelect(event: any) {
    this.dialogService.open(EditItensReembolsosDespesaComponent, { parameters: {ItemReembolsoDespesa: event.ItemReembolsoDespesa}, title: 'Item de Reembolso' })
        .afterClosed().subscribe(result => {
              this.pnld.getReembolsosDespesaByReembolsoDespesa(event.ReembolsoDespesa)
      .subscribe((result: any) => {
        this.reembolsosdespesa = result;
      }, (result: any) => {

      });
    });
  }
}
