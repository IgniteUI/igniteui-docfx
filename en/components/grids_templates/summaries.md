@@if (igxName === 'IgxGrid') {
---
title: Angular Grid Summaries - Ignite UI for Angular
_description: Configure Angular grid summaries in the group footer of the column and use the option to set custom angular template in the Ignite UI for Angular table
_keywords: angular grid summaries, igniteui for angular, infragistics
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Grid Summaries - Ignite UI for Angular
_description: Configure Angular grid summaries in the group footer of the column and use the option to set custom angular template in the Ignite UI for Angular table
_keywords: angular grid summaries, ignite ui for angular, infragistics
_canonicalLink: grid/summaries
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Grid Summaries - Ignite UI for Angular
_description: Configure Angular grid summaries in the group footer of the column and use the option to set custom angular template in the Ignite UI for Angular table
_keywords: angular grid summaries, ignite ui for angular, infragistics
_canonicalLink: grid/summaries
---
}

# Angular @@igComponent Summaries

The Angular UI grid in Ignite UI for Angular has a **summaries** feature that functions on a per-column level as group footer. Angular grid summaries is powerful feature which enables the user to see column information in a separate container with a predefined set of default summary items, depending on the type of data within the column or by implementing a custom angular template in the @@igComponent.

## Angular @@igComponent Summaries Overview Example

@@if (igxName === 'IgxGrid') {

<code-view style="height:650px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-summary" alt="Angular @@igComponent Summaries Overview Example">
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:750px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-summary" alt="Angular @@igComponent Summaries Overview Example">
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:650px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-summary" alt="Angular @@igComponent Summaries Overview Example">
</code-view>

}

<div class="divider--half"></div>

> [!NOTE]
> The summary of the column is a **function of all column values**, unless filtering is applied, then the summary of the column will be **function of the filtered result values**

**@@igComponent summaries** can also be enabled on a per-column level in Ignite UI for Angular, which means that you can activate it only for columns that you need. @@igComponent summaries gives you a predefined set of default summaries, depending on the type of data in the column, so that you can save some time:


