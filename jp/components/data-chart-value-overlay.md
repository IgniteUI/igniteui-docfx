---
title: Angular データ チャート | データ可視化ツール | 値オーバーレイ | インフラジスティックス
_description: Ignite UI for Angular チャート コントロールの値オーバーレイ機能を使用して、単一の数値に水平線または垂直線を配置します。Ignite UI for Angular グラフ タイプについて説明します。
_keywords: Angular charts, data chart, value overlay, Ignite UI for Angular, Infragistics, Angular チャート, データ チャート, 値オーバーレイ, インフラジスティックス
mentionedTypes: ['XamDataChart', 'ColumnSeries', 'ValueOverlay']
namespace: Infragistics.Controls.Charts
_language: ja
---

# Angular 値オーバーレイ

Ignite UI for Angular データチャート コンポーネントを使用すると、[`IgxValueOverlayComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxvalueoverlaycomponent.html) を使用して定義した単一の数値で水平線または垂直線を配置できます。特定のシリーズの平均値や中央値などのデータを視覚化するのに役立ちます。

## Angular 値オーバーレイ例

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-series-value-overlay-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-series-value-overlay' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular 値オーバーレイ例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-series-value-overlay-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>

<div class="divider--half"></div>

データバインディングに `DataSource` を使用する他のシリーズタイプとは異なり、値オーバーレイは [`valueMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxanchoredcategoryseriescomponent.html#valuememberpath) プロパティを使用して単一の数値をバインドします。値オーバーレイでは、使用する単一の軸を定義する必要があります。X 軸を使用する場合、値のオーバーレイは垂直線になり、Y 軸を使用する場合は、水平線になります。

数値のX軸またはY軸を使用する場合、[`valueMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxanchoredcategoryseriescomponent.html#valuememberpath) プロパティは、値のオーバーレイを描画する軸上の実際の数値を反映する必要があります。数値の X 軸または Y 軸を使用する場合、[`valueMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxanchoredcategoryseriescomponent.html#valuememberpath) は、値のオーバーレイを描画する軸上の実際の数値を反映する必要があります。

数値オーバーレイを角度角軸で使用すると、チャートの中心からの線として表示され、半径半径軸を使用すると、円として表示されます。

[`IgxValueOverlayComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxvalueoverlaycomponent.html) 外観プロパティは、[`IgxSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html) から継承されているため、例えば [`brush`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html#brush) と [`thickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html#thickness) を使用でき、他のタイプのシリーズと同じように機能します。

[`isAxisAnnotationEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxvalueoverlaycomponent.html#isaxisannotationenabled) プロパティを true に設定して[`IgxValueOverlayComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxvalueoverlaycomponent.html) に軸注釈を表示し、軸にオーバーレイの値を表示することもできます。

## コード例

以下のコード スニペットは、Ignite UI for Angular データチャート コンポーネントに値オーバーレイを追加する方法を示しています。

```html
<igx-data-chart #chart height="600px" width="800px" [dataSource]="data">
  <igx-category-x-axis #xAxis label="Label"></igx-category-x-axis>
  <igx-numeric-y-axis #yAxis></igx-numeric-y-axis>

  <igx-column-series [xAxis]="xAxis" [yAxis]="yAxis" valueMemberPath="Value"></igx-column-series>

  <igx-value-overlay [axis]="yAxis" value=5 thickness=5 isAxisAnnotationEnabled=true></igx-value-overlay>

</igx-data-chart>
```
