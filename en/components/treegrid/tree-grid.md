---
title: Angular Tree Grid | Fastest Angular Tree Table | Infragistics
_description: The Ignite UI for Angular Tree Grid is used to display and manipulate hierarchical or flat data with ease. Quickly bind your data with very little coding. Try it for FREE
_keywords: angular tree grid, angular tree table, angular tree grid component, angular tree table component, angular ui components, igniteui for angular, infragistics
---

# Angular Tree Grid Component Overview

The Ignite UI for Angular Tree Grid is used to display and manipulate hierarchical or flat self-referencing data. Quickly bind your data with very little code or use a variety of events to customize different behaviors. This component provides a rich set of features like data selection, excel style filtering, sorting, paging, grouping, templating, column moving, column pinning, export to Excel and CSV, and more.

## Angular Tree Grid Example

In this example, you can see how users can display hierarchical data. We have included filtering and sorting options, pinning and hiding, row selection, export to excel and csv, and cell templating that uses our [Sparkline](../charts/types/sparkline-chart.md) component. In addition, you can see an example of custom pagination with [Angular Pagination](paging.md).

<code-view style="height:850px"
           data-demos-base-url="{environment:lobDemosBaseUrl}"
           iframe-src="{environment:lobDemosBaseUrl}/tree-grid/treegrid-childdatakey" alt="Angular tree grid example">
</code-view>

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Tree Grid

To get started with the Ignite UI for Angular Tree Grid component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](../general/getting-started.md) topic.

The next step is to import the `IgxTreeGridModule` in your **app.module.ts** file.

