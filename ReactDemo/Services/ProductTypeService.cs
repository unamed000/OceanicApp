using System.Collections.Generic;
using System.Linq;
using ReactDemo.Models;

namespace ReactDemo.Services
{
    public class ProductTypeService : BaseService
    {
        public List<ProductTypeModel> GetAllProductTypes()
        {
            return Db.ProductType
                .AsEnumerable()
                .Select(x => new ProductTypeModel(x))
                .ToList();
        }
    }
}
