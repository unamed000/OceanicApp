using System.Collections.Generic;
using System.Linq;
using Dijkstra.NET.Graph;
using Dijkstra.NET.ShortestPath;
using Microsoft.EntityFrameworkCore;
using ReactDemo.Db;
using ReactDemo.Models;

namespace ReactDemo.Services
{
    public class RouteService
    {
        public RouteModel FindRoute(string departureCode, string destinationCode, double weight)
        {
            // TODO: Exclude inactive locations, routes, add multiplier for product type calculation, weight calculation
            // TODO: Return total value of the search criteria
            var db = new OceanicDbContext();
            var routes = db.Route
                .Include(x => x.DepartureLocation)
                .Include(x => x.DestinationLocation)
                .ToList();

            var locations = db.Location.ToList();

            var departureLocation = locations.First(x => x.Code == departureCode);
            var destinationLocation = locations.First(x => x.Code == destinationCode);
            Dictionary<int, uint> locationMapping = new Dictionary<int, uint>();

            var graph = new Graph<int, string>();

            uint index = 1;
            foreach (var location in locations)
            {
                locationMapping.Add(location.Id, index);
                graph.AddNode((int)index);
                index++;
            }

            foreach (var route in routes)
            {
                graph.Connect(
                    locationMapping[route.DepartureLocationId], 
                    locationMapping[route.DestinationLocationId], 8 , string.Empty);
            }

            ShortestPathResult result = graph.Dijkstra(
                locationMapping[departureLocation.Id],
                locationMapping[destinationLocation.Id]); //result contains the shortest path

            var path = result.GetPath();
            var finalResult = new List<LocationModel>();
            foreach (var indexId in path)
            {
                var location = locations.First(x => x.Id == locationMapping.First(m => m.Value == indexId).Key);
                finalResult.Add(new LocationModel()
                {
                    LocationId = location.Id,
                    Name = location.Name
                });
            }

            return new RouteModel()
            {
                Routes = finalResult
            };
        }
    }
}
