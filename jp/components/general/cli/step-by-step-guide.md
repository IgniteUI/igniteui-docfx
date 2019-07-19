---
title: Step-by-Step Guide
_description: The Step-by-Stem Guide contains aguided experience through the Ignite UI CLI options.
_keywords: Ignite UI for Angular, UI controls, CLI, Templates, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library
---

## Step-by-Step Guide
If you want to get a guided experience through the available options, you can initialize the step by step mode that will help you to create and setup your new application, as well as update project previously created with the Ignite UI CLI.

To start the guide, simply run the `ig` command:

```bash
ig
```
or
```bash
ig new
```

This will activate the step by step mode and you will be asked a series of questions to help you create your new project.

<div style="display:inline-block;">
    <a style="background: url(../../../images/general/buildCLIapp.gif); display:flex; justify-content:center; min-width:540px; min-height:315px;"
       href="https://youtu.be/QK_NsdtdA70" target="_blank">
        <img src="../../../images/general/play.svg" style="vertical-align: middle;" />
    </a>
    <p 

> **Note** Step by step mode relies on `Inquirer.js`, see [supported terminals](https://github.com/SBoudrias/Inquirer.js#support-os-terminals)



## Create new project

You will be asked for an input (like for providing a name for your application) or you will be provided with a list of options from which you may select the desired one, navigating via the arrow keys
(like for selecting a framework for your application).
You may skip options via the ENTER key and in such case the default values will be set for those options.


After you provide name, framework and a theme for your application, your new project's structure will be generated, git repository will be initialized and the project will be committed. Then you will be asked if you want to complete the process or to add a new Ignite UI view to your application:

## Add view

This mode can be activated either after completing project creation or by running the `add` command inside an existing project:
```bash
ig add
``` 

In case you select to add a new control, you will be provided with a [list of the available controls](ig-add.md#Ignite UI for Angular templates), grouped in categories.
You can select a control using the arrow keys to navigate through the list and for some controls (igGrid, for example) you will be provided with a list of available features to enable.


For example, if you select to add a grid control to your application and select the "grid-editing" template, "Updating" will be enabled by default, and you will be able to select to enable "Sorting", "Paging" and "Filtering".
You can enable and disable features using the arrow keys and the Space key to toggle the selection.


After adding a control to your application, you will be asked weather you want to complete the process or to proceed with adding more controls.


In case you select to complete the process, the `build` command will be executed automatically, the required packages will be installed and finally - the application will be served and opened in your default browser.
You can always add Ignite UI controls to your application at latter moment.