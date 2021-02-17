@@if(igxName === 'IgxGrid') {
---
title: Angular Grid Paging | Angular Pagination Table | Infragistics
_description: Configure Angular pagination and create custom pages in the Angular Material table by Ignite UI, get data for the requested pages with variety of angular events.
_keywords: angular pagination, igniteui for angular, infragistics
---
}
@@if(igxName !== 'IgxGrid') {
---
title: Angular Grid Paging | Angular Pagination Table | Infragistics
_description: Configure Angular pagination and create custom pages in the Angular Material table by Ignite UI, get data for the requested pages with variety of angular events.
_keywords: angular pagination, igniteui for angular, infragistics
_canonicalLink: grid/paging
---
}

# Angular @@igComponent Pagination
Pagination is used to split a large set of data into a sequence of pages. Angular table pagination improves user experience and data interaction. Grid pagination is enabled via the [`paging`]({environment:angularApiUrl}/classes/igxgridcomponent.html#paging) input. Should any further paging customization is needed, the grid supports custom pagination template through the [`paginationTemplate`](environment:angularApiUrl}/classes/igxgridcomponent.html#paginationTemplate) input.

## Angular Pagination Example

The following example represents the Grid pagination. Setting the `paging` input to true enables the feature and brings the corresponding UI rendered in the grid footer. The UI indicates the current and total number of pages, and provides buttons to quickly navigate to `next`, `previous`, `first` or `last` page. The `Items per page` select enables user to quickly change the number of records displayed per page.
@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="grid-paging-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-paging-sample' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);" alt="Angular Pagination Example"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="treegrid-paging-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-paging' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);" alt="Angular Pagination Example"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:580px">
    <iframe id="hierarchical-grid-paging-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-paging' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);" alt="Angular Pagination Example"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}

