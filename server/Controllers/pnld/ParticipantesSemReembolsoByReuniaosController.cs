using System;
using System.Net;
using System.Data;
using System.Linq;
using System.Data.SqlClient;
using System.Collections.Generic;
using Newtonsoft.Json.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNet.OData;
using Microsoft.AspNet.OData.Routing;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.AspNet.OData.Query;



namespace Pnld.Controllers.Pnld
{
  using Models;
  using Data;
  using Models.Pnld;

  public partial class ParticipantesSemReembolsoByReuniaosController : ODataController
  {
    private Data.PnldContext context;

    public ParticipantesSemReembolsoByReuniaosController(Data.PnldContext context)
    {
      this.context = context;
    }

    [HttpGet]
    [EnableQuery(MaxExpansionDepth=10,MaxNodeCount=1000)]
    [ODataRoute("ParticipantesSemReembolsoByReuniaosFunc(Reuniao={Reuniao})")]
    public IActionResult ParticipantesSemReembolsoByReuniaosFunc([FromODataUri] int? Reuniao)
    {
        this.OnParticipantesSemReembolsoByReuniaosDefaultParams(ref Reuniao);

        var items = this.context.ParticipantesSemReembolsoByReuniaos.AsNoTracking().FromSql("EXEC [dbo].[ParticipantesSemReembolsoByReuniao] {0}", Reuniao);

        this.OnParticipantesSemReembolsoByReuniaosInvoke(ref items);

        return Ok(items);
    }

    partial void OnParticipantesSemReembolsoByReuniaosDefaultParams(ref int? Reuniao);

    partial void OnParticipantesSemReembolsoByReuniaosInvoke(ref IQueryable<Models.Pnld.ParticipantesSemReembolsoByReuniao> items);
  }
}
