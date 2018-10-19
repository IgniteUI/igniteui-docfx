---
title:  Grid Display Density - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Data Grid control provides default cell templates for editable columns which are based on the data type of the column.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Component, Angular Grid, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, Grid Display Density
_language: kr
---

### Grid Display Density

**Igx-Grid** design is based on [Material Design Guidelines](https://material.io/guidelines/material-design/introduction.html). We currently provide an option to choose between predefined set of display [density](https://material.io/design/layout/density.html#usage) options. By selecting the right density for your use case you can significantly improve the user experience when interacting with large amounts of content.

#### Demo

<div class="sample-container loading" style="height:620px">
    <iframe id="grid-displayDensity-sample-iframe" src='{environment:demosBaseUrl}/grid-displayDensity' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-displayDensity-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="divider--half"></div>

### Usage
As you can see in the demo above, the [**Igx-Grid**]({environment:angularApiUrl}/classes/igxgridcomponent.html) provides three density options: **compact**, **cosy** and **comfortable**. The code snippet below shows how to set [`displayDensity`]({environment:angularApiUrl}/classes/igxgridcomponent.html#displaydensity):

```html
<igx-grid #grid [data]="data" [displayDensity]="'cosy'" >
</igx-grid>
```
or
```typescript
...
this.grid.displayDensity = "cosy";
...
```

And now let's see in details how each option reflect on the grid component. When you switch between different density options the height of each grid element and the correcponding paddings will be changed. Also if you want to apply custom column [**width**]({environment:angularApiUrl}/classes/igxcolumncomponent.html#width), plaese consider the fact that it must be bigger than the sum of left and right padding.
 - **comfortable** - this is the default grid display density with the lowest intence and row height equal to `50px`. Left and Right paddings are `24px`; Minimal column [`width`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#width) is `48px`;
 - **cosy** - this is the middle intence density with `40px` row height. Left and Right paddings are `16px`; Minimal column [`width`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#width) is `32px`;
 - **compact** - this is the density with heighest intence and `32px` row height. left and Right paddings are `12px`; Minimal column [`width`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#width) is `24px`;

> [!NOTE]
> Please keep in mind that currently you **can not** override any of the sizes.

Let's now continue with our sample and see in action how the [`displayDensity`]({environment:angularApiUrl}/classes/igxgridcomponent.html#displaydensity) is applied. Let's first add a button which will help us to switch between each density:

```html
<div class="density-chooser">
    <igx-buttongroup [values]="displayDensities"></igx-buttongroup>
</div>
```

```typescript
@ViewChild(IgxButtonGroupComponent) public buttonGroup: IgxButtonGroupComponent;
public density = "compact";
public displayDensities;

public ngOnInit() {
    this.displayDensities = [
        {
            label: "compact",
            selected: this.density === "compact",
            togglable: true
        },
        {
            label: "cosy",
            selected: this.density === "cosy",
            togglable: true
        },
        {
            label: "comfortable",
            selected: this.density === "comfortable",
            togglable: true
        }
    ];
}
```

Now we can add the markup.


```html
<div class="density-chooser">
    <igx-buttongroup [values]="displayDensities" (onSelect)="selectDensity($event)"></igx-buttongroup>
</div>
<igx-grid #grid [data]="data" [displayDensity]="density" width="100%" height="550px">
    <igx-column-group  header="Customer Information">
    <igx-column field="CustomerName" header="Customer Name" [dataType]="'string'" [sortable]="true" [hasSummary]="true" [filterable]="true">
    </igx-column>
    <igx-column-group  header="Customer Address">
        <igx-column field="Country" header="Country" [dataType]="'string'" [sortable]="true" [hasSummary]="true" [filterable]="true">
        </igx-column>
        <igx-column field="City" header="City" [dataType]="'string'" [sortable]="true" [hasSummary]="true" [filterable]="true">
            </igx-column>
        <igx-column field="Address" header="Address" [dataType]="'string'" [sortable]="true" [hasSummary]="true" [filterable]="true">
        </igx-column>
        <igx-column field="PostalCode" header="Postal Code" [dataType]="'string'" [sortable]="true" [hasSummary]="true" [filterable]="true">
        </igx-column>
    </igx-column-group>
    </igx-column-group>
    <igx-column field="Salesperson" header="Sales Person" [dataType]="'string'" [sortable]="true" [hasSummary]="true"  [filterable]="true">
    </igx-column>
    <igx-column field="ShipperName" header="Shipper Name"  [dataType]="'string'" [sortable]="true" [hasSummary]="true"  [filterable]="true">
    </igx-column>
    <igx-column field="OrderDate" header="Order Date"  [dataType]="'date'" [sortable]="true" [hasSummary]="true" [filterable]="true">
        <ng-template igxCell let-cell="cell" let-val>
            {{val | date:'dd/MM/yyyy'}}
        </ng-template>
    </igx-column>
    <igx-column-group  header="Product Details">
        <igx-column field="ProductID" header="ID" [dataType]="'string'" [sortable]="true" [hasSummary]="true"  >
        </igx-column>
        <igx-column field="ProductName" header="Name" [dataType]="'string'" [sortable]="true" [hasSummary]="true"  >
        </igx-column>
        <igx-column field="UnitPrice" header="Unit Price" [dataType]="'number'" [sortable]="true" [hasSummary]="true"  >
        </igx-column>
        <igx-column field="Quantity" header="Quantity" [dataType]="'number'" [sortable]="true" [hasSummary]="true"  >
        </igx-column>
        <igx-column field="Discontinued" header="Discontinued" [dataType]="'boolean'" [sortable]="true" [hasSummary]="true" [filterable]="true">
        </igx-column>
    </igx-column-group>
    <igx-column-group  header="Shipping Information">
        <igx-column field="ShipName" header="Name" [dataType]="'string'" [sortable]="true" [hasSummary]="true" [filterable]="true">
        </igx-column>
        <igx-column-group  header="Shipping Address">
            <igx-column field="ShipCountry" header="Country" [dataType]="'string'" [sortable]="true" [hasSummary]="true" [filterable]="true">
            </igx-column>
            <igx-column field="ShipCity" header="City" [dataType]="'string'" [sortable]="true" [hasSummary]="true" [filterable]="true">
            </igx-column>
            <igx-column field="ShipPostalCode" header="Postal Code" [dataType]="'string'" [sortable]="true" [hasSummary]="true" [filterable]="true">
            </igx-column>
        </igx-column-group>
    </igx-column-group>
</igx-grid>
```

Finally, let's provide the necessary logic in order to actually apply the density:

```typescript
@ViewChild("grid", { read: IgxGridComponent })
public grid: IgxGridComponent;
.....
public selectDensity(event) {
    this.density = this.displayDensities[event.index].label;

}
```

Another option that [**Igx-Grid**]({environment:angularApiUrl}/classes/igxgridcomponent.html) provides for you, in order to be able to change the height of the rows in the grid, is the property [`rowHeight`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowheight). So let's see in action how this property affects the grid layout along with the [`displayDensity`]({environment:angularApiUrl}/classes/igxgridcomponent.html#displaydensity) option.

Please keep in mind the following:
 - [`displayDensity`]({environment:angularApiUrl}/classes/igxgridcomponent.html#displaydensity) options will have **NO** impact on row height **if there is [rowHeight]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowheight) specified**;
 - [`displayDensity`]({environment:angularApiUrl}/classes/igxgridcomponent.html#displaydensity) will **affect all of the rest elements in the grid**, as it has been described above;

And now we can extend our sample and add [`rowHeight`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowheight) property to the grid:
 ```html
 <igx-grid #grid [data]="data" [displayDensity]="density" [rowHeight]="'80px'" width="100%" height="550px">
 ..............
 </igx-grid>

 ```
<div class="divider--half"></div>

### API
<div class="divider--half"></div>

* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [IgxColumnComponent](https://staging.infragistics.local/products/ignite-ui-angular/docs/typescript/classes/igxcolumncomponent.html)

<div class="divider--half"></div>

### Additional Resources

* [Grid overview](grid.md)
* [Virtualization and Performance](grid_virtualization.md)
* [Editing](grid_editing.md)
* [Paging](grid_paging.md)
* [Filtering](grid_filtering.md)
* [Sorting](grid_sorting.md)
* [Summaries](grid_summaries.md)
* [Column Pinning](grid_column_pinning.md)
* [Column Resizing](grid_column_resizing.md)
* [Selection](grid_selection.md)
* [Searching](grid_search.md)