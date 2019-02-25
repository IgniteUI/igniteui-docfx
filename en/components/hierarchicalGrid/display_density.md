---
title:  Grid Display Density - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Data Grid control provides default cell templates for editable columns which are based on the data type of the column.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Component, Angular Grid, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, Grid Display Density
---

### Hierarchical Grid Display Density

**IgxHierarchicalGrid** design is based on [Material Design Guidelines](https://material.io/guidelines/material-design/introduction.html). We currently provide an option to choose between predefined set of display [density](https://material.io/design/layout/density.html#usage) options. By selecting the right density for your use case you can significantly improve the user experience when interacting with large amounts of content.


#### Demo




<div class="sample-container loading" style="height:620px">
    <iframe id="hierarchicalgrid-displayDensity-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-density' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchicalgrid-displayDensity-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>


### Usage

As you can see in the demo above, the [**IgxHierarchicalGrid**]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html) provides three density options: **compact**, **cosy** and **comfortable**. The code snippet below shows how to set [`displayDensity`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#displaydensity):

```html
<igx-hierarchical-grid #hierarchicalGrid [data]="data" [displayDensity]="'cosy'" >
</igx-hierarchical-grid>
```
or
```typescript
...
this.hierarchicalGrid.displayDensity = "cosy";
...
```
And now let's see in details how each option reflects on the Hierarchical Grid component. When you switch between different density options the height of each Hierarchical Grid element and the corresponding paddings will be changed. Also if you want to apply custom column [**width**]({environment:angularApiUrl}/classes/igxcolumncomponent.html#width), please consider the fact that it must be bigger than the sum of left and right padding.
 - **comfortable** - this is the default Hierarchical Grid display density with the lowest intense and row height equal to `50px`. Left and Right paddings are `24px`; Minimal column [`width`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#width) is `48px`;
 - **cosy** - this is the middle intense density with `40px` row height. Left and Right paddings are `16px`; Minimal column [`width`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#width) is `32px`;
 - **compact** - this is the density with highest intense and `32px` row height. Left and Right paddings are `12px`; Minimal column [`width`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#width) is `24px`;

> [!NOTE]
> Please keep in mind that currently you **can not** override any of the sizes.

Let's now continue with our sample and see in action how the [`displayDensity`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#displaydensity) is applied. Let's first add a button which will help us to switch between each density:

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
<igx-hierarchical-grid #hGrid [data]="localdata" [height]="'600px'" [width]="'100%'" [allowFiltering]="true">
    <igx-column field="CustomerID"></igx-column>
    <igx-column field="CompanyName"></igx-column>
    <igx-column field="ContactName"></igx-column>
    <igx-column field="ContactTitle"></igx-column>
    <igx-column field="Address"></igx-column>
    <igx-column field="City"></igx-column>
    <igx-column field="PostalCode"></igx-column>
    <igx-column field="Country"></igx-column>
    <igx-column field="Phone"></igx-column>
    <igx-column field="Fax"></igx-column>

    <igx-row-island [key]="'Orders'" [autoGenerate]="false" #layout1 >
            <igx-column field="OrderID"></igx-column>
            <igx-column field="EmployeeID"></igx-column>
            <igx-column field="OrderDate"></igx-column>
            <igx-column field="RequiredDate"></igx-column>
            <igx-column field="ShippedDate"></igx-column>
            <igx-column field="ShipVia"></igx-column>
            <igx-column field="Freight"></igx-column>
            <igx-column field="ShipName"></igx-column>
            <igx-column field="ShipAddress"></igx-column>
            <igx-column field="ShipCity"></igx-column>
            <igx-column field="ShipPostalCode"></igx-column>
            <igx-column field="ShipCountry"></igx-column>
        <igx-row-island [key]="'OrderDetails'" [autoGenerate]="false">
                <igx-column field="ProductID"></igx-column>
                <igx-column field="UnitPrice"></igx-column>
                <igx-column field="Quantity"></igx-column>
                <igx-column field="Discount"></igx-column>
        </igx-row-island>
    </igx-row-island>

</igx-hierarchical-grid>
```


Finally, let's provide the necessary logic in order to actually apply the density:

```typescript
@ViewChild("hierarchicalGrid", { read: IgxHierarchicalGridComponent })
public hierarchicalGrid: IgxHierarchicalGridComponent;
.....
public selectDensity(event) {
    this.density = this.displayDensities[event.index].label;
}
```

Another option that [**IgxHierarchicalGrid**]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html) provides for you, in order to be able to change the height of the rows in the Hierarchical Grid, is the property [`rowHeight`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#rowheight). So let's see in action how this property affects the Hierarchical Grid layout along with the [`displayDensity`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#displaydensity) option.

Please keep in mind the following:
 - [`displayDensity`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#displaydensity) options will have **NO** impact on row height **if there is [rowHeight]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#rowheight) specified**;
 - [`displayDensity`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#displaydensity) will **affect all of the rest elements in the Hierarchical Grid**, as it has been described above;

And now we can extend our sample and add [`rowHeight`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#rowheight) property to the Hierarchical Grid:

 ```html
 <igx-hierarchical-grid #hierarchicalGrid [data]="data" [displayDensity]="density" [rowHeight]="'80px'" width="100%" 
 height="550px" [allowFiltering]="true">
 ..............
 </igx-hierarchical-grid>
 ```
<div class="divider--half"></div>

### API References

<div class="divider--half"></div>

* [IgxHierarchicalGridComponent]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html)
* [IgxHierarchicalGridComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)

<div class="divider--half"></div>

### Additional Resources

* [Hierarchical Grid overview](hierarchical_grid.md)
* [Virtualization and Performance](virtualization.md)
* [Editing](editing.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Pinning](column_pinning.md)
* [Column Resizing](column_resizing.md)
* [Selection](selection.md)
* [Searching](search.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)