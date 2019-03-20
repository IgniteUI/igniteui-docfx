---
title: チャートでの作業
_description: The Ignite UI for Excel Library component allows for the addition of charts to show visual representations of data trends across regions of cells in a worksheet.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Excel Library, Angular Excel Library Example, Angular Excel Library Component, Angular Excel Engine, Chart, Angular Excel Chart
_language: ja
---

## Excel Library チャート

このトピックでは、データ トレンドを視覚的に表示するためにコードを使用して Excel ワークシート (.xlsx) にワークシート チャートを追加し、ワークシートのセル領域のデータ トレンドを可視化する方法を表します。たとえば Excel データを柱状チャートや折れ線チャートで可視化する場合この機能は便利です。

### デモ

<div class="sample-container loading" style="height: 500px">
    <iframe id="excel-library-overview-sample-iframe" src='{environment:demosBaseUrl}/excel-library/working-with-charts' width="100%" height="100%" seamless="" frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>

<div class="divider--half"></div>

### 使用方法

ワークシートを追加するには、ワークシートの Shapes コレクションの addChart メソッドを使用します。このメソッドは、チャート タイプと表示位置を左上のセル、右下のセル、それらのセルのパーセンテージで指定できます。

addChart メソッドはワークシートに追加されるワークシート チャート要素を返します。チャートでメソッドを使用してデータソースとして使用するワークシート セル領域のセルのセル アドレスを設定できます。同様に行列のマッピングを Y と X 軸に切り替えることもできます。

折れ線、エリア、柱状、円を含む 70 タイプ以上のチャート タイプがサポートされます。

以下のコードは、Excel チャート機能を有効にする方法を示します。

```typescript
var chart = ws.shapes().addChart(ChartType.ColumnClustered, 
      ws.rows(0).cells(0), { x: 0, y: 0 },
      ws.rows(0).cells(headers.length - 1), { x: 100, y: 100 });

chart.setSourceData(table.wholeTableRegion.toString(), true);
```
