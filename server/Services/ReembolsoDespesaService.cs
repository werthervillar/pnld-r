using Pnld.Models.Pnld;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Pnld.Service
{
    public class ReembolsoDespesaService : IReembolsoDespesaService
    {
        private Data.PnldContext context;
        private Data.ApplicationIdentityDbContext identityContext;

        public ReembolsoDespesaService(Data.PnldContext context, Data.ApplicationIdentityDbContext identityContext)
        {
            this.context = context;
            this.identityContext = identityContext;
        }
        public void GenerateReembolsos(string participantes, string reuniao, string nomeResponsavel)
        {
            string[] participantesItems = participantes.Split(",".ToCharArray());
            var responsavel = identityContext.Users.First(u => u.UserName == nomeResponsavel);
            var reuniaoRec = context.Reunios.First(r => r.Reuniao == int.Parse (reuniao));

            foreach(string participanteItem in participantesItems)
            {
                ReembolsosDespesa reembolso = new ReembolsosDespesa();

                reembolso.Reuniao = int.Parse(reuniao);
                reembolso.Colaborador = int.Parse(participanteItem);
                reembolso.Responsavel = responsavel.Id;
                reembolso.Status = int.Parse (StatusReembolsosDespesa.EM_ABERTO);

                if (reuniaoRec.Inicio != null)
                {
                    reembolso.DataSaida = reuniaoRec.Inicio;
                }
                else
                {
                    reembolso.DataSaida = DateTime.Now;
                }

                if (reuniaoRec.Fim != null)
                {
                    reembolso.DataRetorno = reuniaoRec.Fim;
                }
                else
                {
                    reembolso.DataRetorno = DateTime.Now;
                }

                this.context.Add(reembolso);
                this.context.SaveChanges();

            }
        }
    }
}
