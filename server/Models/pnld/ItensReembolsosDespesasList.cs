using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Pnld.Models.Pnld
{
  [Table("ItensReembolsosDespesasList", Schema = "dbo")]
  public partial class ItensReembolsosDespesasList
  {
    [Key]
    public int ItemReembolsoDespesa
    {
      get;
      set;
    }
    public int ReembolsoDespesa
    {
      get;
      set;
    }
    public int Tipo
    {
      get;
      set;
    }
    public string TipoNome
    {
      get;
      set;
    }
    public DateTime Data
    {
      get;
      set;
    }
    public string Origem
    {
      get;
      set;
    }
    public string Destino
    {
      get;
      set;
    }
    public DateTime? Entrada
    {
      get;
      set;
    }
    public DateTime? Saida
    {
      get;
      set;
    }
    public string Empresa
    {
      get;
      set;
    }
    public string Referencia
    {
      get;
      set;
    }
    public decimal ValorGasto
    {
      get;
      set;
    }
    public decimal ValorConcedido
    {
      get;
      set;
    }
  }
}
