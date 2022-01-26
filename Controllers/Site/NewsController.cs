using Microsoft.AspNetCore.Mvc;

namespace EpicGames.Controllers.Site
{
    public class NewsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
