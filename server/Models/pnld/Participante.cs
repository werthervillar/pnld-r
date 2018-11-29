using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Pnld.Models.Pnld
{
  [Table("Participantes", Schema = "dbo")]
  public partial class Participante
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [Column("Participante")]
    public int Participante1
    {
      get;
      set;
    }


    [InverseProperty("Participante")]
    public ICollection<ReembolsosDespesa> ReembolsosDespesas { get; set; }
    public string Nome
    {
      get;
      set;
    }
    public string CPF
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
    public string Email
    {
      get;
      set;
    }
    public string Usuario
    {
      get;
      set;
    }
  }
}
