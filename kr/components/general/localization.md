---
title: Localization - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Localization mechanism provides the ability to change/localize strings in the components.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components
_language: kr
---

## Localization

With only a few lines of code, users can easily localize the strings in Ignite UI for Angular components.

<div class="sample-container loading" style="height:550px">
    <iframe id="localization-sample-1-iframe" src='{environment:demosBaseUrl}/services/localization-sample-1' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="localization-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Usage

#### Localize entire application

To get all available resource strings, there is a global function `getCurrentResourceStrings`, which returns an `IResourceStrings` object.
The values could be replaced in order to be localized and then the object can be passed to the `changei18n` function, as a parameter, which will change the global i18n for the igniteui-angular components on an app.module level. The localization can be done anywhere in the app, not only in the app.module.ts

```typescript
// app.component.ts

public ngOnInit(): void {
    ...
    const currentRS = getCurrentResourceStrings();

    for (const key of Object.keys(currentRS)) {
        currentRS[key] = '[Localized]'+ currentRS[key];
    }

    changei18n(currentRS);
    ...
}
```
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-sample-src="{environment:demosBaseUrl}/services/localization-sample-2"
    data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz
</button>
</div>

#### Localize specific strings for all components

Another approach is to localize/change only some of the strings for all components of given type. There is a `resourceStrings` property for the components that could be localized, which is of `IResourceStrings` type.

```typescript
const currentRS = this.grid.resourceStrings;
currentRS.igx_grid_filter = '[Localized]Filter';
currentRS.igx_grid_filter_row_close = '[Localized]Close';
```

<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-sample-src="{environment:demosBaseUrl}/services/localization-sample-3" 
        data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz
    </button>
</div>

#### Localize specific strings for a specific instance of a component

If only a single `igx-grid` instance should be localized, there is a way. The `resourceStrings` property should be used and it should be set to a new instance of `IGridResourceStrings` type.

```typescript
const newGridRes: IGridResourceStrings = {
    igx_grid_filter: '[Localized]Filter',
    igx_grid_filter_row_close: '[Localized]Close'
}

this.grid.resourceStrings = newGridRes;
```

<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="localization-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Load localized resources from npm package

Firstly the package that contains the resource strings should be installed:

`npm install igniteui-angular-i18n --save-dev`

Then in order to use Japanese, Korean and Spanish resource strings, the following imports should be added to the application and the `changei18n` functions should be called:

```typescript
// app.component.ts

import { IgxResourceStringsJA } from 'igniteui-angular-i18n';
import { IgxResourceStringsKO } from 'igniteui-angular-i18n';
import { IgxResourceStringsES } from 'igniteui-angular-i18n';
...

public ngOnInit(): void {
    ...
    changei18n(IgxResourceStringsKO);
    ...
}
```

### Additional Resources

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
* [Ignite UI for Angular **ResourceStrings**](https://github.com/IgniteUI/igniteui-angular-i18n)
