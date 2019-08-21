﻿@@if (igxName === 'IgxGrid') {
---
title: Angular Grid Sorting | Data Sorting | Ignite UI for Angular | infragistics
_description: Get started with the Angular Sort feature of Ignite UI Material UI grid and learn how to configure a mix of sortable columns with rich API and angular events
_keywords: angular sort, ignite ui for angular, infragistics
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid Sorting | Data Sorting | Ignite UI for Angular | infragistics
_description: Get started with the Angular Sort feature of Ignite UI Material UI grid and learn how to configure a mix of sortable columns with rich API and angular events
_keywords: angular sort, ignite ui for angular, infragistics
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchical Grid Sorting | Data Sorting | Ignite UI for Angular | infragistics
_description: Get started with the Angular Sort feature of Ignite UI Material UI grid and learn how to configure a mix of sortable columns with rich API and angular events
_keywords: angular sort, ignite ui for angular, infragistics
---
}

### @@igComponent Sorting Overview

In Ignite UI for Angular @@igComponent, data sorting is enabled on a per-column level, meaning that the **@@igSelector** can have a mix of sortable and non-sortable columns. Performing angular sort actions enables you to change the display order of the records based on specified criteria.

#### Demo

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="grid-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-sorting-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
Additionally there is a custom contextmenu added for sorting using **@@igSelector**'s [`onContextMenu`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#oncontextmenu) Output.

<div class="sample-container loading" style="height:550px">
    <iframe id="tree-grid-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-sorting' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
Additionally there is a custom contextmenu added for sorting using **@@igSelector**'s [`onContextMenu`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#oncontextmenu) Output.

<div class="sample-container loading" style="height:510px">
    <iframe id="hierarchical-grid-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-sorting' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}

<div class="divider--half"></div>

