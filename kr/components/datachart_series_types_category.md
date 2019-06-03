---
제목: 데이터 차트 구성 요소 - 네이티브 Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Data Chart is a charting component that provides modular design of axis, markers, series, legend, and annotation layers. With this chart, you can create multiple instances of these visual elements in the same chart plot area in order to create composite chart views.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Chart Component, Angular Data Chart
_language: kr
---

## 카테고리 시리즈

이 항목에서는 `IgxDataChart` 제어에서 다양한 유형의 카테고리 시리즈에 대해 설명합니다. 카테고리 시리즈는 데이터를 가져 와서 가로 라인(예: `IgxColumnSeriesComponent`) 또는 세로 라인(예: `BarSeries`)을 따라 늘어나는 데이터 점 컬렉션으로 렌더링하는 차트 시리즈의 가장 간단하고 일반적인 형태의 그룹입니다.

### 데모

<div class="sample-container" style="height: 400px">
    <iframe id="data-chart-type-category-series-iframe" src='{environment:demosBaseUrl}/charts/data-chart-type-category-series' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-category-series-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기
    </button>
</div>

<div class="divider--half"></div>

### 카테고리 시리즈의 유형

다음 표에는 모든 유형의 카테고리 시리즈와 그 설명이 표시되어 있습니다.

| Series Name                    | Description                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `IgxAreaSeriesComponent`       | Displays a set of evenly placed points connected by a line below which area is filled in. Categories are arranged horizontally and values – vertically.                                                                                                                                                                                                                                      |
| `BarSeries`                    | Displays discrete data in separate rows. Unlike other series, categories are arranged vertically and values are plotted horizontally. In other words, this series is like `IgxColumnSeriesComponent` but rotated 90 degrees clockwise.                                                                                                                                                       |
| `IgxColumnSeriesComponent`     | Displays discrete data in separate columns. Categories are arranged horizontally and values are plotted vertically. Used for showing the changes in a data series over time or for comparing multiple items.                                                                                                                                                                                 |
| `IgxLineSeriesComponent`       | Displays a set of evenly placed points connected by straight lines. Used for showing data or information that changes continuously over time. Useful when emphasizing the relationship between the points is required.                                                                                                                                                                       |
| `IgxPointSeriesComponent`      | Displays markers at locations of data points without connecting them by lines. Shape of these markers can be changed using `markerType` property                                                                                                                                                                                                                                             |
| `IgxSplineSeriesComponent`     | Displays a set of evenly placed points connected by smooth lines that are generated using spline interpolation for improved presentation of data.                                                                                                                                                                                                                                            |
| `IgxSplineAreaSeriesComponent` | Same as the `IgxAreaSeriesComponent` type with the added feature of spline interpolation and smoothing for improved presentation of data.                                                                                                                                                                                                                                                    |
| `IgxStepLineSeriesComponent`   | Same as the `IgxLineSeriesComponent` type, except that the values are connected by continuous vertical and horizontal lines forming a step-like progression instead of a straight line tracing the shortest path between points.                                                                                                                                                             |
| `IgxStepAreaSeriesComponent`   | Same as the `IgxStepLineSeriesComponent` type, except that the area below values is filled out instead of continuous vertical and horizontal lines forming a step-like progression for the changes between data points.                                                                                                                                                                      |
| `IgxWaterfallSeriesComponent`  | Displays a set of points as vertical columns that show the difference between values of consecutive data points. The columns are color coded for distinguishing between positive and negative changes in value. Categories are arranged horizontally and values are plotted vertically. Used for showing the changes in a consecutive data points over time or for comparing multiple items. |

### 필요한 축

`IgxDataChart` 제어는 다양한 유형의 축을 제공하지만 카테고리 시리즈에는 다음의 축 유형만 사용할 수 있습니다.

| Series Type                    | YAxis Type                 | XAxis Type                                                                           |
| ------------------------------ | -------------------------- | ------------------------------------------------------------------------------------ |
| `BarSeries`                    | `CategoryYAxis`            | `IgxNumericXAxisComponent`                                                           |
| `IgxAreaSeriesComponent`       | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`, `IgxOrdinalTimeXAxisComponent`, `IgxTimeXAxisComponent` |
| `IgxColumnSeriesComponent`     | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`, `IgxOrdinalTimeXAxisComponent`, `IgxTimeXAxisComponent` |
| `IgxLineSeriesComponent`       | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`, `IgxOrdinalTimeXAxisComponent`, `IgxTimeXAxisComponent` |
| `IgxSplineSeriesComponent`     | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`, `IgxOrdinalTimeXAxisComponent`, `IgxTimeXAxisComponent` |
| `IgxSplineAreaSeriesComponent` | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`, `IgxOrdinalTimeXAxisComponent`, `IgxTimeXAxisComponent` |
| `IgxStepAreaSeriesComponent`   | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`, `IgxOrdinalTimeXAxisComponent`, `IgxTimeXAxisComponent` |
| `IgxStepLineSeriesComponent`   | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`, `IgxOrdinalTimeXAxisComponent`, `IgxTimeXAxisComponent` |
| `IgxWaterfallSeriesComponent`  | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`, `IgxOrdinalTimeXAxisComponent`, `IgxTimeXAxisComponent` |

