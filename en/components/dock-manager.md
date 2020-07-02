---
title: Manage Angular Page Layout | Dock Manager | Ignite UI | Infragistics
_description: Learn how the Dock Manager lets you customize the layout of your Angular application via panes that can be pinned, resized, moved, and hidden.
_keywords: manage angular page layout, Ignite UI for Angular, Infragistics
---
## Dock Manager

The Ignite UI Dock Manager component provides means to manage the layout of your application through panes, allowing your end-users to customize it further by pinning, resizing, moving and hiding panes.

### Demo

<div class="sample-container loading" style="height: 600px">
    <iframe id="dock-manager-overview-iframe" src='{environment:demosBaseUrl}/layouts/dock-manager-sample' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dock-manager-overview-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="dock-manager-overview-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on codesandbox
    </button>
</div>

<div class="divider--half"></div>


### Usage
The Dock Manager is a standard [web component](https://developer.mozilla.org/en-US/docs/Web/Web_Components) and as such can be used in an Angular application.

Follow the steps below to add the Dock Manager package to your Angular project and set it up in order to use the component.

First, install the `igniteui-dockmanager` package

```cmd
npm install igniteui-dockmanager
```

Then, include the `CUSTOM_ELEMENTS_SCHEMA` schema in the `AppModule`:

```typescript
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

@NgModule({
    ...
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
```
Next, one should call the `defineCustomElements()` function in the `main.ts` file:

```typescript
import { AppModule } from "./app/app.module";
import { defineCustomElements } from "igniteui-dockmanager/loader";
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

This is it, you are now ready to use the Dock Manager component in an Angular component template. To do so simply use its tag name:

```html
<igc-dockmanager>
</igc-dockmanager>
```

For further information on the usage of the Dock Manager component, you can check out [this topic]({environment:infragisticsBaseUrl}/products/ignite-ui-web-components/web-components/components/dock-manager.html).

For a more advanced example of the usage of the Dock Manager component with panes hosting various Ignite UI for Angular components, see this version of the [data analysis sample](./general/framework-and-features/data-analysis.md#data-analysis-with-dockmanager).
