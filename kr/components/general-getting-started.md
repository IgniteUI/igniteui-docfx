---
title: Data Visualization Tools | Ignite UI for Angular | Infragistics
_description: The Ignite UI for Angular is a complete set of Angular components designed to enable developers to build the most modern, high-performance HTML5 & TypeScript apps for modern desktop browsers.
_keywords: Ignite UI for Angular, Infragistics, Getting started, IG, Install Angular
---

## Getting Started With Ignite UI for Angular

The Ignite UI for Angular is a complete set of Angular components designed to enable developers to build the most modern, high-performance HTML5 & TypeScript apps for modern desktop browsers.

### Setting Up Computer

Before you can run Ignite UI for Angular, there are 2 steps to get everything on your machine set up to run any Angular app, including Ignite UI for Angular, and to build Angular apps. To get started, you must install both NodeJS and Visual Studio Code on your machine. Modern web development with Angular requires NodeJS, it’s sort of like an ASP.NET app running in the browser and requires ASP.NET runtime deployed on the server. For development, there is nothing better than Visual Studio Code to build Angular apps. Getting started is easy, just download and install both Node.js and Visual Studio Code.

<div style="display:block;width:100%;margin:50px;">
    <div style="display:inline-block;width:45%;text-align:center;">
      <img src="../images/general/nodejs.svg"
           style="display:flex;max-height:100px;margin:auto auto 20px auto;" />
      <a target="_blank" href="https://nodejs.org/en/download/"
         style="color:white;background-color:#09f;text-decoration:none;font-weight:700;font-size:16px;padding: 5px 15px 5px 15px;">
        DOWNLOAD NODE JS
      </a>
    </div>
    <div style="display:inline-block;width:45%;text-align:center;">
      <img src="../images/general/vs-code.svg"
           style="display:flex;max-height:100px;margin:auto auto 20px auto;" />
      <a target="_blank" href="https://code.visualstudio.com/download"
         style="color:white;background-color:#09f;text-decoration:none;font-weight:700;font-size:16px;padding: 5px 15px 5px 15px;">
        DOWNLOAD VS CODE
      </a>
    </div>
</div>

### Creating New App

Now that we have everything we need, we can start creating/updating our application!

In **VS Code**, select **Terminal** menu, **New Terminal** option, and type this command in terminal window:

-   **npx create-react-app my-app-name --typescript**

Or

-   **yarn create react-app my-app-name --typescript**

Refer to this <a href="https://facebook.github.io/create-react-app/docs/adding-typescript" target="_blank">website</a> for more information on above commands.

Next, you need to open the **my-app-name** folder in **VS Code** app and install the following packages for Ignite UI for Angular using these commands:

-   **npm install --save igniteui-angular-charts igniteui-angular-core**
-   **npm install --save igniteui-angular-excel igniteui-angular-core**
-   **npm install --save igniteui-angular-gauges igniteui-angular-core**
-   **npm install --save igniteui-angular-grids igniteui-angular-core**
-   **npm install --save igniteui-angular-maps igniteui-angular-core**
-   **npm install --save igniteui-angular-spreadsheet igniteui-angular-core**

Or

-   **yarn add igniteui-angular-charts igniteui-angular-core**
-   **yarn add igniteui-angular-excel igniteui-angular-core**
-   **yarn add igniteui-angular-gauges igniteui-angular-core**
-   **yarn add igniteui-angular-grids igniteui-angular-core**
-   **yarn add igniteui-angular-maps igniteui-angular-core**
-   **yarn add igniteui-angular-spreadsheet igniteui-angular-core**

Lastly, you can build for production or start your application with these commands:

-   **npm run-script build**
-   **npm run-script start**

After executing those simple commands, your new project will be built and served. It will automatically open in your default browser and you will be able to use Ignite UI for Angular components in your project.

### Updating Existing App

What if you want to use Ignite UI for Angular in an existing Angular CLI project (one that you have from before)? We have you covered! All you have to do is execute these commands:

-   **npm install --save igniteui-angular-charts igniteui-angular-core**
-   **npm install --save igniteui-angular-excel igniteui-angular-core**
-   **npm install --save igniteui-angular-gauges igniteui-angular-core**
-   **npm install --save igniteui-angular-grids igniteui-angular-core**
-   **npm install --save igniteui-angular-maps igniteui-angular-core**
-   **npm install --save igniteui-angular-spreadsheet igniteui-angular-core**

Or

-   **yarn add igniteui-angular-charts igniteui-angular-core**
-   **yarn add igniteui-angular-excel igniteui-angular-core**
-   **yarn add igniteui-angular-gauges igniteui-angular-core**
-   **yarn add igniteui-angular-grids igniteui-angular-core**
-   **yarn add igniteui-angular-maps igniteui-angular-core**
-   **yarn add igniteui-angular-spreadsheet igniteui-angular-core**

This will automatically install packages for Ignite UI for Angular, along with all of their dependencies, font imports and styles references to the existing project.

### Importing Modules

First we have to import the required modules of the components we want to use. We will go ahead and do this for the [**GeographicMap**](map_overview.md) component.

### Using Components

We are now ready to use the Ignite UI for Angular map component in our markup! Let's go ahead and define it:

### Running Application

Finally, we can run our new application by using one of the following commands:

-   **npm run-script start**

The final result should look something like this screenshot:

<img src="../images/general/geo-map.png" />
