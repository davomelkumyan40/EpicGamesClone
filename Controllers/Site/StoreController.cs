using Microsoft.AspNetCore.Mvc;

namespace EpicGames.Controllers.Site
{
    public class StoreController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
