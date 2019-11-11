---
title: Excel Library Using Worksheets
_description: The Ignite UI for Excel Library component with Worksheet Operations.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Excel Library, Angular Excel Library Example, Angular Excel Library Component, Angular Excel Engine, Worksheet, Conditional Formatting, Sorting, Filtering, Gridlines, Headers, Protection
---

## Using Worksheets

The Infragistics Excel Engine's [`Worksheet`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheet.html) is where your data is kept. You can input data by working with the Worksheet's rows and cells and setting their corresponding values. The [`Worksheet`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheet.html) allows you to filter, sort, and customize the formats of the cells, as shown below.

### Demo

<div class="sample-container loading" style="height: 100px">
    <iframe id="excel-library-overview-sample-iframe" src='{environment:dvDemosBaseUrl}/excel-library/operations-on-worksheets' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>

<div class="divider--half"></div>

The following code shows the imports needed to use the code-snippets below:

```ts
import { Workbook } from "igniteui-angular-excel/ES5/Workbook";
import { Worksheet } from "igniteui-angular-excel/ES5/Worksheet";
import { WorkbookFormat } from "igniteui-angular-excel/ES5/WorkbookFormat";
import { Color } from "igniteui-angular-core/ES5/Color";

import { CustomFilterCondition } from "igniteui-angular-excel/ES5/excel.core";
import { ExcelComparisonOperator } from "igniteui-angular-excel/ES5/excel.core";
import { FormatConditionTextOperator } from "igniteui-angular-excel/ES5/excel.core";
import { OrderedSortCondition } from "igniteui-angular-excel/ES5/excel.core";
import { RelativeIndex } from "igniteui-angular-excel/ES5/excel.core";
import { SortDirection } from "igniteui-angular-excel/ES5/excel.core";
import { WorkbookColorInfo } from "igniteui-angular-excel/ES5/excel.core";
```

### Configuring the Gridlines

The gridlines are used to visually separate the cells in the worksheet. You may show or hide the gridlines and also change their color.

You can show or hide the gridlines using the `showGridlines` property of the `displayOptions` of the worksheet. The following code demonstrates how you can hide the gridlines in your worksheet:

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.displayOptions.showGridlines = false;
```

```ts
let workbook = new Workbook(WorkbookFormat.Excel2007);
let worksheet = workbook.worksheets().add("Sheet1");

worksheet.displayOptions.showGridlines = false;
```

You can configure the gridlines' color using the `gridlineColor` property of the `displayOptions` of the worksheet. The following code demonstrates how you can change the gridlines in your worksheet to be red:

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.displayOptions.gridlineColor = "Red";
```

```ts
let workbook = new Workbook(WorkbookFormat.Excel2007);
let worksheet = workbook.worksheets().add("Sheet1");

worksheet.displayOptions.gridlineColor = "Red";
```

### Configuring the Headers

The column and row headers are used to visually identify columns and rows. They are also used to visually highlight the currently selected cell or cell region.

You can show or hide the column and row headers using the `showRowAndColumnHeaders` property of the `displayOptions` of the worksheet. The following code demonstrates how you can hide the row and column headers:

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.displayOptions.showRowAndColumnHeaders = false;
```

```ts
let workbook = new Workbook(WorkbookFormat.Excel2007);
let worksheet = workbook.worksheets().add("Sheet1");

worksheet.displayOptions.showRowAndColumnHeaders = false;
```

### Configuring Editing of the Worksheet

By default, the [`Worksheet`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheet.html) objects that you save will be editable. You can disable editing of a worksheet by protecting it using the [`Worksheet`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheet.html) object's `protect` method. This method has a lot of nullable `bool` arguments that determine which pieces are protected, and one of these options is to allow editing of objects, which if set to `false` will prevent editing of the worksheet.

The following code demonstrates how to disable editing in your worksheet:

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.protect();
```

```ts
let workbook = new Workbook(WorkbookFormat.Excel2007);
let worksheet = workbook.worksheets().add("Sheet1");

worksheet.protect();
```

You can also use the [`Worksheet`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheet.html) object's `protect` method to protect a worksheet against structural changes.

When protection is set, you can set the `CellFormat` object's `locked` property on individual cells, rows, merged cell regions, or columns to override the worksheet object's protection on those objects. For example, if you need all cells of a worksheet to be read-only except for the cells of one column, you can protect the worksheet and then set the `CellFormat` object's `locked` property to `false` on a specific [`WorksheetColumn`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcolumn.html) object. This will allow your users to edit cells within the column while disabling editing of the other cells in the worksheet.

The following code demonstrates how you can do this:

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.protect();
worksheet.columns(0).cellFormat.locked = false;
```

```ts
let workbook = new Workbook(WorkbookFormat.Excel2007);
let worksheet = workbook.worksheets().add("Sheet1");

