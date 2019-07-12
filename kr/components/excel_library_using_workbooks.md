---
title: Excel Library Component - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Excel Library component with Workbook Operations.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Excel Library, Angular Excel Library Example, Angular Excel Library Component, Angular Excel Engine, Workbook, Font, Document Properties
---

## Using Workbooks

The Infragistics Excel Engine enables you to save data to and load data from Microsoft® Excel®. You can create workbooks and worksheets, input data, and export the data to Excel using the library’s various classes. The Infragistics Excel Engine makes it easy to export the data in your application as an Excel spreadsheet as well as import data from Excel into your application.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="excel-library-overview-sample-iframe" src='{environment:demosBaseUrl}/excel-library/operations-on-workbooks' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>

<div class="divider--half"></div>

### Change Default Font

First create a new instance of [`IWorkbookFont`](excel_library_using_workbooks.md). Next, add the new font to the `styles` collection of the [`Workbook`](excel_library_using_workbooks.md). This style contains the default properties for all cells in the workbook, unless otherwise specified on a row, column, or cell. Changing properties of the style will change the default cell format properties in the workbook.

```ts
var workbook = new Workbook();
var font: IWorkbookFont;
font = workbook.styles().normalStyle.styleFormat.font;
font.name = "Times New Roman";
font.height = 16 * 20;
```

### Setting Workbook Properties

Microsoft Excel® document properties provide information to help organize and keep track of your documents. You can use the Infragistics Excel Library to set these properties using the [`Workbook`](excel_library_using_workbooks.md) object’s `documentProperties` property. The available properties are:

-   `author`

-   `title`

-   `subject`

-   `keywords`

-   `category`

-   `status`

-   `comments`

-   `company`

-   `manager`

The following code demonstrates how to create a workbook and set its `title` and `status` document properties.

```ts
var workbook = new Workbook();
workbook.documentProperties.title = "Expense Report";
workbook.documentProperties.status = "Complete";
```

### Workbook Protection

The workbook protection feature allows you to protect the structure of the workbook. That is, the ability for a user to add, rename, delete, hide, and reorder the worksheets in that workbook.

The protection is not enforced via the Infragistics Excel Engine's object model. It is a responsibility of the UI visualizing this object model to honor these protection settings and allow or restrict the user from performing the corresponding operations.

Protection is applied to a workbook by invoking its `protect` method.

When a [`Workbook`](excel_library_using_workbooks.md) is protected without a password, the end user may unprotect the [`Workbook`](excel_library_using_workbooks.md) in Excel without having to supply a password. To programatically unprotect a [`Workbook`](excel_library_using_workbooks.md), one may use the `unprotect` method.

When a [`Workbook`](excel_library_using_workbooks.md) is protected, the values of the properties of the [`WorkbookProtection`](excel_library_using_workbooks.md) instance from this [`Workbook`](excel_library_using_workbooks.md)'s `protection` property indicate the disabled operations.

If [`isProtected`](excel_library_using_workbooks.md) is already true, the `protect` method will be ignored.

```ts
var workbook = new Workbook();
workbook.protect(false, false);
```

-   isProtected

Check if a workbook has protection. This read-only property returns true if the workbook has any protection set using the overloads of the Protect method.

```ts
var workbook = new Workbook();
var protect = workbook.isProtected;
```

-   protection

This read-only property returns an object of type WorkbookProtection which contains properties for obtaining each protection setting individually.

```ts
var workbook = new Workbook();
var protection = workbook.protection;
```
