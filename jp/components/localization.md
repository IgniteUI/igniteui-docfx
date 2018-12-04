---
title: Localization - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Localization mechanism provides the ability to change/localize strings in the components.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components
---

## Localization

With only a few lines of code, users can easily localize the strings in Ignite UI for Angular components.

<div class="sample-container loading" style="height:550px">
    <iframe id="localization-sample-1-iframe" src='{environment:demosBaseUrl}/localization-sample-1' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="localization-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Usage

#### Localize entire application
There is a new global function added `changei18n`, which takes an `IResourceStrings` obeject as a parameter and change the global i18n for the igniteui-angular components on an app.module level. To get all available reosource strings there is another global function `getCurrentResourceStrings` which returns an `IResourceStrings` object.

```typescript
    const currentRS = getCurrentResourceStrings();

    for (const key of Object.keys(currentRS)) {
        currentRS[key] = '[Localizable]'+ currentRS[key];
    }

    changei18n(currentRS);
```
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-src="{environment:demosBaseUrl}/localization-sample-2"
    data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz
</button>
</div>

#### Localize particular strings for all components
Another approach is to localize/change only particular strings for all `igx-grid` components. There is a new property added - `resourceStrings`, which is of `IGridResourceStrings` type.

```typescript
    const currentRS = this.grid.resourceStrings;
    currentRS.igx_grid_filter = '[Localizable]Filter';
    currentRS.igx_grid_filter_row_close = '[Localizable]Close';
```

<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-src="{environment:demosBaseUrl}/localization-sample-3" 
        data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz
    </button>
</div>

#### Localize all strings for particular component
If only a particular `igx-grid` instance should be localized, there is way. The `resourceStrings` proeprty should be used and it should be set to a new instance of `IGridResourceStrings` type.

```typescript
    const currentRS = getCurrentResourceStrings();

    for (const key of Object.keys(currentRS)) {
        currentRS[key] = '[Localizable]'+ currentRS[key];
    }

    this.grid.resourceStrings = currentRS;
```

<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="localization-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Get resource strings

In order to import resource strings for Japanese or Korean you should add the following import to your application:

```typescript

import { IgxResouceStringsJA } from 'igniteui-angular-i18n';
import { IgxResouceStringsKR } from 'igniteui-angular-i18n';

```

### Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
* [Ignite UI for Angular **ResourceStrings**](https://github.com/IgniteUI/igniteui-angular-i18n)
