---
title: Column Hiding Component – Native Angular | Ignite UI for Angular
_description: Column hiding with the Ignite UI for Angular Column Hiding component allows the users hide and show columns by using a built-in UI of the Data Grid.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, grid column hiding, column hiding, angular grid column hiding, angular column hiding
---

### Grid Column Hiding

The Ignite UI for Angular Data Grid provides a **Column Hiding** component, which allows users to hide and show columns directly through the **UI**. The Data Grid has a built-in column hiding UI, which can be used through the grid's toolbar. In addition, developers can always define the column hiding UI as a separate component and place it anywhere they want on the page.

#### Demo

<div class="sample-container loading" style="height:650px">
    <iframe id="grid-column-hiding-toolbar-sample-iframe" src='{environment:demosBaseUrl}/grid-column-hiding-toolbar-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="grid-column-hiding-toolbar-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Grid setup
Let's start by creating our grid and binding it to our data. We will also enable both filtering and sorting for the columns.

```html
<!--columnHiding.component.html-->

<igx-grid #grid id="grid" [data]="data" [autoGenerate]="false" width="100%" height="560px" columnWidth="200px">
    <igx-column [field]="'ID'" dataType="string" [filterable]="true" [sortable]="true"></igx-column>
    <igx-column [field]="'ContactName'" dataType="string" [filterable]="true" [sortable]="true"></igx-column>
    <igx-column [field]="'ContactTitle'" dataType="string" [filterable]="true" [sortable]="true"></igx-column>
    <igx-column [field]="'City'" dataType="string" [filterable]="true" [sortable]="true"></igx-column>
    <igx-column [field]="'CompanyName'" dataType="string" [filterable]="true" [sortable]="true"></igx-column>
    <igx-column [field]="'Fax'" dataType="string" [filterable]="true" [sortable]="true"></igx-column>
    <igx-column [field]="'Address'" dataType="string" [filterable]="true" [sortable]="true"></igx-column>
    <igx-column [field]="'PostalCode'" dataType="string" [filterable]="true" [sortable]="true"></igx-column>
    <igx-column [field]="'Country'" dataType="string" [filterable]="true" [sortable]="true"></igx-column>
    <igx-column [field]="'Phone'" dataType="string" [filterable]="true" [sortable]="true"></igx-column>
</igx-grid>
```

### Toolbar's Column Hiding UI

The built-in Column Hiding UI is placed inside an `IgxDropDownComponent` in the grid's toolbar. We can show/hide the Column Hiding UI by using this exact dropdown.
For this purpose all we have to do is set both the `showToolbar` and the `columnHiding` properties of the grid to true. If the toolbar is not enabled, enabling the `columnHiding` property will have no effect.
We will also add a title to our toolbar by using the `toolbarTitle` property and a custom style for our grid's wrapper.

```html
<!--columnHiding.component.html-->

<div class="grid__wrapper">
    <igx-grid ... [showToolbar]="true" [columnHiding]="true" toolbarTitle="Employees">
        ...
    </igx-grid>
</div>
```

```css
/* columnHiding.component.css */

.grid__wrapper {
    margin: 20px 150px 0px 150px;
}

```

The grid provides us with some useful properties when it comes to using the toolbar's column hiding UI.
By using the `columnHidingTitle` and the `hiddenColumnsText` properties, we will set the title and the text that is displayed inside the dropdown button in the toolbar. More specifically, the `hiddenColumnsText` is displayed right next to the columns count number, which is included by default in the button.
The `hiddenColumnsText` property is quite handy since it can be used for localization purposes as well.

```html
<!--columnHiding.component.html-->

<div class="grid__wrapper">
    <igx-grid ... [showToolbar]="true" [columnHiding]="true" toolbarTitle="Employees" columnHidingTitle="Column Hiding" hiddenColumnsText="Hidden">
        ...
    </igx-grid>
</div>
```

By using the `columnsAreaMaxHeight` property of the column hiding UI, we can set the maximum height of the area that contains the columns. This way if we have a lot of columns and not all of them can fit in the container, a scrollbar will appear, which will allow us to navigate to any column we want by keeping the search input pinned at the top and the show/hide all buttons at the bottom.

```typescript
// columnHiding.component.ts

public ngAfterViewInit() {        
    this.grid.toolbar.columnHidingUI.columnsAreaMaxHeight = "200px";
}
```

In order to use the expanded set of functionalities for the column hiding UI, we can use the toolbar's `columnHidingUI` property, which returns a reference to the column hiding UI component itself. This way we can access its respective API and use it according to our application's requirements.

