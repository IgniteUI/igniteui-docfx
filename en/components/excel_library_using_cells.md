---
title: Excel Library Component - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Excel Library component.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Excel Library, Angular Excel Library Example, Angular Excel Library Component, Angular Excel Library
---
## Excel Library Using Cells

This topic explains, with code examples, how to access cells and regions within a worksheet in a Microsoft® Excel® workbook by their names or by their named references. For information about how to access cells and regions by their reference strings, refer to the Referencing Cells and Regions topic.

### Demo

<div class="sample-container" style="height: 400px">
    <iframe id="excel-library-overview-sample-iframe" src='{environment:demosBaseUrl}/excel-library-working-with-cells' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <!-- TODO uncomment when Stackblitz is ready for EXCEL
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="excel-library-working-with-cells-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button> -->
</div> 

<div class="divider--half"></div>

### References

The following code demonstrates how to import the Excel `WorksheetCell` object, including others demonstrated below.

```typescript
import { Workbook } from "igniteui-angular-excel/ES5/Workbook";
import { WorkbookFormat } from "igniteui-angular-excel/ES5/WorkbookFormat";
import { Worksheet } from "igniteui-angular-excel/ES5/Worksheet";
import { WorksheetTable } from "igniteui-angular-excel/ES5/WorksheetTable";
import { NamedReference } from 'igniteui-angular-excel/ES5/NamedReference';
import { WorksheetCellComment } from 'igniteui-angular-excel/ES5/WorksheetCellComment'; 
import { FormattedString } from 'igniteui-angular-excel/ES5/FormattedString'; 
```

## Accessing Cells and Regions by Name – Conceptual Overview

### Introduction
In Microsoft Excel, individual cells, as well as cell regions can have Names assigned to them. The Names are assigned and displayed in the Name Box of the spreadsheet. The Name of a cell or region can be used to reference that cell or region instead of their cell references. The Names of cells and regions can be defined either in Excel or programmatically in code.

The Infragistics Excel Library supports the referencing of cells and regions by Name through the GetCell and GetRegion methods of the Worksheet object. You refer to the cell or region using the NamedReference instance that refers to that cell or region.

#### Requirements
To be able to access an individual cell or a region of cells, they must be Named, either in MS Excel or programmatically in code.

#### Naming cells and regions in Excel
To define a Name for a cell or region in an Excel spreadsheet, with the cell or region selected, click the Name Box, type the desired name, and then press Enter .

#### Naming cells and regions in code
Cell or region Names defined in code are sometimes referred to as “named references”. To Name a cell or a region in code, use the syntax that follows. In your actual code, replace the variables (cell_Name, range_Name, sheet_name, cell_reference, range_cell_reference, instance_for_cell_NamedReference,and instance_for_range_NamedReference) with specific names.

```typescript
var wb = new Workbook();      
var ws = wb.worksheets().add("sheet1");
var cell_reference = wb.namedReferences().add("cell_name", "=sheet1!cell reference ", ws);
var instance_for_range_NamedReference = wb.namedReferences().add("range_Name", "=sheet1!range cell reference", ws);
```

### Referencing cells and regions by Name
To reference a cell or a region by Name in code, use the following syntax. In your actual code replace the variables (cell_Name, range_Name) with specific names.

```typescript
// Access a cell by its Name.
ws.getCell("cell_Name");
// Access a region by its Name.
ws.getRegion("range_Name");
```

### Accessing Cells and Regions by Name – Code Examples
#### Code
The following table lists the code examples included in this topic.

##### Getting a Cell and Region by Name

>The Worksheet object’s methods GetCell and GetRegion allow a named reference to be specified to access a cell or region.

##### Getting an Array of Regions by Name

>The Worksheet object’s method GetRegions allows a named reference to be specified to access an array of regions.

##### Getting a Referenced Cell, Region, and Array of Regions from a Named Reference

>A reference to a cell or region can be obtained using the NamedReference instance that refers to a cell or region.

### Code Example: Getting a Cell and Region by Name
#### Description
The Worksheet object’s methods GetCell and GetRegion allow a named reference to be specified to access a cell or region.

#### Prerequisites
An Excel file named Book1.xls with a worksheet saved at location C drive.

Random numbers in Regions A1:A10 and B1:B10 of the Worksheet.

Reference name added for cell B3 - refNameB3. This can be done by right clicking on Cell B3 and from the context menu choose ‘Define Name’, which pops up the ‘New Name’ window where the reference name can be specified.

Reference name added for region C1:C10 – refNameRegionC1C10. This can be done by selecting the range C1:C10 and from the context menu selecting the ‘Define Name’ option which pops up the ‘New Name’ window where the range reference name can be specified.

