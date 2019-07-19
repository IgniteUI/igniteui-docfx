---
title: マップ | データ可視化ツール | Ignite UI for Angular | 複数シリーズ | Infragistics
_description: マップを使用すると、ビュー モデルからの地理的位置を含むデータ、またはシェープ ファイルから地理的画像マップにロードされた地理空間データを表示できます。
_keywords: map, Ignite UI for Angular, infragistics, マップ,
_language: ja
---

## 複数データ ソースのバインド

[`IgxGeographicMap`](map_binding_multiple_data_sources.md) では、カスタムデータソースを地理空間データとオーバーレイするために複数の地理的シリーズオブジェクトを追加できます。たとえば、空港の地理的位置をプロットするための [`IgxGeographicSymbolSeriesComponent`](map_binding_multiple_data_sources.md)、空港間のフライトをプロットするための [`IgxGeographicPolylineSeriesComponent`](map_binding_multiple_data_sources.md)、主要な地理座標のグリッド線をプロットするための 2nd [`IgxGeographicPolylineSeriesComponent`](map_binding_multiple_data_sources.md) などです。

### デモ

<div class="sample-container loading" style="height: 400px">
    <iframe id="geo-map-binding-multiple-sources-iframe" src='{environment:demosBaseUrl}/maps/geo-map-binding-multiple-sources' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-binding-multiple-sources-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

このトピックでは、次の地理空間データをプロットする複数の地理的シリーズを表示するための手順を説明します。

[`IgxGeographicSymbolSeriesComponent`](map_binding_multiple_data_sources.md) – 主要空港の場所を表示します。
[`IgxGeographicPolylineSeriesComponent`](map_binding_multiple_data_sources.md) – 空港間のフライトを表示します。
[`IgxGeographicPolylineSeriesComponent`](map_binding_multiple_data_sources.md) – 主座標のグリッド線を表示します。

希望のデータをプロットするために、これまたは他の組み合わせで地理的シリーズを使用できます。

### データ ソースの作成

[`IgxGeographicMap`](map_binding_multiple_data_sources.md) に表示するすべての地理的シリーズのデータ​​ソースを作成します。たとえば、[WorldConnections](map_resources_world_connections.md) スクリプトを使用できます。

### フライトのオーバーレイ

主要空港間のフライト接続を含む最初の [`IgxGeographicPolylineSeriesComponent`](map_binding_multiple_data_sources.md) オブジェクトを作成し、それを [`IgxGeographicMap`](map_binding_multiple_data_sources.md) の `Infragistics.Controls.Charts.Series` コレクションに追加します。

### グリッド線のオーバーレイ

地理グリッド線を使用して2番目の [`IgxGeographicPolylineSeriesComponent`](map_binding_multiple_data_sources.md) オブジェクトを作成し、それを [`IgxGeographicMap`](map_binding_multiple_data_sources.md) の Series コレクションに追加します。

地理的なグリッド線を使用して [`IgxGeographicSymbolSeriesComponent`](map_binding_multiple_data_sources.md) オブジェクトを作成し、それを地理的な [`IgxGeographicMap`](map_binding_multiple_data_sources.md) の `Infragistics.Controls.Charts.Series` コレクションに追加します。
