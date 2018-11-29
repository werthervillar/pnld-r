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

  [ODataRoutePrefix("odata/pnld/TiposItensReembolsosDespesas")]
  [Route("mvc/odata/pnld/TiposItensReembolsosDespesas")]
  public partial class TiposItensReembolsosDespesasController : ODataController
  {
    private Data.PnldContext context;

    public TiposItensReembolsosDespesasController(Data.PnldContext context)
    {
      this.context = context;
    }
    // GET /odata/Pnld/TiposItensReembolsosDespesas
    [EnableQuery(MaxExpansionDepth=10,MaxNodeCount=1000)]
    [HttpGet]
    public IEnumerable<Models.Pnld.TiposItensReembolsosDespesa> GetTiposItensReembolsosDespesas()
    {
      var items = this.context.TiposItensReembolsosDespesas.AsQueryable<Models.Pnld.TiposItensReembolsosDespesa>();
      this.OnTiposItensReembolsosDespesasRead(ref items);

      return items;
    }

    partial void OnTiposItensReembolsosDespesasRead(ref IQueryable<Models.Pnld.TiposItensReembolsosDespesa> items);

    [EnableQuery(MaxExpansionDepth=10,MaxNodeCount=1000)]
    [HttpGet("{TipoItemReembolsoDespesa}")]
    public SingleResult<TiposItensReembolsosDespesa> GetTiposItensReembolsosDespesa(int key)
    {
        var items = this.context.TiposItensReembolsosDespesas.Where(i=>i.TipoItemReembolsoDespesa == key);
        return SingleResult.Create(items);
    }
    partial void OnTiposItensReembolsosDespesaDeleted(Models.Pnld.TiposItensReembolsosDespesa item);

    [HttpDelete("{TipoItemReembolsoDespesa}")]
    public IActionResult DeleteTiposItensReembolsosDespesa(int key) 
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            var item = this.context.TiposItensReembolsosDespesas
                .Where(i => i.TipoItemReembolsoDespesa == key)
                .Include(i => i.ItensReembolsosDespesas)
                .FirstOrDefault();

            if (item == null)
            {
                return BadRequest();
            }                

            this.OnTiposItensReembolsosDespesaDeleted(item);
            this.context.TiposItensReembolsosDespesas.Remove(item);
            this.context.SaveChanges();

            return new NoContentResult();
        }
        catch(Exception ex) 
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnTiposItensReembolsosDespesaUpdated(Models.Pnld.TiposItensReembolsosDespesa item);

    [HttpPut("{TipoItemReembolsoDespesa}")]
    public IActionResult PutTiposItensReembolsosDespesa(int key, [FromBody]Models.Pnld.TiposItensReembolsosDespesa newItem)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (newItem == null || (newItem.TipoItemReembolsoDespesa != key))
            {
                return BadRequest();
            }

            this.OnTiposItensReembolsosDespesaUpdated(newItem);
            this.context.TiposItensReembolsosDespesas.Update(newItem);
            this.context.SaveChanges();

            return new NoContentResult();
        }
        catch(Exception ex) 
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    [HttpPatch("{TipoItemReembolsoDespesa}")]
    public IActionResult PatchTiposItensReembolsosDespesa(int key, [FromBody]Delta<Models.Pnld.TiposItensReembolsosDespesa> patch)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var item = this.context.TiposItensReembolsosDespesas.Where(i=>i.TipoItemReembolsoDespesa == key).FirstOrDefault();
            
            if (item == null)
            {
                return BadRequest();
            }

            patch.Patch(item);

            this.OnTiposItensReembolsosDespesaUpdated(item);
            this.context.TiposItensReembolsosDespesas.Update(item);
            this.context.SaveChanges();

            return new NoContentResult();
        }
        catch(Exception ex) 
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnTiposItensReembolsosDespesaCreated(Models.Pnld.TiposItensReembolsosDespesa item);

    [HttpPost]
    public IActionResult Post([FromBody] Models.Pnld.TiposItensReembolsosDespesa item)
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

            this.OnTiposItensReembolsosDespesaCreated(item);
            this.context.TiposItensReembolsosDespesas.Add(item);
            this.context.SaveChanges();

            return Created($"odata/Pnld/TiposItensReembolsosDespesas/{item.TipoItemReembolsoDespesa}", item);
        }
        catch(Exception ex) 
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }
  }
}
