<!-- markdownlint-disable MD003 MD024 MD022 -->
@@if (igxName === 'IgxGrid') {
---
title: Angular Grid Column Resizing - Ignite UI for Angular
_description: Start using Angular Grid Column Resizing in order to change the grid column width in an instant. Angular drag resizing has never been so easy. Try for free!
_keywords: grid column resizing, igniteui for angular, infragistics
_license: commercial
---

}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid Column Resizing - Ignite UI for Angular
_description: Start using Angular Tree Grid Column Resizing in order to change the grid column width in an instant. Angular drag resizing has never been so easy. Try for free!
_keywords: grid column resizing, igniteui for angular, infragistics
_license: commercial
_canonicalLink: grid/column-resizing
---

}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchical Grid Column Resizing - Ignite UI for Angular
_description: Start using Angular Hierarchical Grid Column Resizing in order to change the grid column width in an instant. Angular drag resizing has never been so easy. Try for free!
_keywords: grid column resizing, igniteui for angular, infragistics
_license: commercial
_canonicalLink: grid/column-resizing
---

}

# Angular @@igComponent Column Resizing

With deferred grid column resizing, the user will see a temporary resize indicator while the Angular drag resizing operation is in effect. The new grid column width is applied once the drag operation has ended.

## Angular @@igComponent Column Resizing Example

