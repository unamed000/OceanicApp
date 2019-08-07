using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ReactDemo.Models;
using ReactDemo.Services;

namespace ReactDemo.Controllers
{
    [Route("api/[controller]")]
    public class RouteController : Controller
    {
        private readonly RouteService _service;

        public RouteController()
        {
            _service = new RouteService();
        }

        [HttpGet("[action]")]
        public SearchRouteModel SearchRoute(
            string departureCode, 
            string destinationCode, 
            double weight,
            double height,
            double depth,
            double width,
            int productType)
        {
            return _service.FindRoute(
                departureCode, 
                destinationCode, 
                weight, 
                height,
                depth,
                width,
                productType);
        }

        [HttpGet("[action]")]
        public List<RouteModel> GetAll()
        {
            return _service.GetAllRoutes();
        }

        [HttpGet("[action]")]
        public RouteModel GetById(int id)
        {
            return _service.GetById(id);
        }

        [HttpPost("[action]")]
        public bool AddOrUpdateRoute([FromBody] RouteUpdateModel route)
        {
            return _service.AddOrUpdateRoute(route);
        }

        [HttpPost("[action]")]
        public bool ToggleActive(
            [FromBody] ToggleActiveRouteRequestModel model)
        {
            return _service.ToggleActiveRoute(
                model.RouteId,
                model.IsActive);
        }

    }

    public class ToggleActiveRouteRequestModel
    {
        public int RouteId { get; set; }
        public bool IsActive { get; set; }
    }
}
