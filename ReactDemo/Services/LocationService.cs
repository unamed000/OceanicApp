﻿using System.Collections.Generic;
using System.Linq;
using ReactDemo.Models;
using Location = ReactDemo.Db.Location;

namespace ReactDemo.Services
{
    public class LocationService : BaseService
    {
        public List<LocationModel> GetLocations()
        {
            return Db.Location.AsEnumerable()
                .Select(x => new LocationModel(x))
                .ToList();
        }

        public bool AddOrUpdateLocation(LocationModel locationModel)
        {
            if (Db.Location.Any(x => x.Code == locationModel.Code))
            {
                return false;
            }

            Location location;

            if (locationModel.LocationId != default(int))
            {
                location = Db.Location.First(x => x.Id == locationModel.LocationId);
            }
            else
            {
                location = new Location();
                Db.Location.Add(location);
            }

            location.Name = locationModel.Name;
            location.Code = locationModel.Code;
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
