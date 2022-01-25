using Microsoft.AspNetCore.Mvc;

namespace EpicGames.Controllers
{
    public class NewsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