#### Code
The following code loads a Workbook and creates an instance of the Worksheet. Cell B3 of the Worksheet is accessed using the GetCell method by passing in the named reference of the cell. A comment is added to cell B3.

Similarly RegionC1:C10 is accessed using the GetRegion method by passing in the named reference of the region. A formula is applied to the region C1:C10.

```typescript
var wb = new Workbook();      
var ws = wb.worksheets().add("sheet1");
var d = new WorksheetCellComment();
var formatted = new FormattedString("This cell has a reference name.");
d.text = formatted;
// Access a cell by its reference name
ws.getCell("refNameB3").comment = formatted;
// Access a Region by its reference name
ws.getRegion("refNameRegionC1C10").applyFormula("=A1*B1");
// Save the Workbook with the applied changes
workBook.save("C:\Book2.xls")
```

### Code Example: Getting an Array of Regions by Name
#### Description
The Worksheet object’s method GetRegions allows a named reference to be specified to access an array of regions.

#### Prerequisites
An Excel file named Book1.xls with a worksheet saved at location C drive.

Random numbers in Regions A3:C7, E4:G6, and I2:L5 of the Worksheet.

Reference name added for multiple regions A1:C5, E2:G4, and I7:G8 – MultipleRegions. Naming of reference is done by selecting the reference in Excel and going to Formulas -> Name Manager. Name manager window appears. Click on New… button and New Name window appears, where you can specify name of your selected range.

> Note: Multiple regions are selected by selecting the first cell in the region and then hold down CTRL while you are selecting the other cells or regions. Your final selection should look similar to the screen-shot below:

Code
The following code loads a Workbook and creates an instance of the Worksheet. Region E4:G6 is accessed by using GetRegions method, which returns array of regions, and specifying second element of this array. A formula is applied on E4:G6 region.

```typescript
// Load a Workbook
var wb = new Workbook();
var ws = wb.worksheets().add("sheet1");
// Access a Region by its reference name by its index in a array of regions and apply a formula on the region
ws.getRegions("MultipleRegions")[1].applyFormula("=$A$1*A3");
```

### Code Example: Getting a Referenced Cell, Region, and Array of Regions from a Named Reference
#### Description
A reference to a cell or region can be obtained using the NamedReference instance that refers to a cell or region.

#### Prerequisites
An Excel file named Book1.xls with a worksheet saved at location C drive.

#### Code
The following code defines a NamedReference for a cell, region and array of regions and gets access to the cell, region and array of regions from the NamedReference instance.

```typescript
var wb = new Workbook();
var ws = wb.worksheets().add("sheet1");
// Define a Named Reference for a Cell
var namedRefCell = wb.namedReferences().add("NamedReferenceCell", "=Sheet1!$B$5", ws);
console.log(namedRefCell.ReferencedCell.ToString());
// Define a Named Reference for a Region
var namedRefRegion = workBook.namedReferences().add("NamedRefRegion", "=Sheet1!$A$5:$A$10", ws);
console.log(namedRefRegion.ReferencedRegion.ToString());
// Define a Named Referene for Multiple Regions
var namedMultiRef = workBook.namedReferences().add("NamedMultiRegion",
"=Sheet1!$A$1:$B$5,Sheet1!$D$5:$G$10", ws);
console.log(namedMultiRef.ReferencedRegions[1].ToString());
```

## Adding a Comment to a Cell 

A comment allows you to display hints or notes for a cell when the end user’s mouse hovers over a cell. The comments display as a tooltip-like callout that contains text. The Infragistics Excel Library allows you to add comments to a cell by setting a `WorksheetCell` object’s Comment property.

The following example code demonstrates how to add a comment to a cell. The example code assumes you have a reference to a `Worksheet` object named worksheet1.

```typescript
this.wb = new Workbook();  
var ws = this.wb.worksheets().add("sheet1");
var wr = ws.rows(0); 
var d = new WorksheetCellComment();
var formatted = new FormattedString("This cell has a reference name.");
d.text = formatted;
wr.cells(0).comment = d;
```    

## Adding a Formula to a Cell

The Infragistics Excel Library allows you to add Microsoft Excel formulas to a cell or group of cells in a worksheet. You can do this using the `WorksheetCell` object’s ApplyFormula method or by instantiating a Formula object and applying it to a cell. Regardless of the manner in which you apply a formula to a cell, you can access the `Formula` object using the WorksheetCell object’s Formula property. If you need the value, use the cell’s Value property.

The following code shows you how to add a formula to a cell. The example code assumes you have a reference to a Worksheet object named worksheet1.

