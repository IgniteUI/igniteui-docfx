---
title: Angular Data Grid | Build Fast Angular Tables | Infragistics
_description: Create super fast, responsive Angular data grids and tables with Ignite UI for Angular. Supports  editing, filtering, data binding and many more. Try it now!
_keywords: angular data grid, angular grid component, angular data grid component, angular table component, angular data table component, angular table, angular UI components, ignite ui for angular
---

<style>
.sample-content {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
}

.sample-column {
    display: flex;
    flex-flow: column nowrap;
    flex: 1 0 25%;
    align-content: flex-start;
    min-width: 280px;
}

.tabbar-wrapper {
    width: inherit;
    position: relative;
    height: 100%;
    margin: 0 auto;
}

.tabbar-wrapper > p {
    padding-right: 20px
}
</style>

# Angular Data Grid Component Overview

<div class="sample-content">
    <article class="sample-column">
        <div class="tabbar-wrapper">
            <p>The Angular Data Grid is a component for displaying data in a tabular format. Modern grids are complex and are usually packed with a large set of features like data selection, excel style filtering, sorting, paging, grouping, templating, column moving, column pinning, exporting to Excel, CSV formats and more. </p>
            <p>Ignite UI Angular Data Grid covers all of these basic Grid features, but also advanced features like batch editing, state persistence, keyboard navigations and more. Ensuring seamless integration with various data sources, our component offers the best performance and scalability, making it ideal for apps handling large datasets or those requiring real-time updates fast.</p>
        </div>
    </article>
    <article class="sample-column">
        <div class="tabbar-wrapper">
            <div class="tab-content">
                <img class="b-lazy responsive-img"
                    src="../../images/general/landing-grid-page.png" 
                    data-src="../../images/general/landing-grid-page.png" 
                    data-srcset="../../images/general/landing-grid-page.png 480w, ../../images/general/landing-grid-page.png 768w, ../../images/general/landing-grid-page.png 1100w" 
                    alt="Angular Data Grid"
                    title="Angular Data Grid">
                </div>
        </div>
    </article>
</div>

## Angular Data Grid Example

Boston Marathon 2021 – In this angular grid example, you can see how users can do both basic and excel-style filtering, live-data sorting, as well as using of grid summaries and cell templating that includes our [Sparkline](../charts/types/sparkline-chart.md) component,
[Circular Progress Indicator](../circular-progress.md) component, and [Icons](../icon.md). The demo also includes  custom paging and per page usage part of the [Angular Pagination](paging.md).


<code-view style="height:700px"
           data-demos-base-url="{environment:lobDemosBaseUrl}"
           img-src="https://static.infragistics.com/marketing/Website/products/Ignite-UI-for-Angular/ignite-ui-angular-marathon-app"
           iframe-src="{environment:lobDemosBaseUrl}/grid/grid" alt="Angular data grid example">
</code-view>

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Data Grid

