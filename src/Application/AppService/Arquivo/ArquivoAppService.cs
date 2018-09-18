using Application.Helpers;
using Application.ViewModel;
using Application.ViewModel.Filters;
using Application.ViewModel.Request;
using Application.ViewModel.Response;
using AutoMapper;
using Domain.Entities;
using Domain.Interfaces.Services;
using System.Collections.Generic;

namespace Application.AppService.Banco
{
    public class ArquivoAppService : AppServiceBase<Domain.Entities.Arquivo>, IArquivoAppService 
    {
        private readonly IArquivoService _arquivoService;
        private readonly IMapper _mapper;

        public ArquivoAppService(IArquivoService arquivoService,
                                IMapper mapper) 
            : base(arquivoService)
        {
            _arquivoService = arquivoService;
            _mapper = mapper;
        }

        public List<ArquivoResponse> ObterComFiltros(ArquivoFilter arquivoFilter)
        {
            var filters = _mapper.Map<Arquivo>(arquivoFilter);
            var arquivos = _arquivoService.ObterComFiltros(filters, arquivoFilter.De, arquivoFilter.Ate);
            return _mapper.Map<List<ArquivoResponse>>(arquivos);             
        }

        public void ProcessarArquivo(ImportarRequest importarRequest)
        {
            var arquivos = CriarObjetoDominio(importarRequest);

            _arquivoService.ValidarArquivos(arquivos);
        }

        // TODO: Ajustar idUsuario que fez upload = 0
        private List<Arquivo> CriarObjetoDominio(ImportarRequest importarRequest)
        {
            List<Arquivo> arquivos = new List<Arquivo>();
            foreach (var importacao in importarRequest.FormFiles)
            {
                var linhas = TextoHelper.ObterLinhasDoArquivo(importacao.OpenReadStream());
                arquivos.Add(new Arquivo(0, importarRequest.BancoId, importacao.FileName, importarRequest.TipoCNABId, importarRequest.TipoBoletoId, linhas));
            }

            return arquivos;
        }
    }
}
