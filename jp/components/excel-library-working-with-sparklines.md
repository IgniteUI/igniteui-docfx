---
title: Angular Excel ライブラリ | スパークラインの使用 | インフラジスティックス
_description: インフラジスティックスの Angular Excel ライブラリのスパークライン チャートを使用して、ワークシートのセル領域全体のデータ トレンドを視覚化します。Ignite UI for Angular Excel エンジン チュートリアルを是非お試しください!
_keywords: Excel library, sparkline chart, Ignite UI for Angular, Infragistics, Excel ライブラリ, スパークライン チャート, インフラジスティックス
mentionedTypes: ["Workbook"]
_language: ja
---

# Angular スパークラインを使用した作業

Infragistics Angular Excel Library は、Excel ワークシートにスパークラインを追加する機能があります。これらを使用して、ワークシートのデータ セルの領域全体のデータの傾向を簡単に視覚的に表現することができます。たとえば、特定のセル領域の Excel データを単純な縦棒チャートまたは折れ線チャートとして視覚化したい場合は、この機能を使用すると役立ちます。

## Angular スパークラインを使用した作業の例

<code-view style="height: 500px" alt="Angular スパークラインを使用した作業の例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/excel/excel-library/working-with-sparklines"
                                                 github-src="excel/excel-library/working-with-sparklines">
</code-view>


<div class="divider--half"></div>

## サポートされるスパークライン

以下はサポートされる定義済スパークラインのタイプです。

*   折れ線チャート
*   列
*   積層 (Win/Loss)

以下のコードは、sparklineGroups コレクションを使用してスパークラインをワークシートへ追加する方法を示します。

```ts
var workbook: Workbook;
var sheet1 = workbook.worksheets().add("Sparklines");
var sheet2 = workbook.worksheets().add("Data");
sheet1.sparklineGroups().add(SparklineType.Line, "Sparklines!A1:A1", "Data!A2:A11");
sheet1.sparklineGroups().add(SparklineType.Column, "Sparklines!B1:B1", "Data!A2:A11");
workbook.save(workbook, "Sparklines.xlsx");
```

## API リファレンス

*   [`Workbook`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.workbook.html)
