export interface Comprovante {
  Comprovante1: number;
  ItemReembolsoDespesa: number;
  Anexo: string;
  Nome: string;
}

export interface HistoricosStatusReembolsosDespesa {
  HistoricoStatusReembolsoDespesas: number;
  ReembolsoDespesa: number;
  StatusReembolsoDespesa: number;
  Data: string;
}

export interface HistoricosStatusReembolsosDespesasList {
  HistoricoStatusReembolsoDespesas: number;
  ReembolsoDespesa: number;
  StatusReembolsoDespesa: number;
  StatusReembolsoDespesaNome: string;
  Data: string;
}

export interface ItensReembolsosDespesa {
  ItemReembolsoDespesa: number;
  ReembolsoDespesa: number;
  Tipo: number;
  Data: string;
  Origem: string;
  Destino: string;
  Entrada: string;
  Saida: string;
  Referencia: string;
  Empresa: string;
  ValorGasto: number;
  ValorConcedido: number;
  Comprovantes: Array<Comprovante>;
}

export interface ItensReembolsosDespesasList {
  ItemReembolsoDespesa: number;
  ReembolsoDespesa: number;
  Tipo: number;
  TipoNome: string;
  Data: string;
  Origem: string;
  Destino: string;
  Entrada: string;
  Saida: string;
  Empresa: string;
  Referencia: string;
  ValorGasto: number;
  ValorConcedido: number;
}

export interface Participante {
  Participante1: number;
  Nome: string;
  CPF: string;
  Banco: string;
  Agencia: string;
  Conta: string;
  Email: string;
  Usuario: string;
  ReembolsosDespesas: Array<ReembolsosDespesa>;
}

export interface ParticipantesSemReembolsoByReuniao {
  Participante: number;
  Nome: string;
  CPF: string;
  Email: string;
}

export interface ReembolsosChartList {
  Reembolsos: number;
  ColaboradorEmail: string;
  Status: string;
  ValorGasto: number;
  ValorConcedido: number;
}

export interface ReembolsosDespesa {
  ReembolsoDespesa: number;
  Status: number;
  Reuniao: number;
  Colaborador: number;
  DataSaida: string;
  DataRetorno: string;
  ValorGasto: number;
  ValorConcedido: number;
  Banco: string;
  Agencia: string;
  Conta: string;
  Responsavel: string;
  Observacoes: string;
  Respostas: string;
  OperacaoBancaria: string;
  HistoricosStatusReembolsosDespesas: Array<HistoricosStatusReembolsosDespesa>;
  ItensReembolsosDespesas: Array<ItensReembolsosDespesa>;
}

export interface ReembolsosDespesasList {
  ReembolsoDespesa: number;
  Status: string;
  Reuniao: string;
  ReuniaoId: number;
  ColaboradorId: number;
  Colaborador: string;
  ColaboradorEmail: string;
  Responsavel: string;
}

export interface Reunio {
  Reuniao: number;
  Nome: string;
  Inicio: string;
  Fim: string;
  ReembolsosDespesas: Array<ReembolsosDespesa>;
}

export interface StatusReembolsosDespesa {
  StatusReembolsoDespesa: number;
  Nome: string;
  ReembolsosDespesas: Array<ReembolsosDespesa>;
}

export interface TiposItensReembolsosDespesa {
  TipoItemReembolsoDespesa: number;
  Nome: string;
  ItensReembolsosDespesas: Array<ItensReembolsosDespesa>;
}
