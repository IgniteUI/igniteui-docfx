---
title: Excel Library Using Worksheets
_description: The Ignite UI for Excel Library component with Worksheet Operations.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Excel Library, Angular Excel Library Example, Angular Excel Library Component, Angular Excel Engine, Worksheet, Conditional Formatting, Sorting, Filtering, Gridlines, Headers, Protection
_language: kr
---
## Using Worksheets

The Infragistics Excel Engine's `Worksheet` is where your data is kept. You can input data by working with the Worksheet's rows and cells and setting their corresponding values. The `Worksheet` allows you to filter, sort, and customize the formats of the cells, as shown below.

### Demo

<div class="sample-container" style="height: 100px">
    <iframe id="excel-library-overview-sample-iframe" src='{environment:demosBaseUrl}/excel-library-operations-on-worksheets' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <!-- TODO uncomment when Stackblitz is ready for EXCEL
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="excel-library-operations-on-worksheets-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기
    </button> -->
</div> 

<div class="divider--half"></div>

### Configuring the Gridlines
The gridlines are used to visually separate the cells in the worksheet. You may show or hide the gridlines and also change their color.

You can show or hide the gridlines using the `showGridlines` property of the `displayOptions` of the worksheet. The following code demonstrates how you can hide the gridlines in your worksheet:

```typescript
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");
    
worksheet.displayOptions.showGridlines = false;
```

You can configure the gridlines' color using the `gridlineColor` property of the `displayOptions` of the worksheet. The following code demonstrates how you can change the gridlines in your worksheet to be red:

```typescript
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.displayOptions.gridlineColor = "Red";
```

### Configuring the Headers
The column and row headers are used to visually identify columns and rows. They are also used to visually highlight the currently selected cell or cell region.

You can show or hide the column and row headers using the `showRowAndColumnHeaders` property of the `displayOptions` of the worksheet. The following code demonstrates how you can hide the row and column headers:

```typescript
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.displayOptions.showRowAndColumnHeaders = false;
```

### Configuring Editing of the Worksheet
By default, the `Worksheet` objects that you save will be editable. You can disable editing of a worksheet by protecting it using the `Worksheet` object's `protect` method. This method has a lot of nullable `bool` arguments that determine which pieces are protected, and one of these options is to allow editing of objects, which if set to `false` will prevent editing of the worksheet.

The following code demonstrates how to disable editing in your worksheet:

```typescript
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.protect();
```

You can also use the `Worksheet` object's `protect` method to protect a worksheet against structural changes.

When protection is set, you can set the `CellFormat` object's `locked` property on individual cells, rows, merged cell regions, or columns to override the worksheet object's protection on those objects. For example, if you need all cells of a worksheet to be read-only except for the cells of one column, you can protect the worksheet and then set the `CellFormat` object's `locked` property to `false` on a specific `WorksheetColumn` object. This will allow your users to edit cells within the column while disabling editing of the other cells in the worksheet.

The following code demonstrates how you can do this:

```typescript
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.protect();
worksheet.columns(0).cellFormat.locked = false;
```

### Filtering Worksheet Regions
Filtering is done by setting a filter condition on a worksheet's `WorksheetFilterSettings` which can be retrieved from the `Worksheet` object's `filterSettings` property. Filter conditions are only reapplied when they're added, removed, modified, or when the `reapplyFilters` method is called on the worksheet. They are not constantly evaluated as data within the region changes.

You can specify the region to apply the filter by using the `setRegion` method on the `WorksheetFilterSettings` object.

Below is a list of methods and their descriptions that you can use to add a filter to a worksheet:

| Method			| Description     																	|
| ------------- 	|:-------------:																	|
|`ApplyAverageFilter`|Represents a filter which can filter data based on whether the data is below or above the average of the entire data range.|
|`ApplyDatePeriodFilter`|Represents a filter which can filter dates in a Month, or quarter of any year.|
|`ApplyFillFilter`|Represents a filter which will filter cells based on their background fills. This filter specifies a single CellFill. Cells of with this fill will be visible in the data range. All other cells will be hidden.|
|`ApplyFixedValuesFilter`|Represents a filter which can filter cells based on specific, fixed values, which are allowed to display.|
|`ApplyFontColorFilter`|Represents a filter which will filter cells based on their font colors. This filter specifies a single color. Cells with this color font will be visible in the data range. All other cells will be hidden.|
|`ApplyIconFilter`|Represents a filter which can filter cells based on their conditional formatting icon.|
|`ApplyRelativeDateRangeFilter`|Represents a filter which can filter date cells based on dates relative to the when the filter was applied.|
|`ApplyTopOrBottomFilter`|Represents a filter which can filter in cells in the upper or lower portion of the sorted values.|
|`ApplyYearToDateFilter`|Represents a filter which can filter in date cells if the dates occur between the start of the current year and the time when the filter is evaluated.|
|`ApplyCustomFilter`|Represents a filter which can filter data based on one or two custom conditions. These two filter conditions can be combined with a logical "and" or a logical "or" operation.|

