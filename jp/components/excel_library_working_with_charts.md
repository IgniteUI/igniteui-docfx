---
title: チャートでの作業
_description: Ignite UI for Excel Library コンポーネントは、ワークシートも領域セル全体のデータ トレンドをビジュアル表示できるチャートです。
_keywords: Ignite UI for Angular, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular Excel ライブラリ, Angular Excel ライブラリ例,  Angular Excel Library コンポーネント, Angular Excel Engine, Chart, Angular Excel Chart
_language: ja
---

## Excel ライブラリ チャート

このトピックでは、データ トレンドを視覚的に表示するためにコードを使用して Excel ワークシート (.xlsx) にワークシート チャートを追加し、ワークシートのセル領域のデータ トレンドを可視化する方法を表します。たとえば Excel データを柱状チャートや折れ線チャートで可視化する場合などでこの機能が役立ちます。

### デモ

<div class="sample-container loading" style="height: 500px">
    <iframe id="excel-library-overview-sample-iframe" src='{environment:dvDemosBaseUrl}/excel-library/working-with-charts' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="excel-library-overview-sample-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">stackblitz で表示
    </button>
</div>

<div class="divider--half"></div>

### 使用方法

ワークシートを追加するには、ワークシートの Shapes コレクションの `addChart` メソッドを使用します。このメソッドは、チャート タイプと表示位置を左上のセル、右下のセル、それらのセルのパーセンテージで指定できます。

addChart メソッドはワークシートに追加されるワークシート チャート要素を返します。チャートでメソッドを使用してデータソースとして使用するワークシート セル領域のセルのセル アドレスを設定できます。同様に行列のマッピングを Y と X 軸に切り替えることもできます。

折れ線、エリア、柱状、円を含む 70 タイプ以上のチャート タイプがサポートされます。

以下のコードは、Excel チャート機能を有効にする方法を示します。

```ts
var chart = ws.shapes().addChart(ChartType.ColumnClustered,
      ws.rows(0).cells(0), { x: 0, y: 0 },
      ws.rows(0).cells(headers.length - 1), { x: 100, y: 100 });

chart.setSourceData(table.wholeTableRegion.toString(), true);
```

```ts
import { ChartType } from 'igniteui-webcomponents-excel/ES2015/excel.core';

let chart = ws.shapes().addChart(ChartType.ColumnClustered,
    ws.rows(0).cells(0), { x: 0, y: 0 },
    ws.rows(0).cells(12), { x: 100, y: 100 });

chart.setSourceData("A2:M6", true);
```
