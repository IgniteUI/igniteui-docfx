---
title: Ignite UI CLI
_description: The Ignite UI CLI is a tool for initializing, developing, scaffolding and maintaining applications in a wide variety of frameworks.
_keywords: Ignite UI for Angular, UI controls, CLI, Templates, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library
---

## Ignite UI CLI

[`Ignite UI CLI`](https://github.com/IgniteUI/igniteui-cli) is a command-line tool for creating and scaffolding applications for a variety of frameworks. It provides project templates pre-configured for Ignite UI for Angular that helps you get your next app off the ground in record time. A selection of views with Ignite UI for Angular components that can be further added to projects provides a substantial productivity boost for developers.
### Getting Started

Install [`Ignite UI CLI`](https://github.com/IgniteUI/igniteui-cli) using the npm package manager:
```cmd
npm install -g igniteui-cli 
```
Once the installation process is finished, you can start the tooln using either guided experience or specific commands.

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

To execute the above commands, you should replace the *project name* and *component_name* placeholders with an actual value.
After running these commands, your new project will be built, served and automatically opened in your default browser.

### Scaffolding

The Ignite UI CLI provides multiple templates of the Ignite UI components that can be added to your project using either the [add](ig-add.md) command or the [`Step-by-Step Guide`](step-by-step-guide.md).

Here are the main steps to create a new Ignite UI for Angular project with an igxGrid control:

#### Create new project

To create new Ignite UI for Angular project run the [new](ig-new.md) command.

When running the command you should provide a name for your project. This name is used also as the name of the output directory for the application. In our case this is *newAngularProject*.

The framework argument indicates the framework the project will be set up to use. 

When creating an Angular project, you can also choose its type. To initiate an application that is configured to use Ignite UI for Angular, select igx-ts type.

[`Ignite UI CLI`](https://github.com/IgniteUI/igniteui-cli) also provides several project templates from which you can choose when creating an Ignite UI for Angular application. The following are the currently supported templates by [`Ignite UI CLI`](https://github.com/IgniteUI/igniteui-cli):


| template id   | template description |
| ---           | ---                  |
| empty-project | Project structure with routing and a home page |
| side-nav      | Project structure with side navigation drawer |
| side-nav-auth | Side navigation project extended with user authentication module |
<br>
[Angular Authentication Project Template](auth-template.md) topic provides a step-by-step guide to creating a project with the side-nav-auth template.

```cmd
ig new newAngularProject --framework=angular --type=igx-ts --template=side-nav
```

#### Add template

To add one of the Ugnite UI control templates run the [add](ig-add.md) command from within the project folder.

```cmd
cd newAngularProject
ig add grid newGrid
```

To get a list of all the available [component templates](cli-templates.md) execute the [`ig list`](https://github.com/IgniteUI/igniteui-cli/wiki/list) command in your project directory.

#### Run the application

Executing the [ig start](https://github.com/IgniteUI/igniteui-cli/wiki/start) command will build the application, start a web server and open it in your default browser.

```cmd
ig start
```

### Available Commands
A full list of the available Ignite UI CLI commands and their usage (like passing flags, etc.), can be found at the [Ignite UI CLI](https://github.com/IgniteUI/igniteui-cli/wiki) wiki page.

| Command | Alias | Description |
| --- | --- | --- |
| [ig new](ig-new.md) | | Create a new  Angular, jQuery or React application. The application will be configured to use Ignite UI for Angular, Ignite UI for React or Ignite UI for JavaScript controls. 
| [ig add](ig-add.md) | | Adds a template by its ID and provided name to an existing project
| [ig start (wiki)](https://github.com/IgniteUI/igniteui-cli/wiki/start)  | | Builds the application, starts a web server and opens the application in the default browser.
| [ig build (wiki)](https://github.com/IgniteUI/igniteui-cli/wiki/build) | | Builds the application into an output directory
| [ig generate (wiki)](https://github.com/IgniteUI/igniteui-cli/wiki/generate) | g | Generates a new custom template for supported frameworks and project types
| [ig help (wiki)](https://github.com/IgniteUI/igniteui-cli/wiki/help) | -h | Lists the available commands and provides a brief description of what they do.
| [ig config (wiki)](https://github.com/IgniteUI/igniteui-cli/wiki/config) | | Performs read and write operation on the Ignite UI CLI configuration settings.
| [ig doc (wiki)](https://github.com/IgniteUI/igniteui-cli/wiki/doc) | | Searches the Infragistics knowledge base for information about a given search term
| [ig list (wiki)](https://github.com/IgniteUI/igniteui-cli/wiki/list) | l |  Lists all templates for the specified framework and type. When you run the command within a project folder it will list all templates for the project's framework and type, even if you provide different ones.
| [ig test (wiki)](https://github.com/IgniteUI/igniteui-cli/wiki/test) |  | Executes the tests for the current project.
| ig version | -v | Shows Ignite UI CLI version installed locally, or globally if local is missing |