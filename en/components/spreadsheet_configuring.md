---
title: Spreadsheet | Grid Controls | Ignite UI for Angular | Configuration | Infragistics |
_description: Use the Spreadsheet control to embed Excel document creation and editing experiences right into your application.
_keywords: Spreadsheet, Ignite UI for Angular, Infragistics
mentionedTypes: ['Spreadsheet']
---

## Configuring Spreadsheet

The Angular Spreadsheet component allows the user to configure many different aspects of the control, including but not limited to editing of the cells, the visibility of gridlines and headers, protection, zoom level, and various other properties related to the Excel worksheet.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="spreadsheet-overview-sample-iframe" src='{environment:demosBaseUrl}/spreadsheet/spreadsheet-configuring' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>

<div class="divider--half"></div>

### Configuring Cell Editing

When a user edits a cell value and confirms the new input, the [`IgxSpreadsheetComponent`](/components/spreadsheet_configuring.html) control has the ability to navigate to cells adjacent to the currently active cell on press of the `Enter` key, depending on the configuration of the spreadsheet.

In order to enable this `Enter` key navigation, you can set the [`isEnterKeyNavigationEnabled`](/components/spreadsheet_configuring.html) property to `true`. If set to false, the active cell will stay the same when pressing the `Enter` key.

You can also configure the direction of the adjacent cell navigated to on press of the `Enter` key by setting the [`enterKeyNavigationDirection`](/components/spreadsheet_configuring.html) property to `Down`, `Up`, `Left` or `Right`.

The following code snippets demonstrate the above:

```html
<igx-spreadsheet isEnterKeyNavigationEnabled=true
    enterKeyNavigationDirection="Left">
</igx-spreadsheet>
```

```ts
import { SpreadsheetEnterKeyNavigationDirection } from "igniteui-react-spreadsheet/ES5/SpreadsheetEnterKeyNavigationDirection";
```

```ts
this.spreadsheet.isEnterKeyNavigationEnabled = true;
this.spreadsheet.enterKeyNavigationDirection = SpreadsheetEnterKeyNavigationDirection.Left;
```

### Configuring Formula Bar

The [`IgxSpreadsheetComponent`](/components/spreadsheet_configuring.html) allows you to configure the visibility of the formula bar by setting the [`isFormulaBarVisible`](/components/spreadsheet_configuring.html) property of the control.

The following code snippets demonstrate the above:

```html
<igx-spreadsheet isFormulaBarVisible=true></igx-spreadsheet>
```

```ts
this.spreadsheet.isFormulaBarVisible = true;
```

### Configuring Gridlines

The [`IgxSpreadsheetComponent`](/components/spreadsheet_configuring.html) allows you to configure the visibility of its gridlines by setting the [`areGridlinesVisible`](/components/spreadsheet_configuring.html) property of the control.

The following code snippets demonstrate the above:

```html
<igx-spreadsheet areGridlinesVisible=true></igx-spreadsheet>
```

```ts
this.spreadsheet.areGridlinesVisible = true;
```

### Configuring Headers

The [`IgxSpreadsheetComponent`](/components/spreadsheet_configuring.html) allows you to configure the visibility of its headers by setting the [`areHeadersVisible`](/components/spreadsheet_configuring.html) property of the control.

The following code snippets demonstrate the above:

```html
<igx-spreadsheet areHeadersVisible=false></igx-spreadsheet>
```

```ts
this.spreadsheet.areHeadersVisible = false;
```

### Configuring Navigation

The [`IgxSpreadsheetComponent`](/components/spreadsheet_configuring.html) control allows you to configure navigation between a worksheet's cells by configuring whether or not the control is in "end mode." End mode is the functionality where, on press of an arrow key, the active cell will be moved from the current cell to the end of the row or column where data exists in the adjacent cells, depending on the direction of the arrow key pressed. This functionality is good for navigating to the end of large blocks of data very quickly.

For example, if you are in end mode, and you click in a large 100x100 block of data, and press the `Right` arrow key, this will navigate to the right end of the row that you are in to the furthest right column with data. After this operation, the [`IgxSpreadsheetComponent`](/components/spreadsheet_configuring.html) will pop out of end mode.

End mode goes into effect at runtime when the user presses the `End` key, but it can be configured programmatically by setting the [`isInEndMode`](/components/spreadsheet_configuring.html) property of the spreadsheet control.

The following code snippets demonstrate the above, in that the [`IgxSpreadsheetComponent`](/components/spreadsheet_configuring.html) will begin in end mode:

```html
<igx-spreadsheet isInEndMode=true></igx-spreadsheet>
```

```ts
this.spreadsheet.isInEndMode = true;
```

### Configuring Protection

