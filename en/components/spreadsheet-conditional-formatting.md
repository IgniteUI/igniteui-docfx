---
title: Angular Spreadsheet | Conditional Formatting | Infragistics
_description: Use Infragistics' Angular spreadsheet control to conditionally format the cells of a worksheet. Check out Ignite UI for Angular spreadsheet demos!
_keywords: Spreadsheet, conditional formatting, Ignite UI for Angular, Infragistics, Worksheet
mentionedTypes: ['Spreadsheet', 'ConditionalFormatCollection', 'WorksheetCell', 'Worksheet', 'IWorksheetCellFormat']
---

# Angular Spreadsheet Conditional Formatting

The Angular Spreadsheet component allows you to conditionally format the cells of a worksheet. This allows you to highlight different pieces of your data based on a condition.

## Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-grid-overview-sample-iframe" src='{environment:dvDemosBaseUrl}/excel/spreadsheet-conditional-formatting' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>


<div class="divider--half"></div>

## Conditional Formatting Overview

You can configure the conditional formatting of a particular worksheet by using the many `Add` methods exposed on the [`conditionalFormats`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheet.html#conditionalformats) collection of that worksheet. The first parameter of these `Add` methods is the string region of the worksheet that you would like to apply the conditional format to.

Many of the conditional formats that you can add to your worksheet have a [`cellFormat`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html#cellformat) property that determines the way that the cells should look when the condition in that conditional format holds true. For example, you can use the properties attached to this [`cellFormat`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html#cellformat) property such as [`fill`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/iworksheetcellformat.html#fill) and [`font`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/iworksheetcellformat.html#font) to determine the background and font settings of your cells, respectively.

When a conditional format is created and a [`cellFormat`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html#cellformat) applied, there is a subset of properties that are currently supported by the worksheet cell. The properties that are currently honored off of the [`cellFormat`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html#cellformat) are [`fill`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/iworksheetcellformat.html#fill), `Border` properties, [`formatString`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/iworksheetcellformat.html#formatstring), and some [`font`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/iworksheetcellformat.html#font) properties such as strikethrough, underline, italic, bold, and color. Many of these can be seen from the code snippet below.

There are a few conditional formats that do not have a [`cellFormat`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html#cellformat) property, as their visualization on the cells behaves differently. These conditional formats are the [`DataBarConditionalFormat`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/databarconditionalformat.html), [`ColorScaleConditionalFormat`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/colorscaleconditionalformat.html), and [`IconSetConditionalFormat`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/iconsetconditionalformat.html).

When loading a pre-existing workbook from Excel, the formats will be preserved when that workbook is loaded. The same is true for when you save the workbook out to an Excel file.

The following lists the supported conditional formats in the Angular [`IgxSpreadsheetComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html) control:

-   [`AverageConditionalFormat`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/averageconditionalformat.html): Added using the [`addAverageCondition`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/conditionalformatcollection.html#addaveragecondition) method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether a cell’s value is above or below the average or standard deviation for the associated range.
-   [`BlanksConditionalFormat`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/blanksconditionalformat.html): Added using the [`addBlanksCondition`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/conditionalformatcollection.html#addblankscondition) method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether the cell’s value is not set.
-   [`ColorScaleConditionalFormat`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/colorscaleconditionalformat.html): Added using the [`addColorScaleCondition`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/conditionalformatcollection.html#addcolorscalecondition) method, this conditional format exposes properties which control the coloring of a worksheet cell based on the cell’s value as relative to minimum, midpoint, and maximum threshold values.
-   [`DataBarConditionalFormat`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/databarconditionalformat.html): Added using the [`addDataBarCondition`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/conditionalformatcollection.html#adddatabarcondition) method, this conditional format exposes properties which display data bars in a worksheet cell based on the cell’s value as relative to the associated range of values.
-   [`DateTimeConditionalFormat`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/datetimeconditionalformat.html): Added using the [`addDateTimeCondition`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/conditionalformatcollection.html#adddatetimecondition) method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether a cell’s date value falls within a given range of time.
-   [`DuplicateConditionalFormat`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/duplicateconditionalformat.html): Added using the [`addDuplicateCondition`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/conditionalformatcollection.html#addduplicatecondition) method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether a cell’s value is unique or duplicated across the associated range.
-   [`ErrorsConditionalFormat`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/errorsconditionalformat.html): Added using the [`addErrorsCondition`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/conditionalformatcollection.html#adderrorscondition) method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether the cell’s value is valid.
-   [`FormulaConditionalFormat`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/formulaconditionalformat.html): Added using the [`addFormulaCondition`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/conditionalformatcollection.html#addformulacondition) method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether the cell’s value meets the criteria defined by a formula.
-   [`IconSetConditionalFormat`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/iconsetconditionalformat.html): Added using the [`addIconSetCondition`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/conditionalformatcollection.html#addiconsetcondition) method, this conditional format exposes properties which display icons in a worksheet cell based on the cell’s value as relative to threshold values.
-   [`NoBlanksConditionalFormat`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/noblanksconditionalformat.html): Added using the [`addNoBlanksCondition`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/conditionalformatcollection.html#addnoblankscondition) method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether the cell’s value is set.
-   [`NoErrorsConditionalFormat`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/noerrorsconditionalformat.html): Added using the [`addNoErrorsCondition`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/conditionalformatcollection.html#addnoerrorscondition) method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether the cell’s value is valid.
-   [`OperatorConditionalFormat`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/operatorconditionalformat.html): Added using the [`addOperatorCondition`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/conditionalformatcollection.html#addoperatorcondition) method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether the cell’s value meets the criteria defined by a logical operator.
-   [`RankConditionalFormat`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/rankconditionalformat.html): Added using the [`addRankCondition`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/conditionalformatcollection.html#addrankcondition) method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether a cell’s value is within the top of bottom rank of values across the associated range.
-   [`TextOperatorConditionalFormat`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/textoperatorconditionalformat.html): Added using the [`addTextCondition`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/conditionalformatcollection.html#addtextcondition) method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether a cell’s text value meets the criteria defined by a string and a [`FormatConditionTextOperator`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/formatconditiontextoperator.html) value as placed in the [`addTextCondition`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/conditionalformatcollection.html#addtextcondition) method’s parameters.
-   [`UniqueConditionalFormat`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/uniqueconditionalformat.html): Added using the [`addUniqueCondition`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/conditionalformatcollection.html#adduniquecondition) method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether a cell’s value is unique across the associated range.

## Dependencies

In order to add conditional formatting to the [`IgxSpreadsheetComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html) control, you will need to import the following dependencies:

<!-- Angular -->

```ts
import { CellFill } from "igniteui-angular-excel";
import { Color } from 'igniteui-angular-core';
import { ColorScaleType } from "igniteui-angular-excelScaleType";
import { FormatConditionAboveBelow } from 'igniteui-angular-excel';
import { FormatConditionIconSet } from 'igniteui-angular-excel';
import { FormatConditionOperator } from 'igniteui-angular-excel';
import { FormatConditionTextOperator } from 'igniteui-angular-excel';
import { FormatConditionTimePeriod } from 'igniteui-angular-excel';
import { FormatConditionTopBottom } from "igniteui-angular-excel";
import { WorkbookColorInfo } from 'igniteui-angular-excel';
```

## Code Snippet

The following code snippet demonstrates how to add each of the conditional formats to a spreadsheet in the [`IgxSpreadsheetComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html) control:

```ts
let sheet = this.spreadsheet.activeWorksheet;

let red = new Color();
red.colorString = "#ff0000";

let blue = new Color();
blue.colorString = "#0000ff";

let green = new Color();
green.colorString = "#00ff00";

let gray = new Color();
gray.colorString = "#d3d3d3";

let avgFormat = sheet.conditionalFormats().addAverageCondition("A1:A10", FormatConditionAboveBelow.AboveAverage);
avgFormat.cellFormat.font.colorInfo = new WorkbookColorInfo(red);

let blanksFormat = sheet.conditionalFormats().addBlanksCondition("B1:B10");
blanksFormat.cellFormat.fill = CellFill.createSolidFill(new WorkbookColorInfo(gray));

let colorFormat = sheet.conditionalFormats().addColorScaleCondition("C1:C10", ColorScaleType.ThreeColor);
colorFormat.minimumThreshold.formatColor = new WorkbookColorInfo(red);
colorFormat.midpointThreshold.formatColor = new WorkbookColorInfo(blue);
colorFormat.maximumThreshold.formatColor = new WorkbookColorInfo(green);

let dataBarFormat = sheet.conditionalFormats().addDataBarCondition("D1:D10");

let dateTimeFormat = sheet.conditionalFormats().addDateTimeCondition("E1:E10", FormatConditionTimePeriod.NextWeek);
dateTimeFormat.cellFormat.font.colorInfo = new WorkbookColorInfo(red);

let duplicateFormat = sheet.conditionalFormats().addDuplicateCondition("F1:F10");
duplicateFormat.cellFormat.font.colorInfo = new WorkbookColorInfo(blue);

let errorFormat = sheet.conditionalFormats().addErrorsCondition("G1:G10");
errorFormat.cellFormat.font.colorInfo = new WorkbookColorInfo(green);

let formulaFormat = sheet.conditionalFormats().addFormulaCondition("H1:H10", "=H1>2");
formulaFormat.cellFormat.font.colorInfo = new WorkbookColorInfo(red);

let iconFormat = sheet.conditionalFormats().addIconSetCondition("I1:I10", FormatConditionIconSet.IconSet3TrafficLights1);

let noBlanksFormat = sheet.conditionalFormats().addNoBlanksCondition("J1:J10");
noBlanksFormat.cellFormat.fill = CellFill.createSolidFill(new WorkbookColorInfo(gray));

let noErrorFormat = sheet.conditionalFormats().addErrorsCondition("K1:K10");
noErrorFormat.cellFormat.font.colorInfo = new WorkbookColorInfo(red);

let operatorFormat = sheet.conditionalFormats().addOperatorCondition("L1:L10", FormatConditionOperator.Greater);
operatorFormat.setOperand1(500);
operatorFormat.cellFormat.font.colorInfo = new WorkbookColorInfo(blue);

let rankFormat = sheet.conditionalFormats().addRankCondition("M1:M10", FormatConditionTopBottom.Top, 5);
rankFormat.cellFormat.font.colorInfo = new WorkbookColorInfo(green);

let textFormat = sheet.conditionalFormats().addTextCondition("N1:N10", "A", FormatConditionTextOperator.Contains);
textFormat.cellFormat.font.colorInfo = new WorkbookColorInfo(red);

let uniqueFormat = sheet.conditionalFormats().addUniqueCondition("O1:O10");
uniqueFormat.cellFormat.font.colorInfo = new WorkbookColorInfo(blue);
```