You can see the result of the code from above at the beginning of this article in the [Column Hiding Demo](#demo) section.

### Custom Column Hiding UI

Let's say we want to manually define our **IgxColumnHidingComponent** and put it anywhere we want on our page. This can be easily done by simply creating an instance of the component in our markup. In order to do this, let's first grab the **IgxColumnHiding** module.

```typescript
// app.module.ts

...
import {
    ...
    IgxColumnHidingModule 
} from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxColumnHidingModule],
})
export class AppModule {}
```

Now let's create our IgxColumnHidingComponent! In our application, we will place it next to the grid (which is not the case with the toolbar's column hiding UI, where the component is inside a dropdown by design). We will also set the `columns` property of the component to the columns of our grid and include some custom styles to make our application look even better!

```html
<!--columnHiding.component.html-->

<div class="columnHidingContainer">
    <igx-column-hiding #columnHidingUI id="columnHidingUI" [columns]="grid.columns">
    </igx-column-hiding>
</div>
<div class="gridContainer">
    <igx-grid #grid id="grid" [data]="data" [autoGenerate]="false" width="100%" height="500px" columnWidth="200px">
        ...
    </igx-grid>
</div>
```


```css
/* columnHiding.component.css */

.grid__wrapper {
    margin: 15px;
    display: flex;
    flex-direction: row;
}

.columnHidingContainer {
    width: 350px;
    height: 560px;
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
    border: 1px gray;
    border-radius: 10px;
    box-shadow: 1px 1px 2px 2px rgba(50, 50, 50, 0.25);
    igx-column-hiding {
        height: 100%;
    }
}

.columnsOrderOptionsContainer {
    margin-top: 20px;
    margin-bottom: 20px;
}

.gridContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 30px;
}
```

#### Add title and filter prompt

A couple more things we can do in order to enrich the user experience of our column hiding component is to set the `title` and the `filterColumnsPrompt` properties! The `title` is displayed on the top and the `filterColumnsPrompt` is the prompt text that is displayed in the filter input of our column hiding UI.

```html
<!--columnHiding.component.html-->

<div class="columnHidingContainer">
    <igx-column-hiding #columnHidingUI id="columnHidingUI" [columns]="grid.columns"
                       title="Column Hiding" filterColumnsPrompt="Type here to search">
    </igx-column-hiding>
</div>
```

#### Add column display order options

We can also allow the user to choose the display order of the columns in the column hiding UI. For this purpose we will use the `columnDisplayOrder` property, which is an enumeration type property and has the following options:

- **Alphabetical** (order the columns alphabetically)
- **DisplayOrder** (order the columns according to the way they are displayed in the grid)

Let's create a couple of nicely designed radio buttons for our options! We just have to go ahead and get the [**IgxRadio**](https://www.infragistics.com/products/ignite-ui-angular/angular/components/radio_button.html) module.

```typescript
// app.module.ts

...
import {
    ...
    IgxRadioModule    
} from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxRadioModule],    
})
export class AppModule {}
```

Now by creating an enum property of the same type as the `ColumnDisplayOrder` enumeration, all we have to do is bind the **checked** property of both radio buttons respectively with different conditions and handle their click events.

```typescript
// columnHiding.component.ts

public columnsOrder = ColumnDisplayOrder;
```

```html
<!--columnHiding.component.html-->

<div class="columnHidingContainer">
    ...
    <div class="columnsOrderOptionsContainer">
        <igx-radio [checked]="columnHidingUI.columnDisplayOrder === columnsOrder.Alphabetical"
                   (click)="columnHidingUI.columnDisplayOrder = columnsOrder.Alphabetical">
            Alphabetical order
        </igx-radio>
        <igx-radio [checked]="columnHidingUI.columnDisplayOrder === columnsOrder.DisplayOrder"
                   (click)="columnHidingUI.columnDisplayOrder = columnsOrder.DisplayOrder">
            Display order
        </igx-radio>
    </div>
</div>
```

#### Disable hiding of a column
We can easily prevent the user from being able to hide columns through the column hiding UI by simply setting their `disableHiding` property to true.

```html
<!--columnHiding.component.html-->

<div class="gridContainer">
    <igx-grid ... >
        ...
        <igx-column [field]="'ContactName'" dataType="string" [filterable]="true" [sortable]="true" [disableHiding]="true"></igx-column>
        <igx-column [field]="'ContactTitle'" dataType="string" [filterable]="true" [sortable]="true" [disableHiding]="true"></igx-column>
        ...
    </igx-grid>
</div>
```

