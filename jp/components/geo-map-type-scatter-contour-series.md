---
title: Angular マップ | データ可視化ツール | 散布等高線シリーズ | データ バインディング | インフラジスティックス
_description: インフラジスティックスの Angular マップの散布等高線シリーズを使用して、各点に数値が割り当てられた経度および緯度データの三角測量に基づいて、地理的なコンテキストで色付きの等高線を描画します。Ignite UI for Angular マップ シーリズについての詳細を表示します。
_keywords: Angular map, scatter contour series, Ignite UI for Angular, Infragistics, Angular マップ, 散布等高線シリーズ, インフラジスティックス
mentionedTypes: ["XamGeographicMap","GeographicContourLineSeries","CustomPaletteColorScale", "Series"]
_language: ja
---

# Angular 地理等高線マップ

Angular マップ コンポーネントでは、[`IgxGeographicContourLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographiccontourlineseriescomponent.html) を使用して、各点に数値が割り当てられた経度および緯度データの三角測量に基づいて、地理的なコンテキストで色付きの等高線を描画できます。このタイプの地理的シリーズは、天気の気温、気圧、降水量、人口分布、地形データなどの地理的位置によって定義される散在データをレンダリングするのに役立ちます。

## Angular 地理等高線マップの例

<code-view style="height: 500px" alt="Angular 散布等高線シリーズの使用の例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/maps/geo-map/type-scatter-contour-series"
                                                 github-src="maps/geo-map/type-scatter-contour-series">
</code-view>


<div class="divider--half"></div>

[`IgxGeographicContourLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographiccontourlineseriescomponent.html) は [`IgxGeographicScatterAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicscatterareaseriescomponent.html) とよく似ていますが、塗りつぶしスケールを使用して色付けされた等高線としてデータを表し、地理散布エリア シリーズはカラースケールを使用して補間された面としてデータを表します。

## データ要件

マップコンポーネントの他の種類の地理的シリーズと同様に、[`IgxGeographicContourLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographiccontourlineseriescomponent.html) には、オブジェクトの配列にバインドできる `ItemsSource` プロパティがあります。さらに、項目ソースの各項目にはデータ列が 3 つあり、2 つは地理的位置 (経度および緯度座標) を保管し、1 つのデータ列は地理的位置に関連した値を保管します。これらのデータ列は、地理的シリーズの [`longitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicxytriangulatingseriescomponent.html#longitudeMemberPath)、[`latitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicxytriangulatingseriescomponent.html#latitudeMemberPath) および [`valueMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographiccontourlineseriescomponent.html#valueMemberPath) プロパティによって識別されます。
[`IgxGeographicContourLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographiccontourlineseriescomponent.html) は、三角測量が [`trianglesSource`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicxytriangulatingseriescomponent.html#trianglesSource) プロパティに設定されていない場合、ItemsSource の項目で定義済みのデータ三角測量を自動的に実行します。ただし、三角測量の計算は非常に時間のかかるプロセスであるため、このプロパティのために `TriangulationSource` を指定すると、ランタイム パフォーマンスがよくなります。特にデータ項目が多数ある場合には顕著です。

## データ バインディング

以下の表は、データ バインドに使用される [`IgxGeographicContourLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographiccontourlineseriescomponent.html) プロパティの概要です。

| プロパティ名  | プロパティ型   | 概要   |
|--------------|---------------| ---------------|
|`ItemsSource`|任意|[`trianglesSource`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicxytriangulatingseriescomponent.html#trianglesSource) プロパティが三角測量データを提供しない場合に三角測量を実行するデータ項目のソースです。|
|[`longitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicxytriangulatingseriescomponent.html#longitudeMemberPath)|文字列|`ItemsSource` にバインドされているすべての項目の経度を含むプロパティの名前。|
|[`latitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicxytriangulatingseriescomponent.html#latitudeMemberPath)|文字列|`ItemsSource` にバインドされているすべての項目の Latitude を含むプロパティの名前。|
|[`valueMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographiccontourlineseriescomponent.html#valueMemberPath)|文字列|各データ項目の緯度および経度座標の値を含むプロパティの名前。[`fillScale`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographiccontourlineseriescomponent.html#fillScale) プロパティが設定されている場合、この数値は色に変換されます。|
|[`trianglesSource`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicxytriangulatingseriescomponent.html#trianglesSource)|任意|三角測量データのソースを取得または設定します。TriangulationSource オブジェクトの Triangles をこのプロパティに設定すると、ランタイムパフォーマンスと地理的シリーズレンダリングの両方が向上します。|
|[`triangleVertexMemberPath1`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicxytriangulatingseriescomponent.html#triangleVertexMemberPath1)|文字列|各三角形に対して ItemsSource の最初の頂点のインデックスを含む、TrianglesSource 項目のプロパティ名。このプロパティを設定することは義務ではありません。カスタムの三角測量ロジックが提供されない場合はデフォルトで取得されます。|
|[`triangleVertexMemberPath2`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicxytriangulatingseriescomponent.html#triangleVertexMemberPath2)|文字列|各三角形に対して ItemsSource の最初の頂点のインデックスを含む、TrianglesSource 項目のプロパティ名。このプロパティを設定することは義務ではありません。カスタムの三角測量ロジックが提供されない場合はデフォルトで取得されます。|
|[`triangleVertexMemberPath3`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicxytriangulatingseriescomponent.html#triangleVertexMemberPath3)|文字列|各三角形に対して ItemsSource の最初の頂点のインデックスを含む、TrianglesSource 項目のプロパティ名。このプロパティを設定することは義務ではありません。カスタムの三角測量ロジックが提供されない場合はデフォルトで取得されます。|

## 等高線の塗りつぶしスケール

[`IgxGeographicContourLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographiccontourlineseriescomponent.html) の [`fillScale`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographiccontourlineseriescomponent.html#fillScale) を使用して地理的シリーズの等高線の塗りブラシを解決します。
ValueBrushScale クラスは、ユーザーの色分けのニーズもほとんどを満たすはずですが、カスタムの色分けロジックのアプリケーションで ValueBrushScale クラスを継承できます。
以下の表は、GeographicContourLineSeries のサーフェス カラーリングに影響を与える CustomPaletteColorScale のプロパティの一覧です。

| プロパティ名  | プロパティ型   | 概要   |
|--------------|---------------| ---------------|
|[`brushes`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#brushes)|BrushCollection|[`IgxGeographicContourLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographiccontourlineseriescomponent.html) の輪郭を塗りつぶすためのブラシのコレクションを取得または設定します。|
|[`maximumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcustompalettecolorscalecomponent.html#maximumValue)|double|塗りつぶしスケールでブラシを割り当てるための最高値。|
|[`minimumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcustompalettecolorscalecomponent.html#minimumValue)|double|塗りつぶしスケールでブラシを割り当てるための最低値。|

## コード スニペット

以下のコードは、[`IgxGeographicContourLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographiccontourlineseriescomponent.html) を世界の表面温度を表す三角測量データにバインドする方法を示しています。

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
    <span [style.color]="series.brush">
        {{item | number: 2}} "°C"
    </span>
</ng-template>
```

```ts
import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { IgxValueBrushScaleComponent } from 'igniteui-angular-charts';
import { IgxShapeDataSource } from 'igniteui-angular-core';
import { IgxGeographicContourLineSeriesComponent } from 'igniteui-angular-maps';
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';

@Component({
  selector: "app-map-geographic-scatter-contour-series",
  styleUrls: ["./map-geographic-scatter-contour-series.component.scss"],
  templateUrl: "./map-geographic-scatter-contour-series.component.html"
})

export class MapTypeScatterContourSeriesComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;

    @ViewChild ("template")
    public tooltip: TemplateRef<object>;
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

        const brushScale = new IgxValueBrushScaleComponent();
        brushScale.brushes = brushes;
        brushScale.minimumValue = 0;
        brushScale.maximumValue = 30;

        const contourSeries = new IgxGeographicContourLineSeriesComponent();
        contourSeries.dataSource = data;
        contourSeries.longitudeMemberPath = "lon";
        contourSeries.latitudeMemberPath = "lat";
        contourSeries.valueMemberPath = "value";
        contourSeries.fillScale = brushScale;
        contourSeries.tooltipTemplate = this.tooltip;
        contourSeries.thickness = 4;

        this.map.series.add(contourSeries);
    }
}
```

## API リファレンス

*   [`fillScale`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographiccontourlineseriescomponent.html#fillScale)
*   [`IgxGeographicContourLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographiccontourlineseriescomponent.html)
*   [`IgxGeographicScatterAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicscatterareaseriescomponent.html)
*   `ItemsSource`
*   [`latitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicxytriangulatingseriescomponent.html#latitudeMemberPath)
*   [`longitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicxytriangulatingseriescomponent.html#longitudeMemberPath)
*   [`trianglesSource`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicxytriangulatingseriescomponent.html#trianglesSource)
*   `TriangulationSource`
*   [`IgxValueBrushScaleComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxvaluebrushscalecomponent.html)
*   [`valueMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographiccontourlineseriescomponent.html#valueMemberPath)
