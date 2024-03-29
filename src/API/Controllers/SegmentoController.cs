﻿using API.ControllerBaseExtensions;
using Application.AppService.Segmento;
using Application.ViewModel.Request;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Authorize(Roles = "ADMIN")]
    [Produces("application/json")]
    public class SegmentoController : ApiController
    {
        private readonly ISegmentoAppService _segmentoAppService;

        public SegmentoController(ISegmentoAppService segmentoAppService)
        {
            this._segmentoAppService = segmentoAppService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var segmentos = _segmentoAppService.GetAll();
            return Response(segmentos);
        }

        [HttpGet("GetById")]
        public IActionResult GetById(int id)
        {
            var segmentos = _segmentoAppService.GetById(id);
            return Response(segmentos);
        }

        [HttpPost]
        public IActionResult Post([FromBody]SegmentoRequest segmento)
        {
            var segmentos = _segmentoAppService.Inserir(segmento);
            return Response(segmentos);            
        }

        [HttpPut]
        public IActionResult Put([FromBody]SegmentoRequest segmento)
        {
            var segmentos = _segmentoAppService.Alterar(segmento);
            return Response(segmentos);
        }

        [HttpDelete]
        public IActionResult Delete(int id)
        {
            _segmentoAppService.ExcluirPorId(id);
            return Response();
        }
    }
}