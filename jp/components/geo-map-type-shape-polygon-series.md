---
title: マップ | データ可視化ツール | Ignite UI for Angular | Infragistics
_description: マップを使用すると、ビュー モデルからの地理的位置を含むデータ、またはシェープ ファイルから地理的画像マップにロードされた地理空間データを表示できます。
_keywords: map, Ignite UI for Angular, infragistics, マップ,
_language: ja
---

## 図形ポリゴン シリーズの使用

地理的コンテキストで形状ポリゴンを使用して地理空間データを表示するには、マップコンポーネントの [`IgxGeographicShapeSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicshapeseriescomponent.html) を使用します。地理的シリーズのこのタイプは、地理的位置で定義される国々または領域の図形を描画するためにしばしば使用されます。

### デモ

<div class="sample-container loading" style="height: 400px">
    <iframe id="geo-map-type-shape-polygon-series-iframe" src='{environment:dvDemosBaseUrl}/maps/geo-map-type-shape-polygon-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-type-shape-polygon-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

[`IgxGeographicShapeSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicshapeseriescomponent.html) は、地理的データがポリラインの代わりに多角形で描画されることを除いて、[`IgxGeographicPolylineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicpolylineseriescomponent.html) とほどんど同様に機能します。

### データ要件

マップコントロールの他の種類の地理的シリーズと同様に、[`IgxGeographicShapeSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicshapeseriescomponent.html) には、オブジェクトの配列にバインドできる `ItemsSource` プロパティがあります。さらに、このオブジェクトの各データ項目には、地理的位置を表す x 値と y 値を持つオブジェクトの配列の配列を使用して単一または複数の形状を格納する 1 つのデータ列が必要です。このデータ列は、`ShapeMemberPath` プロパティにマップされます。[`IgxGeographicShapeSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicshapeseriescomponent.html) は、マップされたデータ列の点を使用してマップコントロールにポリゴンをプロットします。

### コード スニペット

次のコードは、`ShapeDataSource` を使用してシェープファイルからロードされた世界の国々のシェイプに [`IgxGeographicShapeSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicshapeseriescomponent.html) をバインドする方法を示しています。

<!-- Angular -->

```html
TODO - ADD CODE SNIPPET
```
