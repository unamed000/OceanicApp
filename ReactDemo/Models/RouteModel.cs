using ReactDemo.Db;

namespace ReactDemo.Models
{
    public class RouteModel
    {

        public RouteModel(Route route)
        {
            DepartureLocation = new LocationModel(route.DepartureLocation);
            DestinationLocation = new LocationModel(route.DestinationLocation);
            IsActive = route.IsActive;
            RouteId = route.Id;
        }
        public int RouteId { get; set; }
        public LocationModel DepartureLocation { get; set; }
        public LocationModel DestinationLocation { get; set; }
        public bool IsActive { get; set; }
    }
}
