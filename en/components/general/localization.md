---
title: Localization (i18n) - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Localization mechanism provides the ability to change/localize strings in the components.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components
---

# Localization (i18n)

## Localization (i18n)

Currently, Ignite UI for Angular ships with resource strings for the following languages: `Bulgarian`, `Czech`, `Danish`, `Dutch`, `English`, `French`, `German`, `Hungarian`, `Italian`, `Japanese`, `Korean`, `Norwegian`, `Polish`, `Portuguese`, `Romanian`, `Spanish`, `Swedish`, `Turkish`, `Traditional Chinese (zh-Hant)` and `Simplified Chinese (zh-Hans)`. These are available via the `igniteui-i18n-resources` package, except for English which comes as a default localization in `igniteui-angular`.

With this new localization even less requirements are need to change the localization strings and locale for the Ignite UI Angular components.

### Angular Localization Example

<code-view style="height:550px" 
           explicit-editor="csb"
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/services/localization-all-resources/" 
           alt="Angular Localization Example">
</code-view>

>Note: Hindi (HI) included in the sample is only for illustrational purposes and to emphasize on the possibility to pass a custom localization object. In this sample, it contains only several localized strings for the summary. More details at [Utilize own localized resources](#utilize-own-localized-resources) section below.

### Locale

By locale we refer to the regional formatting for dates, numbers and some strings related to them. Previously you had to import [Angular's global variants ](https://angular.dev/guide/i18n/import-global-variants) of the locale data they provide in order to be able to use it in your app. This is no longer the case and this comes built in our localization by default and you won't need to import and register anything for it to work. 

Since we are just introducing this feature, the Angular's way is still available and very much working as before and is still the default way, if you are already using it. 

If you are just starting though, only the default `en-US` locale will use the Angular's formatting. Any other locale you use will default to the new way, because you will probably missing the Angular's locale data anyway. That's why we have the `toggleIgxAngularLocalization` method, which will make sure that even for `en-US` you use the new localization, even you have the Angular's locale data imported:

```ts
toggleIgxAngularLocalization(false);
```

This will make sure later on, when use set the current locale that all Ignite UI for Angular components use the new implementation:

```ts
setCurrentI18n('ja');
```

If you would like to check what the current locale is, you can use:

```ts
getCurrentI18n();
```

### Localized resource strings

All components in Ignite UI for Angular render in English by default and they can render most of the general strings used in one of the listed available languages. There are three ways you can achieve that globally or per component as well. For any language that is not currently available, custom translation can be provided for each resource string that is available through our API.

The translations for the component strings are stored in resource strings and they will need to registered in our localization system so that the component can use them.

First to achieve that it is needed to install the `igniteui-i18n-resources` package, which contains the localized resource strings for all languages:

```
npm install igniteui-i18n-resources --save-dev
```

>Note: Currently the names for the new resource string from the `igniteui-i18n-resources` and old `gniteui-angular-i18n` package are the same. So make sure to check which ones are you using, because the old ones are not compatible with the new ones.

After that you will need to register each language you would like to have applied to them. Lets say German and Japanese:

```ts
import { ResourceStringsDE, ResourceStringsJA } from 'igniteui-i18n-resources';

registerI18n(ResourceStringsDE, 'de');
registerI18n(ResourceStringsJA, 'ja');
```

You will also need to provide to which language tag they will apply to. If no tag is provided, it will set the resources for the currently selected language and region.

It is important to note, that the tag provided need to be valid and adhere to the [BCP 47](https://developer.mozilla.org/en-US/docs/Glossary/BCP_47_language_tag) tag definition and most of the basic ones are described in the [IANA Language Subtag Registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) and for a list of languages you can refer to [ISO 639 language standard](https://www.loc.gov/standards/iso639-2/).

Only the language and the region provided are taken into account from the tag, since these are the most commonly used. The region is separated by `-` but is usually on second or third position. For example, `en-US` and `en-GB` or `en-Latn-US`.

#### Global localization using Ignite UI API

With this approach, you can change localization for all Ignite UI for Angular components used in your application. Since you should already have the desired languages your app will use register as per described at the top of this section, the only thing left is to set the current language. Be default it is `en-US`:

```ts
setCurrentI18n('de');
```

The tag you use should be a valid tag and match the language and region for the tag your used to register the resources. Like described earlier, it doesn't need to be the exact same string which means if you registered for `de` tag, the following options would also return the resources assigned to it:

```ts
setCurrentI18n('DE');
setCurrentI18n('de-DE');
setCurrentI18n('ger');
```

Or for example is users request different region, but you have one translation for all regions, it will still return the available language, despite the region. If you've registered Spanish as `es`, it will apply for all regions and return the same results:

```ts
setCurrentI18n('es');
setCurrentI18n('es-ES');
setCurrentI18n('es-MX');
setCurrentI18n('es-AR');
```


#### `lang` attribute

With this approach we have the ability to set localization through the `lang` global attribute of the `HTML` tag. If is being watched and if it is changed all rendered components will update their resource strings to the currently set language. All rules regarding the tag used applied as described above.

> Note: This works only on root level and will not work for inner elements on the page.

```html
<html lang="ja">
    <head>
        <title>My app</title>
    </head>
    <body></body>
</html>
```

#### Angular API

You can use also Angular's built in [LOCALE_ID](https://angular.dev/api/core/LOCALE_ID) token the set the locale for the whole application. The tag provided will work the same way for our components compared to how our API handles.

### Customize a component

If you would like to have specific component in your app use either the already registered resources globally but with different localization or completely replace the resource strings for it, you can do that the following way.

#### Set component localization

If you would like to set different from the global localization for a component, you can do that be setting the `locale` property. The will affect the language of the resource strings used as well, since they are tied together.

With this approach you should already have the available resource strings globally registered:

```ts
import { ResourceStringsJA } from 'igniteui-i18n-resources';

registerI18n(ResourceStringsJA, 'ja');
```

By setting the `locale` property of the component, this will override the global locale and language currently in use:

```html
<igx-grid [data]="data" locale="ja">
    <igx-column field="ProductName" header="Product Name" [groupable]="true"></igx-column>
    <igx-column field="QuantityPerUnit" header="Quantity Per Unit" [groupable]="true"></igx-column>
</igx-grid>
```

##### Replace resource strings only

If you would like to change only the language, without changing the locale, you can even set the resource strings of each component using the `resourceStrings` property, which will override the globally used ones:

```html
<igx-grid [data]="data" [resourceStrings]="resourcesDE">
    <igx-column field="ProductName" header="Product Name" [groupable]="true"></igx-column>
    <igx-column field="QuantityPerUnit" header="Quantity Per Unit" [groupable]="true"></igx-column>
</igx-grid>
```

You will need to make sure you use the correct resource string type for the component you would like to override it for. Each component has its own set of resource strings. In this case for the grid and German:

```ts
import { GridResourceStringsDE } from 'igniteui-i18n-resources';

// Inside App Component:
public resourcesDE = GridResourceStringsDE;
```

#### Custom localized resource strings

If you would like to localize your app and we do not provide resource strings for the language you use and would like to provide your own translation, you can always use custom resource string. You can do that globally or per component(using `resourceStrings` property).

>Note: Feel free to contribute to the [`igniteui-i18n-resources`](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources) package with more languages!

If you would like to check the current resource strings used for all components combined, you can use the `getCurrentResourceStrings` method:

```ts
const resources = getCurrentResourceStrings();
```

You can use the provided `IResourceStrings` type for all components to get typings for the resource stings used:

```ts
import { IResourceStrings } from 'igniteui-i18n-resources';

export const customResourcesForAll: IResourceStrings = {
    //...
}; 
registerI18n(customResourcesForAll, 'custom');
```

Or for a specific component separately:

```ts
import { IGridResourceStrings } from 'igniteui-i18n-resources';

export const customGridResources: IGridResourceStrings = {
    grid_summary_count: 'गणना',
    grid_summary_min: 'न्यून',
    grid_summary_max: 'अधिक',
    grid_summary_sum: 'योग',
    grid_summary_average: 'औसत'
};

```

You can even mix however you want the already existing resource strings with the ones you want to customize, even for the default English language:

```ts
import { IResourceStrings, CalendarResourceStringsEN, DatePickerResourceStringsEN } from 'igniteui-i18n-resources';

export const customResources: IResourceStrings = Object.assign(
    {},
    CalendarResourceStringsEN,
    DatePickerResourceStringsEN,
    {
        grid_summary_count: 'Custom count',
        grid_summary_min: 'Minium',
        grid_summary_max: 'Maximum',
        grid_summary_sum: 'Custom summery'
    }
); 
registerI18n(customResources, 'en');

```

>Note: The last examples set only specific resource strings. This means that the rest will default to English, if they are not available for the components in use to get.

### Available resource strings

* [ResourceStringsBG](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/BG/resources.ts)
* [ResourceStringsCS](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/CS/resources.ts)
* [ResourceStringsDA](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/DA/resources.ts)
* [ResourceStringsDE](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/DE/resources.ts)
* [ResourceStringsES](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/ES/resources.ts) 
* [ResourceStringsFR](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/FR/resources.ts) 
* [ResourceStringsHU](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/HU/resources.ts)
* [ResourceStringsIT](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/IT/resources.ts) 
* [ResourceStringsJA](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/JA/resources.ts) 
* [ResourceStringsKO](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/KO/resources.ts)
* [ResourceStringsNB](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/NB/resources.ts)
* [ResourceStringsNL](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/NL/resources.ts)
* [ResourceStringsPL](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/PL/resources.ts)
* [ResourceStringsPT](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/PT/resources.ts)
* [ResourceStringsRO](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/RO/resources.ts)
* [ResourceStringsSV](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/SV/resources.ts)
* [ResourceStringsTR](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/TR/resources.ts)
* [ResourceStringsZHHANS](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/ZH-HANS/resources.ts) 
* [ResourceStringsZHHANT](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/ZH-HANT/resources.ts) 


## Legacy Localization (i18n)

>Note: This is an old way of handling localization as of 20.2.0. We recommend using the new way above. This will still work until further notice.

Currently, Ignite UI for Angular ships with resource strings for the following languages and scripts: Bulgarian, Czech, Danish, Dutch, English, French, German, Hungarian, Italian, Japanese, Korean, Norwegian, Polish, Portuguese, Romanian, Spanish, Swedish, Turkish, Traditional Chinese (zh-Hant) and Simplified Chinese (zh-Hans). These are available via the `igniteui-angular-i18n` package, except for English which comes as a default localization in `igniteui-angular`.

With only a few lines of code, users can easily change the localization strings in Ignite UI for Angular components.

### Angular Localization Example

<code-view style="height:550px" 
           explicit-editor="csb"
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/services/localization-all-resources-old/" 
           alt="Angular Localization Example">
</code-view>

>Note: Hindi (HI) included in the sample is only for illustrational purposes and to emphasize on the possibility to pass a custom localization object. In this sample, it contains only several localized strings for the summary. More details at [Utilize own localized resources](#utilize-own-localized-resources) section below.

### Usage

### Load localized resources from npm package

You can localize an application in one of the languages available in the `igniteui-angular-i18n` package like this:

Install the package by executing `npm install igniteui-angular-i18n --save-dev`

Import the resource strings for the desired language and either change the strings for a component instance, using the component's `resourceStrings` input.

```html
<igx-grid [data]="data" [resourceStrings]="resourcesDE" [locale]="locale">
    <igx-grid-toolbar>
        <igx-grid-toolbar-title>German Locale</igx-grid-toolbar-title>
    </igx-grid-toolbar>
    <igx-column field="ProductName" header="Product Name" [groupable]="true">
    </igx-column>
    <igx-column field="QuantityPerUnit" header="Quantity Per Unit" [groupable]="true">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" [sortable]="true" [hasSummary]="true"
        [dataType]="'currency'" [groupable]="true">
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" [dataType]="'date'" [groupable]="true">
    </igx-column>
    <igx-column field="Discontinued" header="Discontinued" [dataType]="'boolean'" [groupable]="true">
    </igx-column>
</igx-grid>
```

```typescript
import { Component } from '@angular/core';
import { registerLocaleData } from '@angular/common';

import localeDE from '@angular/common/locales/de';
import { GridResourceStringsDE } from 'igniteui-angular-i18n';

@Component({
    selector: 'app-locale',
    styleUrls: ['./locale.component.scss'],
    templateUrl: 'locale.component.html'
})
export class LocaleComponent implements OnInit {
    public resourcesDE = GridResourceStringsDE;
    public locale = 'DE';
    public data: any[];

    constructor() {
        registerLocaleData(localeDE);
    }
}
```

Alternatively, you can call the `changei18n()` function passing the corresponding resource object to change the localization for all components.

```typescript
// app.component.ts
import { Component, OnInit } from '@angular/core';
import { changei18n } from "igniteui-angular";
import { IgxResourceStringsJA } from 'igniteui-angular-i18n';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public ngOnInit(): void {
        changei18n(IgxResourceStringsJA);
    }
}
```

>Note: Feel free to contribute to the [`igniteui-angular-i18n`](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n) package with more languages!

#### Utilize own localized resources
`changei18n` function expects an `IResourceStrings` object. If the language you want to use is not available in the `igniteui-angular-i18n` package, or simply want to change a particular string, you can pass a custom object containing your string resources for the language and components you need. This will change the global i18n for the igniteui-angular components.

```typescript
// app.component.ts
import { Component, OnInit } from '@angular/core';
import { changei18n, IGridResourceStrings } from "igniteui-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public partialCustomHindi: IGridResourceStrings;

    public ngOnInit(): void {
        this.partialCustomHindi = {
            igx_grid_summary_count: 'गणना',
            igx_grid_summary_min: 'न्यून',
            igx_grid_summary_max: 'अधिक',
            igx_grid_summary_sum: 'योग',
            igx_grid_summary_average: 'औसत'
        };
        // This will change all grid application instances' strings to the newly provided ones
        changei18n(this.partialCustomHindi);
    }
}
```

Alternatively, you may get all currently available component resource strings. There is objects for each component containing localizable strings. The values could be replaced in order to be localized and then the object can be passed to the `changei18n` function, as a parameter.

```typescript
// app.component.ts
import { Component, OnInit } from '@angular/core';
import { changei18n, GridResourceStringsEN, TimePickerResourceStringsEN } from "igniteui-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public ngOnInit(): void {
        const currentRS = {
            ...GridResourceStringsEN,
            ...TimePickerResourceStringsEN
        };

        for (const key of Object.keys(currentRS)) {
            currentRS[key] = '[Localized] '+ currentRS[key];
        }

        changei18n(currentRS);
    }
}
```

#### Localize specific strings for a specific instance of a component

If only a single `igx-grid` instance should be localized, there is a way. The `resourceStrings` property should be used and it should be set to a new instance of `IGridResourceStrings` type.

```typescript
const newGridRes: IGridResourceStrings = {
    igx_grid_filter: '[Localized]Filter',
    igx_grid_filter_row_close: '[Localized]Close'
}

this.grid.resourceStrings = newGridRes;
```

### Available resource strings

* [IgxResourceStringsBG](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/BG/resources.ts)
* [IgxResourceStringsCS](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/CS/resources.ts)
* [IgxResourceStringsDA](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/DA/resources.ts)
* [IgxResourceStringsDE](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/DE/resources.ts)
* [IgxResourceStringsES](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/ES/resources.ts) 
* [IgxResourceStringsFR](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/FR/resources.ts) 
* [IgxResourceStringsHU](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/HU/resources.ts)
* [IgxResourceStringsIT](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/IT/resources.ts) 
* [IgxResourceStringsJA](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/JA/resources.ts) 
* [IgxResourceStringsKO](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/KO/resources.ts)
* [IgxResourceStringsNB](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/NB/resources.ts)
* [IgxResourceStringsNL](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/NL/resources.ts)
* [IgxResourceStringsPL](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/PL/resources.ts)
* [IgxResourceStringsPT](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/PT/resources.ts)
* [IgxResourceStringsRO](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/RO/resources.ts)
* [IgxResourceStringsSV](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/SV/resources.ts)
* [IgxResourceStringsTR](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/TR/resources.ts)
* [IgxResourceStringsZHHANS](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/ZH-HANS/resources.ts) 
* [IgxResourceStringsZHHANT](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/ZH-HANT/resources.ts) 

## Additional Resources

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
* [Ignite UI for Angular **ResourceStrings**](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n)
