---
title: ig list 
_description: The ig list lists all templates for the specified framework and type.
_keywords: Ignite UI for Angular, UI controls, CLI, Templates, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library
---

## ig list
The `ig list` lists all templates for the specified framework and type. When you run the command within a project folder it will list all templates for the project's framework and type, even if you provide different ones.

## Arguments
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
    <code>--type</code> (alias: <code>-t</code>)
  </p>
  <p>
    The available project types depend on the framework we are creating a custom template for. Currently, when generating a custom template for Angular projects, you can select between `ig-ts` and `igx-ts` types (the latter for applications that are configured to use Ignite UI for Angular). jQuery and React projects support a single type only - `js` for jQuery and `es6` for React. As those are default project types, you do not need to provide `--type` argument when generating custom templates for jQuery or React projects.
  </p>
</details>

### Listing all templates for specific framework
To list all templates for specific framework run `list` outside a project folder. Following are examples of how to use the `list` command:

| Framework | Code                                    |
| --------- | --------------------------------------- |
| jQuery    |  <code>ig list</code><details><b>Using aliases: </b><code>ig l</code><br/>jQuery is the default choice so you do not need to provide the "framework" and "type" arguments.</details>|
| Angular | <code>ig list --framework=angular --type=igx-ts</code><details><b>Using aliases: </b><code>ig l -f=angular -t=igx-ts</code>|
| React     | <code>ig list --framework=react --type=igr-es6</code><details><b>Using aliases: </b><code>ig l -f=react -t=igr-es6</code>|
| Angular Wrappers | <code>ig list --framework=angular --type=ig-ts</code><details><b>Using aliases: </b><code>ig l -f=angular -t=ig-ts</code>|
| React Wrappers    | <code>ig list --framework=react --type=es6</code><details><b>Using aliases: </b><code>ig l -f=react -t=es6</code>|


### Listing all templates for specific project
To list all templates for specific project run `list` from the project folder:\
```bash
ig list
```