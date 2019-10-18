---
title: Ignite UI Angular Schematics
_description: Ignite UI Schematics is a workflow tool for creating, modifying and customizing web projects that use Ignite UI for Angular components.
_keywords: Ignite UI for Angular, Schematics, UI controls, CLI, Templates, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library
---

## Ignite UI Angular Schematics

Ignite UI Angular Schematics is a workflow tool for creating, modifying and customizing web projects that use Ignite UI for Angular components. Built on top of the Angular Schematics, it provides commands for generating files and adding Ignite UI dependencies in an application.

### Getting Started

The first step is to install Ignite UI Angular Schematics tool globally:
```cmd
npm i -g @igniteui/angular-schematics
```

The above command will install a schematics executable, which you can use either to create a blank Schematics project or to modify an existing Angular application.

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

### Add template

Once your project is configured, you can add Ignite UI for Angular components through the `component`(alias:`c`) schematic.

To activate the Ignite UI CLI [Step-by-Step Guide](step-by-step-guide.md) run:

```cmd
ng g @igniteui/angular-schematics:component
```

Alternatively, you can add one of the [available templates](component-templates.md) by providing an ID and component name:

```cmd
ng g @igniteui/angular-schematics:component [templateId] [componentName]
```
Additionally, you can specify **arguments** to control the theme or skip packages install:

<details>
  <summary>module <span align="right"><strong>(v2.0.0)</strong></span></summary>
  <p>
    <code>--module</code> (alias: <code>-m</code>)
  </p>  
  <p>
    Path to the module.ts file, relative to the /src/app/ folder, for the module where the new component should be registered:
  </p>
  <code>ng g @igniteui/angular-schematics:component combo newCombo --module=myModule/myModule.module.ts</code>
</details>

<details>
  <summary>skip-route <span align="right"><strong>(v3.2.0)</strong></span></summary>
  <p>
    <code>--skip-route</code> (alias: <code>-srk</code>)
  </p>
  <p>
    Don't auto-generate an app navigation route for the new component
  </p>
</details>