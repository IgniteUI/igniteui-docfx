---
title: Excel ライブラリ コンポーネント - ネイティブ Angular|Ignite UI for Angular
_description: Ignite UI for Excel Library コンポーネントのスパークライン サポート
_keywords: Ignite UI for Angular, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular Excel ライブラリ, Angular Excel ライブラリ例,  Angular Excel Library コンポーネント, Angular Excel エンジン、スパークライン
_language: ja
---

## Excel ライブラリ スパークライン

このトピックでは、データ トレンドを視覚的に表すために Infragistics Excel Library を使用して Excel® ワークシート (.xlsx) にスパークラインを追加する方法を表します。スパークラインでデータの変更を簡単に可視化でき、ワークシートのセル内のどこでも配置できます。

### デモ

<div class="sample-container loading" style="height: 500px">
    <iframe id="excel-library-overview-sample-iframe" src='{environment:dvDemosBaseUrl}/excel-library/working-with-sparklines' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="excel-library-overview-sample-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">stackblitz で表示
    </button>
</div>

<div class="divider--half"></div>

### サポートされるスパークライン

以下はサポートされる定義済スパークラインのタイプです。

-   折れ線チャート
-   柱状チャート
-   Win/Loss チャート

以下のコードは、sparklineGroups コレクションを使用してスパークラインをワークシートへ追加する方法を示します。

```ts
var workbook: Workbook;
var sheet1 = workbook.worksheets().add("'Sparklines");
var sheet2 = workbook.worksheets().add("Data");
sheet1.sparklineGroups().add($.ig.excel.SparklineType.Line, "Sparklines!A1:A1", "Data!A2:A11");
sheet1.sparklineGroups().add($.ig.excel.SparklineType.Column, "Sparklines!B1:B1", "Data!A2:A11");
workbook.save(workbook, "Sparklines.xlsx");
```

```ts
 let workbook: Workbook;
 let sheet1 = workbook.worksheets().add("Sparklines");
 let sheet2 = workbook.worksheets().add("Data");
 sheet1.sparklineGroups().add(SparklineType.Line, "Sparklines!A1:A1", "Data!A2:A11");
 sheet2.sparklineGroups().add(SparklineType.Column, "Sparklines!B1:B1", "Data!A2:A11");
 workbook.save(workbook, "Sparklines.xlsx");
 
```
