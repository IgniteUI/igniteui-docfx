---
title: Summaries Component - Native Angular | Ignite UI for Angular
_description: With the Ignite UI for Angular Summaries component, see the column information in a separate container with a predefined set of default summary items, depending on the type of data within the column.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Component, Angular Grid, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, Summaries, Summary
---

### @@igComponent Summaries

The @@igComponent component in ignite UI for Angular has a **summaries** feature that functions on a per-column level.

#### Demo

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:650px">
    <iframe id="grid-summary-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-summary' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-summary-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:650px">
    <iframe id="treegrid-summary-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-summary' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-summary-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
  <!-- todo -->
}

<div class="divider--half"></div>

> [!NOTE]
> The summary of the column is a **function of all column values**, unless filtering is applied, then the summary of the column will be **function of the filtered result values**

The user is able to see the column information in a separate container with a predefined set of default summary items, depending on the type of data within the column. **@@igComponent summaries** can also be enabled on a per-column level in Ignite UI for Angular, which means that you can activate it only for columns that you need. @@igComponent summaries gives you a predefined set of default summaries, depending on the type of data in the column, so that you can save some time:


For `string` and `boolean` [`data types`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#datatype), the following function is available:
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

**@@igComponent summaries** are enabled per-column by setting [`hasSummary`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#hassummary) property to `true`. It is also important to keep in mind that the summaries for each column are resolved according to the column data type. In the `@@igSelector` the default column data type is `string`, so if you want `number` or `date` specific summaries you should specify the [`dataType`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#datatype) property as `number` or `date`.

```html
<@@igSelector #grid1 [data]="data" [autoGenerate]="false" height="800px" width="800px" (onColumnInit)="initColumn($event)">
    <igx-column field="ProductID" header="Product ID" width="200px"  [sortable]="true">
    </igx-column>
    <igx-column field="ProductName" header="Product Name" width="200px" [sortable]="true" [hasSummary]="true">
    </igx-column>
    <igx-column field="ReorderLevel" width="200px" [editable]="true" [dataType]="'number'" [hasSummary]="true">
    </igx-column>
</@@igSelector>
```

The other way to enable/disable summaries for a specific column or a list of columns is to use the public method [`enableSummaries`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#enablesummaries)/[`disableSummaries`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#disablesummaries) of the **@@igSelector**.

```html
<@@igSelector #grid1 [data]="data" [autoGenerate]="false" height="800px" width="800px" (onColumnInit)="initColumn($event)" >
    <igx-column field="ProductID" header="Product ID" width="200px"  [sortable]="true">
    </igx-column>
    <igx-column field="ProductName" header="Product Name" width="200px" [sortable]="true" [hasSummary]="true">
    </igx-column>
    <igx-column field="ReorderLevel" width="200px" [editable]="true" [dataType]="'number'" [hasSummary]="false">
    </igx-column>
</@@igSelector>
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

If these functions do not fulfill your requirements you can provide a custom summary for the specific columns. In order to achieve this you have to override one of the base classes [`IgxSummaryOperand`]({environment:angularApiUrl}/classes/igxsummaryoperand.html), [`IgxNumberSummaryOperand`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html) or [`IgxDateSummaryOperand`]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html) according to the column data type and your needs. In this way you can redefine the existing function or you can add new functions. [`IgxSummaryOperand`]({environment:angularApiUrl}/classes/igxsummaryoperand.html) class provides the default implementation only for [`count`]({environment:angularApiUrl}/classes/igxsummaryoperand.html#count) method. [`IgxNumberSummaryOperand`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html) extends [`IgxSummaryOperand`]({environment:angularApiUrl}/classes/igxsummaryoperand.html) and provides implementation for the [`min`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html#min), [`max`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html#max), [`sum`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html#sum) and [`average`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html#average). [`IgxDateSummaryOperand`]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html) extends [`IgxSummaryOperand`]({environment:angularApiUrl}/classes/igxsummaryoperand.html) and additionally gives you [`earliest`]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html#earliest) and [`latest`]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html#latest).

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

In the code above you can see that method [`operate`]({environment:angularApiUrl}/classes/igxsummaryoperand.html#operate) returns a list of [`IgxSummaryResult`]({environment:angularApiUrl}/interfaces/igxsummaryresult.html), which is an interface.
```typescript
interface IgxSummaryResult {
    key: string;
    label: string;
    summaryResult: any;
}
```

> [!NOTE]
> In order to calculate the summary row height properly, the @@igComponent needs the [`operate`]({environment:angularApiUrl}/classes/igxsummaryoperand.html#operate) method to always return an array of [`IgxSummaryResult`]({environment:angularApiUrl}/interfaces/igxsummaryresult.html) with the proper length even when the data is empty.

And now let's add our custom summary to the column `UnitsInStock`. We will achieve that by setting the [`summaries`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#summaries) property to the class we create below.
```html
<@@igSelector #grid1 [data]="data" [autoGenerate]="false" height="800px" width="800px" (onColumnInit)="initColumn($event)" >
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

### Summaries with Group By

When you have grouped by columns, the @@igComponent allows you to change the summary position and calculation mode using the [`summaryCalculationMode`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summarycalculationmode) and [`summaryPosition`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summaryposition) properties.

The available values of the [`summaryCalculationMode`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summarycalculationmode) property are:
 - rootLevelOnly - Summaries are calculated only for the root level.
 - childLevelsOnly - Summaries are calculated only for the child levels.
 - rootAndChildLevels - Summaries are calculated for both root and child levels. This is the default value.

The available values of the [`summaryPosition`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summaryposition) property are:
 - top - The summary row appears before the group by row children.
 - bottom - The summary row appears after the group by row children. This is the default value.

> [!NOTE]
> The [`summaryPosition`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summaryposition) property applies only for the child level summaries. The root level summaries appear always fixed at the bottom of the @@igComponent.

#### Demo

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:720px">
    <iframe id="grid-groupby-summary-iframe" src='{environment:demosBaseUrl}/grid/grid-groupby-summary' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-groupby-summary-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {

}
@@if (igxName === 'IgxHierarchicalGrid') {
  <!-- todo -->
}

<div class="divider--half"></div>

#### Keyboard Navigation

The summary rows can be navigated with the following keyboard interactions:

- <kbd>UP</kbd> - navigates one cell up
- <kbd>DOWN</kbd> - navigates one cell down
- <kbd>LEFT</kbd> - navigates one cell left
- <kbd>RIGHT</kbd> - navigates one cell right
- <kbd>CTRL</kbd> + <kbd>LEFT</kbd> or <kbd>HOME</kbd> - navigates to the leftmost cell
- <kbd>CTRL</kbd> + <kbd>RIGHT</kbd> or <kbd>END</kbd> - navigates to the rightmost cell
- <kbd>TAB</kbd> - sequentially navigates to the next cell on the row and if the last cell is reached navigates to the next row
- <kbd>SHIFT</kbd> + <kbd>TAB</kbd> - sequentially navigates to the previous cell on the row and if the first cell is reached navigates to the previous row

### API References

* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [@@igxNameSummaries Styles]({environment:sassApiUrl}/index.html#function-igx-grid-summary-theme)
* [IgxSummaryOperand]({environment:angularApiUrl}/classes/igxsummaryoperand.html)
* [IgxNumberSummaryOperand]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html)
* [IgxDateSummaryOperand]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html)
* [IgxColumnGroupComponent]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)

### Additional Resources
<div class="divider--half"></div>

* [@@igComponent overview](@@igMainTopic.md)
* [Virtualization and Performance](virtualization.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Column Moving](column_moving.md)
* [Column Pinning](column_pinning.md)
* [Column Resizing](column_resizing.md)
* [Selection](selection.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
