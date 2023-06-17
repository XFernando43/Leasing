using Leasing.Core.Bussines.Request;
using Leasing.Core.Bussines.Response;
using Leasing.Core.Entities;
using Leasing.Infraestructura.Querys.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.DotNet.Scaffolding.Shared.Messaging;
using NuGet.Protocol;

namespace Leasing.Controllers
{
    public class BonoController : Controller
    {
        private readonly IPrestamoQuery _BonoQuery;
        public BonoController(IPrestamoQuery bonoQuery)
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
        public IActionResult LeasingTableResultView(int id)
        {
            ViewBag.Message = id;
            return View();
        }

        /// endPoints
        [Route("CreateBono5555")]
        public IActionResult CreateBonoAPI()
        {
            try
            {

                _BonoQuery.CreatePrestamo2();

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
        public IActionResult CreateBonoAPI([FromBody] BonoRequest request)
        {
            try
            {
                Console.WriteLine(request.ToJson());
                _BonoQuery.CreatePrestamo(request);
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
                var bonos = _BonoQuery.GetPrestamos();
                return Ok(new
                {
                    status = true,
                    Bonos = bonos
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
        [Route("getBono/{id}")]
        public IActionResult getBonioId(int id)
        {
            try
            {
                var bono = _BonoQuery.GetPrestamoID(id);
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
                _BonoQuery.ActualizarPrestamo(request);
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
                _BonoQuery.DeletePrestamo(id);
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
        [Route("PostLeasing1")]
        public IActionResult PostLeasingNotes1([FromBody] Bono bono)
        {
            try
            {
                Console.WriteLine(bono.ToJson());
                _BonoQuery.CreateLeasingNote1(bono);    
                return Ok(new
                {
                    status = true,
                    Notes1 = "Save it",
                });
            }
            catch(Exception ex)
            {
                throw;
            }
        }

        [Route("getLeasing1/{id}")]
        public IActionResult getLeasingNote1_ID(int id)
        {
            try
            {
                var note1 = _BonoQuery.getFinancingNote1_ID(id);
                return Ok(new
                {
                    status = true,
                    Note1 = note1
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

        [Route("LeasingProcess")]
        public IActionResult LeasingProcess([FromBody] Bono bono)
        {
            try
            {
                var leasings = _BonoQuery.LeasingTable(bono);
                return Ok(new
                {
                    status = true,
                    Leasing = leasings,
                });
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
