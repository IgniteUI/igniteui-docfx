---
title: Ignite UI CLI
_description: The Ignite UI CLI is a tool for initializing, developing, scaffolding and maintaining applications in a wide variety of frameworks.
_keywords: Ignite UI for Angular, UI controls, CLI, Templates, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library
---

## Ignite UI CLI

[`Ignite UI CLI`](https://github.com/IgniteUI/igniteui-cli) is a command-line tool for creating and scaffolding applications for a variety of frameworks. It provides project templates pre-configured for Ignite UI for Angular that helps you get your next app off the ground in record time. A selection of views with Ignite UI for Angular components that can be further added to projects give a boost to productivity.

### Getting Started

Install [`Ignite UI CLI`](https://github.com/IgniteUI/igniteui-cli) using the npm package manager:
```cmd
npm install -g igniteui-cli 
```
Once the installation process is finished, there are two possible options/modes to start the tool: using guided experience or specific commands.

#### Using guided experience
The shortest and easiest way to bootstrap an application is to use the Ignite UI CLI [`Step-by-Step Guide`](step-by-step-guide.md), which creates a configured app that can be up and running with the ease of a single command. 
```cmd
ig
```

<div style="display:inline-block;">
    <a style="background: url(../../../images/general/buildCLIapp.gif); display:flex; justify-content:center; min-width:540px; min-height:315px;"
       href="https://youtu.be/QK_NsdtdA70" target="_blank">
        <img src="../../../images/general/play.svg" style="vertical-align: middle;" />
    </a>
    <p style="text-align:center;">Building Your First Ignite UI CLI App</p>
</div>

#### Using commands
To create new project, add a component template and build it use the following Ignite UI CLI [commands](#available-commands):
```cmd
ig new <project name> --framework=angular --type=igx-ts 
cd <project name>
ig add <component/template> <component_name>
ig start 
```

To execute the above commands, you should replace the **project name** and **component_name** placeholders with an actual value.
After executing those commands, your new project will be built, served and automatically opened in your default browser.

### Scaffolding

The Ignite UI CLI provides multiple templates of the Ignite UI components that can be added to your project using either the add command or the [`Step-by-Step Guide`](step-by-step-guide.md).
To get a list of all the available [component templates](cli-templates.md) run the [`ig list`](https://github.com/IgniteUI/igniteui-cli/wiki/list) command in your project directory.

To create a new Ignite UI for Angular project with an igxGrid control run the following commands:

```cmd
ig new newAngularProject --framework=angular --type=igx-ts
cd newAngularProject
ig add grid newGrid
ig start
```

### Available Commands
A full list of the available Ignite UI CLI commands as well as details on their usage (like passing flags, etc.), can be found at the [Ignite UI CLI](https://github.com/IgniteUI/igniteui-cli/wiki) wiki.

| Command | Alias | Description |
| --- | --- | --- |
| [ig new](ig-new.md) | | Create a new  Angular, jQuery or React application. The application will be configured to use Ignite UI for Angular, Ignite UI for React or Ignite UI for JavaScript controls. 
| [ig add](ig-add.md) | | Adds a template by its ID and provided name to an existing project
| [ig start](https://github.com/IgniteUI/igniteui-cli/wiki/start) | | Builds the application, starts a web server and opens the application in the default browser.
| [ig build](https://github.com/IgniteUI/igniteui-cli/wiki/build) | | Builds the application into an output directory
| [ig generate](https://github.com/IgniteUI/igniteui-cli/wiki/generate) | g | Generates a new custom template for supported frameworks and project types
| [ig help](https://github.com/IgniteUI/igniteui-cli/wiki/help) | -h | Lists the available commands and provides a brief description of what they do.
| [ig config](https://github.com/IgniteUI/igniteui-cli/wiki/config) | | Performs read and write operation on the Ignite UI CLI configuration settings.
| [ig doc](https://github.com/IgniteUI/igniteui-cli/wiki/doc) | | Searches the Infragistics knowledge base for information about a given search term
| [ig list](https://github.com/IgniteUI/igniteui-cli/wiki/list) | l |  Lists all templates for the specified framework and type. When you run the command within a project folder it will list all templates for the project's framework and type, even if you provide different ones.
| [ig test](https://github.com/IgniteUI/igniteui-cli/wiki/test) |  | Executes the tests for the current project.
| ig version | -v | Shows Ignite UI CLI version installed locally, or globally if local is missing |