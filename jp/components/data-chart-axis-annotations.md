---
title: Angular データ チャート | データ可視化ツール | 軸注釈 | インフラジスティックス
_description: インフラジスティックスの Angular チャート コントロールを使用すると、十字線レイヤー、最終値レイヤー、値オーバーレイなどの Angular チャート軸に注釈を追加できます。Ignite UI for Angular で Angular チャートと視覚化を改善します!
_keywords: Angular charts, data chart, axis annotations, Ignite UI for Angular, Infragistics, Angular チャート, データ チャート, 軸注釈, インフラジスティックス
mentionedTypes: ['XamDataChart','LineSeries','ValueOverlay','CrosshairLayer']
_language: ja
---

# Angular 軸の注釈

Ignite UI for Angular データ チャート コンポーネントでは、軸に注釈を追加して、その軸上のさまざまな点に特定の値を表示することができます。これによって最終的なシリーズ値、オーバーレイ値、チャート内の十字線に対応する値などを可視化するのに役立ちます。

## Angular 軸の注釈の例

<div class="sample-container loading" style="height: 450px">
    <iframe id="data-chart-axis-locations-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-axis-annotations' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular 軸の注釈の例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-axis-locations-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>

<div class="divider--half"></div>

以下は、Ignite UI for Angular データ チャートで軸の注釈をサポートするシリーズとレイヤーです。

-   [`IgxCrosshairLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcrosshairlayercomponent.html)
-   [`IgxFinalValueLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinalvaluelayercomponent.html)
-   [`IgxValueOverlayComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxvalueoverlaycomponent.html)

軸の注釈を有効にするには、対応するレイヤーまたはオーバーレイの IsAxisAnnotationEnabled プロパティを true に設定します。これにより、対応する所有軸または軸上に特定のオーバーレイまたはレイヤーのある現在のポイントで表す値を持つボックスを配置します。たとえば、CrosshairLayer を使用すると、これらの注釈は X 軸と Y 軸の両方に表示され、プロット領域のスクロールに従って変化します。

[`isAxisAnnotationEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxvalueoverlaycomponent.html#isaxisannotationenabled) プロパティは [`IgxFinalValueLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinalvaluelayercomponent.html) には存在しません。このレイヤーはそれ自体が軸の注釈であり、軸上の注釈以外の視覚タイプは他にありません。

背景、値の精度、アウトライン、パディング、ストローク (アウトライン) の太さ、およびテキストの色で軸の注釈をカスタマイズできます。これらは、[`axisAnnotationBackground`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinalvaluelayercomponent.html#axisannotationbackground)、[`axisAnnotationInterpolatedValuePrecision`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinalvaluelayercomponent.html#axisannotationinterpolatedvalueprecision)、[`axisAnnotationOutline`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinalvaluelayercomponent.html#axisannotationoutline)、軸注釈パディング ([`axisAnnotationPaddingBottom`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinalvaluelayercomponent.html#axisannotationpaddingbottom)、[`axisAnnotationPaddingLeft`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinalvaluelayercomponent.html#axisannotationpaddingleft)、[`axisAnnotationPaddingRight`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinalvaluelayercomponent.html#axisannotationpaddingright)、[`axisAnnotationPaddingTop`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinalvaluelayercomponent.html#axisannotationpaddingtop)) を使用して設定できます。

それぞれ [`axisAnnotationStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinalvaluelayercomponent.html#axisannotationstrokethickness) プロパティと [`axisAnnotationTextColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinalvaluelayercomponent.html#axisannotationtextcolor) プロパティがあり、これらのプロパティに加えて、[`IgxValueOverlayComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxvalueoverlaycomponent.html) 軸注釈の表示を完全にカスタマイズできる [`axisAnnotationFormatLabel`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxvalueoverlaycomponent.html#axisannotationformatlabel) イベントもあります。

[`IgxCrosshairLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcrosshairlayercomponent.html) には、X 軸と Y 軸の両方に注釈を表示する機能があります。これらは個別にカスタマイズできるため、上記の各プロパティは存在しますが、名前の前に xAxis または yAxis  があります。たとえば、[`xAxisAnnotationBackground`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcrosshairlayercomponent.html#xaxisannotationbackground) または [`yAxisAnnotationTextColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcrosshairlayercomponent.html#yaxisannotationtextcolor) です。さらに、`XAxisAnnotationFormatLabel` および `YAxisAnnotationFormatLabel` イベントを使用して、[`IgxCrosshairLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcrosshairlayercomponent.html) 軸の注釈に表示されるコンテンツを完全にカスタマイズできます。

## コード例

このコードは、各レイヤーとそれに対して有効になっている軸注釈を使用したオーバーレイを使用して Ignite UI for Angular データ チャートを作成する方法を示します。ここでは、[`IgxFinalValueLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinalvaluelayercomponent.html) も黄色のテキスト色になるようにカスタマイズされています。

```html
<igx-data-chart [dataSource]="data" width="100%" height="500px">
    <igx-category-x-axis #xAxis label="label"></igx-category-x-axis>
    <igx-numeric-y-axis #yAxis></igx-numeric-y-axis>

    <igx-column-series [xAxis]="xAxis" [yAxis]="yAxis" valueMemberPath="value"></igx-column-series>

    <igx-value-overlay [axis]="yAxis" isAxisAnnotationEnabled=true thickness=3 value=85></igx-value-overlay>

    <igx-crosshair-layer isAxisAnnotationEnabled=true></igx-crosshair-layer>

    <igx-final-value-layer axisAnnotationTextColor="Yellow"></igx-final-value-layer>
</igx-data-chart>
```

### その他のリソース

-   [データ チャート シリーズ注釈](data-chart-series-annotations.md)
-   [値オーバーレイ](data-chart-value-overlay.md)
