using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Policy;

namespace ReactDemo.Models
{
    public class SearchRouteModel
    {
        public List<SearchRouteBetweenNodesModel> Routes { get; set; }

        public double TotalCost => Routes.Sum(x => x.Cost);
        public double Time => Routes.Sum(x => x.Time);
    }

    public class SearchRouteBetweenNodesModel
    {
        public LocationModel FromLocation { get; set; }
        public LocationModel ToLocation { get; set; }

        public string TransportBy { get; set; }
        public double Cost { get; set; }
        public double Time { get; set; }
    }
}