>[!NOTE]
>**This component can utilize the [`HammerModule`](https://angular.io/api/platform-browser/HammerModule) **optionally**. It can be imported in the root module of the application in order for touch interactions to work as expected.**.

To get started with the Ignite UI for Angular Data Grid component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [*getting started*](../general/getting-started.md) topic.

The next step is to import the `IgxGridModule` in your **app.module.ts** file.

```typescript
// app.module.ts

import { IgxGridModule } from 'igniteui-angular';
// import { IgxGridModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    imports: [
        ...
        IgxGridModule,
        ...
    ]
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxGridComponent` as a standalone dependency, or use the [`IGX_GRID_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/grids/grid/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

import { IGX_GRID_DIRECTIVES } from 'igniteui-angular';
// import { IGX_GRID_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: '<igx-grid [data]="localData" [autoGenerate]="true"></igx-grid>',
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_GRID_DIRECTIVES]
    /* or imports: [IgxGridComponent] */
})
export class HomeComponent {
    public data: Product [];
}
```

Now that you have the Ignite UI for Angular Grid module or directives imported, you can start using the `igx-grid` component.

## Using the Angular Data Grid

```html
<igx-grid #grid1 id="grid1" [data]="localData" [autoGenerate]="true"></igx-grid>
```

The **data** property binds the grid, in this case to local array of objects.

The [`autoGenerate`]({environment:angularApiUrl}/classes/igxgridcomponent.html#autoGenerate) property tells the `igx-grid` to auto generate the grid's [`IgxColumnComponent`s]({environment:angularApiUrl}/classes/igxcolumncomponent.html) based on the data source fields. It will also try to deduce the appropriate data type for the column if possible. Developers can also explicitly [define the columns](#angular-grid-column-configuration) and the mapping to the data source fields.

## Angular Bootstrap Grid Definition
<p>Ignite UI for Angular includes a powerful bootstrap grid like flex-based layout system. Any modern application today is expected to follow a responsive web design approach, meaning it can gracefully adjust layout of HTML elements based on the device size, or from simply resizing the browser. An Angular bootstrap grid layout was the most used approach in the past, but a flex-based layout system like CSS grid has become more popular, as it works in any browser. The Ignite UI for Angular Layout Directive allows vertical and horizontal flow, including content / text wrapping, justification, and alignment. The Ignite UI for Angular grid supports a responsive layout using CSS, giving you the ultimate flexibility in how the grid behaves on resize. </p>

## Angular Grid Styling Configuration
> [!NOTE]
> The [`IgxGridComponent`]({environment:angularApiUrl}/classes/igxgridcomponent.html) uses **css grid layout**, which is **not supported in IE without prefixing**, consequently it will not render properly.

In [**Angular**](https://angular.io/) most of the styles are prefixed implicitly thanks to the [Autoprefixer](https://www.npmjs.com/package/autoprefixer) plugin.

For prefixing **grid layouts** however, you need to enable the [Autoprefixer](https://www.npmjs.com/package/autoprefixer) **grid property** with the comment `/* autoprefixer grid:on */`.

To facilitate your work, apply the comment in the `src/styles.scss` file.

 ```scss
// src/styles.scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
@include core();
/* autoprefixer grid:on */
@include theme($default-palette);
 ```

## Editable Grid Angular
<p>Each operation for Angular grid editing includes Batch operations, meaning the API gives you the option to group edits into a single server call, or you can perform grid edit / update operations as they occur with grid interactions. Along with a great developer experience as an editable Angular grid with CRUD operations, the Angular grid includes Excel-like keyboard navigation. Common default grid navigation is included, plus the option to override any navigation option to meet the needs of your customers. An editable grid in Angular with a great navigation scheme is critical to any modern line of business application, with the Ignite UI grid we make it easy.</p>

Following this topic you will learn more about [cell template](grid.md#cell-template) and [cell editing template](grid.md#cell-editing-template) and editing.

## Angular Grid Column Configuration

[`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) is used to define the grid's [`columns`]({environment:angularApiUrl}/classes/igxgridcomponent.html#columns) collection and to enable features per column like **sorting** and **filtering**. Cell, header, and footer templates are also available.

### Defining Columns

Let's turn the [`autoGenerate`]({environment:angularApiUrl}/classes/igxgridcomponent.html#autoGenerate) property off and define the columns collection in the markup:

```html
<igx-grid #grid1 [data]="data | async" [autoGenerate]="false" (columnInit)="initColumns($event)"
    (selected)="selectCell($event)" [allowFiltering]="true">
    <igx-column field="Name" [sortable]="true" header=" "></igx-column>
    <igx-column field="AthleteNumber" [sortable]="true" header="Athlete number" [filterable]="false"></igx-column>
    <igx-column field="TrackProgress" header="Track progress" [filterable]="false">
        <ng-template igxCell let-value>
            <igx-linear-bar [stripped]="false" [value]="value" [max]="100"></igx-linear-bar>
        </ng-template>
    </igx-column>
    <igx-paginator [perPage]="6">
    </igx-paginator>
</igx-grid>
```

Each of the columns of the grid can be templated separately. The column expects `ng-template` Angular grid module directives.

It also expose [`additionalTemplateContext`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#additionalTemplateContext) input that can be used for custom properties and any type of data context that you want to pass to the column itself:

```html
<igx-column [additionalTemplateContext]="contextObject">
    <ng-template igxCell let-cell="cell" let-props="additionalTemplateContext">
        {{ props.firstProperty }}
    </ng-template>
</igx-column>
```

```ts
public contextObject = { firstProperty: 'testValue', secondProperty: 'testValue1'};
```

### Header Template

`igxHeader` targets the column header providing as a context the column object itself.

```html
...
<igx-column field="Name">
    <ng-template igxHeader let-column>
        {{ column.field | uppercase }}
    </ng-template>
</igx-column>
...
```

>[!NOTE]
>Whenever a header template is used along with grouping/moving functionality the *column header area* becomes **draggable** and you cannot access the custom elements part of the header template until you mark them as **not draggable**. Example below.

```html
<igx-column #col field="ProductName" header="Product Name"
    [groupable]="true" [hasSummary]="true">
    <ng-template igxHeader let-col>
        <div class="text">{{col.field}}</div>
        <igx-icon (click)="toggleSummary(col)" [attr.draggable]="false">functions
        </igx-icon>
    </ng-template>
</igx-column>
```
As you can see, we are adding **draggable** attribute set to *false*.

### Cell Template

`igxCell` applies the provided template to all cells in the column. The context object provided in the template consists of the cell value provided implicitly and the cell object itself. It can be used to define a template where the cells can grow according to their content, as in the below example.

```html
...
<igx-column field="Name">
    <ng-template igxCell let-value>
        {{ value | titlecase }}
    </ng-template>
</igx-column>
...
```

In the snippet above we "take" a reference to the implicitly provided cell value. This is sufficient if you just want to present some data and maybe apply some custom styling or pipe transforms over the value of the cell. However even more useful is to take the [`CellType`]({environment:angularApiUrl}/interfaces/celltype.html) instance itself as shown below:

```html
<igx-grid #grid [data]="data">
    <igx-column dataType="string" field="Name">
        <ng-template igxCell let-cell="cell">
            <!-- Implement row deleting inside the cell template itself -->
            <span tabindex="0" (keydown.delete)="grid.deleteRow(cell.row.index)">{{ cell.value | titlecase }}</span>
        </ng-template>
    </igx-column>
    <igx-column dataType="boolean" field="Subscribtion">
        <ng-template igxCell let-cell="cell">
            <!-- Bind the cell value through the ngModel directive and update the data source when the value is changed in the template -->
            <input type="checkbox" [ngModel]="cell.value" (ngModelChange)="cell.update($event)" />
        </ng-template>
    </igx-column>
<igx-grid>
```

When changing data through the **cell template** using `ngModel`, you need to call the appropriate API methods to make sure the value is correctly updated in the Angular grid's underlying data collection. In the snippet above, the `ngModelChange` call passes through the grid's [editing API](cell-editing.md#editing-through-api) and goes through the grid's editing pipeline, properly triggering [transactions](batch-editing.md)(if applicable) and handling of [summaries](summaries.md), [selection](selection.md), etc. However, this `ngModelChange` will fire every time the value of the cell changes, not just when the user is done editing, resulting in a lot more API calls.

> [!NOTE]
> The grid exposes a default handling for number, string, date and boolean column types. For example, the column will display `check` or `close` icon, instead of true/false by default, for boolean column type.

If the data in a cell is bound with `[(ngModel)]` and the value change is not handled, the new value will **not** be properly updated in the Angular grid's underlying data source. When dealing with cell editing with a custom template, it is strongly advised to use the cell's **cell editing template**.

When properly implemented, the cell editing template also ensures that the cell's `editValue` will correctly pass through the grid [editing event cycle](editing.md#event-arguments-and-sequence).

### Cell Editing Template

The column also accepts one last template that will be used when a cell is in edit mode. As with the other column templates, the provided context object is again the cell value and the cell object itself. Of course in order to make the edit-mode template accessible to end users, you need
to set the [`editable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#editable) property of the [`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) to `true`.

```html
<igx-column dataType="number" editable="true" field="Price">
    <ng-template igxCellEditor let-cell="cell">
        <label for="price">
            Enter the new price tag
        </label>
        <input name="price" type="number" [(ngModel)]="cell.editValue" />
    </ng-template>
</igx-column>
```

Make sure to check the API for the [`CellType`]({environment:angularApiUrl}/interfaces/celltype.html) in order to get accustomed with the provided properties you can use in your templates.

### Column Template API

Each of the column templates can be changed programmatically at any point through the [`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) object itself. For example in the code below, we have declared two templates for our user data. In our TypeScript code we'll get references to the templates themselves and then based on some condition we will render the appropriate template for the column in our application.

```html
<igx-grid>
    <!-- Column declarations -->
</igx-grid>

<ng-template #normalView let-value>
    <div class="user-details">{{ val }}</div>
    <user-details-component></user-details-component>
</ng-template>

<ng-template #smallView let-value>
    <div class="user-details-small">{{ val }}</div>
</ng-template>
```

```typescript
@ViewChild("normalView", { read: TemplateRef })
public normalView: TemplateRef<any>;

@ViewChild("smallView", { read: TemplateRef })
public smallView: TemplateRef<any>;

....

const column = this.grid.getColumnByName("User");
// Return the appropriate template based on some conditiion.
// For example saved user settings, viewport size, etc.
column.bodyTemplate = this.smallView;
```

Column properties can also be set in code in the [`columnInit`]({environment:angularApiUrl}/classes/igxgridcomponent.html#columnInit) event which is emitted when the columns are initialized in the grid.

```typescript
public initColumns(column: IgxGridColumn) {
    const column: IgxColumnComponent = column;
    if (column.field === 'ProductName') {
        column.sortable = true;
        column.editable = true;
    }
}
```

The code above will make the **ProductName** column sortable and editable and will instantiate the corresponding features UI (like inputs for editing, etc.).

### Custom Display Format

All values for a date, numeric, currency and percent column are transformed through the Angular [`DatePipe`](https://angular.io/api/common/DatePipe), [`DecimalPipe`](https://angular.io/api/common/DecimalPipe), [`CurrencyPipe`](https://angular.io/api/common/CurrencyPipe) and [`PercentPipe`](https://angular.io/api/common/PercentPipe) accordingly. This does not modify the original value, just the value that is displayed in the column. So please keep in mind that all data operations and manipulations are done based on the values in your data source. By default, values will be displayed according to the grid [`locale`]({environment:angularApiUrl}/classes/igxgridcomponent.html#locale) (if not specified, it fallbacks to the application locale, which defaults to `'en-US'`).

See [Setting up the locale of your app](https://angular.io/guide/i18n#setting-up-the-locale-of-your-app) for more details.

Also, there are optional parameters for formatting:

- `format` - determines what date/time parts are displayed, defaults to `'mediumDate'`, equivalent to `'MMM d, y'`
- `timezone` - the timezone offset for dates. By default uses the end-user's local system timezone
- `digitsInfo` - decimal representation objects. Default to `'1.0-3'`

To allow customizing the display format by these parameters, the [`pipeArgs`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#pipeArgs) input is exposed. A column will respect only the corresponding properties for its data type, if `pipeArgs` is set. Example:

```typescript
const pipeArgs: IColumnPipeArgs = {
     format: 'longDate',
     timezone: 'UTC',
     digitsInfo: '1.1-2'
}
```
```html
<igx-column field="OrderDate" dataType="date" [pipeArgs]="pipeArgs"></igx-column>
<igx-column field="UnitPrice" dataType="number" [pipeArgs]="pipeArgs"></igx-column>
```

The `OrderDate` column will respect only the `format` and `timezone` properties, while the `UnitPrice` will only respect the `digitsInfo`. For further details, please check the official Angular documentation at [Localizing your app](https://angular.io/guide/i18n).

All available column data types could be found in the official [Column types topic](column-types.md#default-template).

## Angular Grid Data Structure

The [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html) handles **flat data** and nested **POJOs(Plain old Java objects)**. The data structure specific for rendering is in the form:

```typescript
const OBJECT_ARRAY = [{
        ObjectKey1: value1,
        ObjectKey2: value2,
        .
        .
        .
        ObjectKeyN: valueN
    },
    .
    .
    .
  }];

const POJO = [{
        ObjectKey1: value1,
        ObjectKey2: value2,
        .
        .
        .
        ObjectKeyN: {
          ObjectKeyN1: value1,
          ObjectKeyN2: value2,
          .
          .
          .
          ObjectKeyNM: valueNM,
        }
    },
    .
    .
    .
  }];

```
>[!WARNING]
>**The key values must not contain arrays**.

>If you use [autoGenerate]({environment:angularApiUrl}/classes/igxgridcomponent.html#autoGenerate) columns **the data keys must be identical.**

## Angular Grid Data Binding

Before going any further with the grid we want to change the Angular grid to bind to remote data service, which is the common scenario in large-scale applications. A good practice is to separate all data fetching related logic in a separate data service, so we are going to create a service which will handle the fetching of data from the server.

Let's implement our service in a separate file

```typescript
// northwind.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map } from 'rxjs/operators';
```

We're importing the `Injectable` decorator which is an [essential ingredient](https://angular.io/guide/dependency-injection) in every Angular service definition. The `HttpClient` will provide us with the functionality to communicate with backend services. It returns an `Observable` of some result to which we will subscribe in our grid component.

**Note**: Before Angular 5 the `HttpClient` was located in `@angular/http` and was named `Http`.

Since we will receive a JSON response containing an array of records, we may as well help ourselves by specifing what kind of data we're expecting to be returned in the observable by defining an interface with the correct shape. Type checking is always recommended and can save you some headaches down the road.

```typescript
// northwind.service.ts

export interface NorthwindRecord {
    ProductID: number;
    ProductName: string;
    SupplierID: number;
    CategoryID: number;
    QuantityPerUnit: string;
    UnitPrice: number;
    UnitsInStock: number;
    UnitsOnOrder: number;
    ReorderLevel: number;
    Discontinued: boolean;
    CategoryName: string;
}
```

The service itself is pretty simple consisting of one method: `fetchData` that will return an `Observable<NorthwindRecord[]>`. In cases when the request fails for any reason (server unavailable, network error, etc), the `HttpClient` will return an error. We'll leverage the `catchError` operator which intercepts an _Observable_ that failed and passes the error to an error handler. Our error handler will log the error and return a safe value.

```typescript
// northwind.service.ts

@Injectable()
export class NorthwindService {
    private url = 'http://services.odata.org/V4/Northwind/Northwind.svc/Alphabetical_list_of_products';

    constructor(private http: HttpClient) {}

    public fetchData(): Observable<NorthwindRecord[]> {
        return this.http
            .get(this.url)
            .pipe(
                map(response => response['value']),
                catchError(
                    this.errorHandler('Error loading northwind data', [])
                )
            );
    }

    private errorHandler<T>(message: string, result: T) {
        return (error: any): Observable<any> => {
            console.error(`${message}: ${error.message}`);
            return of(result as T);
        };
    }
}
```

Make sure to import both the `HttpClientModule` and our service in the application module and register the service as a provider.

```typescript
// app.module.ts

import { HttpClientModule } from '@angular/common/http';
...
import { NorthwindService } from './northwind.service';

@NgModule({
    imports: [
        ...
        HttpClientModule
        ...
    ],
    providers: [
        NorthwindService
    ]
})
export class AppModule {}
```

After implementing the service we will inject it in our component's constructor and use it to retrieve the data. The `ngOnInit` lifecycle hook is a good place to dispatch the initial request.

**Note**: In the code below, you may wonder why are we setting the _records_ property to an empty array before subscribing to the service. The Http request is asynchronous, and until it completes, the _records_ property will be _undefined_ which will result in an error when the grid tries to bind to it. You should either initialize it with a default value or use a `BehaviorSubject`.

```typescript
// my.component.ts

@Component({...})
export class MyComponent implements OnInit {

    public records: NorthwindRecord[];

    constructor(private northwindService: NorthwindService) {}

    ngOnInit() {
        this.records = [];
        this.northwindService.fetchData().subscribe((records) => this.records = records);
    }
}
```

and in the template of the component:

```html
    <igx-grid [data]="records">
        <igx-column field="ProductId"></igx-column>
        <!-- rest of the column definitions -->
        ...
    </igx-grid>
```

**Note**: The grid [`autoGenerate`]({environment:angularApiUrl}/classes/igxgridcomponent.html#autoGenerate) property is best to be avoided when binding to remote data for now. It assumes that the data is available in order to inspect it and generate the appropriate columns. This is usually not the case until the remote service responds, and the grid will throw an error. Making [`autoGenerate`]({environment:angularApiUrl}/classes/igxgridcomponent.html#autoGenerate) available, when binding to remote service, is on our roadmap for future versions.

## Complex Data Binding

The [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html) supports binding to complex objects (inluding nesting deeper than one level) through a "path" of properties in the data record.

Take a look at the following data model:
```typescript
interface AminoAcid {
    name: string;
    abbreviation: {
        short: string;
        long: string;
    }
    weight: {
        molecular: number;
        residue: number;
    },
    formula: {
        molecular: string;
        residue: string;
    }
    ...
}
```
For example, in order to display the weights of a given amino acid in the grid the following snippet will suffice
```html
<igx-column field="weight.molecular"></igx-column>
<igx-column field="weight.residue"></igx-column>
```
Refer to the sample below for additional information. This type of binding supports all
the default functionality that you would expect from the grid.
That is all sorting and filtering operations work out of the box without any additional
configuration. Same goes for grouping and editing operations with or without transactions as well as the ability to template the cells of the bound column.

>[!WARNING]
>The grids **do not** support this kind of binding for `primary key`, `foreign key` and `child key` properties where applicable.


<code-view style="height:460px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-nested-data-binding-2"
           alt="Angular grid nested data example">
</code-view>

<div class="divider--half"></div>

An alternative way to bind complex data, or to visualize composite data (from more than one column) in the **IgxGrid** is to use a custom body template for the column. Generally, one can:
    - use the `value` of the cell, that contains the nested data
    - use the `cell` object in the template, from which to access the `row.data`, therefore retrieve any value from it, i.e `cell.row.data[field]` and `cell.row.data[field][nestedField]` 

and interpolate it those in the template.

```html
<igx-column field="abbreviation.long" header="Long">
    <ng-template igxCell let-cell="cell">
        <div>
            <div>
                {{ cell.value }}
                {{ cell.row.data['name'] }}  
                {{ cell.row.data['weight']['molecular'] }}
            </div>
        </div>
    </ng-template>
</igx-column>
```

Below is the data that we are going to use:

```typescript
export const EMPLOYEE_DATA = [
    {
        Age: 55,
        Employees: [
            {
                Age: 43,
                HireDate: new Date(2011, 6, 3),
                ID: 3,
                Name: "Michael Burke",
                Title: "Senior Software Developer"
            },
            {
                Age: 29,
                HireDate: new Date(2009, 6, 19),
                ID: 2,
                Name: "Thomas Anderson",
                Title: "Senior Software Developer"
            },
            {
                Age: 31,
                HireDate: new Date(2014, 8, 18),
                ID: 11,
                Name: "Monica Reyes",
                Title: "Software Development Team Lead"
            },
            {
                Age: 35,
                HireDate: new Date(2015, 9, 17),
                ID: 6,
                Name: "Roland Mendel",
                Title: "Senior Software Developer"
            }],
        HireDate: new Date(2008, 3, 20),
        ID: 1,
        Name: "John Winchester",
        Title: "Development Manager"
    },
...
```
The custom template for the column, that will render the nested data:

```html
...
 <igx-column field="Employees" header="Employees" [cellClasses]="{ expand: true }" width="40%">
        <ng-template #nestedDataTemp igxCell let-people let-cell="cell">
            <div class="employees-container">
                <igx-expansion-panel *ngFor="let person of people">
                    <igx-expansion-panel-header iconPosition="right">
                        <igx-expansion-panel-description>
                            {{ person.Name }}
                        </igx-expansion-panel-description>
                    </igx-expansion-panel-header>
                    <igx-expansion-panel-body>
                        <div class="description">
                            <igx-input-group (keydown)="stop($event)" style="--ig-size: var(--ig-size-small)">
                                <label igxLabel for="title">Title</label>
                                <input type="text" name="title" igxInput [(ngModel)]="person.Title" style="text-overflow: ellipsis;" />
                            </igx-input-group>
                            <igx-input-group (keydown)="stop($event)" style="--ig-size: var(--ig-size-small); width: 15%;">
                                <label igxLabel for="age">Age</label>
                                <input type="number" name="age" igxInput [(ngModel)]="person.Age" />
                            </igx-input-group>
                        </div>
                    </igx-expansion-panel-body>
                </igx-expansion-panel>
            </div>
        </ng-template>
 </igx-column>
...
```

And the result from this configuration is:


<code-view style="height:460px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-nested-data-binding"
           alt="Angular grid nested data binding example">
</code-view>

<div class="divider--half"></div>

### Working with Flat data

The flat data binding approach is similar to the one that we already described above, but instead of **cell value** we are going to use the [`data`]({environment:angularApiUrl}/classes/igxgridrow.html#data) property of the [IgxGridRow]({environment:angularApiUrl}/classes/igxgridrow.html).

Since the Angular grid is a component for **rendering**, **manipulating** and **preserving** data records, having access to **every data record** gives you the opportunity to customize the approach of handling it. The [`data`]({environment:angularApiUrl}/classes/igxgridrow.html#data) property provides you this opportunity.

Below is the data that we are going to use:
```typescript
export const DATA: any[] = [
    {
        Address: "Obere Str. 57",
        City: "Berlin",
        CompanyName: "Alfreds Futterkiste",
        ContactName: "Maria Anders",
        ContactTitle: "Sales Representative",
        Country: "Germany",
        Fax: "030-0076545",
        ID: "ALFKI",
        Phone: "030-0074321",
        PostalCode: "12209",
        Region: null
    },
...
]
```

The custom template:

```html
...
<igx-column field="Address" header="Address" width="25%" editable="true">
    <ng-template #compositeTemp igxCell let-cell="cell">
        <div class="address-container">
        // In the Address column combine the Country, City and PostCode values of the corresponding data record
            <span><strong>Country:</strong> {{cell.row.data.Country}}</span>
            <br/>
            <span><strong>City:</strong> {{cell.row.data.City}}</span>
            <br/>
            <span><strong>Postal Code:</strong> {{cell.row.data.PostalCode}}</span>
        </div>
    </ng-template>
</igx-column>
```

Keep in mind that with the above defined template you will not be able to make editing operations, so we need an editor template.

```html
<igx-column field="Address" header="Address" width="25%" editable="true">
    <ng-template  igxCellEditor let-cell="cell">
        <div class="address-container">
            <span>
                <strong>Country:</strong> {{cell.row.data.Country}}
                <igx-input-group width="100%">
                        <input igxInput [(ngModel)]="cell.row.data.Country" />
                </igx-input-group>
            </span>
            <br/>
            <span><strong>City:</strong> {{cell.row.data.City}}</span>
            <igx-input-group width="100%">
                    <input igxInput [(ngModel)]="cell.row.data.City" />
            </igx-input-group>
            <br/>
            <span><strong>Postal Code:</strong> {{cell.row.data.PostalCode}}</span>
            <igx-input-group width="100%">
                    <input igxInput [(ngModel)]="cell.row.data.PostalCode" />
            </igx-input-group>
        </div>
    </ng-template>
</igx-column>
...
```
And the result is:


<code-view style="height:550px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-composite-data-binding"
           alt="Angular grid composite data binding example">
</code-view>

<div class="divider--half"></div>

## Keyboard Navigation
Grid's keyboard navigation provides a rich variety of keyboard interactions for the user. It enhances accessibility and allows intuitive navigation through any type of elements inside (cell, row, column header, toolbar, footer, etc.).
Check out these resources for more information:
 - [Grid Keyboard Navigation](../grid/keyboard-navigation.md)
 - [TreeGrid Keyboard Navigation](../treegrid/keyboard-navigation.md)
 - [Hierarchical Grid Keyboard Navigation](../hierarchicalgrid/keyboard-navigation.md)
 - [Blog post](https://www.infragistics.com/community/blogs/b/engineering/posts/grid-keyboard-navigation-accessibility) - Improving Usability, Accessibility and ARIA Compliance with Grid keyboard navigation

## State Persistence

Achieving a state persistence framework is easier than ever by using the new built-in [`IgxGridState`](state-persistence.md) directive.

## Sizing

See the [Grid Sizing](sizing.md) topic.

## Performance (Experimental)

The `IgxGridComponent`'s design allows it to take advantage of the Event Coalescing feature that has Angular introduced. This feature allows for improved performance with roughly around **`20%`** in terms of interactions and responsiveness. This feature can be enabled on application level by simply setting the `ngZoneEventCoalescing ` and `ngZoneRunCoalescing` properties to `true` in the `bootstrapModule` method:

```typescript
platformBrowserDynamic()
  .bootstrapModule(AppModule, { ngZoneEventCoalescing: true, ngZoneRunCoalescing: true })
  .catch(err => console.error(err));
```

>[!NOTE]
> This is still in experimental feature for the `IgxGridComponent`. This means that there might be some unexpected behaviors in the Grid. In case of encountering any such behavior, please contact us on our [Github](https://github.com/IgniteUI/igniteui-angular/discussions) page.

>[!NOTE]
> Enabling it can affects other parts of an Angular application that the `IgxGridComponent` is not related to.

## Known Limitations

|Limitation|Description|
|--- |--- |
|Column widths set in `percentage` and `px`|Currently we do not support mixing of column widths with `%` and `px`.|
|When trying to filter a column of type `number`|If a value different than `number` is entered into the filtering input, `NaN` is returned due to an incorrect cast.|
|Grid [`width`]({environment:angularApiUrl}/classes/igxgridcomponent.html#width) does not depend on the column widths | The [`width`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#width) of all columns does not determine the spanning of the grid itself. It is determined by the parent container dimensions or the defined grid's [`width`]({environment:angularApiUrl}/classes/igxgridcomponent.html#width).|
|Grid nested in parent container | When grid's [`width`]({environment:angularApiUrl}/classes/igxgridcomponent.html#width) is not set and it is placed in a parent container with defined dimensions, the grid spans to this container.|
|Grid `OnPush` ChangeDetectionStrategy |The grid operates with `ChangeDetectionStrategy.OnPush` so whenever some customization appears make sure that the grid is notified about the changes that happens.|
| Columns have a minimum allowed column width. Depending on the value of [`--ig-size`] CSS variable, they are as follows: <br/>"small": 56px <br/> "medium": 64px <br/> "large ": 80px | If width less than the minimum allowed is set it will not affect the rendered elements. They will render with the minimum allowed width for the corresponding [`--ig-size`]. This may lead to an unexpected behavior with horizontal virtualization and is therefore not supported.
| Row height is not affected by the height of cells that are not currently rendered in view. | Because of virtualization a column with a custom template (that changes the cell height) that is not in the view will not affect the row height. The row height will be affected only while the related column is scrolled in the view.

> [!NOTE]
> `igxGrid` uses `igxForOf` directive internally hence all `igxForOf` limitations are valid for `igxGrid`. For more details see [igxForOf Known Issues](../for-of.md#known-limitations) section.

<div class="divider--half"></div>

## API References
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent Styles]({environment:sassApiUrl}/#function-grid-theme)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [IgxGridRow]({environment:angularApiUrl}/classes/igxgridrow.html)
* [IgxGridCell]({environment:angularApiUrl}/classes/igxgridcell.html)

## Theming Dependencies
* [IgxIcon Theme]({environment:sassApiUrl}/themes#function-icon-theme)
* [IgxInputGroup Theme]({environment:sassApiUrl}/themes#function-input-group-theme)
* [IgxChip Theme]({environment:sassApiUrl}/themes#function-chip-theme)
* [IgxRipple Theme]({environment:sassApiUrl}/themes#function-ripple-theme)
* [IgxButton Theme]({environment:sassApiUrl}/themes#function-button-theme)
* [IgxOverlay Theme]({environment:sassApiUrl}/themes#function-overlay-theme)
* [IgxDropDown Theme]({environment:sassApiUrl}/themes#function-drop-down-theme)
* [IgxCalendar Theme]({environment:sassApiUrl}/themes#function-calendar-theme)
* [IgxSnackBar Theme]({environment:sassApiUrl}/themes#function-snackbar-theme)
* [IgxBadge Theme]({environment:sassApiUrl}/themes#function-badge-theme)

## Tutorial video
Learn more about creating an Angular data grid in our short tutorial video:

> [!Video https://www.youtube.com/embed/Xv_fQVQ8fmM]

## Additional Resources
<div class="divider--half"></div>

* [Grid Sizing](sizing.md)
* [Virtualization and Performance](virtualization.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Moving](column-moving.md)
* [Column Pinning](column-pinning.md)
* [Column Resizing](column-resizing.md)
* [Selection](selection.md)
* [Column Data Types](column-types.md#default-template)
* [Build CRUD operations with igxGrid](../general/how-to/how-to-perform-crud.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
