---
제목: 데이터 차트 구성 요소 - 네이티브 Angular | Ignite UI for Angular
_description: The Ignite UI for Angular 데이터 차트는 축, 마커, 시리즈, 범례 및 주석 레이어의 모듈 식 디자인을 제공하는 차트 구성 요소입니다. 이 차트를 사용하면 동일한 차트 영역에 이러한 시각적 요소의 인스턴스를 여러 개 만들어 복합 차트 뷰를 만들 수 있습니다.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Chart Component, Angular Data Chart
_language: kr
---

## 분산 모양 시리즈

이 항목에서는 [`IgxDataChart`](datachart_series_types_shape.md) 제어에서 다양한 유형의 모양 시리즈에 대해 설명합니다. 분산 모양 시리즈는 모양 배열(배열 또는 X/Y 좌표 배열)을 가져와서 데카르트(x, y) 좌표계에서 폴리곤([`IgxScatterPolygonSeriesComponent`](datachart_series_types_shape.md))  또는 폴리라인([`IgxScatterPolylineSeriesComponent`](datachart_series_types_shape.md))의 컬렉션으로 렌더링하는 차트 시리즈 그룹입니다.

분산 모양 시리즈는 과학 데이터의 강조 표시 영역으로 자주 사용되거나 다이어그램, 청사진 또는 건물의 평면도를 플롯하는 데 사용할 수 있습니다.

### 데모

<div class="sample-container loading" style="height: 400px">
    <iframe id="data-chart-type-shape-series-iframe" src='{environment:demosBaseUrl}/charts/data-chart-type-shape-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-shape-series-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기
    </button>
</div>

<div class="divider--half"></div>

### 모양 시리즈의 유형

다음 표에는 모든 유형의 모양 시리즈와 그 설명이 표시되어 있습니다.

| 시리즈 이름                                                                                                                | 설명                                                                          |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| [`IgxScatterPolygonSeriesComponent`](datachart_series_types_shape.md)   | `ShapeMemberPath` 속성에 매핑된 각 도형의 폴리곤을 표시합니다. 국경과 같은 도형을 렌더링할 때 유용합니다.        |
| [`IgxScatterPolylineSeriesComponent`](datachart_series_types_shape.md) | `ShapeMemberPath` 속성에 매핑된 각 도형의 폴리라인을 표시합니다. 네트워크 그래프와 같이 단선을 렌더링할 때 유용합니다. |

### 필요한 축

[`IgxDataChart`](datachart_series_types_shape.md) 제어는 다양한 유형의 축을 제공하지만 분산 모양 시리즈에는 다음의 축 유형만 사용할 수 있습니다.

| 시리즈 유형                                                                                                                | YAxis 유형                                                                                            | XAxis 유형                                                                                            |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| [`IgxScatterPolygonSeriesComponent`](datachart_series_types_shape.md)   | [`IgxNumericYAxisComponent`](datachart_series_types_shape.md) | [`IgxNumericXAxisComponent`](datachart_series_types_shape.md) |
| [`IgxScatterPolylineSeriesComponent`](datachart_series_types_shape.md) | [`IgxNumericYAxisComponent`](datachart_series_types_shape.md) | [`IgxNumericXAxisComponent`](datachart_series_types_shape.md) |

### 필요한 데이터

분산 모양 시리즈에는 다음과 같은 데이터 요구 사항이 있습니다:

-   데이터 소스는 배열 또는 데이터 항목 목록이어야 함
-   데이터 소스에는 하나 이상의 데이터 항목이 포함되어야 하며 그렇지 않을 경우에는 차트가 분산형 시리즈를 렌더링하지 않습니다.
-   모든 데이터 항목에는 분산 모양 시리즈의 `ShapeMemberPath` 속성(예: [`IgxScatterPolygonSeriesComponent`](datachart_series_types_shape.md))에 매핑되어야 하는 하나의 모양 데이터 열(배열 또는 X/Y 좌표 배열)이 있어야 합니다

[SampleShapeData](datachart_data_sources_shape.md)는 위의 데이터 요구 사항을 충족하는 데이터 소스로 사용할 수 있습니다.

```ts
this.state = { dataSource: SampleShapeData.create() }
```

### 필요한 모듈

분산 폴리곤 시리즈에는 다음과 같은 모듈이 필요합니다:

```ts
// axis' modules:
import { IgxNumericYAxis } from "igniteui-angular-charts/ES5/igx-numeric-y-axis";
import { IgxNumericXAxis } from "igniteui-angular-charts/ES5/igx-numeric-x-axis";
// series' modules:
import { IgxScatterPolygonSeries } from "igniteui-angular-charts/ES5/igx-scatter-polygon-series";
import { IgxScatterPolylineSeries } from "igniteui-angular-charts/ES5/igx-scatter-polyline-series";
// data chart's modules:
import { IgxDataChartModule } from "igniteui-angular-charts/ES5/igx-data-chart-module";
import { IgxDataChartCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-core-module";
import { IgxDataChartShapeCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-shape-core-module";
import { IgxDataChartShapeModule } from "igniteui-angular-charts/ES5/igx-data-chart-shape-module";

@NgModule({
    imports: [
        // ...
        IgxDataChartModule,
        IgxDataChartCoreModule,
        IgxDataChartShapeCoreModule,
        IgxDataChartShapeModule,
    ]
})
export class AppModule { /* ... */ }
```

### 코드 예제

이 코드는 `ShapeColumnSeries`로 데이터 차트의 인스턴스를 생성하고 데이터 소스에 바인딩하는 방법을 보여줍니다.

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-numeric-x-axis name="xAxis"></igx-numeric-x-axis>
    <igx-numeric-y-axis name="yAxis"></igx-numeric-y-axis>
    <igx-scatter-polygon-series
        name="series1"
        shapeMemberPath="Points"
        title="House Floor Plan"
        brush="Gray"
        outline="Black">
    </igx-scatter-polygon-series>
 </igx-data-chart>
```

위의 코드를 사용하면 [`IgxScatterPolylineSeriesComponent`](datachart_series_types_shape.md)를 대체하여 [`IgxScatterPolygonSeriesComponent`](datachart_series_types_shape.md)를 생성할 수도 있습니다.

### 추가 리소스

-   [축 유형](datachart_axis_types.md)
-   [축 공유](datachart_axis_sharing.md)
-   [차트 범례](datachart_chart_legends.md)
-   [시리즈 마커](datachart_series_markers.md)
-   [시리즈 유형](datachart_series_types.md)
