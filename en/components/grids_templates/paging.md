---
title: Angular Grid Pagination | Template | Ignite UI for Angular | Infragistics
_description: Configure Angular pagination and create custom pages in the Angular Material table by Ignite UI, get data for the requested pages with variety of angular events.
_keywords: angular pagination, igniteui for angular, infragistics
---

### @@igComponent Paging Functionality
Angular pagination in the @@igComponent is configurable via the [`paging`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#paging) and [`perPage`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#perpage) inputs. As in any Angular Material table, the pagination in @@igComponent supports template for custom pages.

#### Demo

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="grid-paging-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-paging-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="treegrid-paging-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-paging' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:580px">
    <iframe id="hierarchical-grid-paging-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-paging' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}

The [`paging`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#paging) input is a Boolean property that controls whether the feature is enabled, and the [`perPage`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#perpage) property controls the visible records per page. Let’s update our @@igComponent to enable paging:

```html
<@@igSelector #@@igObjectRef [data]="data" [paging]="true" [perPage]="10" height="500px" width="100%" displayDensity="cosy">
</@@igSelector>
```

### Pagination Templating
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

Paging can also be done programmatically through the @@igComponent API, using the [`paginate`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#paginate), [`previousPage`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#previouspage), [`nextPage`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#nextpage) methods:

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
```

@@if (igxName === 'IgxGrid') {
### Paging with Group By

Integration between Paging and Group By is described in the [Group By](groupby.html#group-by-with-paging) topic.
}

### Paginator Component
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
| selectLabel     | Sets the text before the select component. Default is 'Items per page' |
| selectOptions   | Sets custom options for items per page. |
| totalRecords    | Sets the total records count. |

| Output          |      Description                           |
|-----------------|:------------------------------------------:|
| pageChange      |  the event is emitted when the current page is changed. |
| perPageChange   |  the event is emitted when the number items per page is changed. |

#### Usage
The `igx-paginator` component is used along with the `igx-grid` component in the example below, but you can use it with any other component in case paging functionality is needed.

```html
<igx-grid #grid [data]="data" [paging]="true" [perPage]="10" [paginationTemplate]="pager">
...
</igx-grid>

<ng-template #pager>
    <igx-paginator #paginator [(page)]="grid.page" [totalRecords]="grid.totalRecords" [(perPage)]="grid.perPage"
            [dropdownHidden]="isDropdownHidden" [pagerHidden]="isPagerHidden" [selectLabel]="'Records per page:'"
            [selectOptions]="selectOptions" [displayDensity]="grid.displayDensity">
    </igx-paginator>
</ng-template>
```

#### Demo
<div class="sample-container loading" style="height:600px">
    <iframe id="grid-pager-sample-iframe" class="lazyload" src='{environment:demosBaseUrl}/grid/grid-pager-sample' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-pager-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="divider--half"></div>

### Remote Paging

The @@igComponent supports remote paging, which is demonstrated in the [`@@igComponent Remote Data Operations`](remote_data_operations.md#remote-paging) topic.


@@if (igxName === 'IgxGrid') {
### Remote Paging with custom template

In some cases you may want to define your own paging behavior and this is when we can take advantage of the Paging template and add our custom logic along with it. [This section](remote_data_operations.md#remote-paging-with-custom-template) explains how we are going to extend the Remote Paging example in order to demonstrate this.
}

### Styling

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

#### Defining a color palette

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

#### Using Schemas

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
#### Demo

<div class="sample-container loading" style="height:560px">
    <iframe id="custom-grid-paging-style-iframe" data-src='{environment:demosBaseUrl}/grid/custom-grid-paging-style' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="custom-grid-paging-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}

@@if (igxName === 'IgxHierarchicalGrid'){
#### Demo
<div class="sample-container loading" style="height:560px">
    <iframe id="custom-hGrid-paging-style-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-paging-style' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="custom-hGrid-paging-style-iframe"
        data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz
    </button>
</div>
}


@@if (igxName === 'IgxTreeGrid'){
#### Demo
<div class="sample-container loading" style="height:560px">
    <iframe id="custom-treegrid-paging-style-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-paging-style' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="custom-treegrid-paging-style-iframe"
        data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz
    </button>
</div>
}

### API References
* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [IgxGridPaginator Styles]({environment:sassApiUrl}/index.html#function-igx-grid-paginator-theme)

### Additional Resources
<div class="divider--half"></div>

* [@@igComponent overview](@@igMainTopic.md)
* [Virtualization and Performance](virtualization.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Moving](column_moving.md)
* [Column Pinning](column_pinning.md)
* [Column Resizing](column_resizing.md)
* [Selection](selection.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
