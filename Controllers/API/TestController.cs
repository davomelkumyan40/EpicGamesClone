using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace EpicGames.Controllers.API
{
    [Route("/api/test")]
    [ApiController]
    public class TestController : Controller
    {
        [HttpGet]
        public ActionResult<IEnumerable<string>> GetData()
        {
            var data = Enumerable.Range(1, 10).Select(x => x * x);
            return Ok(data);
        }
    }
}