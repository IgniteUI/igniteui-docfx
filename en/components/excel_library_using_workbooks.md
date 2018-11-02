---
title: Excel Library Component - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Excel Library component with Workbook Operations.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Excel Library, Angular Excel Library Example, Angular Excel Library Component, Angular Excel Engine, Workbook, Font, Document Properties
---
## Excel Library Using Workbooks

The Infragistics Excel Engine enables you to save data to and load data from Microsoft® Excel®. You can create workbooks and worksheets, input data, and export the data to Excel using the library’s various classes. The Infragistics Excel Engine makes it easy to export the data in your application as an Excel spreadsheet as well as import data from Excel into your application. 

### Demo
<!-- <div class="sample-container" style="height: 550px">
    <iframe id="excel-library-overview-sample-iframe" src='{environment:demosBaseUrl}/excel-library-overview-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="excel-library-overview-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div> -->

<div class="divider--half"></div>

### Change Default Font

First create a new instance of `IWorkbookFont`. Next, add the new font to the Styles collection of the Workbook via workbook.styles.apply method. This style contains the default properties for all cells in the workbook, unless otherwise specified on a row, column, or cell. Changing properties of the style will change the default cell format properties in the workbook.

```typescript
var workbook = new Workbook();
var normalFont: IWorkbookFont;
normalFont.name = "Times New Roman";
normalFont.height = 16 * 20;
```

### Setting Workbook Properties

Microsoft® Excel® document properties provide information to help organize and keep track of your documents. You can use the Infragistics Excel Library to set these properties using the `Workbook` object’s `DocumentProperties` property. The available properties are:

- Author

- Title

- Subject

- Keywords

- Category

- Status

- Comments

- Company

- Manager

The following code demonstrates how to create a workbook and set its Title and Status document properties.

```typescript
var workbook = new Workbook();
workbook.documentProperties.title = "Expense Report";
workbook.documentProperties.status = "Complete";
```

