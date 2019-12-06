[![Build Status](https://travis-ci.org/IgniteUI/igniteui-docfx.svg?branch=master)](https://travis-ci.org/IgniteUI/igniteui-docfx)

# Ignite UI DocFX Site Builder

This project uses Node.js and Gulp as a build tool to accelerate the development of the Ignite UI DocFX samples site for Ignite UI for Angular.

## Prerequisites

1. [DocFX](https://dotnet.github.io/docfx)
2. [Node.js](https://nodejs.org)

## Getting Started

### Installing DocFX

In macOS You can use _brew_ to install the latest version of DocFX:

```
brew install docfx
```

For Windows based platforms use [_chocolatey_](https://chocolatey.org/):

```
choco install docfx
```

### Installing the Node.js dependencies:

If you are using npm, run:

```
npm install
```

If you are using yarn, run:

```
yarn install
```

## Command-Line Shell Permissions

Start your command-line shell (CMD, PowerShell, Bash, etc.) with elevated permissions ("Run As Administrator" in Windows). This is required by Chocolatey, for further information read point 1 from [here](https://chocolatey.org/security#overall).

## Starting the Development Server

The build process depends on the environment variable `NODE_ENV` to be able to set the correct URL for the Angular Samples. Assign either `development`, `staging`, or `production` to `NODE_ENV`.

You can create a `.env` file under the root of the project and set `NODE_ENV`, for instance, by assigning environment.

```
NODE_ENV=development
```

Additionally, you can configure the URLs for all three environments `development`, `staging`, and `production` by editing the 'post_processors/PostProcessors/EnvironmentVariables/preconfig.json' file and setting the respective URLs in the variables object.

To start the server, run:

for English:

```
npm start -- --lang en
```

for Japansese:

```
npm start -- --lang jp
```

for Korean:

```
npm start -- --lang kr
```

The command takes an adittional argument --lang [ en | jp | kr ] to serve English, Japanese or Korean version.

## Building the Static Site

For English:

```
npm run build -- --lang en
```

For Japanese:

```
npm run build -- --lang jp
```

For Korean:

```
npm run build -- --lang kr
```

The build script produces a folder called \_site at the root of the respective project.
For instance, for English, the static site lives under `en/_site`;

## Building for Staging and Production

The build command is very similar to the aforementioned step. To build the site for staging, run:

```
npm run build-staging --lang en
```

The build command for staging is:

```
npm run build-production --lang jp
```