@@if (igxName === 'IgxGrid') {

<code-view style="height:550px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-resizing-sample/" alt="Angular @@igComponent Column Resizing Example">
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:550px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-column-resizing/" alt="Angular @@igComponent Column Resizing Example">
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:510px"
           data-demos-base-url="{environment:lobDemosBaseUrl}"
           iframe-src="{environment:lobDemosBaseUrl}/hierarchical-grid/hierarchical-grid-resizing/" alt="Angular @@igComponent Column Resizing Example">
</code-view>

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
You can subscribe to the [`columnResized`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnResized) event of the [`@@igSelector`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) to implement some custom logic when a column is resized. Both, previous and new column widths, as well as the [`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) object, are exposed through the event arguments.

@@if (igxName === 'IgxGrid') {

```html
<igx-grid [data]="data" (columnResized)="onResize($event)" [autoGenerate]="false">
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
<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID" (columnResized)="onResize($event)" [autoGenerate]="false">
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
  <igx-hierarchical-grid class="hgrid" [data]="localdata" (columnResized)="onResize($event)" [autoGenerate]="false"
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

## Resizing columns in pixels/percentages

Depending on the user scenario, the column width may be defined in pixels, percentages or a mix of both. All these scenarios are supported by the Column Resizing feature. By default if a column does not have width set, it fits the available space with width set in pixels.

This means that the following configuration is possible:

@@if (igxName === 'IgxGrid') {

```html
<igx-grid [data]="data" (columnResized)="onResize($event)" [autoGenerate]="false">
    <igx-column [field]="'ID'" width="10%" [resizable]="true"></igx-column>
    <igx-column [field]="'CompanyName'" width="100px" [resizable]="true"></igx-column>
    <igx-column [field]="'ContactTitle'" [resizable]="true"></igx-column>
</igx-grid>
```

}
@@if (igxName === 'IgxTreeGrid') {

```html
<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID" (columnResized)="onResize($event)" [autoGenerate]="false">
    <igx-column [field]="'Title'" [resizable]="true" [width]="'10%'"></igx-column>
    <igx-column [field]="'HireDate'" [resizable]="true" [width]="'100px'"></igx-column>
    <igx-column [field]="'Age'" dataType="number" [resizable]="true"></igx-column>
</igx-tree-grid>
```

}
@@if (igxName === 'IgxHierarchicalGrid') {

```html
  <igx-hierarchical-grid class="hgrid" [data]="localdata" (columnResized)="onResize($event)" [autoGenerate]="false"
        [height]="'600px'" [width]="'100%'" #hierarchicalGrid>
        <igx-column field="Artist" [resizable]="true" [width]="'10%'"></igx-column>
        <igx-column field="GrammyNominations" [resizable]="true" [width]="'100px'"></igx-column>
        <igx-column field="GrammyAwards" [resizable]="true"></igx-column>
        ...
</igx-hierarchical-grid>
```

}

>[!NOTE]
> There is a slight difference in the way resizing works for columns set in pixels and percentages.

**Pixels**

Resizing columns with width in pixels works by directly adding or subtracting the horizontal amount of the mouse movement from the size of the column.

**Percentages**

When resizing columns with width in percentages, the horizontal amount of the mouse movement in pixels translates roughly to its percentage amount relative to the grid width. The columns remain responsive and any future grid resizing will still reflect on the columns as well.

## Restrict column resizing

You can also configure the minimum and maximum allowable column widths. This is done via the [`minWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#minWidth) and [`maxWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#maxWidth) inputs of the [`igx-column`]({environment:angularApiUrl}/classes/igxcolumncomponent.html). In this case the resize indicator drag operation is restricted to notify the user that the column cannot be resized outside the boundaries defined by [`minWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#minWidth) and [`maxWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#maxWidth).

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

Mixing the minimum and maximum column width value types (pixels or percentages) is allowed. If the values set for minimum and maximum are set to percentages, the respective column size will be limited to those exact sizes similar to pixels.

This means the following configurations are possible:

@@if (igxName !== 'IgxHierarchicalGrid') {

```html
<igx-column [field]="'ID'" width="10%" [resizable]="true"
            [minWidth]="'60px'" [maxWidth]="'230px'"></igx-column>
```

}
@@if (igxName === 'IgxHierarchicalGrid') {

```html
<igx-column [field]="'Artist'" width="100px" [resizable]="true"
            [minWidth]="'60px'" [maxWidth]="'230px'"></igx-column>
```

}

or

@@if (igxName !== 'IgxHierarchicalGrid') {

```html
<igx-column [field]="'ID'" width="100px" [resizable]="true"
            [minWidth]="'5%'" [maxWidth]="'15%'"></igx-column>
```

}
@@if (igxName === 'IgxHierarchicalGrid') {

```html
<igx-column [field]="'Artist'" width="100px" [resizable]="true"
            [minWidth]="'60px'" [maxWidth]="'15%'"></igx-column>
```

}

## Auto-size columns on double click

Each column can be **auto sized** by double clicking the right side of the header - the column will be sized to the longest currently visible cell value, including the header itself. This behavior is enabled by default, no additional configuration is needed. However, the column will not be auto-sized in case [`maxWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#maxWidth) is set on that column and the new width exceeds that [`maxWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#maxWidth) value. In this case the column will be sized according to preset [`maxWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#maxWidth) value.

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

## Auto-size columns on initialization

Each column can be set to auto-size on initialization by setting `width` to 'auto':

```html
<igx-column width='auto'>...
```

When the column is first initialized in the view it resolves its width to the size of the longest visible cell or header. Note that cells that are outside of the visible rows are not included.
This approach is more performance optimized than auto-sizing post initialization and is recommended especially in cases where you need to auto-size a large number of columns.

@@if (igxName === 'IgxGrid') {

<code-view style="height:550px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-columnAutoResizing-sample/" alt="Angular @@igComponent Column Resizing Example">
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:550px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-columnAutoSizing-sample/" alt="Angular @@igComponent Column Resizing Example">
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hGrid-columnAutosizing-sample/" alt="Angular @@igComponent Column Resizing Example">
</code-view>

<div class="divider--half"></div>
}


## Styling

To get started with the styling of the @@igComponent column resize line, we need to import the index file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

The simplest approach to achieve this is to create a new theme that extends the [`grid-theme`]({environment:sassApiUrl}/themes#function-grid-theme) and accepts many parameters as well as the `$resize-line-color` parameter.

``` scss
$custom-grid-theme: grid-theme(
  $resize-line-color: #0288d1
);
```

>[!NOTE]
>Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`palette`]({environment:sassApiUrl}/palettes#function-palette) and [`color`]({environment:sassApiUrl}/palettes#function-color) functions. Please refer to [`Palettes`](../themes/sass/palettes.md) topic for detailed guidance on how to use them.

The last step is to **include** the component mixins with its respective theme:

```scss
:host {
  @include tokens($custom-grid-theme);
}
```

### Demo

@@if (igxName === 'IgxGrid') {

<code-view style="height:550px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-resize-line-styling-sample/" >
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:550px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-resize-line-styling/" >
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:550px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-resize-line-styling/" >
</code-view>

}

>[!NOTE]
>The sample will not be affected by the selected global theme from `Change Theme`.

## API References

<div class="divider--half"></div>

- [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
- [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
- [@@igxNameComponent Styles]({environment:sassApiUrl}/themes#mixin-grid)

## Additional Resources

<div class="divider--half"></div>

- [@@igComponent overview](@@igMainTopic.md)
- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Selection](selection.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
