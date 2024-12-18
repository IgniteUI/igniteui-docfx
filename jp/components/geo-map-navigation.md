---
title: Angular マップ | データ可視化ツール | マップ ナビゲーション | インフラジスティックス
_description: インフラジスティックスの Angular マップをナビゲートするには、マウスまたはタッチを使用して左右にパンニングし、水平および垂直にズームします。Ignite UI for Angular マップのナビゲーション機能について説明します。
_keywords: Angular map, navigation, Ignite UI for Angular, Infragistics, Angular マップ, ナビゲーション, インフラジスティックス
mentionedTypes: ["XamGeographicMap"]
_language: ja
---

# Angular コンテンツのナビゲーション

[`IgxGeographicMapComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html) コントロールのナビゲーションは、既定では有効にされており、マップ コンテンツのズームとパンが可能です。ただし、この動作は [`zoomable`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html#zoomable) プロパティを使用して変更できます。マップでは同期ズームのみが許可されていること、つまり、アスペクト比を維持したままマップコンテンツをスケーリングすることを知っておくことが重要です。結果として、マップコンテンツを水平方向にスケーリングせずに垂直方向にスケーリングすることはできません。

## Angular コンテンツのナビゲーションの例

<code-view style="height: 500px" alt="Angular コンテンツのナビゲーションの例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/maps/geo-map/navigation"
                                                 github-src="maps/geo-map/navigation">
</code-view>


<div class="divider--half"></div>

## 地理座標

これらの座標で囲まれた地理的領域内の地図コンテンツをナビゲートします。

*   水平方向に 180°E (マイナス) から 180°W (プラス) の経度
*   垂直方向に 85°S (マイナス) から 85°N (プラス) の緯度

このコード スニペットは、地理座標を使用してマップをナビゲートする方法を示しています。

## ウィンドウ座標

また、これらの相対座標で区切られたウィンドウ長方形内でマップ コンテンツをナビゲーションできます。

*   水平方向に 0.0 から 1.0 の値
*   垂直方向に 0.0 から 1.0 の値

このコード スニペットは、相対ウィンドウ座標を使用してマップをナビゲートする方法を示しています。

## プロパティ

以下の表は [`IgxGeographicMapComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html) コントロールのナビゲーションで使用できるプロパティをまとめたものです。

| プロパティ名  | プロパティ型   | 概要   |
|----------------|-----------------|---------------|
|[`windowRect`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#windowRect)| Rect | 地図コンテンツの表示領域にナビゲーション ウィンドウの新しい位置とサイズを設定します。0、0、1、1 の値で長方形を指定すると、ナビゲーション ウィンドウのマップ コンテンツ全体がズームアウトされます。 |
|[`windowScale`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html#windowScale)| number | マップ コントロールのナビゲーション ウィンドウの新しいサイズを設定します。[`windowRect`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#windowRect) プロパティに格納されている Width または Height の最小値です。 |
|[`windowPositionHorizontal`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#windowPositionHorizontal)| number | マップ コントロールの左端からのナビゲーション ウィンドウのアンカー ポイントの新しい水平位置を設定します。これは [`windowRect`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#windowRect) プロパティの Left に保存された値と等しくなります。 |
|[`windowPositionVertical`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#windowPositionVertical)| number | ナビゲーション ウィンドウのアンカー ポイントの、地図コントロールの上端からの新しい垂直位置を設定します。これは [`windowRect`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#windowRect) プロパティの Top に保存された値と等しくなります。 |
|[`actualWindowRect`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#actualWindowRect)| Rect | マップ コンテンツの表示領域内のナビゲーション ウィンドウの現在の位置とサイズを示します。0、0、1、1の値で長方形を指定すると、ナビゲーション ウィンドウにマップ コンテンツ全体が表示されます。  |
|[`actualWindowScale`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html#actualWindowScale)| number | マップ コントロールのナビゲーション ウィンドウの現在のサイズを示します。[`actualWindowRect`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#actualWindowRect) プロパティに格納されている Width または Height の最小値と同じです。 |
|[`actualWindowPositionHorizontal`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#actualWindowPositionHorizontal)| number | マップ コントロールの左端からのナビゲーション ウィンドウのアンカー ポイントの現在の水平位置を示します。[`actualWindowRect`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#actualWindowRect) プロパティの Left に保存された値と等しくなります。 |
|[`actualWindowPositionVertical`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#actualWindowPositionVertical)| number | マップコントロールの上端からのナビゲーションウィンドウのアンカーポイントの垂直位置を示します。[`actualWindowRect`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#actualWindowRect) プロパティの Top に保存された値と等しくなります。 |

## API リファレンス

*   [`actualWindowRect`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#actualWindowRect)
*   [`windowRect`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#windowRect)
*   [`IgxGeographicMapComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html)
*   [`zoomable`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html#zoomable)
