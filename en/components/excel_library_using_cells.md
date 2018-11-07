---
title: Excel Library Component - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Excel Library component.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Excel Library, Angular Excel Library Example, Angular Excel Library Component, Angular Excel Engine
---
## Excel Library Using Cells

This topic explains, with code examples, how to access cells and regions within a worksheet in a Microsoft® Excel® workbook by their names or by their named references. For information about how to access cells and regions by their reference strings, refer to the Referencing Cells and Regions topic.

### Demo

<!-- <div class="sample-container" style="height: 550px">
    <iframe id="excel-library-overview-sample-iframe" src='{environment:demosBaseUrl}/excel-library-overview-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="excel-library-overview-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div> -->

<div class="divider--half"></div>

### References

The following code demonstrates how to use the Excel `WorksheetCell` object and make additional customizations explained below.

```typescript
import { Workbook } from "igniteui-angular-excel/ES5/Workbook";
import { WorkbookFormat } from "igniteui-angular-excel/ES5/WorkbookFormat";
import { Worksheet } from "igniteui-angular-excel/ES5/Worksheet";
import { WorksheetTable } from "igniteui-angular-excel/ES5/WorksheetTable";
import { NamedReference } from 'igniteui-angular-excel/ES5/NamedReference';
import { WorksheetCellComment } from 'igniteui-angular-excel/ES5/WorksheetCellComment'; 
import { FormattedString } from 'igniteui-angular-excel/ES5/FormattedString'; 

```

### Accessing Cells and Regions by Name – Conceptual Overview

#### Introduction
In Microsoft Excel, individual cells, as well as cell regions can have Names assigned to them. The Names are assigned and displayed in the Name Box of the spreadsheet. The Name of a cell or region can be used to reference that cell or region instead of their cell references. The Names of cells and regions can be defined either in Excel or programmatically in code.

The Ultimate UI for WPF product supports the referencing of cells and regions by Name through the GetCell and GetRegion methods of the Worksheet object. You refer to the cell or region using the NamedReference instance that refers to that cell or region.

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