using Microsoft.AspNetCore.Mvc;
using TuProyecto.Models;

namespace TuProyecto.Controllers.Api
{
    [ApiController]
    [Route("api/controller")]
    public class MiProyectoController : ControllerBase
    {
        [HttpGet("Integrantes")]
        public ActionResult<MiProyecto> Integrantes()
        {
            var proyecto = new MiProyecto
            {
                Integrante1 = "Maria Fernanda Rios Hernandez",
                Integrante2 = "Maria Fernanda Demeza Bermudez"
            };

            return Ok(proyecto);
        }
    }
}