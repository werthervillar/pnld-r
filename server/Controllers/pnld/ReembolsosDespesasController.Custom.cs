using Pnld.Models.Pnld;
using Pnld.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Pnld.Controllers.Pnld
{
    public partial class ReembolsosDespesasController
    {
        private IHistoricoService _historicoService;

        partial void OnReembolsosDespesaUpdated(ReembolsosDespesa item)
        {
            foreach (var entry in context.Entry(item).Properties)
            {
                if (entry.Metadata.Name == "Status" && entry.IsModified)
                {
                    this.HistoricoService().SaveHistoricoStatusReembolso(item.ReembolsoDespesa, item.Status);

                    break;
                }
            }
        }

        partial void OnReembolsosDespesaCreated(ReembolsosDespesa item)
        {
            //this.HistoricoService().SaveHistoricoStatusReembolso(item.ReembolsoDespesa, item.Status);
        }

        IHistoricoService HistoricoService()
        {
            if (_historicoService == null)
            {
                _historicoService = (IHistoricoService)HttpContext.RequestServices.GetService(typeof(IHistoricoService));
            }

            return _historicoService;
        }
    }
}
