---
title: Angular マップ | データ可視化ツール | シェイプ スタイリング | 条件付き書式 | インフラジスティックス
_description: インフラジスティックスの Angular マップの図形シリーズにカスタム スタイルを適用する方法について説明します。Ignite UI for Angular マップ チュートリアルを是非お試しください!
_keywords: Angular map, custom styling, Ignite UI for Angular, Infragistics, conditional formatting, shape styling, Angular マップ, カスタム スタイル設定, インフラジスティックス, 条件付き書式, シェイプ スタイリング
mentionedTypes: ['XamGeographicMap', 'GeographicShapeSeries']
_language: ja
---

# Angular 地理シェイプ シリーズのスタイル設定

このトピックでは、Angular [`IgxGeographicMapComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicmapcomponent.html) で [`IgxGeographicShapeSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicshapeseriescomponent.html) にカスタム スタイリングを適用する方法を説明します。

## Angular 地理シェイプ シリーズのスタイル設定の例

<div class="sample-container loading" style="height: 500px">
    <iframe id="geo-map-shape-styling-iframe" src='{environment:dvDemosBaseUrl}/maps/geo-map-shape-styling' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular 地理シェイプ シリーズのスタイル設定の例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="geo-map-shape-styling-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>


<div class="divider--half"></div>

## 必要なインポート

シェイプ スタイリングでは、次のクラスをインポートする必要があります。

```ts
import { IgxGeographicShapeSeries } from 'igniteui-angular-maps';
import { IgxStyleShapeEventArgs } from 'igniteui-angular-charts';
import { IgxShapeDataSource } from 'igniteui-angular-core';
import { IgxShapefileRecord } from 'igniteui-angular-core';
```

次のコード例は、シェイプ スタイリングを設定する 4 つの異なる方法を提供する [シェイプ スタイリング ユーティリティ](geo-map-resources-shape-styling-utility.md) ファイルを使用していることに注意してください。

