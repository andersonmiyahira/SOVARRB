using Application.Helpers;
using Application.ViewModel.Filters;
using Application.ViewModel.Request;
using Application.ViewModel.Response;
using AutoMapper;
using Domain.Entities;
using Domain.Interfaces.Services;

namespace Application.AppService.ValorEsperado
{
    public class UsuarioAppService : AppServiceBase<Domain.Entities.Usuario>, IUsuarioAppService
    {
        private readonly IUsuarioService _usuarioService;
        private readonly IMapper _mapper;

        public UsuarioAppService(IUsuarioService usuarioService, IMapper mapper) : base(usuarioService)
        {
            _usuarioService = usuarioService;
            _mapper = mapper;
        }

        public UsuarioResponse CadastrarUsuario(UsuarioRequest model)
        {
            var entity = _mapper.Map<Usuario>(model);
            entity.AtualizaSenhaCriptografada(Hash.Create(entity.Senha));
            entity = _usuarioService.SalvarUsuario(entity);

            return _mapper.Map<UsuarioResponse>(entity);
        }

        public UsuarioResponse EfetuarLogin(UsuarioRequest model)
        {
            var entity = _mapper.Map<Usuario>(model);
            entity.AtualizaSenhaCriptografada(Hash.Create(entity.Senha));

            entity = _usuarioService.EfetuarLogin(entity);

            return _mapper.Map<UsuarioResponse>(entity);
        }
    }
}
