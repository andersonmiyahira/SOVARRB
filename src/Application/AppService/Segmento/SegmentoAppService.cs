using System;
using System.Collections.Generic;
using System.Text;
using Domain.Entities;
using Domain.Interfaces.Services;

namespace Application.AppService.Segmento
{
    public class SegmentoAppService : AppServiceBase<Domain.Entities.Segmento>, ISegmentoAppService
    {
        public SegmentoAppService(ISegmentoService serviceBase) : base(serviceBase)
        {
        }
    }
}
