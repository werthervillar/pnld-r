using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Pnld.Services
{
    public interface IUserService
    {
        Task<IActionResult> CreateUser(string email, string password);
    }
}
