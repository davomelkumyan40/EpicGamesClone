using Microsoft.AspNetCore.Mvc;

namespace EpicGames.Controllers.Site
{
    public class AboutController : Controller
    {
        public IActionResult Company()
        {
            return View();
        }

        public IActionResult Job()
        {
            return View();
        }

        public IActionResult NewsRoom()
        {
            return View();
        }

        public IActionResult Students()
        {
            return View();
        }
    }
}
