---
title: Spreadsheet | Grid コントロール | Ignite UI for Angular | chart adapter | Infragistics |
_description: スプレッドシート コントロールを使用して、Excel ドキュメントの作成と編集機能をアプリケーションに直接埋め込むことができます。
_keywords: Spreadsheet, Ignite UI for Angular, Infragistics
mentionedTypes: ['Spreadsheet']
_language: ja
---

## Spreadsheet チャート アダプター

Angular Spreadsheet コンポーネント`を使用して`Spreadsheet\`にチャートを表示できます。

### デモ

<div class="sample-container loading" style="height: 500px">
    <iframe id="spreadsheet-adapter-iframe" src='{environment:demosBaseUrl}/spreadsheet/spreadsheet-adapter' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>

<div class="divider--half"></div>

### チャート アダプターの概要

[`chartAdapter`](spreadsheet_chart_adapter.md) を使用すると、スプレッドシートにチャートを表示できます。スプレッドシート チャート アダプターは、Infragistics.Documents.Excel.WorksheetChart インスタンスに基づいてスプレッド シートのチャート要素を作成し、初期化します。

WorksheetChart をワークシートに追加するには、ワークシートの Shapes コレクションの [`addChart`](spreadsheet_chart_adapter.md) メソッドを使用する必要があります。チャートの追加の詳細については、下記をご覧ください。

以下はその手順です。

1.  SpreadsheetChartAdapterModule 参照をプロジェクトに追加します。
2.  Spreadsheet に割り当てる SpreadsheetChartAdapter クラスのインスタンスを作成します。
3.  アプリを実行してチャートを含むワークシートを読み込みます。

### サポートされるチャート タイプ

Spreadsheet ChartAdapter は、折れ線、エリア、柱状、ドーナツを含む 35 以上のチャート タイプがサポートされます。チャート タイプ一覧:

-   柱状チャート
    -   クラスタ柱状チャート
    -   積層型の柱状チャート
    -   100% 積層型柱状チャート  
-   折れ線チャート  
    -   折れ線チャート
    -   マーカー付き折れ線チャート
    -   積層型折れ線チャート
    -   マーカー付き積層型折れ線チャート
    -   100% 積層型折れ線チャート
    -   マーカー付き 100% 積層型折れ線チャート  
-   円チャート
-   ドーナツ型チャート  
-   棒チャート  
    -   クラスター棒チャート
    -   積層型棒チャート
    -   100% 積層型棒チャート
    -   エリア チャート
    -   エリア
    -   積層型エリア チャート
    -   100% 積層型エリア チャート
-   XY (散布図) とバブル チャート  
    -   散布図 (マーカーのみ)
    -   滑らかな線を使用した散布図
    -   滑らかな線とマーカーを使用した散布図
    -   直接を使用した散布図
    -   直線とマーカーを使用した散布図
    -   バブル (エフェクトなし) チャート
    -   Bubble3DEffect
-   株価チャート  
    -   高値-安値-終値
    -   始値-高値-安値-終値
    -   出来高-高値-安値-終値
    -   出来高-始値-高値-安値-終値
-   レーダー チャート  
    -   マーカーなしのレーダー
    -   マーカー付きレーダー
    -   塗りつぶしたレーダー
-   コンボ チャート  
    -   xAxis を共有する柱状チャートと折れ線チャート
    -   柱状チャートと折れ線チャート、および第 2 xAxis
    -   積層エリアと柱状チャート
    -   カスタムな組み合わせ

### 依存関係

ハイパーリンクを使用するようにスプレッドシート コントロールを設定するときは、[`SpreadsheetChartAdapter`](spreadsheet_chart_adapter.md) クラスをインポートする必要があります。

```ts
import { IgxSpreadsheetchartadaptermodule } from "igniteui-angular-spreadsheet-chart-adapter/ES5/igx-spreadsheet-chart-adapter-module";

---
import { SpreadsheetChartAdapter } from "igniteui-angular-spreadsheet-chart-adapter/ES5/SpreadsheetChartAdapter";

import { ChartTitle, ChartType, FormattedString, Workbook } from "igniteui-angular-excel/ES5/excel.core";
import { ExcelUtility } from "../../utilities/excel-utility";
import { Worksheet } from "igniteui-angular-excel/ES5/Worksheet";
import { WorksheetCell } from "igniteui-angular-excel/ES5/WorksheetCell";
```

### コード スニペット

次のコードスニペットは、[`IgxSpreadsheet`](spreadsheet_chart_adapter.md) コントロールで現在表示されているワークシートにハイパーリンクを追加する方法を示しています。

```typescript
this.spreadsheet.chartAdapter = new SpreadsheetChartAdapter();

ExcelUtility.loadFromUrl(process.env.PUBLIC_URL + "/ExcelFiles/ChartData.xlsx").then((w) => {
    this.spreadsheet.workbook = w;

    const sheet: Worksheet = this.spreadsheet.workbook.worksheets(0);

    sheet.defaultColumnWidth = 500 * 20;
    sheet.rows(0).height = 150 * 20;

    const cell1: WorksheetCell = sheet.getCell("A1");
    const cell2: WorksheetCell = sheet.getCell("B1");
    const cell3: WorksheetCell = sheet.getCell("C1");
    const cell4: WorksheetCell = sheet.getCell("D1");

    const dataCellAddress = "A4:D6";

    const chart1 = sheet.shapes().addChart(ChartType.Line, cell1, { x: 0, y: 0 }, cell1, { x: 100, y: 100 });

    const title: ChartTitle = new ChartTitle();
    title.text = new FormattedString("Line Chart");
    chart1.chartTitle = title;

    chart1.setSourceData(dataCellAddress, true);

    const chart2 = sheet.shapes().addChart(ChartType.ColumnClustered, cell2, { x: 0, y: 0 }, cell2, { x: 100, y: 100 });

    const title2: ChartTitle = new ChartTitle();
    title2.text = new FormattedString("Column Chart");
    chart2.chartTitle = title2;

    chart2.setSourceData(dataCellAddress, true);

    const chart3 = sheet.shapes().addChart(ChartType.Area, cell3, { x: 0, y: 0 }, cell3, { x: 100, y: 100 });

    const title3: ChartTitle = new ChartTitle();
    title3.text = new FormattedString("Area Chart");
    chart3.chartTitle = title3;

    chart3.setSourceData(dataCellAddress, true);

    const chart4 = sheet.shapes().addChart(ChartType.Pie, cell4, { x: 0, y: 0 }, cell4, { x: 100, y: 100 });

    const title4: ChartTitle = new ChartTitle();
    title4.text = new FormattedString("Pie Chart");
    chart4.chartTitle = title4;

    chart4.setSourceData(dataCellAddress, true);
});
```
