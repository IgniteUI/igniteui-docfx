using Microsoft.DocAsCode.Plugins;
using PostProcessors.Services;
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Composition;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading;
using System.Web.Script.Serialization;

namespace PostProcessors.EnvironmentPostProcessor
{
    [Export(nameof(SetEnvironmentVariables), typeof(IPostProcessor))]
    public class SetEnvironmentVariables : IPostProcessor
    {
        public ImmutableDictionary<string, object> PrepareMetadata(ImmutableDictionary<string, object> metadata)
        {            
            return metadata;
        }

        public Manifest Process(Manifest manifest, string outputFolder)
        {
            string configFilePath = Path.Combine(outputFolder, configName);

            if (!File.Exists(configFilePath))
            {
                return manifest;
            }

            string configText = File.ReadAllText(configFilePath);
            EnvironmentVariablesConfig config = new JavaScriptSerializer()
                .Deserialize<EnvironmentVariablesConfig>(configText);

            List<string> files = config.FileExtensionsToProcess
                .Select(extension => "*." + extension)
                .SelectMany(extension => Directory.GetFiles(outputFolder, extension, SearchOption.AllDirectories))
                .ToList();

            Func<string, string> processFileLineFunc = GetProcessFileLineFunc(config);

            files.AsParallel().ForAll(file => FileService.Process(file, processFileLineFunc));

            if (config.DeleteConfigAfterProcessing)
            {
                File.Delete(configFilePath);
            }

            return manifest;
        }

        private Func<string, string> GetProcessFileLineFunc(EnvironmentVariablesConfig config)
        {
            return (string line) =>
            {
                line = environmentVariableRegex.Replace(line, (Match match) =>
                {
                    if (config.Variables.ContainsKey(match.Groups[1].Value))
                    {
                        return config.Variables[match.Groups[1].Value];
                    }

                    return match.Value;
                });

                return line;
            };
        }

        private const string configName = "set-environment-variables.config";
        private static Regex environmentVariableRegex = new Regex(@"{environment:([a-zA-Z]+)}",
            RegexOptions.Multiline | RegexOptions.Compiled);
    }
}