For `string` and `boolean` [`data types`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#dataType), the following function is available:
 - count

For `number`, `currency` and `percent` data types, the following functions are available:
 - count
 - min
 - max
 - average
 - sum

For `date` data type, the following functions are available:
 - count
 - earliest
 - latest

All available column data types could be found in the official [Column types topic](column-types.md#default-template).

**@@igComponent summaries** are enabled per-column by setting [`hasSummary`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#hasSummary) property to `true`. It is also important to keep in mind that the summaries for each column are resolved according to the column data type. In the `@@igSelector` the default column data type is `string`, so if you want `number` or `date` specific summaries you should specify the [`dataType`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#datatype) property as `number` or `date`. Note that the summary values will be displayed localized, according to the grid [`locale`]({environment:angularApiUrl}/classes/igxgridcomponent.html#locale) and column [`pipeArgs`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#pipeArgs).

@@if (igxName === 'IgxGrid') {
```html
<@@igSelector #grid1 [data]="data" [autoGenerate]="false" height="800px" width="800px" (columnInit)="initColumn($event)">
    <igx-column field="ProductID" header="Product ID" width="200px" [sortable]="true"></igx-column>
    <igx-column field="ProductName" header="Product Name" width="200px" [sortable]="true" [hasSummary]="true"></igx-column>
    <igx-column field="ReorderLevel" width="200px" [editable]="true" [dataType]="'number'" [hasSummary]="true"></igx-column>
</@@igSelector>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<@@igSelector #grid1 [data]="data" [autoGenerate]="false" height="800px" width="800px" (columnInit)="initColumn($event)">
    <igx-column field="ID" header="Order ID" width="200px" [sortable]="true"></igx-column>
    <igx-column field="Name" header="Order Product" width="200px" [sortable]="true" [hasSummary]="true"></igx-column>
    <igx-column field="Units" width="200px" [editable]="true" [dataType]="'number'" [hasSummary]="true"></igx-column>
</@@igSelector>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false">
    <igx-column field="Artist" [hasSummary]='true'></igx-column>
    <igx-column field="Photo">
        <ng-template igxCell let-cell="cell">
            <div class="cell__inner_2">
                <img [src]="cell.value" class="photo" />
            </div>
        </ng-template>
    </igx-column>
    <igx-column field="Debut" [hasSummary]='true'></igx-column>
    <igx-column field="Grammy Nominations" [hasSummary]='true' [dataType]="'number'" [summaries]="mySummary"></igx-column>
    <igx-column field="Grammy Awards" [hasSummary]='true' [dataType]="'number'"></igx-column>
</igx-hierarchical-grid>
```
}

The other way to enable/disable summaries for a specific column or a list of columns is to use the public method [`enableSummaries`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#enableSummaries)/[`disableSummaries`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#disableSummaries) of the **@@igSelector**.

@@if (igxName === 'IgxGrid') {
```html
<@@igSelector #grid1 [data]="data" [autoGenerate]="false" height="800px" width="800px" (columnInit)="initColumn($event)" >
    <igx-column field="ProductID" header="Product ID" width="200px"  [sortable]="true"></igx-column>
    <igx-column field="ProductName" header="Product Name" width="200px" [sortable]="true" [hasSummary]="true"></igx-column>
    <igx-column field="ReorderLevel" width="200px" [editable]="true" [dataType]="'number'" [hasSummary]="false"></igx-column>
</@@igSelector>
<button (click)="enableSummary()">Enable Summary</button>
<button (click)="disableSummary()">Disable Summary </button>
```
```typescript
public enableSummary() {
    this.grid1.enableSummaries([
        {fieldName: 'ReorderLevel', customSummary: this.mySummary},
        {fieldName: 'ProductID'}
    ]);
}
public disableSummary() {
    this.grid1.disableSummaries('ProductName');
}
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<@@igSelector #grid1 [data]="data" [autoGenerate]="false" height="800px" width="800px" (columnInit)="initColumn($event)" >
    <igx-column field="ID" header="Order ID" width="200px" [sortable]="true"></igx-column>
    <igx-column field="Name" header="Order Product" width="200px" [sortable]="true" [hasSummary]="true" ></igx-column>
    <igx-column field="Units" width="200px" [editable]="true" [dataType]="'number'" [hasSummary]="false"></igx-column>

</@@igSelector>
<button (click)="enableSummary()">Enable Summary</button>
<button (click)="disableSummary()">Disable Summary </button>
```
```typescript
public enableSummary() {
    this.grid1.enableSummaries([
        {fieldName: 'Units', customSummary: this.mySummary},
        {fieldName: 'ID'}
    ]);
}
public disableSummary() {
    this.grid1.disableSummaries('Name');
}
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<@@igSelector #hierarchicalGrid [data]="data" [autoGenerate]="false" height="800px" width="800px" (columnInit)="initColumn($event)" >
  <igx-column field="Artist" [hasSummary]='true'></igx-column>
        <igx-column field="Photo">
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner_2">
                    <img [src]="cell.value" class="photo" />
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="Debut" [hasSummary]='true'></igx-column>
        <igx-column field="Grammy Nominations" [hasSummary]='true' [dataType]="'number'" [summaries]="mySummary"></igx-column>
        <igx-column field="Grammy Awards" [hasSummary]='true' [dataType]="'number'"></igx-column>
</@@igSelector>
<button (click)="enableSummary()">Enable Summary</button>
<button (click)="disableSummary()">Disable Summary </button>
```
```typescript
public enableSummary() {
    this.hierarchicalGrid.enableSummaries([
        {fieldName: 'Grammy Nominations', customSummary: this.mySummary},
        {fieldName: 'Artist'}
    ]);
}
public disableSummary() {
    this.hierarchicalGrid.disableSummaries('Photo');
}
```
}

## Custom @@igComponent Summaries
If these functions do not fulfill your requirements you can provide a custom summary for the specific columns. In order to achieve this you have to override one of the base classes [`IgxSummaryOperand`]({environment:angularApiUrl}/classes/igxsummaryoperand.html), [`IgxNumberSummaryOperand`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html) or [`IgxDateSummaryOperand`]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html) according to the column data type and your needs. This way you can redefine the existing function or you can add new functions. [`IgxSummaryOperand`]({environment:angularApiUrl}/classes/igxsummaryoperand.html) class provides the default implementation only for the [`count`]({environment:angularApiUrl}/classes/igxsummaryoperand.html#count) method. [`IgxNumberSummaryOperand`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html) extends [`IgxSummaryOperand`]({environment:angularApiUrl}/classes/igxsummaryoperand.html) and provides implementation for the [`min`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html#min), [`max`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html#max), [`sum`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html#sum) and [`average`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html#average). [`IgxDateSummaryOperand`]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html) extends [`IgxSummaryOperand`]({environment:angularApiUrl}/classes/igxsummaryoperand.html) and additionally gives you [`earliest`]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html#earliest) and [`latest`]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html#latest).

@@if (igxName !== 'IgxHierarchicalGrid') {
```typescript
import { IgxSummaryResult, IgxSummaryOperand, IgxNumberSummaryOperand, IgxDateSummaryOperand } from 'igniteui-angular';
// import { IgxSummaryResult, IgxSummaryOperand, IgxNumberSummaryOperand, IgxDateSummaryOperand } from '@infragistics/igniteui-angular'; for licensed package

class MySummary extends IgxNumberSummaryOperand {
    constructor() {
        super();
    }

    operate(data?: any[]): IgxSummaryResult[] {
        const result = super.operate(data);
        result.push({
            key: 'test',
            label: 'Test',
            summaryResult: data.filter(rec => rec > 10 && rec < 30).length
        });
        return result;
    }
}
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```typescript
import { IgxRowIslandComponent, IgxHierarchicalGridComponent, IgxNumberSummaryOperand, IgxSummaryResult } from 'igniteui-angular';
// import { IgxRowIslandComponent, IgxHierarchicalGridComponent, IgxNumberSummaryOperand, IgxSummaryResult } from '@infragistics/igniteui-angular'; for licensed package

class MySummary extends IgxNumberSummaryOperand {
    constructor() {
        super();
    }

    public operate(data?: any[]): IgxSummaryResult[] {
        const result = super.operate(data);
        result.push({
            key: 'test',
            label: 'More than 5',
            summaryResult: data.filter((rec) => rec > 5).length
        });

        return result;
    }
}
```
}

As seen in the examples, the base classes expose the [`operate`]({environment:angularApiUrl}/classes/igxsummaryoperand.html#operate) method, so you can choose to get all default summaries and modify the result, or calculate entirely new summary results.
The method returns a list of [`IgxSummaryResult`]({environment:angularApiUrl}/interfaces/igxsummaryresult.html).
```typescript
interface IgxSummaryResult {
    key: string;
    label: string;
    summaryResult: any;
}
```
and take optional parameters for calculating the summaries.
See [Custom summaries, which access all data](#custom-summaries-which-access-all-data) section below.

> [!NOTE]
> In order to calculate the summary row height properly, the @@igComponent needs the [`operate`]({environment:angularApiUrl}/classes/igxsummaryoperand.html#operate) method to always return an array of [`IgxSummaryResult`]({environment:angularApiUrl}/interfaces/igxsummaryresult.html) with the proper length even when the data is empty.
@@if (igxName === 'IgxGrid') {
And now let's add our custom summary to the column `UnitsInStock`. We will achieve that by setting the [`summaries`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#summaries) property to the class we create below.
```html
<@@igSelector #grid1 [data]="data" [autoGenerate]="false" height="800px" width="800px" (columnInit)="initColumn($event)" >
    <igx-column field="ProductID" width="200px"  [sortable]="true">
    </igx-column>
    <igx-column field="ProductName" width="200px" [sortable]="true" [hasSummary]="true">
    </igx-column>
    <igx-column field="UnitsInStock" width="200px" [dataType]="'number'" [hasSummary]="true" [summaries]="mySummary" [sortable]="true">
    </igx-column>
    <igx-column field="ReorderLevel" width="200px" [editable]="true" [dataType]="'number'" [hasSummary]="true">
    </igx-column>
</@@igSelector>
```

```typescript
...
export class GridComponent implements OnInit {
    mySummary = MySummary;
    ....
}
```
}

@@if (igxName === 'IgxTreeGrid') {
And now let's add our custom summary to the column `UnitPrice`. We will achieve that by setting the [`summaries`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#summaries) property to the class we create below.
```html
<@@igSelector #grid1 [data]="data" [autoGenerate]="false" height="800px" width="800px" (columnInit)="initColumn($event)">
    <igx-column field="ID" header="Order ID" width="200px" [sortable]="true"></igx-column>
    <igx-column field="Name" header="Order Product" width="200px" [sortable]="true" [hasSummary]="true"></igx-column>
    <igx-column field="Units" [dataType]="'number'" width="200px" [editable]="true" [hasSummary]="true" [summaries]="mySummary"></igx-column>
    <igx-column field="UnitPrice" header="Unit Price" width="200px" [dataType]="'number'"  [dataType]="'currency'" [hasSummary]="true"></igx-column>
</@@igSelector>
```

```typescript
...
export class GridComponent implements OnInit {
    mySummary = MySummary;
    ....
}
```
}

@@if (igxName === 'IgxHierarchicalGrid') {
And now let's add our custom summary to the column `GramyNominations`. We will achieve that by setting the [`summaries`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#summaries) property to the class we create below.
```html
 <igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false">
    <igx-column field="Artist" [hasSummary]='true'></igx-column>
    <igx-column field="Photo">
        <ng-template igxCell let-cell="cell">
            <div class="cell__inner_2">
                <img [src]="cell.value" class="photo" />
            </div>
        </ng-template>
    </igx-column>
    <igx-column field="Debut" [hasSummary]='true'></igx-column>
    <igx-column field="Grammy Nominations" [hasSummary]='true' [dataType]="'number'" [summaries]="mySummary"></igx-column>
    <igx-column field="Grammy Awards" [hasSummary]='true' [dataType]="'number'"></igx-column>
</igx-hierarchical-grid>
```

```typescript
...
export class HGridSummarySampleComponent implements OnInit {
    mySummary = MySummary;
    ....
}
```
}

### Custom summaries, which access all data
 Now you can access all @@igComponent data inside the custom column summary. Two additional optional parameters are introduced in the IgxSummaryOperand `operate` method.
As you can see in the code snippet below the operate method has the following three parameters:
- columnData - gives you an array that contains the values only for the current column
- allGridData - gives you the whole grid data source
- fieldName - current column field

@@if (igxName === 'IgxTreeGrid') {
```typescript
class MySummary extends IgxNumberSummaryOperand {
    constructor() {
        super();
    }
    operate(columnData: any[], allGridData = [], fieldName?): IgxSummaryResult[] {
        const result = super.operate(allData.map(r => r[fieldName]));
        result.push({ key: 'test', label: 'Total Undelivered', summaryResult: allData.filter((rec) => rec.Discontinued).length });
        return result;
    }
}
```
}
@@if (igxName !== 'IgxTreeGrid') {
```typescript
class MySummary extends IgxNumberSummaryOperand {
    constructor() {
        super();
    }
    operate(columnData: any[], allGridData = [], fieldName?): IgxSummaryResult[] {
        const result = super.operate(allData.map(r => r[fieldName]));
        result.push({ key: 'test', label: 'Total Discontinued', summaryResult: allData.filter((rec) => rec.Discontinued).length });
        return result;
    }
}
```
}

@@if (igxName === 'IgxGrid') {

<code-view style="height:650px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-alldata-summaries" >
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:650px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-allData-summary" >
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:650px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-allData-summary" >
</code-view>

}

### Summary Template
`igxSummary` targets the column summary providing as a context the column summary results.

```html
<igx-column ... [hasSummary]="true">
    <ng-template igxSummary let-summaryResults>
        <span> My custom summary template</span>
        <span>{{ summaryResults[0].label }} - {{ summaryResults[0].summaryResult }}</span>
    </ng-template>
</igx-column>
```

When a default summary is defined, the height of the summary area is calculated by design depending on the column with the largest number of summaries and the size of the grid. Use the [summaryRowHeight]({environment:angularApiUrl}/classes/igxgridcomponent.html#summaryRowHeight) input property to override the default value. As an argument it expects a number value, and setting a false value will trigger the default sizing behavior of the grid footer.

> [!NOTE]
> Column summary template could be defined through API by setting the column [summaryTemplate]({environment:angularApiUrl}/classes/igxcolumncomponent.html#summaryTemplate) property to the required TemplateRef.


@@if (igxName === 'IgxGrid') {

<code-view style="height:650px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-summary-template" >
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:650px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-summary-template" >
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:650px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hgrid-summary-template" >
</code-view>

}

## Disable Summaries

The [`disabledSummaries`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#disabledSummaries) property provides precise per-column control over the Ignite UI for Angular grid summary feature. This property enables users to customize the summaries displayed for each column in the grid, ensuring that only the most relevant and meaningful data is shown. For example, you can exclude specific summary types, such as `['count', 'min', 'max']`, by specifying their summary keys in an array.

This property can also be modified **dynamically at runtime** through code, providing flexibility to adapt the grid's summaries to changing application states or user actions.

The following examples illustrate how to use the `disabledSummaries` property to manage summaries for different columns and exclude specific default and custom summary types in the Ignite UI for Angular grid:

@@if (igxName === 'IgxGrid') {
```html
<!-- default summaries -->
<igx-column
    field="UnitPrice"
    header="Unit Price"
    dataType="number"
    [hasSummary]="true"
    [disabledSummaries]="['count', 'sum', 'average']"
>
</igx-column>
<!-- custom summaries -->
<igx-column
    field="UnitsInStock"
    header="Units In Stock"
    dataType="number"
    [hasSummary]="true"
    [summaries]="discontinuedSummary"
    [disabledSummaries]="['discontinued', 'totalDiscontinued']"
>
</igx-column>
```
For `UnitPrice`, default summaries like `count`, `sum`, and `average` are disabled, leaving others like `min` and `max` active.

For `UnitsInStock`, custom summaries such as `total` and `totalDiscontinued` are excluded using the `disabledSummaries` property.
}
@@if (igxName === 'IgxTreeGrid') {
```html
<!-- custom summaries -->
<igx-column
    field="Units"
    header="Units"
    dataType="number"
    [hasSummary]="true"
    [summaries]="unitsSummary"
    [disabledSummaries]="['uniqueCount', 'maxDifference']"
>
</igx-column>
<!-- default summaries -->
<igx-column
    field="UnitPrice"
    header="Unit Price"
    dataType="number"
    [hasSummary]="true"
    [disabledSummaries]="['count', 'sum', 'average']"
>
</igx-column>
```
For `Units`, custom summaries such as `totalDelivered` and `totalNotDelivered` are excluded using the `disabledSummaries` property.

For `UnitPrice`, default summaries like `count`, `sum`, and `average` are disabled, leaving others like `min` and `max` active.
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<!-- custom summaries -->
<igx-column
    field="Photo"
    [hasSummary]="true"
    [summaries]="grammySummary"
    [disabledSummaries]="['singersWithAwards', 'awards']"
>
    <ng-template igxCell let-cell="cell">
        <div class="cell__inner_2">
            <img [src]="cell.value" class="photo" />
        </div>
    </ng-template>
</igx-column>
<!-- default summaries -->
<igx-column
    field="GrammyNominations"
    header="Grammy Nominations"
    dataType="number"
    [hasSummary]="true"
    [disabledSummaries]="['count', 'sum', 'average']"
></igx-column>
```
For `Photo`, custom summaries such as `singersWithAwards` and `awards` are excluded using the `disabledSummaries` property.

For `GrammyNominations` default summaries like `count`, `sum`, and `average` are disabled, leaving others like `min` and `max` active.
}

At runtime, summaries can also be dynamically disabled using the `disabledSummaries` property. For example, you can set or update the property on specific columns programmatically to adapt the displayed summaries based on user actions or application state changes.

@@if (igxName === 'IgxGrid') {
<code-view style="height:850px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-disable-summaries" >
</code-view>
}
@@if (igxName === 'IgxTreeGrid') {
<code-view style="height:950px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-disable-summaries" >
</code-view>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<code-view style="height:850px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-disable-summaries" >
</code-view>
}

## Formatting summaries
By default, summary results, produced by the built-in summary operands, are localized and formatted according to the grid [`locale`]({environment:angularApiUrl}/classes/igxgridcomponent.html#locale) and column [`pipeArgs`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#pipeArgs). When using custom operands, the `locale` and `pipeArgs` are not applied. If you want to change the default appearance of the summary results, you may format them using the [`summaryFormatter`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#summaryFormatter) property.

```typescript
public dateSummaryFormat(summary: IgxSummaryResult, summaryOperand: IgxSummaryOperand): string {
    const result = summary.summaryResult;
    if(summaryOperand instanceof IgxDateSummaryOperand && summary.key !== 'count'
        && result !== null && result !== undefined) {
        const pipe = new DatePipe('en-US');
        return pipe.transform(result,'MMM YYYY');
    }
    return result;
}
```

```html
<igx-column ... [summaryFormatter]="dateSummaryFormat"></igx-column>
```

@@if (igxName === 'IgxGrid') {
<code-view style="height:650px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-summary-formatter" >
</code-view>
}
@@if (igxName === 'IgxTreeGrid') {
<code-view style="height:650px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-summary-formatter" >
</code-view>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<code-view style="height:650px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hGrid-summary-formatter" >
</code-view>
}

@@if (igxName === 'IgxGrid') {
## Summaries with Group By

When you have grouped by columns, the @@igComponent allows you to change the summary position and calculation mode using the [`summaryCalculationMode`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summaryCalculationMode) and [`summaryPosition`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summaryPosition) properties. Along with these two properties the @@igxName exposes and [`showSummaryOnCollapse`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#showSummaryOnCollapse) property which allows you to determine whether the summary row stays visible when the group row that refers to is collapsed.

The available values of the [`summaryCalculationMode`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summaryCalculationMode) property are:
 - rootLevelOnly - Summaries are calculated only for the root level.
 - childLevelsOnly - Summaries are calculated only for the child levels.
 - rootAndChildLevels - Summaries are calculated for both root and child levels. This is the default value.

The available values of the [`summaryPosition`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summaryPosition) property are:
 - top - The summary row appears before the group by row children.
 - bottom - The summary row appears after the group by row children. This is the default value.

The [`showSummaryOnCollapse`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#showSummaryOnCollapse) property is boolean. Its default value is set to **false**, which means that the summary row would be hidden when the group row is collapsed. If the property is set to **true** the summary row stays visible when group row is collapsed.


> [!NOTE]
> The [`summaryPosition`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summaryPosition) property applies only for the child level summaries. The root level summaries appear always fixed at the bottom of the @@igComponent.

### Demo


<code-view style="height:720px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-groupby-summary" >
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {
## Child Summaries

The @@igComponent supports separate summaries for the root nodes and for each nested child node level. Which summaries are shown is configurable using the [`summaryCalculationMode`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summaryCalculationMode) property. The child level summaries can be shown before or after the child nodes using the [`summaryPosition`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summaryPosition) property. Along with these two properties the @@igxName exposes and [`showSummaryOnCollapse`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#showSummaryOnCollapse) property which allows you to determine whether the summary row stays visible when the parent node that refers to is collapsed.


The available values of the [`summaryCalculationMode`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summaryCalculationMode) property are:
 - rootLevelOnly - Summaries are calculated only for the root level nodes.
 - childLevelsOnly - Summaries are calculated only for the child levels.
 - rootAndChildLevels - Summaries are calculated for both root and child levels. This is the default value.

The available values of the [`summaryPosition`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summaryPosition) property are:
 - top - The summary row appears before the list of child rows.
 - bottom - The summary row appears after the list of child rows. This is the default value.

The [`showSummaryOnCollapse`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#showSummaryOnCollapse) property is boolean. Its default value is set to **false**, which means that the summary row would be hidden when the parent row is collapsed. If the property is set to **true** the summary row stays visible when parent row is collapsed.

> [!NOTE]
> The [`summaryPosition`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summaryPosition) property applies only for the child level summaries. The root level summaries appear always fixed at the bottom of the @@igComponent.


<code-view style="height:720px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-summary2" >
</code-view>

}
<div class="divider--half"></div>

## Exporting Summaries

There is an [`exportSummaries`]({environment:angularApiUrl}/classes/IgxExcelExporterOptions.html#exportSummaries) option in `IgxExcelExporterOptions` that specifies whether the exported data should include the grid's summaries. Default `exportSummaries` value is **false**.

The [`IgxExcelExporterService`]({environment:angularApiUrl}/classes/IgxExcelExporterService.html) will export the default summaries for all column types as their equivalent excel functions so they will continue working properly when the sheet is modified. Try it for yourself in the example below:

@@if (igxName === 'IgxGrid') {
<code-view style="height:770px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-summary-export" >
</code-view>
}

@@if (igxName === 'IgxTreeGrid') {
<code-view style="height:780px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-summary-export" >
</code-view>
}


@@if (igxName === 'IgxHierarchicalGrid') {
<code-view style="height:760px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-summary-export" >
</code-view>
}

The exported file includes a hidden column that holds the level of each `DataRecord` in the sheet. This level is used in the summaries to filter out the cells that need to be included in the summary function.

In the table below, you can find the corresponding Excel formula for each of the default summaries.

Data Type | Function | Excel Function |
|:--------|:--------:|:---------------|
`string`, `boolean` | count | ="Count: "&COUNTIF(start:end, recordLevel) |
`number`, `currency`, `percent` | count | ="Count: "&COUNTIF(start:end, recordLevel) |
|| min| ="Min: "&MIN(IF(start:end=recordLevel, rangeStart:rangeEnd)) |
|| max | ="Max: "&MAX(IF(start:end=recordLevel, rangeStart:rangeEnd)) |
|| average | ="Avg: "&AVERAGEIF(start:end, recordLevel, rangeStart:rangeEnd) |
|| sum | ="Sum: "&SUMIF(start:end, recordLevel, rangeStart:rangeEnd) |
`date` | count | ="Count: "&COUNTIF(start:end, recordLevel) |
|| earliest | ="Earliest: "& TEXT(MIN(IF(start:end=recordLevel, rangeStart:rangeEnd)), format) |
|| latest | ="Latest: "&TEXT(MAX(IF(start:end=recordLevel, rangeStart:rangeEnd)), format) |

### Known Limitations

|Limitation|Description|
|--- |--- |
| Exporting custom summaries | Custom summaries will be exported as strings instead of Excel functions. |
| Exporting templated summaries | Templated summaries are not supported and will be exported as the default ones. |

## Keyboard Navigation

The summary rows can be navigated with the following keyboard interactions:

- <kbd>UP</kbd> - navigates one cell up
- <kbd>DOWN</kbd> - navigates one cell down
- <kbd>LEFT</kbd> - navigates one cell left
- <kbd>RIGHT</kbd> - navigates one cell right
- <kbd>CTRL</kbd> + <kbd>LEFT</kbd> or <kbd>HOME</kbd> - navigates to the leftmost cell
- <kbd>CTRL</kbd> + <kbd>RIGHT</kbd> or <kbd>END</kbd> - navigates to the rightmost cell

## Styling

To get started with styling the sorting behavior, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
``` 

Following the simplest approach, we create a new theme that extends the [`grid-summary-theme`]({environment:sassApiUrl}/index.html#function-grid-summary-theme) and accepts the `$background-color`, `$focus-background-color`, `$label-color`, `$result-color`, `$pinned-border-width`, `$pinned-border-style` and `$pinned-border-color` parameters.

```scss
$custom-theme: grid-summary-theme(
  $background-color: #e0f3ff,
  $focus-background-color: rgba(#94d1f7, .3),
  $label-color: #e41c77,
  $result-color: black,
  $pinned-border-width: 2px,
  $pinned-border-style: dotted,
  $pinned-border-color: #e41c77
);
```

>[!NOTE]
>Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`palette`]({environment:sassApiUrl}/index.html#function-palette) and [`color`]({environment:sassApiUrl}/index.html#function-color) functions. Please refer to [`Palettes`](../themes/sass/palettes.md) topic for detailed guidance on how to use them.

The last step is to **include** the component custom theme:

```scss
@include css-vars($custom-theme);
```

>[!NOTE]
>If the component is using an [`Emulated`](../themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:

 ```scss
:host {
  ::ng-deep {
    @include css-vars($custom-theme);
  }
}
```

@@if (igxName === 'IgxGrid') {
### Demo


<code-view style="height:710px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-groupby-summary-styling" >
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {
### Demo


<code-view style="height:710px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-summary-styling" >
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {
### Demo


<code-view style="height:710px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-summary-styling" >
</code-view>

}

## API References

* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent Styles]({environment:sassApiUrl}/index.html#function-grid-theme)
* [@@igxNameSummaries Styles]({environment:sassApiUrl}/index.html#function-grid-summary-theme)
* [IgxSummaryOperand]({environment:angularApiUrl}/classes/igxsummaryoperand.html)
* [IgxNumberSummaryOperand]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html)
* [IgxDateSummaryOperand]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html)
* [IgxColumnGroupComponent]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)

## Additional Resources
<div class="divider--half"></div>

* [@@igComponent overview](@@igMainTopic.md)
* [Column Data Types](column-types.md#default-template)
* [Virtualization and Performance](virtualization.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Column Moving](column-moving.md)
* [Column Pinning](column-pinning.md)
* [Column Resizing](column-resizing.md)
* [Selection](selection.md)
@@if (igxName === 'IgxGrid'){* [Selection-based Aggregates]({environment:angularApiUrl}/grid/selection-based-aggregates.html)}

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
