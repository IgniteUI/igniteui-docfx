---
title: Angular Tree Grid | Fastest Angular Tree Table | Infragistics
_description: The Ignite UI for Angular Tree Grid is used to display and manipulate hierarchical or flat data with ease. Quickly bind your data with very little coding. Try it for FREE
_keywords: angular data grid, igniteui for angular, infragistics
---

# Angular Tree Grid Overview and Configuration

The Ignite UI for Angular Tree Grid is used to display and manipulate hierarchical or flat data with ease. Quickly bind your data with very little code or use a variety of events to customize different behaviors. This component provides a rich set of features like data selection, excel style filtering, sorting, paging, templating and column moving. Displaying of tabular data has never been easier and beautiful thanks to the Material Table-based UI Tree Grid.


## Angular Tree Grid Example

In this example, you can see how users can manipulate hierarchical or flat data. We have included filtering and sorting options, pinning and hiding, row selection, export to excel and csv, and cell templating that uses our [Sparkline](../sparkline.md) component. In addition, you can see an example of custom pagination with [Angular Pagination](paging.md).


<div class="sample-container loading" style="height:850px">
    <iframe id="treegrid-childdatakey-iframe" src='{environment:lobDemosBaseUrl}/tree-grid/treegrid-childdatakey' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);" alt="Angular tree grid example"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-childdatakey-iframe" data-demos-base-url="{environment:lobDemosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-childdatakey-iframe" data-demos-base-url="{environment:lobDemosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>


## Getting Started with Ignite UI for Angular Tree Grid

To get started with the tree grid, first you need to install Ignite UI for Angular by typing the following command:

```cmd
ng add igniteui-angular
```
For a complete introduction to the Ignite UI for Angular, read the [*getting started*](../general/getting-started.md) topic.

The tree grid is exported as an `NgModule`, thus all you need to do in your application is to import the `IgxTreeGridModule` inside your `AppModule`:

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

## Usage

