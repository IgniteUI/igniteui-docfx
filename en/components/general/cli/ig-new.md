---
title: ig new
_description: The ig new command creates a new jQuery, Angular or React application.
_keywords: Ignite UI for Angular, UI controls, CLI, Templates, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library
---

## ig new

`ig new [name]` creates a new Ignite UI application.

You can use the new command to create a new jQuery, Angular or React application. As a result the application will be configured to use either Ignite UI for JavaScript, Ignite UI for React or Ignite UI for Angular controls. The new application is created in a directory of the same name. Please note that creating a new application inside an existing application is not supported.

### Arguments

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
    The available project types depend on the selected framework. Currently, when creating an Angular project, you can select between `ig-ts` and `igx-ts` types (the latter for applications that are configured to use Ignite UI for Angular). jQuery and React projects support a single type only - `js` for jQuery and `es6` for React. As those are default project types, you do not need to provide `--type` argument when creating jQuery or React projects.
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
    Currently this option is available only for Ignite UI for Angular igx-ts project types. The possible values are as it follows:</p>

| template id | template description |
| --- | --- |
| empty-project | Project structure with routing and a home page |
| side-nav | Project structure with side navigation drawer |
| side-nav-auth | Side navigation project extended with user authentication module |
</details>

### Creating Ignite UI for Angular applications
To create an application that is configured to use the Ignite UI for Angular controls, you need to provide "igx-ts" as your  project type argument.<br/>

| Framework | Command |
| --- | --- |
| Angular    | `ig new newIgniteUIAngular --framework=angular --type=igx-ts --template=side-nav`<details><b>Using aliases: </b><code>ig new newIgniteUIAngular -f=angular -t=igx-ts --template=side-nav</code></details> |
