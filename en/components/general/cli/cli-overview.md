---
title: Ignite UI CLI
_description: The Ignite UI CLI is a tool for initializing, developing, scaffolding and maintaining applications in a wide variety of frameworks.
_keywords: Ignite UI for Angular, UI controls, CLI, Templates, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library
---

## Ignite UI CLI

[`Ignite UI CLI`](https://github.com/IgniteUI/igniteui-cli) is a command-line tool for creating and scaffolding applications for a variety of frameworks. It provides project templates pre-configured for Ignite UI for Angular that helps you get your next app off the ground in record time. A selection of views with Ignite UI for Angular components that can be further added to projects give a boost to productivity.


### Getting Started

Install [`Ignite UI CLI`](https://github.com/IgniteUI/igniteui-cli) using the npm package manager::
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
You can always use the Ignite UI CLI [commands](cli-commands.md) for generating an Ignite UI project, adding a new component or building and serving the project by yourself. For that purpose, you can use the following commands:
```cmd
ig new <project name> --framework=angular --type=igx-ts 
cd <project name>
ig add <component/template> <component_name>
ig start 
```
- You can find a full list of available **component/template** values [here](https://github.com/IgniteUI/igniteui-cli/wiki/add#ignite-ui-for-angular-templates), you can run [`ig list`](ig-list.md) command in your project directory to get a list of all the available templates.
- Both the **project name** and the **component_name** are custom values, provided by the developer.
Here is an example of creating a new Ignite UI for Angular project with an igxGrid control:

```cmd
ig new newAngularProject --framework=angular --type=igx-ts
cd newAngularProject
ig add grid newGrid
ig start
```

After executing those simple commands, your new project will be built and served. It will automatically open in your default browser and you will be able to inspect your grid control and make changes to the project.
