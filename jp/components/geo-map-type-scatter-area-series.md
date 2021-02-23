---
title: Angular マップ | データ可視化ツール | 散布エリア シリーズ | データ バインディング | インフラジスティックス
_description: インフラジスティックスの Angular 散布エリア シリーズを使用して、各ポイントに割り当てられた数値を使い、経度および緯度データの三角測量に基づいて、色付きのエリア サーフェスを描画します。Ignite UI for Angular マップ シーリズについての詳細を表示します。
_keywords: Angular map, scatter area series, Ignite UI for Angular, Infragistics, Angular マップ, 散布エリア シリーズ, インフラジスティックス
mentionedTypes: ['XamGeographicMap','GeographicScatterAreaSeries','CustomPaletteColorScale']
_language: ja
---

# Angular 散布エリア シリーズの使用

Angular マップ コンポーネントの [`IgxGeographicScatterAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicscatterareaseriescomponent.html) を使用して、各ポイントに割り当てられた数値を持つ経度と緯度のデータの三角形分割に基づいて、地理的背景で色付きの表面を描画します。このタイプの地理的シリーズは、気象温度、降水量、人口分布、大気汚染などの地理的位置によって定義される散乱データのレンダリングに使用できます。

## Angular 散布エリア シリーズの使用の例

<div class="sample-container loading" style="height: 500px">
    <iframe id="geo-map-type-scatter-area-series-iframe" src='{environment:dvDemosBaseUrl}/maps/geo-map-type-scatter-area-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular 散布エリア シリーズの使用の例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-type-scatter-area-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>


<div class="divider--half"></div>

[`IgxGeographicScatterAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicscatterareaseriescomponent.html) は [`IgxGeographicContourLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographiccontourlineseriescomponent.html) と同様ですが、同じ値を持つデータポイントを接続する等線の置換に補完で色つきサーフェス エリアとしてデータを表します。

## データ要件

マップコンポーネントの他の種類の地理的シリーズと同様に、[`IgxGeographicScatterAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicscatterareaseriescomponent.html) には、オブジェクトの配列にバインドできる `ItemsSource` プロパティがあります。さらに、項目ソースの各項目にはデータ列が 3 つあり、2 つは地理的な経度および緯度座標を保管し、1 つのデータ列は地理的位置に関連した値を保管します。地理的シリーズの [`longitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicxytriangulatingseriescomponent.html#longitudememberpath)、[`latitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicxytriangulatingseriescomponent.html#latitudememberpath) および [`colorMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicscatterareaseriescomponent.html#colormemberpath) プロパティはこれらのデータ列を識別します。
[`IgxGeographicScatterAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicscatterareaseriescomponent.html) は、三角測量が [`trianglesSource`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicxytriangulatingseriescomponent.html#trianglessource) プロパティに設定されていない場合、ItemsSource の項目で組み込みのデータ三角測量を自動的に実行します。ただし、三角測量の計算は非常に時間のかかるプロセスであるため、このプロパティのために TriangulationSource を指定すると、ランタイム パフォーマンスがよくなります。特にデータ項目が多数ある場合には顕著です。

## データ バインディング

以下の表に、データ バインドに使用される GeographicScatterAreaSeries のプロパティをまとめています。

| プロパティ名                                                                                                                                                                                             | プロパティ型 | 説明                                                                                                                                                                                                                                                                                           |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ItemsSource`                                                                                                                                                                                      | 任意     | [`trianglesSource`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicxytriangulatingseriescomponent.html#trianglessource) プロパティが三角測量データを提供しない場合に三角測量を実行するデータ項目のソースです。                                                                   |
| [`longitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicxytriangulatingseriescomponent.html#longitudememberpath)             | 文字列    | `ItemsSource` にバインドされているすべてのアイテムの経度を含むプロパティの名前。                                                                                                                                                                                                                                              |
| [`latitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicxytriangulatingseriescomponent.html#latitudememberpath)               | 文字列    | `ItemsSource` にバインドされているすべてのアイテムの Latitude を含むプロパティの名前。                                                                                                                                                                                                                                      |
| [`colorMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicscatterareaseriescomponent.html#colormemberpath)                         | 文字列    | 各データ項目の緯度および経度座標の値を含むプロパティの名前。[`colorScale`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicscatterareaseriescomponent.html#colorscale) プロパティが設定されている場合、この数値は色に変換されます。                                                                |
| [`trianglesSource`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicxytriangulatingseriescomponent.html#trianglessource)                     | 任意     | 三角測量データのソース。`TriangulationSource` オブジェクトの Triangles をこのプロパティに設定すると、ランタイム パフォーマンスと地理的シリーズの描画の両方が改善します。                                                                                                                                                                                        |
| [`triangleVertexMemberPath1`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicxytriangulatingseriescomponent.html#trianglevertexmemberpath1) | 文字列    | 各三角形に対して ItemsSource の最初の頂点のインデックスを含む、[`trianglesSource`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicxytriangulatingseriescomponent.html#trianglessource) 項目のプロパティ名。このプロパティを設定することは義務ではありません。カスタムの三角測量ロジックが提供されない場合はデフォルトで取得されます。 |
| [`triangleVertexMemberPath2`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicxytriangulatingseriescomponent.html#trianglevertexmemberpath2) | 文字列    | 各三角形に対して ItemsSource の最初の頂点のインデックスを含む、[`trianglesSource`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicxytriangulatingseriescomponent.html#trianglessource) 項目のプロパティ名。このプロパティを設定することは義務ではありません。カスタムの三角測量ロジックが提供されない場合はデフォルトで取得されます。 |
| [`triangleVertexMemberPath3`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicxytriangulatingseriescomponent.html#trianglevertexmemberpath3) | 文字列    | 各三角形に対して ItemsSource の最初の頂点のインデックスを含む、[`trianglesSource`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicxytriangulatingseriescomponent.html#trianglessource) 項目のプロパティ名。このプロパティを設定することは義務ではありません。カスタムの三角測量ロジックが提供されない場合はデフォルトで取得されます。 |

## カラー スケール

[`IgxGeographicScatterAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicscatterareaseriescomponent.html) の ColorScale プロパティを使用して、ポイントの色の値を解決し、地理的シリーズの面を塗りつぶします。色は、ピクセル単位の三角ラスタライザーを三角測量データに適用することによって、サーフェスの図形の周りをなめらかに補間します。サーフェスの描画がピクセル単位であるため、カラー スケールはブラシではなく色を使用します。
提供される [`IgxCustomPaletteColorScaleComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcustompalettecolorscalecomponent.html) クラスはほとんどのカラーリングのニーズを満たすはずですが、ColorScale ベースのクラスはカスタムのカラリング ロジックのアプリケーションによって継承できます。

以下の表は GeographicScatterAreaSeries の面のカラリングに影響する [`IgxCustomPaletteColorScaleComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcustompalettecolorscalecomponent.html) プロパティをリストします。

| プロパティ名                                                                                                                                                                     | プロパティ型                                                                                                                                                   | 説明                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| [`palette`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcustompalettecolorscalecomponent.html#palette)                     | ObservableCollection<Color>                                                                                                                              | 補間するために選択する色のコレクションを取得または設定します。         |
| [`interpolationMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcustompalettecolorscalecomponent.html#interpolationmode) | [`ColorScaleInterpolationMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/colorscaleinterpolationmode.html) | Palette から色を取得するメソッドを取得または設定します。        |
| [`maximumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcustompalettecolorscalecomponent.html#maximumvalue)           | double                                                                                                                                                   | 色を割り当てるための最大値。指定した値がこの値より大きい場合は透明になります。 |
| [`minimumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcustompalettecolorscalecomponent.html#minimumvalue)           | double                                                                                                                                                   | 色を割り当てるための最小値。指定した値がこの値より小さい場合は透明になります。 |

## コード スニペット

以下のコードは、[`IgxGeographicScatterAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicscatterareaseriescomponent.html) を世界の表面温度を表す三角測量データにバインドする方法を示しています。

<!-- Angular -->

```html
<div className="sampleRoot" >
    <igx-geographic-map #map
        width="700px"
        height="500px"
        zoomable="true" >
    </igx-geographic-map>
</div>

<ng-template let-series="series" let-item="item" #template>
    <div>
        <span>
            Degrees: {{item.value}} "°F"
        </span>
        <br/>
        <span>
                Longitude: {{item.lon}}
        </span>
        <br/>
        <span>
                Latitude: {{item.lat}}
        </span>
    </div>
</ng-template>
```

```ts
import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { IgxCustomPaletteColorScaleComponent } from 'igniteui-angular-charts';
import { IgxShapeDataSource } from 'igniteui-angular-core';
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxGeographicScatterAreaSeriesComponent } from 'igniteui-angular-maps';

@Component({
  selector: "app-map-geographic-scatter-area-series",
  styleUrls: ["./map-geographic-scatter-area-series.component.scss"],
  templateUrl: "./map-geographic-scatter-area-series.component.html"
})
export class MapTypeScatterAreaSeriesComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;
    @ViewChild ("template")
    public tooltipTemplate: TemplateRef<object>;
    constructor() {
    }

    public ngAfterViewInit(): void {
    const sds = new IgxShapeDataSource();
    sds.shapefileSource = "assets/Shapes/WorldTemperatures.shp";
    sds.databaseSource  = "assets/Shapes/WorldTemperatures.dbf";
    sds.dataBind();
    sds.importCompleted.subscribe(() => this.onDataLoaded(sds, ""));
}

    public onDataLoaded(sds: IgxShapeDataSource, e: any) {
    const shapeRecords = sds.getPointData();
    const contourPoints: any[] = [];
    for (const record of shapeRecords) {
        const temp = record.fieldValues.Contour;
        // using only major contours (every 10th degrees Celsius)
        if (temp % 10 === 0 && temp >= 0) {
            for (const shapes of record.points) {
                for (let i = 0; i < shapes.length; i++) {
                if (i % 5 === 0) {
                    const p = shapes[i];
                    const item = { lon: p.x, lat: p.y, value: temp};
                    contourPoints.push(item);
                }
                }
            }
        }
    }
    this.createContourSeries(contourPoints);
}

    public createContourSeries(data: any[]) {
    const brushes = [
        "rgba(32, 146, 252, 0.5)", // semi-transparent blue
        "rgba(14, 194, 14, 0.5)",  // semi-transparent green
        "rgba(252, 120, 32, 0.5)", // semi-transparent orange
        "rgba(252, 32, 32, 0.5)"  // semi-transparent red
    ];

    const colorScale = new IgxCustomPaletteColorScaleComponent();
    colorScale.palette = brushes;
    colorScale.minimumValue = 0;
    colorScale.maximumValue = 30;

    const areaSeries = new IgxGeographicScatterAreaSeriesComponent();
    areaSeries.dataSource = data;
    areaSeries.longitudeMemberPath = "lon";
    areaSeries.latitudeMemberPath = "lat";
    areaSeries.colorMemberPath = "value";
    areaSeries.colorScale = colorScale;
    areaSeries.tooltipTemplate = this.tooltipTemplate;
    areaSeries.thickness = 4;

    this.map.series.add(areaSeries);
}
}
```
