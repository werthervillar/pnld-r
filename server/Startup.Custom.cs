using Microsoft.Extensions.DependencyInjection;
using Pnld.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Pnld
{
    public partial class Startup
    {
        partial void OnConfigureServices(IServiceCollection services)
        {
            services.AddScoped<IHistoricoService, HistoricoService>();
        }
    }
}
