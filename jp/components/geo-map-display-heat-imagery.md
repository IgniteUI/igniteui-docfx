---
title: Angular マップ | データ可視化ツール | インフラジスティックス
_description: インフラジスティックスの Angular JavaScript マップを使用してヒートマップ画像を表示します。Ignite UI for Angular マップのサンプルを是非お試しください!
_keywords: Angular map, heat map imagery, Ignite UI for Angular, Infragistics, Angular マップ, ヒートマップ画像, インフラジスティックス
mentionedTypes: ['XamGeographicMap', 'ShapefileConverter']
_language: ja
---

# Angular ヒート画像の表示

Ignite UI for Angular マップ コントロールには、Shape ファイルをタイル シリーズにロードして地理空間データをロードすることにより、`ShapeDataSource` によって生成される `ShapeFileRecords` を使用して、ヒートマップ画像を表示する機能があります。

このトピックを読み進めるための前提条件として、[シェープ ファイルを地理的データにバインディング](geo-map-binding-shp-file.md)をお読みください。

## Angular ヒート画像の表示の例

<!-- Angular, React -->

```ts
//WebComponents サンプルが CodeSandbox で機能しません。これが修正されたら、ビルドのフラグを削除します。
```

<div class="sample-container loading" style="height: 500px">
    <iframe id="geo-map-display-heat-imagery-iframe" src='{environment:dvDemosBaseUrl}/maps/geo-map-display-heat-imagery' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular ヒート画像の表示の例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-display-heat-imagery-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>


<div class="divider--half"></div>

<!-- end: Angular, React -->

`ShapeDataSource` がそのシェイプ ファイルを読み込むと、そのデータを ShapeFileRecord オブジェクトに変換します。これらのオブジェクトは、`ShapeDataSource` の `GetPointData()` メソッドから取得でき、`TileGenerator` プロパティに割り当てられた [`HeatTileGenerator`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/heattilegenerator.html) で [`IgxTileGeneratorMapImagery`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtilegeneratormapimagery.html) オブジェクトを使用してヒートマップを作成するために使用できます。この [`IgxTileGeneratorMapImagery`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtilegeneratormapimagery.html) は、`TileImagery` ソースとして地理タイルシリーズで使用できます。

[`HeatTileGenerator`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/heattilegenerator.html) オブジェクトは、[`xValues`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/heattilegenerator.html#xvalues)、[`yValues`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/heattilegenerator.html#yvalues)、[`values`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/heattilegenerator.html#values) の 3 つの値パスを持つように機能します。これらの使用方法の例として、人口に関する情報を持つ形状ファイルの場合、[`xValues`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/heattilegenerator.html#xvalues) を経度、[`yValues`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/heattilegenerator.html#yvalues) を緯度、[`values`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/heattilegenerator.html#values) を人口データとみなすことができます。これらの各プロパティは、`number[]` を取得します。

ヒートマップ機能を使用する際の地理的タイルシリーズの表示は、[`minimumColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/heattilegenerator.html#minimumcolor) プロパティと [`maximumColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/heattilegenerator.html#maximumcolor) プロパティを [`HeatTileGenerator`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/heattilegenerator.html) の [`values`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/heattilegenerator.html#values) プロパティに割り当てるコレクションの最小値と最大値に対応する色を記述する「rgba」文字列に設定することでカスタマイズできます。これをさらにカスタマイズするには、ジェネレーターの `ScaleColors` プロパティを設定して、色を説明する文字列のコレクションを含めます。これにより、[`HeatTileGenerator`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/heattilegenerator.html) に、マップに表示される値に使用する色がわかります。[`blurRadius`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/heattilegenerator.html#blurradius)、[`maxBlurRadius`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/heattilegenerator.html#maxblurradius)、[`useBlurRadiusAdjustedForZoom`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/heattilegenerator.html#useblurradiusadjustedforzoom) プロパティを使用して、`ScaleColors` コレクション内の色が一緒にぼやける方法をカスタマイズすることもできます。

[`HeatTileGenerator`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/heattilegenerator.html) は対数スケールも使用できます。これを使用する場合は、[`useLogarithmicScale`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/heattilegenerator.html#uselogarithmicscale) プロパティを `true` に設定できます。

## Web Worker

また、[`HeatTileGenerator`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/heattilegenerator.html) は、Web Worker が、別のスレッドでシェイプ ファイルからタイル イメージをロードする際の重いリフティングをサポートしています。これにより、ヒートマップ機能を使用する際に地理マップのパフォーマンスが大幅に向上します。ジェネレーターでWebワーカーを使用するには、[`useWebWorkers`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/heattilegenerator.html#usewebworkers) プロパティを `true` に設定し、[`webWorkerInstance`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/heattilegenerator.html#webworkerinstance) プロパティを Web Worker のインスタンスに設定できます。

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
