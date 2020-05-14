---
title: Manage Angular Page Layout | Dock Manager | Ignite UI | Infragistics
_description: Learn how our Dock Manager can help you in customizing the page layout of your Angular application by using unpinning, resizing, moving and hiding panes.
_keywords: manage angular page layout, Ignite UI for Angular, Infragistics
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


### Usage
The Dock Manager is a standard [web component](https://developer.mozilla.org/en-US/docs/Web/Web_Components) and as such can be used in an Angular application.

Follow the steps below to add the Dock Manager package to an Angular project and set up the project in order to use the Dock Manager inside the Angular components.

Install the `igniteui-dockmanager` package

```cmd
npm install igniteui-dockmanager
```

Include the `CUSTOM_ELEMENTS_SCHEMA` schema in the `AppModule`:

```typescript
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

@NgModule({
    ...
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
```
Call the `defineCustomElements()` function in the `main.ts` file:

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

defineCustomElements();
```

You are now ready to use the Dock Manager component in an Angular component template. To do this, simply use it by it's tag name:

```html
<igc-dockmanager>
</igc-dockmanager>
```
