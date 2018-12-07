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

  [ODataRoutePrefix("odata/pnld/HistoricosStatusReembolsosDespesasLists")]
  [Route("mvc/odata/pnld/HistoricosStatusReembolsosDespesasLists")]
  public partial class HistoricosStatusReembolsosDespesasListsController : ODataController
  {
    private Data.PnldContext context;

    public HistoricosStatusReembolsosDespesasListsController(Data.PnldContext context)
    {
      this.context = context;
    }
    // GET /odata/Pnld/HistoricosStatusReembolsosDespesasLists
    [EnableQuery(MaxExpansionDepth=10,MaxNodeCount=1000)]
    [HttpGet]
    public IEnumerable<Models.Pnld.HistoricosStatusReembolsosDespesasList> GetHistoricosStatusReembolsosDespesasLists()
    {
      var items = this.context.HistoricosStatusReembolsosDespesasLists.AsNoTracking().AsQueryable<Models.Pnld.HistoricosStatusReembolsosDespesasList>();
      this.OnHistoricosStatusReembolsosDespesasListsRead(ref items);

      return items;
    }

    partial void OnHistoricosStatusReembolsosDespesasListsRead(ref IQueryable<Models.Pnld.HistoricosStatusReembolsosDespesasList> items);

    [EnableQuery(MaxExpansionDepth=10,MaxNodeCount=1000)]
    [HttpGet("{HistoricoStatusReembolsoDespesas}")]
    public SingleResult<HistoricosStatusReembolsosDespesasList> GetHistoricosStatusReembolsosDespesasList(int key)
    {
        var items = this.context.HistoricosStatusReembolsosDespesasLists.AsNoTracking().Where(i=>i.HistoricoStatusReembolsoDespesas == key);
        return SingleResult.Create(items);
    }
  }
}
