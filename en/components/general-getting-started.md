---
title: Getting Started | Ignite UI for Angular | Infragistics
_description: Use Infragistics' Angular components to create apps and improve data visualization with the world’s fastest, virtualized, real-time Angular data grid and streaming financial and business and financial charts.
_keywords: Ignite UI for Angular, Infragistics, Getting Started
mentionedTypes: ['XamBulletGraph']
---

<!-- Angular, React -->

## Updating Existing App

If you want to use Ignite UI for Angular in an existing Angular CLI project (one that you have from before). We have you covered! All you have to do is execute these commands:

```cmd
npm install --save igniteui-angular
npm install --save igniteui-angular-charts igniteui-angular-core
npm install --save igniteui-angular-excel igniteui-angular-core
npm install --save igniteui-angular-gauges igniteui-angular-core
npm install --save igniteui-angular-grids igniteui-angular-core
npm install --save igniteui-angular-maps igniteui-angular-core
npm install --save igniteui-angular-spreadsheet igniteui-angular-core
```

Or

```cmd
yarn add igniteui-angular-charts igniteui-angular-core
yarn add igniteui-angular-excel igniteui-angular-core
yarn add igniteui-angular-gauges igniteui-angular-core
yarn add igniteui-angular-grids igniteui-angular-core
yarn add igniteui-angular-maps igniteui-angular-core
yarn add igniteui-angular-spreadsheet igniteui-angular-core
```

This will automatically install packages for Ignite UI for Angular, along with all of their dependencies, font imports and styles references to the existing project.

## Importing Component Modules

First we have to import the required modules of the components we want to use. We will go ahead and do this for the [**GeographicMap**](geo-map.md) component.

## Using Components

We are now ready to use the Ignite UI for Angular map component in our markup! Let's go ahead and define it:

## Running Application

Finally, we can run our new application by using one of the following commands:

```cmd
npm run-script start
```

After executing this command, your project will be built and served locally on your computer. It will automatically open in your default browser and you will be able to use Ignite UI for Angular components in your project. The final result should show interactive map of the world:

<!-- <img src="../images/general/geo-map.png" /> -->

<code-view style="height: 750px" alt="Angular Overview Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/maps/geo-map/display-osm-imagery"
                                                 github-src="maps/geo-map/display-osm-imagery">
</code-view>


<!-- end: Angular, React -->
