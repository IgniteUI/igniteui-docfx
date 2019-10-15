---
title: マップ | データ可視化ツール | Ignite UI for Angular | 散布エリア シリーズ | Infragistics
_description: マップを使用すると、ビューモデルからの地理的位置を含むデータ、またはシェープファイルから地理的画像マップにロードされた地理空間データを表示できます。
_keywords: map, Ignite UI for Angular, infragistics, マップ,
_language: ja
---

## 散布エリア シリーズの使用

地図コンポーネントの [`IgxGeographicScatterAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicscatterareaseriescomponent.html) を使用して、各点に数値が割り当てられた経度および緯度データの三角測量に基づいて、地理的なコンテキストで色付きの表面を描画します。このタイプの地理的シリーズは、気象温度、降水量、人口分布、大気汚染などの地理的位置によって定義される散在データをレンダリングするのに役立ちます。

### デモ

<div class="sample-container loading" style="height: 400px">
    <iframe id="geo-map-type-scatter-area-series-iframe" src='{environment:dvDemosBaseUrl}/maps/geo-map-type-scatter-area-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-type-scatter-area-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

[`IgxGeographicScatterAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicscatterareaseriescomponent.html) は [`IgxGeographicContourLineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographiccontourlineseriescomponent.html) と同様ですが、同じ値を持つデータポイントを接続する等線の置換に補完で色つきサーフェス エリアとしてデータを表します。

### データ要件

マップコンポーネントの他の種類の地理的シリーズと同様に、[`IgxGeographicScatterAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicscatterareaseriescomponent.html) には、オブジェクトの配列にバインドできる `ItemsSource` プロパティがあります。さらに、項目ソースの各項目にはデータ列が 3 つあり、2 つは地理的な経度および緯度座標を保管し、1 つのデータ列は地理的位置に関連した値を保管します。地理的シリーズの `LongitudeMemberPath`、`LatitudeMemberPath`、[`colorMemberPath`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicscatterareaseriescomponent.html#colormemberpath) プロパティはこれらのデータ列を識別します。
[`IgxGeographicScatterAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicscatterareaseriescomponent.html) は、三角測量が `TrianglesSource` プロパティに設定されていない場合、ItemsSource の項目で組み込みのデータ三角測量を自動的に実行します。ただし、三角測量の計算は非常に時間のかかるプロセスであるため、このプロパティのために TriangulationSource を指定すると、ランタイム パフォーマンスがよくなります。特にデータ項目が多数ある場合には顕著です。

### データ バインディング

以下の表に、データ バインドに使用される GeographicScatterAreaSeries のプロパティをまとめています。

| プロパティ名                      | プロパティ型 | 説明                                                                                                                                                                                                  |
| --------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ItemsSource`               | 任意     | `TrianglesSource` プロパティが三角測量データを提供しない場合に三角測量を実行するデータ項目のソースです。                                                                                                                                       |
| LongitudeMemberPath         | 文字列    | `ItemsSource` にバインドされているすべてのアイテムの経度を含むプロパティの名前。                                                                                                                                                     |
| LatitudeMemberPath          | 文字列    | `ItemsSource` にバインドされているすべてのアイテムの Latitude を含むプロパティの名前。                                                                                                                                             |
| ColorMemberPath             | 文字列    | 各データ項目の緯度および経度座標の値を含むプロパティの名前。[`colorScale`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicscatterareaseriescomponent.html#colorscale) プロパティが設定されている場合、この数値は色に変換されます。 |
| TrianglesSource             | 任意     | 三角測量データのソース。`TriangulationSource` オブジェクトの Triangles をこのプロパティに設定すると、ランタイム パフォーマンスと地理的シリーズの描画の両方が改善します。                                                                                               |
| TriangleVertexMemberPath1   | 文字列    | 各三角形に対して ItemsSource の最初の頂点のインデックスを含む、`TrianglesSource` 項目のプロパティ名。このプロパティを設定することは義務ではありません。カスタムの三角測量ロジックが提供されない場合はデフォルトで取得されます。                                                                     |
| `TriangleVertexMemberPath2` | 文字列    | 各三角形に対して ItemsSource の最初の頂点のインデックスを含む、`TrianglesSource` 項目のプロパティ名。このプロパティを設定することは義務ではありません。カスタムの三角測量ロジックが提供されない場合はデフォルトで取得されます。                                                                     |
| TriangleVertexMemberPath3   | 文字列    | 各三角形に対して ItemsSource の最初の頂点のインデックスを含む、`TrianglesSource` 項目のプロパティ名。このプロパティを設定することは義務ではありません。カスタムの三角測量ロジックが提供されない場合はデフォルトで取得されます。                                                                     |

### カラー スケール

[`IgxGeographicScatterAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicscatterareaseriescomponent.html) の ColorScale プロパティを使用して、ポイントの色の値を解決し、地理的シリーズの面を塗りつぶします。色は、ピクセル単位の三角ラスタライザーを三角測量データに適用することによって、サーフェスの図形の周りをなめらかに補間します。サーフェスの描画がピクセル単位であるため、カラー スケールはブラシではなく色を使用します。
提供される [`IgxCustomPaletteColorScaleComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcustompalettecolorscalecomponent.html) クラスはほとんどのカラーリングのニーズを満たすはずですが、ColorScale ベースのクラスはカスタムのカラリング ロジックのアプリケーションによって継承できます。

以下の表は GeographicScatterAreaSeries の面のカラリングに影響する [`IgxCustomPaletteColorScaleComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcustompalettecolorscalecomponent.html) プロパティをリストします。

| プロパティ名                                                                                                                                           | プロパティ型                      | 説明                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------- | --------------------------------------- |
| [`palette`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcustompalettecolorscalecomponent.html#palette)                     | ObservableCollection<Color> | 補間するために選択する色のコレクションを取得または設定します。         |
| [`interpolationMode`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcustompalettecolorscalecomponent.html#interpolationmode) | ColorScaleInterpolationMode | Palette から色を取得するメソッドを取得または設定します。        |
| [`maximumValue`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcustompalettecolorscalecomponent.html#maximumvalue)           | double                      | 色を割り当てるための最大値。指定した値がこの値より大きい場合は透明になります。 |
| [`minimumValue`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcustompalettecolorscalecomponent.html#minimumvalue)           | double                      | 色を割り当てるための最小値。指定した値がこの値より小さい場合は透明になります。 |

### コード スニペット

以下のコードは、[`IgxGeographicScatterAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicscatterareaseriescomponent.html) をアメリカの降水量を表す三角測量データにバインドする方法を示します。

<!-- Angular -->

```html
TODO - ADD CODE SNIPPET
```