worksheet.protect();
worksheet.columns(0).cellFormat.locked = false;
```

### Filtering Worksheet Regions

Filtering is done by setting a filter condition on a worksheet's [`WorksheetFilterSettings`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetfiltersettings.html) which can be retrieved from the [`Worksheet`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheet.html) object's `filterSettings` property. Filter conditions are only reapplied when they're added, removed, modified, or when the `reapplyFilters` method is called on the worksheet. They are not constantly evaluated as data within the region changes.

You can specify the region to apply the filter by using the `setRegion` method on the [`WorksheetFilterSettings`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetfiltersettings.html) object.

Below is a list of methods and their descriptions that you can use to add a filter to a worksheet:

| Method                                                                                                                                                     |                                                                                                    Description                                                                                                   |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [`applyAverageFilter`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetfiltersettings.html#applyaveragefilter)                     |                                            Represents a filter which can filter data based on whether the data is below or above the average of the entire data range.                                           |
| [`applyDatePeriodFilter`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetfiltersettings.html#applydateperiodfilter)               |                                                                  Represents a filter which can filter dates in a Month, or quarter of any year.                                                                  |
| [`applyFillFilter`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetfiltersettings.html#applyfillfilter)                           | Represents a filter which will filter cells based on their background fills. This filter specifies a single CellFill. Cells of with this fill will be visible in the data range. All other cells will be hidden. |
| `ApplyFixedValuesFilter`                                                                                                                                   |                                                     Represents a filter which can filter cells based on specific, fixed values, which are allowed to display.                                                    |
| [`applyFontColorFilter`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetfiltersettings.html#applyfontcolorfilter)                 |    Represents a filter which will filter cells based on their font colors. This filter specifies a single color. Cells with this color font will be visible in the data range. All other cells will be hidden.   |
| [`applyIconFilter`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetfiltersettings.html#applyiconfilter)                           |                                                              Represents a filter which can filter cells based on their conditional formatting icon.                                                              |
| [`applyRelativeDateRangeFilter`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetfiltersettings.html#applyrelativedaterangefilter) |                                                    Represents a filter which can filter date cells based on dates relative to the when the filter was applied.                                                   |
| [`applyTopOrBottomFilter`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetfiltersettings.html#applytoporbottomfilter)             |                                                         Represents a filter which can filter in cells in the upper or lower portion of the sorted values.                                                        |
| [`applyYearToDateFilter`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetfiltersettings.html#applyyeartodatefilter)               |                              Represents a filter which can filter in date cells if the dates occur between the start of the current year and the time when the filter is evaluated.                              |
| [`applyCustomFilter`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetfiltersettings.html#applycustomfilter)                       |                  Represents a filter which can filter data based on one or two custom conditions. These two filter conditions can be combined with a logical "and" or a logical "or" operation.                  |

You can use the following code snippet as an example to add a filter to a worksheet region:

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.filterSettings.setRegion("Sheet1!A1:A10");
worksheet.filterSettings.applyAverageFilter(0, AverageFilterType.AboveAverage);
```

```ts
let workbook = new Workbook(WorkbookFormat.Excel2007);
let worksheet = workbook.worksheets().add("Sheet1");

worksheet.filterSettings.setRegion("Sheet1!A1:A10");
worksheet.filterSettings.applyAverageFilter(0, AverageFilterType.AboveAverage);
```

### Freezing and Splitting Panes

You can freeze rows at the top of your worksheet or columns at the left using the freezing panes features. Frozen rows and columns remain visible at all times while the user is scrolling. The frozen rows and columns are separated from the rest of the worksheet by a single, solid line, which cannot be removed.

In order to enable pane freezing, you need to set the `panesAreFrozen` property of the [`Worksheet`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheet.html) object's `displayOptions` to `true`. You can then specify the rows or columns to freeze by using the `frozenRows` and `frozenColumns` properties of the display options `frozenPaneSettings`, respectively.

You can also specify the first row in the bottom pane or first column in the right pane using the `firstRowInBottomPane` and `firstColumnInRightPane` properties, respectively.

The following code snippet demonstrates how to use the freezing panes features in a worksheet:

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.displayOptions.panesAreFrozen = true;

worksheet.displayOptions.frozenPaneSettings.frozenRows = 3;
worksheet.displayOptions.frozenPaneSettings.frozenColumns = 1;

worksheet.displayOptions.frozenPaneSettings.firstColumnInRightPane = 2;
worksheet.displayOptions.frozenPaneSettings.firstRowInBottomPane = 6;
```

```ts
let workbook = new Workbook(WorkbookFormat.Excel2007);
let worksheet = workbook.worksheets().add("Sheet1");

worksheet.displayOptions.panesAreFrozen = true;

