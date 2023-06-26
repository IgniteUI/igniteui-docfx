![Build Status](https://github.com/IgniteUI/igniteui-docfx/workflows/Node.js%20CI/badge.svg)

# Ignite UI DocFX Site Builder

This project uses Node.js and Gulp as a build tool to accelerate the development of the Ignite UI DocFX samples site for Ignite UI for Angular.

## Prerequisites

1. [DocFX](https://dotnet.github.io/docfx)
2. [Node.js](https://nodejs.org)
3. [NET SDK 6.0 or higher](https://dotnet.microsoft.com/en-us/download)

## Getting Started

### Installing DocFX

To install docfx, restore it as a dotnet tool - Installs the .NET local tools that are in scope for the current directory: 

```bash
dotnet tool restore
```

**NOTE**: Performing `npm install` also restores dotnet tool dependencies as a `postinstall` step.

### Installing the Node.js dependencies:

If you are using npm, run:

```bash
npm install
```

If you are using yarn, run:

```bash
yarn install
```
## Starting the Development Server

The build process depends on the environment variable `NODE_ENV` to be able to set the correct URL for the Angular Samples. Assign either `development`, `staging`, or `production` to `NODE_ENV`.

You can create a `.env` file under the root of the project and set `NODE_ENV`, for instance, by assigning environment.

```
NODE_ENV=development
```

To start the server, run:

for English:

```bash
npm start -- --lang en
```

for Japansese:

```bash
npm start -- --lang jp
```

for Korean:

```bash
npm start -- --lang kr
```

The command takes an adittional argument --lang [ en | jp | kr ] to serve English, Japanese or Korean version.

## Building the Static Site

For English:

```bash
npm run build -- --lang en
```

For Japanese:

```bash
npm run build -- --lang jp
```

For Korean:

```bash
npm run build -- --lang kr
```

The build script produces a folder called \_site at the root of the respective project.
For instance, for English, the static site lives under `en/_site`;

## Building for Staging and Production

The build command is very similar to the aforementioned step. To build the site for staging, run:

```bash
npm run build-staging --lang en
```

The build command for staging is:

```bash
npm run build-production --lang jp
```

## Using explicit editor for live-editing samples

The explicit-editor attribute for code-view elements is allowing to set explicitly live editor for specified sample and supports "csb" and "stackblitz" as values.


```html
<code-view explicit-editor="csb" ... ></code-view>
```

```html
<code-view explicit-editor="stackblitz" ... ></code-view>
```

## Include TOC topic labels

Open '[ en | jp | kr ]\components\toc.yml' file for the specific language version.
Each TOC topic includes parameters for name and href, along with an optional label parameter. Starting from version 3.5.1 of the igniteui-docfx-template, the supported labels include 'new,' 'updated,' 'preview,' and 'beta.' To add a desired label, simply specify its name and set its value to true.

Example:

```
- name: Update guide
  href: general/update-guide.md
  updated: true
```

## Collapsible code snippets

To generate and display collapsible code snippets on documentation websites, follow these steps:

1. Create a \<div> section with the class "fancy-details".

2. Add a \<summary> element to the created \<div> section.

3. Add the summary text representing the code snippet header to the \<summary> element.

4.  Add a \<code> element to the created \<div> section.

5. Add the code snippet to the \<code> element.

6. Example:
```
<div class="fancy-details">
    <summary>Example of a successful response body: </summary>
    <code>
        {
            "id": "{123456}_repo",
            "modified": "2023-02-03T14:07:34.0000000",
            "created": "2023-02-03T14:07:34.0000000",
            "name": "Marketing",
            "user": {
                "id": "{123456}_u ",
                "name": "Teddy Mitkova"
            },
            "dashboardSections": [
                {
                    "id": "{123456}_f",
                    "name": "May"
                }
            ]
        }
    </code>
</div>
```
