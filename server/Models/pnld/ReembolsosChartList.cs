using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Pnld.Models.Pnld
{
  [Table("ReembolsosChartList", Schema = "dbo")]
  public partial class ReembolsosChartList
  {
    public int? Reembolsos
    {
      get;
      set;
    }
    public string ColaboradorEmail
    {
      get;
      set;
    }
    [Key]
    public string Status
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
