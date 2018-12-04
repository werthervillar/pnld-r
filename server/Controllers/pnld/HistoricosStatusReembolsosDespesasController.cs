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

  [ODataRoutePrefix("odata/pnld/HistoricosStatusReembolsosDespesas")]
  [Route("mvc/odata/pnld/HistoricosStatusReembolsosDespesas")]
  public partial class HistoricosStatusReembolsosDespesasController : ODataController
  {
    private Data.PnldContext context;

    public HistoricosStatusReembolsosDespesasController(Data.PnldContext context)
    {
      this.context = context;
    }
    // GET /odata/Pnld/HistoricosStatusReembolsosDespesas
    [EnableQuery(MaxExpansionDepth=10,MaxNodeCount=1000)]
    [HttpGet]
    public IEnumerable<Models.Pnld.HistoricosStatusReembolsosDespesa> GetHistoricosStatusReembolsosDespesas()
    {
      var items = this.context.HistoricosStatusReembolsosDespesas.AsQueryable<Models.Pnld.HistoricosStatusReembolsosDespesa>();
      this.OnHistoricosStatusReembolsosDespesasRead(ref items);

      return items;
    }

    partial void OnHistoricosStatusReembolsosDespesasRead(ref IQueryable<Models.Pnld.HistoricosStatusReembolsosDespesa> items);

    [EnableQuery(MaxExpansionDepth=10,MaxNodeCount=1000)]
    [HttpGet("{HistoricoStatusReembolsoDespesas}")]
    public SingleResult<HistoricosStatusReembolsosDespesa> GetHistoricosStatusReembolsosDespesa(int key)
    {
        var items = this.context.HistoricosStatusReembolsosDespesas.Where(i=>i.HistoricoStatusReembolsoDespesas == key);
        return SingleResult.Create(items);
    }
    partial void OnHistoricosStatusReembolsosDespesaDeleted(Models.Pnld.HistoricosStatusReembolsosDespesa item);

    [HttpDelete("{HistoricoStatusReembolsoDespesas}")]
    public IActionResult DeleteHistoricosStatusReembolsosDespesa(int key) 
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            var item = this.context.HistoricosStatusReembolsosDespesas
                .Where(i => i.HistoricoStatusReembolsoDespesas == key)
                .FirstOrDefault();

            if (item == null)
            {
                return BadRequest();
            }                

            this.OnHistoricosStatusReembolsosDespesaDeleted(item);
            this.context.HistoricosStatusReembolsosDespesas.Remove(item);
            this.context.SaveChanges();

            return new NoContentResult();
        }
        catch(Exception ex) 
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnHistoricosStatusReembolsosDespesaUpdated(Models.Pnld.HistoricosStatusReembolsosDespesa item);

    [HttpPut("{HistoricoStatusReembolsoDespesas}")]
    public IActionResult PutHistoricosStatusReembolsosDespesa(int key, [FromBody]Models.Pnld.HistoricosStatusReembolsosDespesa newItem)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (newItem == null || (newItem.HistoricoStatusReembolsoDespesas != key))
            {
                return BadRequest();
            }

            this.OnHistoricosStatusReembolsosDespesaUpdated(newItem);
            this.context.HistoricosStatusReembolsosDespesas.Update(newItem);
            this.context.SaveChanges();

            var itemToReturn = this.context.HistoricosStatusReembolsosDespesas
                .Where(i => i.HistoricoStatusReembolsoDespesas == key)
                .Include(i => i.ReembolsosDespesa)
                .Include(i => i.StatusReembolsosDespesa)
                .FirstOrDefault();

            return new JsonResult(itemToReturn, new Newtonsoft.Json.JsonSerializerSettings
            {
                ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore,
                DateTimeZoneHandling = Newtonsoft.Json.DateTimeZoneHandling.Utc
            })
            {
                StatusCode = 200
            };
        }
        catch(Exception ex) 
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    [HttpPatch("{HistoricoStatusReembolsoDespesas}")]
    public IActionResult PatchHistoricosStatusReembolsosDespesa(int key, [FromBody]Delta<Models.Pnld.HistoricosStatusReembolsosDespesa> patch)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var item = this.context.HistoricosStatusReembolsosDespesas.Where(i=>i.HistoricoStatusReembolsoDespesas == key).FirstOrDefault();
            
            if (item == null)
            {
                return BadRequest();
            }

            patch.Patch(item);

            this.OnHistoricosStatusReembolsosDespesaUpdated(item);
            this.context.HistoricosStatusReembolsosDespesas.Update(item);
            this.context.SaveChanges();

            var itemToReturn = this.context.HistoricosStatusReembolsosDespesas
                .Where(i => i.HistoricoStatusReembolsoDespesas == key)
                .Include(i => i.ReembolsosDespesa)
                .Include(i => i.StatusReembolsosDespesa)
                .FirstOrDefault();

            return new JsonResult(itemToReturn, new Newtonsoft.Json.JsonSerializerSettings
            {
                ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore,
                DateTimeZoneHandling = Newtonsoft.Json.DateTimeZoneHandling.Utc
            })
            {
                StatusCode = 200
            };
        }
        catch(Exception ex) 
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnHistoricosStatusReembolsosDespesaCreated(Models.Pnld.HistoricosStatusReembolsosDespesa item);

    [HttpPost]
    public IActionResult Post([FromBody] Models.Pnld.HistoricosStatusReembolsosDespesa item)
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

            this.OnHistoricosStatusReembolsosDespesaCreated(item);
            this.context.HistoricosStatusReembolsosDespesas.Add(item);
            this.context.SaveChanges();

            var key = item.HistoricoStatusReembolsoDespesas;
            var itemToReturn = this.context.HistoricosStatusReembolsosDespesas
                .Where(i => i.HistoricoStatusReembolsoDespesas == key)
                .Include(i => i.ReembolsosDespesa)
                .Include(i => i.StatusReembolsosDespesa)
                .FirstOrDefault();

            return new JsonResult(itemToReturn, new Newtonsoft.Json.JsonSerializerSettings
            {
                ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore,
                DateTimeZoneHandling = Newtonsoft.Json.DateTimeZoneHandling.Utc
            })
            {
                StatusCode = 201
            };
        }
        catch(Exception ex) 
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }
  }
}
