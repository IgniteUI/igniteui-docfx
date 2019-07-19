---
title: Financial Chart の構成|データ可視化ツール |Ignite UI for Angular |Infragistics
_description: 簡単な API を使用して財務データを可視化するには、財務チャート コンポーネントを使用します。詳細については、デモ、依存関係、使用方法、およびツールバーを参照してください。
_keywords: 財務チャート, Ignite UI for Angular, infragistics
_language: ja
---

## ファイナンシャル チャート

Financial Chart は、シンプルな API を使用して複雑なファイナンシャル データを可視化するチャート コンポーネントです。

### デモ

<div class="sample-container loading" style="height: 550px">
    <iframe id="financial-chart-overview-iframe" src='{environment:demosBaseUrl}/charts/financial-chart-overview' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="financial-chart-overview-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く
    </button>
</div>

<div class="divider--half"></div>

ユーザーがデータをバインド後、チャートはデータの可視化オプションを複数提供します。価格および出来高のための複数の表示モード、そして多数の財務指標があります。チャートにデータ コンテキストを表示するためにラベルの書式設定を使用します。

ファイナンシャル チャート コンポーネントはデータ列を解析して選択します。日/時列を X 軸で使用し、Open、High、Low、Close、Volume 列、または最初の 5 つの数値列を Y 軸で使用します。ユーザーがチャート タイプを棒、ローソク足、柱状、または折れ線に設定できます。主要なビジュアル要素にツールバー、価格ペイン、ボリューム ペイン、インジケーター ペイン、およびナビゲーション ペインがあります。

[`ChartType`](financialchart.md) プロパティを以下のオプションの 1 つに設定してチャート タイプを明示的に指定することもできます。

| プロパティ                                                                                   | 説明                                                                                                                           |
| --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `Bar`                                                                                   | 各データ ポイントにマーカーがある棒シリーズを指定します。                                                                                                |
| `Candle`                                                                                | ローソク足シリーズを指定します。                                                                                                             |
| [`IgxColumnComponent`](financialchart.md) | 柱状シリーズを指定します。                                                                                                                |
| `Line`                                                                                  | 折れ線シリーズを指定します。                                                                                                               |
| `auto`                                                                                  | データ アダプターに基づいてチャート タイプの自動選択を指定します。これは、データの名前および数値列の数に基づいて上記の値を選択します。たとえば、Open、High、Low、および Close 列があるデータ項目のために `Bar` を使用します。 |

その他のチャート ペインの詳細については、[Financial Chart ペイン](financialchart_chart_panes.md) トピックを参照してください。

```html
<igx-financial-chart
   chartType="candle">
</igx-financial-chart>
```

### 依存関係

chart パッケージをインストールするときに core パッケージもインストールする必要があります。

-   **npm install --save igniteui-angular-core**
-   **npm install --save igniteui-angular-charts**

### 必要なモジュール

[`IgxFinancialChart`](financialchart.md) は、以下のモジュールが必要です。

```ts
// app.module.ts
import {IgxFinancialChartModule} from "igniteui-angular-charts/ES5/igx-financial-chart-module";

@NgModule({
    imports: [
        ...
        IgxFinancialChartModule,
        ...
    ]
})
export class AppModule {}
```

<div class="divider--half"></div>

### 使用方法

ファイナンシャル チャート モジュールをインポートした後、チャートをデータにバインドします。

[`IgxFinancialChart`](financialchart.md) コントロールを作成するには、はじめにバインドするデータが必要です。以下のコード スニペットは、シンプルなデータソースを作成する方法を示します。

