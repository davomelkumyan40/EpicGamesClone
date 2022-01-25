using Microsoft.AspNetCore.Mvc;

namespace EpicGames.Controllers
{
    public class StoreController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
