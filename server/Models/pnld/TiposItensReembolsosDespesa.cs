using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Pnld.Models.Pnld
{
  [Table("TiposItensReembolsosDespesas", Schema = "dbo")]
  public partial class TiposItensReembolsosDespesa
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int TipoItemReembolsoDespesa
    {
      get;
      set;
    }


    [InverseProperty("TiposItensReembolsosDespesa")]
    public ICollection<ItensReembolsosDespesa> ItensReembolsosDespesas { get; set; }
    public string Nome
    {
      get;
      set;
    }
  }
}
