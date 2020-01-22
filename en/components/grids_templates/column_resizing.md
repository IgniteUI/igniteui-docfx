@@if (igxName === 'IgxGrid') {
---
title: Angular Grid Column Resizing | Ignite UI for Angular | Infragistics
_description: Start using Angular Grid Column Resizing based on angular drag resizing in order to change grid column width easily. Angular drag resizing has never been so easy.
_keywords: grid column resizing, igniteui for angular, infragistics
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid Column Resizing | Ignite UI for Angular | Infragistics
_description: Start using Angular Tree Grid Column Resizing based on angular drag resizing in order to change grid column width easily. Angular drag resizing has never been so easy.
_keywords: grid column resizing, igniteui for angular, infragistics
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchical Grid Column Resizing | Ignite UI for Angular | Infragistics
_description: Start using Angular Hierarchical Grid Column Resizing based on angular drag resizing in order to change grid column width easily. Angular drag resizing has never been so easy.
_keywords: grid column resizing, igniteui for angular, infragistics
---
}

### @@igComponent Column Resizing

With deferred grid column resizing, the user will see a temporary resize indicator while the Angular drag resizing operation is in effect. The new grid column width is applied once the drag operation has ended.

#### @@igComponent Column Resizing Demo

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="grid-resizing-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-resizing-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-resizing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="treegrid-resizing-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-column-resizing' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-resizing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:510px">
    <iframe id="hierarchical-grid-resizing-sample-iframe" src='{environment:lobDemosBaseUrl}/hierarchical-grid/hierarchical-grid-resizing' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-resizing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}

**Column resizing** is also enabled per-column level, meaning that the [**@@igSelector**]({environment:angularApiUrl}/classes/@@igTypeDoc.html) can have a mix of resizable and non-resizable columns. This is done via the [`resizable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#resizable) input of the [`igx-column`]({environment:angularApiUrl}/classes/igxcolumncomponent.html).

@@if (igxName !== 'IgxHierarchicalGrid') {
```html
<igx-column [field]="'ID'" width="100px" [resizable]="true"></igx-column>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-column [field]="'Artist'" [resizable]="true"></igx-column>
```
}
You can subscribe to the [`onColumnResized`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#oncolumnresized) event of the [`@@igSelector`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) to implement some custom logic when a column is resized. Both, previous and new column widths, as well as the [`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) object, are exposed through the event arguments.

@@if (igxName === 'IgxGrid') {
```html
<igx-grid [data]="data" (onColumnResized)="onResize($event)" [autoGenerate]="false">
    <igx-column [field]="'ID'" width="100px" [resizable]="true"></igx-column>
    <igx-column [field]="'CompanyName'" width="100px" [resizable]="true"></igx-column>
</igx-grid>
```

```typescript
public onResize(event) {
    this.col = event.column;
    this.pWidth = event.prevWidth;
    this.nWidth = event.newWidth;
}
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID" (onColumnResized)="onResize($event)" [autoGenerate]="false">
    <igx-column [field]="'Title'" [resizable]="true" [width]="'100px'"></igx-column>
    <igx-column [field]="'HireDate'" [resizable]="true" [width]="'100px'"></igx-column>
</igx-tree-grid>
```

```typescript
public onResize(event) {
    this.col = event.column;
    this.pWidth = event.prevWidth;
    this.nWidth = event.newWidth;
}
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
  <igx-hierarchical-grid class="hgrid" [data]="localdata" (onColumnResized)="onResize($event)" [autoGenerate]="false"
        [height]="'600px'" [width]="'100%'" #hierarchicalGrid>
        <igx-column field="Artist" [resizable]="true"></igx-column>
        ...
</igx-hierarchical-grid>
```
```typescript
    public onResize(event) {
        this.col = event.column;
        this.pWidth = event.prevWidth;
        this.nWidth = event.newWidth;
    }
```
}

#### Restrict column resizing

