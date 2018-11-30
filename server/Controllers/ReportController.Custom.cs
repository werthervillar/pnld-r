using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;

namespace Pnld.Controllers
{
    public partial class ReportController
    {
        partial void OnHttpClientHandlerCreate(ref HttpClientHandler handler)
        {
            handler.PreAuthenticate = true;
            handler.Credentials = new System.Net.NetworkCredential("usuariors", "!@#%jmJ", "casavillar");
            System.Net.ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12 | SecurityProtocolType.Tls11 | SecurityProtocolType.Tls;
            //handler.UseDefaultCredentials = true;
            //handler.Credentials = new System.Net.NetworkCredential(rsOptions.Value.User, rsOptions.Value.password, rsOptions.Value.domain);
        }
    }
}
