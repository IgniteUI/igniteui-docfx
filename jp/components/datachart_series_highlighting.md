---
title: Data Chart コンポーネント - ネイティブ Angular|Ignite UI for Angular
_description: Ignite UI for Angular Data Chart は、軸、マーカー、凡例、および注釈レイヤーのモジュール設計を提供するチャート コンポーネントです。チャート機能は、複合チャート ビューを作成するために同じチャート領域でのビジュアル要素の複数のインスタンスを利用できます。
_keywords: Ignite UI for Angular, Angular, Native Angular コンポーネント スイート, Native Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular チャート, Angular チャート コントロール, Angular チャート例, Angular チャート コンポーネント, Angular データ チャート
_language: ja
---

## ハイライト

[`IgxDataChart`](datachart_series_highlighting.md) コントロールを使用すると、チャートにプロットされたシリーズを強調表示し、マウスが移動している項目またはシリーズを視覚化、またはハイライト レイヤーを使用して視覚化できます。

### デモ

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-series-highlighting-iframe" src='{environment:demosBaseUrl}/charts/data-chart-series-highlighting' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-series-highlighting-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示
    </button>
</div>

<div class="divider--half"></div>

[`IgxDataChart`](datachart_series_highlighting.md) コントロールで強調表示を有効にするには、対話モジュールをインポートして登録する必要があります。以下のコードを使用できます。

```ts
import { IgxDataChartInteractivityModule } from "igniteui-angular-charts/ES5/igx-data-chart-interactivity-module";
import { IgxDataChartAnnotationModule } from "igniteui-angular-charts/ES5/igx-data-chart-annotation-module";

IgxDataChartInteractivityModule.register();
IgxDataChartAnnotationModule.register();
```

### シリーズ ビジュアルをハイライト

[`IgxDataChart`](datachart_series_highlighting.md) コントロールのシリーズ ハイライト機能を使用すると、単一のアイテムまたはシリーズ全体を強調表示できます。たとえば、折れ線シリーズを使用している場合、ハイライトは線の形状全体を 1 つの単一形状として強調表示します。ただし、列シリーズなどのシリーズの各項目にハイライトを適用することはできます。

次のコードスニペットは、チャートのシリーズで強調表示を有効にする方法を示しています。

```html
<igx-data-chart #chart
    height="400px"
    width="100%"
    [dataSource]="data">

    <igx-category-x-axis #xAxis></igx-category-x-axis>
    <igx-numeric-y-axis #yAxis></igx-numeric-y-axis>

    <igx-column-series name="series1"
        [xAxis]="xAxis"
        [yAxis]="yAxis"
        valueMemberPath="Value1"
        isHighlightingEnabled=true>
    </igx-column-series>

    <igx-column-series name="series2"
        [xAxis]="xAxis"
        [yAxis]="yAxis"
        valueMemberPath="Value2"
        isHighlightingEnabled=true>
    </igx-column-series>
</igx-data-chart>
```

### シリーズ カテゴリをハイライト

カテゴリ ハイライト レイヤーは、カテゴリ軸、または [`IgxDataChart`](datachart_series_highlighting.md) コントロール内のすべてのカテゴリ軸をターゲットにしています。軸に、軸の主グリッド線の間に配置されるシリーズ、たとえば列シリーズなどが含まれる場合、現在のカテゴリを塗りつぶすシェイプが描画されます。

ライン シリーズなどその他のシリーズの場合、マウス位置に最も近いグリッドラインで調節可能な幅を持つバンドを描画します。この場合、`UseInterpolation` プロパティが有効になると、x 位置がカーソルの x 位置に付け加えられます。

`Brush` プロパティを設定して、強調表示領域の色を変更することもできます。

以下は、チャートにカテゴリ ハイライト レイヤーを追加する方法を示すコードスニペットです。

```html
<igx-data-chart #chart
    height="400px"
    width="100%"
    [dataSource]="data">

    <igx-category-x-axis #xAxis></igx-category-x-axis>
    <igx-numeric-y-axis #yAxis></igx-numeric-y-axis>

    <igx-column-series name="series1"
        [xAxis]="xAxis"
        [yAxis]="yAxis"
        valueMemberPath="Value1"
        isHighlightingEnabled=true>
    </igx-column-series>

    <igx-column-series name="series2"
        [xAxis]="xAxis"
        [yAxis]="yAxis"
        valueMemberPath="Value2"
        isHighlightingEnabled=true>
    </igx-column-series>

    <igx-category-highlight-layer></igx-category-highlight-layer>

</igx-data-chart>
```

### シリーズ項目をハイライト

カテゴリ項目ハイライト レイヤーは、縞模様の図形またはマーカーをその位置で描画することにより、カテゴリ軸を使用してシリーズの項目を強調表示します。

デフォルトの強調表示はシリーズの型に依存します。たとえば、列シリーズと行シリーズのハイライトは異なります。列シリーズの場合は縞模様で、ライン シリーズの場合はマーカーです。`HighlightType` プロパティを設定してデフォルトの強調表示をオーバーライドできます。

次のコードスニペットは、[`IgxDataChart`](datachart_series_highlighting.md) コントロールにカテゴリ項目ハイライト レイヤーを追加する方法を示しています。

```html
<igx-data-chart #chart
    height="400px"
    width="100%"
    [dataSource]="data">

    <igx-category-x-axis #xAxis></igx-category-x-axis>
    <igx-numeric-y-axis #yAxis></igx-numeric-y-axis>

    <igx-column-series name="series1"
        [xAxis]="xAxis"
        [yAxis]="yAxis"
        valueMemberPath="Value1"
        isHighlightingEnabled=true>
    </igx-column-series>

    <igx-column-series name="series2"
        [xAxis]="xAxis"
        [yAxis]="yAxis"
        valueMemberPath="Value2"
        isHighlightingEnabled=true>
    </igx-column-series>

    <igx-category-item-highlight-layer></igx-category-item-highlight-layer>

</igx-data-chart>
```
