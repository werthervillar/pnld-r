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

  [ODataRoutePrefix("odata/pnld/Reunios")]
  [Route("mvc/odata/pnld/Reunios")]
  public partial class ReuniosController : ODataController
  {
    private Data.PnldContext context;

    public ReuniosController(Data.PnldContext context)
    {
      this.context = context;
    }
    // GET /odata/Pnld/Reunios
    [EnableQuery(MaxExpansionDepth=10,MaxNodeCount=1000)]
    [HttpGet]
    public IEnumerable<Models.Pnld.Reunio> GetReunios()
    {
      var items = this.context.Reunios.AsQueryable<Models.Pnld.Reunio>();
      this.OnReuniosRead(ref items);

      return items;
    }

    partial void OnReuniosRead(ref IQueryable<Models.Pnld.Reunio> items);

    [EnableQuery(MaxExpansionDepth=10,MaxNodeCount=1000)]
    [HttpGet("{Reuniao}")]
    public SingleResult<Reunio> GetReunio(int key)
    {
        var items = this.context.Reunios.Where(i=>i.Reuniao == key);
        return SingleResult.Create(items);
    }
    partial void OnReunioDeleted(Models.Pnld.Reunio item);

    [HttpDelete("{Reuniao}")]
    public IActionResult DeleteReunio(int key) 
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            var item = this.context.Reunios
                .Where(i => i.Reuniao == key)
                .Include(i => i.ReembolsosDespesas)
                .FirstOrDefault();

            if (item == null)
            {
                return BadRequest();
            }                

            this.OnReunioDeleted(item);
            this.context.Reunios.Remove(item);
            this.context.SaveChanges();

            return new NoContentResult();
        }
        catch(Exception ex) 
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnReunioUpdated(Models.Pnld.Reunio item);

    [HttpPut("{Reuniao}")]
    public IActionResult PutReunio(int key, [FromBody]Models.Pnld.Reunio newItem)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (newItem == null || (newItem.Reuniao != key))
            {
                return BadRequest();
            }

            this.OnReunioUpdated(newItem);
            this.context.Reunios.Update(newItem);
            this.context.SaveChanges();

            return new NoContentResult();
        }
        catch(Exception ex) 
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    [HttpPatch("{Reuniao}")]
    public IActionResult PatchReunio(int key, [FromBody]Delta<Models.Pnld.Reunio> patch)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var item = this.context.Reunios.Where(i=>i.Reuniao == key).FirstOrDefault();
            
            if (item == null)
            {
                return BadRequest();
            }

            patch.Patch(item);

            this.OnReunioUpdated(item);
            this.context.Reunios.Update(item);
            this.context.SaveChanges();

            return new NoContentResult();
        }
        catch(Exception ex) 
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnReunioCreated(Models.Pnld.Reunio item);

    [HttpPost]
    public IActionResult Post([FromBody] Models.Pnld.Reunio item)
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

            this.OnReunioCreated(item);
            this.context.Reunios.Add(item);
            this.context.SaveChanges();

            return Created($"odata/Pnld/Reunios/{item.Reuniao}", item);
        }
        catch(Exception ex) 
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }
  }
}
