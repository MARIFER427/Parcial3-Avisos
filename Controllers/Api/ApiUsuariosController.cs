using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using MongoDB.Bson;

[ApiController]
[Route("api/usuarios")]
public class ApiUsuariosController : ControllerBase
{
    //Matodos para hacer las operaciones CRUD
    //C = Create
    //R = Read
    //U = Update
    //D = Delete

    private readonly IMongoCollection<Usuarios> collection;


    public ApiUsuariosController()
    {
        var client = new MongoClient(CadenaConexion.MONGO_DB);
        var db = client.GetDatabase("Escuela_Rios_Demeza");
        this.collection = db.GetCollection<Usuarios>("Usuarios");
    }

    [HttpGet]
    public IActionResult ListarUsuarios()
    {
        var filter = FilterDefinition<Usuarios>.Empty;
        var list = this.collection.Find(filter).ToList();
        return Ok(list);
    }
}
