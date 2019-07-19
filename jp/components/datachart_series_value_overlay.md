---
title: Data Chart コンポーネント - ネイティブ Angular|Ignite UI for Angular
_description: Ignite UI for Angular Data Chart は、軸、マーカー、凡例、および注釈レイヤーのモジュール設計を提供するチャート コンポーネントです。チャート機能は、複合チャート ビューを作成するために同じチャート領域でのビジュアル要素の複数のインスタンスを利用できます。
_keywords: Ignite UI for Angular, Angular, Native Angular コンポーネント スイート, Native Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular チャート, Angular チャート コントロール, Angular チャート例, Angular チャート コンポーネント, Angular データ チャート
mentionedTypes: ['XamDataChart', 'ColumnSeries', 'ValueOverlay']
namespace: Infragistics.Controls.Charts
_language: ja
---

## 値オーバーレイ

Ignite UI for Angular データチャート コンポーネントを使用すると、ValueOverlay を使用して定義した単一の数値で水平線または垂直線を配置できます。特定のシリーズの平均値や中央値などのデータを視覚化するのに役立ちます。

### デモ

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-overview-iframe" src='{environment:demosBaseUrl}/charts/data-chart-type-value-overlay' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-overview-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

データバインディングに `DataSource` を使用する他のシリーズタイプとは異なり、値オーバーレイは [`valueMemberPath`](datachart_series_value_overlay.md) プロパティを使用して単一の数値をバインドします。値オーバーレイでは、使用する単一の軸を定義する必要があります。X 軸を使用する場合、値のオーバーレイは垂直線になり、Y 軸を使用する場合は、水平線になります。

数値のX軸またはY軸を使用する場合、[`valueMemberPath`](datachart_series_value_overlay.md) プロパティは、値のオーバーレイを描画する軸上の実際の数値を反映する必要があります。数値の X 軸または Y 軸を使用する場合、[`valueMemberPath`](datachart_series_value_overlay.md) は、値のオーバーレイを描画する軸上の実際の数値を反映する必要があります。

数値オーバーレイを角度角軸で使用すると、チャートの中心からの線として表示され、半径半径軸を使用すると、円として表示されます。

[`IgxValueOverlayComponent`](datachart_series_value_overlay.md) 外観プロパティは、`Infragistics.Controls.Charts.Series` から継承されているため、例えば [`brush`](datachart_series_value_overlay.md) と [`thickness`](datachart_series_value_overlay.md) を使用でき、他のタイプのシリーズと同じように機能します。

### コード例 - 値のオーバーレイ

次のコード スニペットは、Ignite UI for Angular データチャート コンポーネントに値オーバーレイを追加する方法を示しています。

```html
<igx-data-chart #chart height="600px" width="800px" [dataSource]="data">
  <igx-category-x-axis #xAxis label="Label"></igx-category-x-axis>
  <igx-numeric-y-axis #yAxis></igx-numeric-y-axis>

  <igx-column-series [xAxis]="xAxis" [yAxis]="yAxis" valueMemberPath="Value"></igx-column-series>

  <igx-value-overlay [axis]="yAxis" value=5 thickness=5></igx-value-overlay>

</igx-data-chart>
```
