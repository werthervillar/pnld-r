using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Pnld.Models.Pnld
{
  [Table("StatusReembolsosDespesas", Schema = "dbo")]
  public partial class StatusReembolsosDespesa
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int StatusReembolsoDespesa
    {
      get;
      set;
    }


    [InverseProperty("StatusReembolsosDespesa")]
    public ICollection<ReembolsosDespesa> ReembolsosDespesas { get; set; }
    public string Nome
    {
      get;
      set;
    }
  }
}
