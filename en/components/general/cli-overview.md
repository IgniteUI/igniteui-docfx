---
title: Angular Schematics | Angular CLI | Ignite UI for Angular | Infragistics
_description: Angular Schematics and Ignite UI CLI help you get a jump start on creating and modifying projects with Ignite UI for Angular components.
_keywords: igniteui for angular, angular schematics, cli, infragistics
---

# Angular Schematics & Ignite UI CLI
Our CLI tools provide project templates pre-configured for Ignite UI for Angular that help you get your next app off the ground in record time. A selection of views with Ignite UI for Angular components that can be further added to projects provide a substantial productivity boost for developers.

[Ignite UI CLI](https://github.com/IgniteUI/igniteui-cli) is a stand-alone command-line tool for creating and scaffolding applications for a variety of frameworks.

[Ignite UI for Angular Schematics](https://github.com/IgniteUI/igniteui-cli/tree/master/packages/ng-schematics) are part of the same project, available as a collection that can be used with the [Angular CLI](https://angular.io/guide/schematics#schematics-for-the-angular-cli). They offer similar core Ignite UI CLI functionality, but one that's integrated with the Schematics workflow and focused specifically on this product. The schematics collection is added to your project when you [install Ignite UI for Angular](getting-started.md#installing-ignite-ui-for-angular).

Both versions of the tooling allow for generating different projects, component and scenario views (templates) and offer guided mode.

## Getting Started
Install Ignite UI for Angular Schematics globally:
```cmd
npm i -g @igniteui/angular-schematics
```

The above install will make the schematics available to use a collection parameter for the `ng new` command.

If you choose to use the Ignite UI CLI you can install it using npm:
```cmd
npm install -g igniteui-cli 
```

### Using guided experience
The shortest and easiest way to bootstrap an application is to use the [Step-by-Step Guide](cli/step-by-step-guide.md). 

To activate the guide using the Ignite UI for Angular Schematics run:

```cmd
ng new --collection="@igniteui/angular-schematics"
```
or run the following command in case you are using Ignite UI CLI:
```cmd
ig
```

<div style="display:inline-block;">
    <a style="background: url(../../images/general/buildCLIapp.gif); display:flex; justify-content:center; width: 80vw; max-width:540px; min-height:315px;"
       href="https://youtu.be/QK_NsdtdA70" target="_blank">
        <img src="../../images/general/play.svg" style="vertical-align: middle;" />
    </a>
    <p style="text-align:center;">Building Your First Ignite UI CLI App</p>
</div>


## Create new project

To create an application that is configured to use the Ignite UI for Angular controls, run the `ng new` command providing `@igniteui/angular-schematics` to the collection option.

```cmd
ng new newAngularProject --collection="@igniteui/angular-schematics" --template=side-nav
```

If you use Ignite UI CLI you need to provide `angular` as framework and `igx-ts` as your project type argument to the `new` command:
```cmd
ig new newAngularProject --framework=angular --type=igx-ts --template=side-nav
```
The new application is created in a directory with the same name (`newAngularProject`). There are several project templates from which you can choose when creating an Ignite UI for Angular application:

| template id   | template description |
| ---           | ---                  |
| empty         | Project structure with routing and a home page |
| side-nav      | Project structure with side navigation drawer |
| side-nav-auth | Side navigation project extended with user authentication module. <br> [Angular Authentication Project Template](cli/auth-template.md) topic covers the project template in detail. |

Additionally, you can specify **arguments** to control the theme or skip packages install:

<div class="fancy-details">
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
  <summary>framework<span align="right"><strong> (Ignite UI CLI only)</strong></span></summary>
  <p>
    <code>--framework</code> (alias: <code>-f</code>) <em>default value: "jquery"</em>
  </p>
  <p>
    Framework to setup project for. The supported frameworks are jQuery, Angular and React.
  </p>
</details>

<details>
  <summary>type<span align="right"><strong> (Ignite UI CLI only)</strong></span></summary>
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
  <summary>skip-install</summary>
  <p>
    <code>--skip-install</code> (alias: <code>--si</code>)
  </p>
  <p>
    The <code>new</code> command will install package dependencies on project creation. Passing this flag will skip the initial installation.
  </p>
</details>

<details>
  <summary markdown='span'>template</summary>
  <p>
    <code>--template</code>
  </p>
  <p>
    Use this option if there are different project templates for a specific framework type. 
    Currently this option is available only for Ignite UI for Angular igx-ts project types.</p>
</details>
</div>

## Add template
To add one of the [available Ignite UI Angular templates](cli/component-templates.md) you need to provide template ID and a name for the new component or use the [Step-by-Step Guide](cli/step-by-step-guide.md#add-view). Supported only inside existing projects created with the Angular Schematics, Ignite UI CLI or where Ignite UI for Angular has been [installed using `ng add`](getting-started.md#installing-ignite-ui-for-angular).

With Schematics, use `ng generate` with the Ignite UI for Angular collection and `component [template] [name]`:

```cmd
ng g @igniteui/angular-schematics:component grid newGrid
```

For Ignite UI CLI use the `ig add [template] [name]` command:

```cmd
ig add grid newGrid
```

To get a list of all the [available templates](cli/component-templates.md) you can also execute the [`ig list`](https://github.com/IgniteUI/igniteui-cli/wiki/list) command in your project directory.

Additionally, you can specify the module in which the component will be registered or skip the auto-generation of app navigation route:

<details>
  <summary>module</summary>
  <p>
    <code>--module</code> (alias: <code>-m</code>)
  </p>
  <p>
    <i>note: module argument is applicable only in Angular projects.</i>
  </p> 
  <p>
    Path to the module.ts file, relative to the /src/app/ folder, for the module where the new component should be registered:
  </p>
  <code>ng g @igniteui/angular-schematics:component combo newCombo --module=myModule/myModule.module.ts</code>
  <br>
  <code>ig add combo newCombo --module=myModule/myModule.module.ts</code>
</details>

<details>
  <summary>skip-route</summary>
  <p>
    <code>--skip-route</code> (alias: <code>-srk</code>)
  </p>
  <p>
    Don't auto-generate an app navigation route for the new component
  </p>
</details>


## Run the application

The `start` schematic or command will build the application, start a web server and open it in your default browser.

using Ignite UI for Angular Schematics:
```cmd
ng g @igniteui/angular-schematics:start
```
using Ignite UI CLI:
```cmd
ig start
```

## Ignite UI CLI Commands
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