-   [シェイプ比較スタイリング](#シェイプ比較スタイリング)
-   [シェイプ ランダム スタイリング](#シェイプ-ランダム-スタイリング)
-   [シェイプ範囲スタイリング](#シェイプ範囲スタイリング)
-   [シェイプ スケール スタイリング](#シェイプ-スケール-スタイリング)

## シェイプ ランダム スタイリング

このコード スニペットは、**ShapeRandomStyling** のインスタンスを作成して、塗りつぶし色をランダムに世界の国に割り当てます。

```ts
import { ShapeRandomStyling } from './ShapeStylingUtility';
// ...

this.shapeRandomStyling = new ShapeRandomStyling();
this.shapeRandomStyling.shapeStrokeColors = ['Black'];
this.shapeRandomStyling.shapeFillColors = ['#8C23D1', '#0E9759', '#B4D336', '#F2A464', '#D74545', 'DodgerBlue'];

this.geoSeries = new IgxGeographicShapeSeries();
this.geoSeries.styleShape = this.onStylingShape;
// ...
public onStylingShape(s: IgxGeographicShapeSeries, args: IgxStyleShapeEventArgs) {
    const itemRecord = args.item as IgxShapefileRecord;
    const shapeStyle = this.ShapeRandomStyling.getStyle(itemRecord);
    args.shapeOpacity = shapeStyle.opacity;
    args.shapeFill = shapeStyle.fill;
    args.shapeStroke = shapeStyle.stroke;
    args.shapeStrokeThickness = shapeStyle.strokeThickness;
}
```

## シェイプ スケール スタイリング

このコード スニペットは、**ShapeScaleStyling** のインスタンスを作成して、対数スケールでスケーリングされた母集団に基づいて塗りつぶし色を国に割り当てます。

```ts
import { ShapeScaleStyling } from './ShapeStylingUtility';
// ...
this.shapeScaleStyling = new ShapeScaleStyling();
this.shapeScaleStyling.itemMinimumValue = 5000;
this.shapeScaleStyling.itemMaximumValue = 2000000000; // 2 Billions
this.shapeScaleStyling.itemMemberPath = 'Population';
this.shapeScaleStyling.isLogarithmic = true;
this.shapeScaleStyling.defaultFill = 'Gray';
this.shapeScaleStyling.shapeStrokeColors = ['Black'];
this.shapeScaleStyling.shapeFillColors = ['DodgerBlue', 'yellow', '#c2f542', '#e8c902', '#e8b602', '#e87902', 'brown'];

this.geoSeries = new IgxGeographicShapeSeries();
this.geoSeries.styleShape = this.onStylingShape;
// ...
public onStylingShape(s: IgxGeographicShapeSeries, args: IgxStyleShapeEventArgs) {
    const itemRecord = args.item as IgxShapefileRecord;
    const shapeStyle = this.shapeScaleStyling.getStyle(itemRecord);
    args.shapeOpacity = shapeStyle.opacity;
    args.shapeFill = shapeStyle.fill;
    args.shapeStroke = shapeStyle.stroke;
    args.shapeStrokeThickness = shapeStyle.strokeThickness;
}
```

## シェイプ範囲スタイリング

このコード スニペットは、**ShapeRangeStyling** のインスタンスを作成して、人口の範囲に基づいて国に色を割り当てます。

```ts
import { ShapeRangeStyling } from './ShapeStylingUtility';
// ...
this.shapeRangeStyling = new ShapeRangeStyling();
this.shapeRangeStyling.defaultFill = 'Gray';
this.shapeRangeStyling.itemMemberPath = 'Population';
this.shapeRangeStyling.ranges = [
    { fill: 'yellow', minimum: 5000, maximum: 10000000, },        // 5 K - 10 M
    { fill: 'orange', minimum: 10000000, maximum: 100000000, },   // 10 M - 100 M
    { fill: 'red',    minimum: 100000000, maximum: 500000000, },  // 100 M - 500 M
    { fill: 'brown',  minimum: 500000000, maximum: 2000000000, }, // 500 M - 2 B
];

this.geoSeries = new IgxGeographicShapeSeries();
this.geoSeries.styleShape = this.onStylingShape;
// ...
public onStylingShape(s: IgxGeographicShapeSeries, args: IgxStyleShapeEventArgs) {
    const itemRecord = args.item as IgxShapefileRecord;
    const shapeStyle = this.shapeRangeStyling.getStyle(itemRecord);
    args.shapeOpacity = shapeStyle.opacity;
    args.shapeFill = shapeStyle.fill;
    args.shapeStroke = shapeStyle.stroke;
    args.shapeStrokeThickness = shapeStyle.strokeThickness;
}
```

## シェイプ比較スタイリング

このコード スニペットは、**ShapeComparisonStyling** のインスタンスを作成して、世界の地域名に基づいて国に色を割り当てます。

```ts
import { ShapeComparisonStyling } from './ShapeStylingUtility';
this.shapeComparisonStyling = new ShapeComparisonStyling();
this.shapeComparisonStyling.defaultFill = 'Gray';
this.shapeComparisonStyling.itemMemberPath = 'Region';
this.shapeComparisonStyling.itemMappings = [
    { fill: 'Red', itemValue: 'Eastern Europe' },
    { fill: 'Red', itemValue: 'Central Asia' },
    { fill: 'Red', itemValue: 'Eastern Asia' },
    { fill: 'Orange', itemValue: 'Southern Asia' },
    { fill: 'Orange', itemValue: 'Middle East' },
    { fill: 'Orange', itemValue: 'Northern Africa' },
    { fill: 'Yellow', itemValue: 'Eastern Africa' },
    { fill: 'Yellow', itemValue: 'Western Africa' },
    { fill: 'Yellow', itemValue: 'Middle Africa' },
    { fill: 'Yellow', itemValue: 'Southern Africa' },
    { fill: 'DodgerBlue', itemValue: 'Central America' },
    { fill: 'DodgerBlue', itemValue: 'Northern America' },
    { fill: 'DodgerBlue', itemValue: 'Western Europe' },
    { fill: 'DodgerBlue', itemValue: 'Southern Europe' },
    { fill: 'DodgerBlue', itemValue: 'Northern Europe' },
    { fill: '#22c928', itemValue: 'South America' },
    { fill: '#b64fff', itemValue: 'Melanesia' },
    { fill: '#b64fff', itemValue: 'Micronesia' },
    { fill: '#b64fff', itemValue: 'Polynesia' },
    { fill: '#b64fff', itemValue: 'Australia' },
];

this.geoSeries = new IgxGeographicShapeSeries();
this.geoSeries.styleShape = this.onStylingShape;
// ...
public onStylingShape(s: IgxGeographicShapeSeries, args: IgxStyleShapeEventArgs) {
    const itemRecord = args.item as IgxShapefileRecord;
    const shapeStyle = this.shapeComparisonStyling.getStyle(itemRecord);
    args.shapeOpacity = shapeStyle.opacity;
    args.shapeFill = shapeStyle.fill;
    args.shapeStroke = shapeStyle.stroke;
    args.shapeStrokeThickness = shapeStyle.strokeThickness;
}
```
