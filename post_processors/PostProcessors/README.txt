- Environment Variables Post Processor

Used for replacing any environment variables in the output files.

The preconfig.json file is used as a base for the config file.
Gulp gets the preconfig, updates it and places it in the output directory.
After that the post processor finds the config and executes it.

Basically the post processor processes all files, which meet the configuration requirements
and searches for "{environment:variable}" which is then replaced based on the variable value for the current environment.

For example, if we have "{environment:demosBaseUrl}", it could be replaced by "www.infragistics.com" 
if we have this value for the "demosBaseUrl" variable defined in the configuration file.

New variables could be added in the preconfig.json. Their names can consist of alpabetical characters only (a-z, A-Z).