The [`paging`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#paging) input is a Boolean property that controls whether the feature is enabled, and the [`perPage`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#perpage) property controls the visible records per page. Let’s update our @@igComponent to enable paging:

```html
<@@igSelector #@@igObjectRef [data]="data" [paging]="true" height="500px" width="100%" displayDensity="cosy">
</@@igSelector>
```

## Angular Pagination Template
The paging area supports custom templates to be used via the [`paginationTemplate`](environment:angularApiUrl}/classes/igxgridcomponent.html#paginationTemplate) input. The example below is a template where the pagination is controlled through an input.

```html
<ng-template #myTemplate let-grid>
    Total records: {{ this.totalRecords }}
    Records per page: {{ this.perPage }}
    Current page: {{ this.page }}
    <input type="number" [(ngModel)]="this.page" (change)="valueChange(this.page)" />
    Total pages: {{ this.totalPages }}
</ng-template>

<@@igSelector [paging]="true" [paginationTemplate]="myTemplate">
    ...
</@@igSelector>
```

```typescript
public totalRecords = 0;
public totalPages = 0;
public page = 0;
public perPage = 10;

public ngOnInit() {
    this.totalRecords = allData.length;
    this.totalPages = Math.ceil(this.totalRecords / this.perPage);
    this.data = this.sliceData(this.page, this.perPage);
}

public valueChange(newPage: number) {
    this.data = this.sliceData(newPage, this.perPage);
}

public sliceData(page, perPage) {
    const start = page * perPage;
    const end = (page + 1) * perPage;
    const result = localData.slice(start, end);
    return result;
}
```

or pipe the `data` input value through a custom Angular pipe - this way a developer need not worry about change detection in certain scenarios, Angular will handle it internally:

```html
<@@igSelector [paging]="true" [paginationTemplate]="myTemplate" [data]="allData | paging:page:perPage">
    ...
</@@igSelector>
```

```typescript
@Pipe({
    name: 'paging',
    pure: true
})
export class PagingPipe implements PipeTransform {
    public transform(data: any[], page, perPage): any[] {
        const result = data.slice(page * perPage, (page + 1) * perPage);
        return result;
    }
}
```

Note the additional `page`, `perPage` and `totalPages` properties introduced: those are the parameters needed to correctly slice the data. This can happen in code, for example in value change event of the `input`.

The example above was pretty simple, yet working. To enable you achieve full customization and more granular control over pagination, we suggest that you use the `igx-paginator` - a standalone paginator component, that already exposes all inputs/outputs that you may need. Just continue reading below.

## IgxPaginator component
### Usage
The `igx-paginator` was introduced with 8.1.0 version as a standalone component and exposes all inputs/outputs needed to effectively slice your data to pages with a precise control over when and how to do it. This also makes it super easy to implement remote paging scenarios.

The `igx-paginator` is what the `igx-grid` uses internally for pagination, but this section will demonstrate how to use it as a separate component, in order to fully benefit from its capabilities.

The `igx-paginator` exposes a rich [API](paging.md#api) to enable granular control and customization of the component behavior. Let's see it in action! The example below demonstrates how the `igx-paginator` component is used along with the `igx-grid` component in the example below, but it may be used with any other component in case paging functionality is needed.

```html
<@@igSelector #grid [data]="data" [paging]="true" [paginationTemplate]="pager">
...
</@@igSelector>

<ng-template #pager>
    <igx-paginator #paginator
        [(page)]="page"
        [(perPage)]="perPage"
        [totalRecords]="totalRecords"
        [totalRecords]="totalRecords"
        [dropdownHidden]="isDropdownHidden"
        [pagerHidden]="isPagerHidden"
        [dropdownEnabled]="!isDropdownDisabled"
        [pagerEnabled]="!isPagerDisabled"
        [selectOptions]="selectOptions"
        [displayDensity]="grid.displayDensity"
        (perPageChange)="perPageChange($event)"
        (paging)="paging($event)">
    </igx-paginator>
</ng-template>
```

```typescript
public totalRecords = 0;
public page = 0;
public perPage = 10;
public isDropdownHidden = false;
public isPagerHidden = false;
public isDropdownDisabled = false;
public isPagerDisabled = false;
public selectOptions = [5, 10, 15, 25];

public ngOnInit() {
    this.totalRecords = localData.length;
    this.data = this.sliceData(page, perPage);
}

public paging(event: IPagingEventArgs) {
    this.data = this.sliceData(event.newPage, this.perPage);
}

public sliceData(page, perPage) {
    const start = page * perPage;
    const end = (page + 1) * perPage;
    const result = this.allData.slice(start, end);
    return result;
}

public perPageChange(perPage: number) {
    this.data = this.sliceData(this.page, perPage);
}
```

>[!NOTE]
> Notice that this example is the so called local data scenario, where all the data is available (in the `localData` property). The `igx-paginator` plugs in, allowing us to control the state of the `page` and `perPage` properties, and then using these to effectively slice the correct page of data and pass it to the grid. As an alternative to slicing, pipe the `data` input value through a custom Angular pipe - this way a developer need not worry about change detection in certain scenarios, Angular will handle it internally.

### Paginator Component Demo
<div class="sample-container loading" style="height:600px">
    <iframe id="grid-pager-sample-iframe" class="lazyload" src='{environment:demosBaseUrl}/grid/grid-pager-sample' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-pager-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-pager-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="divider--half"></div>

### API

| Input/Output/Method           |      Description                           |
|-----------------|:------------------------------------------:|
| page            | Sets the current page.
| perPage         | Sets the number of items per page. |
| selectOptions   | Sets custom values for the `perPage` select UI. |
| totalRecords    | Sets the total number of items available. |
| displayDensity  | Sets the display density of the paginator. |
| pagerEnabled    | Enables/disables the paginator UI. |
| pagerHidden     | Enables/disables the paginator UI. |
| dropdownEnabled | Enables/disables the `perPage` select UI. |
| dropdownHidden  | Shows/hides the `perPage` select UI. |
| resourceStrings | Sets the resource strings. By default it uses EN resource strings. |
| pageChange      |  Emitted after the `page` property value was changed. |
| perPageChange   |  Emitted after the `perPage` property value was changed. |
| paging          |  Emits an `IPagingEventArgs` containing the oldPage and newPage values. Emitted before the page is changed.
| pagingDone      |  Emits an `IPagingDoneEventArgs` containing the oldPage and newPage values. Emitted after the page whas changed.
| paginate        |  Takes a number parameter indicating the page to navigate to, if exists. |
| nextPage        |  Paginate to next page, if exists. |
| previousPage    |  Paginate to previous page, if exists. |

>[!NOTE]
> All outputs are emitted regardless if the change happened programatically or by a user interaction with the component UI.
> `totalRecords` property is essential when fetching data from a remote service - in this case `totalRecords` needs to equal the total number of records existing in the remote data source.


## Remote Paging with IgxPaginator
Remote paging can be achieved by declaring a service, responsible for data fetching and a component, which will be responsible for the Grid construction and data subscription.For more detailed information, check the [`@@igComponent Remote Data Operations`](remote-data-operations.md#remote-paging) topic.


@@if (igxName === 'IgxGrid') {
## Remote Paging with custom paginator

In some cases you may want to define your own paging behavior and this is when we can take advantage of the Paging template and add our custom logic along with it. [This section](remote-data-operations.md#remote-paging-with-custom-template) explains how we are going to extend the Remote Paging example in order to demonstrate this.
}

@@if (igxName === 'IgxGrid') {
## Paging with Group By
Group rows participate in the paging process along with data rows. They count towards the page size for each page. Collapsed rows are not included in the paging process.
Integration between Paging and Group By is described in the [Group By](groupby.html#group-by-with-paging) topic.
}

## Localization
With only a few lines of code you can easily localize all strings part of the Paging component. In order to localize a given Paging instance use the input property [resourceStrings]({environment:angularApiUrl}/classes/@@igTypeDoc.html#resourceStrings). You can use this 

**Step 1** - Import `IPaginatorResourceStrings` interface and [changei18n]({environment:angularApiUrl}/#changei18n) function:

```ts
import { IPaginatorResourceStrings, changei18n } from "igniteui-angular";
```

**Step 2** - Define the Paging resource strings:

```ts
private paginatorResourceStrings: IPaginatorResourceStrings = {
    igx_paginator_label: "Records per page:",
    igx_paginator_first_page_button_text: "Custom first page text",
    igx_paginator_last_page_button_text: "Custom last page text",
    igx_paginator_next_page_button_text: "Custom next page text",
    igx_paginator_previous_page_button_text: "Custom previous page text",
    igx_paginator_pager_text: "out of"
};
```


**Step 3** - Pass the object to the [changei18n]({environment:angularApiUrl}/#changei18n) function as a parameter in order to change the global i18n for the component on app.module level. This will change the resource string of all Paging components part of your application:

```ts
public ngOnInit(): void {
    changei18n(this.paginatorResourceStrings as any);
}
```

In order to change the resource string to a specific Paging component, you can use a @ViewChild and set the desired [resourceStrings]({environment:angularApiUrl}/classes/@@igTypeDoc.html#resourceStrings) within a `requestAnimationFrame` method with a callback, that will be invoked before the page repaint. Setting a newly instantiated object to the [resourceStrings]({environment:angularApiUrl}/classes/@@igTypeDoc.html#resourceStrings) property will localize only that given component's instance.

```ts
@ViewChild("paginator", { read: IgxPaginatorComponent, static: false }) public paginator: IgxPaginatorComponent;
...

public ngOnInit(): void {
    requestAnimationFrame(() => {
        this.paginator.resourceStrings = this.paginatorResourceStrings;
    });
}
```

<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-pager-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz demo</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-pager-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Codesandbox demo</button>
</div>

## Pagination Styling in Angular

To get started with styling the paginator, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
// custom-grid-paging-style.component.scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`igx-grid-paginator-theme`]({environment:sassApiUrl}/index.html#function-igx-grid-paginator-theme) and accepts the `$text-color`, `$background-color` and the `$border-color` parameters.

```scss
$dark-grid-paginator: igx-grid-paginator-theme(
    $text-color: #F4D45C,
    $background-color: #575757,
    $border-color: #292826
);
```

As seen, the `igx-grid-paginator-theme` only controls colors for the paging container, but does not affect the buttons in the pager UI. To style those buttons, let's create a new button theme:

```scss
$dark-button: igx-button-theme(
    $icon-color: #FFCD0F,
    $icon-hover-color: #292826,
    $icon-hover-background: #FFCD0F,
    $icon-focus-color: #292826,
    $icon-focus-background: #FFCD0F,
    $disabled-color: #16130C
);
```

In this example we only changed the icon color and background and the button disabled color, but the the [`igx-button-theme`]({environment:sassApiUrl}/index.html#function-igx-button-theme) provides way more parameters to control the button style.

The last step is to **include** the component mixins, each with its respective theme:

```scss
@include igx-grid-paginator($dark-grid-paginator);
.igx-grid-paginator__pager {
    @include igx-button($dark-button);
}
```

>[!NOTE]
>We scope the **igx-button** mixin within `.igx-grid-paginator__pager`, so that only the paginator buttons would be styled. Otherwise other buttons in the grid would be affected too.

 >[!NOTE]
 >If the component is using an [`Emulated`](../themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:

```scss
:host {
    ::ng-deep {
        @include igx-grid-paginator($dark-grid-paginator);
        .igx-grid-paginator__pager {
            @include igx-button($dark-button);
        }
    }
}
```

### Defining a Color Palette

Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) and [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) functions.

`igx-palette` generates a color palette based on the primary and secondary colors that are passed:

```scss
$yellow-color: #F9D342;
$black-color: #292826;

$dark-palette: igx-palette($primary: $black-color, $secondary: $yellow-color);
```

And then with [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) we can easily retrieve color from the pallette.

```scss
$dark-grid-paginator: igx-grid-paginator-theme(
    $palette: $dark-palette,
    $text-color: igx-color($dark-palette, "secondary", 400),
    $background-color: igx-color($dark-palette, "primary", 200),
    $border-color:  igx-color($dark-palette, "primary", 500)
);

$dark-button: igx-button-theme(
    $palette: $dark-palette,
    $icon-color: igx-color($dark-palette, "secondary", 700),
    $icon-hover-color: igx-color($dark-palette, "primary", 500),
    $icon-hover-background: igx-color($dark-palette, "secondary", 500),
    $icon-focus-color: igx-color($dark-palette, "primary", 500),
    $icon-focus-background: igx-color($dark-palette, "secondary", 500),
    $disabled-color: igx-color($dark-palette, "primary", 700)
);
```

>[!NOTE]
>The `igx-color` and `igx-palette` are powerful functions for generating and retrieving colors. Please refer to [`Palettes`](../themes/palette.md) topic for detailed guidance on how to use them.

### Using Schemas

 Going further with the theming engine, you can build a robust and flexible structure that benefits from [**schemas**](../themes/schemas.md). A **schema** is a recipe of a theme.

Extend one of the two predefined schemas, that are provided for every component, in this case - [`dark-grid-pagination`]({environment:sassApiUrl}/index.html#variable-_dark-grid-pagination) and [`dark-button`]({environment:sassApiUrl}/index.html#variable-_dark-button) schemas:

```scss
// Extending the dark paginator schema
$dark-grid-paginator-schema: extend($_dark-grid-pagination,
        (
            text-color:(
                igx-color: ("secondary", 400)
            ),
            background-color:(
                igx-color: ("primary", 200)
            ),
            border-color:(
                igx-color:( "primary", 500)
            )
        )
);
// Extending the dark button schema
$dark-button-schema: extend($_dark-button,
        (
            icon-color:(
                igx-color:("secondary", 700)
            ),
            icon-hover-color:(
                igx-color:("primary", 500)
            ),
            icon-hover-background:(
                igx-color:("secondary", 500)
            ),
            icon-focus-color:(
                igx-color:("primary", 500)
            ),
            icon-focus-background:(
                igx-color:("secondary", 500)
            ),
            disabled-color:(
                igx-color:("primary", 700)
            )
        )
);
```

In order to apply our custom schemas we have to **extend** one of the globals ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) or [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)), which is basically pointing out the components with a custom schema, and after that add it to the respective component themes:

```scss
// Extending the global dark-schema
$custom-dark-schema: extend($dark-schema,(
    igx-grid-paginator: $dark-grid-paginator-schema,
    igx-button: $dark-button-schema
));

// Defining grid-paginator-theme with the global dark schema
$dark-grid-paginator: igx-grid-paginator-theme(
  $palette: $dark-palette,
  $schema: $custom-dark-schema
);

// Defining button-theme with the global dark schema
$dark-button: igx-button-theme(
  $palette: $dark-palette,
  $schema: $custom-dark-schema
);
```

Don't forget to include the themes in the same way as it was demonstrated above.
@@if (igxName === 'IgxGrid'){
### Pagination Style Example

<div class="sample-container loading" style="height:560px">
    <iframe id="custom-grid-paging-style-iframe" data-src='{environment:demosBaseUrl}/grid/custom-grid-paging-style' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="custom-grid-paging-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="custom-grid-paging-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}

@@if (igxName === 'IgxHierarchicalGrid'){
### Demo
<div class="sample-container loading" style="height:560px">
    <iframe id="custom-hGrid-paging-style-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-paging-style' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" class="codesandbox-btn" data-iframe-id="custom-hGrid-paging-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox
    </button>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="custom-hGrid-paging-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz
    </button>
</div>
}


@@if (igxName === 'IgxTreeGrid'){
### Demo
<div class="sample-container loading" style="height:560px">
    <iframe id="custom-treegrid-paging-style-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-paging-style' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" class="codesandbox-btn" data-iframe-id="custom-treegrid-paging-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox
    </button>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="custom-treegrid-paging-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz
    </button>
</div>
}

## API References
* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [IgxGridPaginatorComponent API]({environment:angularApiUrl}/classes/igxpaginatorcomponent.html)
* [IgxGridPaginatorComponent Styles]({environment:sassApiUrl}/index.html#function-igx-paginator-theme)

## Additional Resources
<div class="divider--half"></div>

* [@@igComponent overview](@@igMainTopic.md)
* [Virtualization and Performance](virtualization.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Moving](column-moving.md)
* [Column Pinning](column-pinning.md)
* [Column Resizing](column-resizing.md)
* [Selection](selection.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)