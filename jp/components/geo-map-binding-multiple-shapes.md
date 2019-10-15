---
title: マップ | データ可視化ツール | Ignite UI for Angular | 複数シリーズ | Infragistics
_description: マップを使用すると、ビュー モデルからの地理的位置を含むデータ、またはシェープ ファイルから地理的画像マップにロードされた地理空間データを表示できます。
_keywords: map, Ignite UI for Angular, infragistics, マップ,
_language: ja
---

## 複数のシェープファイルのバインドとオーバレイ

[`IgxGeographicMap`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicmap.html) では、複数の地理的シリーズオブジェクトを追加して、いくつかのシェープファイルを地理空間データとオーバーレイすることができます。たとえば、港湾の地理的位置をプロットするための [`IgxGeographicSymbolSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicsymbolseriescomponent.html)、港湾間のルートをプロットするための [`IgxGeographicPolylineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicpolylineseriescomponent.html)、国の形状をプロットするための [`IgxGeographicShapeSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicshapeseriescomponent.html) などです。

### デモ

<div class="sample-container loading" style="height: 400px">
    <iframe id="geo-map-binding-multiple-shapes-iframe" src='{environment:dvDemosBaseUrl}/maps/geo-map-binding-multiple-shapes' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-binding-multiple-shapes-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

このトピックでは、マップ コンポーネントに複数の地理的シリーズを表示する方法について段階的に説明します。すべての地理的シリーズは、`ShapeDataSource` クラスを使用して形状ファイルからロードされた地理空間データに従ってプロットします。`ShapeDataSource` オブジェクトの詳細については、[シェープファイルのバインディング](geo-map-binding-shp-file.md)のトピックを参照してください。

[`IgxGeographicSymbolSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicsymbolseriescomponent.html) – 主要都市の位置を表示します
[`IgxGeographicPolylineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicpolylineseriescomponent.html) – 主要なポート間の経路を表示します。
[`IgxGeographicShapeSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicshapeseriescomponent.html) – 世界の国々の形を表示します。

目的のデータをプロットするために、地理的シリーズをこの組み合わせまたは他の組み合わせでも使用できます。

### 複数シェープファイルの読み込み

ページのコンストラクタで、地理マップコンポーネントに表示する各シェープファイルの `ShapeDataSource` を追加します。

### オーバーレイ シェイプ ポリゴン

世界の国々の形状で [`IgxGeographicShapeSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicshapeseriescomponent.html) オブジェクトを作成し、それを [`IgxGeographicMap`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicmap.html) の [`IgxSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html) コレクションに追加します。

### オーバーレイ シェイプ ポリライン

メジャー ポート間のルートで [`IgxGeographicPolylineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicpolylineseriescomponent.html) オブジェクトを作成し、それを [`IgxGeographicMap`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicmap.html) の [`IgxSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html) コレクションに追加します。

### オーバーレイ シェイプ ポイント

主要都市の場所を含む [`IgxGeographicSymbolSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicsymbolseriescomponent.html) オブジェクトを作成し、それを [`IgxGeographicMap`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicmap.html) の [`IgxSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html) コレクションに追加します。

また形状ファイルがアプリケーションのために十分な地理的文脈 (国の形状など) を提供した際に、地図背景コンテンツで地理的画像を非表示にしたい場合があります。
