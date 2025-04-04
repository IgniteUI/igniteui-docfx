---
title: Angular マップ | データ可視化ツール | インフラジスティックス
_description: インフラジスティックスの Angular JavaScript マップを使用してヒートマップ画像を表示します。Ignite UI for Angular マップのサンプルを是非お試しください!
_keywords: Angular map, heat map imagery, Ignite UI for Angular, Infragistics, Angular マップ, ヒートマップ画像, インフラジスティックス
mentionedTypes: ["XamGeographicMap", "ShapefileConverter", "HeatTileGenerator", "GeographicTileSeries"]
_language: ja
---

# Angular ヒート画像の表示

Ignite UI for Angular マップ コントロールには、Shape ファイルをタイル シリーズにロードして地理空間データをロードすることにより、[`IgxShapeDataSource`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_core.igxshapedatasource.html) によって生成される `ShapeFileRecord` を使用して、ヒートマップ画像を表示する機能があります。

このトピックを読み進めるための前提条件として、[シェープ ファイルを地理的データにバインディング](geo-map-binding-shp-file.md)をお読みください。

## Angular ヒート画像の表示の例

<code-view style="height: 500px" alt="Angular ヒート画像の表示の例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/maps/geo-map/display-heat-imagery"
                                                 github-src="maps/geo-map/display-heat-imagery">
</code-view>


<div class="divider--half"></div>

