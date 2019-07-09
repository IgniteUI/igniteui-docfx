---
title: マップ | データ可視化ツール | Ignite UI for Angular | マップ ナビゲーション | Infragistics
_description: マップでは、地理座標またはウィンドウ座標を使用して移動できます。
_keywords: map, Ignite UI for Angular, infragistics, マップ,
mentionedTypes: ['XamGeographicMap']
_language: ja
---

## マップ コンテンツをナビゲート

[`IgxGeographicMapComponent`](/components/map_navigating_map_content.html) コントロールのナビゲーションは、既定では有効にされており、マップ コンテンツのズームとパンが可能です。ただし、HorizontalZoomable および VerticalZoomable プロパティを使用して、この動作を変更できます。知っておくべき重要な情報としては xamGeographicMap コントロールのズームは、あらかじめ決められた割合に同期してマップ コンテンツをスケーリングする動作に過ぎません。その結果、水平方向およびその逆にも拡大縮小することなく、マップ コンテンツを垂直方向に拡大縮小することはできません。

### デモ

<div class="sample-container loading" style="height: 400px">
    <iframe id="geo-map-navigation-iframe" src='{environment:demosBaseUrl}/maps/geo-map-navigation' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-navigation-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

### 地理座標

これらの座標で囲まれた地理的領域内の地図コンテンツをナビゲートします。

-   経度180°E(マイナス) から 180°W(プラス) の緯度
-   南緯 85 度 (マイナス) から北緯 85 度 (プラス)

このコードスニペットでは、マップ 方法地理座標をナビゲートする方法を示します。

### ウィンドウ座標

また、これらの相対座標で囲まれたウィンドウ長方形内でマップ コンテンツをナビゲートすることもできます。

-   水平方向に 0.0 から 1.0 の値
-   垂直方向に 0.0 から 1.0 の値

このコードスニペットは、相対ウィンドウ座標を使用してマップをナビゲートする方法を示しています。

### プロパティ

以下の表は [`IgxGeographicMapComponent`](/components/map_navigating_map_content.html) コントロールのナビゲーションで使用できるプロパティをまとめたものです。

| プロパティ名                                                                                                                                   | プロパティ型 | 説明                                                                                                                                                                                                 |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`windowRect`](/components/map_navigating_map_content.html)                                         | Rect   | 地図コンテンツの表示領域にナビゲーション ウィンドウの新しい位置とサイズを設定します。0、0、1、1 の値で長方形を指定すると、ナビゲーション ウィンドウのマップ コンテンツ全体がズームアウトされます。                                                                                              |
| [`windowScale`](/components/map_navigating_map_content.html)                                      | number | マップ コントロールのナビゲーション ウィンドウの新しいサイズを設定します。WindowRect プロパティに格納されている Width または Height の最小値です。                                                                                                            |
| [`windowPositionHorizontal`](/components/map_navigating_map_content.html)             | number | マップ コントロールの左端からのナビゲーション ウィンドウのアンカー ポイントの新しい水平位置を設定します。これは [`windowRect`](/components/map_navigating_map_content.html) プロパティの Left に保存された値と等しくなります。            |
| [`windowPositionVertical`](/components/map_navigating_map_content.html)                 | number | ナビゲーション ウィンドウのアンカー ポイントの、地図コントロールの上端からの新しい垂直位置を設定します。これは [`windowRect`](/components/map_navigating_map_content.html) プロパティの Top に保存された値と等しくなります。              |
| [`actualWindowRect`](/components/map_navigating_map_content.html)                             | Rect   | マップ コンテンツの表示領域内のナビゲーション ウィンドウの現在の位置とサイズを示します。0、0、1、1の値で長方形を指定すると、ナビゲーション ウィンドウにマップ コンテンツ全体が表示されます。                                                                                                 |
| [`actualWindowScale`](/components/map_navigating_map_content.html)                          | number | マップ コントロールのナビゲーション ウィンドウの現在のサイズを示します。[`actualWindowRect`](/components/map_navigating_map_content.html) プロパティに格納されている Width または Height の最小値と同じです。        |
| [`actualWindowPositionHorizontal`](/components/map_navigating_map_content.html) | number | マップ コントロールの左端からのナビゲーション ウィンドウのアンカー ポイントの現在の水平位置を示します。これは [`actualWindowRect`](/components/map_navigating_map_content.html) プロパティの Left に保存された値と等しくなります。 |
| [`actualWindowPositionVertical`](/components/map_navigating_map_content.html)     | number | ナビゲーション ウィンドウの垂直方向のアンカー ポイントを Map コントロールの上端から指定します。これは [`actualWindowRect`](/components/map_navigating_map_content.html) プロパティの Top に保存された値と等しくなります。    |
