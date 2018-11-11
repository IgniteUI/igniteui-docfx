---
title: Excel Library Component - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Excel Library component with Workbook Operations.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Excel Library, Angular Excel Library Example, Angular Excel Library Component, Angular Excel Engine, Workbook, Font, Document Properties
---
## Excel Library Using Workbooks

The Infragistics Excel Engine enables you to save data to and load data from Microsoft® Excel®. You can create workbooks and worksheets, input data, and export the data to Excel using the library’s various classes. The Infragistics Excel Engine makes it easy to export the data in your application as an Excel spreadsheet as well as import data from Excel into your application. 

### Demo

<div class="sample-container" style="height: 500px">
    <iframe id="excel-library-overview-sample-iframe" src='{environment:demosBaseUrl}/excel-library-operations-on-workbooks' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <!-- TODO uncomment when Stackblitz is ready for EXCEL
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="excel-library-operations-on-workbooks-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button> -->
</div> 

<div class="divider--half"></div>

### Change Default Font

First create a new instance of `IWorkbookFont`. Next, add the new font to the Styles collection of the Workbook via workbook.styles.apply method. This style contains the default properties for all cells in the workbook, unless otherwise specified on a row, column, or cell. Changing properties of the style will change the default cell format properties in the workbook.

```typescript
var workbook = new Workbook();
var normalFont: IWorkbookFont;
normalFont = wb.styles().normalStyle.styleFormat.font;
normalFont.name = "Times New Roman";
normalFont.height = 16 * 20;   
```

### Setting Workbook Properties

Microsoft® Excel® document properties provide information to help organize and keep track of your documents. You can use the Infragistics Excel Library to set these properties using the `Workbook` object’s `DocumentProperties` property. The available properties are:

- author

- title

- subject

- keywords

- category

- status

- comments

- company

- manager

The following code demonstrates how to create a workbook and set its Title and Status document properties.

```typescript
var workbook = new Workbook();
workbook.documentProperties.title = "Expense Report";
workbook.documentProperties.status = "Complete";
```

### Workbook Protection

The workbook protection feature allows you to protect (without a password) the following user operations:

- Workbook structure: the ability to add, rename, delete, hide and reorder the worksheets.

> Note, the protection is not enforced via the Infragistics Excel Engine's object model. It is a responsibility of the UI visualizing this object model, to honor these protection settings and allow or restrict the user from performing the corresponding operations.

You can use the Infragistics Excel Library to set these properties using the `Workbook` object. The available properties are:

- protect

Apply workbook protection. When a Workbook is protected without a password, the end user may unprotect the Workbook in Excel without having to supply a password. To programatically unprotect a Workbook, one may use the Unprotect method.

When a Workbook is protected, the values of the properties of the WorkbookProtection instance from this Workbook's Protection property indicate the disabled operations.

Note: If IsProtected is already true, the method will be ignored.

```typescript
var wb = new Workbook(format);
wb.protect(false, false);
```
- isProtected

Check if a workbook has protection. This read-only property returns true if the workbook has any protection set using the overloads of the Protect method.

```typescript
var wb = new Workbook(format);
var i = wb.isProtected;
```

- protection

This read-only property returns an object of type WorkbookProtection which contains properties for obtaining each protection setting individually.

```typescript
var wb = new Workbook(format);
var i = wb.protection;
```