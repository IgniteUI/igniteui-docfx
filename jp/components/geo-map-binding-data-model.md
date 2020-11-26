---
title: Angular マップ | データ可視化ツール | 地理的データ モデルのバインディング | インフラジスティックス
_description: インフラジスティックスの Angular JavaScript マップを使用して、シェイプ ファイルからの地理空間データやデータ モデルからの地理的位置を地理的画像マップに表示します。Ignite UI for Angular マップのサンプルを是非お試しください!
_keywords: Angular map, binding data models, Ignite UI for Angular, Infragistics, data binding, Angular マップ, データ モデルのバインディング, データ バインディング, インフラジスティックス
mentionedTypes: ['XamGeographicMap', GeographicScatterAreaSeries, GeographicHighDensityScatterSeries, GeographicProportionalSymbolSeries, GeographicScatterAreaSeries, GeographicContourLineSeries, GeographicShapeSeries, GeographicPolylineSeries  ]
_language: ja
---

# Angular 地理的データ モデルのバインディング

Ignite UI for Angular マップ コンポーネントは、シェイプ ファイルからの地理空間データやデータ モデルからの地理的位置を地理的画像マップに表示するように設計されています。地理的シリーズの `ItemsSource` プロパティは、データ モデルへのバインディングのために使用されます。このプロパティは、カスタム オブジェクトの配列にバインドできます。

## Angular 地理的データ モデルのバインディングの例

<div class="sample-container loading" style="height: 500px">
    <iframe id="geo-map-binding-data-model-iframe" src='{environment:dvDemosBaseUrl}/maps/geo-map-binding-data-model' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular 地理的データ モデルのバインディングの例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-binding-data-model-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>


<div class="divider--half"></div>

以下の表で、地理的シリーズのタイプごとに必要となるデータ構造を簡単に説明します。

