using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReactDemo.Db;
using ReactDemo.Models;
using ReactDemo.Services;

namespace ReactDemo.Controllers
{
    [Route("api/[controller]")]
    public class RouteController : Controller
    {
        public RouteController()
        {

        }

        [HttpGet("[action]")]
        public SearchRouteModel SearchRoute(
            string departureCode, 
            string destinationCode, 
            double weight,
            int productType)
        {
            var service = new RouteService();
            return service.FindRoute(departureCode, destinationCode, weight, productType);
        }

    }
}
