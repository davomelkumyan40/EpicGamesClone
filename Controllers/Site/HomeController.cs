using Microsoft.AspNetCore.Mvc;


namespace EpicGames.Controllers.Site
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            ViewData["title"] = "Home";
            return View();
        }

        public IActionResult UnrealEngine()
        {
            ViewData["title"] = "Unreal Engine";
            return RedirectToAction("Index");
        }

        public IActionResult Download()
        {
            return RedirectToAction("Index");
        }
    }
}
