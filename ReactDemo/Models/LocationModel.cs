using System;
using ReactDemo.Db;

namespace ReactDemo.Models
{
    public class LocationModel : IEquatable<LocationModel>
    {
        public LocationModel(Location location)
        {
            LocationId = location.Id;
            Name = location.Name;
            Code = location.Code;
        }

        public int LocationId { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }

        public bool Equals(LocationModel other)
        {
            if (ReferenceEquals(null, other)) return false;
            if (ReferenceEquals(this, other)) return true;
            return LocationId == other.LocationId && string.Equals(Name, other.Name);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != this.GetType()) return false;
            return Equals((LocationModel) obj);
        }

        public override int GetHashCode()
        {
            unchecked
            {
                return (LocationId * 397) ^ (Name != null ? Name.GetHashCode() : 0);
            }
        }
    }
}