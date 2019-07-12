---
title: Spreadsheet|Grid コントロール|Ignite UI for Angular|条件付き書式|Infragistics |
_description: スプレッドシート コントロールを使用して、Excel ドキュメントの作成と編集のエクスペリエンスをアプリケーションに直接埋め込むことができます。
_keywords: Spreadsheet, Ignite UI for Angular, Infragistics
mentionedTypes: ['Spreadsheet']
---

## Spreadsheet の条件付き書式設定

Angular Spreadsheet コンポーネントは、ワークシートのセルに条件付き書式を設定できます。これにより、条件に基づいてデータのさまざまな部分を強調表示できます。

### 条件付き書式設定の概要

特定のワークシートの条件付き書式を構成するには、ワークシートの `ConditionalFormats` コレクションに公開される `Add` メソッドを使用できます。この Add メソッドの最初のパラメーターは条件付き書式に適用する Worksheet の `Add` 領域です。

ワークシートに追加できる条件付き書式の多くには、その条件付き書式の条件が満たされたときにセルを表示する方法を決定する `CellFormat` プロパティがあります。たとえば、`Fill` と `Font` などのこの `CellFormat` プロパティにアタッチされるプロパティを使用してセルの背景およびフォント設定を決定できます。

条件付き書式が作成され、`CellFormat` が適用される場合、ワークシートのセルにサポートされるプロパティのサブセットがあります。現在サポートされる `CellFormat` メソッドのプロパティは `Fill`、`Border` プロパティ、`FormatString`、および `Strikethrough`、`Underline`、`Italic`、`Bold`、`Color` などの `Font` プロパティです。以下のコード スニペットに複数のプロパティが設定されます。

ワーク セルの可視化の動作が異なるため、`CellFormat` プロパティがない条件付き書式もあります。この条件付き書式は [`DataBarConditionalFormat`](spreadsheet_conditional_formatting.md)、[`ColorScaleConditionalFormat`](spreadsheet_conditional_formatting.md)、[`IconSetConditionalFormat`](spreadsheet_conditional_formatting.md) です。

既存の Workbook を Excel から読み込む際に、ワークブックが読み込まれた場合も書式設定は保持されます。ワークブックを Excel ファイルに保存する場合も保持されます。

以下は、[`IgxSpreadsheetComponent`](spreadsheet_conditional_formatting.md) コントロールでサポートされている条件付き書式の一覧です。

-   [`AverageConditionalFormat`](spreadsheet_conditional_formatting.md): `AddAverageCondition` メソッドを使用して追加されたこの条件付きフォーマットは、セルの値が関連する範囲の平均または標準偏差より上か下かに基づいて、ワークシートセルの視覚属性を制御するプロパティを公開します。
-   [`BlanksConditionalFormat`](spreadsheet_conditional_formatting.md): `AddBlanksCondition` メソッドを使用して追加されたこの条件付き書式では、セルの値が設定されていないかどうかに基づいてワークシートセルの表示属性を制御するプロパティを公開します。
-   [`ColorScaleConditionalFormat`](spreadsheet_conditional_formatting.md): `AddColorScaleCondition` メソッドを使用して追加された条件付き書式は、最小値、中央値、最大値に対するセルの値に基づいてワークシート セルの色を制御するプロパティを公開します。
-   [`DataBarConditionalFormat`](spreadsheet_conditional_formatting.md): `AddDataBarCondition` メソッドを使用して追加されたこの条件付き書式は、関連付けられた値の範囲に対するセルの値に基づいてワークシートのセルにデータバーを表示するプロパティを公開します。
-   [`DateTimeConditionalFormat`](spreadsheet_conditional_formatting.md): `AddDateTimeCondition` メソッドを使用して追加されたこの条件付き書式は、セルの日付値が指定された時間範囲内にあるかどうかに基づいてワークシートセルの表示属性を制御するプロパティを公開します。
-   [`DuplicateConditionalFormat`](spreadsheet_conditional_formatting.md): `AddDuplicateCondition` メソッドを使用して追加されたこの条件付き書式は、セルの値が一意であるか、関連付けられた範囲全体で複製されるかに基づいてワークシートセルの表示属性を制御するプロパティを公開します。
-   [`ErrorsConditionalFormat`](spreadsheet_conditional_formatting.md): `AddErrorsCondition` メソッドを使用して追加されたこの条件付き書式は、セルの値が有効かどうかに基づいてワークシートセルの視覚的属性を制御するプロパティを公開します。
-   [`FormulaConditionalFormat`](spreadsheet_conditional_formatting.md): `AddFormulaCondition` メソッドを使用して追加されたこの条件付き書式は、セルの値が式で定義された基準を満たすかどうかに基づいてワークシート セルの表示属性を制御するプロパティを公開します。
-   [`IconSetConditionalFormat`](spreadsheet_conditional_formatting.md): `AddIconSetCondition` メソッドを使用して追加されたこの条件付き書式は、しきい値に対するセルの値に基づいてワークシートのセルにアイコンを表示するプロパティを公開します。
-   [`NoBlanksConditionalFormat`](spreadsheet_conditional_formatting.md): `AddNoBlanksCondition` メソッドを使用して追加されたこの条件付き書式は、セルの値が設定されているかどうかに基づいてワークシート セルの表示属性を制御するプロパティを公開します。
-   [`NoErrorsConditionalFormat`](spreadsheet_conditional_formatting.md): `AddNoErrorsCondition` メソッドを使用して追加されたこの条件付き書式は、セルの値が有効かどうかに基づいてワークシートセルの表示属性を制御するプロパティを公開します。
-   [`OperatorConditionalFormat`](spreadsheet_conditional_formatting.md): `AddOperatorCondition` メソッドを使用して追加されたこの条件付き書式は、セルの値が論理演算子で定義された基準を満たすかどうかに基づいてワークシートセルの視覚属性を制御するプロパティを公開します。
-   [`RankConditionalFormat`](spreadsheet_conditional_formatting.md): `AddRankCondition` メソッドを使用して追加されたこの条件付き書式は、セルの値が関連する範囲全体の値の最下位ランクの上部にあるかどうかに基づいてワークシート セルの表示属性を制御するプロパティを公開します。
-   セルのテキスト値が AddTextCondition メソッドのパラメーターの文字列および FormatConditionTextOperator 値によって定義される条件に合うかどうかに基づいて ワークシートのセル のビジュアル属性を制御するプロパティを公開します。
-   [`DuplicateConditionalFormat`](spreadsheet_conditional_formatting.md): `AddDuplicateCondition` メソッドを使用して追加されたこの条件付き書式は、セルの値が一意であるか、関連付けられた範囲全体されるかに基づいてワークシートセルの表示属性を制御するプロパティを公開します。

