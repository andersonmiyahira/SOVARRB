using Domain.Entities;
using Domain.Interfaces.Repositories;
using Domain.Interfaces.Services;

namespace Domain.Services
{
    public class LayoutService : ServiceBase<Layout>, ILayoutService
    {
        private readonly ILayoutRepository _layoutRepository;

        public LayoutService(ILayoutRepository layoutRepository) : base(layoutRepository)
        {
            this._layoutRepository = layoutRepository;
        }
         
    }
}
