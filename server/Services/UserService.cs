using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Pnld.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace project.Services
{
    public class UserService : IUserService
    {
        private UserManager<ApplicationUser> userManager;

        public UserService(UserManager<ApplicationUser> userManager)
        {
            this.userManager = userManager;
        }

        public async Task<IActionResult> CreateUser(string email, string password)
        {
            IdentityResult result = null;

            var user = new ApplicationUser { UserName = email, Email = email };

            result = await userManager.CreateAsync(user, password);

            if (result.Succeeded)
            {
                result = await userManager.AddToRoleAsync(user, "3");

                if (!result.Succeeded)
                {
                    throw new Exception(result.Errors.ToString());
                }
            }
            else
            {
                throw new Exception(result.Errors.ToString());
            }

            return new NoContentResult();
        }
    }
}
