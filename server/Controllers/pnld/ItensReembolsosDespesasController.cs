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

  [ODataRoutePrefix("odata/pnld/ItensReembolsosDespesas")]
  [Route("mvc/odata/pnld/ItensReembolsosDespesas")]
  public partial class ItensReembolsosDespesasController : ODataController
  {
    private Data.PnldContext context;

    public ItensReembolsosDespesasController(Data.PnldContext context)
    {
      this.context = context;
    }
    // GET /odata/Pnld/ItensReembolsosDespesas
    [EnableQuery(MaxExpansionDepth=10,MaxNodeCount=1000)]
    [HttpGet]
    public IEnumerable<Models.Pnld.ItensReembolsosDespesa> GetItensReembolsosDespesas()
    {
      var items = this.context.ItensReembolsosDespesas.AsQueryable<Models.Pnld.ItensReembolsosDespesa>();
      this.OnItensReembolsosDespesasRead(ref items);

      return items;
    }

    partial void OnItensReembolsosDespesasRead(ref IQueryable<Models.Pnld.ItensReembolsosDespesa> items);

    [EnableQuery(MaxExpansionDepth=10,MaxNodeCount=1000)]
    [HttpGet("{ItemReembolsoDespesa}")]
    public SingleResult<ItensReembolsosDespesa> GetItensReembolsosDespesa(int key)
    {
        var items = this.context.ItensReembolsosDespesas.Where(i=>i.ItemReembolsoDespesa == key);
        return SingleResult.Create(items);
    }
    partial void OnItensReembolsosDespesaDeleted(Models.Pnld.ItensReembolsosDespesa item);

    [HttpDelete("{ItemReembolsoDespesa}")]
    public IActionResult DeleteItensReembolsosDespesa(int key) 
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            var item = this.context.ItensReembolsosDespesas
                .Where(i => i.ItemReembolsoDespesa == key)
                .Include(i => i.Comprovantes)
                .FirstOrDefault();

            if (item == null)
            {
                return BadRequest();
            }                

            this.OnItensReembolsosDespesaDeleted(item);
            this.context.ItensReembolsosDespesas.Remove(item);
            this.context.SaveChanges();

            return new NoContentResult();
        }
        catch(Exception ex) 
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnItensReembolsosDespesaUpdated(Models.Pnld.ItensReembolsosDespesa item);

    [HttpPut("{ItemReembolsoDespesa}")]
    public IActionResult PutItensReembolsosDespesa(int key, [FromBody]Models.Pnld.ItensReembolsosDespesa newItem)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (newItem == null || (newItem.ItemReembolsoDespesa != key))
            {
                return BadRequest();
            }

            this.OnItensReembolsosDespesaUpdated(newItem);
            this.context.ItensReembolsosDespesas.Update(newItem);
            this.context.SaveChanges();

            var itemToReturn = this.context.ItensReembolsosDespesas
                .Where(i => i.ItemReembolsoDespesa == key)
                .Include(i => i.ReembolsosDespesa)
                .Include(i => i.TiposItensReembolsosDespesa)
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

    [HttpPatch("{ItemReembolsoDespesa}")]
    public IActionResult PatchItensReembolsosDespesa(int key, [FromBody]Delta<Models.Pnld.ItensReembolsosDespesa> patch)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var item = this.context.ItensReembolsosDespesas.Where(i=>i.ItemReembolsoDespesa == key).FirstOrDefault();
            
            if (item == null)
            {
                return BadRequest();
            }

            patch.Patch(item);

            this.OnItensReembolsosDespesaUpdated(item);
            this.context.ItensReembolsosDespesas.Update(item);
            this.context.SaveChanges();

            var itemToReturn = this.context.ItensReembolsosDespesas
                .Where(i => i.ItemReembolsoDespesa == key)
                .Include(i => i.ReembolsosDespesa)
                .Include(i => i.TiposItensReembolsosDespesa)
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

    partial void OnItensReembolsosDespesaCreated(Models.Pnld.ItensReembolsosDespesa item);

    [HttpPost]
    public IActionResult Post([FromBody] Models.Pnld.ItensReembolsosDespesa item)
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

            this.OnItensReembolsosDespesaCreated(item);
            this.context.ItensReembolsosDespesas.Add(item);
            this.context.SaveChanges();

            var key = item.ItemReembolsoDespesa;
            var itemToReturn = this.context.ItensReembolsosDespesas
                .Where(i => i.ItemReembolsoDespesa == key)
                .Include(i => i.ReembolsosDespesa)
                .Include(i => i.TiposItensReembolsosDespesa)
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
