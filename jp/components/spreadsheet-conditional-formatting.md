---
title: Angular スプレッドシート | 条件付き書式 | インフラジスティックス
_description: インフラジスティックスの Angular スプレッドシート コントロールを使用して、ワークシートのセルに条件付き書式を設定します。Ignite UI for Angular スプレッドシートのサンプルを是非お試しください!
_keywords: Spreadsheet, conditional formatting, Ignite UI for Angular, Infragistics, Worksheet, スプレッドシート, 条件付き書式, インフラジスティックス, ワークシート
mentionedTypes: ['Spreadsheet', 'ConditionalFormatCollection', 'WorksheetCell', 'Worksheet', 'IWorksheetCellFormat']
_language: ja
---

# Angular Spreadsheet の条件付き書式設定

Angular Spreadsheet コンポーネントは、ワークシートのセルに条件付き書式を設定できます。これにより、条件に基づいてデータのさまざまな部分を強調表示できます。

## Angular Spreadsheet の条件付き書式設定の例

<code-view style="height: 500px" alt="Angular Spreadsheet の条件付き書式設定の例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/excel/spreadsheet/conditional-formatting"
                                                 github-src="excel/spreadsheet/conditional-formatting">
</code-view>


<div class="divider--half"></div>

## 条件付き書式設定の概要

