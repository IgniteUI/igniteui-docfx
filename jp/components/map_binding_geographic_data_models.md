---
title: マップ | データ可視化ツール | Ignite UI for Angular | 地理的データ モデル | Infragistics
_description: マップを使用すると、ビュー モデルからの地理的位置を含むデータ、またはシェープ ファイルから地理的画像マップにロードされた地理空間データを表示できます。
_keywords: map, Ignite UI for Angular, infragistics
_language: ja
---

## 地理的データ モデルのバインド

Ignite UI for Angular マップ コンポーネントは、シェイプ ファイルからの地理空間データやデータ モデルからの地理的位置を地理的画像マップに表示するように設計されています。地理的シリーズの `ItemsSource` プロパティは、データ モデルへのバインディングのために使用されます。このプロパティは、カスタム オブジェクトの配列にバインドできます。

### デモ

<div class="sample-container" style="height: 400px">
    <iframe id="geo-map-binding-data-model-iframe" src='{environment:demosBaseUrl}/maps/geo-map-binding-data-model' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-binding-data-model-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

以下の表で、地理的シリーズのタイプごとに必要となるデータ構造を簡単に説明します。

| 地理的シリーズ                              | プロパティ                                                           | 説明                                                                                                  |
| ------------------------------------ | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `GeographicSymbolSeries`             | `LongitudeMemberPath`, `LatitudeMemberPath`                     | 2 つの数値の経度と緯度座標の名前を指定します。                                                                            |
| `GeographicHighDensityScatterSeries` | `LongitudeMemberPath`, `LatitudeMemberPath`                     | 2 つの数値の経度と緯度座標の名前を指定します。                                                                            |
| `GeographicProportionalSymbolSeries` | `LongitudeMemberPath`, `LatitudeMemberPath`, `RadiusMemberPath` | 2 つの経度座標と緯度座標の名前と、シンボルのサイズ/半径の数字列を 1 列指定します。                                                        |
| `GeographicScatterAreaSeries`        | `LongitudeMemberPath`, `LatitudeMemberPath`, `ColorMemberPath`  | 数値の三角測量のために、2 つの経度と緯度座標および数値列を 1 列指定します。                                                            |
| `GeographicContourLineSeries`        | `LongitudeMemberPath`, `LatitudeMemberPath`, `ValueMemberPath`  | 数値の三角測量のために、2 つの経度と緯度座標および数値列を 1 列指定します。                                                            |
| `GeographicShapeSeries`              | `ShapeMemberPath`                                               | 図形の地理的ポイントを含む `ItemsSource` 項目のデータ列の名前を指定します。このプロパティは、x プロパティと y プロパティを持つオブジェクトの配列の配列にマップする必要があります。 |
| `GeographicPolylineSeries`           | `ShapeMemberPath`                                               | 線の地理的座標を含む`ItemsSource` 項目のデータ列の名前を指定します。このプロパティは、x プロパティと y プロパティを持つオブジェクトの配列の配列にマップする必要があります。     |

### コード スニペット

次のコードは、`GeographicSymbolSeries` を、経度と緯度の座標を使用して格納された世界の一部の都市の地理的位置を含むカスタム データ モデルにバインドする方法を示します。また、[WorldUtility](map_resources_world_util.md) を使用してこれらの場所間の最短の地理的経路をプロットするために `GeographicPolylineSeries` を使用します。
