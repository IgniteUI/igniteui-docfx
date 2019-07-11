---
title: データ チャート | 可視化ツール | Ignite UI for Angular | Infragistics | 軸の注釈
_description: 同じプロット領域に視覚要素の複数インスタンスを表示するデータ チャートを作成し、複合チャートビューを作成します。
_keywords: データチャート, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamDataChart']
_language: ja
---

## 軸の注釈

Ignite UI for Angular データチャート コンポーネントでは、軸に注釈を追加して、その軸上のさまざまな点に特定の値を表示することができます。これによって最終的なシリーズ値、オーバーレイ値、チャート内の十字線に対応する値などを視覚化するのに役立ちます。

### デモ

<div class="sample-container loading" style="height: 450px">
    <iframe id="data-chart-axis-locations-iframe" src='{environment:demosBaseUrl}/charts/data-chart-axis-annotations' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-axis-locations-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

以下は、Ignite UI for Angular データチャートで軸の注釈をサポートするシリーズとレイヤーです。

-   [`IgxCrosshairLayerComponent`](/components/datachart_axis_annotations.html)
-   [`IgxFinalValueLayerComponent`](/components/datachart_axis_annotations.html)
-   [`IgxValueOverlayComponent`](/components/datachart_axis_annotations.html)

軸の注釈を有効にするには、対応するレイヤーまたはオーバーレイの IsAxisAnnotationEnabled プロパティを true に設定します。これにより、対応する所有軸または軸上に特定のオーバーレイまたはレイヤーのある現在のポイントで表す値を持つボックスを配置します。たとえば、CrosshairLayer を使用すると、これらの注釈は X 軸と Y 軸の両方に表示され、プロット領域のスクロールに従って変化します。

[`isAxisAnnotationEnabled`](/components/datachart_axis_annotations.html) プロパティは [`IgxFinalValueLayerComponent`](/components/datachart_axis_annotations.html) には存在しません。このレイヤーはそれ自体が軸の注釈であり、軸上の注釈以外の視覚タイプは他にありません。

背景、値の精度、アウトライン、パディング、ストローク (アウトライン) の太さ、およびテキストの色で軸の注釈をカスタマイズできます。これらは、それぞれ [`axisAnnotationBackground`](/components/datachart_axis_annotations.html)、[`axisAnnotationInterpolatedValuePrecision`](/components/datachart_axis_annotations.html)、[`axisAnnotationOutline`](/components/datachart_axis_annotations.html)、`AxisAnnotationPadding`、[`axisAnnotationStrokeThickness`](/components/datachart_axis_annotations.html)、[`axisAnnotationTextColor`](/components/datachart_axis_annotations.html) プロパティを使用して設定できます。これらのプロパティに加えて、`AxisAnnotationFormatLabel` イベントもあります。これを使用して、軸注釈に表示されるコンテンツを完全にカスタマイズできます。

[`IgxCrosshairLayerComponent`](/components/datachart_axis_annotations.html) には、X 軸と Y 軸の両方に注釈を表示する機能があります。これらは個別にカスタマイズできるため、上記の各プロパティは存在しますが、名前の前に Xaxis または Yaxis  があります。たとえば、[`xAxisAnnotationBackground`](/components/datachart_axis_annotations.html) または [`yAxisAnnotationTextColor`](/components/datachart_axis_annotations.html) です。

### コード例

このコードは、各レイヤーとそれに対して有効になっている軸注釈を使用したオーバーレイを使用して $ ProductName$ データチャートを作成する方法を示します。ここでは、[`IgxFinalValueLayerComponent`](/components/datachart_axis_annotations.html) も黄色のテキスト色になるようにカスタマイズされています。

```html
<igx-data-chart [dataSource]="data" width="100%" height="500px">
    <igx-category-x-axis #xAxis label="label"></igx-category-x-axis>
    <igx-numeric-y-axis #yAxis></igx-numeric-y-axis>

    <igx-column-series [xAxis]="xAxis" [yAxis]="yAxis" valueMemberPath="value"></igx-column-series>

    <igx-value-overlay [axis]="yAxis" isAxisAnnotationsEnabled=true thickness=3 value=85></igx-value-overlay>

    <igx-crosshair-layer isAxisAnnotationsEnabled=true></igx-crosshair-layer>

    <igx-final-value-layer axisAnnotationTextColor="Yellow"></igx-final-value-layer>                
</igx-data-chart>
```

### その他のリソース

-   [データ チャート シリーズ注釈](datachart_series_annotations.md)
-   [値オーバーレイ](datachart_series_value_overlay.md)
