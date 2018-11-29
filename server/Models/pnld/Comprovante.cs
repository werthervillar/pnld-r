using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Pnld.Models.Pnld
{
  [Table("Comprovantes", Schema = "dbo")]
  public partial class Comprovante
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [Column("Comprovante")]
    public int Comprovante1
    {
      get;
      set;
    }
    public int? ItemReembolsoDespesa
    {
      get;
      set;
    }

    [ForeignKey("ItemReembolsoDespesa")]
    public ItensReembolsosDespesa ItensReembolsosDespesa { get; set; }
    public string Anexo
    {
      get;
      set;
    }
    public string Nome
    {
      get;
      set;
    }
  }
}
