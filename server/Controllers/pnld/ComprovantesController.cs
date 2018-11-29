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

  [ODataRoutePrefix("odata/pnld/Comprovantes")]
  [Route("mvc/odata/pnld/Comprovantes")]
  public partial class ComprovantesController : ODataController
  {
    private Data.PnldContext context;

    public ComprovantesController(Data.PnldContext context)
    {
      this.context = context;
    }
    // GET /odata/Pnld/Comprovantes
    [EnableQuery(MaxExpansionDepth=10,MaxNodeCount=1000)]
    [HttpGet]
    public IEnumerable<Models.Pnld.Comprovante> GetComprovantes()
    {
      var items = this.context.Comprovantes.AsQueryable<Models.Pnld.Comprovante>();
      this.OnComprovantesRead(ref items);

      return items;
    }

    partial void OnComprovantesRead(ref IQueryable<Models.Pnld.Comprovante> items);

    [EnableQuery(MaxExpansionDepth=10,MaxNodeCount=1000)]
    [HttpGet("{Comprovante1}")]
    public SingleResult<Comprovante> GetComprovante(int key)
    {
        var items = this.context.Comprovantes.Where(i=>i.Comprovante1 == key);
        return SingleResult.Create(items);
    }
    partial void OnComprovanteDeleted(Models.Pnld.Comprovante item);

    [HttpDelete("{Comprovante1}")]
    public IActionResult DeleteComprovante(int key) 
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            var item = this.context.Comprovantes
                .Where(i => i.Comprovante1 == key)
                .FirstOrDefault();

            if (item == null)
            {
                return BadRequest();
            }                

            this.OnComprovanteDeleted(item);
            this.context.Comprovantes.Remove(item);
            this.context.SaveChanges();

            return new NoContentResult();
        }
        catch(Exception ex) 
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnComprovanteUpdated(Models.Pnld.Comprovante item);

    [HttpPut("{Comprovante1}")]
    public IActionResult PutComprovante(int key, [FromBody]Models.Pnld.Comprovante newItem)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (newItem == null || (newItem.Comprovante1 != key))
            {
                return BadRequest();
            }

            this.OnComprovanteUpdated(newItem);
            this.context.Comprovantes.Update(newItem);
            this.context.SaveChanges();

            var itemToReturn = this.context.Comprovantes
                .Where(i => i.Comprovante1 == key)
                .Include(i => i.ItensReembolsosDespesa)
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

    [HttpPatch("{Comprovante1}")]
    public IActionResult PatchComprovante(int key, [FromBody]Delta<Models.Pnld.Comprovante> patch)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var item = this.context.Comprovantes.Where(i=>i.Comprovante1 == key).FirstOrDefault();
            
            if (item == null)
            {
                return BadRequest();
            }

            patch.Patch(item);

            this.OnComprovanteUpdated(item);
            this.context.Comprovantes.Update(item);
            this.context.SaveChanges();

            var itemToReturn = this.context.Comprovantes
                .Where(i => i.Comprovante1 == key)
                .Include(i => i.ItensReembolsosDespesa)
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

    partial void OnComprovanteCreated(Models.Pnld.Comprovante item);

    [HttpPost]
    public IActionResult Post([FromBody] Models.Pnld.Comprovante item)
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

            this.OnComprovanteCreated(item);
            this.context.Comprovantes.Add(item);
            this.context.SaveChanges();

            var key = item.Comprovante1;
            var itemToReturn = this.context.Comprovantes
                .Where(i => i.Comprovante1 == key)
                .Include(i => i.ItensReembolsosDespesa)
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