```typescript
 this.wb = new Workbook(); var ws = this.wb.worksheets().add("sheet1");
 var wr = ws.rows(0); 
 ws.rows(5).cells(0).applyFormula("=Sum(A1:A5)");
 //Using a Formula object to apply a formula
 var sumFormula = Formula.parse("=Sum(A1:A5)", CellReferenceMode.A1);
 sumFormula.applyTo(ws.rows(5).cells(0));
```

## Copying a Cell’s Format
Cells can have different formatting, including background color, format string, and font style. If you need a cell to have the same format as a previously formatted cell, instead of individually setting each option exposed by the `WorksheetCell` object’s `CellFormat` property, you can call the CellFormat object’s `SetFormatting` method and pass it a CellFormat object to copy. This will copy every format setting from the first cell to the second cell. You can also do this for a row, merged cell region, or column.

The following code shows you how to copy the format of the 2nd column to the 4th column.

```typescript
this.wb = new Workbook(); var ws = this.wb.worksheets().add("sheet1");
//Format 2nd column
ws.columns(1).cellFormat.fill = CellFill.createSolidFill("Blue");
ws.columns(1).cellFormat.font.bold = true;
//Copy format of 2nd column to 4th column
ws.columns(3).cellFormat.setFormatting(ws.columns(1).cellFormat);
```

## Formatting a Cell

The Infragistics Excel Library allows you to customize the look and behavior of a cell. You can customize a cell by setting properties exposed by the `CellFormat` property of the `WorksheetCell`, `WorksheetRow`, `WorksheetColumn`, or `WorksheetMergedCellsRegion` objects.

You can customize every aspect of a cell’s appearance. You can set a cell’s font, background, and borders, as well as text alignment and rotation. You can even apply a different format on a character-by-character basis for a cell’s text.

You can also format cell values by assigning a format string. An acceptable format string follows the traditional format standards and formatting codes.

The following code shows you how to format a cell to display numbers as currency and to color negative values red. The example code assumes you have a reference to a Worksheet named worksheet1.

```typescript
this.wb = new Workbook(format);      
var ws = this.wb.worksheets().add("sheet1");
ws.columns(2).cellFormat.formatString = "\"$\"#,##0.00;[red](\"$\"#,##0.00)";
```

## Excel 2007 Color Model

##### Workbook palette

> The color palette is exposed publicly, via the Workbook Palette property, so you can choose which colors to use when opening saved files in an earlier version of Excel.

##### Filling cells

> CellFill is an abstract class representing a fill of a cell. There are some derived types representing the various fills which can be created.

### Workbook palette

The Color palette has been exposed publicly, via the Workbook's Palette property, so that you can choose which colors to use when finding the closest matching color. The palette has an indexer to get and set the 56 colors in it, as well as a Reset method to reset it back to its preset state.

The color palette is analogous to the color dialog in Microsoft Excel 2007 UI. You can open this color dialog by navigating to Excel Options>Save>Colors.

> Note: The color dialog in Excel does not display colors in the order they are represented in a color palette.

### Filling a cell

> Note: In previous versions, the cell fill was defined by three properties on the `IWorksheetCellFormat` interface: `FillPattern`, `FillPatternBackgroundColor`, and `FillPatternForegroundColor`. They are all replaced by a single Fill property, which is a reference to a `CellFill` instance.

The derived types, representing the various fills which can be created, are as follows:

`CellFillPattern`

> Represents one of the following:

- no color

- solid color

- pattern fill for a cell

It has background color info and a pattern color info which correspond directly to the color sections in the Fill tab of the Format Cells dialog of Excel. It also has a pattern style.

'CellFillLinearGradient`

> Represents a linear gradient fill. It has an angle, which is degrees clockwise of the left to right linear gradient, and a gradients stops collection which describes two or more color transitions along the length of the gradient.

`CellFillRectangularGradient`

> Represents a rectangular gradient fill. It has top, left, right, and bottom values, which describe, in relative coordinates, the inner rectangle from which the gradient starts and goes out to the cell edges. It also has a gradient stops collection which describes two or more color transitions along the path from the inner rectangle to the cell edges

You can create all possible fill types using static properties and methods on the CellFill class. They are as follows:

#### Property

`NoColor`

> Represent a fill with no color, which allows a background image of the worksheet, if any, to show through.

#### Method

`CreateSolidFill`

> 	
Returns a CellFillPattern instance which has a pattern style of Solid and a background color set to the Color or WorkbookColorInfo specified in the method.

`CreatePatternFill`