You can also configure the minimum and maximum allowable column widths. This is done via the [`minWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#minwidth) and [`maxWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#maxwidth) inputs of the [`igx-column`]({environment:angularApiUrl}/classes/igxcolumncomponent.html). In this case the resize indicator drag operation is restricted to notify the user that the column cannot be resized outside the boundaries defined by [`minWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#minwidth) and [`maxWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#maxwidth).

@@if (igxName !== 'IgxHierarchicalGrid') {
```html
<igx-column [field]="'ID'" width="100px" [resizable]="true"
            [minWidth]="'60px'" [maxWidth]="'230px'"></igx-column>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-column [field]="'Artist'" width="100px" [resizable]="true"
            [minWidth]="'60px'" [maxWidth]="'230px'"></igx-column>
```
}

#### Auto-size columns on double click

Each column can be **auto sized** by double clicking the right side of the header - the column will be sized to the longest currently visible cell value, including the header itself. This behavior is enabled by default, no additional configuration is needed. However, the column will not be auto-sized in case [`maxWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#maxwidth) is set on that column and the new width exceeds that [`maxWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#maxwidth) value. In this case the column will be sized according to preset [`maxWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#maxwidth) value.

You can also auto-size a column dynamically using the exposed [`autosize()`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#autosize) method on [`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html).

@@if (igxName !== 'IgxHierarchicalGrid') {
```typescript
@ViewChild('@@igObjectRef') @@igObjectRef: @@igxNameComponent;

let column = this.@@igObjectRef.columnList.filter(c => c.field === 'ID')[0];
column.autosize();
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```typescript
@ViewChild('@@igObjectRef') @@igObjectRef: @@igxNameComponent;

let column = this.@@igObjectRef.columnList.filter(c => c.field === 'Artist')[0];
column.autosize();
```
}

#### Pinned columns resizing

Pinned columns can also be resized. However, resizing is limited so that the overall width of the pinned columns container cannot become larger than 80% of the overall @@igComponent width.
Again, if you try to autosize a pinned column and the new width will cause the pinned columns container to exceed those 80% of the overall @@igComponent width, auto sizing will be discarded. We just want to make sure that the unpinned columns are always visible and available to the user!

### Styling
To get started with the styling of the @@igComponent column resize line, we need to import the index file, where all the theme functions and component mixins live:

```scss
// grid-resize-line-styling-sample.scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

The simplest approach to achieve this is to create a new theme that extends the [`igx-grid-theme`]({environment:sassApiUrl}/index.html#function-igx-grid-theme) and accepts many parameters as well as the `$resize-line-color` parameter.

``` scss
$custom-grid-theme: igx-grid-theme(
    $resize-line-color: #0288D1
);

```
 >[!NOTE]
 >If the component is using an [`Emulated`](../themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`.

```scss
:host {
    ::ng-deep {
        @include igx-grid($custom-grid-theme);
    }
}
```

#### Defining a color palette
Instead of hard-coding the color values, we can achieve greater flexibility in terms of colors by using the [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) and [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) functions.

`igx-palette` generates a color palette based on the specified primary and secondary color:

```scss
$primary-color: #0288D1;
$secondary-color: #BDBDBD;

$custom-theme-palette: igx-palette($primary: $primary-color, $secondary: $secondary-color);
```

And then, with [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color), we can easily retrieve the color from the palette. 

```scss
$custom-grid-theme: igx-grid-theme(
    $palette: $custom-theme-palette,
    $resize-line-color: igx-color($custom-theme-palette, 'secondary', 500)
);
```

>[!NOTE]
>The `igx-color` and `igx-palette` are powerful functions for generating and retrieving colors. Please, refer to [`Palettes`](../themes/palette.md) topic for detailed guidance on how to use them.

#### Using Schemas
Going further with the theming engine, you can build a robust and flexible structure that benefits from [**schemas**](../themes/schemas.md). A **schema** is a recipe of a theme.

Extend the predefined schema provided for every component, in this case - [`light-grid`]({environment:sassApiUrl}/index.html#variable-_light-grid) schema:

```scss
// Extending the light grid schema
$light-grid-schema: extend($_light-grid,
    (
        resize-line-color: (
            igx-color: ('secondary', 500)
            ),
        header-background: (
            igx-color: ("primary", 100)
            ),
        header-text-color: (
            igx-color: ("primary", 600)
            )
    )
);
```

In order to apply our custom schema, we have to **extend** one of the globals ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) or [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)), which is basically pointing out the components with a custom schema, and after that add it to the respective component theme:

```scss
// Extending the global light-schema
$custom-light-grid-schema: extend($light-schema,(
    igx-grid: $light-grid-schema
));

// Specifying the palette and schema of the custom grid theme
$custom-grid-theme: igx-grid-theme(
    $palette: $custom-theme-palette,
    $schema: $custom-light-grid-schema
);
```
Don't forget to include the theme in the same way as it was demonstrated above.

#### Demo

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="grid-resizing-styling-sample-iframe" data-src='{environment:demosBaseUrl}/grid/grid-resize-line-styling-sample' width="100%" height="100%" seamless frameborder="0" class="lazyload no-theming"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-resizing-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="treegrid-column-resizing-styling-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-resize-line-styling' width="100%" height="100%" seamless frameborder="0" class="lazyload no-theming"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-column-resizing-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="hierarchical-grid-resize-line-styling-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-resize-line-styling' width="100%" height="100%" seamless frameborder="0" class="lazyload no-theming"></iframe>
</div>
<div class="divider--half"></div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-resize-line-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}

### API References
<div class="divider--half"></div>

* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent Styles]({environment:sassApiUrl}/index.html#mixin-igx-grid)

### Additional Resources
<div class="divider--half"></div>

* [@@igComponent overview](@@igMainTopic.md)
* [Virtualization and Performance](virtualization.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Moving](column_moving.md)
* [Column Pinning](column_pinning.md)
* [Selection](selection.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)