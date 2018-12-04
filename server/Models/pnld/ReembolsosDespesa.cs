using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Pnld.Models.Pnld
{
  [Table("ReembolsosDespesas", Schema = "dbo")]
  public partial class ReembolsosDespesa
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int ReembolsoDespesa
    {
      get;
      set;
    }


    [InverseProperty("ReembolsosDespesa")]
    public ICollection<HistoricosStatusReembolsosDespesa> HistoricosStatusReembolsosDespesas { get; set; }

    [InverseProperty("ReembolsosDespesa")]
    public ICollection<ItensReembolsosDespesa> ItensReembolsosDespesas { get; set; }
    public int Status
    {
      get;
      set;
    }

    [ForeignKey("Status")]
    public StatusReembolsosDespesa StatusReembolsosDespesa { get; set; }
    public int Reuniao
    {
      get;
      set;
    }

    [ForeignKey("Reuniao")]
    public Reunio Reunio { get; set; }
    public int Colaborador
    {
      get;
      set;
    }

    [ForeignKey("Colaborador")]
    public Participante Participante { get; set; }
    public DateTime? DataSaida
    {
      get;
      set;
    }
    public DateTime? DataRetorno
    {
      get;
      set;
    }
    public decimal? ValorGasto
    {
      get;
      set;
    }
    public decimal? ValorConcedido
    {
      get;
      set;
    }
    public string Banco
    {
      get;
      set;
    }
    public string Agencia
    {
      get;
      set;
    }
    public string Conta
    {
      get;
      set;
    }
    public string Responsavel
    {
      get;
      set;
    }
    public string Observacoes
    {
      get;
      set;
    }
    public string Respostas
    {
      get;
      set;
    }
    public string OperacaoBancaria
    {
      get;
      set;
    }
  }
}
