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

  [ODataRoutePrefix("odata/pnld/ReembolsosChartLists")]
  [Route("mvc/odata/pnld/ReembolsosChartLists")]
  public partial class ReembolsosChartListsController : ODataController
  {
    private Data.PnldContext context;

    public ReembolsosChartListsController(Data.PnldContext context)
    {
      this.context = context;
    }
    // GET /odata/Pnld/ReembolsosChartLists
    [EnableQuery(MaxExpansionDepth=10,MaxNodeCount=1000)]
    [HttpGet]
    public IEnumerable<Models.Pnld.ReembolsosChartList> GetReembolsosChartLists()
    {
      var items = this.context.ReembolsosChartLists.AsNoTracking().AsQueryable<Models.Pnld.ReembolsosChartList>();
      this.OnReembolsosChartListsRead(ref items);

      return items;
    }

    partial void OnReembolsosChartListsRead(ref IQueryable<Models.Pnld.ReembolsosChartList> items);

    [EnableQuery(MaxExpansionDepth=10,MaxNodeCount=1000)]
    [HttpGet("{Status}")]
    public SingleResult<ReembolsosChartList> GetReembolsosChartList(string key)
    {
        var items = this.context.ReembolsosChartLists.AsNoTracking().Where(i=>i.Status == key);
        return SingleResult.Create(items);
    }
  }
}
