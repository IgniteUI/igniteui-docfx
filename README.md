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

## Starting the Development Server
```
npm start
```

## Building the Static Site

```
npm run build
```

The build script produces a folder called _site at the root of the project.