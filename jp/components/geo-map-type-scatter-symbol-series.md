---
title: Angular マップ | データ可視化ツール | 散布図記号シリーズ | データ バインディング | インフラジスティックス
_description: インフラジスティックスの Angular マップの散布図記号シリーズを使用して、地理的コンテキストでポイントまたはマーカーを使用し、地理空間データを表示します。Ignite UI for Angular マップ シーリズについての詳細を表示します。
_keywords: Angular map, scatter symbol series, Ignite UI for Angular, Infragistics, Angular マップ, 散布図記号シリーズ, インフラジスティックス
mentionedTypes: ['XamGeographicMap']
_language: ja
---

# Angular 散布図記号シリーズの使用

Angular マップ コンポーネントの [`IgxGeographicSymbolSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicsymbolseriescomponent.html) を使用して、地理的コンテキストでポイントまたはマーカーを使用して地理空間データを表示します。地理的シリーズのこのタイプは、都市、空港、地震または興味のあるポイントなどの地理的位置のコレクションを描画するためにしばしば使用されます。

## Angular 散布図記号シリーズの使用の例

<div class="sample-container loading" style="height: 500px">
    <iframe id="geo-map-type-scatter-symbol-series-iframe" src='{environment:dvDemosBaseUrl}/maps/geo-map-type-scatter-symbol-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular 散布図記号シリーズの使用の例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-type-scatter-symbol-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>


<div class="divider--half"></div>

## データ要件

マップコンポーネントの他の種類の地理的シリーズと同様に、[`IgxGeographicSymbolSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicsymbolseriescomponent.html) には、オブジェクトの配列にバインドできる `ItemsSource` プロパティがあります。さらに、このオブジェクトの各データ項目は、地理的位置（経度と緯度）を保存する 2 つの数値データ列を持つ必要があります。これらのデータ列は、[`latitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicsymbolseriescomponent.html#latitudememberpath) および [`longitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicsymbolseriescomponent.html#longitudememberpath) プロパティにマップされます。[`IgxGeographicSymbolSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicsymbolseriescomponent.html) は、これらのマップされたデータ列の値を使用して、地理マップコンポーネントにシンボル要素をプロットします。

## コード スニペット

以下のコードは、`ShapeDataSource` を使用してシェイプ ファイルからロードした都市の場所に [`IgxGeographicSymbolSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicsymbolseriescomponent.html) をバインドする方法を示します。

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
            <div *ngIf="item.org;then hasOrg; else notOrg" ></div>
            <span [style.color]="series.brush">
                {{item.name}}
            </span>
            <br/>
            <span>
                Population {{item.pop}} M
            </span>
        </div>
        <ng-template #hasOrg>
            <span>
                Population {{item.pop}} M
            </span>
            <br />
        </ng-template>
         <ng-template #notOrg>
            <span>
            </span>
         </ng-template>
</ng-template>
```

```ts
import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { MarkerType } from 'igniteui-angular-charts';
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxGeographicSymbolSeriesComponent } from "igniteui-angular-maps";
import { WorldLocations } from "../../utilities/WorldLocations";

@Component({
  selector: "app-map-geographic-scatter-symbol-series",
  styleUrls: ["./map-geographic-scatter-symbol-series.component.scss"],
  templateUrl: "./map-geographic-scatter-symbol-series.component.html"
})

export class MapTypeScatterSymbolSeriesComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;
    @ViewChild("template")
    public tooltip: TemplateRef<object>;

    constructor() {
    }

    public ngAfterViewInit(): void {
      this.addSeriesWith(WorldLocations.getCities(), "Gray");
      this.addSeriesWith(WorldLocations.getCapitals(), "rgb(32, 146, 252)");
    }

    public addSeriesWith(locations: any[], brush: string) {
        const symbolSeries = new IgxGeographicSymbolSeriesComponent ();
        symbolSeries.dataSource = locations;
        symbolSeries.markerType = MarkerType.Circle;
        symbolSeries.latitudeMemberPath = "lat";
        symbolSeries.longitudeMemberPath = "lon";
        symbolSeries.markerBrush  = "White";
        symbolSeries.markerOutline = brush;
        symbolSeries.tooltipTemplate = this.tooltip;
        this.map.series.add(symbolSeries);
    }
}
```
