using ReactDemo.Db;

namespace ReactDemo.Services
{
    public class BaseService
    {
        public BaseService()
        {
            Db = new OceanicDbContext();
        }

        protected OceanicDbContext Db { get; }
    }
}
