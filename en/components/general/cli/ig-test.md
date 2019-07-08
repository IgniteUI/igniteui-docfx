---
title: ig test
_description: The ig test command executes the tests for the current project.
_keywords: Ignite UI for Angular, UI controls, CLI, Templates, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library
---

## ig test
The `ig test` command executes the tests for the current project. An Angular project test setup includes [Karma](https://karma-runner.github.io/2.0/index.html) and [Protractor](https://github.com/angular/protractor) by default. All component templates include a test file, meaning that when a component is added via [`Ignite UI CLI`](cli-overview.md), all tests from the test file will be executed upon running the application.

To runs all .spec.ts files under ./src folder use 
```cmd
ig test
```

## Arguments
<details>
  <summary>e2e</summary>
  <p>
    <code>e2e</code> <em>default value: false</em>
  </p>
  <p>
    The optional flag to use for executing end-to-end tests, where applicable.
  </p>
</details>
