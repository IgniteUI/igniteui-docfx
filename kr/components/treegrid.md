---
title: Tree Grid Component
_description: The Ignite UI for Angular Tree Grid control features the fastest, touch-responsive data-rich grid with popular features.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Tree Grid component, Angular Tree Grid control, Angular Tree Grid component, Angular High Performance Tree Grid, Tree Grid
---

## Tree Grid

<p class="highlight">Displays and manipulates hierarchical data with consistent schema formatted as a table and provides a line of advanced features such as sorting, filtering, editing, column pinning, paging, column moving and hiding.</p>
<div class="divider"></div>

### Demo

<div class="sample-container loading" style="height:550px">
    <iframe id="treegrid-childdatakey-iframe" src='{environment:demosBaseUrl}/treegrid-childdatakey' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-childdatakey-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Getting started

The tree grid is exported as an `NgModule`, thus all you need to do in your application is to import the [`IgxTreeGridModule`]({environment:angularApiUrl}/classes/igxtreegridmodule.html) inside your `AppModule`:

```typescript
// app.module.ts

import { IgxTreeGridModule } from 'igniteui-angular';

@NgModule({
    imports: [
        ...
        IgxTreeGridModule,
        ...
    ]
})
export class AppModule {}
```

### Usage

The [`IgxTreeGridComponent`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) shares a lot of features with the [`IgxGridComponent`]({environment:angularApiUrl}/classes/igxgridcomponent.html), but it also adds the ability to display its data hierarchically.
In order to achieve this, the [`IgxTreeGridComponent`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) provides us with a couple of ways to define the relations among our data objects - by using a **child collection** for every data object or by using **primary and foreign keys** for every data object.

#### Tree cells

Regardless of which option is used for building the tree grid's hierarchy (child collection or primary & foreign keys), the tree grid's rows are constructed of two types of cells:

