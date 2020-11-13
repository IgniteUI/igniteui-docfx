---
title: Angular Excel Library| Using Workbooks| Infragistics
_description: Use Infragistics' Angular excel library to create workbooks and worksheets, input data and export the date to Microsoft® Excel. View Ignite UI for Angular excel tutorials for more information!
_keywords: Excel library, workbooks, Ignite UI for Angular, Infragistics
mentionedTypes: ['Workbook']
---

# Angular Using Workbooks

The Infragistics Angular Excel Engine enables you to save data to and load data from Microsoft® Excel®. You can create workbooks and worksheets, input data, and export the data to Excel using the library’s various classes. The Infragistics Angular Excel Engine makes it easy to export the data in your application as an Excel spreadsheet as well as import data from Excel into your application.

## Angular Using Workbooks Example

<div class="sample-container loading" style="height: 500px">
    <iframe id="excel-library-overview-sample-iframe" src='{environment:dvDemosBaseUrl}/excel/excel-library-operations-on-workbooks' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>


<div class="divider--half"></div>

## Change Default Font

First create a new instance of [`IWorkbookFont`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/iworkbookfont.html). Next, add the new font to the [`styles`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbook.html#styles) collection of the [`Workbook`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbook.html). This style contains the default properties for all cells in the workbook, unless otherwise specified on a row, column, or cell. Changing properties of the style will change the default cell format properties in the workbook.

```ts
var workbook = new Workbook();
var font: IWorkbookFont;
font = workbook.styles().normalStyle.styleFormat.font;
font.name = "Times New Roman";
font.height = 16 * 20;
```

## Setting Workbook Properties

Microsoft Excel® document properties provide information to help organize and keep track of your documents. You can use the Infragistics Angular Excel Library to set these properties using the [`Workbook`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbook.html) object’s [`documentProperties`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbook.html#documentproperties) property. The available properties are:

-   `Author`

-   `Title`

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

## Workbook Protection

The workbook protection feature allows you to protect the structure of the workbook. That is, the ability for a user to add, rename, delete, hide, and reorder the worksheets in that workbook.

The protection is not enforced via the Infragistics Excel Engine's object model. It is a responsibility of the UI visualizing this object model to honor these protection settings and allow or restrict the user from performing the corresponding operations.

Protection is applied to a workbook by invoking its `protect` method.

When a [`Workbook`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbook.html) is protected without a password, the end user may unprotect the [`Workbook`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbook.html) in Excel without having to supply a password. To programmatically unprotect a [`Workbook`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbook.html), one may use the `unprotect` method.

When a [`Workbook`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbook.html) is protected, the values of the properties of the [`WorkbookProtection`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbookprotection.html) instance from this [`Workbook`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbook.html)'s `protection` property indicate the disabled operations.

If [`isProtected`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbook.html#isprotected) is already true, the `protect` method will be ignored.

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