```ts
let data = [
	{ time: new Date(2013, 1, 1), open: 268.93, high: 268.93, low: 262.80, close: 265.00, volume: 6118146 },
	{ time: new Date(2013, 1, 4), open: 262.78, high: 264.68, low: 259.07, close: 259.98, volume: 3723793 },
	{ time: new Date(2013, 1, 5), open: 262.00, high: 268.03, low: 261.46, close: 266.89, volume: 4013780 },
	{ time: new Date(2013, 1, 6), open: 265.16, high: 266.89, low: 261.11, close: 262.22, volume: 2772204 },
	{ time: new Date(2013, 1, 7), open: 264.10, high: 264.10, low: 255.11, close: 260.23, volume: 3977065 },
	{ time: new Date(2013, 1, 8), open: 261.40, high: 265.25, low: 260.56, close: 261.95, volume: 3879628 },
	{ time: new Date(2013, 1, 11), open: 263.20, high: 263.25, low: 256.60, close: 257.21, volume: 3407457 },
	{ time: new Date(2013, 1, 12), open: 259.19, high: 260.16, low: 257.00, close: 258.70, volume: 2944730 },
	{ time: new Date(2013, 1, 13), open: 261.53, high: 269.96, low: 260.30, close: 269.47, volume: 5295786 },
	{ time: new Date(2013, 1, 14), open: 267.37, high: 270.65, low: 265.40, close: 269.24, volume: 3464080 },
	{ time: new Date(2013, 1, 15), open: 267.63, high: 268.92, low: 263.11, close: 265.09, volume: 3981233 }
];
```

以下のコードはファイナンシャル チャートを上記のデータにバインドします。

```html
 <igx-financial-chart
   [dataSource]="data"
    width="850px"
    height="600px">
 </igx-financial-chart>
```

### ツールバー

ファイナンシャル チャートの上にツールバーが表示されます。チャートで表示されるデータの詳細を変更でき、複数のペインの表示も可能です。ツールバーには次のセレクターが含まれます。

-   インジケーター タイプ セレクター - 財務指標のタイプを選択できます。これらのインジケーターは価格またはその他のインジケーターと同じ Y 軸を共有しないため、価格ペインの下のペインに表示されます。
-   オーバーレイ タイプ セレクター - ファイナンシャル オーバーレイのタイプを選択できます。これらのオーバーレイは、同じ Y 軸スケールを共有する財務物価シリーズと共に表示されます。オーバーレイには、`BollingerBands` と `PriceChannel` の 2 種類があります。
-   トレンドライン タイプ セレクター - トレンドラインのタイプを選択できます。トレンドラインは、価格ペインとボリューム ペインの上のトレンドライン レイヤーに表示されます。
-   日付範囲セレクター - データを表示するために定義済みの範囲を選択できます。データ範囲が 1 年未満の場合、無効になるボタンがあることに注意してください。
-   チャート タイプ セレクター - ファイナンシャル チャートのチャート タイプを選択できます。これは価格ペインで表示されます。
-   ボリューム タイプ セレクター - ボリューム ペインで出来高を表示します。None、Column、Line、および Area チャート タイプから選択できます。
    注: ファイナンシャル チャートの幅に基づいて、ツールバーは上記のセクションに説明した要素をすべて含まない場合があります。ファイナンシャル チャートおよびそのコンテナーの幅を増加すると、ツールバーがセレクターを表示にします。
    また、チャート ペインの垂直スペースを最大化するには、ツールバーを非表示できます。以下のコードはツールバーを非表示にする方法を紹介します。

```html
 <igx-financial-chart
    isToolbarVisible="false">
 </igx-financial-chart>
```

### Additional Resources

-   [Binding Multiple Sources](financialchart_binding_multiple_sources.md)
-   [Binding High Volume Data](financialchart_binding_large_data.md)
-   [Binding Real-Time Data](financialchart_binding_live_data.md)
-   [Chart Annotations](financialchart_chart_annotations.md)
-   [Chart Configuration](financialchart_chart_configuration.md)
-   [Chart Display Types](financialchart_chart_display_types.md)
-   [Chart Panes](financialchart_chart_panes.md)
-   [Chart Performance](financialchart_chart_performance.md)
    <!-- - [Custom Indicators](financialchart_custom_indicators.md) -->
    <!-- - [Tooltip Templates](financialchart_tooltip_templates.md) -->
    <!-- - [Tooltip Types](financialchart_tooltip_types.md) -->
