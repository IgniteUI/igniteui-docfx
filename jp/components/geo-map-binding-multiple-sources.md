---
title: Angular マップ | データ可視化ツール | 複数のデータソースのバインディング | インフラジスティックス
_description: インフラジスティックスの Angular JavaScript マップを使用して、複数の地理的シリーズオブジェクトを追加し、カスタム データソースを地理空間データとオーバーレイすることができます。Ignite UI for Angular マップ チュートリアルを是非お試しください!
_keywords: Angular map, geographic series, Ignite UI for Angular, Infragistics, data binding, Angular マップ, 地理的シリーズ, データ バインディング, インフラジスティックス
mentionedTypes: ['XamGeographicMap']
_language: ja
---

# Angular 複数データ ソースのバインド

Ignite UI for Angular マップでは、カスタム データソースを地理空間データとオーバーレイするために複数の地理的シリーズ オブジェクトを追加できます。たとえば、空港の地理的位置をプロットするための [`IgxGeographicSymbolSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicsymbolseriescomponent.html)、空港間のフライトをプロットするための [`IgxGeographicPolylineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicpolylineseriescomponent.html)、主要な地理座標のグリッド線をプロットするための 2nd [`IgxGeographicPolylineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicpolylineseriescomponent.html) などです。

## Angular 複数データ ソースのバインドの例

<div class="sample-container loading" style="height: 500px">
    <iframe id="geo-map-binding-multiple-sources-iframe" src='{environment:dvDemosBaseUrl}/maps/geo-map-binding-multiple-sources' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular 複数データ ソースのバインドの例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-binding-multiple-sources-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>


<div class="divider--half"></div>

このトピックでは、以下の地理空間データをプロットする複数の地理的シリーズを表示するための手順を説明します。

-   [`IgxGeographicSymbolSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicsymbolseriescomponent.html) – 主要空港の場所を表示します。
-   [`IgxGeographicPolylineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicpolylineseriescomponent.html) – 空港間のフライトを表示します。
-   [`IgxGeographicPolylineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicpolylineseriescomponent.html) – 主座標のグリッド線を表示します。

目的のデータをプロットするために、地理的シリーズをこの組み合わせまたは他の組み合わせでも使用できます。

## データ ソースの作成

Ignite UI for Angular マップに表示するすべての地理的シリーズのデータ​​ソースを作成します。たとえば、[WorldConnections](geo-map-resources-world-connections.md) スクリプトを使用できます。

```html
<div className="sampleRoot" >
    <igx-geographic-map #map
        width="700px"
        height="500px"
        zoomable="true" >
    </igx-geographic-map>
</div>

<ng-template let-series="series" let-item="item" #polylineTooltipTemplate>
        <div>
            <span>
            Arrival: {{item.origin.country}}
            </span>
            <br/>
            <span>
            Destination: {{item.dest.country}}
            </span>
            <br/>
            <span>
            Distance: {{item.distance}} miles
            </span>
        </div>
    </ng-template>

    <ng-template let-series="series" let-item="item" #pointTooltipTemplate>
            <div>
                <span>
                {{item?.country}}
                </span>
                <br />
                <span>
                {{item?.name}}
                </span>
                <br />
                <span>
                Population: {{item.pop}} M
                </span>
                <br/>
                <span>
                Flights: {{item.flights}}
                </span>
            </div>
        </ng-template>
```

## フライトのオーバーレイ

主要空港間のフライト接続を持つ最初の [`IgxGeographicPolylineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicpolylineseriescomponent.html) オブジェクトを作成し、Ignite UI for Angular マップの [`IgxSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html) コレクションに追加します。

```html
<igx-geographic-polyline-series  #polylineSeries
        [tooltipTemplate]="polylineTooltipTemplate"
                name="polylineSeries"
                shapeMemberPath="points"
                shapeStroke="rgba(147, 15, 180, 0.5)"
                thickness={3.0} >
</igx-geographic-polyline-series>
```

## グリッド線のオーバーレイ

