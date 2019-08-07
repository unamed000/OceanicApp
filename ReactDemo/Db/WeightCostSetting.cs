namespace ReactDemo.Db
{
    public class WeightCostSetting
    {
        public int Id { get; set; }
        public decimal WeightFrom { get; set; }
        public decimal WeightTo { get; set; }
        public decimal Cost { get; set; }

        public int SizeCategoryId { get; set; }
        public SizeCategory SizeCategory { get; set; }
    }
}
