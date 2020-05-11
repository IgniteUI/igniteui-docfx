---
title: Dock Manager | Layout Controls | Ignite UI for Angular | Infragistics
_description: 
_keywords: dock manager, layout, igniteui for angular, infragistics
---
## Dock Manager

The Web Components Dock Manager is a component that uses panes to manage the application’s layout and allows the end user to customize the UI by unpinning, resizing, moving and hiding panes.

### Demo

<div class="sample-container loading" style="height: 600px">
    <iframe id="dock-manager-overview-iframe" src='{environment:dvDemosBaseUrl}/layouts/dock-manager-sample' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dock-manager-overview-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>


### Setting Up
The DockManager is available for download as an npm package through ProGet feed.

Follow the steps below to add the DockManager package to an Angular project and set up the project in order to use the DockManager inside the Angular components.

Install the @infragistics/igniteui-dockmanager package

```cmd
npm install @infragistics/igniteui-dockmanager
```

Include the CUSTOM_ELEMENTS_SCHEMA schema in the AppModule:

```typescript
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

@NgModule({
    ...
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
```
Call the defineCustomElements() function in the main.ts file:

```typescript
import { AppModule } from "./app/app.module";
import { defineCustomElements } from "@infragistics/igniteui-dockmanager/loader";
import { enableProdMode } from '@angular/core';
import { environment } from ".environments/environment";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.log(err));

defineCustomElements(window);
```
For more information about DockManager's usage, check out this page