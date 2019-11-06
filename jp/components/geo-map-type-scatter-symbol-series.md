---
title: マップ | データ可視化ツール | Ignite UI for Angular | シンボル シリーズ | Infragistics
_description: マップを使用すると、ビュー モデルからの地理的位置を含むデータ、またはシェープ ファイルから地理的画像マップにロードされた地理空間データを表示できます。
_keywords: map, Ignite UI for Angular, infragistics, マップ,
_language: ja
---

## 散布図 - 記号シリーズの使用

地図コンポーネントの [`IgxGeographicSymbolSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicsymbolseriescomponent.html) を使用して、地理的コンテキストでポイントまたはマーカーを使用して地理空間データを表示します。地理的シリーズのこのタイプは、都市、空港、地震または興味のあるポイントなどの地理的位置のコレクションを描画するためにしばしば使用されます。

### デモ

<div class="sample-container loading" style="height: 400px">
    <iframe id="geo-map-type-scatter-symbol-series-iframe" src='{environment:dvDemosBaseUrl}/maps/geo-map-type-scatter-symbol-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-type-scatter-symbol-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

### データ要件

マップコンポーネントの他の種類の地理的シリーズと同様に、[`IgxGeographicSymbolSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicsymbolseriescomponent.html) には、オブジェクトの配列にバインドできる `ItemsSource` プロパティがあります。さらに、このオブジェクトの各データ項目は、地理的位置（経度と緯度）を保存する 2 つの数値データ列を持つ必要があります。これらのデータ列は、[`latitudeMemberPath`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicsymbolseriescomponent.html#latitudememberpath) と [`longitudeMemberPath`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicsymbolseriescomponent.html#longitudememberpath) プロパティにマップされます。[`IgxGeographicSymbolSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicsymbolseriescomponent.html) は、これらのマップされたデータ列の値を使用して、地理マップコンポーネントにシンボル要素をプロットします。

### コード スニペット

以下のコードは、`ShapeDataSource` を使用してシェイプ ファイルからロードした都市の場所に [`IgxGeographicSymbolSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicsymbolseriescomponent.html) をバインドする方法を示します。

<!-- Angular -->

```html
TODO - ADD CODE SNIPPET
```
