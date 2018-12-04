using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Pnld.Models.Pnld
{
  [Table("HistoricosStatusReembolsosDespesas", Schema = "dbo")]
  public partial class HistoricosStatusReembolsosDespesa
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
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

    [ForeignKey("ReembolsoDespesa")]
    public ReembolsosDespesa ReembolsosDespesa { get; set; }
    public int StatusReembolsoDespesa
    {
      get;
      set;
    }

    [ForeignKey("StatusReembolsoDespesa")]
    public StatusReembolsosDespesa StatusReembolsosDespesa { get; set; }
    public DateTime Data
    {
      get;
      set;
    }
  }
}