| Geographic シリーズ                                                                                                                                                                                  | プロパティ                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | 概要                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| [`IgxGeographicSymbolSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicsymbolseriescomponent.html)                         | [`longitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicsymbolseriescomponent.html#longitudememberpath), [`latitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicsymbolseriescomponent.html#latitudememberpath)                                                                                                                                                                                                              | 2 つの数値の経度と緯度座標の名前を指定します。                                                                          |
| [`IgxGeographicHighDensityScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographichighdensityscatterseriescomponent.html) | [`longitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographichighdensityscatterseriescomponent.html#longitudememberpath), [`latitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographichighdensityscatterseriescomponent.html#latitudememberpath)                                                                                                                                                                                      | 2 つの数値の経度と緯度座標の名前を指定します。                                                                          |
| [`IgxGeographicProportionalSymbolSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicproportionalsymbolseriescomponent.html) | [`longitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicproportionalsymbolseriescomponent.html#longitudememberpath), [`latitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicproportionalsymbolseriescomponent.html#latitudememberpath), [`radiusMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicproportionalsymbolseriescomponent.html#radiusmemberpath) | 2 つの経度座標と緯度座標の名前と、シンボルのサイズ/半径の数字列を 1 列指定します。                                                      |
| [`IgxGeographicScatterAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicscatterareaseriescomponent.html)               | [`longitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicxytriangulatingseriescomponent.html#longitudememberpath), [`latitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicxytriangulatingseriescomponent.html#latitudememberpath), [`colorMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicscatterareaseriescomponent.html#colormemberpath)                | 数値の三角測量のために、2 つの経度と緯度座標および数値列を 1 列指定します。                                                          |
| [`IgxGeographicContourLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographiccontourlineseriescomponent.html)               | [`longitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicxytriangulatingseriescomponent.html#longitudememberpath), [`latitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicxytriangulatingseriescomponent.html#latitudememberpath), [`valueMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographiccontourlineseriescomponent.html#valuememberpath)                | 数値の三角測量のために、2 つの経度と緯度座標および数値列を 1 列指定します。                                                          |
| [`IgxGeographicShapeSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicshapeseriescomponent.html)                           | [`shapeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicshapeseriesbasecomponent.html#shapememberpath)                                                                                                                                                                                                                                                                                                                                                                                                | 図形の地理的ポイントを含む ItemsSource 項目のデータ列の名前を指定します。このプロパティは、x プロパティと y プロパティを持つオブジェクトの配列の配列にマップする必要があります。 |
| [`IgxGeographicPolylineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicpolylineseriescomponent.html)                     | [`shapeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicshapeseriesbasecomponent.html#shapememberpath)                                                                                                                                                                                                                                                                                                                                                                                                | 線の地理的座標を含む ItemsSource 項目のデータ列の名前を指定します。このプロパティは、x プロパティと y プロパティを持つオブジェクトの配列の配列にマップする必要があります。    |

## コード スニペット

以下のコードは、[`IgxGeographicSymbolSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicsymbolseriescomponent.html) を、経度と緯度の座標を使用して格納された世界の一部の都市の地理的位置を含むカスタム データ モデルにバインドする方法を示します。また、[WorldUtility](geo-map-resources-world-util.md) を使用してこれらの場所間の最短の地理的経路をプロットするために [`IgxGeographicPolylineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicpolylineseriescomponent.html) を使用します。

```html
<div className="sampleRoot" >
    <igx-geographic-map #map
        width="700px"
        height="500px"
        zoomable="true" >
    </igx-geographic-map>
</div>

<ng-template let-series="series" let-item="item" #pointSeriesTemplate>
        <div>
            <span [style.color]="series.brush">
                {{item.country}}
            </span>
        </div>
</ng-template>

<ng-template let-series="series" let-item="item" #polylineSeriesTooltipTemplate>
    <div>
        <span [style.color]="series.brush">
            Departure: {{item.origin.country}}
        </span>
        <br/>
        <span [style.color]="series.brush">
            Arrival: {{item.dest.country}}
        </span>
    </div>
</ng-template>
```

```ts
import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { MarkerType } from 'igniteui-angular-charts';
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxGeographicPolylineSeriesComponent } from "igniteui-angular-maps";
import { IgxGeographicSymbolSeriesComponent } from 'igniteui-angular-maps';
import { WorldUtils } from "../../utilities/WorldUtils";

@Component({
  selector: "app-map-binding-geographic-data-models",
  styleUrls: ["./map-binding-geographic-data-models.component.scss"],
  templateUrl: "./map-binding-geographic-data-models.component.html"
})

export class MapBindingDataModelComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;
    @ViewChild("pointSeriesTemplate")
    public pointSeriesTemplate: TemplateRef<object>;
    @ViewChild("polylineSeriesTooltipTemplate")
    public polylineSeriesTooltipTemplate: TemplateRef<object>;
    public flights: any[];
    constructor() {
    }

    public ngAfterViewInit(): void {
        const cityDAL = { lat:  32.763, lon: -96.663, country: "US", name: "Dallas" };
        const citySYD = { lat: -33.889, lon: 151.028, country: "Australia", name: "Sydney" };
        const cityNZL = { lat: -36.848, lon: 174.763, country: "New Zealand", name: "Auckland" };
        const cityQTR = { lat: 25.285, lon:  51.531,  country: "Qatar", name: "Doha" };
        const cityPAN = { lat:  8.949, lon: -79.400,  country: "Panama", name: "Panama" };
        const cityCHL = { lat: -33.475, lon: -70.647, country: "Chile", name: "Santiago" };
        const cityJAP = { lat:  35.683, lon: 139.809, country: "Japan", name: "Tokyo" };
        const cityALT = { lat: 33.795,  lon: -84.349, country: "US", name: "Atlanta" };
        const cityJOH = { lat: -26.178, lon: 28.004,  country: "South Africa", name: "Johannesburg" };
        const cityNYC = { lat: 40.750, lon: -74.0999, country: "US", name: "New York" };
        const citySNG = { lat:  1.229, lon: 104.177,  country: "Singapore", name: "Singapore" };
        const cityMOS = { lat: 55.750, lon:  37.700,  country: "Russia", name: "Moscow" };
        const cityROM = { lat:  41.880, lon: 12.520,  country: "Italy", name: "Roma" };
        const cityLAX = { lat: 34.000, lon: -118.25,  country: "US", name: "Los Angeles" };

        this.flights = [
            { origin: cityDAL, dest: citySNG, color: "Green" },
            { origin: cityMOS, dest: cityNZL, color: "Red" },
            { origin: cityCHL, dest: cityJAP, color: "Blue" },
            { origin: cityPAN, dest: cityROM, color: "Orange" },
            { origin: cityALT, dest: cityJOH, color: "Black" },
            { origin: cityNYC, dest: cityQTR, color: "Purple" },
            { origin: cityLAX, dest: citySYD, color: "Gray" }
        ];

        for (const flight of this.flights) {
            this.createPolylineSeries(flight);
            this.createSymbolSeries(flight);
        }
    }

    public createSymbolSeries(flight: any) {
        const geoLocations = [flight.origin, flight.dest ];
        const symbolSeries = new IgxGeographicSymbolSeriesComponent ();
        symbolSeries.dataSource = geoLocations;
        symbolSeries.markerType = MarkerType.Circle;
        symbolSeries.latitudeMemberPath = "lat";
        symbolSeries.longitudeMemberPath = "lon";
        symbolSeries.markerBrush  = "White";
        symbolSeries.markerOutline = flight.color;
        symbolSeries.thickness = 1;
        symbolSeries.tooltipTemplate = this.pointSeriesTemplate;

        this.map.series.add(symbolSeries);
    }

    public createPolylineSeries(flight: any) {
        const geoPath = WorldUtils.calcPaths(flight.origin, flight.dest);
        const geoDistance = WorldUtils.calcDistance(flight.origin, flight.dest);
        const geoRoutes = [
            {
              dest: flight.dest,
              distance: geoDistance,
              origin: flight.origin,
              points: geoPath,
              time: geoDistance / 850
        }];

        const lineSeries = new IgxGeographicPolylineSeriesComponent ();
        lineSeries.dataSource = geoRoutes;
        lineSeries.shapeMemberPath = "points";
        lineSeries.shapeStrokeThickness = 9;
        lineSeries.shapeOpacity = 0.5;
        lineSeries.shapeStroke = flight.color;
        lineSeries.tooltipTemplate = this.polylineSeriesTooltipTemplate;
        this.map.series.add(lineSeries);
    }
}
```
