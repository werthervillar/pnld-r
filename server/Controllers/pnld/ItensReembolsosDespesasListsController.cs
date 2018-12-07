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

  [ODataRoutePrefix("odata/pnld/ItensReembolsosDespesasLists")]
  [Route("mvc/odata/pnld/ItensReembolsosDespesasLists")]
  public partial class ItensReembolsosDespesasListsController : ODataController
  {
    private Data.PnldContext context;

    public ItensReembolsosDespesasListsController(Data.PnldContext context)
    {
      this.context = context;
    }
    // GET /odata/Pnld/ItensReembolsosDespesasLists
    [EnableQuery(MaxExpansionDepth=10,MaxNodeCount=1000)]
    [HttpGet]
    public IEnumerable<Models.Pnld.ItensReembolsosDespesasList> GetItensReembolsosDespesasLists()
    {
      var items = this.context.ItensReembolsosDespesasLists.AsNoTracking().AsQueryable<Models.Pnld.ItensReembolsosDespesasList>();
      this.OnItensReembolsosDespesasListsRead(ref items);

      return items;
    }

    partial void OnItensReembolsosDespesasListsRead(ref IQueryable<Models.Pnld.ItensReembolsosDespesasList> items);

    [EnableQuery(MaxExpansionDepth=10,MaxNodeCount=1000)]
    [HttpGet("{ItemReembolsoDespesa}")]
    public SingleResult<ItensReembolsosDespesasList> GetItensReembolsosDespesasList(int key)
    {
        var items = this.context.ItensReembolsosDespesasLists.AsNoTracking().Where(i=>i.ItemReembolsoDespesa == key);
        return SingleResult.Create(items);
    }
  }
}
