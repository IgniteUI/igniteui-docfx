---
title: Column Layout Component - Native Angular | Ignite UI for Angular
_description: Multi row layout allow positioning and sizing the columns in a more powerful and flexible way. Every single column layout is a representation of a complete grid layout which consists of column fields.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Grid, Angular Table, Angular Data Grid component, Angular Data Table component, Angular Data Grid control, Angular Data Table control, Angular Grid component, Angular Table component, Angular Grid control, Angular Table control, Angular High Performance Grid, Angular High Performance Data Table, Multi Row Layout, Angular Multi Row Layout, Angular Data Table Multi Row Layout, Grid Layout, Angular Grid Layout, Column Layout, ColumnLayout, igxColumnLayout
---

### Multi Row Layout

Multi Row Layout boosts the rendering capabilities of a grid. It allows positioning and sizing the columns in a more powerful and flexible way. They can span on multiple rows and columns.


#### Demo

<div class="sample-container loading" style="height:550px">
    <iframe id="grid-row-layout-iframe" src='{environment:demosBaseUrl}/grid/multi-row-layout' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-multi-row-layout-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

The declaration of `Multi Row Layout` is achieved using [`igx-column-layout`]({environment:angularApiUrl}/classes/igxcolumnlayoutcomponent.html) component. Those `igx-column-layout` components should be considered as specific blocks. There should be no columns outside of those blocks and no usage of IgxColumnGroupComponent when using Multi Row Layout. All columns should be withing `igx-column-layout` when using multi row layout grid, even when there is a single column in the layout block. Each block should define complete [grid layout](https://www.w3.org/TR/css-grid-1/) structure. The virtual directive will use those blocks as a base to determine the virtual chunks. Good practice will be splitting the columns into more blocks(IgxColumnLayoutComponent)

IgxColumnComponent will expose 4 @Input properties to determine the location and size of each cell:
* `colEnd` - column index where the current field should end. The amount of columns between colStart and colEnd will determine the amount of spanning columns to that field
* `rowEnd` - row index where the current field should end. The amount of rows between rowStart and rowEnd will determine the amount of spanning rows to that field
* `colStart` - column index from which the field is starting
* `rowStart` - row index from which the field is starting

```html
<igx-column-layout>
	<igx-column [rowStart]="1" [colStart]="1" [colEnd]="5" field="ContactName"></igx-column>
	<igx-column [rowStart]="1" [colStart]="5" field="ContactTitle"></igx-column>
	<igx-column [rowStart]="1" [colStart]="6" field="Country"></igx-column>
	<igx-column [rowStart]="2" [colStart]="1" [colEnd]="3" field="Phone"></igx-column>
	<igx-column [rowStart]="2" [colStart]="3" [colEnd]="5" field="City"></igx-column>
	<igx-column [rowStart]="2" [colStart]="5" [colEnd]="7" field="Address"></igx-column>
	<igx-column [rowStart]="3" [colStart]="1" field="CompanyName"></igx-column>
	<igx-column [rowStart]="3" [colStart]="2" field="PostalCode"></igx-column>
	<igx-column [rowStart]="3" [colStart]="3" [colEnd]="7" field="Fax"></igx-column>
</igx-column-layout>
```