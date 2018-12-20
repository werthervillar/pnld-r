using System.Reflection;
using System.Linq;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

using Pnld.Models.Pnld;

namespace Pnld.Data
{
  public partial class PnldContext : Microsoft.EntityFrameworkCore.DbContext
  {
    public PnldContext(DbContextOptions<PnldContext> options):base(options)
    {
    }

    public PnldContext()
    {
    }

    partial void OnModelBuilding(ModelBuilder builder);

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<Pnld.Models.Pnld.Comprovante>()
              .HasOne(i => i.ItensReembolsosDespesa)
              .WithMany(i => i.Comprovantes)
              .HasForeignKey(i => i.ItemReembolsoDespesa)
              .HasPrincipalKey(i => i.ItemReembolsoDespesa);
        builder.Entity<Pnld.Models.Pnld.HistoricosStatusReembolsosDespesa>()
              .HasOne(i => i.ReembolsosDespesa)
              .WithMany(i => i.HistoricosStatusReembolsosDespesas)
              .HasForeignKey(i => i.ReembolsoDespesa)
              .HasPrincipalKey(i => i.ReembolsoDespesa);
        builder.Entity<Pnld.Models.Pnld.HistoricosStatusReembolsosDespesa>()
              .HasOne(i => i.StatusReembolsosDespesa)
              .WithMany(i => i.HistoricosStatusReembolsosDespesas)
              .HasForeignKey(i => i.StatusReembolsoDespesa)
              .HasPrincipalKey(i => i.StatusReembolsoDespesa);
        builder.Entity<Pnld.Models.Pnld.ItensReembolsosDespesa>()
              .HasOne(i => i.ReembolsosDespesa)
              .WithMany(i => i.ItensReembolsosDespesas)
              .HasForeignKey(i => i.ReembolsoDespesa)
              .HasPrincipalKey(i => i.ReembolsoDespesa);
        builder.Entity<Pnld.Models.Pnld.ItensReembolsosDespesa>()
              .HasOne(i => i.TiposItensReembolsosDespesa)
              .WithMany(i => i.ItensReembolsosDespesas)
              .HasForeignKey(i => i.Tipo)
              .HasPrincipalKey(i => i.TipoItemReembolsoDespesa);
        builder.Entity<Pnld.Models.Pnld.ReembolsosDespesa>()
              .HasOne(i => i.StatusReembolsosDespesa)
              .WithMany(i => i.ReembolsosDespesas)
              .HasForeignKey(i => i.Status)
              .HasPrincipalKey(i => i.StatusReembolsoDespesa);
        builder.Entity<Pnld.Models.Pnld.ReembolsosDespesa>()
              .HasOne(i => i.Reunio)
              .WithMany(i => i.ReembolsosDespesas)
              .HasForeignKey(i => i.Reuniao)
              .HasPrincipalKey(i => i.Reuniao);
        builder.Entity<Pnld.Models.Pnld.ReembolsosDespesa>()
              .HasOne(i => i.Participante)
              .WithMany(i => i.ReembolsosDespesas)
              .HasForeignKey(i => i.Colaborador)
              .HasPrincipalKey(i => i.Participante1);

        builder.Entity<Pnld.Models.Pnld.ItensReembolsosDespesa>()
              .Property(p => p.ValorGasto)
              .HasDefaultValueSql("((0))");

        builder.Entity<Pnld.Models.Pnld.ItensReembolsosDespesa>()
              .Property(p => p.ValorConcedido)
              .HasDefaultValueSql("((0))");

        builder.Entity<Pnld.Models.Pnld.ReembolsosDespesa>()
              .Property(p => p.ValorGasto)
              .HasDefaultValueSql("((0))");

        builder.Entity<Pnld.Models.Pnld.ReembolsosDespesa>()
              .Property(p => p.ValorConcedido)
              .HasDefaultValueSql("((0))");

        this.OnModelBuilding(builder);
    }


    public DbSet<Pnld.Models.Pnld.Comprovante> Comprovantes
    {
      get;
      set;
    }

    public DbSet<Pnld.Models.Pnld.HistoricosStatusReembolsosDespesa> HistoricosStatusReembolsosDespesas
    {
      get;
      set;
    }

    public DbSet<Pnld.Models.Pnld.HistoricosStatusReembolsosDespesasList> HistoricosStatusReembolsosDespesasLists
    {
      get;
      set;
    }

    public DbSet<Pnld.Models.Pnld.ItensReembolsosDespesa> ItensReembolsosDespesas
    {
      get;
      set;
    }

    public DbSet<Pnld.Models.Pnld.ItensReembolsosDespesasList> ItensReembolsosDespesasLists
    {
      get;
      set;
    }

    public DbSet<Pnld.Models.Pnld.Participante> Participantes
    {
      get;
      set;
    }

    public DbSet<Pnld.Models.Pnld.ParticipantesSemReembolsoByReuniao> ParticipantesSemReembolsoByReuniaos
    {
      get;
      set;
    }

    public DbSet<Pnld.Models.Pnld.ReembolsosChartList> ReembolsosChartLists
    {
      get;
      set;
    }

    public DbSet<Pnld.Models.Pnld.ReembolsosDespesa> ReembolsosDespesas
    {
      get;
      set;
    }

    public DbSet<Pnld.Models.Pnld.ReembolsosDespesasList> ReembolsosDespesasLists
    {
      get;
      set;
    }

    public DbSet<Pnld.Models.Pnld.Reunio> Reunios
    {
      get;
      set;
    }

    public DbSet<Pnld.Models.Pnld.StatusReembolsosDespesa> StatusReembolsosDespesas
    {
      get;
      set;
    }

    public DbSet<Pnld.Models.Pnld.TiposItensReembolsosDespesa> TiposItensReembolsosDespesas
    {
      get;
      set;
    }
  }
}