>[!NOTE]
>**This component requires [`HammerModule`](https://angular.io/api/platform-browser/HammerModule) to be imported in the root module of the application in order for touch interactions to work as expected.**.

The [`IgxTreeGridComponent`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) shares a lot of features with the [`IgxGridComponent`]({environment:angularApiUrl}/classes/igxgridcomponent.html), but it also adds the ability to display its data hierarchically.
In order to achieve this, the [`IgxTreeGridComponent`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) provides us with a couple of ways to define the relations among our data objects - by using a [child collection](#child-collection) for every data object or by using [primary and foreign keys](#primary-and-foreign-keys) for every data object.

### Tree Cells

Regardless of which option is used for building the tree grid's hierarchy (child collection or primary and foreign keys), the tree grid's rows are constructed of two types of cells:

- [`IgxGridCellComponent`]({environment:angularApiUrl}/classes/igxgridcellcomponent.html) - Ordinary cell that contains a value.
- [`IgxTreeGridCellComponent`]({environment:angularApiUrl}/classes/igxtreegridcellcomponent.html) - Tree cell that contains a value, an expand/collapse indicator and an indentation div element, which is based on the level of the cell's row. The level of a row component can be accessed through the [`level`]({environment:angularApiUrl}/interfaces/itreegridrecord.html#level) property of its inner [`treeRow`]({environment:angularApiUrl}/classes/igxtreegridrowcomponent.html#treerow).

> [!NOTE]
> Each row can have only one tree cell, but it can have multiple (or none) ordinary cells.

### Initial Expansion Depth

Initially the tree grid will expand all node levels and show them. This behavior can be configured using the [`expansionDepth`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#expansiondepth) property. By default its value is **Infinity** which means all node levels will be expanded. You may control the initial expansion depth by setting this property to a numeric value. For example **0** will show only root level nodes, **1** will show root level nodes and their child nodes and so on.

### Child Collection
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
    <igx-column field="HireDate" dataType="date"></igx-column>
    <igx-column field="Age" dataType="number"></igx-column>
</igx-tree-grid>
```

We will now enable the row selection and paging features of the tree grid by using the [`rowSelectable`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#rowselectable) and the [`paging`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#paging) properties.
We will also enable the summaries feature on the first column and the filtering, sorting, editing, moving and resizing features for each of our columns.

```html
<!--treeGridSample.component.html-->

<igx-tree-grid #treeGrid [data]="localData" childDataKey="Employees"
               [autoGenerate]="false" [rowSelectable]="true" [paging]="true" [allowFiltering]="true">
    <igx-column field="Name" dataType="string" [sortable]="true" [editable]="true" [movable]="true" [resizable]="true"
                [hasSummary]="true"></igx-column>
    <igx-column field="HireDate" dataType="date" [sortable]="true" [editable]="true" [movable]="true" [resizable]="true"></igx-column>
    <igx-column field="Age" dataType="number" [sortable]="true" [editable]="true" [movable]="true" [resizable]="true"></igx-column>
</igx-tree-grid>
```

Finally, we will enable the toolbar of our tree grid, along with the column hiding, column pinning and exporting features by using the [`showToolbar`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#showtoolbar), [`columnHiding`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#columnhiding), [`columnPinning`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#columnpinning), [`exportExcel`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#exportexcel) and [`exportCsv`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#exportcsv) properties respectively.

```html
<!--treeGridSample.component.html-->

<igx-tree-grid #treeGrid [data]="localData" childDataKey="Employees"
               [autoGenerate]="false" [rowSelectable]="true" [paging]="true" [allowFiltering]="true"
               [showToolbar]="true" toolbarTitle="Employees" [columnHiding]="true" [columnPinning]="true"
               [exportExcel]="true" [exportCsv]="true" exportExcelText="To Excel" exportCsvText="To CSV">
    <igx-column field="Name" dataType="string" [sortable]="true" [editable]="true" [movable]="true" [resizable]="true"></igx-column>
    <igx-column field="HireDate" dataType="date" [sortable]="true" [editable]="true" [movable]="true" [resizable]="true"></igx-column>
    <igx-column field="Age" dataType="number" [sortable]="true" [editable]="true" [movable]="true" [resizable]="true"></igx-column>
</igx-tree-grid>
```

You can see the result of the code from above at the beginning of this article in the [Demo](#demo) section.

### Primary and Foreign keys
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

In the sample data above, all records have an ID, a ParentID and some additional properties like Name, JobTitle and Age. As mentioned previously, the ID of the records must be unique. The ParentID contains the ID of the parent node. If a row has a ParentID that does not match any row in the tree grid, then that means this row is a root row.

The parent-child relation is configured using the tree grid's [`primaryKey`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#primarykey) and [`foreignKey`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#foreignkey) properties.

Here is the template of the component which demonstrates how to configure the tree grid to display the data defined in the above flat collection:

```html
<!--treeGridSample.component.html-->

<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID"
    [autoGenerate]="false">
    <igx-column field="Name" dataType="string"></igx-column>
    <igx-column field="JobTitle" dataType="string"></igx-column>
    <igx-column field="Age" dataType="number"></igx-column>
</igx-tree-grid>
```

In addition we will enable the row selection feature of the tree grid by using the [`rowSelectable`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#rowselectable) property and also the filtering, sorting, editing, moving and resizing features for each of our columns.

```html
<!--treeGridSample.component.html-->

<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID"
    [autoGenerate]="false" [rowSelectable]="true" [allowFiltering]="true">
    <igx-column field="Name" dataType="string" [sortable]="true" [editable]="true" [movable]="true" [resizable]="true"></igx-column>
    <igx-column field="JobTitle" dataType="string" [sortable]="true" [editable]="true" [movable]="true" [resizable]="true"></igx-column>
    <igx-column field="Age" dataType="number" [sortable]="true" [editable]="true" [movable]="true" [resizable]="true"></igx-column>
</igx-tree-grid>
```

And here is the final result:

<div class="sample-container loading" style="height:450px">
    <iframe id="treegrid-primaryforeignkey-iframe" data-src='{environment:lobDemosBaseUrl}/tree-grid/treegrid-primaryforeignkey' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-primaryforeignkey-iframe" data-demos-base-url="{environment:lobDemosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-primaryforeignkey-iframe" data-demos-base-url="{environment:lobDemosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

## Persistence and Integration

The indentation of the **tree cells** persists across other tree grid features like filtering, sorting and paging.

- When **sorting** is applied on a column, the data rows get sorted by levels. This means that the root level rows will be sorted independently from their respective children. Their respective children collections will each be sorted independently as well and so on.
- The first column (the one that has a [`visibleIndex`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#visibleindex) of 0) is always the tree column.
- The column that ends up with a [`visibleIndex`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#visibleindex) of 0 after operations like column pinning, column hiding and column moving becomes the tree column.
- Exported Excel worksheets reflect the hierarchy by grouping the records as they are grouped in the tree grid itself. All records expanded states would also be persisted and reflected.
- When exporting to CSV, levels and expanded states are ignored and all data is exported as flat.

<div class="divider--half"></div>

## Angular Tree Grid Sizing

See the [Grid Sizing](sizing.md) topic.

## Angular Tree Grid Styling

The Tree Grid allows styling through the [Ignite UI for Angular Theme Library](../themes/component-themes.md). The tree grid's [theme]({environment:sassApiUrl}/index.html#function-igx-grid-theme) exposes a wide variety of properties, which allows the customization of all the tree grid's features.

To get started with styling the Tree Grid, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`igx-grid-theme`]({environment:sassApiUrl}/index.html#function-igx-grid-theme) and accepts the parameters, required to customize the tree grid as desired.

>[!NOTE]
>There is no specific `sass` tree grid function.

```scss
$custom-theme: igx-grid-theme(
  $cell-active-border-color: #FFCD0F,
  $cell-selected-background: #6F6F6F,
  $row-hover-background: #F8E495,
  $row-selected-background: #8D8D8D,
  $header-background: #494949,
  $header-text-color: #FFF,
  $expand-icon-color: #FFCD0F,
  $expand-icon-hover-color: #E0B710,
  $resize-line-color: #FFCD0F,
  $row-highlight: #FFCD0F
);
```

The last step is to **include** the component theme in our application.

```scss
@include igx-grid($custom-theme);
```

>[!NOTE]
>If the component is using an [`Emulated`](../themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:

```scss
:host {
    ::ng-deep {
        @include igx-grid($custom-theme);
    }
}
```


### Defining a Color Palette

Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) and [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) functions.

`igx-palette` generates a color palette based on the primary and secondary colors that are passed:

```scss
$yellow-color: #FFCD0F;
$black-color: #494949;
$custom-palette: igx-palette($primary: $black-color, $secondary: $yellow-color);
```

And then with [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) we can easily retrieve color from the palette. 

```scss
$custom-theme: igx-grid-theme(
    $cell-active-border-color: igx-color($custom-palette, "secondary", 500),
    $cell-selected-background: igx-color($custom-palette, "primary", 300),
    $row-hover-background: igx-color($custom-palette, "secondary", 100),
    $row-selected-background: igx-color($custom-palette, "primary", 100),
    $header-background: igx-color($custom-palette, "primary", 500),
    $header-text-color: igx-contrast-color($custom-palette, "primary", 500),
    $expand-icon-color: igx-color($custom-palette, "secondary", 500),
    $expand-icon-hover-color: igx-color($custom-palette, "secondary", 600),
    $resize-line-color: igx-color($custom-palette, "secondary", 500),
    $row-highlight: igx-color($custom-palette, "secondary", 500)
);
```

### Using Schemas

Going further with the theming engine, you can build a robust and flexible structure that benefits from [**schemas**](../themes/schemas.md). A **schema** is a recipe of a theme.

Extend one of the two predefined schemas, that are provided for every component, in this case - [`light-grid`]({environment:sassApiUrl}/index.html#variable-_light-grid) schema:

```scss
// Extending the light tree grid schema
$custom-grid-schema: extend($_light-grid, (
    cell-active-border-color: (igx-color:('secondary', 500)),
    cell-selected-background: (igx-color:('primary', 300)),
    row-hover-background: (igx-color:('secondary', 100)),
    row-selected-background: (igx-color:('primary', 100)),
    header-background: (igx-color:('primary', 500)),
    header-text-color: (igx-contrast-color:('primary', 500)),
    expand-icon-color: (igx-color:('secondary', 500)),
    expand-icon-hover-color: (igx-color:('secondary', 600)),
    resize-line-color: (igx-color:('secondary', 500)),
    row-highlight: (igx-color:('secondary', 500))
));
```

In order to apply our custom schemas we have to **extend** one of the globals ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) or [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)), which is basically pointing out the components with a custom schema, and after that add it to the respective component themes:

```scss
// Extending the global light-schema
$my-custom-schema: extend($light-schema, (
    igx-grid: $custom-grid-schema
));

// Defining grid-theme with the global light schema
$custom-theme: igx-grid-theme(
    $palette: $custom-palette,
    $schema: $my-custom-schema
); 
```

Don't forget to include the themes in the same way as it was demonstrated above.

### Angular Tree Grid Styling Demo

<div class="sample-container loading" style="height:600px">
    <iframe id="tree-grid-styling" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-style' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming" alt="Angular tree grid styling demo"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="tree-grid-styling" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-styling" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

## Known Limitations

|Limitation|Description|
|--- |--- |
|Templating Tree Cells|When templating a tree cell, content that spans outside the boundaries of the cell will not be shown unless positioned in an overlay.|
|Group By|Group By feature is not supported, because it is inherent to the tree grid.|

> [!NOTE]
> The tree grid has a depth limit of 25 levels. Supporting more levels requires adding custom CSS classes in the application. You may see an example of such CSS class below:

```scss
.igx-grid__tree-cell--padding-level-26 {
    padding-left: 39rem;
}
```

> [!NOTE]
> `igxTreeGrid` uses `igxForOf` directive internally hence all `igxForOf` limitations are valid for `igxTreeGrid`. For more details see [igxForOf Known Issues](../for-of.html#known-limitations) section.

<div class="divider--half"></div>

## API References

<div class="divider--half"></div>

* [IgxTreeGridComponent]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)
* [IgxTreeGridCellComponent]({environment:angularApiUrl}/classes/igxtreegridcellcomponent.html)
* [IgxTreeGridRowComponent]({environment:angularApiUrl}/classes/igxtreegridrowcomponent.html)
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent Styles]({environment:sassApiUrl}/#function-igx-grid-theme)
* [IgxGridCellComponent]({environment:angularApiUrl}/classes/igxgridcellcomponent.html)
* [IgxGridRowComponent]({environment:angularApiUrl}/classes/igxgridrowcomponent.html)
* [IgxBaseTransactionService]({environment:angularApiUrl}/classes/igxbasetransactionservice.html)


## Additional Resources

<div class="divider--half"></div>

* [Grid Sizing](sizing.md)
* [Data Grid](../grid/grid.md)
* [Row Editing](row-editing.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
