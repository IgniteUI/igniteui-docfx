---
title: マップ | データ可視化ツール | Ignite UI for Angular | Infragistics
_description: マップを使用すると、ビュー モデルからの地理的位置を含むデータ、またはシェープ ファイルから地理的画像マップにロードされた地理空間データを表示できます。
_keywords: map, Ignite UI for Angular, infragistics, マップ,
_language: ja
---

## 散布図 - 比例シリーズの使用

アプリケーション内のデータで指定された地理的な地点のマーカーをプロットするには、マップコンポーネントの [`IgxGeographicProportionalSymbolSeriesComponent`](map_geographic_scatter_proportional_series.md) を使用します。このマップ シリーズは、百貨店、倉庫、オフィスなど、特定のビジネス ケースに応じたポイントを強調表示する場合に役立ちます。また、動的な車両追跡のためにフリート管理システムまたは GPS システムでこの地図シリーズを使用することができます。

### デモ

<div class="sample-container loading" style="height: 400px">
    <iframe id="geo-map-type-scatter-bubble-series-iframe" src='{environment:demosBaseUrl}/maps/geo-map-type-scatter-bubble-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-type-scatter-bubble-series-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

上のデモは [`IgxGeographicProportionalSymbolSeriesComponent`](map_geographic_scatter_proportional_series.md) シリーズとそのシリーズのデータ??バインディング オプションを指定する方法を示しています。予定表連動マーカー選択は、マーカー競合回避ロジックと合わせて構成され、マーカー アウトラインと塗りつぶしの色も指定されます。

### 構成の概要

マップ コントロールの他のタイプの散布図シリーズと同様に、[`IgxGeographicProportionalSymbolSeriesComponent`](map_geographic_scatter_proportional_series.md) シリーズには、オブジェクトの配列にバインドできる `ItemsSource` プロパティがあります。また、項目ソースの各項目は、地理経度および緯度を表す 2 つのデータ列があります。[`longitudeMemberPath`](map_geographic_scatter_proportional_series.md) および [`latitudeMemberPath`](map_geographic_scatter_proportional_series.md) プロパティを使用してこのデータ列をマップします。  [`radiusScale`](map_geographic_scatter_proportional_series.md) と [`radiusMemberPath`](map_geographic_scatter_proportional_series.md) は、バブルの半径を設定します。

以下の表に、データ バインドに使用される GeographicHighDensityScatterSeries シリーズのプロパティをまとめています。

| プロパティ                                                                                                                                    | タイプ                                                                         | 説明                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ----------------------------------------------- |
| `ItemsSource`                                                                                                                            | any                                                                         | 項目のソースを取得または設定します                               |
| [`longitudeMemberPath`](map_geographic_scatter_proportional_series.md) | string                                                                      | ItemsSource プロパティを使用して、割り当てられた商品の経度の値の場所を特定します。 |
| [`latitudeMemberPath`](map_geographic_scatter_proportional_series.md)   | string                                                                      | ItemsSource プロパティを使用して、割り当てられた商品の緯度値の場所を決定します。  |
| [`radiusMemberPath`](map_geographic_scatter_proportional_series.md)       | string                                                                      | シリーズの半径値を取得するために使用するパスを設定します。                   |
| [`radiusScale`](map_geographic_scatter_proportional_series.md)                 | [`IgxSizeScale`](map_geographic_scatter_proportional_series.md) | 現在のバブル シリーズの半径スケール プロパティを取得または設定します。            |
| `MinimumValue`                                                                                                                           | any                                                                         | 値のサブ範囲を計算するための最小値を設定します。                        |
| `MaximumValue`                                                                                                                           | any                                                                         | 値のサブ範囲を計算するための最大値を設定します。                        |

### コード スニペット

<!--Angular -->

```html
TODO - ADD CODE SNIPPET
```
