---
title: ig generate
_description: The ig generate command generates a new custom template for supported frameworks and project types.
_keywords: Ignite UI for Angular, UI controls, CLI, Templates, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library
---

## ig generate
`ig generate template [name]` generates a new custom template for supported frameworks and project types.
In addition, by default the command registers the generated template path in the `customTemplates` in the [global config](ig-config.md) of the Ignite UI CLI.
That makes the generated template automatically visible under the [Add View menu](step-by-step-guide.md#add-view), or directly when using [`add` command](ig-add.md).

The command can generate custom template for jQuery, Angular or React.

> To manually include the custom template in the CLI use the [`config add`](ig-config.md) commnad to add a record in `customTemplate`. 

## Arguments
<details>
  <summary>name</summary>
  <p>
    <code>name</code> (alias: <code>-n</code>) <em>default value: "custom-template"</em>
  </p>
  <p>
    The name of the custom template. The template is generated inside a directory with the same name.
  </p>
</details>

<details>
  <summary>framework</summary>
  <p>
    <code>--framework</code> (alias: <code>-f</code>) <em>default value: "jquery"</em>
  </p>
  <p>
    Framework to setup the template for. Your custom template will be available only when creating a project in the respective framework. The supported frameworks are jQuery, Angular and React.
  </p>
</details>

<details>
  <summary>type</summary>
  <p>
    <code>--type</code> (alias: <code>-t</code>) <em>default value: "js"</em>
  </p>
  <p>
    The available project types depend on the framework we are creating a custom template for. Currently, when generating a custom template for Angular projects, you can select between `ig-ts` and `igx-ts` types (the latter for applications that are configured to use Ignite UI for Angular). jQuery and React projects support a single type only - `js` for jQuery and `es6` for React. As those are default project types, you do not need to provide `--type` argument when generating custom templates for jQuery or React projects.
  </p>
</details>

<details>
  <summary>skip-config</summary>
  <p>
    <code>--skip-config</code> (alias: <code>-s</code>) <em>default value: false</em>
  </p>
  <p>
    Setting it to true will run generate command without updating the cli config.
  </p>
</details>

### Generating custom Ignite UI for Angular templates

To generate a custom template that will be available to use in your Ignite UI for Angular applications, you need to provide "igx-ts" as the type argument.<br/>
```cmd
ig generate template newAngularTemplate --framework=angular --type=igx-ts
```

or using aliases
```cmd
ig g t newAngularTemplate -f=angular -t=igx-ts
```

### Using skip-config flag
In case you want to generate a custom template but you don't want to register it into the Ignite UI CLI, you need to provide an additional `skip-config` argument set to true. Your command will look like this:<br/>
```cmd
ig generate template newAngularTemplate --framework=angular --type=igx-ts --skip-config=true
```