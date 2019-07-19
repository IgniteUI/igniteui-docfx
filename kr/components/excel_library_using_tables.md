---
title: Excel Library Using Tables
_description: The Ignite UI for Excel Library component Using Tables.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Excel Library, Angular Excel Library Example, Angular Excel Library Component, Angular Excel Engine, Tables, Sorting, Filtering
---

## Using Tables

The Infragistics Excel Engine's [`WorksheetTable`](excel_library_using_tables.md) functionality allows you to format your data in rows and columns The data in a worksheet table can be managed independently from the data in the other rows and columns in a [`worksheet`](excel_library_using_tables.md).

<!--### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="excel-library-overview-sample-iframe" src='{environment:demosBaseUrl}/excel-library/working-with-tables' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>-->

<div class="divider--half"></div>

### Adding a Table to a Worksheet

Worksheet tables in the Infragistics Excel Engine are represented by the [`WorksheetTable`](excel_library_using_tables.md) object and are added in the worksheet's `tables` collection. In order to add a table, you need to invoke the `Add` method on this collection. In this method, you can specify the region in which you would like to add a table, whether or not the table should contain headers, and optionally, specify the table's style as a [`WorksheetTableStyle`](excel_library_using_tables.md) object.

The following code demonstrates how you can add a table with headers to a [`Worksheet`](excel_library_using_tables.md) spanning a region of A1 to G10, where A1 to G1 will be the column headers:

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = this.workbook.worksheets().add("Sheet1");

worksheet.tables().add("A1:G10", true);
```

Once you have added a table, you can modify it by adding or deleting rows and columns by calling the `insertColumns`, `insertDataRows`, `deleteColumns`, or `deleteDataRows` methods on the [`WorksheetTable`](excel_library_using_tables.md). You can also set a new table range by using the `resize` method of the table.

The following code snippet shows the usage of these methods:

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = this.workbook.worksheets().add("Sheet1");
var table = worksheet.tables().add("A1:G10", true);

//Will add 5 columns at index 1.
table.insertColumns(1, 5);

//Will add 5 rows at index 0.
table.insertDataRows(0, 5);

//Will delete 5 columns starting at index 1.
table.deleteColumns(1, 5);

//Will delete 5 rows starting at index 0.
table.deleteDataRows(0, 5);

//Will resize the table to be in the region of A1:G15.
table.resize("A1:G15");
```

### Filtering Tables

Filtering is done by applying a filter on a column in the [`WorksheetTable`](excel_library_using_tables.md). When the filter is applied on a column, all filters in the table will be reevaluated to determine which rows meet the criteria of all filters applied.

If the data in the table is subsequently changed or you change the `hidden` property of the rows, the filter conditions will not automatically reevaluate. The filter conditions in a table are only reapplied when table column filters are added, removed, modified, or when the `reapplyFilters` method is called on the table.

The following are the filter types available to the columns of your [`WorksheetTable`](excel_library_using_tables.md):

-   [`AverageFilter`](excel_library_using_tables.md) - Cells can be filtered based on whether they are above or below the average value of all cells in the column.
-   [`CustomFilter`](excel_library_using_tables.md) - Cells can be filtered based on one or more custom conditions.
-   [`DatePeriodFilter`](excel_library_using_tables.md) - Only cells with dates in a specific month or quarter of any year will be displayed.
-   [`FillFilter`](excel_library_using_tables.md) - Only cells with a specific fill will be displayed.
-   [`FixedValuesFilter`](excel_library_using_tables.md) - Cells which only match specific display values or which fall within a specific group of dates/times will be displayed.
-   [`FontColorFilter`](excel_library_using_tables.md) - Only cells with a specific font color will be displayed.
-   [`RelativeDateRangeFilter`](excel_library_using_tables.md) - Cells with date values can be filtered based on whether they occur within a relative time range of the date when the filter was applied, such as the next day or previous quarter.
-   [`TopOrBottomFilter`](excel_library_using_tables.md) - This filter allows for filtering the top or bottom N values. It also allows filtering the top or bottom N% values.
-   [`YearToDateFilter`](excel_library_using_tables.md) - Cells with date values can be filtered if they occur between the start of the year and the date on which the filter was applied.

The following code snippet demonstrates how to apply an "above average" filter to a [`WorksheetTable`](excel_library_using_tables.md)'s first column:

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = this.workbook.worksheets().add("Sheet1");
var table = worksheet.tables().add("A1:G10", true);

table.columns(0).applyAverageFilter(AverageFilterType.AboveAverage);
```

### Sorting Tables

Sorting is done by setting a sorting condition on a table column. When a sorting condition is set on a column, all sorting conditions in the table will be reevaluated to determine the order of the cells in the table. When cells need to be moved to meet their sort criteria, the entire row of cells in the table is moved as a unit.

If the data in the table is subsequently changed, the sort conditions do not automatically reevaluate. The sort conditions in a table are only reapplied when sort conditions are added, removed, modified, or when the `reapplySortConditions` method is called on the table. When sorting conditions are reevaluated, only the visible cells are sorted. All cells in hidden rows are kept in place.

In addition to accessing sort conditions from the table columns, they are also exposed off the [`WorksheetTable`](excel_library_using_tables.md)'s `sortSettings` property's `sortConditions` collection. This is an ordered collection of columns/sort condition pairs. The order of this collection is the precedence of the sorting.

The following sort condition types are available to set on columns:

-   [`OrderedSortCondition`](excel_library_using_tables.md) - Sort cells in an ascending or descending order based on their value.
-   [`CustomListSortCondition`](excel_library_using_tables.md) - Sort cells in a defined order based on their text or display value. For example, this might be useful for sorting days as they appear on a calendar, rather than alphabetically.
-   [`FillSortCondition`](excel_library_using_tables.md) - Sort cells based on whether their fill is a specific pattern or gradient.
-   [`FontColorSortCondition`](excel_library_using_tables.md) - Sort cells based on whether their font is a specific color.

There is also a `caseSensitive` property on the `sortSettings` of the [`WorksheetTable`](excel_library_using_tables.md) to determine whether strings should be sorted case sensitively or not.

The following code snippet demonstrates how to apply an [`OrderedSortCondition`](excel_library_using_tables.md) to a [`WorksheetTable`](excel_library_using_tables.md):

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = this.workbook.worksheets().add("Sheet1");
var table = worksheet.tables().add("A1:G10", true);

table.columns(0).sortCondition = new OrderedSortCondition(SortDirection.Ascending);

//Alternative:
table.sortSettings.sortConditions().addItem(table.columns(0), new OrderedSortCondition(SortDirection.Ascending));
```
