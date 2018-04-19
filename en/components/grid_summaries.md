---
title: Grid summaries
_description: The Ignite UI for Angular Data Grid control features the fastest, touch-responsive data-rich grid with popular features, including hierarchical and list views.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, Summaries, Summary
---

### Grid Summaries

Displays a summary row for the data in the columns of the grid. There are predefined summary functions, but you can create custom function to calculate custom summaries.
Grid **summaries** can also be enabled on a per-column level, which means that you can activate it only for columns that you need to.

> [!NOTE]
> The summary of the column is a **function of all column values**, unless filtering is applied, then the summary of the column will be **function of the filtered result values**

### Grid Demo

<div class="sample-container loading" style="height:750px">
    <iframe id="grid-summary-sample-iframe" src='{environment:demosBaseUrl}/grid-summary' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="grid-summary-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>


**Grid summaries** gives you a predefined set of default summaries, depending on the type of data in the column, so that you can save some time:


For `string` and `boolean` data types, the following function is available:
 - count

For `number` data type, the following functions are available:
 - count
 - min
 - max
 - average
 - sum

For `date` data type, the following functions are available:
 - count
 - earliest
 - latest

**Grid summaries** are enabled per-column by setting `hasSummary` property to `true`. It is also important to keep in mind that the summaries for each column are resolved according to the column data type. In the `igx-grid` the default column data type is `string`, so if you want `number` or `date` specific summaries you should specify the `dataType` property as `number` or `date`.

```typescript
<igx-grid #grid1 [data]="data" [autoGenerate]="false" height="800px" width="800px" (onColumnInit)="initColunm($event)" >
    <igx-column field="ProductID" header="Product ID" width="200px"  [sortable]="true">
    </igx-column>
    <igx-column field="ProductName" header="Product Name" width="200px" [sortable]="true" [hasSummary]="true">
    </igx-column>
    <igx-column field="ReorderLevel" width="200px" [editable]="true" [dataType]="'number'" [hasSummary]="true">
    </igx-column>
</igx-grid>
```

The other way to enable/disable summaries for a specific column or a list of columns is to use the public method `enableSummaries`/`disableSummaries` of the **igx-grid**.

```typescript
<igx-grid #grid1 [data]="data" [autoGenerate]="false" height="800px" width="800px" (onColumnInit)="initColunm($event)" >
    <igx-column field="ProductID" header="Product ID" width="200px"  [sortable]="true">
    </igx-column>
    <igx-column field="ProductName" header="Product Name" width="200px" [sortable]="true" [hasSummary]="true">
    </igx-column>
    <igx-column field="ReorderLevel" width="200px" [editable]="true" [dataType]="'number'" [hasSummary]="false">
    </igx-column>
</igx-grid>
<button (click)="enableSummary()">Enable Summary</button>
<button (click)="disableSummary()">Disable Summary </button>
```
```typescript
public enableSummary() {
    this.grid1.enableSummaries([{fieldName: "ReorderLevel", customSummary: this.mySummary},
    {fieldName: "ProductID"}]);
  }
public disableSummary() {
    this.grid1.disableSummaries("ProductName");
}
```

If these functions do not fulfill your requirements you can provide a custom summary for the specific columns. In order to achieve this you have to override one of the base classes `IgxSummaryOperand`, `IgxNumberSummaryOperand` or `IgxDateSummaryOperand` according to the column data type and your needs. In this way you can redefine the existing function or you can add new functions. `IgxSummaryOperand`  class provides the default implementation only for `count` method. `IgxNumberSummaryOperand` extends `IgxSummaryOperand` and provides implementation for the `min`, `max`, `sum` and `average`. `IgxDateSummaryOperand` extends `IgxSummaryOperand`and additionally gives you `earliest` and `latest`.

```typescript
import { IgxSummaryResult, IgxSummaryOperand, IgxNumberSummaryOperand, IgxDateSummaryOperand } from 'igniteui-angular/grid/grid-summary';

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

In the code below you can see that method **operate** returns a list of **IgxSummaryResult**, which is an interface.
```typescript
interface IgxSummaryResult {
    key: string;
    label: string;
    summaryResult: any;
}
```
And now let's add our custom summary to the column `UnitsInStock`. We will achieve that by setting the `summaries` property to the class we create below.
```typescript
<igx-grid #grid1 [data]="data" [autoGenerate]="false" height="800px" width="800px" (onColumnInit)="initColunm($event)" >
    <igx-column field="ProductID" width="200px"  [sortable]="true">
    </igx-column>
    <igx-column field="ProductName" width="200px" [sortable]="true" [hasSummary]="true">
    </igx-column>
    <igx-column field="UnitsInStock" width="200px" [dataType]="'number'" [hasSummary]="true" [summaries]="mySummary" [sortable]="true">
    </igx-column>
    <igx-column field="ReorderLevel" width="200px" [editable]="true" [dataType]="'number'" [hasSummary]="true">
    </igx-column>
</igx-grid>
```

```typescript
...
export class GridComponent implements OnInit {

  mySummary = MySummary;

    ....
}
```

It is good to keep in mind that in order to improve performance, **igx-grid** cache all summaries and recalculate them if you perform CRUD operations over your data. But if your data source is modified outside the **igx-grid**, you need to explicitly force the **igx-grid** to recalculate your summaries by invoking the method `clearSummaryCache()`.

```typescript
<igx-grid #grid1 [data]="data" [autoGenerate]="false" height="800px" width="800px" (onColumnInit)="initColunm($event)" >
    <igx-column field="ProductID" width="200px"  [sortable]="true">
    </igx-column>
    <igx-column field="ProductName" width="200px" [sortable]="true" [hasSummary]="true">
    </igx-column>
    <igx-column field="UnitsInStock" width="200px" [dataType]="'number'" [hasSummary]="true" [summaries]="mySummary" [sortable]="true">
    </igx-column>
    <igx-column field="ReorderLevel" width="200px" [editable]="true" [dataType]="'number'" [hasSummary]="true">
    </igx-column>
</igx-grid>
<button (click)="updateData()">Update Data</button>
```

```typescript
...
export class GridComponent implements OnInit {

 updateData() {
    const d = [].concat(this.data).concat(this.data.slice(0, 15));
    this.data = d;
    this.grid1.clearSummaryCache();
  }
}
```

Same applies for the case when `http` request is made, we should clean up the cache.

```typescript
this.http.get<any[]>('/assets/data.json')
    .subscribe(data => {
    this.data = data;
    this.grid1.clearSummaryCache();
});
```

### Additional Resources
<div class="divider--half"></div>

* [Grid overview](grid.html)
* [Virtualization and Performance](grid_virtualization.html)
* [Paging](grid_paging.html)
* [Filtering](grid_filtering.html)
* [Sorting](grid_sorting.html)
* [Column Pinning](grid_column_pinning.html)
* [Column Resizing](grid_column_resizing.html)
* [Selection](grid_selection.html)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
