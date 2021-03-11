---
title: Localization (i18n) - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Localization mechanism provides the ability to change/localize strings in the components.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components
---

# Localization (i18n)

Currently, Ignite UI for Angular ships with resource strings for the following languages and scripts: German, French, Italian, Japanese, Korean, Spanish, Traditional Chinese (zh-Hant) and Simplified Chinese (zh-Hans). These are available via the `igniteui-angular-i18n` package.

With only a few lines of code, users can easily localize the strings in Ignite UI for Angular components.

## Angular Localization Example
<div class="sample-container loading" style="height:800px">
    <iframe id="localization-all-resources-iframe" src="{environment:demosBaseUrl}/services/localization-all-resources" width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);" alt="Angular Localize Application Example"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="localization-all-resources-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="localization-all-resources-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

## Usage

### Load localized resources from npm package

You can localize an application in one of the languages available in the `igniteui-angular-i18n` package like this:

Install the package by executing `npm install igniteui-angular-i18n --save-dev`

Import the resource strings for the desired language and call the `changei18n()` function passing the corresponding resource object:

```typescript
// app.component.ts
...
import { changei18n } from "igniteui-angular";
import { IgxResourceStringsJA } from 'igniteui-angular-i18n';
...
public ngOnInit(): void {
    ...
    changei18n(IgxResourceStringsJA);
    ...
}
```

>Note: Feel free to contribute to the `igniteui-angular-i18n` package.

### Utilize own localized resources
`changei18n` function expects an `IResourceStrings` object. If the language you want to use is not available in the `igniteui-angular-i18n` package, or simply want to change a particular string,
you can pass a custom object containing your string resources for the language and components you need. This will change the global i18n for the igniteui-angular components on an app.module level. The localization can be done anywhere in the app, not only in the app.module.ts

```typescript
// app.component.ts
...
import { changei18n } from "igniteui-angular";
...

public customBG: IResourceStrings;
public ngOnInit(): void {
    ...
    this.customBG = {
        ...
        igx_grid_summary_count: 'Общ брой',
        igx_grid_summary_min: 'Минимум',
        igx_grid_summary_max: 'Максимум',
        igx_grid_summary_sum: 'Сума',
        igx_grid_summary_average: 'Средна стойност'
        ...
    };
    changei18n(this.customBG);
    ...
}
```

Alternatively, you may get all currently available resource strings. There is a global function `getCurrentResourceStrings`, which returns an `IResourceStrings` object.
The values could be replaced in order to be localized and then the object can be passed to the `changei18n` function, as a parameter.

```typescript
// app.component.ts
...
import { changei18n } from "igniteui-angular";
...

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

### Localize particular strings for all components

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

### Localize particular strings for particular instance of a component

If only a single `igx-grid` instance should be localized, there is a way. The `resourceStrings` property should be used and it should be set to a new instance of `IGridResourceStrings` type.

```typescript
const newGridRes: IGridResourceStrings = {
    igx_grid_filter: '[Localized]Filter',
    igx_grid_filter_row_close: '[Localized]Close'
}

this.grid.resourceStrings = newGridRes;
```


## Additional Resources

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
* [Ignite UI for Angular **ResourceStrings**](https://github.com/IgniteUI/igniteui-angular-i18n)