worksheet.displayOptions.frozenPaneSettings.frozenRows = 3;
worksheet.displayOptions.frozenPaneSettings.frozenColumns = 1;

worksheet.displayOptions.frozenPaneSettings.firstColumnInRightPane = 2;
worksheet.displayOptions.frozenPaneSettings.firstRowInBottomPane = 6;
```

### Setting the Worksheet Zoom Level

You can change the zoom level for each worksheet independently using the `magnificationInNormalView` property on the [`Worksheet`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheet.html) object's `displayOptions`. This property takes a value between 10 and 400 and represents the percentage of zoom that you wish to apply.

The following code demonstrates how you can do this:

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.displayOptions.magnificationInNormalView = 300;
```

```ts
let workbook = new Workbook(WorkbookFormat.Excel2007);
let worksheet = workbook.worksheets().add("Sheet1");

worksheet.displayOptions.magnificationInNormalView = 300;
```

### Worksheet Level Sorting

Sorting is done by setting a sorting condition on a worksheet level object on either columns or rows. You can sort columns or rows in ascending or descending order.

This is done by specifying a region and sort type to the [`Worksheet`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheet.html) object's [`WorksheetSortSettings`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetsortsettings.html) that can be retrieved using the `sortSettings` property of the sheet.

The sort conditions in a sheet are only reapplied when sort conditions are added, removed, modified, or when the `reapplySortConditions` method is called on the worksheet. Columns or rows will be sorted within the region. "Rows" is the default sort type.

The following code snippet demonstrates how to apply a sort to a region of cells in a worksheet:

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.sortSettings.sortConditions().addItem(new RelativeIndex(0), new OrderedSortCondition(SortDirection.Ascending));
```

```ts
let workbook = new Workbook(WorkbookFormat.Excel2007);
let worksheet = workbook.worksheets().add("Sheet1");

worksheet.sortSettings.sortConditions().addItem(new RelativeIndex(0), new OrderedSortCondition(SortDirection.Ascending));
```

### Worksheet Protection

You can protect a worksheet by calling the `protect` method on the [`Worksheet`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheet.html) object. This method exposes many nullable `bool` parameters that allow you to restrict or allow the following user operations:

-   Editing of cells.
-   Editing of objects such as shapes, comments, charts, or other controls.
-   Editing of scenarios.
-   Filtering of data.
-   Formatting of cells.
-   Inserting, deleting, and formatting of columns.
-   Inserting, deleting, and formatting of rows.
-   Inserting of hyperlinks.
-   Sorting of data.
-   Usage of pivot tables.

You can remove worksheet protection by calling the `unprotect` method on the [`Worksheet`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheet.html) object.

The following code snippet shows how to enable protection of all of the above-listed user operations:

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.protect();
```

```ts
let workbook = new Workbook(WorkbookFormat.Excel2007);
let worksheet = workbook.worksheets().add("Sheet1");

worksheet.protect();
```

### Worksheet Conditional Formatting

You can configure the conditional formatting of a [`Worksheet`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheet.html) object by using the many "Add" methods exposed on the `conditionalFormats` collection of that worksheet. The first parameter of these "Add" methods is the `string` region of the worksheet that you would like to apply the conditional format to.

Many of the conditional formats that you can add to your worksheet have a `cellFormat` property that determines the way that the [`WorksheetCell`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html) elements should look when the condition in that conditional format holds true. For example, you can use the properties attached to this `cellFormat` property such as `Fill` and `Font` to determine the background and font settings of your cells under a particular conditional format, respectively.

There are a few conditional formats that do not have a `cellFormat` property, as their visualization on the worksheet cell behaves differently. These conditional formats are the [`DataBarConditionalFormat`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/databarconditionalformat.html), [`ColorScaleConditionalFormat`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/colorscaleconditionalformat.html), and [`IconSetConditionalFormat`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/iconsetconditionalformat.html).

When loading a pre-existing [`Workbook`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbook.html) from Excel, the formats will be preserved when that [`Workbook`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbook.html) is loaded. The same is true for when you save the [`Workbook`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbook.html) out to an Excel file.

The following code example demonstrates usage of conditional formats on a worksheet:

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

var color = new Color();
color.colorString = "Red";

var format = worksheet.conditionalFormats().addAverageCondition("A1:A10", FormatConditionAboveBelow.AboveAverage);
format.cellFormat.font.colorInfo = new WorkbookColorInfo(color);
```

```ts
let workbook = new Workbook(WorkbookFormat.Excel2007);
let worksheet = workbook.worksheets().add("Sheet1");

let color = new Color();
color.colorString = "Red";

let format = worksheet.conditionalFormats().addAverageCondition("A1:A10", FormatConditionAboveBelow.AboveAverage);
format.cellFormat.font.colorInfo = new WorkbookColorInfo(color);
```
