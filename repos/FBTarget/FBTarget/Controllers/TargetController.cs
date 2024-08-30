using FBTarget;
using FBTarget.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BackendTargets.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TargetController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TargetController(AppDbContext context)
        {
            _context = context;
        }
        // GET: api/<ValuesController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var listTarjetaCredito = await _context.TarjetaCredito.ToListAsync();
                return Ok(listTarjetaCredito);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }



        // POST api/<ValuesController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] TarjetaCredito tarjeta)
        {
            try
            {
                _context.Add(tarjeta);
                await _context.SaveChangesAsync();
                return Ok(tarjeta);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // PUT api/<ValuesController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] TarjetaCredito tarjeta)
        {
            try
            {

                if (id != tarjeta.Id)
                {
                    return BadRequest();

                }
                else
                {
                    _context.Update(tarjeta);
                    await _context.SaveChangesAsync();
                    return Ok(new { Message = "La tarjeta fue actualizada con éxito" });
                }
            }

            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // DELETE api/<ValuesController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var tarjeta = await _context.TarjetaCredito.FindAsync(id);

                if (tarjeta == null)
                {
                    return NotFound();
                }
                else
                {
                    _context.TarjetaCredito.Remove(tarjeta);
                    await _context.SaveChangesAsync();
                    return Ok(new { Message = "La tarjeta fue eliminada con éxito" });
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}

