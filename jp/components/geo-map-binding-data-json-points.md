---
title: Map |データ可視化ツール|Ignite UI for Angular |ジオグラフィック JSON データ|インフラジスティックス
_description: マップは、ビューモデルの地理的位置や JSON ファイルからロードされた地理的位置を含むデータを表示できます。詳細については、デモ、依存関係、使用方法、およびツールバーを参照してください。
_keywords: map, Ignite UI for Angular, インフラジスティックス
mentionedTypes: ['XamGeographicMap']
_language: ja
---

## JSON ファイルを地理的な場所にバインド

Ignite UI for Angular Map マップは、さまざまな種類のファイルからロードされた地理データをプロットできます。たとえば、JavaScript Object Notation (JSON) ファイルから地理的位置をロードできます。

### デモ

<div class="sample-container loading" style="height: 500px">
    <iframe id="geo-map-binding-data-json-points-iframe" src='{environment:dvDemosBaseUrl}/maps/geo-map-binding-data-json-points' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-binding-data-json-points-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

### データ例

JSON ファイルからのデータの例:

```ts
[
 { "n": "Sydney Island", "y": -16.68972, "x": 139.45917 },
 { "n": "Sydney Creek", "y": -16.3, "x": 128.95 },
 { "n": "Mount Sydney", "y": -21.39864, "x": 121.193 },
 // ...
]
```

### コード スニペット

次のコードは、マップコンポーネント内の GeographicHighDensityScatterSeries を、ロードされた JSON ファイルから作成された地理的位置を含むオブジェクトの配列にバインドします。

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
            <span >
                {{item.city}}
            </span>
        </div>
</ng-template>
```

```ts
import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { MarkerType } from "igniteui-angular-charts/ES5/MarkerType";
import { IgxGeographicMapComponent } from "igniteui-angular-maps/ES5/igx-geographic-map-component";
import { IgxGeographicSymbolSeriesComponent } from "igniteui-angular-maps/ES5/igx-geographic-symbol-series-component";

@Component({
  selector: "app-map-binding-geographic-json-files",
  styleUrls: ["./map-binding-geographic-json-files.component.scss"],
  templateUrl: "./map-binding-geographic-json-files.component.html"
})

export class MapBindingDataJsonPointsComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;
    @ViewChild("template")
    public tooltip: TemplateRef<object>;
    constructor() {
    }

    public ngAfterViewInit(): void {
        this.componentDidMount();
    }

    public componentDidMount() {
        // fetching JSON data with geographic locations from public folder
        fetch("assets/Data/WorldCities.json")
            .then((response) => response.json())
            .then((data) => this.onDataLoaded(data));
    }

    public onDataLoaded(jsonData: any[]) {
        const geoLocations: any[] = [];
        // parsing JSON data and using only cities that are capitals
        for (const jsonItem of jsonData) {
            if (jsonItem.cap) {
                const location = {
                    city: jsonItem.name,
                    country: jsonItem.country,
                    latitude: jsonItem.lat,
                    longitude: jsonItem.lon,
                    population: jsonItem.pop
                };
                geoLocations.push(location);
            }
        }

        // creating symbol series with loaded data
        const geoSeries = new IgxGeographicSymbolSeriesComponent();
        geoSeries.dataSource = geoLocations;
        geoSeries.markerType = MarkerType.Circle;
        geoSeries.latitudeMemberPath  = "latitude";
        geoSeries.longitudeMemberPath = "longitude";
        geoSeries.markerBrush = "LightGray";
        geoSeries.markerOutline = "Black";
        geoSeries.tooltipTemplate = this.tooltip;

        // adding symbol series to the geographic amp
        this.map.series.add(geoSeries);
    }
}
```
