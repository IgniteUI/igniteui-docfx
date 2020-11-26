---
title: Angular Excel ライブラリ | チャートの使用 | インフラジスティックス
_description: インフラジスティックスの Angular Excel ライブラリのチャート機能を使用して、ワークシートのセル領域全体のデータ トレンドをチャートで表示します。Ignite UI for Angular Excel データを 70 種類以上のチャート タイプで可視化できます。
_keywords: Excel library, charts,  Ignite UI for Angular, Infragistics, Excel ライブラリ, チャート, インフラジスティックス
mentionedTypes: ['Workbook', 'Worksheet']
_language: ja
---

# Angular チャートの使用

Infragistics Angular Excel Engine の [`WorksheetChart`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetchart.html) 機能は、ワークシートのセル領域全体のデータ トレンドをチャートで表示します。たとえば Excel データを縦棒チャートや折れ線チャートで可視化する場合に便利です。

## Angular チャートの使用の例

<div class="sample-container loading" style="height: 500px">
    <iframe id="excel-library-overview-sample-iframe" src='{environment:dvDemosBaseUrl}/excel/excel-library-working-with-charts' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular チャートの使用の例"></iframe>
</div>


<div class="divider--half"></div>

## 使用方法

ワークシートを追加するには、ワークシートの Shapes コレクションの `AddChart` メソッドを使用します。このメソッドは、チャート タイプと表示位置を左上のセル、右下のセル、それらのセルのパーセンテージで指定できます。

`AddChart` メソッドはワークシートに追加されるワークシート チャート要素を返します。次にチャートの [`setSourceData`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetchart.html#setsourcedata) メソッドを使用してデータソースとして使用するワークシート セル領域のセルのセル アドレスを設定できます。同様に行列のマッピングを Y と X 軸に切り替えることもできます。

`Line`、`Area`、[`IgxColumnComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcolumncomponent.html)、`Pie` を含む 70 タイプ以上のチャート タイプがサポートされます。

以下のコードは、Excel チャート機能を有効にする方法を示します。以下のスニペットは、ワークシートの最初の行の最初のセルと 13 番目のセル間に縦棒チャートを追加します。ソースデータは A2:M6 領域のデータに設定します。縦棒チャートの  X と Y 軸の列と行のマッピングを切り替えます。

```ts
var chart = ws.shapes().addChart(ChartType.ColumnClustered,
      ws.rows(0).cells(0), { x: 0, y: 0 },
      ws.rows(0).cells(12), { x: 100, y: 100 });

chart.setSourceData("A2:M6", true);
```