### 依存関係

[`IgxSpreadsheetComponent`](spreadsheet_conditional_formatting.md) コントロールに条件付き書式を追加するには、次の依存関係をインポートする必要があります。

```ts
import { CellFill} from "igniteui-angular-excel/ES5/CellFill";
import { Color } from "igniteui-angular-core/ES5/Color";
import { ColorScaleType} from "igniteui-angular-excel/ES5/ColorScaleType";
import { FormatConditionAboveBelow } from "igniteui-angular-excel/ES5/FormatConditionAboveBelow";
import { FormatConditionIconSet } from "igniteui-angular-excel/ES5/FormatConditionIconSet";
import { FormatConditionOperator } from "igniteui-angular-excel/ES5/FormatConditionOperator";
import { FormatConditionTextOperator } from "igniteui-angular-excel/ES5/FormatConditionTextOperator";
import { FormatConditionTimePeriod } from "igniteui-angular-excel/ES5/FormatConditionTimePeriod";
import { FormatConditionTopBottom} from "igniteui-angular-excel/ES5/FormatConditionTopBottom";
import { WorkbookColorInfo } from "igniteui-angular-excel/ES5/WorkbookColorInfo";
```

```ts
import { CellFill} from "igniteui-react-excel/ES5/CellFill";
import { Color } from "igniteui-react-core/ES5/Color";
import { ColorScaleType} from "igniteui-react-excel/ES5/ColorScaleType";
import { FormatConditionAboveBelow } from "igniteui-react-excel/ES5/FormatConditionAboveBelow";
import { FormatConditionIconSet } from "igniteui-react-excel/ES5/FormatConditionIconSet";
import { FormatConditionOperator } from "igniteui-react-excel/ES5/FormatConditionOperator";
import { FormatConditionTextOperator } from "igniteui-react-excel/ES5/FormatConditionTextOperator";
import { FormatConditionTimePeriod } from "igniteui-react-excel/ES5/FormatConditionTimePeriod";
import { FormatConditionTopBottom} from "igniteui-react-excel/ES5/FormatConditionTopBottom";
import { WorkbookColorInfo } from "igniteui-react-excel/ES5/WorkbookColorInfo";
```

### コード スニペット

次のコードスニペットは、[`IgxSpreadsheetComponent`](spreadsheet_conditional_formatting.md) コントロールのスプレッドシートに各条件付き書式を追加する方法を示しています。

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
