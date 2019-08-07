using ReactDemo.Db;

namespace ReactDemo.Models
{
    public class ProductTypeModel
    {
        public ProductTypeModel(ProductType product)
        {
            Id = product.Id;
            Name = product.Name;
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