```typescript
// app.module.ts

import { IgxTreeGridModule } from 'igniteui-angular';
// import { IgxTreeGridModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    imports: [
        ...
        IgxTreeGridModule,
        ...
    ]
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxTreeGridComponent` as a standalone dependency, or use the [`IGX_TREE_GRID_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/grids/tree-grid/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

import { IGX_TREE_GRID_DIRECTIVES } from 'igniteui-angular';
// import { IGX_TREE_GRID_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: '<igx-tree-grid [data]="data"></igx-tree-grid>',
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_TREE_GRID_DIRECTIVES]
    /* or imports: [IgxTreeGridComponent] */
})
export class HomeComponent {
    public data: Employee [];
}
```

Now that you have the Ignite UI for Angular Tree Grid module or directives imported, you can start using the `igx-tree-grid` component.

## Using the Angular Tree Grid

>[!NOTE]
>**This component can utilize the [`HammerModule`](https://angular.io/api/platform-browser/HammerModule) **optionally**. It can be imported in the root module of the application in order for touch interactions to work as expected.**.

The [`IgxTreeGridComponent`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) shares a lot of features with the [`IgxGridComponent`]({environment:angularApiUrl}/classes/igxgridcomponent.html), but it also adds the ability to display its data hierarchically.
In order to achieve this, the [`IgxTreeGridComponent`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) provides us with a couple of ways to define the relations among our data objects - by using a [child collection](#child-collection) for every data object or by using [primary and foreign keys](#primary-and-foreign-keys) for every data object.

### Tree Cells

Regardless of which option is used for building the tree grid's hierarchy (child collection or primary and foreign keys), the tree grid's rows are constructed of two types of cells:

- [`IgxGridCell`]({environment:angularApiUrl}/classes/igxgridcell.html) - Ordinary cell that contains a value.
- [`IgxGridCell`]({environment:angularApiUrl}/classes/igxgridcell.html) - Tree cell that contains a value, an expand/collapse indicator and an indentation div element, which is based on the level of the cell's row. The level of a row component can be accessed through the [`level`]({environment:angularApiUrl}/interfaces/itreegridrecord.html#level) property of its inner [`treeRow`]({environment:angularApiUrl}/classes/igxtreegridrow.html#treeRow).

> [!NOTE]
> Each row can have only one tree cell, but it can have multiple (or none) ordinary cells.

### Initial Expansion Depth

Initially the tree grid will expand all node levels and show them. This behavior can be configured using the [`expansionDepth`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#expansionDepth) property. By default its value is **Infinity** which means all node levels will be expanded. You may control the initial expansion depth by setting this property to a numeric value. For example **0** will show only root level nodes, **1** will show root level nodes and their child nodes and so on.

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

We will now enable the row selection and paging features of the tree grid by using the [`rowSelection`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowSelection) and the [`paging`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#paging) properties.
We will also enable the summaries feature on the first column and the filtering, sorting, editing, moving and resizing features for each of our columns.

```html
<!--treeGridSample.component.html-->

<igx-tree-grid #treeGrid [data]="localData" childDataKey="Employees"
               [autoGenerate]="false" [rowSelection]="'multiple'" [allowFiltering]="true" [moving]="true">
    <igx-column field="Name" dataType="string" [sortable]="true" [editable]="true" [resizable]="true"
                [hasSummary]="true"></igx-column>
    <igx-column field="HireDate" dataType="date" [sortable]="true" [editable]="true" [resizable]="true"></igx-column>
    <igx-column field="Age" dataType="number" [sortable]="true" [editable]="true" [resizable]="true"></igx-column>
    <igx-paginator>
    </igx-paginator>
</igx-tree-grid>
```

Finally, we will enable the toolbar of our tree grid, along with the column hiding, column pinning and exporting features by using the [`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html), [`IgxGridToolbarHidingComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarhidingcomponent.html), [`IgxGridToolbarPinningComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarpinningcomponent.html) and [`IgxGridToolbarExporterComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarexportercomponent.html) respectively.

```html
<!--treeGridSample.component.html-->

<igx-tree-grid #treeGrid [data]="localData" childDataKey="Employees"
               [autoGenerate]="false" [rowSelection]="'multiple'" [allowFiltering]="true" [moving]="true">
    <igx-grid-toolbar>
            <igx-grid-toolbar-title>Employees</igx-grid-toolbar-title>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
                <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>
                <igx-grid-toolbar-exporter></igx-grid-toolbar-exporter>
            </igx-grid-toolbar-actions>
    </igx-grid-toolbar>
    <igx-column field="Name" dataType="string" [sortable]="true" [editable]="true" [resizable]="true"></igx-column>
    <igx-column field="HireDate" dataType="date" [sortable]="true" [editable]="true" [resizable]="true"></igx-column>
    <igx-column field="Age" dataType="number" [sortable]="true" [editable]="true" [resizable]="true"></igx-column>
    <igx-paginator [perPage]="6">
    </igx-paginator>
</igx-tree-grid>
```

You can see the result of the code from above at the beginning of this article in the [Angular Tree Grid Example](#angular-tree-grid-example) section.

### Primary and Foreign keys

When we are using the **primary and foreign keys** option, every data object contains a primary key and a foreign key. The primary key is the unique identifier of the current data object and the foreign key is the unique identifier of its parent. In this case the [`data`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#data) property of our tree grid that contains the original data source will be a flat collection.

The following is an example of a component which contains a flat collection defined with primary and foreign keys relation:

```typescript
// treeGridSample.component.ts

@Component({...})
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

The parent-child relation is configured using the tree grid's [`primaryKey`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#primaryKey) and [`foreignKey`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#foreignKey) properties.

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

In addition we will enable the row selection feature of the tree grid by using the [`rowSelection`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowSelection) property and also the filtering, sorting, editing, moving and resizing features for each of our columns.

```html
<!--treeGridSample.component.html-->

<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID"
    [autoGenerate]="false" [rowSelection]="'multiple'" [allowFiltering]="true" [moving]="true">
    <igx-column field="Name" dataType="string" [sortable]="true" [editable]="true" [resizable]="true"></igx-column>
    <igx-column field="JobTitle" dataType="string" [sortable]="true" [editable]="true" [resizable]="true"></igx-column>
    <igx-column field="Age" dataType="number" [sortable]="true" [editable]="true" [resizable]="true"></igx-column>
</igx-tree-grid>
```

And here is the final result:

<code-view style="height:450px"
           data-demos-base-url="{environment:lobDemosBaseUrl}"
           iframe-src="{environment:lobDemosBaseUrl}/tree-grid/treegrid-primaryforeignkey" >
<div class="divider--half"></div>

## Persistence and Integration

The indentation of the **tree cells** persists across other tree grid features like filtering, sorting and paging.

- When **sorting** is applied on a column, the data rows get sorted by levels. This means that the root level rows will be sorted independently from their respective children. Their respective children collections will each be sorted independently as well and so on.
- The first column (the one that has a [`visibleIndex`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#visibleIndex) of 0) is always the tree column.
- The column that ends up with a [`visibleIndex`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#visibleIndex) of 0 after operations like column pinning, column hiding and column moving becomes the tree column.
- Exported Excel worksheets reflect the hierarchy by grouping the records as they are grouped in the tree grid itself. All records expanded states would also be persisted and reflected.
- When exporting to CSV, levels and expanded states are ignored and all data is exported as flat.

<div class="divider--half"></div>

## Angular Tree Grid Sizing

See the [Grid Sizing](sizing.md) topic.

## Styling

The Tree Grid allows styling through the [`Ignite UI for Angular Theme Library`](../themes/sass/component-themes.md). The tree grid's [`grid-theme`]({environment:sassApiUrl}/themes#function-grid-theme) exposes a wide variety of properties, which allows the customization of all the tree grid's features.

To get started with styling the Tree Grid, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`grid-theme`]({environment:sassApiUrl}/themes#function-grid-theme) and accepts the parameters, required to customize the tree grid as desired.

>[!NOTE]
>There is no specific `sass` tree grid function.

```scss
$custom-theme: grid-theme(
  $cell-active-border-color: #ffcd0f,
  $cell-selected-background: #6f6f6f,
  $row-hover-background: #f8e495,
  $row-selected-background: #8d8d8d,
  $header-background: #494949,
  $header-text-color: #fff,
  $expand-icon-color: #ffcd0f,
  $expand-icon-hover-color: #e0b710,
  $resize-line-color: #ffcd0f,
  $row-highlight: #ffcd0f
);
```

>[!NOTE]
>Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`palette`]({environment:sassApiUrl}/palettes#function-palette) and [`color`]({environment:sassApiUrl}/palettes#function-color) functions. Please refer to [`Palettes`](../themes/sass/palettes.md) topic for detailed guidance on how to use them.

The last step is to **include** the component theme in our application.

```scss
@include css-vars($custom-theme);
```

### Angular Tree Grid Styling Demo


<code-view style="height:600px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-style/" alt="Angular tree grid styling demo">
</code-view>

>[!NOTE]
>The sample will not be affected by the selected global theme from `Change Theme`.

<div class="divider--half"></div>

## Performance (Experimental)

The `igxTreeGrid`'s design allows it to take advantage of the Event Coalescing feature that has Angular introduced. This feature allows for improved performance with roughly around **`20%`** in terms of interactions and responsiveness. This feature can be enabled on application level by simply setting the `ngZoneEventCoalescing` and `ngZoneRunCoalescing` properties to `true` in the `bootstrapModule` method:

```typescript
platformBrowserDynamic()
  .bootstrapModule(AppModule, { ngZoneEventCoalescing: true, ngZoneRunCoalescing: true })
  .catch(err => console.error(err));
```

>[!NOTE]
> This is still in experimental feature for the `igxTreeGrid`. This means that there might be some unexpected behaviors in the Tree Grid. In case of encountering any such behavior, please contact us on our [Github](https://github.com/IgniteUI/igniteui-angular/discussions) page.

>[!NOTE]
> Enabling it can affects other parts of an Angular application that the `igxTreeGrid` is not related to.

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
> `igxTreeGrid` uses `igxForOf` directive internally hence all `igxForOf` limitations are valid for `igxTreeGrid`. For more details see [igxForOf Known Issues](../for-of.md#known-limitations) section.

<div class="divider--half"></div>

## API References

<div class="divider--half"></div>

- [IgxTreeGridComponent]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)
- [IgxGridCell]({environment:angularApiUrl}/classes/igxgridcell.html)
- [IgxTreeGridRow]({environment:angularApiUrl}/classes/igxtreegridrow.html)
- [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
- [IgxGridComponent Styles]({environment:sassApiUrl}/themes#function-grid-theme)
- [IgxBaseTransactionService]({environment:angularApiUrl}/classes/igxbasetransactionservice.html)

## Theming Dependencies

- [IgxIcon Theme]({environment:sassApiUrl}/themes#function-icon-theme)
- [IgxInputGroup Theme]({environment:sassApiUrl}/themes#function-input-group-theme)
- [IgxChip Theme]({environment:sassApiUrl}/themes#function-chip-theme)
- [IgxRipple Theme]({environment:sassApiUrl}/themes#function-ripple-theme)
- [IgxButton Theme]({environment:sassApiUrl}/themes#function-button-theme)
- [IgxOverlay Theme]({environment:sassApiUrl}/themes#function-overlay-theme)
- [IgxDropDown Theme]({environment:sassApiUrl}/themes#function-drop-down-theme)
- [IgxCalendar Theme]({environment:sassApiUrl}/themes#function-calendar-theme)
- [IgxSnackBar Theme]({environment:sassApiUrl}/themes#function-snackbar-theme)
- [IgxBadge Theme]({environment:sassApiUrl}/themes#function-badge-theme)


## Additional Resources

<div class="divider--half"></div>

- [Grid Sizing](sizing.md)
- [Data Grid](../grid/grid.md)
- [Row Editing](row-editing.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
