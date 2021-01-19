---
title: Angular データ チャート | データ可視化ツール | マーカー | インフラジスティックス
_description: インフラジスティックスの $Platform Short$ チャートのマーカーを使用して、値が主グリッド線と副グリッド線の間にある場合でもデータ ポイントを識別します。Ignite UI for Angular グラフのマーク機能をお試しください!
_keywords: Angular charts, data chart, markers, Ignite UI for Angular, Infragistics, Angular チャート, データ チャート, マーカー, インフラジスティックス
mentionedTypes: ['XamDataChart', 'MarkerSeries']
_language: ja
---

# Angular マーカー

Angular データ チャート コンポーネントのプロット領域では、マーカーはデータポイントの位置に表示される視覚的要素です。マーカーは、値が主グリッド線と副グリッド線の間にある場合でも、データポイントを容易に識別できるできるようユーザーをサポートします。

## Angular マーカーの例

<div class="sample-container loading" style="height: 300px">
    <iframe id="data-chart-series-markers-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-series-markers' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular マーカーの例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-series-markers-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>

<div class="divider--half"></div>

## サポートされるシリーズ

チャートシリーズのほとんどはマーカーをサポートしています。それらは以下のとおりです。

-   すべての [カテゴリ シリーズ](data-chart-type-category-series.md)
-   すべての [極座標シリーズ](data-chart-type-polar-series.md)
-   すべての [ラジアル シリーズ](data-chart-type-radial-series.md)
-   散布シリーズ
    -   [散布バブル シリーズ](data-chart-type-scatter-bubble-series.md)
    -   [散布点シリーズ](data-chart-type-scatter-point-series.md)
    -   [散布図 - 折れ線シリーズ](data-chart-type-scatter-line-series.md)
    -   [散布図 - スプライン シリーズ](data-chart-type-scatter-spline-series.md)

## マーカー プロパティ

上記のシリーズは、[`markerType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxmarkerseriescomponent.html#markertype) プロパティを使用して変更可能な 12 種類のマーカーをサポートしています。また、[`markerBrush`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxmarkerseriescomponent.html#markerbrush) と [`markerOutline`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxmarkerseriescomponent.html#markeroutline) プロパティをそれぞれ使用して、塗りつぶしと線を変更することもできます。

以下のこのコード スニペットは、マーカーの形状と外観を変更する方法を示しています。

```html
<igx-column-series name="series1"
    markerType="Square"
    markerBrush="white"
    markerOutline="purple">
</igx-column-series>
```

<!-- TODO add this section when we add MarkerTemplate

## マーカー テンプレート


`MarkerTemplate` プロパティを使用してカスタム形状を指定できます。

以下のこのコード スニペットは、データポイントの値を使用してカスタム マーカーを作成する方法を示しています。


```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">

    TODO

 </igx-data-chart>
```

```tsx
<IgrColumnSeries name="series1"
    markerTemplate="customMarker" />
``` -->

### その他のリソース

-   [軸タイプ](data-chart-axis-types.md)
-   [シリーズ タイプ](data-chart-series-types.md)
-   [シリーズのツールチップ](data-chart-series-tooltips.md)