You can use the following code snippet as an example to add a filter to a worksheet region:

```typescript
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.filterSettings.setRegion("Sheet1!A1:A10");
worksheet.filterSettings.applyAverageFilter(0, AverageFilterType.AboveAverage);
```

### Freezing and Splitting Panes
You can freeze rows at the top of your worksheet or columns at the left using the freezing panes features. Frozen rows and columns remain visible at all times while the user is scrolling. The frozen rows and columns are separated from the rest of the worksheet by a single, solid line, which cannot be removed.

In order to enable pane freezing, you need to set the `panesAreFrozen` property of the `Worksheet` object's `displayOptions` to `true`. You can then specify the rows or columns to freeze by using the `frozenRows` and `frozenColumns` properties of the display options `frozenPaneSettings`, respectively.

You can also specify the first row in the bottom pane or first column in the right pane using the `firstRowInBottomPane` and `firstColumnInRightPane` properties, respectively.

The following code snippet demonstrates how to use the freezing panes features in a worksheet:

```typescript
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.displayOptions.panesAreFrozen = true;
    
worksheet.displayOptions.frozenPaneSettings.frozenRows = 3;
worksheet.displayOptions.frozenPaneSettings.frozenColumns = 1;

worksheet.displayOptions.frozenPaneSettings.firstColumnInRightPane = 2;
worksheet.displayOptions.frozenPaneSettings.firstRowInBottomPane = 6;
```

### Setting the Worksheet Zoom Level
You can change the zoom level for each worksheet independently using the `magnificationInNormalView` property on the `Worksheet` object's `displayOptions`. This property takes a value between 10 and 400 and represents the percentage of zoom that you wish to apply.

The following code demonstrates how you can do this:

```typescript
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.displayOptions.magnificationInNormalView = 300;
```

### Worksheet Level Sorting
Sorting is done by setting a sorting condition on a worksheet level object on either columns or rows. You can sort columns or rows in ascending or descending order.

This is done by specifying a region and sort type to the `Worksheet` object's `WorksheetSortSettings` that can be retrieved using the `sortSettings` property of the sheet.

The sort conditions in a sheet are only reapplied when sort conditions are added, removed, modified, or when the `reapplySortConditions` method is called on the worksheet. Columns or rows will be sorted within the region. "Rows" is the default sort type.

The following code snippet demonstrates how to apply a sort to a region of cells in a worksheet:

```typescript
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.sortSettings.sortConditions().addItem(new RelativeIndex(0), new OrderedSortCondition(SortDirection.Ascending));
```

### Worksheet Protection
You can protect a worksheet by calling the `protect` method on the `Worksheet` object. This method exposes many nullable `bool` parameters that allow you to restrict or allow the following user operations:

- Editing of cells.
- Editing of objects such as shapes, comments, charts, or other controls.
- Editing of scenarios.
- Filtering of data.
- Formatting of cells.
- Inserting, deleting, and formatting of columns.
- Inserting, deleting, and formatting of rows.
- Inserting of hyperlinks.
- Sorting of data.
- Usage of pivot tables.

You can remove worksheet protection by calling the `unprotect` method on the `Worksheet` object.

The following code snippet shows how to enable protection of all of the above-listed user operations:

```typescript
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.protect();
```

### Worksheet Conditional Formatting
You can configure the conditional formatting of a `Worksheet` object by using the many "Add" methods exposed on the `conditionalFormats` collection of that worksheet. The first parameter of these "Add" methods is the `string` region of the worksheet that you would like to apply the conditional format to.

Many of the conditional formats that you can add to your worksheet have a `cellFormat` property that determines the way that the `WorksheetCell` elements should look when the condition in that conditional format holds true. For example, you can use the properties attached to this `cellFormat` property such as `Fill` and `Font` to determine the background and font settings of your cells under a particular conditional format, respectively.

There are a few conditional formats that do not have a `cellFormat` property, as their visualization on the worksheet cell behaves differently. These conditional formats are the `DataBarConditionalFormat`, `ColorScaleConditionalFormat`, and `IconSetConditionalFormat`.

When loading a pre-existing `Workbook` from Excel, the formats will be preserved when that `Workbook` is loaded. The same is true for when you save the `Workbook` out to an Excel file.

The following code example demonstrates usage of conditional formats on a worksheet:

```typescript
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

var color = new Color();
color.colorString = "Red";
    
var format = worksheet.conditionalFormats().addAverageCondition("A1:A10", FormatConditionAboveBelow.AboveAverage);
format.cellFormat.font.colorInfo = new WorkbookColorInfo(color);
```