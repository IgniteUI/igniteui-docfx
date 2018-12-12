---
title: チャートの使用
_description: Ignite UI for Excel Library コンポーネントは、ワークシートも領域セル全体のデータ トレンドをビジュアル表示できるチャートです。
_keywords: Ignite UI for Angular, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular Excel ライブラリ, Angular Excel ライブラリ例,  Angular Excel Library コンポーネント, Angular Excel Engine, Chart, Angular Excel Chart
_language: ja
---
## チャートの使用

Infragistics Excel Engine の `WorksheetChart` 機能は、ワークシートのセル領域全体のデータ トレンドをチャートで表示します。たとえば Excel データを柱状チャートや折れ線チャートで可視化する場合に便利です。

### デモ

<div class="sample-container" style="height: 500px">
    <iframe id="excel-library-overview-sample-iframe" src='{environment:demosBaseUrl}/excel-library-working-with-charts' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <!-- TODO uncomment when Stackblitz is ready for EXCEL
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="excel-library-working-with-charts-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示
    </button> -->
</div> 

<div class="divider--half"></div>

### 使用方法
ワークシートを追加するには、ワークシートの Shapes コレクションの `addChart` メソッドを使用します。このメソッドは、チャート タイプと表示位置を左上のセル、右下のセル、それらのセルのパーセンテージで指定できます。

`addChart` メソッドはワークシートに追加されるワークシート チャート要素を返します。チャートで `setSourceData` メソッドを使用してデータソースとして使用するワークシート セル領域のセルのセル アドレスを設定できます。同様に行列のマッピングを Y と X 軸に切り替えることもできます。

`折れ線`, `領域`, 列`、`円` 含む 70 タイプ以上のチャート タイプがサポートされます。

以下のコードは、Excel チャート機能を有効にする方法を示します。以下のスニペットは、ワークシートの最初の行の最初のセルと 13 番目のセル間に柱状チャートを追加します。ソースデータは A2:M6 領域のデータに設定します。柱状チャートの  X と Y 軸の列と行のマッピングを切り替えます。

```typescript
var chart = ws.shapes().addChart(ChartType.ColumnClustered, 
      ws.rows(0).cells(0), { x: 0, y: 0 },
      ws.rows(0).cells(12), { x: 100, y: 100 });

chart.setSourceData("A2:M6", true);
```