using Application.Helpers;
using Application.ViewModel;
using Application.ViewModel.Request;
using Domain.Entities;
using Domain.Interfaces.Services;
using System.Collections.Generic;

namespace Application.AppService.Banco
{
    public class ArquivoAppService : AppServiceBase<Domain.Entities.Arquivo>, IArquivoAppService 
    {
        private readonly IArquivoService _arquivoService;

        public ArquivoAppService(IArquivoService arquivoService) 
            : base(arquivoService)
        {
            _arquivoService = arquivoService;
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
            //foreach (var importacao in importarRequest.ArquivoImportacao)
            //{
            //    var linhas = TextoHelper.ObterLinhasDoArquivo(importacao.ArquivoStream);
            //    arquivos.Add(new Arquivo(0, importarRequest.IdBanco, importacao.Nome, importarRequest.IdTipoCNAB, importarRequest.IdTipoBoleto, linhas));
            //}

            return arquivos;
        }
    }
}
