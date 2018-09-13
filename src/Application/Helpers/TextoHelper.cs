
using System.Collections.Generic;
using System.IO;

namespace Application.Helpers
{
    public static class TextoHelper
    {
        public static List<string> ObterLinhasDoArquivo(Stream file)
        {
            List<string> lines = new List<string>();
            using (StreamReader reader = new StreamReader(file))
            {
                while (!reader.EndOfStream)
                {
                    lines.Add(reader.ReadLine());
                }
            }
            return lines;
        }
    }
}
