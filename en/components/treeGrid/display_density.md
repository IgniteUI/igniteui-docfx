---
title:  Grid Display Density - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Data Grid control provides default cell templates for editable columns which are based on the data type of the column.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Component, Angular Grid, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, Grid Display Density
---

### Tree Grid Display Density

**IgxTreeGrid** design is based on [Material Design Guidelines](https://material.io/guidelines/material-design/introduction.html). We currently provide an option to choose between predefined set of display [density](https://material.io/design/layout/density.html#usage) options. By selecting the right density for your use case you can significantly improve the user experience when interacting with large amounts of content.


#### Demo



<div class="sample-container loading" style="height:620px">
    <iframe id="treegrid-displayDensity-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-display-density' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-displayDensity-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>



### Usage

As you can see in the demo above, the [**IgxTreeGrid**]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) provides three density options: **compact**, **cosy** and **comfortable**. The code snippet below shows how to set [`displayDensity`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#displaydensity):

```html
<igx-tree-grid #treeGrid [data]="data" [displayDensity]="'cosy'" >
</igx-tree-grid>
```
or
```typescript
...
this.treeGrid.displayDensity = "cosy";
...
```
And now let's see in details how each option reflects on the Tree Grid component. When you switch between different density options the height of each Tree Grid element and the corresponding paddings will be changed. Also if you want to apply custom column [**width**]({environment:angularApiUrl}/classes/igxcolumncomponent.html#width), please consider the fact that it must be bigger than the sum of left and right padding.
 - **comfortable** - this is the default Tree Grid display density with the lowest intense and row height equal to `50px`. Left and Right paddings are `24px`; Minimal column [`width`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#width) is `48px`;
 - **cosy** - this is the middle intense density with `40px` row height. Left and Right paddings are `16px`; Minimal column [`width`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#width) is `32px`;
 - **compact** - this is the density with highest intense and `32px` row height. Left and Right paddings are `12px`; Minimal column [`width`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#width) is `24px`;

> [!NOTE]
> Please keep in mind that currently you **can not** override any of the sizes.

Let's now continue with our sample and see in action how the [`displayDensity`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#displaydensity) is applied. Let's first add a button which will help us to switch between each density:

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
<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [displayDensity]="density" width="100%"
    height="550px" [allowFiltering]="true">
    <igx-column field="Name" dataType="string" [sortable]="true" [hasSummary]="true" width="200px"></igx-column>
    <igx-column-group [pinned]="false" header="General Information">
        <igx-column field="HireDate" dataType="date" [sortable]="true" [hasSummary]="true">
            <ng-template igxCell let-cell="cell" let-val>
                {{val | date:'dd/MM/yyyy'}}
            </ng-template>
        </igx-column>
        <igx-column-group header="Person Details">
            <igx-column field="ID" dataType="number" [filterable]="false"></igx-column>
            <igx-column field="Title" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
            <igx-column field="Age" dataType="number" [sortable]="true" [hasSummary]="true"
                [summaries]="numberSummaries" [filterable]="false"></igx-column>
        </igx-column-group>
    </igx-column-group>
    <igx-column-group header="Address Information">
        <igx-column-group header="Location">
            <igx-column field="Country" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
            <igx-column field="City" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
            <igx-column field="Address" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
        </igx-column-group>
        <igx-column-group header="Contact Information">
            <igx-column field="Phone" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
            <igx-column field="Fax" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
            <igx-column field="PostalCode" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
        </igx-column-group>
    </igx-column-group>
    <igx-column-group header="Address Information">
        <igx-column-group header="Location">
            <igx-column field="Country" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
            <igx-column field="City" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
            <igx-column field="Address" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
        </igx-column-group>
        <igx-column-group header="Contact Information">
            <igx-column field="Phone" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
            <igx-column field="Fax" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
            <igx-column field="PostalCode" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
        </igx-column-group>
    </igx-column-group>
</igx-tree-grid>
```



Finally, let's provide the necessary logic in order to actually apply the density:

```typescript
@ViewChild("treeGrid", { read: IgxTreeGridComponent })
public treeGrid: IgxTreeGridComponent;
.....
public selectDensity(event) {
    this.density = this.displayDensities[event.index].label;
}
```

Another option that [**IgxTreeGrid**]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) provides for you, in order to be able to change the height of the rows in the Tree Grid, is the property [`rowHeight`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#rowheight). So let's see in action how this property affects the Tree Grid layout along with the [`displayDensity`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#displaydensity) option.

Please keep in mind the following:
 - [`displayDensity`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#displaydensity) options will have **NO** impact on row height **if there is [rowHeight]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#rowheight) specified**;
 - [`displayDensity`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#displaydensity) will **affect all of the rest elements in the Tree Grid**, as it has been described above;

And now we can extend our sample and add [`rowHeight`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#rowheight) property to the Tree Grid:

 ```html
 <igx-tree-grid #treeGrid [data]="data" [displayDensity]="density" [rowHeight]="'80px'" width="100%" 
 height="550px" [allowFiltering]="true">
 ..............
 </igx-tree-grid>
 ```
<div class="divider--half"></div>

### API References

<div class="divider--half"></div>

* [IgxTreeGridComponent]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)
* [IgxTreeGridComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)

<div class="divider--half"></div>

### Additional Resources

* [Tree Grid overview](tree_grid.md)
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