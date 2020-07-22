---
title: Ignite UI CLI Overview | Data Visualization Tools | Ignite UI for Angular | Infragistics
_description: The Ignite UI for Angular toolset has a CLI to help you to create, build, and run your project. This topic teaches you how to use it.
_keywords: cli, Ignite UI for Angular, infragistics
---

## Ignite UI CLI Overview

Our CLI tools provide project templates pre-configured for the Ignite UI for Angular toolset that help you get your next application off the ground in record time. The <a href="https://github.com/IgniteUI/igniteui-cli/blob/master/README.md#generate-ignite-ui-for-react-project" target="_blank">Ignite UI CLI</a> is a stand-alone command-line tool for creating and scaffolding your applications for a variety of different frameworks and provides a substantial productivity boost for developers.

### Getting Started

To get started, install the CLI:

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install -g igniteui-cli
</pre>

The above install command will make the Ignite UI CLI available for creation, scaffolding, and running of your Ignite UI for Angular application.

### Create a New Project

To create an application that is configured to use the Ignite UI for Angular controls using the Ignite UI CLI, you can use the following template in your command line:

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
ig new "[name_of_project]" --framework=[target_framework] --type=[project_type]
</pre>

Using the above template, if you wanted to create a `React` application named "My Project" targeting ES6, you could write the following command:

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
ig new "My Project" --framework=react --type=igr-es6
</pre>

### Adding Components

Once you have created a project, you can then add additional component templates using `ig add` at any point. Running this command without any parameters will guide you through the available templates by using a keyboard navigation CLI to add the control of your choosing.

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
ig add
</pre>

Alternatively, you can simply run the `ig list` command to get a full list of supported templates in the current project you have created.

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
ig list
</pre>

After running `ig list` and you find the component template you would like to add, you can do so quickly by following this template in your command line:

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
ig add [component_template] [component_name]
</pre>

The "component\_template" above will generally match an Ignite UI for Angular component ("grid", "category-chart", "linear-gauge", etc.).

For example, if you wanted to add a data grid templated component named "MyGridComponent" to your application, you could run the following:

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
ig add grid MyGridComponent
</pre>

### Build and Run the Application

In order to build and run the Ignite UI for Angular application, you can call the `ig build` and `ig run` commands:

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
ig build
ig run
</pre>

### Ignite UI CLI Commands

A full list of the available Ignite UI CLI commands and their usage (like passing flags, etc.), can be found at the [Ignite UI CLI wiki pages](https://github.com/IgniteUI/igniteui-cli/wiki):

| Command                                                               | Alias | Description                                                                                                                                                                                                     |
| --------------------------------------------------------------------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [ig start](https://github.com/IgniteUI/igniteui-cli/wiki/start)       |       | Builds the application, starts a web server and opens the application in the default browser.                                                                                                                   |
| [ig build](https://github.com/IgniteUI/igniteui-cli/wiki/build)       |       | Builds the application into an output directory                                                                                                                                                                 |
| [ig generate](https://github.com/IgniteUI/igniteui-cli/wiki/generate) | g     | Generates a new custom template for supported frameworks and project types                                                                                                                                      |
| [ig help](https://github.com/IgniteUI/igniteui-cli/wiki/help)         | -h    | Lists the available commands and provides a brief description of what they do.                                                                                                                                  |
| [ig config](https://github.com/IgniteUI/igniteui-cli/wiki/config)     |       | Performs read and write operation on the Ignite UI CLI configuration settings.                                                                                                                                  |
| [ig doc](https://github.com/IgniteUI/igniteui-cli/wiki/doc)           |       | Searches the Infragistics knowledge base for information about a given search term                                                                                                                              |
| [ig list](https://github.com/IgniteUI/igniteui-cli/wiki/list)         | l     | Lists all templates for the specified framework and type. When you run the command within a project folder it will list all templates for the project's framework and type, even if you provide different ones. |
| [ig test](https://github.com/IgniteUI/igniteui-cli/wiki/test)         |       | Executes the tests for the current project.                                                                                                                                                                     |
| ig version                                                            | -v    | Shows Ignite UI CLI version installed locally, or globally if local is missing                                                                                                                                  |
