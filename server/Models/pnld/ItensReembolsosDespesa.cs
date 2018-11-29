using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Pnld.Models.Pnld
{
  [Table("ItensReembolsosDespesas", Schema = "dbo")]
  public partial class ItensReembolsosDespesa
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int ItemReembolsoDespesa
    {
      get;
      set;
    }


    [InverseProperty("ItensReembolsosDespesa")]
    public ICollection<Comprovante> Comprovantes { get; set; }
    public int ReembolsoDespesa
    {
      get;
      set;
    }

    [ForeignKey("ReembolsoDespesa")]
    public ReembolsosDespesa ReembolsosDespesa { get; set; }
    public int Tipo
    {
      get;
      set;
    }

    [ForeignKey("Tipo")]
    public TiposItensReembolsosDespesa TiposItensReembolsosDespesa { get; set; }
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
    public string Referencia
    {
      get;
      set;
    }
    public string Empresa
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
  }
}
