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

  [ODataRoutePrefix("odata/pnld/Participantes")]
  [Route("mvc/odata/pnld/Participantes")]
  public partial class ParticipantesController : ODataController
  {
    private Data.PnldContext context;

    public ParticipantesController(Data.PnldContext context)
    {
      this.context = context;
    }
    // GET /odata/Pnld/Participantes
    [EnableQuery(MaxExpansionDepth=10,MaxNodeCount=1000)]
    [HttpGet]
    public IEnumerable<Models.Pnld.Participante> GetParticipantes()
    {
      var items = this.context.Participantes.AsQueryable<Models.Pnld.Participante>();
      this.OnParticipantesRead(ref items);

      return items;
    }

    partial void OnParticipantesRead(ref IQueryable<Models.Pnld.Participante> items);

    [EnableQuery(MaxExpansionDepth=10,MaxNodeCount=1000)]
    [HttpGet("{Participante1}")]
    public SingleResult<Participante> GetParticipante(int key)
    {
        var items = this.context.Participantes.Where(i=>i.Participante1 == key);
        return SingleResult.Create(items);
    }
    partial void OnParticipanteDeleted(Models.Pnld.Participante item);

    [HttpDelete("{Participante1}")]
    public IActionResult DeleteParticipante(int key) 
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            var item = this.context.Participantes
                .Where(i => i.Participante1 == key)
                .Include(i => i.ReembolsosDespesas)
                .FirstOrDefault();

            if (item == null)
            {
                return BadRequest();
            }                

            this.OnParticipanteDeleted(item);
            this.context.Participantes.Remove(item);
            this.context.SaveChanges();

            return new NoContentResult();
        }
        catch(Exception ex) 
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnParticipanteUpdated(Models.Pnld.Participante item);

    [HttpPut("{Participante1}")]
    public IActionResult PutParticipante(int key, [FromBody]Models.Pnld.Participante newItem)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (newItem == null || (newItem.Participante1 != key))
            {
                return BadRequest();
            }

            this.OnParticipanteUpdated(newItem);
            this.context.Participantes.Update(newItem);
            this.context.SaveChanges();

            return new NoContentResult();
        }
        catch(Exception ex) 
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    [HttpPatch("{Participante1}")]
    public IActionResult PatchParticipante(int key, [FromBody]Delta<Models.Pnld.Participante> patch)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var item = this.context.Participantes.Where(i=>i.Participante1 == key).FirstOrDefault();
            
            if (item == null)
            {
                return BadRequest();
            }

            patch.Patch(item);

            this.OnParticipanteUpdated(item);
            this.context.Participantes.Update(item);
            this.context.SaveChanges();

            return new NoContentResult();
        }
        catch(Exception ex) 
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnParticipanteCreated(Models.Pnld.Participante item);

    [HttpPost]
    public IActionResult Post([FromBody] Models.Pnld.Participante item)
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

            this.OnParticipanteCreated(item);
            this.context.Participantes.Add(item);
            this.context.SaveChanges();

            return Created($"odata/Pnld/Participantes/{item.Participante1}", item);
        }
        catch(Exception ex) 
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }
  }
}