This is done via the [`sortable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#sortable) input. With the @@igComponent sorting, you can also set the [`sortingIgnoreCase`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#sortingignorecase) property to perform case sensitive sorting:

```html
<igx-column field="ProductName" header="Product Name" [dataType]="'string'" sortable="true"></igx-column>
```

#### Sorting through the API

You can sort any column or a combination of columns through the @@igComponent API using the @@igComponent [`sort`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#sort) method:

```typescript
import { SortingDirection } from 'igniteui-angular';

// Perform a case insensitive ascending sort on the ProductName column.
this.@@igObjectRef.sort({ fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true });

// Perform sorting on both the ProductName and Price columns.
this.@@igObjectRef.sort([
    { fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true },
    { fieldName: 'Price', dir: SortingDirection.Desc }
]);
```

> [!NOTE]
> Sorting is performed using our [`DefaultSortingStrategy`]({environment:angularApiUrl}/classes/defaultsortingstrategy.html) algorithm. Any [`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#sortStrategy) or [`ISortingExpression`]({environment:angularApiUrl}/interfaces/isortingexpression.html#strategy) can use a custom implementation of the [`ISortingStrategy`]({environment:angularApiUrl}/interfaces/isortingstrategy.html) as a substitute algorithm. This is useful when custom sorting needs to be defined for complex template columns, or image columns, for example.

As with the filtering behavior, you can clear the sorting state by using the [`clearSort`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#clearsort) method:

```typescript
// Removes the sorting state from the ProductName column
this.@@igObjectRef.clearSort('ProductName');

// Removes the sorting state from every column in the @@igComponent
this.@@igObjectRef.clearSort();
```

> [!NOTE]
> The sorting operation **DOES NOT** change the underlying data source of the @@igComponent.

#### Initial sorting state

It is possible to set the initial sorting state of the @@igComponent by passing an array of sorting expressions to the [`sortingExpressions`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#sortingexpressions) property of the @@igComponent.

```typescript
public ngOnInit() {
    this.@@igObjectRef.sortingExpressions = [
        { fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true },
        { fieldName: 'Price', dir: SortingDirection.Desc }
    ];
}
```

> [!NOTE]
> If values of type `string` are used by a column of [`dataType`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#datatype) `Date`, the @@igComponent won't parse them to `Date` objects and using @@igComponent `sorting` won't work as expected. If you want to use `string` objects, additional logic should be implemented on an application level, in order to parse the values to `Date` objects.

<div class="divider--half"></div>

@@if (igxName === 'IgxGrid') {
#### Remote Sorting
You can provide @@igComponent's remote sorting by subscribing to [`onDataPreLoad`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#ondatapreload) and [`onSortingDone`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onsortingdone) outputs. More information on how to use it you can find in the `@@igComponent Virtualization and Performance` [documentation](virtualization.md#remote-sortingfiltering-virtualization).

<div class="divider--half"></div>
}

### Styling

To get started with styling the sorting behavior, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

Following the simplest approach, we create a new theme that extends the [`igx-grid-theme`]({environment:sassApiUrl}/index.html#function-igx-grid-theme) and accepts the `$sorted-header-icon-color` parameter.

```scss
$custom-theme: igx-grid-theme(
    $sorted-header-icon-color: #51f942
);
```
The last step is to **include** the component mixins: 

```scss
 @include igx-grid($custom-theme);
```

>[!NOTE]
 >If the component is using an [`Emulated`](../themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:

 ```scss
:host {
  ::ng-deep {
    @include igx-grid($custom-theme);
  }
}
```

#### Defining a color palette

Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) and [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) functions.

`igx-palette` generates a color palette based on the primary and secondary colors that are passed:

```scss
$black-color: #292826;
$green-color: #51f942;

$custom-palette: igx-palette($primary: $black-color, $secondary: $green-color);
```

And then with [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) we can easily retrieve color from the palette.

```scss
$custom-theme: igx-grid-theme(
    $sorted-header-icon-color: igx-color($custom-palette, "secondary", 700)
);
```

>[!NOTE]
>The `igx-color` and `igx-palette` are powerful functions for generating and retrieving colors. Please refer to [`Palettes`](../themes/palette.md) topic for detailed guidance on how to use them.

#### Using Schemas

Going further with the theming engine, you can build a robust and flexible structure that benefits from [**schemas**](../themes/schemas.md). A **schema** is a recipe of a theme.

Extend one of the two predefined schemas, that are provided for every component, in this case - [`_light-grid`]({environment:sassApiUrl}/index.html#variable-_light-grid):  

```scss
// Extending the light grid schema
$custom-grid-schema: extend($_light-grid,
    (
        sorted-header-icon-color: (igx-color:('secondary', 700)),
        sortable-header-icon-hover-color: (igx-color:('primary', 300))
    )
);
```

In order to apply our custom schema we have to **extend** one of the globals ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) or [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)), which is basically pointing out the components with a custom schema, and after that add it to the respective component themes:

```scss
// Extending the global light-schema
$my-custom-schema: extend($light-schema, 
    (
        igx-grid: $custom-grid-schema
    )
);

// Defining our custom theme with the custom schema
$custom-theme: igx-grid-theme(
  $palette: $custom-palette,
  $schema: $my-custom-schema
);
```

Don't forget to include the themes in the same way as it was demonstrated above.

@@if (igxName === 'IgxGrid') {
#### Demo

<div class="sample-container loading" style="height:550px">
    <iframe id="grid-sorting-styling-iframe" src='{environment:demosBaseUrl}/grid/grid-sorting-styling' width="100%" height="100%" 
        seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sorting-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
#### Demo

<div class="sample-container loading" style="height:550px">
    <iframe id="tree-grid-sorting-styling-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-sorting-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-sorting-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
#### Demo

<div class="sample-container loading" style="height:510px">
    <iframe id="hierarchical-grid-sorting-styling-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-sorting-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-sorting-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}

### API References
* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [ISortingExpression]({environment:angularApiUrl}/interfaces/isortingexpression.html)

### Additional Resources
<div class="divider--half"></div>

* [@@igComponent overview](@@igMainTopic.md)
* [Virtualization and Performance](virtualization.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Summaries](summaries.md)
* [Column Moving](column_moving.md)
* [Column Pinning](column_pinning.md)
* [Column Resizing](column_resizing.md)
* [Selection](selection.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
