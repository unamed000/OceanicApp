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
    public class SearchController : Controller
    {
        [HttpGet("[action]")]
        public RouteModel SearchRoute(string departureCode, string destinationCode, double weight)
        {
            var service = new RouteService();
            return service.FindRoute(departureCode, destinationCode, weight);
        }
    }
}
