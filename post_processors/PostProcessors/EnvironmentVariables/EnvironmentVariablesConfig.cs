using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PostProcessors.EnvironmentPostProcessor
{
    public class EnvironmentVariablesConfig
    {
        /// <summary>
        /// Environment for which the configuration is for.
        /// </summary>
        public Environment Environment { get; set; }

        /// <summary>
        /// Files which should be processed by the post processor.
        /// </summary>
        public List<string> FileExtensionsToProcess { get; set; }

        /// <summary>
        /// Variables in key value pairs.
        /// </summary>
        public Dictionary<string, string> Variables { get; set; }
    
        /// <summary>
        /// Whether the config file should be deleted after processing.
        /// </summary>
        public bool DeleteConfigAfterProcessing { get; set; }        
    }
}
