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
Pagination is used to split a large set of data into a sequence of pages that have similar content. Angular table pagination improves user experience and data interaction. @@igComponent pagination is configurable via the [`paging`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#paging) and [`perPage`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#perpage) inputs. As in any Angular Material table, the pagination in the @@igComponent supports template for custom pages.

## Angular Pagination Example

The following example represents @@igComponent pagination and exposes the options usage of `items per page` and how paging can be enabled. The user can also quickly navigate through the @@igComponent pages via "Go to last page" and "Go to first page" buttons.
@@if (igxName === 'IgxGrid') {

<code-view style="height:550px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-paging-sample" alt="Angular Pagination Example">
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:550px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-paging" alt="Angular Pagination Example">
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:580px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-paging" alt="Angular Pagination Example">
</code-view>

<div class="divider--half"></div>
}

The [`paging`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#paging) input is a Boolean property that controls whether the feature is enabled, and the [`perPage`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#perpage) property controls the visible records per page. Let’s update our @@igComponent to enable paging:

```html
<@@igSelector #@@igObjectRef [data]="data" [paging]="true" [perPage]="10" height="500px" width="100%" displayDensity="cosy">
</@@igSelector>
```

## Angular Pagination Template
The paging area supports templating by the user, if a template reference is passed to the @@igComponent during initialization. The example below is a template where the pagination is controlled through an input.

```html
<ng-template #myTemplate let-grid>
    Current page: {{ @@igObjectRef.page }}
    <input type="number" [(ngModel)]="grid.page" />
    Total pages: {{ @@igObjectRef.totalPages }}
</ng-template>

<@@igSelector [paging]="true" [paginationTemplate]="myTemplate">
    ...
</@@igSelector>
```

Paging can also be done programmatically through the @@igComponent API, using the [`paginate`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#paginate), [`previousPage`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#previouspage), [`nextPage`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#nextpage) methods and the inputs [`page`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#page), [`perPage`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#perpage) and [`totalRecords`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#totalrecords). Where *page* allows you to set the current page, *perPage* - the number of items that are displayed at one page and *totalRecords* - the number of the records that are in the grid. `TotalRecords` property is useful when you have paging with remote data and you want to alter the page count based on total remote records. Keep in mind that If you are using paging and all the data is passed to the grid, the value of totalRecords property will be set by default to the length of the provided data source. If totalRecords is set, it will take precedence over the default length based on the data source."

```typescript
// Go to page 6
this.@@igObjectRef.paginate(5);

// Go to previous/next page
this.@@igObjectRef.previousPage();
this.@@igObjectRef.nextPage();

// Check for first/last page
this.@@igObjectRef.isFirstPage;
this.@@igObjectRef.isLastPage;

// Get the number of pages
this.@@igObjectRef.totalPages;

// Change the number of records per page
this.@@igObjectRef.perPage = 25;

// Enables/disables paging
this.@@igObjectRef.paging = false;

//  Set the total number of records that are in the grid. Default value is the length of the provided data.
this.@@igObjectRef.totalRecords = 30;
```

@@if (igxName === 'IgxGrid') {
## Paging with Group By
Group rows participate in the paging process along with data rows. They count towards the page size for each page. Collapsed rows are not included in the paging process.
Integration between Paging and Group By is described in the [Group By](groupby.html#group-by-with-paging) topic.
}

## Reusable Paginator Component in Angular
A new component `igx-paginator` is introduced with 8.1.0 release. This component replaces the current pager and can be used as a standalone component as well.
The `igx-paginator` exposes a couple of input and output properties that enable further customization of the paging.

| Input           |      Description                           |
|-----------------|:------------------------------------------:|
| displayDensity  | Sets the display density of the paginator. |
| dropdownEnabled | Sets the enabled state to the drop-down. |
| dropdownHidden  | Sets the hidden state to the drop-down. |
| page            | Sets the current page. |
| pagerEnabled    | Sets the enabled state to the pager. |
| pagerHidden     | Sets the hidden state to the pager. |
| perPage         | Sets the number of visible items per page. |
| selectOptions   | Sets custom options for items per page. |
| totalRecords    | Sets the total records count. |
| resourceStrings | Sets the resource strings. By default it uses EN resource strings. |


| Output          |      Description                           |
|-----------------|:------------------------------------------:|
| pageChange      |  the event is emitted when the current page is changed. |
| perPageChange   |  the event is emitted when the number items per page is changed. |

### Usage
The `igx-paginator` component is used along with the `igx-grid` component in the example below, but you can use it with any other component in case paging functionality is needed.

```html
<igx-grid #grid [data]="data" [paging]="true" [perPage]="10" [paginationTemplate]="pager">
...
</igx-grid>

<ng-template #pager>
    <igx-paginator #paginator [(page)]="grid.page" [totalRecords]="grid.totalRecords" [(perPage)]="grid.perPage"
            [dropdownHidden]="isDropdownHidden" [pagerHidden]="isPagerHidden"
            [selectOptions]="selectOptions" [displayDensity]="grid.displayDensity">
    </igx-paginator>
</ng-template>
```

### Paginator Component Demo

<code-view style="height:600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-pager-sample" >
</code-view>


<div class="divider--half"></div>

## Remote Paging
Remote paging can be achieved by declaring a service, responsible for data fetching and a component, which will be responsible for the Grid construction and data subscription.For more detailed information, check the [`@@igComponent Remote Data Operations`](remote-data-operations.md#remote-paging) topic.


@@if (igxName === 'IgxGrid') {
## Remote Paging with Custom Template

In some cases you may want to define your own paging behavior and this is when we can take advantage of the Paging template and add our custom logic along with it. [This section](remote-data-operations.md#remote-paging-with-custom-template) explains how we are going to extend the Remote Paging example in order to demonstrate this.
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

Following the simplest approach, we create a new theme that extends the [`igx-paginator-theme`]({environment:sassApiUrl}/index.html#function-igx-grid-paginator-theme) and accepts the `$text-color`, `$background-color` and the `$border-color` parameters.

```scss
$dark-paginator: igx-paginator-theme(
    $text-color: #F4D45C,
    $background-color: #575757,
    $border-color: #292826
);
```

As seen, the `igx-paginator-theme` only controls colors for the paging container, but does not affect the buttons in the pager UI. To style those buttons, let's create a new button theme:

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
>We scope the **igx-button** mixin within `.igx-paginator__pager`, so that only the paginator buttons would be styled. Otherwise other buttons in the grid would be affected too.

 >[!NOTE]
 >If the component is using an [`Emulated`](../themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:

```scss
:host {
    ::ng-deep {
        @include igx-paginator($dark-paginator);
        .igx-paginator__pager {
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
$dark-paginator: igx-paginator-theme(
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
>The `igx-color` and `igx-palette` are powerful functions for generating and retrieving colors. Please refer to [`Palettes`](../themes/sass/palettes.md) topic for detailed guidance on how to use them.

### Using Schemas

 Going further with the theming engine, you can build a robust and flexible structure that benefits from [**schemas**](../themes/sass/schemas.md). A **schema** is a recipe of a theme.

Extend one of the two predefined schemas, that are provided for every component, in this case - [`dark-pagination`]({environment:sassApiUrl}/index.html#variable-_dark-grid-pagination) and [`dark-button`]({environment:sassApiUrl}/index.html#variable-_dark-button) schemas:

```scss
// Extending the dark paginator schema
$dark-paginator-schema: extend($_dark-pagination,
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
    igx-paginator: $dark-paginator-schema,
    igx-button: $dark-button-schema
));

// Defining igx-paginator-theme with the global dark schema
$dark-paginator: igx-paginator-theme(
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


<code-view style="height:560px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/custom-grid-paging-style" >
</code-view>

<div class="divider--half"></div>
}

@@if (igxName === 'IgxHierarchicalGrid'){
### Demo

<code-view style="height:560px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-paging-style" >
</code-view>

}


@@if (igxName === 'IgxTreeGrid'){
### Demo

<code-view style="height:560px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-paging-style" >
</code-view>

}

## API References
* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [IgxGridPaginator Styles]({environment:sassApiUrl}/index.html#function-igx-paginator-theme)

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
