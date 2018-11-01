---
title: Excel Library Component - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Excel Library component ... TODO.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Excel Library, Angular Excel Library Example, Angular Excel Library Component, Angular Excel Engine
---
## About Infragistics Excel Library

Using the Infragistics Excel Engine allows you to work with spreadsheet data using familiar Microsoft® Excel® spreadsheet objects like [**Worbooks**]({environment:angularApiUrl}/classes/Workbook.html), [**Worksheets**]({environment:angularApiUrl}/classes/Worksheet.html), [**Cells**]({environment:angularApiUrl}/classes/Cell.html), [**Formulas**]({environment:angularApiUrl}/classes/Formula.html) and many more. The Infragistics Excel Engine makes it easy for you to represent the data of your application in an Excel spreadsheet as well as transfer data from Excel into your application.

**Supported Versions of Microsoft Excel
The following is a list of the supported versions of Excel.**

Microsoft Excel 97

Microsoft Excel 2000

Microsoft Excel 2002

Microsoft Excel 2003

Microsoft Excel 2007

Microsoft Excel 2010

Microsoft Excel 2013

Microsoft Excel 2016

> [!NOTE]
>The Excel Engine does not support the Excel Binary Workbook (.xlsb) format at this time.

Features
The following is a list of key features of the Infragistics Excel Engine:

**No Excel Dependency** - The Infragistics Excel Engine is a class library that runs completely independently of Microsoft Excel, so you do not require it to be installed.

**Workbook Object Model** - This represents all the Excel objects available to you, such as Workbooks, Worksheets, Cells, Formulas and many more.

### Workbook
The most important object found within Infragistics' Excel assembly is the Workbook object. Without a Workbook instance, you simply cannot create a Microsoft® Excel® file. A workbook contains a collection of worksheets, and each worksheet holds a grid of data in cells. In addition, the Workbook object contains global settings and collections of custom views, named references, and styles. The global settings on the Workbook are options that affect a workbook as a whole, such as the author of the document, etc. Most of the primitive properties exposed off the Workbook object control various formula calculation options.

### Worksheet
Worksheets fill workbooks. A workbook must have at least one Worksheet visible at all times. The worksheet contains the actual data in a workbook, as each worksheet holds a grid of cells and each cell can hold a form of data. Aside from the collections and complex properties on the worksheet, the Worksheet object includes properties to change its default row and column sizes, its image background (tiled across the worksheet), and its name.

### WorksheetRow
One of the most important objects exposed by the Worksheet object is the WorksheetRow object, which represents each row in a worksheet. Through a WorksheetRow instance, its corresponding row in the worksheet can be manipulated. In addition, each cell in a row is represented by a WorksheetCell instance, which is contained in a collection owned by the WorksheetRow object. To access any WorksheetCell object, you must go through its parent WorksheetRow object. In addition to each cell and their default cell format, the row’s height, visibility, and outline level can also be customized with the WorksheetRow instance.

### WorksheetColumn
Unlike the WorksheetRow object, the WorksheetColumn object does not contain a collection of cells, even though a column in a worksheet "contains" the cells under it. This is because the cells can be accessed from the WorksheetRow instance to which the cell belongs. It is redundant to also make the cells accessible from the WorksheetColumn object. Through a WorksheetColumn instance, you can customize the column’s default cell format, width, visibility, and outline level.

### WorksheetCell
A worksheet is a grid of cells. Each cell is represented by a WorksheetCell instance. You can set a cell’s value and format using the WorksheetCell object. The value of the cell is what displays in the cell when the workbook is opened in Excel. A cell’s value can also be used by formulas to calculate other cells' values.