### 필요한 데이터

카테고리 시리즈에는 다음과 같은 데이터 요구 사항이 있습니다:

-   데이터 소스는 배열 또는 데이터 항목 목록이어야 함
-   데이터 소스에는 하나 이상의 데이터 항목이 포함되어야 하며 그렇지 않을 경우에는 차트가 카테고리 시리즈를 렌더링하지 않습니다.
-   모든 데이터 항목에는 카테고리 축(예: `IgxCategoryXAxisComponent`)의 `Label` 속성에 매핑해야 하는 하나 이상의 데이터 열(문자열 또는 날짜 시간)이 포함되어 있어야 함
-   모든 데이터 항목에는 카테고리 시리즈(예: `IgxLineSeriesComponent`)의 `ValueMemberPath` 속성을 사용하여 매핑하는 숫자 데이터 열이 하나 이상 있어야 합니다

[SampleCategoryData](datachart_data_sources_category.md)는 위의 데이터 요구 사항을 충족하는 데이터 소스로 사용할 수 있습니다.

```typescript
this.state = { dataSource: SampleCategoryData.create() }
```

### 필요한 모듈

카테고리 시리즈에는 다음과 같은 모듈이 필요합니다:

```typescript
// axis' modules:
import { IgxCategoryXAxis } from "igniteui-angular-charts/ES5/igx-category-x-axis";
import { IgxCategoryYAxis } from "igniteui-angular-charts/ES5/igx-category-y-axis";
import { IgxNumericYAxis } from "igniteui-angular-charts/ES5/igx-numeric-y-axis";
import { IgxNumericXAxis } from "igniteui-angular-charts/ES5/igx-numeric-x-axis";
// series' modules:
import { IgxAreaSeries } from "igniteui-angular-charts/ES5/igx-area-series";
import { IgxBarSeries } from "igniteui-angular-charts/ES5/igx-bar-series";
import { IgxColumnSeries } from "igniteui-angular-charts/ES5/igx-column-series";
import { IgxLineSeries } from "igniteui-angular-charts/ES5/igx-line-series";
import { IgxPointSeries } from "igniteui-angular-charts/ES5/igx-point-series";
import { IgxSplineSeries } from "igniteui-angular-charts/ES5/igx-spline-series";
import { IgxSplineAreaSeries } from "igniteui-angular-charts/ES5/igx-spline-area-series";
import { IgxStepAreaSeries } from "igniteui-angular-charts/ES5/igx-step-area-series";
import { IgxStepLineSeries } from "igniteui-angular-charts/ES5/igx-step-line-series";
import { IgxWaterfallSeries } from "igniteui-angular-charts/ES5/igx-waterfall-series";
// data chart's modules:
import { IgxDataChartModule } from 'igniteui-angular-charts/ES5/igx-data-chart-module';
import { IgxDataChartCoreModule } from 'igniteui-angular-charts/ES5/igx-data-chart-core--module';
import { IgxDataChartCategoryModule } from 'igniteui-angular-charts/ES5/igx-data-chart-category--module';

@NgModule({
    imports: [
        // ...
        IgxDataChartModule,
        IgxDataChartCoreModule,
        IgxDataChartCategoryModule,
        // ...
    ]
})
```

### 코드 예제 - 열 시리즈

이 코드는 `IgxColumnSeriesComponent`로 데이터 차트의 인스턴스를 생성하고 데이터 소스에 바인딩하는 방법을 보여줍니다.

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-category-x-axis name="xAxis" label="Year" />
    <igx-numeric-y-axis  name="yAxis" />
    <igx-column-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        valueMemberPath="USA" />
 </igx-data-chart>
```

### 코드 예제 - 바 시리즈

또한, 위의 코드를 사용하여 `IgxColumnSeriesComponent`를 렌더링할 카테고리 시리즈의 이름으로 대체하여 다른 유형의 시리즈를 생성할 수도 있습니다. 단, `BarSeries`는 다른 유형의 축이 필요하기 때문에 이 규칙에서 예외입니다. 이 코드는 `BarSeries`로 데이터 차트의 인스턴스를 생성하고 데이터 소스에 바인딩하는 방법을 보여줍니다.

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-numeric-x-axis  name="xAxis" />
    <igx-category-y-axis name="yAxis" label="Year" />
    <igx-bar-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        valueMemberPath="USA" />
 </igx-data-chart>
```

### 추가 리소스

-   [축 유형](datachart_axis_types.md)
-   [축 공유](datachart_axis_sharing.md)
-   [차트 범례](datachart_chart_legends.md)
-   [시리즈 주석](datachart_series_annotations.md)
-   [시리즈 강조 표시](datachart_series_highlighting.md)
-   [시리즈 마커](datachart_series_markers.md)
-   [시리즈 도구 설명](datachart_series_tooltips.md)
-   [시리즈 추세선](datachart_series_trendlines.md)
-   [시리즈 유형](datachart_series_types.md)
