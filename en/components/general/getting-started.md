---
title: Getting Started | Ignite UI for Angular | Infragistics
_description: Ignite UI for Angular is a complete set of native Angular UI components, which allow you to build fast, feature-rich and Material designed applications!
_keywords: ignite ui for angular, getting started, angular components
---

# Getting started with Ignite UI for Angular

[`Ignite UI for Angular`](https://github.com/IgniteUI/igniteui-angular) is a complete set of Material-based UI Widgets, Components & Figma UI kits and supporting directives for Angular by Infragistics. It enables developers to build modern high-performance HTML5 & JavaScript apps for desktop browsers, mobile experiences and progressive web apps (PWA’s) targeting Google's Angular framework.

Ignite UI for Angular is offered under a dual-license model, which allows for both commercial and permissive open-source use, depending on the components, modules, directives, and services being used. For more details, refer to the [Ignite UI Licensing](./ignite-ui-licensing.md) and [Open Source vs Premium](./open-source-vs-premium.md) topics.

## Prerequisites

1. Install NodeJS.
2. Install Visual Studio Code.

<div>
    <div style="display:inline-block;width:45%;text-align:center;">
      <img src="../../images/general/nodejs.svg" alt="NodeJS"
           style="display:flex;max-height:100px;margin:auto auto 20px auto;" />
      <a target="_blank" href="https://nodejs.org/en/download/" class="no-external-icon"
         style="color:white;background-color:#09f;text-decoration:none;font-weight:700;font-size:16px;padding: 5px 15px 5px 15px;">
        DOWNLOAD NODE
      </a>
    </div>
    <div style="display:inline-block;width:45%;text-align:center;">
      <img src="../../images/general/vs-code.svg" alt="Visual Studio Code"
           style="display:flex;max-height:100px;margin:auto auto 20px auto;" />
      <a target="_blank" href="https://code.visualstudio.com/download" class="no-external-icon"
         style="color:white;background-color:#09f;text-decoration:none;font-weight:700;font-size:16px;padding: 5px 15px 5px 15px;">
        DOWNLOAD VS CODE
      </a>
    </div>
</div>
<div class="divider--half"></div>

## Installing Ignite UI for Angular

Ignite UI for Angular can be installed using the Ignite UI CLI, Angular Schematics, or the Angular CLI `ng add igniteui-angular` command (for existing Angular CLI projects).

### Quick Start with Ignite UI CLI

The easiest way to create a new Ignite UI for Angular application from scratch is with the **Ignite UI CLI**. It scaffolds a fully configured project and walks you through an interactive setup with no manual configuration required.

Install the CLI globally:

```cmd
npm install -g igniteui-cli
```

Then launch the step-by-step guide:

```cmd
ig
```

<div style="display:inline-block;">
    <a style="background: url(../../images/general/buildCLIapp.gif); display:flex; justify-content:center; width: 80vw; max-width:540px; min-height:315px;"
       href="https://youtu.be/QK_NsdtdA70" target="_blank">
        <img src="../../images/general/play.svg" alt="Play Video" style="vertical-align: middle;" />
    </a>
    <p style="text-align:center;">Building Your First Ignite UI CLI App</p>
</div>

Or create a project directly in one command, for example:

```cmd
ig new <project name> --framework=angular --type=igx-ts --template=side-nav
```

For a full walkthrough of all available options and project templates, see the [Step-by-Step guide using Ignite UI CLI](cli/step-by-step-guide-using-cli.md).

>[!NOTE]
> At some point during the process you'll be asked to [log in to our npm registry](ignite-ui-licensing.md#how-to-setup-your-environment-to-use-the-private-npm-feed-step-by-step-guide) if not already set up. This applies if you plan to use any components under a [commercial license](./open-source-vs-premium.md#comparison-table-for-all-components).

Learn more about the [Ignite UI CLI](cli-overview.md).


### Upgrading from Trial to Licensed

If you want to start using the **Licensed Ignite UI for Angular package** it is strongly recommended to follow the [Upgrading packages guide with Schematics and Ignite UI CLI](ignite-ui-licensing.md#upgrading-packages-using-our-angular-schematics-or-ignite-ui-cli).

Following is a quick overview of the steps that you need to perform in order to start using the **Licensed version of Ignite UI for Angular**. Depending on your project setup, either run the following schematic in your project:

```bash
ng g @igniteui/angular-schematics:upgrade-packages
```

or if using `igniteui-cli`:

```bash
ig upgrade-packages
```

The schematic will take care of switching the package dependencies of the project and update source references.
[You'll be asked to login to our npm registry if not already setup](ignite-ui-licensing.md#how-to-setup-your-environment-to-use-the-private-npm-feed-step-by-step-guide).

#### Login to our npm registry with a new setup

The approach described above covers only the scenarios where Ignite UI for Angular Trial package is already installed. If you are performing a new setup of a project or just starting with using Ignite UI for Angular, follow the guidance below.

It's very important to [perform a correct setup of the private npm feed environment](ignite-ui-licensing.md#how-to-setup-your-environment-to-use-the-private-npm-feed-step-by-step-guide), by:

- Ensuring a valid setup of the private registry.
- Log in to our private feed using npm by specifying a non-trial user account and password.

Details on the entire process [could be found here](ignite-ui-licensing.md#how-to-setup-your-environment-to-use-the-private-npm-feed-step-by-step-guide).

### Quick Start with Angular Schematics

You can also create an application from scratch using the **Ignite UI for Angular Schematics**. Install the package globally:

```cmd
npm i -g @igniteui/angular-schematics
```

Then activate the guided setup:

```cmd
ng new --collection="@igniteui/angular-schematics"
```

>[!NOTE]
> At some point during the process you'll be asked to [log in to our npm registry](ignite-ui-licensing.md#how-to-setup-your-environment-to-use-the-private-npm-feed-step-by-step-guide) if not already set up. This applies if you plan to use any components under a [commercial license](./open-source-vs-premium.md#comparison-table-for-all-components).

Learn more about the [Ignite UI for Angular Schematics](cli/step-by-step-guide-using-angular-schematics.md).

## Using Ignite UI for Angular

We are now ready to start using Ignite UI for Angular components!

### Add components automatically

#### Import modules and use components

Now we can add new components to our application using either the `component` schematic or the `add` command:

```cmd
ng g @igniteui/angular-schematics:component
```

```cmd
ig add
```

> [!NOTE]
> Please note that the [`ig add`](https://github.com/IgniteUI/igniteui-cli/wiki/add) command can be used if the application was created by using the Ignite UI CLI or
> if it was created by using the Angular CLI with Ignite UI for Angular added to it by using the **ng add igniteui-angular** command.

After going through the options of the menu and choosing which component we want to add to our application, we will notice that we have a brand new component in our project, which we can use anywhere on our page!

#### Run application

Now let’s run our application to see our awesome page!

```cmd
npm start
```

### Add components manually

As of Angular 19, standalone components are the default way to build Angular apps, removing the need for `NgModules` and simplifying the process of adding components significantly. So let's use this to add an [**igxGrid**](../grid/grid.md) component to our app.

Before we start though, please note that some components have animations that require a provider as part of the `bootstrapApplication` call.

```typescript
// main.ts

import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
```

```typescript
// app/app.config.ts

import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

const providers: Provider = [
  importProvidersFrom(BrowserModule),
  provideAnimations()
];

export const appConfig: ApplicationConfig = { providers };
```

#### Use components

We are now ready to use the igxGrid in our markup! Let's go ahead and define it in our **app.component.html** file:

```html
<!-- app.component.html -->

<div style="text-align:center; margin-bottom: 20px;">
  <h1>
    Welcome to {{title}}!
  </h1>
</div>

<div style="text-align: center;">
  <igx-grid [data]="localData" width="600px" height="400px" style="margin: auto" [allowFiltering]="true">
    <igx-column field="Name" dataType="string"></igx-column>
    <igx-column field="Age" dataType="number"></igx-column>
  </igx-grid>
</div>
```

We will also define the data of the grid and the title of our application that are referenced from the **app.component.ts**. As we are using standalone components we simply have to add the `IgxGridComponent` class to our app's imports, alongside any other components used in the template. In our example, as we are defining columns, we also have to add the `IgxColumnComponent` to the import array.

```typescript
// app.component.ts

import { Component } from '@angular/core';
import { IgxGridComponent, IgxColumnComponent } from 'igniteui-angular/grids/grid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [IgxGridComponent, IgxColumnComponent]
})
export class AppComponent {
  localData = [
    { Name:'John', Age: 29 },
    { Name:'Alice', Age: 27 },
    { Name:'Jessica', Age: 31 },
  ];

  title = 'My Ignite UI project';
}
```
<!-- TODO: Add this with the introduction of the upgrade process
### Upgrading from Grid Lite to Commercial Grid

`Grid Lite` is a great way to start with a free, open-source grid. However, as your application grows, you might need advanced features like Excel Export, Advanced Filtering, Master-Detail or the various grid flavors like `Tree Grid` or `Pivot Grid`. This means upgrading to commercial Ignite UI for Angular Grid component. We made this process simple and straightforward:

- add steps

Since the API is compatible, your grid configuration in the template usually doesn't need any changes!-->

#### Run application

Finally, we can run our new application by using one of the following commands:

- If the application was created by using the Ignite UI CLI:

```cmd
ig start
```

- If the application was created by using the Angular CLI:

```cmd
ng serve
```

The final result should look something like this:


<img class="responsive-img" src="../../images/general/igniteui-project.png" alt="Ignite UI Project" />


## API References

In this article we learned how to create our own Ignite UI for Angular application from scratch by taking advantage of the fully-automated process of Ignite UI for Angular projects creation in the Ignite UI CLI. We also learned how to add Ignite UI for Angular to an existing application by using the Angular CLI. We designed our own page by including the [`IgxGridComponent`]({environment:angularApiUrl}/classes/igxgridcomponent.html) to it, which itself offers some awesome features, which you can take a look at by referring to the navigation menu.

- [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
- [IgxGridComponent Styles]({environment:sassApiUrl}/themes#function-grid-theme)

## AI-Assisted Development

Ignite UI for Angular ships with **Agent Skills** — structured knowledge files that teach AI coding assistants (GitHub Copilot, Cursor, Windsurf, Claude, JetBrains AI, etc.) how to work with the library. Skills cover components, data grids, grid data operations, and theming.

Learn more in the [Ignite UI for Angular Skills](../ai/skills.md) topic.

The **Ignite UI CLI** also includes a built-in **MCP (Model Context Protocol) server** that gives AI assistants live access to Ignite UI component documentation and API references directly inside your editor. Unlike static skills, the MCP server lets your assistant query up-to-date docs, search APIs, and retrieve setup guides on demand.

Learn more in the Ignite UI MCP Server topic.

## Additional Resources

<div class="divider--half"></div>

- [Ignite UI for Angular Skills](../ai/skills.md)
- Ignite UI MCP Server
- [Ignite UI CLI](https://github.com/IgniteUI/igniteui-cli)
- [Ignite UI CLI Commands](https://github.com/IgniteUI/igniteui-cli/wiki#available-commands)
- [Grid overview](../grid/grid.md)
- [Grid Lite overview](../grid-lite/overview.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
