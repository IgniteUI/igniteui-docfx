---
title: Angular マップ | データ可視化ツール | 散布図比例シリーズ | データ バインディング | インフラジスティックス
_description: インフラジスティックスの Angular マップの散布図比例シリーズを使用して、アプリケーション内のデータで指定された地理的な地点のマーカーをプロットします。Ignite UI for Angular マップ シーリズについての詳細を表示します。
_keywords: Angular map, scatter proportional series, Ignite UI for Angular, Infragistics, Angular マップ, 散布図比例シリーズ, インフラジスティックス
mentionedTypes: ["XamGeographicMap", "Series"]
_language: ja
---

# Angular 地理バブル マップ

Angular マップ コンポーネントでは、[`IgxGeographicProportionalSymbolSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicproportionalsymbolseriescomponent.html) を使用して、アプリケーションのデータで指定された地理的位置にバブルまたは相対マーカーをプロットできます。このマップ シリーズは、百貨店、倉庫、オフィスなど、特定のビジネス ケースに応じたポイントをハイライト表示する場合に役立ちます。また、動的な車両追跡のためにフリート管理システムまたは GPS システムでこの地図シリーズを使用することができます。

## Angular 地理バブル マップの例

<code-view style="height: 500px" alt="Angular 散布図比の使用の例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/maps/geo-map/type-scatter-bubble-series"
                                                 github-src="maps/geo-map/type-scatter-bubble-series">
</code-view>


<div class="divider--half"></div>

上記のデモは、[`IgxGeographicProportionalSymbolSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicproportionalsymbolseriescomponent.html) シリーズと、シリーズのデータ​​バインディングオプションを指定する方法を示しています。予定表連動マーカー選択は、マーカー競合回避ロジックと合わせて構成され、マーカー アウトラインと塗りつぶしの色も指定されます。

## 構成の概要

マップコントロールの他のタイプの散布シリーズと同様に、[`IgxGeographicProportionalSymbolSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicproportionalsymbolseriescomponent.html) シリーズには、オブジェクトの配列にバインドできる `ItemsSource` プロパティがあります。また、項目ソースの各項目は、地理経度および緯度を表す 2 つのデータ列があります。[`longitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicproportionalsymbolseriescomponent.html#longitudeMemberPath) と [`latitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicproportionalsymbolseriescomponent.html#latitudeMemberPath) プロパティを使用してこのデータ列をマップします。[`radiusScale`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicproportionalsymbolseriescomponent.html#radiusScale) と [`radiusMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicproportionalsymbolseriescomponent.html#radiusMemberPath) は、バブルの半径を設定します。

以下の表に、データ バインドに使用される GeographicHighDensityScatterSeries シリーズのプロパティをまとめています。

| プロパティ|タイプ|概要 |
| ---|---|--- |
| `ItemsSource`|any|項目のソースを取得または設定します |
| [`longitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicproportionalsymbolseriescomponent.html#longitudeMemberPath)|string|ItemsSource プロパティを使用して、割り当てられた商品の経度の値の場所を特定します。 |
| [`latitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicproportionalsymbolseriescomponent.html#latitudeMemberPath)|string|ItemsSource プロパティを使用して、割り当てられた商品の緯度値の場所を決定します。 |
| [`radiusMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicproportionalsymbolseriescomponent.html#radiusMemberPath)|string|シリーズの半径値を取得するために使用するパスを設定します。 |
| [`radiusScale`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicproportionalsymbolseriescomponent.html#radiusScale)|[`IgxSizeScaleComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxsizescalecomponent.html)|現在のバブル シリーズの半径スケール プロパティを取得または設定します。 |
| [`minimumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxsizescalecomponent.html#minimumValue)|any|値のサブ範囲を計算するための最小値を設定します。 |
| [`maximumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxsizescalecomponent.html#maximumValue)|any|値のサブ範囲を計算するための最大値を設定します。 |

## コード スニペット

<!--Angular -->

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
            {{item.name}}
        </span>
    </div>
</ng-template>
```

```ts
import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { IgxSizeScaleComponent } from 'igniteui-angular-charts';
import { IgxValueBrushScaleComponent } from 'igniteui-angular-charts';
import { IgxDataContext } from 'igniteui-angular-core';
import { IgxShapeDataSource } from 'igniteui-angular-core';
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxGeographicProportionalSymbolSeriesComponent } from 'igniteui-angular-maps';
import { MarkerType } from 'igniteui-angular-charts';
import { WorldLocations } from "../../utilities/WorldLocations";

@Component({
  selector: "app-map-geographic-scatter-proportional-series",
  styleUrls: ["./map-geographic-scatter-proportional-series.component.scss"],
  templateUrl: "./map-geographic-scatter-proportional-series.component.html"
})
export class MapTypeScatterBubbleSeriesComponent implements AfterViewInit {

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
    console.log("loaded contour shapes: " + shapeRecords.length + " from /Shapes/WorldTemperatures.shp");

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

    console.log("loaded contour points: " + contourPoints.length);
    this.addSeriesWith(WorldLocations.getAll());
}

    public addSeriesWith(locations: any[]) {
        const sizeScale = new IgxSizeScaleComponent();
        sizeScale.minimumValue = 4;
        sizeScale.maximumValue = 60;

        const brushes = [
            "rgba(14, 194, 14, 0.4)",  // semi-transparent green
            "rgba(252, 170, 32, 0.4)", // semi-transparent orange
            "rgba(252, 32, 32, 0.4)"  // semi-transparent red
        ];

        const brushScale = new IgxValueBrushScaleComponent();
        brushScale.brushes = brushes;
        brushScale.minimumValue = 0;
        brushScale.maximumValue = 30;

        const symbolSeries = new IgxGeographicProportionalSymbolSeriesComponent();
        symbolSeries.dataSource = locations;
        symbolSeries.markerType = MarkerType.Circle;
        symbolSeries.radiusScale = sizeScale;
        symbolSeries.fillScale = brushScale;
        symbolSeries.fillMemberPath = "pop";
        symbolSeries.radiusMemberPath = "pop";
        symbolSeries.latitudeMemberPath = "lat";
        symbolSeries.longitudeMemberPath = "lon";
        symbolSeries.markerOutline = "rgba(0,0,0,0.3)";
        symbolSeries.tooltipTemplate = this.tooltipTemplate;

        this.map.series.add(symbolSeries);
    }
}
```

## API リファレンス

*   [`IgxGeographicProportionalSymbolSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicproportionalsymbolseriescomponent.html)
*   `ItemsSource`
*   [`latitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicproportionalsymbolseriescomponent.html#latitudeMemberPath)
*   [`longitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicproportionalsymbolseriescomponent.html#longitudeMemberPath)
*   [`radiusMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicproportionalsymbolseriescomponent.html#radiusMemberPath)
*   [`radiusScale`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicproportionalsymbolseriescomponent.html#radiusScale)
