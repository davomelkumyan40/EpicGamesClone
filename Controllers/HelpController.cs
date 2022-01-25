using Microsoft.AspNetCore.Mvc;

namespace EpicGames.Controllers
{
    public class HelpController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult OftenQuestions()
        {
            return View();
        }
    }
}