> Returns a `CellFillPattern` instance which has the specified pattern style and the `Color` or `WorkbookColorInfo` values, specified for the background and pattern colors. These methods can also be used to create solid and no color fills.

`CreateLinearGradientFill`

> Returns a `CellFillLinearGradient` instance with the specified angle and gradient stops.

`CreateRectangularGradientFill`

> Returns a `CellFillRectangularGradient` instance with the specified left, top, right, and bottom of the inner rectangle and gradient stops. If the inner rectangle values are not specified, the center of the cell is used as the inner rectangle.

### Specifying a Color

#### Overview

You can specify a color (the color of Excel cells background, border, etc) using linear and rectangular gradients in cells. When workbooks with these gradients are saved in XLS file format and opened in Microsoft Excel 2007/2010, the gradients will be visible, but when these files are opened in Microsoft Excel 2003, the cell will be filled with the solid color from the first gradient stop.

These are the ways a color can be defined, as follows:

- The automatic color (which is the WindowText system color)

- Any user defined RGB color

- A theme color

Tint
If an RGB or a theme color is used, an optional tint can be applied to lighten or darken the color. This tint cannot be set directly in Microsoft Excel 2007 UI, but various colors in the color palette displayed to the user are actually theme colors with tints applied.

Theme Colors
Each workbook has 12 associated theme colors. They are the following:

- Light 1

- Light 2

- Dark 1

- Dark 2

- Accent1

- Accent2

- Accent3

- Accent4

- Accent5

- Accent6

- Hyperlink

- Followed Hyperlink

- There are default values when a workbook is created, which can be customized via Excel.

### WorkbookColorInfo
- Colors are defined by the `WorkbookColorInfo` class, which is a sealed immutable class. The class has a static Automatic property, which returns the automatic color, and there are various constructors which allow you to create a WorkbookColorInfo instance with a color or a theme value and an optional tint.

### GetResolvedColor
The `GetResolvedColor` method allows you to determine what color will actually be seen by the user when they open the file in Excel.

- If the `WorkbookColorInfo` represents a theme color, you must pass in a Workbook instance to the method so it can get the theme color’s RGB value from the workbook.

Saving in new file formats
When saving out in the newer file formats (Microsoft Excel 2007 and later versions), the newer color information is saved directly into the file. When saving out in an older file format, the index to the closest color in the palette will be saved out. In addition, the older formats have future feature records that can be saved out to indicate the newer color information.

When the older formats are opened in Microsoft Excel 2003 and earlier versions, these future features records are ignored. But when the older file formats are opened in Excel 2007 and later, there records are read and the color information from them overwrites the indexed color that was previously loaded from the normal format records.

## Excel Format Support

This topic explains Infragistics Excel Library support for cell formats.

#### Feature 

`Accessing built-in style`

> Styles are accessible in the Infragistics Excel Library through the `Workbook` property, which is a collection of instances, each one representing a cell style in the workbook.

`Parent styles`

> The formats for styles, rows, columns, and cells are represented by the interface. This interface has a new property named Style which points to the style from which cell formats resolve default properties.

`Format options`

> The `IWorksheetCellFormat` interface has a property. This property takes a flagged enumeration values.

`Excel Style mimicked behavior`

> There are numerous Microsoft Excel behaviors regarding styles which have been mimicked.

`Determining resolved cell format`

> You can determine what would really be seen in cells using the methods on classes which represent a row, column, cell, and merged cell.


### Accessing built-in styles

#### Style

`Styles collection`

> The styles collection is pre-populated with all built-in styles, which can be found in the Cell Styles gallery of the Home tab of Microsoft Excel 2007.

`NormalStyle`

> There is a special type of style in the workbook, known as a Normal style, which can be accessed by the new `Workbook.Styles.NormalStyle` property, or by indexing into the collection with the name `Normal` .

The `Normal` style contains the default properties for all cells in the workbook (unless otherwise specified on a row, column, or cell). Changing properties on the Normal style will change the default cell format properties in the workbook.

The Normal style can be used when you want to change the default font for your workbook. 

### Clearing styles

You can clear the style collection or you can reset it to its predefined state using the methods below:

#### Method

` clear 

> Clearing the styles collection on the workbook, done with the `Clear` method, will remove all user defined and built-in styles, except for the Normal style, which will be reset to its preset state.

` reset

The `Reset` method will restore the collection to its preset state. This means all user defined styles will be removed and the collection will be repopulated with all built-in styles in their preset states.

### Parent styles

With this feature, a `Style` property has been added to the `IWorksheetCellFormat` interface. This is a reference to a `WorkbookStyle` instance, representing the parent style of the format. For formats of a style, this property will always be null, because styles cannot have a parent style. For row, column, and cell formats, the Style property always returns the Normal style by default.

