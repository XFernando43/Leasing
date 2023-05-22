using Leasing.Core.Bussines.Request;
using Leasing.Infraestructura.Querys.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.DotNet.Scaffolding.Shared.Messaging;
using NuGet.Protocol;

namespace Leasing.Controllers
{
    public class BonoController : Controller
    {
        private readonly IBonoQuery _BonoQuery;
        public BonoController(IBonoQuery bonoQuery)
        {
            _BonoQuery = bonoQuery;
        }
        //Views
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult CreateBonoView()
        {
            return View();
        }
        public IActionResult TablaBonoViews()
        {
            return View();
        }
        public IActionResult BonoIdViews(int id)
        {
            ViewBag.Message = id;
            return View();
        }

        /// endPoints
        [Route("CreateBono5555")]
        public IActionResult CreateBonoAPI([FromBody] BonoRequest request)
        {
            try
            {
                Console.WriteLine(request.ToJson());
                _BonoQuery.CreateBono(request);
            
                return Ok(new
                {
                    status = true,
                    message = "Save it"
                });
            }
            catch (Exception ex)
            {

                return BadRequest(new
                {
                    status = false,
                    messsage = ex.Message
                });
            }
        }


        [Route("CreateBono")]
        public IActionResult CreateBonoAPI()
        {
            try
            {
                _BonoQuery.CreateBono2();
                return Ok(new
                {
                    status = true,
                    message = "Save it"
                });
            }
            catch (Exception ex)
            {

                return BadRequest(new
                {
                    status = false,
                    messsage = ex.Message
                });
            }
        }

        [Route("getBonos")]
        public IActionResult getBonos()
        {
            try
            {
                var bonos = _BonoQuery.GetBonos();
                return Ok(new
                {
                    status = true,
                    Bonos = bonos
                }) ;
            }
            catch (Exception ex)
            {

                return BadRequest(new
                {
                    status = false,
                    messsage = ex.Message
                });
            }
        }

        [Route("getBono/{id}")]
        public IActionResult getBonioId(int id)
        {
            try
            {
                var bono = _BonoQuery.GetBonoID(id);
                return Ok(new
                {
                    status = true,
                    Bonos = bono
                });
            }
            catch (Exception ex)
            {

                return BadRequest(new
                {
                    status = false,
                    messsage = ex.Message
                });
            }
        }

        [Route("UpdateBono")]
        public IActionResult UpdateBono([FromBody] BonoRequest request)
        {
            try
            {
                Console.WriteLine(request.ToJson());
                _BonoQuery.ActualizarBono(request);
                return Ok(new
                {
                    status = true,
                    Message = "Update it"
                });
            }
            catch (Exception ex)
            {

                return BadRequest(new
                {
                    status = false,
                    messsage = ex.Message
                });
            }
        }

        [Route("DeleteBono/{id}")]
        public IActionResult DeleteBono(int id)
        {
            try
            {
                Console.WriteLine("Eliminado");
                _BonoQuery.DeleteBono(id);
                return Ok(new
                {
                    status = true,
                    Message = "Delete it"
                });
            }
            catch (Exception ex)
            {

                return BadRequest(new
                {
                    status = false,
                    messsage = ex.Message
                });
            }
        }
    }
}
