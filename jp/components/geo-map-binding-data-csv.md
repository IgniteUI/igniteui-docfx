---
title: Angular マップ | データ可視化ツール | CSV データのバインディング | インフラジスティックス
_description: インフラジスティックスの Angular マップを使用して、ビュー モデルの地理的位置や CSV ファイルからロードされた地理的位置を含むデータの表示方法について説明します。Ignite UI for Angular マップのサンプルを是非お試しください!
_keywords: Angular map, plot data, Ignite UI for Angular, Infragistics, data binding, Angular マップ, プロット データ, データ バインディング, インフラジスティックス
mentionedTypes: ['XamGeographicMap']
_language: ja
---

# Angular CSV ファイルを地理的な場所にバインド

Ignite UI for Angular Map コンポーネントを使用すると、さまざまな種類のファイルからロードされた地理データをプロットできます。たとえば、カンマ区切り値 (CSV) ファイルから地理的な場所を読み込むことができます。

## Angular CSV ファイルを地理的な場所にバインドの例

<div class="sample-container loading" style="height: 500px">
    <iframe id="geo-map-binding-data-csv-iframe" src='{environment:dvDemosBaseUrl}/maps/geo-map-binding-data-csv' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular CSV ファイルを地理的な場所にバインドの例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-binding-data-csv-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>


<div class="divider--half"></div>

## データ例

CSVファイルからのデータの例:

```ts
City,Lat,Lon,State,Code,County,Density,Population
New York,40.7856,-74.0093,New Jersey,NJ,Hudson,21057,54227
Dundee,42.5236,-76.9775,New York,NY,Yates,579,1650
```

## コード スニペット

以下のコードは、マップコンポーネント内の [`IgxGeographicHighDensityScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographichighdensityscatterseriescomponent.html) を、ロードされた CSV ファイルから作成された地理的位置を含むオブジェクトの配列にバインドします。

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
            County: {{item.county}}
        </span>
    <br/>
        <span>
            Population: {{item.density}} K
        </span>
    </div>
</ng-template>
```

```ts
import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { IgxGeographicHighDensityScatterSeriesComponent } from "igniteui-angular-maps";
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';

@Component({
  selector: "app-map-binding-geographic-csv_files",
  styleUrls: ["./map-binding-geographic-csv_files.component.scss"],
  templateUrl: "./map-binding-geographic-csv_files.component.html"
})

export class MapBindingDataCsvComponent implements AfterViewInit {

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
        fetch("assets/Data/UsaCities.csv")
            .then((response) => response.text())
            .then((data) => this.onDataLoaded(data));
    }

    public onDataLoaded(csvData: string) {
        const csvLines = csvData.split("\n");

        // parsing CSV data and creating geographic locations
        const geoLocations: any[] = [];
        for (let i = 1; i < csvLines.length; i++) {
            const columns = csvLines[i].split(",");
            const location = {
                code: columns[4],
                county: columns[5],
                density: Number(columns[6]),
                latitude:  Number(columns[1]),
                longitude: Number(columns[2]),
                name:  columns[0],
                population: Number(columns[7]),
                state: columns[3]
            };
            geoLocations.push(location);
        }

        // creating HD series with loaded data
        const geoSeries = new IgxGeographicHighDensityScatterSeriesComponent();
        geoSeries.dataSource = geoLocations;
        geoSeries.latitudeMemberPath  = "latitude";
        geoSeries.longitudeMemberPath = "longitude";
        geoSeries.heatMaximumColor = "Red";
        geoSeries.heatMinimumColor = "Black";
        geoSeries.heatMinimum = 0;
        geoSeries.heatMaximum = 5;
        geoSeries.pointExtent = 1;
        geoSeries.tooltipTemplate = this.tooltip;
        geoSeries.mouseOverEnabled = true;

        // adding symbol series to the geographic amp
        this.map.series.add(geoSeries);
    }
}
```