If the `Style` property is set to null, it will revert back to the Normal style. If it is set to another style in the styles collection, that style will now hold the defaults for all unset properties on the cell format.

Unset properties resolve their values from the parent style.

### Format options

The FormatOptions property takes a flagged enumeration value from the following values:

None

applyNumberFormatting

applyAlignmentFormatting

applyFontFormatting

applyBorderFormatting

applyFillFormatting

applyProtectionFormatting

all

Aside from None and All, every other value corresponds to a check box in the modify style dialog of Excel UI. When properties are set to non-default values on the cell or style format, the associated format option flag is added to the `FormatOptions` value. When you manually remove flagged values from the `FormatOptions` value, all properties associated with the removed values are reset to their defaults.

When using a style format, the `FormatOptions` indicate which format properties are included with the style, as in the `Modify Style` dialog.

When using a cell format, the `FormatOptions` indicate which groups of properties are set on the cell. All other properties therefore resolve their values from the parent style.

The property groups are as follows:

- applyNumberFormatting

- formatString

- applyAlignmentFormatting

- alignment

- indent

- rotation

- shrinkToFit

- verticalAlignment

- wrapText

- applyFontFormatting

- font

- applyBorderFormatting

- bottomBorderColorInfo

- bottomBorderStyle

- diagonalBorderColorInfo

- diagonalBorders

- diagonalBorderStyle

- leftBorderColorInfo

- leftBorderStyle

- rightBorderColorInfo

- rightBorderStyle

- topBorderColorInfo

- topBorderStyle

- applyFillFormatting

- fill

- applyProtectionFormatting

- locked

### Excel Style mimicked behavior

#### Behavior

When the parent style is set on a cell format, the format options included on the new parent style are removed from the cell format. All other properties are left intact.

> When a property is set to some non-default value, the associated format options flag is added to the `FormatOptions` value, indicating that the cell format now provides those options.

> When a new parent style is set on a cell, the format options included on the parent style are stripped out of the format options from the cell format. So if a cell format included border and fill formatting and the Total style was set as the parent style, which includes font and border formatting, the border format option on the cell format are removed and the cell format only includes fill formatting.

> When a format option flag is removed from a format, all associated properties are reset to their unset values, so the cell format’s border properties are implicitly reset to default/unset values. That also means that cell format will pick up changes to the Total style’s borders in the future.

Format options on cell formats are added automatically, but not removed automatically.

> When a property is set to some non-default value, the associated format option flag is added to the `FormatOptions` value, indicating that the cell format now provides those values.

> If the property is subsequently set back to its default/unset value, the `FormatOptions` property will still have the associated format option flag included. It will not be removed.

> Unlike Microsoft Excel, the Infragistics Excel Library allows you to manually remove format options by modifying the `FormatOptions` property. Doing so will reset all properties associated with the removed options.

When a format option is added to a cell format, it stops picking up changes to all associated properties on the parent style.

> Each cell format has an internal style format which initially holds no values. When the first cell format property in a group is set, the associated format option flag is added to the `FormatOptions` value and all properties in that group from the parent style are cached on this internal style format. It holds snapshots of the parent style’s property groups from the time when the associated format option flags were added into the cell format’s format options.

> When a format option flag is removed from a cell format, the associated properties on the internal style format cache are cleared as well.

> If a cell includes a format option flag and a property from the associated group has an unset value, it is resolved from the internal style format cache and not from the parent style. Only the cell format properties which do not have the associated format options flag set will resolve from the parent style

When a cell format is assigned a new parent style and that new style does not include all format options flags the old parent style included, the properties associated with the extra format options on the old parent style are still applied to the cell, but it stops picking up changes to the old parent style.

> When a parent style is changed, all format options flags on the old parent style which are not on the new parent style are taken and added to the format options of the cell format.

> When a format option is added to a cell format, all properties from the parent style are cached on the internal style format cache. Therefore, the cell format will implicitly cache all properties from the old parent style which are not specified on the new parent style, thereby ‘merging’ the two styles in a way.

### Determining resolved cell formats

You can determine what would really be seen in cells by using the `GetResolvedCellFormat` method on classes which represent a row, column, cell, and merged cell.

This method returns an `IWorksheetCellFormat` instance which refers back to the associated `CellFormat` on which it is based. So subsequent changes to the `CellFormat` will be reflected in the instance returned from a `GetResolvedCellFormat` call.

When format values are requested on this resolved format, it will always go back to its associated cell format to resolve the values from the format itself, the internal style format cache, or the parent style’s format, depending on the format options present on the cell format.

