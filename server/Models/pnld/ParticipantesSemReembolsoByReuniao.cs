using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Pnld.Models.Pnld
{
  [Table("ParticipantesSemReembolsoByReuniao", Schema = "dbo")]
  public partial class ParticipantesSemReembolsoByReuniao
  {
    [Key]
    public int Participante
    {
      get;
      set;
    }
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
    public string Email
    {
      get;
      set;
    }
  }
}
