---
제목: 데이터 차트 구성 요소 - 네이티브 Angular | Ignite UI for Angular
_description: Ignite UI for Angular 데이터 차트는 축, 마커, 시리즈, 범례 및 주석 레이어의 모듈 식 디자인을 제공하는 차트 구성 요소입니다. 이 차트를 사용하면 동일한 차트 영역에 이러한 시각적 요소의 인스턴스를 여러 개 만들어 복합 차트 뷰를 만들 수 있습니다.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Chart Component, Angular Data Chart
_language: kr
---

## 분산 마커 시리즈

이 항목에서는 [`IgxDataChart`](datachart_series_types_scatter_marker.md) 제어에서 다양한 유형의 분산 마커 시리즈에 대해 설명합니다. 분산 마커 시리즈는 데카르트(x, y) 좌표계를 사용하여 각 데이터 항목의 마커를 플롯하는 시리즈 그룹입니다.

### 데모

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-type-scatter-series-iframe" src='{environment:demosBaseUrl}/charts/data-chart-type-scatter-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-scatter-series-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기
    </button>
</div>

<div class="divider--half"></div>

### 분산 마커 시리즈의 유형

다음 표에는 모든 유형의 분산 마커 시리즈와 그 설명이 표시되어 있습니다.

| 시리즈 이름                                                                                                            | 설명                                                                 |
| ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [`IgxScatterSeriesComponent`](datachart_series_types_scatter_marker.md)             | ```XMemberPath`` 와``` \`YMemberPath`` 속성에 매핑 된 데이터 포인트의 표식을 표시합니다. |
| [`IgxScatterLineSeriesComponent`](datachart_series_types_scatter_marker.md)     | 마커 외에도 각 데이터 포인트 사이에 직선을 표시합니다.                                    |
| [`IgxScatterSplineSeriesComponent`](datachart_series_types_scatter_marker.md) | 마커 외에도 각 데이터 포인트 사이에 보간 된 부드러운 선을 표시합니다.                           |

### 필요한 축

[`IgxDataChart`](datachart_series_types_scatter_marker.md) 제어는 다양한 유형의 축을 제공하지만 분산 마커 시리즈에는 다음의 축 유형만 사용할 수 있습니다.

| 시리즈 유형                                                                                                            | YAxis 유형                                                                                            | XAxis 유형                                                                                            |
| ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| [`IgxScatterSeriesComponent`](datachart_series_types_scatter_marker.md)             | [`IgxNumericYAxisComponent`](datachart_series_types_scatter_marker.md) | [`IgxNumericXAxisComponent`](datachart_series_types_scatter_marker.md) |
| [`IgxScatterLineSeriesComponent`](datachart_series_types_scatter_marker.md)     | [`IgxNumericYAxisComponent`](datachart_series_types_scatter_marker.md) | [`IgxNumericXAxisComponent`](datachart_series_types_scatter_marker.md) |
| [`IgxScatterSplineSeriesComponent`](datachart_series_types_scatter_marker.md) | [`IgxNumericYAxisComponent`](datachart_series_types_scatter_marker.md) | [`IgxNumericXAxisComponent`](datachart_series_types_scatter_marker.md) |

### 필요한 데이터

분산 마커 시리즈에는 다음과 같은 데이터 요구 사항이 있습니다:

-   데이터 소스는 배열 또는 데이터 항목 목록이어야 함
-   데이터 소스에는 하나 이상의 데이터 항목이 포함되어야 하며 그렇지 않을 경우에는 차트가 분산형 시리즈를 렌더링하지 않습니다.
-   모든 데이터 항목에는 `XMemberPath` 및 `YMemberPath` 속성에 매핑되는 2개의 숫자 데이터 열이 있어야 합니다

[SampleScatterStats](datachart_data_sources_stats.md)는 위의 데이터 요구 사항을 충족하는 데이터 소스로 사용할 수 있습니다.

```ts
this.state = { dataSource: SampleScatterStats.getCountries() }
```

### 필요한 모듈

분산 마커 시리즈에는 다음과 같은 모듈이 필요합니다:

```ts
// axis' modules:
import { IgxNumericYAxis } from "igniteui-angular-charts/ES5/igx-numeric-y-axis";
import { IgxNumericXAxis } from "igniteui-angular-charts/ES5/igx-numeric-x-axis";
// series' modules:
import { IgxScatterSeries } from "igniteui-angular-charts/ES5/igx-scatter-series";
import { IgxScatterLineSeries } from "igniteui-angular-charts/ES5/igx-scatter-line-series";
import { IgxScatterSplineSeries } from "igniteui-angular-charts/ES5/igx-scatter-spline-series";
import { MarkerType } from "igniteui-angular-charts/ES5/MarkerType";
// data chart's modules:
import { IgxDataChartModule } from "igniteui-angular-charts/ES5/igx-data-chart-module";
import { IgxDataChartCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-core-module";
import { IgxDataChartScatterCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-scatter-core-module";
import { IgxDataChartScatterModule } from "igniteui-angular-charts/ES5/igx-data-chart-scatter-module";

@NgModule({
    imports: [
        // ...
        IgxDataChartModule,
        IgxDataChartCoreModule,
        IgxDataChartScatterCoreModule,
        IgxDataChartScatterModule,
    ]
})
export class AppModule { /* ... */ }
```

### 코드 예제

이 코드는 [`IgxScatterSeriesComponent`](datachart_series_types_scatter_marker.md)로 데이터 차트의 인스턴스를 생성하고 데이터 소스에 바인딩하는 방법을 보여줍니다.

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-numeric-x-axis name="xAxis" isLogarithmic="true"></igx-numeric-x-axis>
    <igx-numeric-y-axis name="yAxis" isLogarithmic="true"></igx-numeric-y-axis>
    <igx-scatter-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        xMemberPath="Population"
        yMemberPath="GdpTotal">
    </igx-scatter-series>
 </igx-data-chart>
```

위의 코드를 사용하면 [`IgxScatterSeriesComponent`](datachart_series_types_scatter_marker.md)를 대체하여 [`IgxScatterLineSeriesComponent`](datachart_series_types_scatter_marker.md) 또는 [`IgxScatterSplineSeriesComponent`](datachart_series_types_scatter_marker.md)를 생성할 수도 있습니다.

### 시리즈 외관

[Markers](datachart_series_markers.md) 속성을 사용하여 마커 외관을 사용자 지정할 수 있으며, 마커 사이의 선 비주얼의 `Brush` 및 `Thickness`를 변경할 수 있습니다. 아래 코드는 이러한 속성을 사용하는 방법을 보여 줍니다.

```html
<igx-scatter-series
 name="series1"
 brush="Blue"
 markerType="Square"
 markerBrush="White"
 markerOutline="Blue"
 thickness="2">
</igx-scatter-series>
```

### 추가 리소스

-   [축 유형](datachart_axis_types.md)
-   [축 공유](datachart_axis_sharing.md)
-   [차트 범례](datachart_chart_legends.md)
-   [시리즈 마커](datachart_series_markers.md)
-   [시리즈 도구 설명](datachart_series_tooltips.md)
-   [시리즈 추세선](datachart_series_trendlines.md)
-   [시리즈 유형](datachart_series_types.md)
