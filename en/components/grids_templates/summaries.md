@@if (igxName === 'IgxGrid') {
---
title: Angular Grid Summaries| Group Footer | Ignite UI for Angular | Infragistics
_description: Configure Angular grid summaries in the group footer of the column and use the option to set custom angular template in the Ignite UI for Angular Material table
_keywords: angular grid summaries, igniteui for angular, infragistics
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid Summaries| Group Footer | Ignite UI for Angular | Infragistics
_description: Configure Аngular grid summaries in the group footer of the column and use the option to set custom angular template in the Ignite UI for Angular Material table
_keywords: angular grid summaries, ignite ui for angular, infragistics
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchical Grid Summaries| Group Footer | Ignite UI for Angular | Infragistics
_description: Configure Аngular grid summaries in the group footer of the column and use the option to set custom angular template in the Ignite UI for Angular Material table
_keywords: angular grid summaries, ignite ui for angular, infragistics
---
}

# @@igComponent Summaries Overview

The Angular UI grid in Ignite UI for Angular has a **summaries** feature that functions on a per-column level as group footer. Angular grid summaries is powerful feature which enables the user to see column information in a separate container with a predefined set of default summary items, depending on the type of data within the column or by implementing a custom angular template in the @@igComponent.

### Demo

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:650px">
    <iframe id="grid-summary-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-summary' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-summary-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-summary-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:750px">
    <iframe id="treegrid-summary-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-summary' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-summary-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-summary-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
  <div class="sample-container loading" style="height:650px">
    <iframe id="hierarchical-grid-summary-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-summary' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-summary-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-summary-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}

<div class="divider--half"></div>

> [!NOTE]
> The summary of the column is a **function of all column values**, unless filtering is applied, then the summary of the column will be **function of the filtered result values**

**@@igComponent summaries** can also be enabled on a per-column level in Ignite UI for Angular, which means that you can activate it only for columns that you need. @@igComponent summaries gives you a predefined set of default summaries, depending on the type of data in the column, so that you can save some time:


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

@@if (igxName !== 'IgxHierarchicalGrid') {
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
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false"
        [height]="'600px'" [width]="'100%'" #hierarchicalGrid>
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
        ...
    </igx-hierarchical-grid>

```
}
The other way to enable/disable summaries for a specific column or a list of columns is to use the public method [`enableSummaries`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#enablesummaries)/[`disableSummaries`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#disablesummaries) of the **@@igSelector**.

@@if (igxName !== 'IgxHierarchicalGrid') {
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
    this.grid1.enableSummaries([
        {fieldName: "ReorderLevel", customSummary: this.mySummary},
        {fieldName: "ProductID"}
    ]);
}
public disableSummary() {
    this.grid1.disableSummaries("ProductName");
}
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<@@igSelector #hierarchicalGrid [data]="data" [autoGenerate]="false" height="800px" width="800px" (onColumnInit)="initColumn($event)" >
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
        {fieldName: "Grammy Nominations", customSummary: this.mySummary},
        {fieldName: "Artist"}
    ]);
}
public disableSummary() {
    this.hierarchicalGrid.disableSummaries("Photo");
}
```
}

