using Microsoft.AspNetCore.Mvc;

namespace Leasing.Controllers
{
    public class LoginController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult LoginView()
        {
            return View();
        }
        public IActionResult RegisterView()
        {
            return View();
        }

    }
}