## Inserting and Deleting Cells, Column and Rows 

### Insert/delete cell(s) summary

The Infragistics Excel Library supports inserting of new cell(s) and removing of existing cell(s) using methods located in the Worksheet class.

### Insert/delete cell(s) summary

The following features explains briefly the available functionality for inserting and deleting worksheet cell(s). Further details are available after the table.

#### Insert Cell(s)

Insert one or more cell(s)

>- `InsertCells`

#### Delete Cell(s)

 Delete one or more cell(s)

#### DeleteCells

Insert or Delete Column(s)

Insert or delete one or more column(s)

> - `Insert`
> - `Remove`

#### Insert or Delete Row(s)
	
Insert or delete one or more row(s)

> - `Insert`
> - `Remove`

### Insert Cell(s)

The Infragistics Excel Library supports inserting of one or more new cell(s) by specifying the location at which the insert process should occur. The cell(s) already located at the specified address(es) will be shifted to the right or below. You can specify the address(es) for the new cell(s) using a string or a WorksheetRegion.

Here are some examples of specifying addresses using a string:

- “C5” - this will insert one single cell at column C, row 5

- “D8:D10” – this will insert 3 cells in column D, rows 8, 9 and 10

- “E11:G15” – this will insert a block of cells which stretch from column E to column G and from row 11 to row 15

> `Note`, you cannot insert or delete cells in a location where it would split merged cells, tables or array formulas or if an insertion would cause cell data to be shifted off the right or bottom of the worksheet. The methods below will throw an `InvalidOperationException` if any of these scenarios are detected.

Property settings

#### Insert cell(s)

`InsertCells`

> Provide the following arguments:
> 
> The address(es) in either `string` or `WorksheetRegion` format
>
>Direction in which the existing cells to be shifted (`false` for down, `true` for right)

### Delete  Cell(s)

The Infragistics Excel Library supports deleting of one or more existing cell(s) by specifying the location at which the deletion process should occur. The “empty” location will be filled with cells from either right or below the deleted cell(s). You can specify the address(es) for the cell(s) to be deleted using `string` or `WorksheetRegion`.

> `Note`, For example on how to specify address(es) using string see the insert cell(s) operation above.

Property settings

#### Delete cell(s)

`DeleteCells`

> Provide the following arguments:
> 
> The address(es) in either `string` or `WorksheetRegion` format
>
>Direction in which the existing cells to be shifted to replace the deleted cell(s) (`false` for up, `true` for left)

### Insert or Delete Column(s)

