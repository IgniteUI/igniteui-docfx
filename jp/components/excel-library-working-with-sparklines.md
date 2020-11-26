---
title: Angular Excel ライブラリ | スパークラインの使用 | インフラジスティックス
_description: インフラジスティックスの Angular Excel ライブラリのスパークライン チャートを使用して、ワークシートのセル領域全体のデータ トレンドを視覚化します。Ignite UI for Angular Excel エンジン チュートリアルを是非お試しください!
_keywords: Excel library, sparkline chart, Ignite UI for Angular, Infragistics, Excel ライブラリ, スパークライン チャート, インフラジスティックス
mentionedTypes: ['Workbook']
_language: ja
---

# Angular スパークラインを使用した作業

Infragistics Angular Excel Library は、Excel ワークシートにスパークラインを追加する機能があります。これらを使用して、ワークシートのデータ セルの領域全体のデータの傾向を簡単に視覚的に表現することができます。たとえば、特定のセル領域の Excel データを単純な縦棒チャートまたは折れ線チャートとして視覚化したい場合は、この機能を使用すると役立ちます。

## Angular スパークラインを使用した作業の例

<div class="sample-container loading" style="height: 500px">
    <iframe id="excel-library-overview-sample-iframe" src='{environment:dvDemosBaseUrl}/excel/excel-library-working-with-sparklines' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular スパークラインを使用した作業の例"></iframe>
</div>


<div class="divider--half"></div>

## サポートされるスパークライン

以下はサポートされる定義済スパークラインのタイプです。

-   折れ線チャート
-   列
-   積層 (Win/Loss)

以下のコードは、sparklineGroups コレクションを使用してスパークラインをワークシートへ追加する方法を示します。

```ts
var workbook: Workbook;
var sheet1 = workbook.worksheets().add("Sparklines");
var sheet2 = workbook.worksheets().add("Data");
sheet1.sparklineGroups().add(SparklineType.Line, "Sparklines!A1:A1", "Data!A2:A11");
sheet1.sparklineGroups().add(SparklineType.Column, "Sparklines!B1:B1", "Data!A2:A11");
workbook.save(workbook, "Sparklines.xlsx");
```
