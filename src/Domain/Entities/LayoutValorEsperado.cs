namespace Domain.Entities
{
    public class LayoutValorEsperado
    {
        public LayoutValorEsperado()
        {

        }

        public LayoutValorEsperado(int layoutId, int valorEsperadoId)
        {
            LayoutId = layoutId;
            ValorEsperadoId = valorEsperadoId;
        }

        public int IdLayoutValorEsperado { get; private set; }
        public int LayoutId { get; private set; }
        public int ValorEsperadoId { get; private set; }

        public ValorEsperado ValorEsperado { get; private set; }
        public Layout Layout { get; private set; }
    }
}
