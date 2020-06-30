---
title: Excel ライブラリ| データ スプレッドシート | Ignite UI for Angular | インフラジスティックス
_description: Excel ライブラリは、Microsoft Excel 機能を使用してスプレッドシート データを使用した作業が可能になります。Excel からアプリケーションへデータを簡単に転送できます。
_keywords: Excel library, Ignite UI for Angular, Infragistics, Excel ライブラリ, インフラジスティックス
mentionedTypes: ['Workbook']
_language: ja
---

## チャートの使用

Infragistics Angular Excel Engine の [`WorksheetChart`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetchart.html) 機能は、ワークシートのセル領域全体のデータ トレンドをチャートで表示します。たとえば Excel データを縦棒チャートや折れ線チャートで可視化する場合に便利です。

### サンプル

<div class="sample-container loading" style="height: 500px">
    <iframe id="excel-library-overview-sample-iframe" src='{environment:dvDemosBaseUrl}/excel-library/working-with-charts' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>

<div class="divider--half"></div>

### 使用方法

ワークシートを追加するには、ワークシートの Shapes コレクションの `addChart` メソッドを使用します。このメソッドは、チャート タイプと表示位置を左上のセル、右下のセル、それらのセルのパーセンテージで指定できます。

`addChart` メソッドはワークシートに追加されるワークシート チャート要素を返します。次にチャートの `setSourceData` メソッドを使用してデータソースとして使用するワークシート セル領域のセルのセル アドレスを設定できます。同様に行列のマッピングを Y と X 軸に切り替えることもできます。

`Line`、`Area`、[`IgxColumnComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcolumncomponent.html)、`Pie` を含む 70 タイプ以上のチャート タイプがサポートされます。

以下のコードは、Excel チャート機能を有効にする方法を示します。以下のスニペットは、ワークシートの最初の行の最初のセルと 13 番目のセル間に柱状チャートを追加します。ソースデータは A2:M6 領域のデータに設定します。柱状チャートの  X と Y 軸の列と行のマッピングを切り替えます。

```ts
var chart = ws.shapes().addChart(ChartType.ColumnClustered,
      ws.rows(0).cells(0), { x: 0, y: 0 },
      ws.rows(0).cells(12), { x: 100, y: 100 });

chart.setSourceData("A2:M6", true);
```
