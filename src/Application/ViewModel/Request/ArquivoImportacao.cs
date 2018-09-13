using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace Application.ViewModel.Request
{
    public class ArquivoImportacao
    {
        public string Name { get; set; }
        public Stream File { get; set; }
    }
}
