using Microsoft.AspNet.OData;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Pnld.Models.Pnld;
using Pnld.Data;

namespace Pnld.Controllers.Pnld
{
    public partial class ItensReembolsosDespesasController
    {
      
        partial void OnItensReembolsosDespesasRead(ref IQueryable<ItensReembolsosDespesa> items)
        {

        }
        partial void OnItensReembolsosDespesaDeleted(ItensReembolsosDespesa item)
        {
            ReembolsosDespesa reembolso = this.context.ReembolsosDespesas.FirstOrDefault(i => i.ReembolsoDespesa == item.ReembolsoDespesa);

            decimal? valorGasto = decimal.Zero;
            decimal? valorConcedido = decimal.Zero;

            var items = this.context.ItensReembolsosDespesas.Where(i => i.ReembolsoDespesa == item.ReembolsoDespesa && i.ItemReembolsoDespesa != item.ItemReembolsoDespesa);

            foreach (ItensReembolsosDespesa itemRec in items)
            {
                valorGasto += itemRec.ValorGasto == null ? decimal.Zero : itemRec.ValorGasto;
                valorConcedido += itemRec.ValorConcedido == null ? decimal.Zero : itemRec.ValorConcedido;
            }

            reembolso.ValorGasto = valorGasto;
            reembolso.ValorConcedido = valorConcedido;

            this.context.ReembolsosDespesas.Update(reembolso);
            this.context.SaveChanges();
        }
        partial void OnItensReembolsosDespesaUpdated(ItensReembolsosDespesa item)
        {
            ReembolsosDespesa reembolso = this.context.ReembolsosDespesas.FirstOrDefault(i => i.ReembolsoDespesa == item.ReembolsoDespesa);

            decimal? valorGasto = decimal.Zero;
            decimal? valorConcedido = decimal.Zero;

            var items = this.context.ItensReembolsosDespesas.Where(i => i.ReembolsoDespesa == item.ReembolsoDespesa);

            foreach (ItensReembolsosDespesa itemRec in items)
            {
                valorGasto += itemRec.ValorGasto == null ? decimal.Zero : itemRec.ValorGasto;
                valorConcedido += itemRec.ValorConcedido == null ? decimal.Zero : itemRec.ValorConcedido;
            }

            reembolso.ValorGasto = valorGasto;
            reembolso.ValorConcedido = valorConcedido;

            this.context.ReembolsosDespesas.Update(reembolso);
            this.context.SaveChanges();
        }

        partial void OnItensReembolsosDespesaCreated(ItensReembolsosDespesa item)
        {
            ReembolsosDespesa reembolso = this.context.ReembolsosDespesas.FirstOrDefault(i => i.ReembolsoDespesa == item.ReembolsoDespesa);

            decimal? valorGasto = reembolso.ValorGasto;
            decimal? valorConcedido = reembolso.ValorConcedido;

            valorGasto += item.ValorGasto == null ? decimal.Zero : item.ValorGasto;
            valorConcedido += item.ValorConcedido == null ? decimal.Zero : item.ValorConcedido;

            reembolso.ValorGasto = valorGasto;
            reembolso.ValorConcedido = valorConcedido;

            this.context.ReembolsosDespesas.Update(reembolso);
            this.context.SaveChanges();
        }
    }
}