- [`IgxGridCellComponent`]({environment:angularApiUrl}/classes/igxgridcellcomponent.html) - Ordinary cell that contains a value.
- [`IgxTreeGridCellComponent`]({environment:angularApiUrl}/classes/igxtreegridcellcomponent.html) - Tree cell that contains a value, an expand/collapse indicator and an indentation div element, which is based on the indentation level of the cell/row. Both the tree cell and its respective tree row expose an [`indentation`]({environment:angularApiUrl}/classes/igxtreegridcellcomponent.html#indentation) property that returns the level of indentation.

> [!NOTE]
> Each row can have only one tree cell, but it can have multiple (or none) ordinary cells.

#### Initial Expand Depth

Initially the tree grid will expand all node levels and show them. This behavior can be configured using the [`expandedLevels`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#expandedlevels) property. By default its value is `Infinity` which means all node levels will be expanded. You may control the initial expanded levels by setting this property to a numeric value. For example `0` will show only root level nodes, `1` will show root level nodes and their child nodes and so on...

#### Child collection
When we are using the **child collection** option, every data object contains a child collection, that is populated with items of the same type as the parent data object. This way every record in our tree grid will have a direct reference to any of its children. In this case the [`data`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#data) property of our tree grid that contains the original data source will be a hierarchically defined collection.

For this sample, let's use the following collection structure:

```typescript
// Sample Employee Data

export const EMPLOYEE_DATA = [
    {        
        Name: "Johnathan Winchester",
        ID: 1,
        HireDate: new Date(2008, 3, 20),
        Age: 55,
        Employees: [
            {
                Name: "Michael Burke",
                ID: 3,                
                HireDate: new Date(2011, 6, 3),
                Age: 43,
                Employees: []
            },
            {
                Name: "Thomas Anderson"
                ID: 2,
                HireDate: new Date(2009, 6, 19),
                Age: 29,                
                Employees: []
            },
            ...
        ]
    },
    ...            
]
```

Now let's start by importing our data collection and binding it to the [`data`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#data) input of our tree grid.

```html
<!--treeGridSample.component.html-->

<igx-tree-grid #treeGrid [data]="localData">
</igx-tree-grid>
```

In order for the IgxTreeGridComponent to build the hierarchy, we will have to set its [`childDataKey`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#childdatakey) property to the name of the child collection that is used in each of our data objects. In our case that will be the **Employees** collection.
In addition, we will disable the automatic column generation and define them manually by matching them to the actual properties of our data objects. (The **Employees** collection will be automatically used for the hierarchy, so there is no need to include it in the columns' definitions.)

```html
<!--treeGridSample.component.html-->

<igx-tree-grid #treeGrid [data]="localData" childDataKey="Employees"
               [autoGenerate]="false">
    <igx-column field="Name" dataType="string"></igx-column>
    <igx-column field="ID" dataType="number"></igx-column>
    <igx-column field="HireDate" dataType="date"></igx-column>
    <igx-column field="Age" dataType="number"></igx-column>
</igx-tree-grid>
```

We will now enable the row selection and paging features of the tree grid by using the [`rowSelectable`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#rowselectable) and the [`paging`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#paging) properties.
We will also enable the filtering, sorting, editing, moving and resizing features for each of our columns.

```html
<!--treeGridSample.component.html-->

<igx-tree-grid #treeGrid [data]="localData" childDataKey="Employees"
               [autoGenerate]="false" [rowSelectable]="true" [paging]="true">
    <igx-column field="Name" dataType="string" [filterable]="true" [sortable]="true" [editable]="true" [movable]="true" [resizable]="true"></igx-column>
    <igx-column field="ID" dataType="number" [filterable]="true" [sortable]="true" [editable]="true" [movable]="true" [resizable]="true"></igx-column>
    <igx-column field="HireDate" dataType="date" [filterable]="true" [sortable]="true" [editable]="true" [movable]="true" [resizable]="true"></igx-column>
    <igx-column field="Age" dataType="number" [filterable]="true" [sortable]="true" [editable]="true" [movable]="true" [resizable]="true"></igx-column>
</igx-tree-grid>
```

Finally, we will enable the toolbar of our tree grid, along with the column hiding and the column pinning features by using the [`showToolbar`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#showtoolbar), [`columnHiding`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#columnhiding) and [`columnPinning`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#columnpinning) properties respectively.

```html
<!--treeGridSample.component.html-->

<igx-tree-grid #treeGrid [data]="localData" childDataKey="Employees"
               [autoGenerate]="false" [rowSelectable]="true" [paging]="true"
               [showToolbar]="true" toolbarTitle="Employees" [columnHiding]="true" [columnPinning]="true">
    <igx-column field="Name" dataType="string" [filterable]="true" [sortable]="true" [editable]="true" [movable]="true" [resizable]="true"></igx-column>
    <igx-column field="ID" dataType="number" [filterable]="true" [sortable]="true" [editable]="true" [movable]="true" [resizable]="true"></igx-column>
    <igx-column field="HireDate" dataType="date" [filterable]="true" [sortable]="true" [editable]="true" [movable]="true" [resizable]="true"></igx-column>
    <igx-column field="Age" dataType="number" [filterable]="true" [sortable]="true" [editable]="true" [movable]="true" [resizable]="true"></igx-column>
</igx-tree-grid>
```

You can see the result of the code from above at the beginning of this article in the [Demo](#demo) section.

#### Primary and Foreign keys
When we are using the **primary and foreign keys** option, every data object contains a primary key and a foreign key. The primary key is the unique identifier of the current data object and the foreign key is the unique identifier of its parent. In this case the [`data`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#data) property of our tree grid that contains the original data source will be a flat collection.

The following is an example of a component which contains a flat collection defined with primary and foreign keys relation:

```typescript
// treeGridSample.component.ts

@Component({
    ...
})
export class MyComponent implements OnInit {

    public data: any[];

    constructor() { }

    public ngOnInit() {
        // Primary and Foreign keys sample data
        this.data = [
            { ID: 1, ParentID: -1, Name: "Casey Houston", JobTitle: "Vice President", Age: 32 },
            { ID: 2, ParentID: 1, Name: "Gilberto Todd", JobTitle: "Director", Age: 41 },
            { ID: 3, ParentID: 2, Name: "Tanya Bennett", JobTitle: "Director", Age: 29 },
            { ID: 4, ParentID: 2, Name: "Jack Simon", JobTitle: "Software Developer", Age: 33 },
            { ID: 5, ParentID: 8, Name: "Celia Martinez", JobTitle: "Senior Software Developer", Age: 44 },
            { ID: 6, ParentID: -1, Name: "Erma Walsh", JobTitle: "CEO", Age: 52 },
            { ID: 7, ParentID: 2, Name: "Debra Morton", JobTitle: "Associate Software Developer", Age: 35 },
            { ID: 8, ParentID: 10, Name: "Erika Wells", JobTitle: "Software Development Team Lead", Age: 50 },
            { ID: 9, ParentID: 8, Name: "Leslie Hansen", JobTitle: "Associate Software Developer", Age: 28 },
            { ID: 10, ParentID: -1, Name: "Eduardo Ramirez", JobTitle: "Development Manager", Age: 53 }
        ];
    }
}
```

In the sample data above, all records have an ID, a ParentID and some additional properties like Name, JobTitle and Age. As mentioned previously, the ID of the records must be unique. The ParentID contains the ID of the parent node or **-1** if this is a root level node (node without a parent).

The parent-child relation is configured using the tree grid's [`primaryKey`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#primarykey) and [`foreignKey`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#foreignkey) properties.

Here is the template of the component which demonstrates how to configure the tree grid to display the data defined in the above flat collection:

```html
<!--treeGridSample.component.html-->

<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID"
    [autoGenerate]="false">
    <igx-column field="ID" dataType="number"></igx-column>
    <igx-column field="ParentID" dataType="number"></igx-column>
    <igx-column field="Name" dataType="string"></igx-column>
    <igx-column field="JobTitle" dataType="string"></igx-column>
    <igx-column field="Age" dataType="number"></igx-column>
</igx-tree-grid>
```

In addition we will enable the row selection feature of the tree grid by using the [`rowSelectable`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#rowselectable) property and also the filtering, sorting, editing, moving and resizing features for each of our columns.

```html
<!--treeGridSample.component.html-->

<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID"
    [autoGenerate]="false" [rowSelectable]="true">
    <igx-column field="ID" dataType="number" [filterable]="true" [sortable]="true" [editable]="true" [movable]="true" [resizable]="true"></igx-column>
    <igx-column field="ParentID" dataType="number" [filterable]="true" [sortable]="true" [editable]="true" [movable]="true" [resizable]="true"></igx-column>
    <igx-column field="Name" dataType="string" [filterable]="true" [sortable]="true" [editable]="true" [movable]="true" [resizable]="true"></igx-column>
    <igx-column field="JobTitle" dataType="string" [filterable]="true" [sortable]="true" [editable]="true" [movable]="true" [resizable]="true"></igx-column>
    <igx-column field="Age" dataType="number" [filterable]="true" [sortable]="true" [editable]="true" [movable]="true" [resizable]="true"></igx-column>
</igx-tree-grid>
```
 
And here is the final result:

<div class="sample-container loading" style="height:400px">
    <iframe id="treegrid-primaryforeignkey-iframe" src='{environment:demosBaseUrl}/treegrid-primaryforeignkey' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-primaryforeignkey-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

#### Persistence and Integration

The indentation of the **tree cells** persists across other tree grid features like filtering, sorting and paging.

- When **sorting** is applied on a column, the data rows get sorted by levels. This means that the root level rows will be sorted independently from their respective children. Their respective children collections will each be sorted independently as well and so on.
- The first column (the one that has a [`visibleIndex`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#visibleindex) of 0) is always the tree column.
- The column that ends up with a [`visibleIndex`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#visibleindex) of 0 after operations like column pinning, column hiding and column moving becomes the tree column.

<div class="divider--half"></div>

### Known Limitations

|Limitation|Description|
|--- |--- |
|Templating Tree Cells|When templating a tree cell, content that spans outside the boundaries of the cell will not be shown unless positioned in an overlay.|

<div class="divider--half"></div>

### API References

* [`IgxTreeGridModule`]({environment:angularApiUrl}/classes/igxtreegridmodule.html)
* [`IgxTreeGridComponent`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)
* [`IgxTreeGridComponent Styles`]({environment:sassApiUrl}/#function-igx-tree-grid-theme)
* [`IgxTreeGridCellComponent`]({environment:angularApiUrl}/classes/igxtreegridcellcomponent.html)
* [`IgxTreeGridRowComponent`]({environment:angularApiUrl}/classes/igxtreegridrowcomponent.html)
* [`IgxGridComponent`]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [`IgxGridComponent Styles`]({environment:sassApiUrl}/#function-igx-grid-theme)
* [`IgxGridCellComponent`]({environment:angularApiUrl}/classes/igxgridcellcomponent.html)
* [`IgxGridRowComponent`]({environment:angularApiUrl}/classes/igxgridrowcomponent.html)


### Additional Resources

<div class="divider--half"></div>

* [Data Grid](grid.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
