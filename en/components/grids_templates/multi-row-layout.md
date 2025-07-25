---
title: Angular Grid Multi-row Layout - Ignite UI for Angular
_description: Position and size columns in a more powerful way, using the multi-row layout functionality in the Ignite UI for Angular Data Grid. Check out examples and demos!
_keywords: angular multi-row layout, material row layout, ignite ui for angular
---

# Angular Multi-row Layout

Multi-row Layout extends the rendering capabilities of the `igxGridComponent`. The feature allows splitting a single data record into multiple visible rows.

## Angular Multi-row Layout Example


<code-view style="height:755px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-multi-row-layout" alt="Angular Multi-row Layout Example">
</code-view>


The declaration of Multi-row Layout is achieved through [`igx-column-layout`]({environment:angularApiUrl}/classes/igxcolumnlayoutcomponent.html) component. Each `igx-column-layout` component should be considered as a block, containing one or multiple `igx-column` components. Some of the grid features work on block level (those are listed in the "Feature Integration" section below). For example the virtualization will use the block to determine the virtual chunks, so for better performance split the columns into more `igx-column-layout` blocks if the layout allows it. There should be no columns outside of those blocks and no usage of `IgxColumnGroupComponent` when configuring a multi-row layout. Multi-row Layout is implemented on top of the [grid layout](https://www.w3.org/TR/css-grid-1/) specification and should conform to its requirements.

`IgxColumnComponent` exposes four `@Input` properties to determine the location and span of each cell:
* [`colStart`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#colStart) - column index from which the field is starting. This property is **mandatory**.
* [`rowStart`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#rowStart) - row index from which the field is starting. This property is **mandatory**.
* [`colEnd`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#colEnd) - column index where the current field should end. The amount of columns between colStart and colEnd will determine the amount of spanning columns to that field. This property is **optional**. If not set defaults to `colStart + 1`.
* [`rowEnd`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#rowEnd) - row index where the current field should end. The amount of rows between rowStart and rowEnd will determine the amount of spanning rows to that field. This property is **optional**. If not set defaults to `rowStart + 1`.


```html
<igx-column-layout>
	<igx-column [rowStart]="1" [colStart]="1" [rowEnd]="3" field="ID"></igx-column>
</igx-column-layout>
<igx-column-layout>
	<igx-column [rowStart]="1" [colStart]="1" [colEnd]="3" field="CompanyName"></igx-column>
	<igx-column [rowStart]="2" [colStart]="1" [colEnd]="2" field="ContactName"></igx-column>
	<igx-column [rowStart]="2" [colStart]="2" [colEnd]="3" field="ContactTitle"></igx-column>
</igx-column-layout>
<igx-column-layout>
	<igx-column [rowStart]="1" [colStart]="1" [colEnd]="3" field="Country"></igx-column>
	<igx-column [rowStart]="1" [colStart]="3" [colEnd]="5" field="Region"></igx-column>
	<igx-column [rowStart]="1" [colStart]="5" [colEnd]="7" field="PostalCode"></igx-column>
	<igx-column [rowStart]="2" [colStart]="1" [colEnd]="4" field="City"></igx-column>
	<igx-column [rowStart]="2" [colStart]="4" [colEnd]="7" field="Address"></igx-column>
</igx-column-layout>
<igx-column-layout>
    <igx-column [rowStart]="1" [colStart]="1" field="Phone"></igx-column>
    <igx-column [rowStart]="2" [colStart]="1" field="Fax"></igx-column>
</igx-column-layout>
```

The result of the above configuration can be seen on the screenshot below:

<img src="../../images/multi-row-layout-1.png" style="width: 100%"/>


> [!Note]
> [`rowStart`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#rowStart) and [`colStart`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#colStart) properties must be set for each `igx-column` into `igx-column-layout`. The `igxColumnLayout` component is not verifying if the layout is correct and not throwing errors or warnings about that. The developers must make sure that the declaration of their layout is correct and complete, otherwise they may end up in broken layout with misalignments, overlaps and browser inconsistencies.

## Feature Integration
Due to the completely different rendering approach of Multi-row Layout, some of the column features will work only on `igx-column-layout` component. Such features are Column Pinning and Column Hiding. Others like - Sorting and Grouping will work in the same way - on `igx-column` component.
- Filtering - only Excel Style Filtering is supported. Setting `filterMode` explicitly to `FilterMode.quickFilter` has no effect.
- Paging - works on records, not visual rows.
- Group By - `hideGroupedColumns` option has no effect in Multi-row Layout. The grouped columns are always visible.

The following features are currently **not** supported:
- Column Moving 
- Multi-column Headers
- Export to Excel
- Summaries

## Keyboard Navigation

IgxGridComponent with Multi-Row Layouts provides build-in keyboard navigation.

### Horizontal navigation
* <kbd>Arrow Left</kbd> or <kbd>Arrow Right</kbd> - move to the adjacent cell on the left/right within the current row unaffected by the column layouts that are defined. If the current cell spans on more than one row, <kbd>Arrow Left</kbd> and <kbd>Arrow Right</kbd> should navigate to the first cell on the left and right with the same `rowStart`, unless you have navigated to some other adjacent cell before. The navigation stores the starting navigation cell and navigates to the cells with the same `rowStart` if possible.
* <kbd>Ctrl</kbd> + <kbd>Arrow Left</kbd> (<kbd>HOME</kbd>) or <kbd>Ctrl</kbd> + <kbd>Arrow Right</kbd> (<kbd>END</kbd>) - navigate to the start or end of the row and select the cell with accordance to the starting navigation cell.


### Vertical navigation
* <kbd>Arrow Up</kbd> or <kbd>Arrow Down</kbd> - move to the cell above/below in relation to a starting position and is unaffected by the rows. If the current cell spans on more than one column the next active cell will be selected with accordance to the starting navigation cell.
* <kbd>Ctrl</kbd> + Arrow Up</kbd> or <kbd>Ctrl</kbd> + <kbd>Down</kbd> - Navigate and apply focus on the same column on the first or on the last row.
* <kbd>Ctrl</kbd> + <kbd>Home</kbd> or <kbd>Ctrl</kbd> + <kbd>End</kbd> - Navigate to the first row and focus first cell or navigate to the last row and focus the last cell.
	
	
> [!Note]
> Navigation through cells which span on multiple rows or columns is done with accordance to the starting navigation cell and will allow returning to the starting cell using the key for the opposite direction. The same approach is used when navigating through group rows.

> [!Note]
> Selection and multi cell selection are working on layout, meaning that when a cell is active, its layout will be selected. Also all features of multiple selection like drag selection are applicable and will work per layout not per cell.


### Custom Keyboard Navigation

The grid allows customizing the default navigation behavior when a certain key is pressed. Actions like `going to the next cell` or `cell below` could be handled easily with the powerful keyboard navigation API:

- [`gridKeydown`]({environment:angularApiUrl}/classes/igxgridcomponent.html#gridKeydown) is exposed. The event will emit [`IGridKeydownEventArgs`]({environment:angularApiUrl}/interfaces/igridkeydowneventargs.html). This event is available only through the keyboard key combinations mentioned above, for all other key actions you can use `keydown` event `(keydown)="onKeydown($event)"`
- [`navigateTo`]({environment:angularApiUrl}/classes/igxgridcomponent.html#navigateTo) - this method allows you to navigate to a position based on provided `rowindex` and `visibleColumnIndex`

The demo below adds additional navigation down/up via the <kbd>Enter</kbd> and <kbd>Shift</kbd> + <kbd>Enter</kbd> keys, similar to the behavior observed in Excel.

### Demo


<code-view style="height:605px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-mrl-custom-navigation" >
</code-view>


## Layout Configurator

Sometimes when configuring a column layout it might be a challenge to calculate and set the proper [`colStart`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#colStart)  and [`colEnd`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#colEnd)  or [`rowStart`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#rowStart)  and [`rowEnd`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#rowEnd). Especially when there are a lot of columns in a single layout. That is why we have created a small configurator, so you can easily do that and have a similar preview of how it would look inside the igxGrid when applied. You can do the following interactions with it:

* Set number of rows for the whole configuration. All layouts must have the same amount of rows.
* Add/Remove column layouts by clicking the `Add Layout` chip or reordering them by dragging a layout chip left/right.
* Set specific settings for each layout as number of columns and how wide they will be. The setting refer to the currently selected layout.
* Resize column cells in the layout preview so they can span more columns/rows or clear them using the `Delete` button.
* Set columns in the preview by dragging a column chip in the place your will want it to be.
* Add/Remove new columns by using the `Add Column` chip.
* Get template output of the whole configuration ready to by placed inside an igxGrid or the JSON representation that can also be used and parsed in your template using [`NgForOf`](https://angular.io/api/common/NgForOf) for example.

By default we have set the same columns as our previous sample, but it can be cleared and configured to match your desired configuration.

<div class="sample-container loading" style="height:500px">
    <iframe id="grid-multi-row-layout-configuration-iframe" data-src='{environment:demosBaseUrl}/grid/grid-multi-row-layout-configuration' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>

## Styling
The igxGrid allows styling through the [`Ignite UI for Angular Theme Library`](../themes/sass/component-themes.md). The [`grid-theme`]({environment:sassApiUrl}/themes#function-grid-theme) exposes a wide variety of properties, which allow the customization of all the features of the grid. 

In the below steps, we are going through the steps of customizing the grid's Multi-row Layout styling.     

### Importing global theme
To begin the customization of the Multi-row Layout feature, you need to import the `index` file, where all styling functions and mixins are located.

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
``` 

### Defining custom theme
Next, create a new theme, that extends the [`grid-theme`]({environment:sassApiUrl}/themes#function-grid-theme) and accepts the parameters, required to customize the feature layout as desired.   

```scss
$custom-theme: grid-theme(
  $cell-active-border-color: #ffcd0f,
  $cell-selected-background: #6f6f6f,
  $row-hover-background: #fde069,
  $row-selected-background: #8d8d8d,
  $header-background: #494949,
  $header-text-color: #fff,
  $sorted-header-icon-color: #ffcd0f,
  $sortable-header-icon-hover-color: #e9bd0d
);
```    

>[!NOTE]
>Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`palette`]({environment:sassApiUrl}/palettes#function-palette) and [`color`]({environment:sassApiUrl}/palettes#function-color) functions. Please refer to [`Palettes`](../themes/sass/palettes.md) topic for detailed guidance on how to use them.

### Applying the custom theme
The easiest way to apply your theme is with a `sass` `@include` statement in the global styles file:  

```scss
@include css-vars($custom-theme);
```

In order for the custom theme do affect only specific component, you can move all of the styles you just defined from the global styles file to the custom component's style file (including the import of the `index` file).

This way, due to Angular's [ViewEncapsulation](https://angular.io/api/core/Component#encapsulation), your styles will be applied only to your custom component.

### Demo 


<code-view style="height:755px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-multi-row-layout-styling" >
</code-view>

>[!NOTE]
>The sample will not be affected by the selected global theme from `Change Theme`.


## API References
<div class="divider--half"></div>

* [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent Styles]({environment:sassApiUrl}/themes#function-grid-theme)
* [IgxColumnLayoutComponent]({environment:angularApiUrl}/classes/igxcolumnlayoutcomponent.html)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
<div class="divider--half"></div>

## Additional Resources
<div class="divider--half"></div>

* [@@igComponent overview](@@igMainTopic.md)
* [Virtualization and Performance](virtualization.md)
* [Paging](paging.md)
* [Sorting](sorting.md)
* [Column Resizing](column-resizing.md)
* [Selection](selection.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
