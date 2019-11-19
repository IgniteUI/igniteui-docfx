---
title: マップ | データ可視化ツール | Ignite UI for Angular | 地理図形ファイル | Infragistics
_description: マップを使用すると、ビュー モデルからの地理的位置を含むデータ、またはシェープファイルからロードされた地理空間データを表示できます。詳細については、デモ、依存関係、使用方法、およびツールバーを参照してください。
_keywords: map, Ignite UI for Angular, infragistics, マップ,
_language: ja
---

## シェープ ファイルを地理的データにバインド

Ignite UI for Angular Map コンポーネントの `ShapeDataSource` クラスは、形状ファイルから地理空間データ (ポイント/位置、ポリライン、ポリゴン) を読み込み、それを ShapefileRecord オブジェクトのコレクションに変換します。

### デモ

<div class="sample-container loading" style="height: 400px">
    <iframe id="geo-map-binding-shp-polylines-iframe" src='{environment:dvDemosBaseUrl}/maps/geo-map-binding-shp-polylines' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-binding-shp-polylines-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

以下の表は、シェイプ ファイルを読み込むための `ShapeDataSource` クラスのプロパティを説明します。

| プロパティ             | タイプ | 説明                                                       |
| ----------------- | --- | -------------------------------------------------------- |
| `ShapefileSource` | 文字列 | Uri を地理的データ項目を含むシェープ ファイル (.shp) に指定します。                 |
| `DatabaseSource`  | 文字列 | Uri を地理的データ項目のデータ テーブルを含むシェイプ データベース ファイル (.dbf) に指定します。 |

<!-- TODO add for WPF only: -->

<!-- Both of the source properties for shape files are of Uri type. This means that shape files can be embedded resources in the application assembly and on the internet (via http). Refer to the previous section for more information on this process. The rules for resolving Uri objects are equivalent to any standard Uri property, for example the BitmapImage.UriSource property. -->

両方のソース プロパティが null 以外の値に設定されると、`ShapeDataSource` オブジェクトの ImportAsync メソッドが起動し、シェイプ ファイルを取得して読み込み、最終的に変換を実行します。この操作が完了すると、ShapefileConverter は ShapefileRecord オブジェクトで生成され、シェイプ ファイルから地理的データを読み込んで変換するプロセスが完了したことを通知するために、ImportCompleted イベントが起動されます。

### シェープファイルの読み込み

以下のコードは、世界の主要都市の場所を含むシェイプ ファイルを読み込むための `ShapeDataSource` オブジェクトのインスタンスを作成します。また、xamGeographicMap コントロールにデータをバインドするための前提条件として `ImportCompleted` イベントを処理する方法も示します。

### シェープファイルをバインド

Map コンポーネントでは、Geographic Series は、シェイプ ファイルから読み込まれる地理的データを表示するために使用されます。すべてのタイプの地理的シリーズには、オブジェクトの配列にバインドできる `ItemsSource` プロパティがあります。`ShapeDataSource` は [`ShapefileRecord`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/shapefilerecord.html) オブジェクトのリストを含むため、このような配列の例です。

[`ShapefileRecord`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/shapefilerecord.html) クラスは、以下の表にリストする地理的データを保存するためのプロパティを提供します。

| プロパティ      | 説明                                                                                                                                                                                                                                                                      |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Points`   | シェイプ ファイル (.shp) から読み込まれた 1 つの地理的シェイプにすべてのポイントが含まれます。たとえば、シェープ ファイルの日本の国は、ポイント リスト オブジェクトのリスト オブジェクトとして表されます。ここで、<ul> <li>最初のポイント リストは、北海道の島の形状を表します。</li> <li>ポイントの 2 つ目のリストは本州の島の形を表しています</li> <li>ポイントの 3 つ目のリストは九州の島の形を表しています</li> <li>ポイントの 4 つ目のリストは四国の島の形を表しています |
| </li></ul> |                                                                                                                                                                                                                                                                         |
| `Fields`   | 列名でキーが付けられたシェイプ データベース ファイル (.dbf) からのデータ行を含みます。たとえば、日本についてのデータには、人口、地域、首都名などが含まれます。                                                                                                                                                                                    |

このデータ構造は、適切なデータ列がマップされている限り、ほとんどの地理的シリーズでの使用に適しています。

### コード スニペット

このコード例は、シェープ ファイルが `ShapeDataSource` を使用して読み込まれたことを前提としています。
次のコードは、マップ コンポーネント内の [`IgxGeographicPolylineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicpolylineseriescomponent.html) を `ShapeDataSource` にバインドし、すべての [`ShapefileRecord`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/shapefilerecord.html) オブジェクトの `Points` プロパティをマップします。
