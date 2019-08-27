using API.ControllerBaseExtensions;
using Application.AppService.LogArquivo;
using Application.ViewModel.Filters;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Produces("application/json")]
    public class LogArquivoController : ApiController
    {
        private readonly ILogArquivoAppService _logArquivoAppService;

        public LogArquivoController(ILogArquivoAppService logArquivoAppService)
        {
            _logArquivoAppService = logArquivoAppService;
        }

        [HttpGet]
        public IActionResult Get(LogArquivoFilter filters)
        {
            var logArquivo = _logArquivoAppService.ObterPorFiltro(filters);
            return Response(logArquivo);
        }

        [HttpGet("GetResultados")]
        public IActionResult GetResultados(int arquivoId)
        {
            var logArquivo = _logArquivoAppService.ObterResultados(arquivoId);
            return Response(logArquivo);
        }

        [HttpGet("GetById")]
        public IActionResult GetById(int id)
        {
            var resp = _logArquivoAppService.GetById(id);
            return Response(resp);
        } 
    }
}