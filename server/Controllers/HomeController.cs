using System;
using Microsoft.AspNetCore.Mvc;

namespace Pnld.Controllers
{
    public partial class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
