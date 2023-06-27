---
title: Angular マップ | データ可視化ツール | マップ概要 | インフラジスティックス
_description: インフラジスティックスの Angular JavaScript マップ コンポーネントを使用して、ビュー モデルからの地理的位置を含むデータ、またはシェープ ファイルからロードされた地理空間データを地理的画像マップに表示します。Ignite UI for Angular マップのサンプルを是非お試しください!
_keywords: Angular map, geographic map, imagery tiles, Ignite UI for Angular, Infragistics, Angular マップ, 地理マップ, 画像タイル, インフラジスティックス
mentionedTypes: ['XamGeographicMap', 'Series']
_language: ja
---

# Angular マップの概要

Ignite UI for Angular Map コンポーネントを使用すると、ビューモデルからの地理的位置を含むデータ、またはシェープ ファイルからロードされた地理空間データを地理的画像マップに表示できます。

# Angular マップの例

以下のサンプルは、Bubble Series (バブル シリーズ) とも呼ばれる [`IgxGeographicProportionalSymbolSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicproportionalsymbolseriescomponent.html) を使用して [`IgxGeographicMapComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html) にデータを表示する方法を示しています。

<code-view style="height: 500px" alt="Angular geo map type scatter bubble series"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/maps/geo-map/type-scatter-bubble-series"
                                                 github-src="maps/geo-map/type-scatter-bubble-series">
</code-view>


<div class="divider--half"></div>

Angular 地図コンポーネントを使用すると、Bing Maps™ および Open Street Maps から地理的画像をレンダリングできます。マップは何万ものデータポイントをプロットし、コントロールがリアルタイム フィードを処理できるように数ミリ秒ごとにそれらを更新します。

マップの Series プロパティは、無制限の地理的シリーズのレンダリングをサポートするために使用されます。このプロパティは、地理的シリーズ オブジェクトのコレクションで、任意のタイプの地理的シリーズをそれに追加できます。たとえば、都市などの地理的位置をプロットするために [`IgxGeographicSymbolSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicsymbolseriescomponent.html)、またこれらの地理的位置の間の接続 (道路など) をプロットするために [`IgxGeographicPolylineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicpolylineseriescomponent.html) を追加できます。

Map は、マウス、キーボード、またはコードビハインドを使用して、マップ コンテンツをナビゲーションするためのカスタマイズ可能なナビゲーション動作を提供します。

<!-- Angular, React, WebComponents -->

## 依存関係

地理マップコンポーネントを使用するには、はじめにこれらのパッケージをインストールする必要があります。

```cmd
npm install --save igniteui-angular-core
npm install --save igniteui-angular-charts
npm install --save igniteui-angular-maps
```

<!-- end: Angular, React, WebComponents -->

## モジュールの要件

[`IgxGeographicMapComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html) には以下のモジュールが必要ですが、DataChartInteractivityModule は、マップ コンテンツのパンやズームなどのマウス操作にのみ必要です。

```ts
// app.module.ts
import { IgxGeographicMapModule } from 'igniteui-angular-maps';
import { IgxDataChartInteractivityModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxGeographicMapModule,
		IgxDataChartInteractivityModule
        // ...
    ]
})
export class AppModule {}
```

```ts
import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';

@Component({
  selector: "app-map-overview",
  styleUrls: ["./map-overview.component.scss"],
  templateUrl: "./map-overview.component.html"
})

export class MapOverviewComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;
    constructor() {
    }

    public ngAfterViewInit(): void {
        this.map.windowRect = { left: 0.2, top: 0.1, width: 0.7, height: 0.7 };
    }
}
```

<div class="divider--half"></div>

## 使用方法

マップ モジュールがインポートされたので、以下のステップは地理的地図を作成することです。以下のコードは、これを実行して地図内でズームを有効にする方法を示しています。

```html
<div className="sampleRoot" >
    <igx-geographic-map #map
        width="700px"
        height="500px"
        zoomable="true" >
    </igx-geographic-map>
</div>
```

<div class="divider--half"></div>

## その他のリソース

関連する Angular マップ機能の詳細については、以下のトピックを参照してください。

*   [地理マップのナビゲーション](geo-map-navigation.md)

<!-- - [地理マップ画像](geo-map-display-imagery-types.md) -->

*   [散布図記号シリーズの使用](geo-map-type-scatter-symbol-series.md)
*   [散布図比例シリーズの使用](geo-map-type-scatter-bubble-series.md)
*   [散布等高線シリーズの使用](geo-map-type-scatter-contour-series.md)
*   [散布図密度シリーズの使用](geo-map-type-scatter-density-series.md)
*   [散布エリア シリーズの使用](geo-map-type-scatter-area-series.md)
*   [シェイプ ポリゴン シリーズの使用](geo-map-type-shape-polygon-series.md)
*   [シェイプ ポリライン シリーズの使用](geo-map-type-shape-polyline-series.md)

## API リファレンス

以下は上記のセクションで説明した API メンバーのリストです。

*   [`IgxGeographicMapComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html)
*   [`IgxGeographicContourLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographiccontourlineseriescomponent.html)
*   [`IgxGeographicHighDensityScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographichighdensityscatterseriescomponent.html)
*   [`IgxGeographicPolylineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicpolylineseriescomponent.html)
*   [`IgxGeographicShapeSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicshapeseriescomponent.html)
*   [`IgxGeographicProportionalSymbolSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicproportionalsymbolseriescomponent.html)
*   [`IgxGeographicSymbolSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicsymbolseriescomponent.html)
*   [`IgxGeographicScatterAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicscatterareaseriescomponent.html)
