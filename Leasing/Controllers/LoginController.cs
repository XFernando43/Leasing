using Azure.Core;
using Leasing.Core.Bussines.Request;
using Leasing.Infraestructura.Querys.Interfaces;
using Microsoft.AspNetCore.Mvc;
using NuGet.Protocol;

namespace Leasing.Controllers
{
    public class LoginController : Controller
    {
        private readonly ILoginQuery _loginQuery;
        public LoginController(ILoginQuery loginQuery)
        {
            _loginQuery = loginQuery;
        }

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
        // ENDPOINT
        [Route("CreateUser")]
        public IActionResult createUser([FromBody] UserRequest request)
        {
            try
            {
                Console.WriteLine(request.ToJson());
                _loginQuery.CreateUser(request);
                return Ok(new
                {
                    status = true
                });
            }
            catch (Exception ex)
            {
                return BadRequest(new
                {
                    status = false, message = ex.Message
                });
            }
        }
        [Route("GetUser_Login/{gmail}/{password}")]
        public IActionResult GetUser_Gmail_Password(string gmail, string password)
        {
            try
            {
                var user = _loginQuery.getUser(gmail,password);
                return Ok(new
                {
                    status = true,
                    User = user,
                });
            }
            catch (Exception ex)
            {

                return BadRequest(new
                {
                    status = false,
                    message = ex.Message
                });
            }
        }
    }
}