地理グリッド線を使用して2番目の [`IgxGeographicPolylineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicpolylineseriescomponent.html) オブジェクトを作成し、それを XamGeographicMap の [`IgxSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html) コレクションに追加します。

```html
  <igx-geographic-polyline-series  #polylineSeries
            [tooltipTemplate]="polylineTooltipTemplate"
                 datasource = worldFlights
                 name="polylineSeries"
                 shapeMemberPath="points"
                 shapeStroke="rgba(196, 14, 14,0.05)"
                 thickness={3.0} >
    </igx-geographic-polyline-series>
```

## 空港のオーバーレイ

空港ポイントを使用して [`IgxGeographicSymbolSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicsymbolseriescomponent.html) オブジェクトを作成し、それを Ignite UI for Angular 地理マップの [`IgxSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html) コレクションに追加します。

```html
<igx-geographic-symbol-series  #symbolSeries
    name="symbolSeries"
    longitudeMemberPath="longitude"
    latitudeMemberPath="latitude"
    markerType="Circle"
    markerOutline="rgb(73, 73, 73)"
    markerBrush="White" >
</igx-geographic-symbol-series>
```

## まとめ

上記すべてのコード スニペットを以下のコード ブロックにまとめて、プロジェクトに簡単にコピーできます。

```ts
import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { MarkerType } from 'igniteui-angular-charts';
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxGeographicPolylineSeriesComponent } from "igniteui-angular-maps";
import { IgxGeographicSymbolSeriesComponent } from "igniteui-angular-maps";
import { WorldConnections } from "../../utilities/WorldConnections";

@Component({
  selector: "app-map-binding-multiple-data-sources",
  styleUrls: ["./map-binding-multiple-data-sources.component.scss"],
  templateUrl: "./map-binding-multiple--data-sources.component.html"
})

export class MapBindingMultipleSourcesComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;

    @ViewChild("polylineTooltipTemplate")
    public polylineTooltipTemplate: TemplateRef<object>;

    @ViewChild("pointTooltipTemplate")
    public pointTooltipTemplate: TemplateRef<object>;

    public data: any;
    constructor() {
    }

    public ngAfterViewInit(): void {
      this.map.windowRect = { left: 0.195, top: 0.1, width: 0.5, height: 0.5 };

      const worldFlights = WorldConnections.getFlights();
      const worldAirports = WorldConnections.getAirports();
      const worldGridlines = WorldConnections.getGridlines();

      this.addPolylineSeriesWith(worldFlights);
      this.addGridlineSeriesWith(worldGridlines);
      this.addSymbolSeriesWith(worldAirports);
    }

    public addGridlineSeriesWith(data: any[]) {
        const gridSeries = new IgxGeographicPolylineSeriesComponent();
        gridSeries.dataSource = data;
        gridSeries.shapeMemberPath = "points";
        gridSeries.shapeStroke = "Gray";
        gridSeries.shapeStrokeThickness = 1;
        this.map.series.add(gridSeries);
    }

    public addPolylineSeriesWith(data: any[]) {
        const lineSeries = new IgxGeographicPolylineSeriesComponent ();
        lineSeries.dataSource = data;
        lineSeries.shapeMemberPath = "points";
        lineSeries.shapeStroke = "rgba(196, 14, 14,0.05)";
        lineSeries.shapeStrokeThickness = 4;
        lineSeries.tooltipTemplate = this.polylineTooltipTemplate;
        this.map.series.add(lineSeries);
    }

    public addSymbolSeriesWith(data: any[]) {
        const symbolSeries = new IgxGeographicSymbolSeriesComponent ();
        symbolSeries.dataSource = data;
        symbolSeries.markerType = MarkerType.Circle;
        symbolSeries.latitudeMemberPath = "lat";
        symbolSeries.longitudeMemberPath = "lon";
        symbolSeries.markerBrush = "#aad3df";
        symbolSeries.markerOutline = "rgb(73, 73, 73)";
        symbolSeries.thickness = 1;
        symbolSeries.tooltipTemplate = this.pointTooltipTemplate;
        this.map.series.add(symbolSeries);
    }
}
```
