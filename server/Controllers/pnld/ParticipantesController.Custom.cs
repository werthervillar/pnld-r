using Microsoft.AspNet.OData;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Pnld.Data;
using Pnld.Models;
using Pnld.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace project.Controllers.pnld
{
    public partial class ParticipantesController: ODataController
    {
        private PnldContext context;
        private ApplicationIdentityDbContext identityContext;
        private UserManager<ApplicationUser> userManager;

        public ParticipantesController(PnldContext context, ApplicationIdentityDbContext identityContext, UserManager<ApplicationUser> userManager)
        {
            this.context = context;
            this.userManager = userManager;
            this.identityContext = identityContext;
        }

        partial void OnParticipanteCreated(Pnld.Models.Pnld.Participante item);

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Pnld.Models.Pnld.Participante item)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                if (item == null)
                {
                    return BadRequest();
                }

                this.OnParticipanteCreated(item);

                IdentityResult result = null;

                var user = new ApplicationUser { UserName = item.Email, Email = item.Email };

                result = await userManager.CreateAsync(user, "Password!@#" + item.CPF.Substring(0, 4));

                if (result.Succeeded)
                {
                    result = await userManager.AddToRoleAsync(user, "Colaborador");

                    if (!result.Succeeded)
                    {
                        return IdentityError(result);
                    }
                }
                else
                {
                    return IdentityError(result);
                }

                var usuario = identityContext.Users.FirstOrDefault(u => u.Email == item.Email);

                item.Usuario = usuario.Id;

                this.context.Participantes.Add(item);
                this.context.SaveChanges();

                return Created($"odata/Pnld/Participantes/{item.Participante1}", item);
            }
            catch (Exception ex)
            {
                ModelState.AddModelError("", ex.Message);
                return BadRequest(ModelState);
            }
        }

        private IActionResult IdentityError(IdentityResult result)
        {
            var message = string.Join(", ", result.Errors.Select(error => error.Description));

            return BadRequest(new { error = new { message } });
        }
    }
}
