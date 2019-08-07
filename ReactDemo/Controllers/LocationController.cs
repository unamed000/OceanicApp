using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis;
using ReactDemo.Models;
using ReactDemo.Services;

namespace ReactDemo.Controllers
{
    [Route("api/[controller]")]
    public class LocationController : Controller
    {
        private LocationService _locationService;

        public LocationController()
        {
            _locationService = new LocationService();
        }

        [HttpGet("[action]")]
        public List<LocationModel> GetAll()
        {
            return _locationService.GetLocations();
        }

        [HttpPost("[action]")]
        public bool AddLocation(LocationModel model)
        {
            return _locationService.AddOrUpdateLocation(model);
        }

        [HttpPost("[action]")]
        public bool ToggleActive(int locationId, bool isActive)
        {
            return _locationService.ToggleActiveLocation(locationId, isActive);
        }
    }
}
