using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.CodeAnalysis;
using ReactDemo.Db;
using ReactDemo.Models;
using Location = ReactDemo.Db.Location;

namespace ReactDemo.Services
{
    public class LocationService : BaseService
    {
        public List<LocationModel> GetLocations()
        {
            return Db.Location.Select(x => new LocationModel
            {
                Name = x.Name,
                Code = x.Code
            }).ToList();
        }

        public bool AddLocation(LocationModel locationModel)
        {
            if (Db.Location.Any(x => x.Code == locationModel.Code))
            {
                return false;
            }

            Db.Location.Add(new Location
            {
                Name = locationModel.Name,
                Code = locationModel.Code,
                IsActive = true
            });
            Db.SaveChanges();

            return true;
        }

        public bool ToggleActiveLocation(int locationId, bool isActive)
        {
            var location = Db.Location.FirstOrDefault(x => x.Id == locationId);
            if (location == null) return false;

            location.IsActive = isActive;
            Db.SaveChanges();
            return true;
        }
    }
}
