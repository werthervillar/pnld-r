using Pnld.Models.Pnld;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Pnld.Services
{
    public class HistoricoService : IHistoricoService
    {
        private readonly Data.PnldContext context;

        public HistoricoService(Data.PnldContext context)
        {
            this.context = context;
        }

        public void SaveHistoricoStatusReembolso(int ReembolsoDespesa, int statusReembolsoDespesa)
        {
            var historico = new HistoricosStatusReembolsosDespesa
            {
                ReembolsoDespesa = ReembolsoDespesa,
                StatusReembolsoDespesa = statusReembolsoDespesa,
                Data = DateTime.Now
            };

            this.context.Add(historico);
            this.context.SaveChanges();
        }
    }
}
