---
title: マップ | データ可視化ツール | Ignite UI for Angular | 等高線シリーズ | Infragistics
_description: マップを使用すると、ビュー モデルからの地理的位置を含むデータ、またはシェープファイルからロードされた地理空間データを表示できます。詳細については、デモ、依存関係、使用方法、およびツールバーを参照してください。
_keywords: map, Ignite UI for Angular, infragistics, マップ,
_language: ja
---

## 散布図 - 等高線シリーズの使用

地図コンポーネントの [`IgxGeographicContourLineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographiccontourlineseriescomponent.html) を使用して、各点に数値が割り当てられた経度および緯度データの三角測量に基づいて、地理的なコンテキストで色付きの等高線を描画します。このタイプの地理的シリーズは、天気の気温、気圧、降水量、人口分布、地形データなどの地理的位置によって定義される散在データをレンダリングするのに役立ちます。

### デモ

<div class="sample-container loading" style="height: 400px">
    <iframe id="geo-map-type-scatter-contour-series-iframe" src='{environment:dvDemosBaseUrl}/maps/geo-map-type-scatter-contour-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-type-scatter-contour-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

[`IgxGeographicContourLineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographiccontourlineseriescomponent.html) は [`IgxGeographicScatterAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicscatterareaseriescomponent.html) とよく似ていますが、塗りつぶしスケールを使用して色付けされた等高線としてデータを表し、散布エリア シリーズはカラースケールを使用して補間された面としてデータを表します。

### データ要件

マップコンポーネントの他の種類の地理的シリーズと同様に、[`IgxGeographicContourLineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographiccontourlineseriescomponent.html) には、オブジェクトの配列にバインドできる `ItemsSource` プロパティがあります。さらに、項目ソースの各項目にはデータ列が 3 つあり、2 つは地理的位置 (経度および緯度座標) を保管し、1 つのデータ列は地理的位置に関連した値を保管します。これらのデータ列は、地理的シリーズの `LongitudeMemberPath`、`LatitudeMemberPath`、[`valueMemberPath`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographiccontourlineseriescomponent.html#valuememberpath) プロパティによって識別されます。
[`IgxGeographicContourLineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographiccontourlineseriescomponent.html) は、三角測量が `TrianglesSource` プロパティに設定されていない場合、ItemsSource の項目で組み込みのデータ三角測量を自動的に実行します。ただし、三角測量の計算は非常に時間のかかるプロセスであるため、このプロパティのために `TriangulationSource` を指定すると、ランタイム パフォーマンスがよくなります。特にデータ項目が多数ある場合には顕著です。

### データ バインディング

以下の表は、データ バインドに使用される [`IgxGeographicContourLineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographiccontourlineseriescomponent.html) プロパティの概要です。

| プロパティ名                                                                                                                                           | プロパティ型 | 説明                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ItemsSource`                                                                                                                                    | 任意     | `TrianglesSource` プロパティが三角測量データを提供しない場合に三角測量を実行するデータ項目のソースです。                                                                                                                                     |
| `LongitudeMemberPath`                                                                                                                            | 文字列    | `ItemsSource` にバインドされているすべてのアイテムの経度を含むプロパティの名前。                                                                                                                                                   |
| `LatitudeMemberPath`                                                                                                                             | 文字列    | `ItemsSource` にバインドされているすべてのアイテムの Latitude を含むプロパティの名前。                                                                                                                                           |
| [`valueMemberPath`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographiccontourlineseriescomponent.html#valuememberpath) | 文字列    | 各データ項目の緯度および経度座標の値を含むプロパティの名前。[`fillScale`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographiccontourlineseriescomponent.html#fillscale) プロパティが設定されている場合、この数値は色に変換されます。 |
| `TrianglesSource`                                                                                                                                | 任意     | 三角測量データのソースを取得または設定します。TriangulationSource オブジェクトの Triangles をこのプロパティに設定すると、ランタイムパフォーマンスと地理的シリーズレンダリングの両方が向上します。                                                                                  |
| `TriangleVertexMemberPath1`                                                                                                                      | 文字列    | 各三角形に対して ItemsSource の最初の頂点のインデックスを含む、TrianglesSource 項目のプロパティ名。このプロパティを設定することは義務ではありません。カスタムの三角測量ロジックが提供されない場合はデフォルトで取得されます。                                                                     |
| `TriangleVertexMemberPath2`                                                                                                                      | 文字列    | 各三角形に対して ItemsSource の最初の頂点のインデックスを含む、TrianglesSource 項目のプロパティ名。このプロパティを設定することは義務ではありません。カスタムの三角測量ロジックが提供されない場合はデフォルトで取得されます。                                                                     |
| `TriangleVertexMemberPath3`                                                                                                                      | 文字列    | 各三角形に対して ItemsSource の最初の頂点のインデックスを含む、TrianglesSource 項目のプロパティ名。このプロパティを設定することは義務ではありません。カスタムの三角測量ロジックが提供されない場合はデフォルトで取得されます。                                                                     |

### 等高線の塗りつぶしスケール

[`IgxGeographicContourLineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographiccontourlineseriescomponent.html) の [`fillScale`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographiccontourlineseriescomponent.html#fillscale) を使用して地理的シリーズの等高線の塗りブラシを解決します。
ValueBrushScale クラスは、ユーザーの色分けのニーズもほとんどを満たすはずですが、カスタムの色分けロジックのアプリケーションで ValueBrushScale クラスを継承できます。
次の表は、GeographicContourLineSeries のサーフェス カラーリングに影響を与える CustomPaletteColorScale のプロパティの一覧です。

| プロパティ名         | プロパティ型          | 説明                                                                                                                                                                                          |
| -------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Brushes`      | BrushCollection | [`IgxGeographicContourLineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographiccontourlineseriescomponent.html) の輪郭を塗りつぶすためのブラシのコレクションを取得または設定します。 |
| `MaximumValue` | double          | 塗りつぶしスケールでブラシを割り当てるための最高値。                                                                                                                                                                  |
| `MinimumValue` | double          | 塗りつぶしスケールでブラシを割り当てるための最低値。                                                                                                                                                                  |

### コード スニペット

以下のコードは、[`IgxGeographicContourLineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographiccontourlineseriescomponent.html) をアメリカの降水量を表す三角測量データにバインドする方法を示します。

<!-- Angular -->

```html
TODO - ADD CODE SNIPPET
```
