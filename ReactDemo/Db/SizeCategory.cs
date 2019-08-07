using System.Collections.Generic;

namespace ReactDemo.Db
{
    public class SizeCategory
    {
        public int Id { get; set; }
        public decimal Width { get; set; }
        public decimal Height { get; set; }
        public decimal Depth { get; set; }

        public ICollection<WeightCostSetting> WeightCostSettings { get; set; }
    }
}
