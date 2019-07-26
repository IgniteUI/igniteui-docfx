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
Once the installation process is finished, you can start the tool using either guided experience or specific commands.

#### Using guided experience
The shortest and easiest way to bootstrap an application is to use the Ignite UI CLI [`Step-by-Step Guide`](cli/step-by-step-guide.md), which creates a configured app that can be up and running with the ease of a single command. 
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
To create new project, add a component template and build it use the following Ignite UI CLI [commands](#commands):
```cmd
ig new <project name> --framework=angular --type=igx-ts 
cd <project name>
ig add <component/template> <component_name>
ig start 
```

To execute the above commands, you should replace the *project name* and *component_name* placeholders with an actual value.
After running these commands, your new project will be built, served and automatically opened in your default browser.


### Commands

#### Create new project

To create an application that is configured to use the Ignite UI for Angular controls, you need to provide `angular` as framework and `igx-ts` as your project type argument:

```cmd
ig new newAngularProject --framework=angular --type=igx-ts --template=side-nav
```
The new application is created in a directory with the same name (`newAngularProject`). [`Ignite UI CLI`](https://github.com/IgniteUI/igniteui-cli) also provides several project templates from which you can choose when creating an Ignite UI for Angular application:

| template id   | template description |
| ---           | ---                  |
| empty-project | Project structure with routing and a home page |
| side-nav      | Project structure with side navigation drawer |
| side-nav-auth | Side navigation project extended with user authentication module. <br> [Angular Authentication Project Template](cli/auth-template.md) topic provides a step-by-step guide to creating a project with the side-nav-auth template. |

Additionally, you can specify **arguments** to control the theme or skip packages install:

<details>
  <summary>name</summary>
  <p>
    <code>name</code> (alias: <code>-n</code>)
  </p>
  <p>
    The name of the application. The application is created inside a directory with the same name.
  </p>
</details>

<details>
  <summary>framework</summary>
  <p>
    <code>--framework</code> (alias: <code>-f</code>) <em>default value: "jquery"</em>
  </p>
  <p>
    Framework to setup project for. The supported frameworks are jQuery, Angular and React.
  </p>
</details>

<details>
  <summary>type</summary>
  <p>
    <code>--type</code> (alias: <code>-t</code>)
  </p>
  <p>
    The available project types depend on the selected framework.
  </p>
</details>

<details>
  <summary>theme</summary>
  <p>
    <code>--theme</code> (alias: <code>-th</code>)
  </p>
  <p>
    Project theme (depends on project type).
  </p>
</details>

<details>
  <summary>skip-git</summary>
  <p>
    <code>--skip-git</code> (alias: <code>--sg</code>)
  </p>
  <p>
    When this option is used, the automatic repository initialization with Git will be skipped. If the option is omitted, then the global <a href="config">skipGit</a> configuration property is used.
  </p>
</details>

<details>
  <summary>skip-install <span align="right"><strong>(v4.0.0)</strong></span></summary>
  <p>
    <code>--skip-install</code> (alias: <code>--si</code>)
  </p>
  <p>
    Since v4.0.0 the <code>ig new</code> command will install package dependencies when the project is created. Passing this flag will skip the initial installation.
  </p>
</details>

<details>
  <summary markdown='span'>template <span align="right"><strong>(v3.0.0)</strong></span></summary>
  <p>
    <code>--template</code>
  </p>
  <p>
    Use this option if there are different project templates for a specific framework type. 
    Currently this option is available only for Ignite UI for Angular igx-ts project types.</p>
</details>


#### Add template

`ig add [template] [name]` adds a template by ID from the available [component templates](cli/components-templates.md) with the name provided.

```cmd
cd newAngularProject
ig add grid newGrid
```

The `add` command is supported only on existing project created with the Ignite UI CLI. To get a list of all the available [component templates](cli/components-templates.md) you can also execute the [`ig list`](https://github.com/IgniteUI/igniteui-cli/wiki/list) command in your project directory.

Additionally, you can specify **arguments** to control the theme or skip packages install:

<details>
  <summary>module <span align="right"><strong>(v2.0.0)</strong></span></summary>
  <p>
    <code>--module</code> (alias: <code>-m</code>)
  </p>
  <p>
    <i>note: module argument is applicable only in Angular projects.</i>
  </p> 
  <p>
    Path to the module.ts file, relative to the /src/app/ folder, for the module where the new component should be registered:
  </p>
  <code>ig add grid newCombo --name=myModule/myModule.module.ts</code>
</details>

<details>
  <summary>skip-route <span align="right"><strong>(v3.2.0)</strong></span></summary>
  <p>
    <code>--skip-route</code> (alias: <code>-srk</code>)
  </p>
  <p>
    Don't auto-generate am app navigation route for the new component
  </p>
</details>

#### Run the application

Executing the [ig start](https://github.com/IgniteUI/igniteui-cli/wiki/start) command will build the application, start a web server and open it in your default browser.

```cmd
ig start
```

#### Available Commands
A full list of the available Ignite UI CLI commands and their usage (like passing flags, etc.), can be found at the [Ignite UI CLI wiki pages](https://github.com/IgniteUI/igniteui-cli/wiki):

| Command | Alias | Description |
| --- | --- | --- |
| [ig start](https://github.com/IgniteUI/igniteui-cli/wiki/start)  | | Builds the application, starts a web server and opens the application in the default browser.
| [ig build](https://github.com/IgniteUI/igniteui-cli/wiki/build) | | Builds the application into an output directory
| [ig generate](https://github.com/IgniteUI/igniteui-cli/wiki/generate) | g | Generates a new custom template for supported frameworks and project types
| [ig help](https://github.com/IgniteUI/igniteui-cli/wiki/help) | -h | Lists the available commands and provides a brief description of what they do.
| [ig config](https://github.com/IgniteUI/igniteui-cli/wiki/config) | | Performs read and write operation on the Ignite UI CLI configuration settings.
| [ig doc](https://github.com/IgniteUI/igniteui-cli/wiki/doc) | | Searches the Infragistics knowledge base for information about a given search term
| [ig list](https://github.com/IgniteUI/igniteui-cli/wiki/list) | l |  Lists all templates for the specified framework and type. When you run the command within a project folder it will list all templates for the project's framework and type, even if you provide different ones.
| [ig test](https://github.com/IgniteUI/igniteui-cli/wiki/test) |  | Executes the tests for the current project.
| ig version | -v | Shows Ignite UI CLI version installed locally, or globally if local is missing |