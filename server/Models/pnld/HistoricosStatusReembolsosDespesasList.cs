using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Pnld.Models.Pnld
{
  [Table("HistoricosStatusReembolsosDespesasList", Schema = "dbo")]
  public partial class HistoricosStatusReembolsosDespesasList
  {
    [Key]
    public int HistoricoStatusReembolsoDespesas
    {
      get;
      set;
    }
    public int ReembolsoDespesa
    {
      get;
      set;
    }
    public int StatusReembolsoDespesa
    {
      get;
      set;
    }
    public string StatusReembolsoDespesaNome
    {
      get;
      set;
    }
    public DateTime Data
    {
      get;
      set;
    }
  }
}