If all went well, this is how our column hiding UI component should look like:

<div class="sample-container loading" style="height:650px">
    <iframe id="grid-column-hiding-sample-iframe" src='{environment:demosBaseUrl}/grid-column-hiding-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="grid-column-hiding-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>


### API Summary

In this article we learned how to use the built-in column hiding UI in the grid's toolbar and we defined it as a separate component as well. We introduced a UI that allows the user to choose between different column orders and we set our own custom title and filter prompt texts. We also used an additional Ignite UI for Angular component - the **IgxRadio** button.
The column hiding UI has a few more APIs to explore, which are listed below.


#### Properties
The following properties are available on the **IgxColumnHidingComponent**:
| Name | Type | Description |
| :--- | :--- | :--- |
| `columns` | Object Array | The array of grid columns that will be manipulated. |
| `columnDisplayOrder` | ColumnDisplayOrder enumeration | Whether the columns should be sorted Alphabetically or displayed in the order they appear in the grid. |
| `title` | string | The title to be displayed. |
| `filterColumnsPrompt` | string | The prompt to be displayed in the filter input. |
| `filterCriteria` | string | The value to filter the columns list by. |
| `disableHideAll` | boolean | 	Returns whether the Hide All button will be disabled. |
| `disableShowAll` | boolean | Returns whether the Show All button will be disabled. |
| `showAllText` | string | The text to be displayed inside the Show All button. |
| `hideAllText` | string | The text to be displayed inside the Hide All button. |
| `columnsAreaMaxHeight` | string | The maximum height of the area of the Column Hiding UI that contains the columns. |

<div class="divider"></div>

The following properties are available on the **IgxGridComponent**:
| Name | Type | Description |
| :--- | :--- | :--- |
| `columnHiding` | boolean | Whether the built-in column hiding UI for the grid is enabled. |
| `columnHidingTitle` | string | The title to be displayed of the built-in column hiding UI. |
| `hiddenColumnsCount` | number | The number of hidden columns. |
| `hiddenColumnsText` | string | The text to be displayed inside the toggle button for the built-in column hiding UI. |

<div class="divider"></div>

The following properties are available on the **IgxColumnComponent**:
| Name | Type | Description |
| :--- | :--- | :--- |
| `disableHiding` | boolean | Determines whether the column cannot be hidden through the column hiding UI. |

<div class="divider"></div>

The following properties are available on the **IgxGridToolbarComponent**:
| Name | Type | Description |
| :--- | :--- | :--- |
| `columnHidingUI` | IgxColumnHidingComponent | Reference to the built-in column hiding UI component. |
| `columnHidingDropdown` | IgxDropDownComponent | Reference to the dropdown, that contains the built-in column hiding UI component. |

<div class="divider"></div>


#### Methods
The following methods are available on the **IgxColumnHidingComponent**:
| Name | Type | Parameters |Description |
| :--- | :--- | :--- | :--- |
| `showAllColumns` | void | N/A | Shows all columns in the grid. |
| `hideAllColumns` | void | N/A | Hides all columns in the grid. |

<div class="divider"></div>

The following methods are available on the **IgxGridToolbarComponent**:
| Name | Type | Parameters |Description |
| :--- | :--- | :--- | :--- |
| `toggleColumnHidingUI` | void | N/A | Shows/Hides the built-in column hiding UI. |

<div class="divider"></div>

#### Outputs
The following outputs are available on the **IgxColumnHidingComponent**:
|Name|Description|
|--- |--- |
| `onColumnVisibilityChanged` | Emitted when a column visibility has changed. Args: `{ column: any, newValue: boolean }` |

<div class="divider"></div>

The following outputs are available on the **IgxGridComponent**:
|Name|Description|
|--- |--- |
| `onColumnVisibilityChanged` | Emitted when a column visibility has changed. Args: `{ column: any, newValue: boolean }` |


### Additional Resources
<div class="divider--half"></div>

* [Grid overview](grid.md)
* [Virtualization and Performance](grid_virtualization.md)
* [Filtering](grid_filtering.md)
* [Paging](grid_paging.md)
* [Sorting](grid_sorting.md)
* [Summaries](grid_summaries.md)
* [Column Pinning](grid_column_pinning.md)
* [Column Resizing](grid_column_resizing.md)
* [Selection](grid_selection.md)
* [Searching](grid_search.md)
* [Export to Excel](exporter_excel.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