## Custom @@igComponent Summaries
If these functions do not fulfill your requirements you can provide a custom summary for the specific columns. In order to achieve this you have to override one of the base classes [`IgxSummaryOperand`]({environment:angularApiUrl}/classes/igxsummaryoperand.html), [`IgxNumberSummaryOperand`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html) or [`IgxDateSummaryOperand`]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html) according to the column data type and your needs. This way you can redefine the existing function or you can add new functions. [`IgxSummaryOperand`]({environment:angularApiUrl}/classes/igxsummaryoperand.html) class provides the default implementation only for the [`count`]({environment:angularApiUrl}/classes/igxsummaryoperand.html#count) method. [`IgxNumberSummaryOperand`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html) extends [`IgxSummaryOperand`]({environment:angularApiUrl}/classes/igxsummaryoperand.html) and provides implementation for the [`min`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html#min), [`max`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html#max), [`sum`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html#sum) and [`average`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html#average). [`IgxDateSummaryOperand`]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html) extends [`IgxSummaryOperand`]({environment:angularApiUrl}/classes/igxsummaryoperand.html) and additionally gives you [`earliest`]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html#earliest) and [`latest`]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html#latest).

@@if (igxName !== 'IgxHierarchicalGrid') {
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
}
@@if (igxName === 'IgxHierarchicalGrid') {
```typescript
import { IgxRowIslandComponent, IgxHierarchicalGridComponent, IgxNumberSummaryOperand, IgxSummaryResult } from "igniteui-angular";

class MySummary extends IgxNumberSummaryOperand {

    constructor() {
      super();
    }
    public operate(data?: any[]): IgxSummaryResult[] {
      const result = super.operate(data);
      result.push({
        key: "test",
        label: "More than 5",
        summaryResult: data.filter((rec) => rec > 5).length
      });

      return result;
    }
  }
```
}
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
@@if (igxName !== 'IgxHierarchicalGrid') {
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
}

@@if (igxName === 'IgxHierarchicalGrid') {
And now let's add our custom summary to the column `GramyNominations`. We will achieve that by setting the [`summaries`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#summaries) property to the class we create below.
```html
 <igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false"
        [height]="'600px'" [width]="'100%'" #hierarchicalGrid>
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
...
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

### Custom summaries, which access all @@igComponent data
 Now you can access all grid data inside the custom column summary. Two additional optional parameters are introduced in the IgxSummaryOperand `operate` method.
As you can see in the code snippet below the operate method has the following three parameters:
- columnData - gives you an array that contains the values only for the current column
- allGridData - gives you the whole grid data source
- fieldName - current column field

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

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:650px">
    <iframe id="grid-alldata-summaries-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-alldata-summaries' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-alldata-summaries-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-alldata-summaries-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:650px">
    <iframe id="tree-grid-allData-summary-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/tree-grid-allData-summary' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="tree-grid-allData-summary-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-allData-summary-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
  <div class="sample-container loading" style="height:650px">
    <iframe id="hierarchical-grid-allData-summary-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-allData-summary' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-allData-summary-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-allData-summary-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}


@@if (igxName === 'IgxGrid') {
## Summaries with Group By

When you have grouped by columns, the @@igComponent allows you to change the summary position and calculation mode using the [`summaryCalculationMode`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summarycalculationmode) and [`summaryPosition`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summaryposition) properties. Along with these two properties the @@igxName exposes and [`showSummaryOnCollapse`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#showsummaryoncollapse) property which allows you to determine whether the summary row stays visible when the group row that refers to is collapsed.

The available values of the [`summaryCalculationMode`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summarycalculationmode) property are:
 - rootLevelOnly - Summaries are calculated only for the root level.
 - childLevelsOnly - Summaries are calculated only for the child levels.
 - rootAndChildLevels - Summaries are calculated for both root and child levels. This is the default value.

The available values of the [`summaryPosition`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summaryposition) property are:
 - top - The summary row appears before the group by row children.
 - bottom - The summary row appears after the group by row children. This is the default value.

The [`showSummaryOnCollapse`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#showsummaryoncollapse) property is boolean. Its default value is set to **false**, which means that the summary row would be hidden when the group row is collapsed. If the property is set to **true** the summary row stays visible when group row is collapsed.


> [!NOTE]
> The [`summaryPosition`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summaryposition) property applies only for the child level summaries. The root level summaries appear always fixed at the bottom of the @@igComponent.

### Demo

<div class="sample-container loading" style="height:720px">
    <iframe id="grid-groupby-summary-iframe" data-src='{environment:demosBaseUrl}/grid/grid-groupby-summary' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-groupby-summary-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-groupby-summary-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
## Child Summaries

The @@igComponent supports separate summaries for the root nodes and for each nested child node level. Which summaries are shown is configurable using the [`summaryCalculationMode`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summarycalculationmode) property. The child level summaries can be shown before or after the child nodes using the [`summaryPosition`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summaryposition) property. Along with these two properties the @@igxName exposes and [`showSummaryOnCollapse`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#showsummaryoncollapse) property which allows you to determine whether the summary row stays visible when the parent node that refers to is collapsed.


The available values of the [`summaryCalculationMode`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summarycalculationmode) property are:
 - rootLevelOnly - Summaries are calculated only for the root level nodes.
 - childLevelsOnly - Summaries are calculated only for the child levels.
 - rootAndChildLevels - Summaries are calculated for both root and child levels. This is the default value.

The available values of the [`summaryPosition`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summaryposition) property are:
 - top - The summary row appears before the list of child rows.
 - bottom - The summary row appears after the list of child rows. This is the default value.

The [`showSummaryOnCollapse`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#showsummaryoncollapse) property is boolean. Its default value is set to **false**, which means that the summary row would be hidden when the parent row is collapsed. If the property is set to **true** the summary row stays visible when parent row is collapsed.

> [!NOTE]
> The [`summaryPosition`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summaryposition) property applies only for the child level summaries. The root level summaries appear always fixed at the bottom of the @@igComponent.

<div class="sample-container loading" style="height:720px">
    <iframe id="treegrid-child-summary-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-summary2' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-child-summary-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-child-summary-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
<div class="divider--half"></div>

## Keyboard Navigation

The summary rows can be navigated with the following keyboard interactions:

- <kbd>UP</kbd> - navigates one cell up
- <kbd>DOWN</kbd> - navigates one cell down
- <kbd>LEFT</kbd> - navigates one cell left
- <kbd>RIGHT</kbd> - navigates one cell right
- <kbd>CTRL</kbd> + <kbd>LEFT</kbd> or <kbd>HOME</kbd> - navigates to the leftmost cell
- <kbd>CTRL</kbd> + <kbd>RIGHT</kbd> or <kbd>END</kbd> - navigates to the rightmost cell
- <kbd>TAB</kbd> - sequentially navigates to the next cell on the row and if the last cell is reached navigates to the next row
- <kbd>SHIFT</kbd> + <kbd>TAB</kbd> - sequentially navigates to the previous cell on the row and if the first cell is reached navigates to the previous row

## Styling

To get started with styling the sorting behavior, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`igx-grid-summary-theme`]({environment:sassApiUrl}/index.html#function-igx-grid-summary-theme) and accepts the `$background-color`, `$focus-background-color`, `$label-color`, `$result-color`, `$pinned-border-width`, `$pinned-border-style` and `$pinned-border-color` parameters.

```scss
$custom-theme: igx-grid-summary-theme(
    $background-color: #e0f3ff,
    $focus-background-color: rgba( #94d1f7, .3 ),
    $label-color: #e41c77,
    $result-color: black,
    $pinned-border-width: 2px,
    $pinned-border-style: dotted,
    $pinned-border-color: #e41c77
);
```
The last step is to **include** the component mixins:

```scss
@include igx-grid-summary($custom-theme);
```

>[!NOTE]
 >If the component is using an [`Emulated`](../themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:

 ```scss
:host {
    ::ng-deep {
        @include igx-grid-summary($custom-theme);
    }
}
```

### Defining a color palette

Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) and [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) functions.

`igx-palette` generates a color palette based on the primary and secondary colors that are passed:

```scss
$blue-color: #7793b1;
$green-color: #00ff2d;

$my-custom-palette: igx-palette($primary: $blue-color, $secondary: $green-color);
```

And then with [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) we can easily retrieve color from the palette.

```scss
$custom-theme: igx-grid-summary-theme(
    $background-color: igx-color($my-custom-palette, "primary", 700),
    $focus-background-color: igx-color($my-custom-palette, "primary", 800),
    $label-color: igx-color($my-custom-palette, "secondary", 500),
    $result-color: igx-color($my-custom-palette, "grays", 900),
    $pinned-border-width: 2px,
    $pinned-border-style: dotted,
    $pinned-border-color: igx-color($my-custom-palette, "secondary", 500)
);
```

>[!NOTE]
>The `igx-color` and `igx-palette` are powerful functions for generating and retrieving colors. Please refer to [`Palettes`](../themes/palette.md) topic for detailed guidance on how to use them.

### Using Schemas

Going further with the theming engine, you can build a robust and flexible structure that benefits from [**schemas**](../themes/schemas.md). A **schema** is a recipe of a theme.

Extend one of the two predefined schemas, that are provided for every component, in this case - [`_light-grid-summary`]({environment:sassApiUrl}/index.html#variable-_light-grid-summary):

```scss
// Extending the light grid summary schema
$my-summary-schema: extend($_light-grid-summary,
    (
        background-color: (igx-color: ('primary', 700)),
        focus-background-color: (igx-color: ('primary', 800)),
        label-color: (igx-color: ('secondary', 500)),
        result-color: (igx-color: ('grays', 900)),
        pinned-border-width: 2px,
        pinned-border-style: dotted,
        pinned-border-color: (igx-color: ('secondary', 500))
    )
);
```

In order to apply our custom schema we have to **extend** one of the globals ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) or [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)), which is basically pointing out the components with a custom schema, and after that add it to the respective component themes:

```scss
// Extending the global light-schema
$my-custom-schema: extend($light-schema,
    (
        igx-grid-summary: $my-summary-schema
    )
);

// Defining our custom theme with the custom schema
$custom-theme: igx-grid-summary-theme(
    $palette: $my-custom-palette,
    $schema: $my-custom-schema
);
```

Don't forget to include the themes in the same way as it was demonstrated above.

@@if (igxName === 'IgxGrid') {
### Demo

<div class="sample-container loading" style="height:710px">
    <iframe id="grid-groupby-summary-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-groupby-summary-styling' width="100%" height="100%"
        seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-groupby-summary-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-groupby-summary-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
### Demo

<div class="sample-container loading" style="height:710px">
    <iframe id="treegrid-summary-styling-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-summary-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-summary-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-summary-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
### Demo

<div class="sample-container loading" style="height:710px">
    <iframe id="hierarchical-grid-summary-styling-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-summary-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-summary-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-summary-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}

## API References

* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [@@igxNameSummaries Styles]({environment:sassApiUrl}/index.html#function-igx-grid-summary-theme)
* [IgxSummaryOperand]({environment:angularApiUrl}/classes/igxsummaryoperand.html)
* [IgxNumberSummaryOperand]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html)
* [IgxDateSummaryOperand]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html)
* [IgxColumnGroupComponent]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)

## Additional Resources
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
@@if (igxName === 'IgxGrid'){* [Selection-based Aggregates]({environment:angularApiUrl}/grid/selection_based_aggregates.html)}

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)