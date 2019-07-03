---
title: マップ | データ可視化ツール | Ignite UI for Angular | 地理的データ モデル | Infragistics
_description: マップを使用すると、ビュー モデルからの地理的位置を含むデータ、またはシェープ ファイルから地理的画像マップにロードされた地理空間データを表示できます。
_keywords: map, Ignite UI for Angular, infragistics
_language: ja
---

## 地理的データ モデルのバインド

Ignite UI for Angular マップ コンポーネントは、シェイプ ファイルからの地理空間データやデータ モデルからの地理的位置を地理的画像マップに表示するように設計されています。地理的シリーズの `ItemsSource` プロパティは、データ モデルへのバインディングのために使用されます。このプロパティは、カスタム オブジェクトの配列にバインドできます。

### デモ

<div class="sample-container loading" style="height: 400px">
    <iframe id="geo-map-binding-data-model-iframe" src='{environment:demosBaseUrl}/maps/geo-map-binding-data-model' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-binding-data-model-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

以下の表で、地理的シリーズのタイプごとに必要となるデータ構造を簡単に説明します。

| 地理的シリーズ                                                                                                                                         | プロパティ                                                                                                                                                                                                                                                                                                                                                                                                                | 説明                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| [`IgxGeographicSymbolSeriesComponent`](/angular-apis/typescript/latest/classes/igxgeographicsymbolseriescomponent.html)                         | [`longitudeMemberPath`](/angular-apis/typescript/latest/classes/igxgeographicsymbolseriescomponent.html#longitudememberpath), [`latitudeMemberPath`](/angular-apis/typescript/latest/classes/igxgeographicsymbolseriescomponent.html#latitudememberpath)                                                                                                                                                             | 2 つの数値の経度と緯度座標の名前を指定します。                                                                            |
| [`IgxGeographicHighDensityScatterSeriesComponent`](/angular-apis/typescript/latest/classes/igxgeographichighdensityscatterseriescomponent.html) | [`longitudeMemberPath`](/angular-apis/typescript/latest/classes/igxgeographichighdensityscatterseriescomponent.html#longitudememberpath), [`latitudeMemberPath`](/angular-apis/typescript/latest/classes/igxgeographichighdensityscatterseriescomponent.html#latitudememberpath)                                                                                                                                     | 2 つの数値の経度と緯度座標の名前を指定します。                                                                            |
| [`IgxGeographicProportionalSymbolSeriesComponent`](/angular-apis/typescript/latest/classes/igxgeographicproportionalsymbolseriescomponent.html) | [`longitudeMemberPath`](/angular-apis/typescript/latest/classes/igxgeographicproportionalsymbolseriescomponent.html#longitudememberpath), [`latitudeMemberPath`](/angular-apis/typescript/latest/classes/igxgeographicproportionalsymbolseriescomponent.html#latitudememberpath), [`radiusMemberPath`](/angular-apis/typescript/latest/classes/igxgeographicproportionalsymbolseriescomponent.html#radiusmemberpath) | 2 つの経度座標と緯度座標の名前と、シンボルのサイズ/半径の数字列を 1 列指定します。                                                        |
| [`IgxGeographicScatterAreaSeriesComponent`](/angular-apis/typescript/latest/classes/igxgeographicscatterareaseriescomponent.html)               | `LongitudeMemberPath`, `LatitudeMemberPath`, [`colorMemberPath`](/angular-apis/typescript/latest/classes/igxgeographicscatterareaseriescomponent.html#colormemberpath)                                                                                                                                                                                                                                               | 数値の三角測量のために、2 つの経度と緯度座標および数値列を 1 列指定します。                                                            |
| [`IgxGeographicContourLineSeriesComponent`](/angular-apis/typescript/latest/classes/igxgeographiccontourlineseriescomponent.html)               | `LongitudeMemberPath`, `LatitudeMemberPath`, [`valueMemberPath`](/angular-apis/typescript/latest/classes/igxgeographiccontourlineseriescomponent.html#valuememberpath)                                                                                                                                                                                                                                               | 数値の三角測量のために、2 つの経度と緯度座標および数値列を 1 列指定します。                                                            |
| [`IgxGeographicShapeSeriesComponent`](/angular-apis/typescript/latest/classes/igxgeographicshapeseriescomponent.html)                           | `ShapeMemberPath`                                                                                                                                                                                                                                                                                                                                                                                                    | 図形の地理的ポイントを含む `ItemsSource` 項目のデータ列の名前を指定します。このプロパティは、x プロパティと y プロパティを持つオブジェクトの配列の配列にマップする必要があります。 |
| [`IgxGeographicPolylineSeriesComponent`](/angular-apis/typescript/latest/classes/igxgeographicpolylineseriescomponent.html)                     | `ShapeMemberPath`                                                                                                                                                                                                                                                                                                                                                                                                    | 線の地理的座標を含む`ItemsSource` 項目のデータ列の名前を指定します。このプロパティは、x プロパティと y プロパティを持つオブジェクトの配列の配列にマップする必要があります。     |

### コード スニペット

次のコードは、[`IgxGeographicSymbolSeriesComponent`](/angular-apis/typescript/latest/classes/igxgeographicsymbolseriescomponent.html) を、経度と緯度の座標を使用して格納された世界の一部の都市の地理的位置を含むカスタム データ モデルにバインドする方法を示します。また、[WorldUtility](map_resources_world_util.md) を使用してこれらの場所間の最短の地理的経路をプロットするために [`IgxGeographicPolylineSeriesComponent`](/angular-apis/typescript/latest/classes/igxgeographicpolylineseriescomponent.html) を使用します。
