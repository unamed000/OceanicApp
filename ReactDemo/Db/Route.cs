using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ReactDemo.Db
{
    public class Route
    {
        public int DepartureLocationId { get; set; }
        public int DestinationLocationId { get; set; }

        public virtual Location DepartureLocation { get; set; }
        public virtual Location DestinationLocation { get; set; }
    }
}