特定のワークシートの条件付き書式を構成するには、ワークシートの [`conditionalFormats`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheet.html#conditionalFormats) コレクションに公開される `Add` メソッドを使用できます。この `Add` メソッドの最初のパラメーターは条件付き書式に適用するワークシートの string 領域です。

ワークシートに追加できる条件付き書式の多くには、その条件付き書式の条件が満たされたときにセルを表示する方法を決定する [`cellFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheetcell.html#cellFormat) プロパティがあります。たとえば、[`fill`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/interfaces/igniteui_angular_excel.iworksheetcellformat.html#fill) および [`font`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/interfaces/igniteui_angular_excel.iworksheetcellformat.html#font) などのこの [`cellFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheetcell.html#cellFormat) プロパティにアタッチされるプロパティを使用してセルの背景およびフォント設定を決定できます。

条件付き書式が作成され、[`cellFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheetcell.html#cellFormat) が適用される場合、ワークシートのセルにサポートされるプロパティのサブセットがあります。現在サポートされる [`cellFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheetcell.html#cellFormat) プロパティは [`fill`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/interfaces/igniteui_angular_excel.iworksheetcellformat.html#fill)、`Border` プロパティ、[`formatString`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/interfaces/igniteui_angular_excel.iworksheetcellformat.html#formatString)、および strikethrough、underline、italic、bold、color などの [`font`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/interfaces/igniteui_angular_excel.iworksheetcellformat.html#font) プロパティです。以下のコード スニペットに複数のプロパティが設定されます。

ワーク セルの可視化の動作が異なるため、[`cellFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheetcell.html#cellFormat) プロパティがない条件付き書式もあります。この条件付き書式は [`DataBarConditionalFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.databarconditionalformat.html)、[`ColorScaleConditionalFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.colorscaleconditionalformat.html)、[`IconSetConditionalFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.iconsetconditionalformat.html) です。

既存の Workbook を Excel から読み込む際に、ワークブックが読み込まれた場合も書式設定は保持されます。ワークブックを Excel ファイルに保存する場合も保持されます。

以下は、Angular [`IgxSpreadsheetComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_spreadsheet.igxspreadsheetcomponent.html) コントロールでサポートされている条件付き書式の一覧です。

*   [`AverageConditionalFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.averageconditionalformat.html): [`addAverageCondition`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addAverageCondition) メソッドを使用して追加されたこの条件付きフォーマットは、セルの値が関連する範囲の平均または標準偏差より上か下かに基づいて、ワークシートセルの視覚属性を制御するプロパティを公開します。
*   [`BlanksConditionalFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.blanksconditionalformat.html): [`addBlanksCondition`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addBlanksCondition) メソッドを使用して追加されたこの条件付き書式では、セルの値が設定されていないかどうかに基づいてワークシートセルの表示属性を制御するプロパティを公開します。
*   [`ColorScaleConditionalFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.colorscaleconditionalformat.html): [`addColorScaleCondition`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addColorScaleCondition) メソッドを使用して追加された条件付き書式は、最小値、中央値、最大値に対するセルの値に基づいてワークシート セルの色を制御するプロパティを公開します。
*   [`DataBarConditionalFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.databarconditionalformat.html): [`addDataBarCondition`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addDataBarCondition) メソッドを使用して追加されたこの条件付き書式は、関連付けられた値の範囲に対するセルの値に基づいてワークシートのセルにデータバーを表示するプロパティを公開します。
*   [`DateTimeConditionalFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.datetimeconditionalformat.html): [`addDateTimeCondition`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addDateTimeCondition) メソッドを使用して追加されたこの条件付き書式は、セルの日付値が指定された時間範囲内にあるかどうかに基づいてワークシートセルの表示属性を制御するプロパティを公開します。
*   [`DuplicateConditionalFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.duplicateconditionalformat.html): [`addDuplicateCondition`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addDuplicateCondition) メソッドを使用して追加されたこの条件付き書式は、セルの値が一意であるか、関連付けられた範囲全体で複製されるかに基づいてワークシートセルの表示属性を制御するプロパティを公開します。
*   [`ErrorsConditionalFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.errorsconditionalformat.html): [`addErrorsCondition`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addErrorsCondition) メソッドを使用して追加されたこの条件付き書式では、セルの値が設定されていないかどうかに基づいてワークシートセルの表示属性を制御するプロパティを公開します。
*   [`FormulaConditionalFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.formulaconditionalformat.html): [`addFormulaCondition`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addFormulaCondition) メソッドを使用して追加されたこの条件付き書式は、セルの値が式で定義された基準を満たすかどうかに基づいてワークシート セルの表示属性を制御するプロパティを公開します。
*   [`IconSetConditionalFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.iconsetconditionalformat.html): [`addIconSetCondition`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addIconSetCondition) メソッドを使用して追加されたこの条件付き書式は、しきい値に対するセルの値に基づいてワークシートのセルにアイコンを表示するプロパティを公開します。
*   [`NoBlanksConditionalFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.noblanksconditionalformat.html): [`addNoBlanksCondition`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addNoBlanksCondition) メソッドを使用して追加されたこの条件付き書式では、セルの値が設定されていないかどうかに基づいてワークシートセルの表示属性を制御するプロパティを公開します。
*   [`NoErrorsConditionalFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.noerrorsconditionalformat.html): [`addNoErrorsCondition`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addNoErrorsCondition) メソッドを使用して追加されたこの条件付き書式では、セルの値が設定されていないかどうかに基づいてワークシートセルの表示属性を制御するプロパティを公開します。
*   [`OperatorConditionalFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.operatorconditionalformat.html): [`addOperatorCondition`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addOperatorCondition) メソッドを使用して追加されたこの条件付き書式は、セルの値が論理演算子で定義された基準を満たすかどうかに基づいてワークシートセルの視覚属性を制御するプロパティを公開します。
*   [`RankConditionalFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.rankconditionalformat.html): [`addRankCondition`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addRankCondition) メソッドを使用して追加されたこの条件付き書式は、セルの値が関連する範囲全体の値の最下位ランクの上部にあるかどうかに基づいてワークシート セルの表示属性を制御するプロパティを公開します。
*   [`TextOperatorConditionalFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.textoperatorconditionalformat.html): [`addRankCondition`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addRankCondition) メソッドを使用して追加されたこの条件付き書式は、セルのテキスト値が [`addTextCondition`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addTextCondition) メソッドのパラメーターの文字列および [`FormatConditionTextOperator`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/NaNformatconditiontextoperator.html) 値にで定義された基準を満たすかどうかに基づいてワークシート セルのビジュアル属性を制御するプロパティを公開します。
*   [`UniqueConditionalFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.uniqueconditionalformat.html): [`addUniqueCondition`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addUniqueCondition) メソッドを使用して追加されたこの条件付き書式は、セルの値が関連付けられた範囲全体で一意であるかどうかに基づいてワークシートセルの表示属性を制御するプロパティを公開します。

## 依存関係

[`IgxSpreadsheetComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_spreadsheet.igxspreadsheetcomponent.html) コントロールに条件付き書式を追加するには、以下の依存関係をインポートする必要があります。

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

## コード スニペット

以下のコード スニペットは、[`IgxSpreadsheetComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_spreadsheet.igxspreadsheetcomponent.html) コントロールのスプレッドシートに各条件付き書式を追加する方法を示しています。

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

## API リファレンス

*   [`addAverageCondition`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addAverageCondition)
*   [`addBlanksCondition`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addBlanksCondition)
*   [`addColorScaleCondition`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addColorScaleCondition)
*   [`addDataBarCondition`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addDataBarCondition)
*   [`addDateTimeCondition`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addDateTimeCondition)
*   [`addDuplicateCondition`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addDuplicateCondition)
*   [`addErrorsCondition`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addErrorsCondition)
*   [`addFormulaCondition`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addFormulaCondition)
*   [`addIconSetCondition`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addIconSetCondition)
*   [`addNoBlanksCondition`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addNoBlanksCondition)
*   [`addNoErrorsCondition`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addNoErrorsCondition)
*   [`addOperatorCondition`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addOperatorCondition)
*   [`addRankCondition`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addRankCondition)
*   [`addTextCondition`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addTextCondition)
*   [`addUniqueCondition`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.conditionalformatcollection.html#addUniqueCondition)
*   [`cellFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheetcell.html#cellFormat)
*   [`ColorScaleConditionalFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.colorscaleconditionalformat.html)
*   [`ColorScaleConditionalFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.colorscaleconditionalformat.html):
*   [`conditionalFormats`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheet.html#conditionalFormats)
*   [`DataBarConditionalFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.databarconditionalformat.html)
*   [`DataBarConditionalFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.databarconditionalformat.html):
*   [`DateTimeConditionalFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.datetimeconditionalformat.html):
*   [`DuplicateConditionalFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.duplicateconditionalformat.html):
*   [`ErrorsConditionalFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.errorsconditionalformat.html):
*   [`FormatConditionTextOperator`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/NaNformatconditiontextoperator.html)
*   [`formatString`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/interfaces/igniteui_angular_excel.iworksheetcellformat.html#formatString)
*   [`FormulaConditionalFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.formulaconditionalformat.html):
*   [`IconSetConditionalFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.iconsetconditionalformat.html)
*   [`IconSetConditionalFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.iconsetconditionalformat.html):
*   [`NoBlanksConditionalFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.noblanksconditionalformat.html):
*   [`NoErrorsConditionalFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.noerrorsconditionalformat.html):
*   [`OperatorConditionalFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.operatorconditionalformat.html):
*   [`RankConditionalFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.rankconditionalformat.html):
*   [`IgxSpreadsheetComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_spreadsheet.igxspreadsheetcomponent.html)
*   [`TextOperatorConditionalFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.textoperatorconditionalformat.html):
*   [`UniqueConditionalFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.uniqueconditionalformat.html):
