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

  [ODataRoutePrefix("odata/pnld/StatusReembolsosDespesas")]
  [Route("mvc/odata/pnld/StatusReembolsosDespesas")]
  public partial class StatusReembolsosDespesasController : ODataController
  {
    private Data.PnldContext context;

    public StatusReembolsosDespesasController(Data.PnldContext context)
    {
      this.context = context;
    }
    // GET /odata/Pnld/StatusReembolsosDespesas
    [EnableQuery(MaxExpansionDepth=10,MaxNodeCount=1000)]
    [HttpGet]
    public IEnumerable<Models.Pnld.StatusReembolsosDespesa> GetStatusReembolsosDespesas()
    {
      var items = this.context.StatusReembolsosDespesas.AsQueryable<Models.Pnld.StatusReembolsosDespesa>();
      this.OnStatusReembolsosDespesasRead(ref items);

      return items;
    }

    partial void OnStatusReembolsosDespesasRead(ref IQueryable<Models.Pnld.StatusReembolsosDespesa> items);

    [EnableQuery(MaxExpansionDepth=10,MaxNodeCount=1000)]
    [HttpGet("{StatusReembolsoDespesa}")]
    public SingleResult<StatusReembolsosDespesa> GetStatusReembolsosDespesa(int key)
    {
        var items = this.context.StatusReembolsosDespesas.Where(i=>i.StatusReembolsoDespesa == key);
        return SingleResult.Create(items);
    }
    partial void OnStatusReembolsosDespesaDeleted(Models.Pnld.StatusReembolsosDespesa item);

    [HttpDelete("{StatusReembolsoDespesa}")]
    public IActionResult DeleteStatusReembolsosDespesa(int key) 
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            var item = this.context.StatusReembolsosDespesas
                .Where(i => i.StatusReembolsoDespesa == key)
                .Include(i => i.ReembolsosDespesas)
                .Include(i => i.HistoricosStatusReembolsosDespesas)
                .FirstOrDefault();

            if (item == null)
            {
                return BadRequest();
            }                

            this.OnStatusReembolsosDespesaDeleted(item);
            this.context.StatusReembolsosDespesas.Remove(item);
            this.context.SaveChanges();

            return new NoContentResult();
        }
        catch(Exception ex) 
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnStatusReembolsosDespesaUpdated(Models.Pnld.StatusReembolsosDespesa item);

    [HttpPut("{StatusReembolsoDespesa}")]
    public IActionResult PutStatusReembolsosDespesa(int key, [FromBody]Models.Pnld.StatusReembolsosDespesa newItem)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (newItem == null || (newItem.StatusReembolsoDespesa != key))
            {
                return BadRequest();
            }

            this.OnStatusReembolsosDespesaUpdated(newItem);
            this.context.StatusReembolsosDespesas.Update(newItem);
            this.context.SaveChanges();

            return new NoContentResult();
        }
        catch(Exception ex) 
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    [HttpPatch("{StatusReembolsoDespesa}")]
    public IActionResult PatchStatusReembolsosDespesa(int key, [FromBody]Delta<Models.Pnld.StatusReembolsosDespesa> patch)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var item = this.context.StatusReembolsosDespesas.Where(i=>i.StatusReembolsoDespesa == key).FirstOrDefault();
            
            if (item == null)
            {
                return BadRequest();
            }

            patch.Patch(item);

            this.OnStatusReembolsosDespesaUpdated(item);
            this.context.StatusReembolsosDespesas.Update(item);
            this.context.SaveChanges();

            return new NoContentResult();
        }
        catch(Exception ex) 
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnStatusReembolsosDespesaCreated(Models.Pnld.StatusReembolsosDespesa item);

    [HttpPost]
    public IActionResult Post([FromBody] Models.Pnld.StatusReembolsosDespesa item)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (item == null)
            {
                return BadRequest();
            }

            this.OnStatusReembolsosDespesaCreated(item);
            this.context.StatusReembolsosDespesas.Add(item);
            this.context.SaveChanges();

            return Created($"odata/Pnld/StatusReembolsosDespesas/{item.StatusReembolsoDespesa}", item);
        }
        catch(Exception ex) 
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }
  }
}
