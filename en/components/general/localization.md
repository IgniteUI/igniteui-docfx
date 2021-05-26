---
title: Localization (i18n) - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Localization mechanism provides the ability to change/localize strings in the components.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components
---

# Localization (i18n)

Currently, Ignite UI for Angular ships with resource strings for the following languages and scripts: German, French, Italian, Spanish, Bulgarian, Japanese, Korean, Traditional Chinese (zh-Hant) and Simplified Chinese (zh-Hans). These are available via the `igniteui-angular-i18n` package.

With only a few lines of code, users can easily localize the strings in Ignite UI for Angular components.

## Angular Localization Example

<code-view style="height:800px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/services/localization-all-resources" 
           alt="Angular Localization Example">
</code-view>

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

public partialCustomHindi: IResourceStrings;
public ngOnInit(): void {
    ...
    this.partialCustomHindi = {
        ...
        igx_grid_summary_count: 'गणना',
        igx_grid_summary_min: 'न्यून',
        igx_grid_summary_max: 'अधिक',
        igx_grid_summary_sum: 'योग',
        igx_grid_summary_average: 'औसत'
        ...
    };
    changei18n(this.partialCustomHindi);
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

### Localize specific strings for all components

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

### Localize specific strings for a specific instance of a component

If only a single `igx-grid` instance should be localized, there is a way. The `resourceStrings` property should be used and it should be set to a new instance of `IGridResourceStrings` type.

```typescript
const newGridRes: IGridResourceStrings = {
    igx_grid_filter: '[Localized]Filter',
    igx_grid_filter_row_close: '[Localized]Close'
}

this.grid.resourceStrings = newGridRes;
```

### Available resource strings

* [IgxResourceStringsBG](https://github.com/IgniteUI/igniteui-angular-i18n/blob/master/src/i18n/BG/resources.ts) 
* [IgxResourceStringsDE](https://github.com/IgniteUI/igniteui-angular-i18n/blob/master/src/i18n/DE/resources.ts) 
* [IgxResourceStringsES](https://github.com/IgniteUI/igniteui-angular-i18n/blob/master/src/i18n/ES/resources.ts) 
* [IgxResourceStringsFR](https://github.com/IgniteUI/igniteui-angular-i18n/blob/master/src/i18n/FR/resources.ts) 
* [IgxResourceStringsIT](https://github.com/IgniteUI/igniteui-angular-i18n/blob/master/src/i18n/IT/resources.ts) 
* [IgxResourceStringsJA](https://github.com/IgniteUI/igniteui-angular-i18n/blob/master/src/i18n/JA/resources.ts) 
* [IgxResourceStringsKO](https://github.com/IgniteUI/igniteui-angular-i18n/blob/master/src/i18n/KO/resources.ts) 
* [IgxResourceStringsZHHANS](https://github.com/IgniteUI/igniteui-angular-i18n/blob/master/src/i18n/ZH-HANS/resources.ts) 
* [IgxResourceStringsZHHANT](https://github.com/IgniteUI/igniteui-angular-i18n/blob/master/src/i18n/ZH-HANT/resources.ts) 

## Additional Resources

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
* [Ignite UI for Angular **ResourceStrings**](https://github.com/IgniteUI/igniteui-angular-i18n)
