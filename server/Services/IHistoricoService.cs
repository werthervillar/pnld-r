using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Pnld.Services
{
    public interface IHistoricoService
    {
        void SaveHistoricoStatusReembolso(int ReembolsoDespesa, int statusReembolsoDespesa);
    }
}
