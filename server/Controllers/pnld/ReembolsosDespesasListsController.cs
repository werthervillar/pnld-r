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

  [ODataRoutePrefix("odata/pnld/ReembolsosDespesasLists")]
  [Route("mvc/odata/pnld/ReembolsosDespesasLists")]
  public partial class ReembolsosDespesasListsController : ODataController
  {
    private Data.PnldContext context;

    public ReembolsosDespesasListsController(Data.PnldContext context)
    {
      this.context = context;
    }
    // GET /odata/Pnld/ReembolsosDespesasLists
    [EnableQuery(MaxExpansionDepth=10,MaxNodeCount=1000)]
    [HttpGet]
    public IEnumerable<Models.Pnld.ReembolsosDespesasList> GetReembolsosDespesasLists()
    {
      var items = this.context.ReembolsosDespesasLists.AsNoTracking().AsQueryable<Models.Pnld.ReembolsosDespesasList>();
      this.OnReembolsosDespesasListsRead(ref items);

      return items;
    }

    partial void OnReembolsosDespesasListsRead(ref IQueryable<Models.Pnld.ReembolsosDespesasList> items);

    [EnableQuery(MaxExpansionDepth=10,MaxNodeCount=1000)]
    [HttpGet("{ReembolsoDespesa}")]
    public SingleResult<ReembolsosDespesasList> GetReembolsosDespesasList(int key)
    {
        var items = this.context.ReembolsosDespesasLists.AsNoTracking().Where(i=>i.ReembolsoDespesa == key);
        return SingleResult.Create(items);
    }
  }
}
