using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ReactDemo.Models;
using ReactDemo.Services;

namespace ReactDemo.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    public class ProductTypeController : Controller
    {
        private readonly ProductTypeService _service;
        public ProductTypeController()
        {
            _service = new ProductTypeService();
        }

        [HttpGet("[action]")]
        public List<ProductTypeModel> GetProductTypes()
        {
            return _service.GetAllProductTypes();
        }
    }
}