The Infragistics Excel Library supports inserting and deleting column(s) using the `Insert and `Remove` methods of the worksheet’s Columns collection.

Property settings

#### Insert new column(s)

`Insert`

> Location index (0-based) for inserting new column(s)
>
>Number of column(s) to be inserted (if you omit this argument one column will be inserted)

#### Delete existing column(s)

`Remove`

>Location index (0-based) for deleting existing column(s)
>
>Number of column(s) to be deleted (if you omit this argument one column will be deleted)

### Insert or Delete Row(s)

The Infragistics Excel Library supports inserting and deleting row(s) using the Insert and Remove methods of the worksheet’s Rows collection.

Property settings

`Insert`

> Location index (0-based) for inserting new row(s)
>
>Number of row(s) to be inserted (if you omit this argument one row will be inserted)

#### Delete existing rows(s)

`Remove`

>Location index (0-based) for deleting existing rows(s)
>
>Number of rows(s) to be deleted (if you omit this argument one row will be deleted)

## Merging Cells

Aside from setting the value or format of cells, you can also merge cells to make two or more cells appear as one. If you merge cells, they must be in a rectangular region. When you merge cells, each cell in the region will have the same value and cell format. The merged cells will also be associated with the same `WorksheetMergedCellsRegion` object, accessible from their AssociatedMergedCellsRegion property. The WorksheetMergedCellsRegion object will also have the same value and cell format as the cells. Setting the value (or cell format) of the region or any cell in the region will change the value of all cells and the region. If you unmerge cells, all of the previously merged cells will retain the shared cell format they had before they were unmerged. However, only the top-left cell of the region will retain the shared value.

In order to create a merged cell region, you must add a range of cells to the `Worksheet` object’s MergedCellsRegions collection. The `MergedCellsRegions` collection exposes an Add method that takes four integer parameters. The four parameters determine the index of the starting row and column (top-left most cell) and the index of the ending row and column (bottom-right most cell).

```typescript
var wb = new Workbook();
var ws = wb.worksheets().add("Sheet1");
// Make some column headers
ws.rows(1).cells(1).value = "Morning";
ws.rows(1).cells(2).value = "Afternoon";
ws.rows(1).cells(3).value = "Evening";
// Create a merged region from column 1 to column 3 that will be a header to the column headers
var mergedRegion1 =  ws.mergedCellsRegions().add(0, 1, 0, 3);
// Set the value of the merged region
mergedRegion1.value = "Day 1";
// Set the cell alignment of the middle cell in the merged region.
// Since a cell and its merged region shared a cell format, this will
// ultimately set the format of the merged region
ws.rows(0).cells(2).cellFormat.alignment = HorizontalCellAlignment.Center;
```

## Referencing Cells and Regions

You can access a WorksheetCell object or a WorksheetRegion object by calling the Worksheet object’s GetCell or GetRegion methods, respectively. Both methods accept a string parameter that references a cell. Getting a reference to a cell is useful when applying formats or working with formulas and cell contents. A typical usage of the GetRegion method is shown in Merging Cells article (for more information refer to the Related Topics section).

The following example code demonstrates how to reference cells and regions. The example code assumes you have a reference to a Worksheet object named worksheet1.

```typescript
this.wb = new Workbook(format);  var ws = this.wb.worksheets().add("sheet1");
var wr = ws.rows(0); 
//Accessing a single cell
var cellE2 = ws.getCell("E2");
//Accessing a range of cells
var regionG = ws.getRegion("G1:G10");
```

## Retrieving the Cell Text as Displayed in Excel 

This topic describes how to determine the text that would be displayed in Microsoft Excel® cell given the cell’s value, format string, column width, and worksheet options. You can determine the cell text using the `WorksheetCell`'s GetText method.

Text displayed in a cell depends on several factors, other than the actual cell value. Below is a summary of those factors:

### Format string
The format string determines how the value of cell is converted to text and what literal character should be displayed with the formatted value. You can find more detailed information about format codes here.

### Column Width
The amount of horizontal space available in a cell plays a big part in how the value is displayed to the user.

Displayed text can be different depending on varying column widths.

When displaying numbers and using format string containing “General” or “@”, there are various formats which are tried to find a formatting which fits the cell width.

#### Format

`Normal Value`

> Number is displayed as it would be if there is unlimited amount of space.

`Remove decimal digits`

>Decimal digits will be removed one at a time until a format is found which fits.
>
>So a value of 12345.6789 will be reduced to the following formats until one fits: 12345.679, 12345.68, 12345.7, and 12346.
>
>This will stop when the first significant digit is the only one left, so for example value like 0.0001234567890 can only be reduced to 0.0001.

`Scientific, 5 decimal digits`

> Number is displayed in the form of 0.00000E+00, such as 1.23457E+09, or 1.23457E-04

`Scientific, 4 decimal digits`

> Number is displayed in the form of 0.0000E+00, such as 1.2346E+09, or 1.23456E-04

`Scientific, 3 decimal digits` 

> Number is displayed in the form of 0.000E+00, such as 1.235E+09, or 1.235E-0

`Scientific, 2 decimal digits` 

> Number is displayed in the form of 0.00E+00, such as 1.23E+09, or 1.23E-04

`Scientific, 1 decimal digits`

> Number is displayed in the form of 0.0E+00, such as 1.2E+09, or 1.2E-04

`Scientific, 0 decimal digits`

> Number is displayed in the form of 0E+00, such as 1E+09, or 1E-04

`Rounded value`

> If the first significant digit is in the decimal potion of the number, the value will be rounded to the nearest integer value.
> 
> So for a value 0.0001234567890, it will be rounded to 0, and the displayed text in cell will be 0.

`Hash marks`

> If no condensed version of the number can be displayed, hashes (#) will be repeated through the width of the cell.

`Empty string`

> If no hash marks can fit in the cell, an empty string will be returned as displayed cell text.

If the format string for numeric value does not contain General or @, there are only the following stages of resizing: Normal value, Hash marks, Empty string

If a text is used in the cell, the cell displayed text will always be full value, regardless of whether it is cut off or not in the cell.

The only time when this is not the case is when padding characters are used in format string. Then the value will be displayed as all hash marks when there is not enough room for the text.

### Worksheet Options

You can set `Worksheet.DisplayOptions` ShowFormulasInCells property in code or in Microsoft Excel by: File -> Options -> Advanced -> Display options for this worksheet -> Show formulas in cells instead of their calculated results.

When this option is turned On, formulas are displayed in cells instead of their results, and format strings and cell widths are ignored. Text values display as if their format string were @ , non-integral numeric values display as if their format string were 0.0 and integral numeric values display as if their format string were 0 .

Additionally, if the value cannot fit, it will not display as all hashes. Display text will still return its full text as the cell text, even though it may not be fully seen.

### GetText Method Overloads

#### Method overloads

The cell text is exposed by the `WorksheetCell`'s GetText method. The parameter-less overload returns the cell text seen in the Microsoft Excel UI. The other overloads takes a TextFormatMode enumeration value, with the following values:

`AsDisplayed`

> This is equivalent to calling the parameter-less overload of GetText

`This is equivalent to calling the parameter-less overload of GetText`

> Formats the cell text without condensing it or including repeat padding characters.

### Code Examples Overview

`GetText Depends on Format Strings Applied to Cell`

> Returns a textual representation of the WorksheetCell GetText methods depending on the format strings, applied on the cell.

`GetText as it depends on column width`

> Returns a textual representation of the WorksheetCell GetText methods depending on the column width.

`GetText as it depends on ShowFormulasInCell option`

> Returns a textual representation of the WorksheetCell GetText methods depending on the ShowFormulaInCells worksheet option.

### Code Example: GetText Depends On Format Strings Applied to Cell

#### Description

The return value of the WorksheetCell GetText methods depends on format strings, applied to the cell.

The code in this example loads a Workbook and creates an instance of the Worksheet DifferentFormats. It access display text of cells in region A1:A8 using WorksheetCell GetText method.

#### Prerequisites
You need the following entities for the purposes of this example:

An Excel file named Book3.xlsx with a worksheet saved on your C hard drive, at C:\

Worksheet name set to DifferentFormats

```typescript
declare module String{
  export var format:any;
}

