---
title: Angular データ チャート | データ可視化ツール | 強調表示 | インフラジスティックス
_description: インフラジスティックスの Angular チャート コントロールを使用すると、グラフの領域を強調表示できます。$Product Name$ 強調表示機能について説明します。
_keywords: Angular charts, data chart, highlighting, Ignite UI for Angular, Infragistics, Angular チャート, データ チャート, 強調表示, インフラジスティックス 
mentionedTypes: ['XamDataChart']
_language: ja
---

# Angular ハイライト

Angular データ チャート コンポネントを使用すると、データ チャートにプロットされたシリーズを強調表示し、マウスが移動している項目またはシリーズを視覚化、または強調表示レイヤーを使用して視覚化できます。

> [!NOTE]
> 注: ハイライトは、積層型シリーズで現在サポートされていません。

## Angular ハイライトの例

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-series-highlighting-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-series-highlighting' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular ハイライトの例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-series-highlighting-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>

<div class="divider--half"></div>

Angular データ チャート コンポネントでハイライトを有効にするには、対話モジュールをインポートして登録する必要があります。以下のコードを使用できます。

<!-- Blazor -->

-   DataChartInteractivityModule
-   DataChartAnnotationModule
    <!-- end: Blazor -->

```ts
import { IgxDataChartInteractivityModule } from 'igniteui-angular-charts';
import { IgxDataChartAnnotationModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        IgxDataChartInteractivityModule,
        IgxDataChartAnnotationModule,
    ]
})
```

## シリーズ ビジュアルをハイライト

Angular データ チャート コンポネントのシリーズ ハイライト機能を使用すると、単一のアイテムまたはシリーズ全体を強調表示できます。たとえば、折れ線シリーズを使用している場合、ハイライトは線の形状全体を 1 つの単一形状として強調表示します。ただし、列シリーズなどのシリーズの各項目にハイライトを適用することはできます。

次のコード スニペットは、データ チャートのシリーズで強調表示を有効にする方法を示しています。

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

## シリーズ カテゴリをハイライト

カテゴリ軸または Angular データ チャート コンポネント内のすべてのカテゴリ軸に対する注釈レイヤーを表します。軸に、軸の主グリッド線の間に配置されるシリーズ、たとえば列シリーズなどが含まれる場合、現在のカテゴリを塗りつぶすシェイプが描画されます。

ライン シリーズなどその他のシリーズの場合、マウス位置に最も近いグリッドラインで調節可能な幅を持つバンドを描画します。この場合、`UseInterpolation` プロパティが有効になると、x 位置がカーソルの x 位置に付け加えられます。

`Brush` プロパティを設定して、強調表示領域の色を変更することもできます。

以下は、データ チャートにカテゴリ ハイライト レイヤーを追加する方法を示すコード スニペットです。

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

## シリーズ項目をハイライト

カテゴリ項目ハイライト レイヤーは、縞模様の図形またはマーカーをその位置で描画することにより、カテゴリ軸を使用してシリーズの項目を強調表示します。

デフォルトの強調表示はシリーズの型に依存します。たとえば、列シリーズと行シリーズのハイライトは異なります。列シリーズの場合は縞模様で、ライン シリーズの場合はマーカーです。`HighlightType` プロパティを設定してデフォルトの強調表示をオーバーライドできます。

次のコード スニペットは、Angular データ チャート コンポネントにカテゴリ項目ハイライト レイヤーを追加する方法を示しています。

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