The [`IgxSpreadsheetComponent`](/components/spreadsheet_configuring.html) will respect the protection of a workbook on a worksheet-by-worksheet basis. Configuration for a worksheet's protection can be configured by calling the `Protect()` method on the worksheet to protect it, and the `Unprotect()` method to unprotect it.

You can activate or deactivate protection on the [`IgxSpreadsheetComponent`](/components/spreadsheet_configuring.html) control's currently active worksheet by using the code below:

```ts
this.spreadsheet.activeWorksheet.protect();
this.spreadsheet.activeWorksheet.unprotect();
```

### Configuring Selection

The [`IgxSpreadsheetComponent`](/components/spreadsheet_configuring.html) control allows you to configure the type of selection allowed in the control then modifier keys (`Shift` or `Ctrl`) are pressed by the user. This is done by setting the [`selectionMode`](/components/spreadsheet_configuring.html) property of the spreadsheet to one of the following values:

-   `AddToSelection`: New cell ranges are added to the [`SpreadsheetSelection`](/components/spreadsheet_configuring.html) object's [`cellRanges`](/components/spreadsheet_configuring.html) collection without needing to hold down the ctrl key when dragging via the mouse and a range is added with the first arrow key navigation after entering the mode. One can enter the mode by pressing Shift+F8.
-   `ExtendSelection`: The selection range in the [`SpreadsheetSelection`](/components/spreadsheet_configuring.html) object's [`cellRanges`](/components/spreadsheet_configuring.html) collection representing the active cell is updated as one uses the mouse to select a cell or navigating via the keyboard.
-   `Normal`: The selection is replaced when dragging the mouse to select a cell or range of cells. Similarly when navigating via the keyboard a new selection is created. One may add a new range by holding the Ctrl key and using the mouse and one may alter the selection range containing the active cell by holding the Shift key down while clicking with the mouse or navigating with the keyboard such as with the arrow keys.

The [`SpreadsheetSelection`](/components/spreadsheet_configuring.html) object mentioned in the descriptions above can be obtained by using the [`activeSelection`](/components/spreadsheet_configuring.html) property of the [`IgxSpreadsheetComponent`](/components/spreadsheet_configuring.html) control.

The following code snippets demonstrate configuration of the selection mode:

```html
<igx-spreadsheet selectionMode="ExtendSelection"></igx-spreadsheet>
```

```ts
import { SpreadsheetCellSelectionMode } from "igniteui-react-spreadsheet/ES5/SpreadsheetCellSelectionMode";
```

```ts
this.spreadsheet.selectionMode = SpreadsheetCellSelectionMode.ExtendSelection;
```

The selection of the [`IgxSpreadsheetComponent`](/components/spreadsheet_configuring.html) control can also be set or obtained programmatically. For single selection, you can set the [`activeCell`](/components/spreadsheet_configuring.html) property Multiple selection is done through the [`SpreadsheetSelection`](/components/spreadsheet_configuring.html) object that is returned by the [`IgxSpreadsheetComponent`](/components/spreadsheet_configuring.html) control's [`activeSelection`](/components/spreadsheet_configuring.html) property.

The [`SpreadsheetSelection`](/components/spreadsheet_configuring.html) object has an `AddCellRange()` method that allows you to programmatically add a range of cells to the selection of the spreadsheet in the form of a new  [`SpreadsheetCellRange`](/components/spreadsheet_configuring.html) object.

The following code snippet demonstrates adding a cell range to the spreadsheet's selection:

```ts
this.spreadsheet.activeSelection.addCellRange(new SpreadsheetCellRange(2, 2, 5, 5));
```

### Configuring Tab Bar Area

The [`IgxSpreadsheetComponent`](/components/spreadsheet_configuring.html) control respects the configuration of the visibility and width of the tab bar area from the [`WindowOptions`](/components/spreadsheet_configuring.html) of the currently active [`workbook`](/components/spreadsheet_configuring.html) via the [`tabBarWidth`](/components/spreadsheet_configuring.html) and `TabBarVisibility` properties, respectively.

The tab bar area is the area that visualizes the worksheet names as tabs in the control.

You can configure the tab bar's visibility and width using the following code snippet:

```ts
this.spreadsheet.workbook.windowOptions.tabBarVisible = false;

this.spreadsheet.workbook.windowOptions.tabBarWidth = 200;
```

### Configuring Zoom Level

The Angular Spreadsheet component supports zooming in and out by configuring its [`zoomLevel`](/components/spreadsheet_configuring.html) property. The zoom level can be a maximum of 400% and a minimum of 10%.

Setting this property to a number represents the percentage as a whole number, so setting the [`zoomLevel`](/components/spreadsheet_configuring.html) to 100 is equivalent to setting it to 100%.

The following code snippets show how to configure the spreadsheet's zoom level:

```html
<igx-spreadsheet zoomLevel=200></igx-spreadsheet>
```

```ts
this.spreadsheet.zoomLevel = 200;
```
