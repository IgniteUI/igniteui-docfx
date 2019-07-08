---
title: ig config 
_description: The ig config command performs read and write operation on the Ignite UI CLI configuration settings.
_keywords: Ignite UI for Angular, UI controls, CLI, Templates, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library
---

## ig config
The `ig config` command performs read and write operation on the Ignite UI CLI configuration settings. 

Ignite UI CLI stores configuration in an `ignite-ui-cli.json` file matching the [`Config`](https://github.com/IgniteUI/igniteui-cli/blob/master/lib/types/Config.d.ts) interface. Project structures created with Ignite UI CLI include such a file as local configuration. A per-user file can provide global defaults in case `ig config` is called with a --global flag . The global `ignite-ui-cli.json` file is stored under the current user home directory - usually `/home/<user>` for Unix and `C:\Users\<user>` for Windows. 


The `config` command is split into [sub-commands](#sub-commands) for each operation:
```bash
ig config <get|set|add> <property> [value]
```

The following properties are available globally:

Property |    Type    | Description
---------|------------|------------
igPackageRegistry | `string` | The URL of the Infragistics Npm package registry
customTemplates | `string[]` | A list of paths to load additional templates from
skipGit | `boolean` | Skip git initialization and commit of the new project
disableAnalytics | `boolean` | Skip any data form being sent to analytics server


## Sub-commands

### Get 
```bash
ig config get <property>
```
<details>
  <summary>global</summary>
  <p>
    <code>--global</code> (alias: <code>-g</code>) <em>Specify if the global configuration value should be returned</em>
  </p>
</details>
Prints out the value for a given configuration property in the console. This value is effective - depending on global defaults and the current local project config (if not present in).

### Set 
```bash
ig config set <property> <value>
```
<details>
  <summary>global</summary>
  <p>
    <code>--global</code> (alias: <code>-g</code>) <em>Specify if the global configuration value should be updated</em>
  </p>
</details>
Sets a the value for a given configuration property.

### Add 
```bash
ig config add <property> <value>
```
<details>
  <summary>global</summary>
  <p>
    <code>--global</code> (alias: <code>-g</code>) <em>Specify if the global configuration value should be updated</em>
  </p>
</details>
Adds a value to a configuration list.
