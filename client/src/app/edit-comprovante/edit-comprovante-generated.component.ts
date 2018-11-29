/*
  This file is automatically generated. Any changes will be overwritten.
  Modify edit-comprovante.component.ts instead.
*/
import { ChangeDetectorRef, ViewChild, AfterViewInit, Injector, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';

import { DialogService, DIALOG_PARAMETERS, DialogRef } from '@radzen/angular/dist/dialog';
import { NotificationService } from '@radzen/angular/dist/notification';
import { ContentComponent } from '@radzen/angular/dist/content';
import { LabelComponent } from '@radzen/angular/dist/label';
import { ButtonComponent } from '@radzen/angular/dist/button';
import { FormComponent } from '@radzen/angular/dist/form';

import { PnldService } from '../pnld.service';
import { SecurityService } from '../security.service';

export class EditComprovanteGenerated implements AfterViewInit, OnInit, OnDestroy {
  // Components
  @ViewChild('content1') content1: ContentComponent;
  @ViewChild('closeLabel') closeLabel: LabelComponent;
  @ViewChild('closeButton') closeButton: ButtonComponent;
  @ViewChild('form0') form0: FormComponent;

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

  comprovante: any;

  getItensReembolsosDespesasResult: any;

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

    this.pnld.getComprovanteByComprovante1(this.parameters.Comprovante)
    .subscribe((result: any) => {
      this.comprovante = result;
    }, (result: any) => {
      this.canEdit = !(result.status == 400);
    });

    this.pnld.getItensReembolsosDespesas(null, null, null, null, null, null, null, null)
    .subscribe((result: any) => {
      this.getItensReembolsosDespesasResult = result.value;
    }, (result: any) => {

    });
  }

  closeButtonClick(event: any) {
    if (this.dialogRef) {
      this.dialogRef.close();
    } else {
      this._location.back();
    }
  }

  form0Cancel(event: any) {
    if (this.dialogRef) {
      this.dialogRef.close();
    } else {
      this._location.back();
    }
  }

  form0Submit(event: any) {
    this.pnld.updateComprovante(this.parameters.Comprovante1, event)
    .subscribe((result: any) => {
      if (this.dialogRef) {
        this.dialogRef.close();
      } else {
        this._location.back();
      }
    }, (result: any) => {
      this.canEdit = !(result.status == 400);

      this.notificationService.notify({ severity: "error", summary: `Error`, detail: `Unable to update Comprovante` });
    });
  }
}
