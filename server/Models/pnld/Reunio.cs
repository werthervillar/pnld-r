using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Pnld.Models.Pnld
{
  [Table("Reunioes", Schema = "dbo")]
  public partial class Reunio
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Reuniao
    {
      get;
      set;
    }


    [InverseProperty("Reunio")]
    public ICollection<ReembolsosDespesa> ReembolsosDespesas { get; set; }
    public string Nome
    {
      get;
      set;
    }
    public DateTime? Inicio
    {
      get;
      set;
    }
    public DateTime? Fim
    {
      get;
      set;
    }
  }
}