[`IgxShapeDataSource`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_core.igxshapedatasource.html) がそのシェイプ ファイルを読み込むと、そのデータを [`IgxShapefileRecord`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_core.igxshapefilerecord.html) オブジェクトに変換します。これらのオブジェクトは、[`IgxShapeDataSource`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_core.igxshapedatasource.html) の `GetPointData()` メソッドから取得でき、`TileGenerator` プロパティに割り当てられた [`IgxHeatTileGenerator`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_core.igxheattilegenerator.html) で [`IgxTileGeneratorMapImagery`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxtilegeneratormapimagery.html) オブジェクトを使用してヒートマップを作成するために使用できます。この [`IgxTileGeneratorMapImagery`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxtilegeneratormapimagery.html) は、[`tileImagery`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographictileseriescomponent.html#tileImagery) ソースとして [`IgxGeographicTileSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographictileseriescomponent.html) で使用できます。

[`IgxHeatTileGenerator`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_core.igxheattilegenerator.html) オブジェクトは、[`xValues`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_core.igxheattilegenerator.html#xValues)、[`yValues`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_core.igxheattilegenerator.html#yValues)、[`values`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_core.igxheattilegenerator.html#values) の 3 つの値パスを持つように機能します。これらの使用方法の例として、人口に関する情報を持つ形状ファイルの場合、[`xValues`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_core.igxheattilegenerator.html#xValues) を経度、[`yValues`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_core.igxheattilegenerator.html#yValues) を緯度、[`values`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_core.igxheattilegenerator.html#values) を人口データとみなすことができます。これらの各プロパティは、`number[]` を取得します。

ヒートマップ機能を使用する際の地理的タイルシリーズの表示は、[`minimumColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_core.igxheattilegenerator.html#minimumColor) プロパティと [`maximumColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_core.igxheattilegenerator.html#maximumColor) プロパティを [`IgxHeatTileGenerator`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_core.igxheattilegenerator.html) の [`values`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_core.igxheattilegenerator.html#values) プロパティに割り当てるコレクションの最小値と最大値に対応する色を記述する「rgba」文字列に設定することでカスタマイズできます。これをさらにカスタマイズするには、ジェネレーターの `ScaleColors` プロパティを設定して、色を説明する文字列のコレクションを含めます。これにより、[`IgxHeatTileGenerator`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_core.igxheattilegenerator.html) に、マップに表示される値に使用する色がわかります。[`blurRadius`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_core.igxheattilegenerator.html#blurRadius)、[`maxBlurRadius`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_core.igxheattilegenerator.html#maxBlurRadius)、[`useBlurRadiusAdjustedForZoom`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_core.igxheattilegenerator.html#useBlurRadiusAdjustedForZoom) プロパティを使用して、`ScaleColors` コレクション内の色が一緒にぼやける方法をカスタマイズすることもできます。

[`IgxHeatTileGenerator`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_core.igxheattilegenerator.html) は対数スケールも使用できます。これを使用する場合は、[`useLogarithmicScale`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_core.igxheattilegenerator.html#useLogarithmicScale) プロパティを **true** に設定できます。

## Web Worker

また、[`IgxHeatTileGenerator`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_core.igxheattilegenerator.html) は、Web Worker が、別のスレッドでシェイプ ファイルからタイル イメージをロードする際の重いリフティングをサポートしています。これにより、ヒートマップ機能を使用する際に地理マップのパフォーマンスが大幅に向上します。ジェネレーターでWebワーカーを使用するには、[`useWebWorkers`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_core.igxheattilegenerator.html#useWebWorkers) プロパティを **true** に設定し、[`webWorkerInstance`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_core.igxheattilegenerator.html#webWorkerInstance) プロパティを Web Worker のインスタンスに設定できます。

<!-- Angular -->

```ts
// heatworker.worker.ts
import { HeatTileGeneratorWebWorker } from 'igniteui-angular-core';

const worker: Worker = self as any;
worker.onmessage = HeatTileGeneratorWebWorker.onmessage;
HeatTileGeneratorWebWorker.postmessage = heatWorkerPostMessage;
function heatWorkerPostMessage() {
  (self as any).postMessage.apply(self, Array.prototype.slice.call(arguments));
}
HeatTileGeneratorWebWorker.start();
export default {} as typeof Worker & (new () => Worker);
```

## 依存関係

<!-- Angular -->

```ts
import { IgxHeatTileGenerator } from 'igniteui-angular-core';
import { IgxShapeDataSource } from 'igniteui-angular-core';
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxTileGeneratorMapImagery } from 'igniteui-angular-maps';
```

## ヒートマップの作成

以下のコード スニペットは、人口ベースのヒートマップを Ignite UI for Angular マップ コンポーネントに表示する方法を示しています。

<!-- Angular -->

```html
<igx-geographic-map #map width="100%" height="calc(100% - 60px)">
    <igx-geographic-tile-series name="heatTiles" [tileImagery]="tileImagery"></igx-geographic-tile-series>
</igx-geographic-map>
```

```ts
@ViewChild("map", { static: true })
public map: IgxGeographicMapComponent;
public data: any[];
public tileImagery: IgxTileGeneratorMapImagery;
// ...
constructor() {
    this.data = this.initData();

    this.tileImagery = new IgxTileGeneratorMapImagery();

    const con: IgxShapeDataSource = new IgxShapeDataSource();
    con.importCompleted.subscribe((s, e) => {
        const data = con.getPointData();
        const lat: number[] = [];
        const lon: number[] = [];
        const val: number[] = [];
        for (let i = 0; i < data.length; i++) {
            const item = data[i];
            for (let j = 0; j < item.points.length; j++) {
                const pointsList = item.points[j];
                for (let k = 0; k < pointsList.length; k++) {
                    lat.push(pointsList[k].y);
                    lon.push(pointsList[k].x);
                }
            }
            const value = item.fieldValues["POP_2010"];
            if (value >= 0) {
                val.push(value);
            } else {
                val.push(0);
            }
        }

        const gen = new IgxHeatTileGenerator();
        gen.xValues = lon;
        gen.yValues = lat;
        gen.values = val;
        gen.blurRadius = 6;
        gen.maxBlurRadius = 20;
        gen.useBlurRadiusAdjustedForZoom = true;
        gen.minimumColor = "rgba(100,255, 0, 0.3922)";
        gen.maximumColor = "rgba(255, 255, 0, 0.9412)";
        gen.useGlobalMinMax = true;
        gen.useGlobalMinMaxAdjustedForZoom = true;
        gen.useLogarithmicScale = true;
        gen.useWebWorkers = true;
        gen.webWorkerInstance = new Worker("../heatworker.worker", { type: "module" });
        gen.scaleColors = [
            "rgba(0, 0, 255, 64)",
            "rgba(0, 255, 255, 96)",
            "rgba(0, 255, 0, 160)",
            "rgba(255, 255, 0, 180)",
            "rgba(255, 0, 0, 200)"
        ];

        this.tileImagery.tileGenerator = gen;
    });
    con.shapefileSource = "assets/Shapes/AmericanCities.shp";
    con.databaseSource  = "assets/Shapes/AmericanCities.dbf";
    con.dataBind();
}
```

## API リファレンス

*   [`IgxGeographicTileSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographictileseriescomponent.html)
*   [`IgxHeatTileGenerator`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_core.igxheattilegenerator.html)
*   [`maximumColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_core.igxheattilegenerator.html#maximumColor)
*   [`minimumColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_core.igxheattilegenerator.html#minimumColor)
*   [`IgxShapefileRecord`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_core.igxshapefilerecord.html)
*   [`IgxShapeDataSource`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_core.igxshapedatasource.html)
*   [`IgxTileGeneratorMapImagery`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxtilegeneratormapimagery.html)
*   [`tileGenerator`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxtilegeneratormapimagery.html#tileGenerator)
*   [`tileImagery`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographictileseriescomponent.html#tileImagery)
*   [`useBlurRadiusAdjustedForZoom`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_core.igxheattilegenerator.html#useBlurRadiusAdjustedForZoom)
*   [`useLogarithmicScale`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_core.igxheattilegenerator.html#useLogarithmicScale)
