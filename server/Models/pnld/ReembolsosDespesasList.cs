using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Pnld.Models.Pnld
{
  [Table("ReembolsosDespesasList", Schema = "dbo")]
  public partial class ReembolsosDespesasList
  {
    [Key]
    public int ReembolsoDespesa
    {
      get;
      set;
    }
    public string Status
    {
      get;
      set;
    }
    public string Reuniao
    {
      get;
      set;
    }
    public int ReuniaoId
    {
      get;
      set;
    }
    public int ColaboradorId
    {
      get;
      set;
    }
    public string Colaborador
    {
      get;
      set;
    }
    public string ColaboradorEmail
    {
      get;
      set;
    }
    public string Responsavel
    {
      get;
      set;
    }
  }
}
