import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { ConfigService } from './config.service';
import { ODataClient } from './odata-client';
import * as models from './pnld.model';

@Injectable()
export class PnldService {
  odata: ODataClient;
  basePath: string;

  constructor(private http: HttpClient, private config: ConfigService) {
    this.basePath = config.get('pnld');
    this.odata = new ODataClient(this.http, this.basePath, { legacy: false, withCredentials: true });
  }

  getComprovantes(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) {
    return this.odata.get(`/Comprovantes`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createComprovante(comprovante: models.Comprovante | null) {
    return this.odata.post(`/Comprovantes`, comprovante);
  }

  deleteComprovante(comprovante1: number | null) {
    return this.odata.delete(`/Comprovantes(${comprovante1})`, item => !(item.Comprovante1 == comprovante1));
  }

  getComprovanteByComprovante1(comprovante1: number | null) {
    return this.odata.get(`/Comprovantes(${comprovante1})`);
  }

  updateComprovante(comprovante1: number | null, comprovante: models.Comprovante | null) {
    return this.odata.patch(`/Comprovantes(${comprovante1})`, comprovante, item => item.Comprovante1 == comprovante1);
  }

  getHistoricosStatusReembolsosDespesas(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) {
    return this.odata.get(`/HistoricosStatusReembolsosDespesas`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createHistoricosStatusReembolsosDespesa(historicosStatusReembolsosDespesa: models.HistoricosStatusReembolsosDespesa | null) {
    return this.odata.post(`/HistoricosStatusReembolsosDespesas`, historicosStatusReembolsosDespesa);
  }

  deleteHistoricosStatusReembolsosDespesa(historicoStatusReembolsoDespesas: number | null) {
    return this.odata.delete(`/HistoricosStatusReembolsosDespesas(${historicoStatusReembolsoDespesas})`, item => !(item.HistoricoStatusReembolsoDespesas == historicoStatusReembolsoDespesas));
  }

  getHistoricosStatusReembolsosDespesaByHistoricoStatusReembolsoDespesas(historicoStatusReembolsoDespesas: number | null) {
    return this.odata.get(`/HistoricosStatusReembolsosDespesas(${historicoStatusReembolsoDespesas})`);
  }

  updateHistoricosStatusReembolsosDespesa(historicoStatusReembolsoDespesas: number | null, historicosStatusReembolsosDespesa: models.HistoricosStatusReembolsosDespesa | null) {
    return this.odata.patch(`/HistoricosStatusReembolsosDespesas(${historicoStatusReembolsoDespesas})`, historicosStatusReembolsosDespesa, item => item.HistoricoStatusReembolsoDespesas == historicoStatusReembolsoDespesas);
  }

  getItensReembolsosDespesas(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) {
    return this.odata.get(`/ItensReembolsosDespesas`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createItensReembolsosDespesa(itensReembolsosDespesa: models.ItensReembolsosDespesa | null) {
    return this.odata.post(`/ItensReembolsosDespesas`, itensReembolsosDespesa);
  }

  deleteItensReembolsosDespesa(itemReembolsoDespesa: number | null) {
    return this.odata.delete(`/ItensReembolsosDespesas(${itemReembolsoDespesa})`, item => !(item.ItemReembolsoDespesa == itemReembolsoDespesa));
  }

  getItensReembolsosDespesaByItemReembolsoDespesa(itemReembolsoDespesa: number | null) {
    return this.odata.get(`/ItensReembolsosDespesas(${itemReembolsoDespesa})`);
  }

  updateItensReembolsosDespesa(itemReembolsoDespesa: number | null, itensReembolsosDespesa: models.ItensReembolsosDespesa | null) {
    return this.odata.patch(`/ItensReembolsosDespesas(${itemReembolsoDespesa})`, itensReembolsosDespesa, item => item.ItemReembolsoDespesa == itemReembolsoDespesa);
  }

  getParticipantes(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) {
    return this.odata.get(`/Participantes`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createParticipante(participante: models.Participante | null) {
    return this.odata.post(`/Participantes`, participante);
  }

  deleteParticipante(participante1: number | null) {
    return this.odata.delete(`/Participantes(${participante1})`, item => !(item.Participante1 == participante1));
  }

  getParticipanteByParticipante1(participante1: number | null) {
    return this.odata.get(`/Participantes(${participante1})`);
  }

  updateParticipante(participante1: number | null, participante: models.Participante | null) {
    return this.odata.patch(`/Participantes(${participante1})`, participante, item => item.Participante1 == participante1);
  }

  getReembolsosDespesas(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) {
    return this.odata.get(`/ReembolsosDespesas`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createReembolsosDespesa(reembolsosDespesa: models.ReembolsosDespesa | null) {
    return this.odata.post(`/ReembolsosDespesas`, reembolsosDespesa);
  }

  deleteReembolsosDespesa(reembolsoDespesa: number | null) {
    return this.odata.delete(`/ReembolsosDespesas(${reembolsoDespesa})`, item => !(item.ReembolsoDespesa == reembolsoDespesa));
  }

  getReembolsosDespesaByReembolsoDespesa(reembolsoDespesa: number | null) {
    return this.odata.get(`/ReembolsosDespesas(${reembolsoDespesa})`);
  }

  updateReembolsosDespesa(reembolsoDespesa: number | null, reembolsosDespesa: models.ReembolsosDespesa | null) {
    return this.odata.patch(`/ReembolsosDespesas(${reembolsoDespesa})`, reembolsosDespesa, item => item.ReembolsoDespesa == reembolsoDespesa);
  }

  getReembolsosDespesasLists(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) {
    return this.odata.get(`/ReembolsosDespesasLists`, { filter, top, skip, orderby, count, expand, format, select });
  }

  getReunios(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) {
    return this.odata.get(`/Reunios`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createReunio(reunio: models.Reunio | null) {
    return this.odata.post(`/Reunios`, reunio);
  }

  deleteReunio(reuniao: number | null) {
    return this.odata.delete(`/Reunios(${reuniao})`, item => !(item.Reuniao == reuniao));
  }

  getReunioByReuniao(reuniao: number | null) {
    return this.odata.get(`/Reunios(${reuniao})`);
  }

  updateReunio(reuniao: number | null, reunio: models.Reunio | null) {
    return this.odata.patch(`/Reunios(${reuniao})`, reunio, item => item.Reuniao == reuniao);
  }

  getStatusReembolsosDespesas(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) {
    return this.odata.get(`/StatusReembolsosDespesas`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createStatusReembolsosDespesa(statusReembolsosDespesa: models.StatusReembolsosDespesa | null) {
    return this.odata.post(`/StatusReembolsosDespesas`, statusReembolsosDespesa);
  }

  deleteStatusReembolsosDespesa(statusReembolsoDespesa: number | null) {
    return this.odata.delete(`/StatusReembolsosDespesas(${statusReembolsoDespesa})`, item => !(item.StatusReembolsoDespesa == statusReembolsoDespesa));
  }

  getStatusReembolsosDespesaByStatusReembolsoDespesa(statusReembolsoDespesa: number | null) {
    return this.odata.get(`/StatusReembolsosDespesas(${statusReembolsoDespesa})`);
  }

  updateStatusReembolsosDespesa(statusReembolsoDespesa: number | null, statusReembolsosDespesa: models.StatusReembolsosDespesa | null) {
    return this.odata.patch(`/StatusReembolsosDespesas(${statusReembolsoDespesa})`, statusReembolsosDespesa, item => item.StatusReembolsoDespesa == statusReembolsoDespesa);
  }

  getTiposItensReembolsosDespesas(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) {
    return this.odata.get(`/TiposItensReembolsosDespesas`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createTiposItensReembolsosDespesa(tiposItensReembolsosDespesa: models.TiposItensReembolsosDespesa | null) {
    return this.odata.post(`/TiposItensReembolsosDespesas`, tiposItensReembolsosDespesa);
  }

  deleteTiposItensReembolsosDespesa(tipoItemReembolsoDespesa: number | null) {
    return this.odata.delete(`/TiposItensReembolsosDespesas(${tipoItemReembolsoDespesa})`, item => !(item.TipoItemReembolsoDespesa == tipoItemReembolsoDespesa));
  }

  getTiposItensReembolsosDespesaByTipoItemReembolsoDespesa(tipoItemReembolsoDespesa: number | null) {
    return this.odata.get(`/TiposItensReembolsosDespesas(${tipoItemReembolsoDespesa})`);
  }

  updateTiposItensReembolsosDespesa(tipoItemReembolsoDespesa: number | null, tiposItensReembolsosDespesa: models.TiposItensReembolsosDespesa | null) {
    return this.odata.patch(`/TiposItensReembolsosDespesas(${tipoItemReembolsoDespesa})`, tiposItensReembolsosDespesa, item => item.TipoItemReembolsoDespesa == tipoItemReembolsoDespesa);
  }
}
