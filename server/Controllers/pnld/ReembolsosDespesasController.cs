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

  [ODataRoutePrefix("odata/pnld/ReembolsosDespesas")]
  [Route("mvc/odata/pnld/ReembolsosDespesas")]
  public partial class ReembolsosDespesasController : ODataController
  {
    private Data.PnldContext context;

    public ReembolsosDespesasController(Data.PnldContext context)
    {
      this.context = context;
    }
    // GET /odata/Pnld/ReembolsosDespesas
    [EnableQuery(MaxExpansionDepth=10,MaxNodeCount=1000)]
    [HttpGet]
    public IEnumerable<Models.Pnld.ReembolsosDespesa> GetReembolsosDespesas()
    {
      var items = this.context.ReembolsosDespesas.AsQueryable<Models.Pnld.ReembolsosDespesa>();
      this.OnReembolsosDespesasRead(ref items);

      return items;
    }

    partial void OnReembolsosDespesasRead(ref IQueryable<Models.Pnld.ReembolsosDespesa> items);

    [EnableQuery(MaxExpansionDepth=10,MaxNodeCount=1000)]
    [HttpGet("{ReembolsoDespesa}")]
    public SingleResult<ReembolsosDespesa> GetReembolsosDespesa(int key)
    {
        var items = this.context.ReembolsosDespesas.Where(i=>i.ReembolsoDespesa == key);
        return SingleResult.Create(items);
    }
    partial void OnReembolsosDespesaDeleted(Models.Pnld.ReembolsosDespesa item);

    [HttpDelete("{ReembolsoDespesa}")]
    public IActionResult DeleteReembolsosDespesa(int key) 
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            var item = this.context.ReembolsosDespesas
                .Where(i => i.ReembolsoDespesa == key)
                .Include(i => i.ItensReembolsosDespesas)
                .FirstOrDefault();

            if (item == null)
            {
                return BadRequest();
            }                

            this.OnReembolsosDespesaDeleted(item);
            this.context.ReembolsosDespesas.Remove(item);
            this.context.SaveChanges();

            return new NoContentResult();
        }
        catch(Exception ex) 
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnReembolsosDespesaUpdated(Models.Pnld.ReembolsosDespesa item);

    [HttpPut("{ReembolsoDespesa}")]
    public IActionResult PutReembolsosDespesa(int key, [FromBody]Models.Pnld.ReembolsosDespesa newItem)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (newItem == null || (newItem.ReembolsoDespesa != key))
            {
                return BadRequest();
            }

            this.OnReembolsosDespesaUpdated(newItem);
            this.context.ReembolsosDespesas.Update(newItem);
            this.context.SaveChanges();

            var itemToReturn = this.context.ReembolsosDespesas
                .Where(i => i.ReembolsoDespesa == key)
                .Include(i => i.StatusReembolsosDespesa)
                .Include(i => i.Reunio)
                .Include(i => i.Participante)
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

    [HttpPatch("{ReembolsoDespesa}")]
    public IActionResult PatchReembolsosDespesa(int key, [FromBody]Delta<Models.Pnld.ReembolsosDespesa> patch)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var item = this.context.ReembolsosDespesas.Where(i=>i.ReembolsoDespesa == key).FirstOrDefault();
            
            if (item == null)
            {
                return BadRequest();
            }

            patch.Patch(item);

            this.OnReembolsosDespesaUpdated(item);
            this.context.ReembolsosDespesas.Update(item);
            this.context.SaveChanges();

            var itemToReturn = this.context.ReembolsosDespesas
                .Where(i => i.ReembolsoDespesa == key)
                .Include(i => i.StatusReembolsosDespesa)
                .Include(i => i.Reunio)
                .Include(i => i.Participante)
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

    partial void OnReembolsosDespesaCreated(Models.Pnld.ReembolsosDespesa item);

    [HttpPost]
    public IActionResult Post([FromBody] Models.Pnld.ReembolsosDespesa item)
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

            this.OnReembolsosDespesaCreated(item);
            this.context.ReembolsosDespesas.Add(item);
            this.context.SaveChanges();

            var key = item.ReembolsoDespesa;
            var itemToReturn = this.context.ReembolsosDespesas
                .Where(i => i.ReembolsoDespesa == key)
                .Include(i => i.StatusReembolsosDespesa)
                .Include(i => i.Reunio)
                .Include(i => i.Participante)
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
