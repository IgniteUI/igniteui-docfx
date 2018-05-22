using System;
using System.IO;
using System.Text;

namespace PostProcessors.Services
{
    public static class FileService
    {
        public static void Process(string filePath, Func<string, string> processLineFunc)
        {
            string fileName = Path.GetFileName(filePath);
            string fileDirectory = Path.GetDirectoryName(filePath);
            string outputFileName = string.Format("{0}_output{1}",
                Path.GetFileNameWithoutExtension(fileName), Path.GetExtension(fileName));
            string outputFilePath = Path.Combine(fileDirectory, outputFileName);

            using (FileStream stream = new FileStream(filePath, FileMode.Open, FileAccess.Read))
            using (StreamReader reader = new StreamReader(stream, Encoding.UTF8))
            using (StreamWriter writer = new StreamWriter(outputFilePath))
            {
                string line = reader.ReadLine();
                while (line != null)
                {
                    line = processLineFunc.Invoke(line);
                    writer.WriteLine(line);
                    line = reader.ReadLine();
                }
            }

            string backupFilePath = string.Format("{0}.bak", filePath);
            File.Replace(outputFilePath, filePath, backupFilePath);
            File.Delete(backupFilePath);
        }
    }
}
