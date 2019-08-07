using System;
using System.Collections.Generic;
using System.Linq;
using Dijkstra.NET.Graph;
using Dijkstra.NET.ShortestPath;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;
using ReactDemo.Db;
using ReactDemo.Models;

namespace ReactDemo.Services
{
    public class RouteService : BaseService
    {
        public SearchRouteModel FindRoute(
            string departureCode, 
            string destinationCode, 
            double weight,
            double height,
            double depth,
            double width,
            int productTypeId)
        {
            // TODO: Exclude inactive locations, routes, add multiplier for product type calculation, weight calculation
            // TODO: Return total value of the search criteria
            var routes = Db.Route
                .Include(x => x.DepartureLocation)
                .Include(x => x.DestinationLocation)
                .ToList();

            var productType =
                Db.ProductType.First(x => x.Id == productTypeId);

            decimal decWeight = (decimal)weight;
            SizeCategory category = FindSizeCategory(height, depth, width);

            if (category == null)
            {
                throw new Exception("Can't find a valid size category");
            }

            var weightConfig =
                Db.WeightCostSetting.First(x => 
                    x.WeightFrom < decWeight 
                    && x.WeightTo >= decWeight 
                    && x.SizeCategoryId == category.Id);

            var locations = Db.Location.ToList();
            var path = FindRoutes(locations, routes, departureCode, destinationCode);

            var routesInformation = new List<SearchRouteBetweenNodesModel>();
            var lastLocationId = path[0];
            foreach (var locationId in path.Skip(1))
            {
                var route = routes.First(x =>
                    x.DepartureLocationId == lastLocationId && x.DestinationLocationId == locationId);

                routesInformation.Add(new SearchRouteBetweenNodesModel()
                {
                    FromLocation = new LocationModel(route.DepartureLocation),
                    ToLocation = new LocationModel(route.DestinationLocation),
                    Cost = PriceCalculate(weightConfig, productType),
                    Time = 8,
                    TransportBy = "Oceanic"
                });

                lastLocationId = locationId;
            }

            return new SearchRouteModel()
            {
                Routes = routesInformation
            };
        }

        double PriceCalculate(WeightCostSetting weightSetting, ProductType productType)
        {
            return (double)weightSetting.Cost * (double)productType.Multiplier;
        }

        SizeCategory FindSizeCategory(
            double height,
            double depth,
            double width)
        {
            var heightDec = (decimal) height;
            var depthDec = (decimal) depth;
            var widthDec = (decimal) width;

            var size = Db.SizeCategory
                .Where(x => x.Depth >= depthDec
                            && x.Height >= heightDec
                            && x.Width >= widthDec)
                .OrderBy(x => x.Id)
                .FirstOrDefault();

            return size;
        }

        int[] FindRoutes(
            List<Location> locations,
            List<Route> routes,
            string departureCode,
            string destinationCode)
        {
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
                    locationMapping[route.DestinationLocationId], 
                    8, 
                    string.Empty);
            }

            ShortestPathResult result = graph.Dijkstra(
                locationMapping[departureLocation.Id],
                locationMapping[destinationLocation.Id]); //result contains the shortest path

            var path = result.GetPath();
            return path.Select(x => locationMapping.First(lm => lm.Value == x).Key).ToArray();
        }
    }
}