this.wb = new Workbook();
var ws = this.wb.worksheets().add("DifferenceForm");
var sb = new RegExp('');
//  Loop over cells with different formats sets and show the GetText() method return values
for (let i: number = 0; (i < 8); i++) {
 sb.test(String.format("{0} \t\t {1}",
 ws.rows(i).cells(1).getText(),
 ws.rows(i).cells(0).getText()));
}
```

### Code Example: GetText Depends On Column Width

#### Description
Returns the value of the `WorksheetCell` GetText methods depending on column width.

The code in this example loads a Workbook and creates an instance of the Worksheet DifferentWidths. It access display text of cells in region A1:E2 using `WorksheetCell` GetText method.

#### Prerequisites
You need the following entities for the purposes of this example:

- An Excel file named Book3.xlsx with a worksheet saved on your C hard drive, at C:\

- Worksheet name set to `DifferentWidths`

- Value `1234567890` in cells from A1 to E1 and value `0.0001234567890` in cells A2 to E2. Column widths are different for each column, set as shown in the screenshot below.

#### Code

```typescript
declare module String{
  export var format:any;
}

this.wb = new Workbook();
var ws = this.wb.worksheets().add("DifferentWidths");
var sb = new RegExp('');
// Loop over cells with different width sets and show the GetText() method return values
for (let i: number = 0; (i < 8); i++) {
 sb.test(String.format(String.format("{0} \t\t {1}",
ws.rows(1).cells(i).getText(),
ws.rows(0).cells(i).getText()));
}
```

### Code Example: GetText Depends On the ShowFormulasInCell Property

#### Description

Returns the value of the `WorksheetCell` GetText methods depending on the ShowFormulaInCells worksheet option.

The code in this example loads a Workbook and creates an instance of the Worksheet `Formulas`. Then, Worksheet property `DisplayOptions` ShowFormulaInCells property is set to `true`. The code accesses the displayed text of cells in region B1:B5 using GetText method.

### Preview

### Prerequisites
You need the following entities for the purposes of this example:

- An Excel file named Book3.xlsx with a worksheet saved on your C hard drive

- Worksheet name set to Formulas

- Random numbers in cells A1:A5

- Random functions in cells B1:B5.

> Note:
For this particular example “=A1*5”, “=COUNT(A1:A5)”, “=SUM(A1:A5)”, “=AVERAGE(A1:A5)”, and “=LOG(A5)” were used to produce the result on the screen-shot.

```typescript
declare module String{
  export var format:any;
}

this.wb = new Workbook();
var ws = this.wb.worksheets().add("Formulas");
var sb = new RegExp('');
//  Turn On Worksheet options for showing formulas instead of formula results
ws.displayOptions.s
// Loop over cells with different width sets and show the GetText() method return valueshowFormulasInCells = true;
for (let i: number = 0; (i < 8); i++) {
 sb.test(String.format(String.format("{0} \t\t {1}",
ws.rows(1).cells(i).getText(),
ws.rows(0).cells(i).getText()));
}
```