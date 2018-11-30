export interface Comprovante {
  Comprovante1: number;
  ItemReembolsoDespesa: number;
  Anexo: string;
  Nome: string;
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
  ItensReembolsosDespesas: Array<ItensReembolsosDespesa>;
}

export interface ReembolsosDespesasList {
  ReembolsoDespesa: number;
  Status: string;
  Reuniao: string;
  ColaboradorId: number;
  Colaborador: string;
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
