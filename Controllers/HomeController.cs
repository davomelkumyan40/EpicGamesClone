using Microsoft.AspNetCore.Mvc;


namespace EpicGames.Controllers
{
    public class HomeController : Controller
    {
        public HomeController()
        {
                
        }

        public IActionResult Index()
        {
            ViewData["title"] = "Home";
            return View();
        }
    }
}
