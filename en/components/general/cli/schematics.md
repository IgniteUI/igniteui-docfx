---
title: Ignite UI CLI Schematics
_description: The Ignite UI CLI is a tool for initializing, developing, scaffolding and maintaining applications in a wide variety of frameworks.
_keywords: Ignite UI for Angular, UI controls, CLI, Templates, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library
---

## Ignite UI CLI Schematics

[Ignite UI CLI](https://github.com/IgniteUI/igniteui-cli) is a command-line tool for creating and scaffolding applications for a variety of frameworks. It provides project templates pre-configured for Ignite UI for Angular that helps you get your next app off the ground in record time. A selection of views with Ignite UI for Angular components that can be further added to projects provides a substantial productivity boost for developers.

### Getting Started

The first step is to install Ignite UI CLI Schematics using the npm package manager:
```cmd
npm i -g @igniteui/angular-schematics
```

Next, you can either create a new project with the Ignite UI for Angular components or add the Ignite UI for Angular package to an Angular application.

#### Create project from scratch
To create an application that is configured to use the Ignite UI for Angular controls run the following command: 

```cmd
ng new --collection="@igniteui/angular-schematics"
```
This will activate the Ignite UI CLI [Step-by-Step Guide](step-by-step-guide.md) that will guide you through the setup process.

#### Add to existing Angular project
To add the Ignite UI for Angular package to an existing Angular application run:
```cmd
ng add igniteui-angular
```
After running this command, the igniteui-angular library and the schematics definitions will be added to your project.

### Add View

Once your project is configured, you can add Ignite UI for Angular components through the component schematics by calling:

```cmd
ng g @igniteui/angular-schematics:component
```

This will enter the Step by step mode. Alternatively , you can generate a specific component by providing its template ID and a name:

```cmd
ng g @igniteui/angular-schematics:component [templateId] [componentName]
```

You can find all of the template definitions in the official documentation