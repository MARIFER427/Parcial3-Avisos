using Microsoft.AspNetCore.Mvc;

[Route("usuarios")]
public class UsuariosController : Controller
{
    public IActionResult Indext()
    {
        return View();
    }
}