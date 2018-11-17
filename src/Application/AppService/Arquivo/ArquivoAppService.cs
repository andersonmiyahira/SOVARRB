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

        public byte[] Download(int id)
        {
            var bin = _arquivoService.GetById(id).Binario;
            return bin;
        }

        public List<ArquivoResponse> ObterComFiltros(ArquivoFilter arquivoFilter)
        {
            var filters = _mapper.Map<Arquivo>(arquivoFilter);
            var arquivos = _arquivoService.ObterComFiltros(filters, arquivoFilter.De, arquivoFilter.Ate);
            return _mapper.Map<List<ArquivoResponse>>(arquivos);             
        }

        public List<Domain.Entities.LogArquivo> ProcessarArquivo(ImportarRequest importarRequest)
        {
            List<Domain.Entities.LogArquivo> logsCriados = new List<Domain.Entities.LogArquivo>();
            var arquivos = CriarObjetoDominio(importarRequest);

            if(importarRequest.UsuarioId != default(int))
            {
                _arquivoService.SalvarArquivos(arquivos);
                logsCriados.AddRange(_arquivoService.ValidarArquivos(arquivos, true));
            }
            else
                logsCriados.AddRange(_arquivoService.ValidarArquivos(arquivos, false));
            return logsCriados;
        }

        private List<Arquivo> CriarObjetoDominio(ImportarRequest importarRequest)
        {
            List<Arquivo> arquivos = new List<Arquivo>();
            foreach (var importacao in importarRequest.FormFiles)
            {
                var arquivoBinario = FileHelper.ObterBytesPorStream(importacao.OpenReadStream());
                var linhas = TextoHelper.ObterLinhasDoArquivo(importacao.OpenReadStream());

                var arquivo = new Arquivo(importarRequest.UsuarioId,
                                         importarRequest.BancoId,
                                         importacao.FileName,
                                         importarRequest.TipoCNABId,
                                         importarRequest.TipoBoletoId);

                arquivo.SetarArquivoBinario(arquivoBinario);
                arquivo.SetarLinhas(linhas);

                arquivos.Add(arquivo);
            }

            return arquivos;
        }
    }
}
