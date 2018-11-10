using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace Application.Helpers
{
    public static class FileHelper
    {
        public static byte[] ReadFileStream(Stream input)
        {
            using (MemoryStream ms = new MemoryStream())
            {
                input.CopyTo(ms);
                return ms.ToArray();
            }
        }
    }
}
