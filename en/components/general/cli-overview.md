---
title: Igniteui CLI Overview
_description: The Ignite UI CLI is a tool to initialize, develop, scaffold and maintain applications in a wide variety of frameworks.
_keywords: Ignite UI for Angular, UI controls, CLI, Templates, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library
---

## Ignite UI CLI Overview

[`Ignite UI CLI`](https://github.com/IgniteUI/igniteui-cli) is a tool to initialize, develop, scaffold and maintain applications in a wide variety of frameworks. Ignite UI CLI offers project templates pre-configured for Ignite UI for Angular to get your next app off the ground in record time. A selection of views with Ignite UI for Angular components that can be further added to projects give a boost to productivity.

### Getting Started

Let's start by opening a preferred terminal and installing the [`Ignite UI CLI`](https://github.com/IgniteUI/igniteui-cli):
```cmd
npm install -g igniteui-cli 
```
Once the  [`Ignite UI CLI`](https://github.com/IgniteUI/igniteui-cli) is installer there are two possible options/modes to start the tool - guided experience and using the commands.

#### Using guided experience
The shortest and easiest way to bootstrap an application is to use the Ignite UI CLI [`guided experience`](https://github.com/IgniteUI/igniteui-cli/wiki/step-by-step), which builds a configured app that the developer can get up and running with the ease of a single command. 
```cmd
ig
```

<div style="display:inline-block;">
    <a style="background: url(../../images/general/buildCLIapp.gif); display:flex; justify-content:center; min-width:540px; min-height:315px;"
       href="https://youtu.be/QK_NsdtdA70" target="_blank">
        <img src="../../images/general/play.svg" style="vertical-align: middle;" />
    </a>
    <p style="text-align:center;">Building Your First Ignite UI CLI App</p>
</div>

#### Using commands
We can always use the Ignite UI CLI [`commands`](https://github.com/IgniteUI/igniteui-cli/wiki#available-commands) for generating an Ignite UI project, adding a new component or building and serving the project by ourselves. For that purpose, we can use the following commands:
```cmd
ig new <project name> --framework=angular --type=igx-ts 
cd <project name>
ig add <component/template> <component_name>
ig start 
```
- The full list of available **component/template** values is [`here`](https://github.com/IgniteUI/igniteui-cli/wiki/add#ignite-ui-for-angular-templates), you can run **ig list** command in your project directory to list all the available templates.
- Both the **project name** and the **component_name** are custom values, provided by the developer.
Here is an example of creating a new Ignite UI for Angular project with an igxGrid control:
```cmd
ig new newAngularProject --framework=angular --type=igx-ts
cd newAngularProject
ig add grid newGrid
ig start
```

After executing those simple commands, your new project will be built and served. It will automatically open in your default browser and you will be able to inspect your grid control and to make changes to the project.

### Command Overview

A full list of the available Ignite UI CLI commands as well as details on the usage (like passing flags, etc.), can be found at the [Ignite UI CLI](https://github.com/IgniteUI/igniteui-cli/wiki) repository.

#### Available Commands


| Command | Alias | Description |
| --- | --- | --- |
| [ig new](https://github.com/IgniteUI/igniteui-cli/wiki/new) | | Create a new  Angular, jQuery or React application. The application will be configured to use either Ignite UI for Angular, or Ignite UI for JavaScript controls. 
| [ig add](https://github.com/IgniteUI/igniteui-cli/wiki/add) | | Adds a template by its ID and providing a name to an existing project
| [ig start](https://github.com/IgniteUI/igniteui-cli/wiki/start) | | Builds the application, starts a web server and opens the application in the default browser.
| [ig build](https://github.com/IgniteUI/igniteui-cli/wiki/build) | | Builds the application into an output directory
| [ig generate](https://github.com/IgniteUI/igniteui-cli/wiki/generate) | g | Generates a new custom template for supported frameworks and project types
| [ig help](https://github.com/IgniteUI/igniteui-cli/wiki/help) | -h | Lists the available commands and provides a brief description of what they do.
| [ig config](https://github.com/IgniteUI/igniteui-cli/wiki/config) | | Performs read and write operation on the Ignite UI CLI configuration settings.
| [ig doc](https://github.com/IgniteUI/igniteui-cli/wiki/doc) | | Searches the Infragistics knowledge base for information about a given search term
| [ig list](https://github.com/IgniteUI/igniteui-cli/wiki/list) | l |  Lists all templates for the specified framework and type. When you run the command within a project folder it will list all templates for the project's framework and type, even if you provide different ones.
| [ig test](https://github.com/IgniteUI/igniteui-cli/wiki/test) |  | Executes the tests for the current project.
| ig version | -v | Shows Ignite UI CLI version installed locally, or globally if local is missing |
