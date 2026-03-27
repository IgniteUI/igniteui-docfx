---
title: Angular Grid Column Pinning - Ignite UI for Angular
_description: Want to use the Pinning feature of the Ignite UI for Angular when you develop your next app? Easily lock column or change column order with rich API.
_keywords: lock column, ignite ui for angular, infragistics
_license: commercial
---





# Angular Grid Column Pinning

A column or multiple columns can be pinned to the left or right side of the Angular UI Grid. **Column Pinning** in Ignite UI for Angular allows the end users to lock column in a particular column order, this will allow them to see it while horizontally scrolling the Grid. The Material UI Grid has a built-in column pinning UI, which can be used through the Grid's toolbar to change the pin state of the columns. In addition, you can define a custom UI and change the pin state of the columns via the Column Pinning API.

## Angular Grid Column Pinning  Example



<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-sample-toolbar-pinning/" alt="Angular Grid Column Pinning  Example">
</code-view>





## Column Pinning API

Column pinning is controlled through the `pinned` input of the [`igx-column`]({environment:angularApiUrl}/classes/igxcolumncomponent.html). Pinned columns are rendered on the left side of the Grid by default and stay fixed through horizontal scrolling of the unpinned columns in the Grid body.



```html
<igx-grid #grid1 [data]="data | async" [width]="700px" [autoGenerate]="false" (columnInit)="initColumns($event)"
    (selected)="selectCell($event)">
    <igx-column [field]="Name" [pinned]="true"></igx-column>
    <igx-column [field]="AthleteNumber"></igx-column>
    <igx-column [field]="TrackProgress"></igx-column>
    <igx-paginator [perPage]="10">
    </igx-paginator>
</igx-grid>
```






You may also use the Grid's [`pinColumn`]({environment:angularApiUrl}/classes/igxgridcomponent.html#pinColumn) or [`unpinColumn`]({environment:angularApiUrl}/classes/igxgridcomponent.html#unpinColumn) methods of the [`IgxGridComponent`]({environment:angularApiUrl}/classes/igxgridcomponent.html) to pin or unpin columns by their field name:



```typescript
this.grid.pinColumn('AthleteNumber');
this.grid.unpinColumn('Name');
```





Both methods return a boolean value indicating whether their respective operation is successful or not. Usually the reason they fail is that the column is already in the desired state.

A column is pinned to the right of the rightmost pinned column. Changing the order of the pinned columns can be done by subscribing to the [`columnPin`]({environment:angularApiUrl}/classes/igxgridcomponent.html#columnPin) event and changing the [`insertAtIndex`]({environment:angularApiUrl}/interfaces/ipincolumneventargs.html#insertAtIndex) property of the event arguments to the desired position index.



```html
<igx-grid #grid1 [data]="data | async" [autoGenerate]="true" (columnPin)="columnPinning($event)"></igx-grid>
```

```typescript
public columnPinning(event) {
    if (event.column.field === 'Name') {
        event.insertAtIndex = 0;
    }
}
```





## Pinning Position

You can change the column pinning position via the [`pinning`]({environment:angularApiUrl}/classes/igxgridcomponent.html#pinning) configuration option. It allows you to set the columns position to either Start or End.
When set to End the columns are rendered at the end of the grid, after the unpinned columns. Unpinned columns can be scrolled horizontally, while the pinned columns remain fixed on the right.



```html
<igx-grid [data]="data" [autoGenerate]="true" [pinning]="pinningConfig"></igx-grid>
```







```typescript
public pinningConfig: IPinningConfig = { columns: ColumnPinningPosition.End };
```

### Demo



<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-sample-right-pinning/" >
</code-view>







### Column Pinning on Both Sides
Additionally, you can specify each column pinning location separately, allowing you to pin columns to both sides of the grid for greater convenience and easier optimization of data sets. Please refer to the demo below for further reference. In order to pin a column, please either select a column by clicking on a header and use the pin buttons added to the toolbar, or simply drag a column to another pinned one.



<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-toolbar-pinning-both-sides/" >
</code-view>







## Custom Column Pinning UI

You can define your custom UI and change the pin state of the columns via the related API.

Let's say that instead of a toolbar you would like to define pin icons in the column headers that the end user can click to change the particular column's pin state.
This can be done by creating a header template for the column with a custom icon.



```html
<igx-grid #grid1 [data]="data" [width]="'100%'" [height]="'500px'">
    <igx-column #col *ngFor="let c of columns" [field]="c.field" [header]="c.header" [width]="c.width" [pinned]='c.pinned'
        [hidden]='c.hidden' [headerClasses]="'customHeaderSyle'">
        <ng-template igxHeader>
            <div class="title-inner">
                <span style="float:left">{{col.header}}</span>
                <igx-icon class="pin-icon" fontSet="fas" name="fa-thumbtack" (click)="toggleColumn(col)"></igx-icon>
            </div>
        </ng-template>
    </igx-column>
</igx-grid>
```







On click of the custom icon the pin state of the related column can be changed using the column's API methods.

```typescript
public toggleColumn(col: ColumnType) {
    col.pinned ? col.unpin() : col.pin();
}
```

### Demo



<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-sample-pinning/" >
</code-view>






## Pinning Limitations

- Setting column widths in percentage (%) explicitly makes the Grid body and header content to be misaligned when there are pinned columns. For column pinning to function correctly the column widths should be in pixels (px) or auto-assigned by the Grid.

<div class="divider--half"></div>



## Styling

The igxGrid allows styling through the [Ignite UI for Angular Theme Library](../themes/sass/component-themes.md). The grid's [theme]({environment:sassApiUrl}/themes#function-grid-theme) exposes a wide variety of properties, which allow the customization of all the features of the grid.

In the below steps, we are going through the steps of customizing the grid's Pinning styling.

### Importing global theme

To begin the customization of the Pinning feature, you need to import the `index` file, where all styling functions and mixins are located.

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

### Defining custom theme

Next, create a new theme, that extends the [`grid-theme`]({environment:sassApiUrl}/themes#function-grid-theme) and accepts the parameters, required to customize the Pinning feature as desired.

```scss
$custom-theme: grid-theme(
  $pinned-border-width: 5px,
  $pinned-border-style: double,
  $pinned-border-color: #ffcd0f,
  $cell-active-border-color: #ffcd0f
);
```

>[!NOTE]
>Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`palette`]({environment:sassApiUrl}/palettes#function-palette) and [`color`]({environment:sassApiUrl}/palettes#function-color) functions. Please refer to [`Palettes`](../themes/sass/palettes.md) topic for detailed guidance on how to use them.

### Applying the custom theme

The easiest way to apply your theme is with a `sass` `@include` statement in the global styles file:

```scss
:host {
  @include tokens($custom-theme);
}
```

### Demo


<code-view style="height:506px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-pinning-styling/" >
</code-view>

>[!NOTE]
>The sample will not be affected by the selected global theme from `Change Theme`.



## API References

- [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
- [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)

## Additional Resources

<div class="divider--half"></div>

- [Grid overview](grid.md)
- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
