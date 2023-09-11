@@if (igxName === 'IgxGrid') {
---
title:  Angular Grid Size - Ignite UI for Angular
_description: Learn how to apply size capabilities to the Data grid component. You can use a set of compact view options in the Ignite UI for Angular.
_keywords: material density, size, igniteui for angular, infragistics
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title:  Angular Grid Size - Ignite UI for Angular
_description: Learn how to apply size capabilities to the Tree grid component. You can use a set of compact view options in the Ignite UI for Angular.
_keywords: material density, size igniteui for angular, infragistics
_canonicalLink: grid/display-density
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title:  Angular Grid Size - Ignite UI for Angular
_description: Learn how to apply size capabilities to the Hierarchical grid component. You can use a set of compact view options in the Ignite UI for Angular.
_keywords: material density, size, igniteui for angular, infragistics
_canonicalLink: grid/display-density
---
}

# Angular @@igComponent Size

**@@igxName** design is based on [Material Design Guidelines](https://material.io/design). We currently provide an option to choose between predefined set of size options that will bring a small, medium, or large view respectively. By selecting the right size for your Material UI table / Material UI grid you can significantly improve the user experience when interacting with large amounts of content.


## Angular @@igComponent Size Example

@@if (igxName === 'IgxGrid') {

<code-view style="height:620px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-displayDensity" alt="Angular @@igComponent Size Example">
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:620px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-display-density" alt="Angular @@igComponent Size Example">
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:680px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-density" alt="Angular @@igComponent Size Example">
</code-view>

<div class="divider--half"></div>
}

## Usage

As you can see in the demo above, the [**@@igxName**]({environment:angularApiUrl}/classes/@@igTypeDoc.html) provides three size options: **small**, **medium** and **large**. The code snippet below shows how to set size:

```html
<@@igSelector #@@igObjectRef [data]="data" style="--ig-size: var(--ig-size-small)">
</@@igSelector>
```

And now let's see in details how each option reflects on the @@igComponent component. When you switch between different sizes the height of each @@igComponent element and the corresponding paddings will be changed. Also if you want to apply custom column [**width**]({environment:angularApiUrl}/classes/igxcolumncomponent.html#width), please consider the fact that it must be bigger than the sum of left and right padding.
 - **--ig-size-large** - this is the default @@igComponent size with the lowest intense and row height equal to `50px`. Left and Right paddings are `24px`; Minimal column [`width`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#width) is `80px`;
 - **--ig-size-medium** - this is the middle size with `40px` row height. Left and Right paddings are `16px`; Minimal column [`width`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#width) is `64px`;
 - **--ig-size-small** - this is the smallest size with `32px` row height. Left and Right paddings are `12px`; Minimal column [`width`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#width) is `56px`;

> [!NOTE]
> Please keep in mind that currently you **can not** override any of the sizes.

Let's now continue with our sample and see in action how each size is applied. Let's first add a button which will help us to switch between each size:

```html
<div class="density-chooser">
    <igx-buttongroup [values]="sizes"></igx-buttongroup>
</div>
```

```typescript
@ViewChild(IgxButtonGroupComponent) public buttonGroup: IgxButtonGroupComponent;
public size = 'small';
public sizes;

public ngOnInit() {
    this.sizes = [
        {
            label: 'small',
            selected: this.size === 'small',
            togglable: true
        },
        {
            label: 'medium',
            selected: this.sie === 'medium',
            togglable: true
        },
        {
            label: 'large',
            selected: this.size === 'large',
            togglable: true
        }
    ];
}
```

Now we can add the markup.

@@if (igxName === 'IgxGrid') {
```html
<div class="density-chooser">
    <igx-buttongroup [values]="sizes" (selected)="selectSize($event)"></igx-buttongroup>
</div>
<igx-grid #grid [data]="data" width="100%" height="550px" [allowFiltering]="true">
    <igx-column-group  header="Customer Information">
    <igx-column field="CustomerName" header="Customer Name" [dataType]="'string'" [sortable]="true" [hasSummary]="true">
    </igx-column>
    <igx-column-group  header="Customer Address">
        <igx-column field="Country" header="Country" [dataType]="'string'" [sortable]="true" [hasSummary]="true">
        </igx-column>
        <igx-column field="City" header="City" [dataType]="'string'" [sortable]="true" [hasSummary]="true">
            </igx-column>
        <igx-column field="Address" header="Address" [dataType]="'string'" [sortable]="true" [hasSummary]="true">
        </igx-column>
        <igx-column field="PostalCode" header="Postal Code" [dataType]="'string'" [sortable]="true" [hasSummary]="true">
        </igx-column>
    </igx-column-group>
    </igx-column-group>
    <igx-column field="Salesperson" header="Sales Person" [dataType]="'string'" [sortable]="true" [hasSummary]="true">
    </igx-column>
    <igx-column field="ShipperName" header="Shipper Name"  [dataType]="'string'" [sortable]="true" [hasSummary]="true">
    </igx-column>
    <igx-column field="OrderDate" header="Order Date"  [dataType]="'date'" [sortable]="true" [hasSummary]="true">
        <ng-template igxCell let-cell="cell" let-val>
            {{val | date:'dd/MM/yyyy'}}
        </ng-template>
    </igx-column>
    <igx-column-group  header="Product Details">
        <igx-column field="ProductID" header="ID" [dataType]="'string'" [sortable]="true" [hasSummary]="true" [filterable]="false">
        </igx-column>
        <igx-column field="ProductName" header="Name" [dataType]="'string'" [sortable]="true" [hasSummary]="true" [filterable]="false">
        </igx-column>
        <igx-column field="UnitPrice" header="Unit Price" [dataType]="'number'" [sortable]="true" [hasSummary]="true" [filterable]="false">
        </igx-column>
        <igx-column field="Quantity" header="Quantity" [dataType]="'number'" [sortable]="true" [hasSummary]="true" [filterable]="false">
        </igx-column>
        <igx-column field="Discontinued" header="Discontinued" [dataType]="'boolean'" [sortable]="true" [hasSummary]="true" >
        </igx-column>
    </igx-column-group>
    <igx-column-group  header="Shipping Information">
        <igx-column field="ShipName" header="Name" [dataType]="'string'" [sortable]="true" [hasSummary]="true" >
        </igx-column>
        <igx-column-group  header="Shipping Address">
            <igx-column field="ShipCountry" header="Country" [dataType]="'string'" [sortable]="true" [hasSummary]="true" >
            </igx-column>
            <igx-column field="ShipCity" header="City" [dataType]="'string'" [sortable]="true" [hasSummary]="true" >
            </igx-column>
            <igx-column field="ShipPostalCode" header="Postal Code" [dataType]="'string'" [sortable]="true" [hasSummary]="true" >
            </igx-column>
        </igx-column-group>
    </igx-column-group>
</igx-grid>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<div class="density-chooser">
    <igx-buttongroup [values]="sizes" (selected)="selectSize($event)"></igx-buttongroup>
</div>
<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" width="100%"
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
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<div class="density-chooser">
    <igx-buttongroup [values]="sizes" (selected)="selectSize($event)"></igx-buttongroup>
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
}

Finally, let's provide the necessary logic in order to actually apply the size:

```typescript
@ViewChild('@@igObjectRef', { read: @@igxNameComponent })
public @@igObjectRef: @@igxNameComponent;

public selectSize(event) {
    this.renderer.setStyle(this, '--ig-size', `var(--ig-size-${[event.index].label})`, RendererStyleFlags2.DashCase);
}
```

Another option that [**@@igxName**]({environment:angularApiUrl}/classes/@@igTypeDoc.html) provides for you, in order to be able to change the height of the rows in the @@igComponent, is the property [`rowHeight`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowheight). So let's see in action how this property affects the @@igComponent layout along with the `--ig-size` CSS variable.

Please keep in mind the following:
 - `--ig-size` CSS variable will have **NO** impact on row height **if there is [rowHeight]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowheight) specified**;
 - `--ig-size` will **affect all of the rest elements in the @@igComponent**, as it has been described above;

And now we can extend our sample and add [`rowHeight`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowHeight) property to the @@igComponent:

 ```html
 <@@igSelector #@@igObjectRef [data]="data" [rowHeight]="'80px'" width="100%" 
 height="550px" [allowFiltering]="true">
 ..............
 </@@igSelector>
 ```
<div class="divider--half"></div>

## API References

<div class="divider--half"></div>

* [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent Styles]({environment:sassApiUrl}/index.html#function-grid-theme)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)

<div class="divider--half"></div>

## Additional Resources

* [@@igComponent overview](@@igMainTopic.md)
* [Virtualization and Performance](virtualization.md)
* [Editing](editing.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Pinning](column-pinning.md)
* [Column Resizing](column-resizing.md)
* [Selection](selection.md)
@@if (igxName !== 'IgxHierarchicalGrid') {* [Searching](search.md)}

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
