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

        [HttpGet("[action]")]
        public LocationModel GetById(int id)
        {
            return _locationService.GetById(id);
        }

        [HttpPost("[action]")]
        public bool AddOrUpdateLocation([FromBody] LocationModel location)
        {
            return _locationService.AddOrUpdateLocation(location);
        }

        [HttpPost("[action]")]
        public bool ToggleActive(
            [FromBody] ToggleActiveLocationRequestModel model)
        {
            return _locationService.ToggleActiveLocation(
                model.LocationId, 
                model.IsActive);
        }
    }

    public class ToggleActiveLocationRequestModel
    {
        public int LocationId { get; set; }
        public bool IsActive { get; set; }
    }
}
