---
title: マップ | データ可視化ツール | Ignite UI for Angular | ポリライン シリーズ | Infragistics
_description: マップを使用すると、ビュー モデルからの地理的位置を含むデータ、またはシェープ ファイルから地理的画像マップにロードされた地理空間データを表示できます。
_keywords: map, Ignite UI for Angular, infragistics, マップ,
_language: ja
---

## 図形ポリライン シリーズの使用

地理的コンテキストでポリラインを使用して地理空間データを表示するには、マップコンポーネントの [`IgxGeographicPolylineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicpolylineseriescomponent.html) を使用します。地理的シリーズのこのタイプは、都市または空港などの地理的位置間の道路または接続を描画するためによく使用されます。

### デモ

<div class="sample-container loading" style="height: 400px">
    <iframe id="geo-map-type-shape-polyline-series-iframe" src='{environment:dvDemosBaseUrl}/maps/geo-map-type-shape-polyline-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-type-shape-polyline-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

[`IgxGeographicPolylineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicpolylineseriescomponent.html) は、[`IgxGeographicShapeSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicshapeseriescomponent.html) とよく似ていますが、地理空間データがポリゴンではなくポリラインでレンダリングされる点が異なります。

### データ要件

コントロール内の他の種類の地理的シリーズと同様に、[`IgxGeographicPolylineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicpolylineseriescomponent.html)  には、オブジェクトの配列にバインドできる `ItemsSource` プロパティがあります。さらに、このオブジェクトの各データ項目には、地理的位置を表す x 値と y 値を持つオブジェクトの配列の配列を使用して単一または複数の形状を格納する 1 つのデータ列が必要です。このデータ列は、ShapeMemberPath プロパティにマップされます。[`IgxGeographicPolylineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicpolylineseriescomponent.html) は、コントロールで多角形をプロットするために、このマップされたデータ列のポイントを使用します。

### コード スニペット

以下のコードは、`ShapeDataSource` を使用してシェイプ ファイルからロードした都市の場所に [`IgxGeographicPolylineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicpolylineseriescomponent.html) をバインドする方法を示します。

<!-- Angular -->

```html
TODO - ADD CODE SNIPPET
```
