using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Pnld.Service;

namespace Pnld.Controllers.Pnld
{
    [Route("api/[controller]/[action]")]
    public class GenerateReembolsosController : Controller
    {
        private IReembolsoDespesaService reembolsoDespesaService;

        public GenerateReembolsosController(IReembolsoDespesaService reembolsoDespesaService)
        {
            this.reembolsoDespesaService = reembolsoDespesaService;
        }
        public IActionResult Generate(string participantes, string reuniao, string nomeResponsavel)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                reembolsoDespesaService.GenerateReembolsos(participantes, reuniao, nomeResponsavel);

                return new NoContentResult();
            }
            catch (Exception ex)
            {
                ModelState.AddModelError("", ex.Message);
                return BadRequest(ModelState);
            }
        }
    }
}