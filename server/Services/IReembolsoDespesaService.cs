using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Pnld.Service
{
    public interface IReembolsoDespesaService
    {
        void GenerateReembolsos(string participantes, string reuniao, string nomeResponsavel);
    }
}
