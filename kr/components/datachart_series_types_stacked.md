---
제목: 데이터 차트 구성 요소 - 네이티브 Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Data Chart is a charting component that provides modular design of axis, markers, series, legend, and annotation layers. With this chart, you can create multiple instances of these visual elements in the same chart plot area in order to create composite chart views.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Chart Component, Angular Data Chart
_language: kr
---

## 스택 시리즈

이 항목에서는 `IgxDataChart` 제어에서 다양한 유형의 스택 시리즈에 대해 설명합니다. 스택 시리즈는 데이터를 가져 와서 가로 라인(예: `IgxColumnSeriesComponent`) 또는 세로 라인(예: `BarSeries`)을 따라 늘어나는 데이터 점 컬렉션으로 렌더링하는 차트 시리즈의 가장 간단하고 일반적인 형태의 그룹입니다.

### 데모

<div class="sample-container" style="height: 500px">
    <iframe id="data-chart-overview-iframe" src='{environment:demosBaseUrl}/charts/data-chart-type-stacked-series' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-overview-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기
    </button>
</div>

<div class="divider--half"></div>

스택된 각 시리즈에는　`StackedFragmentSeries` 요소를 배치할 수 있는 자체 `IgxSeriesComponent` 컬렉션이 있습니다. 이러한 프라그먼트는 차트의 실제 렌더링을 구성하며 `ValueMemberPath`를 허용하는 요소입니다.

### 스택 시리즈의 유형

다음 표에는 모든 유형의 카테고리 시리즈와 그 설명이 표시되어 있습니다.

| Series Name                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `StackedAreaSeries`          | This series type is rendered using a collection of points connected by line segments (`StackedFragmentSeries`) with the area below the line filled in and stacked on top of each other. Each stacked fragment in the collection represents one visual element in each stack. Each stack can contain both positive and negative values. All positive values are grouped on the positive side of the y-axis, and all negative values are grouped on the negative side of the y-axis.                      |
| `StackedBarSeries`           | Displays discrete data in bars stacked next to each other. Categories are arranged vertically and values are stacked horizontally. This series is usually used for showing the changes in a data series over time or for comparing multiple items.                                                                                                                                                                                                                                                      |
| `StackedColumnSeries`        | Displays discrete data in columns stacked on top of each other. Categories are arranged horizontally and values are stacked vertically. This series is usually used for showing the changes in a data series over time or for comparing multiple items.                                                                                                                                                                                                                                                 |
| `StackedLineSeries`          | This series type is rendered using a collection of points connected by line segments (`StackedFragmentSeries`) that are stacked on top of each other. Each stacked fragment in the collection represents one visual element in each stack. Each stack can contain both positive and negative values. All positive values are grouped on the positive side of the y-axis, and all negative values are grouped on the negative side of the y-axis.                                                        |
| `StackedSplineAreaSeries`    | This series type is rendered using a collection of points connected by smooth curves of spline segments (`StackedFragmentSeries`) with the area below the spline filled in and stacked on top of each other. Each stacked fragment in the collection represents one visual element in each stack. Each stack can contain both positive and negative values. All positive values are grouped on the positive side of the y-axis, and all negative values are grouped on the negative side of the y-axis. |
| `StackedSplineSeries`        | This series type is rendered using a collection of points connected by smooth curves of spline segments (`StackedFragmentSeries`) that are stacked on top of each other. Each stacked fragment in the collection represents one visual element in each stack. Each stack can contain both positive and negative values. All positive values are grouped on the positive side of the y-axis, and all negative values are grouped on the negative side of the y-axis.                                     |
| `Stacked100AreaSeries`       | This series is identical to the `StackedAreaSeries` in all aspects except in their treatment of the values on y-axis. Instead of presenting a direct representation of the data, the `Stacked100AreaSeries` presents the data in terms of percent of the sum of all values in a data point.                                                                                                                                                                                                             |
| `Stacked100BarSeries`        | This series is the same as the `StackedBarSeries` type with the added feature of presenting data in terms of percent of all values in category instead of presenting a direct representation of the data.                                                                                                                                                                                                                                                                                               |
| `Stacked100ColumnSeries`     | This series is the same as the `StackedColumnSeries` type with the added feature of presenting data in terms of percent of all values in category instead of presenting a direct representation of the data.                                                                                                                                                                                                                                                                                            |
| `Stacked100LineSeries`       | This series is identical to the `StackedLineSeries` in all aspects except in their treatment of the values on y-axis. Instead of presenting a direct representation of the data, the `Stacked100LineSeries` presents the data in terms of percent of the sum of all values in a data point.                                                                                                                                                                                                             |
| `Stacked100SplineAreaSeries` | This series is identical to the `StackedSplineAreaSeries` in all aspects except in their treatment of the values on y-axis. Instead of presenting a direct representation of the data, the `Stacked100SplineAreaSeries` presents the data in terms of percent of the sum of all values in a data point.                                                                                                                                                                                                 |
| `Stacked100SplineSeries`     | This series is identical to the `StackedSplineSeries` in all aspects except in their treatment of the values on y-axis. Instead of presenting a direct representation of the data, the `Stacked100SplineSeries` presents the data in terms of percent of the sum of all values in a data point.                                                                                                                                                                                                         |

### 필요한 축

`IgxDataChart` 제어는 다양한 유형의 축을 제공하지만 스택 시리즈에는 다음의 축 유형만 사용할 수 있습니다.

| Series Type                  | YAxis Type                 | XAxis Type                                                                           |
| ---------------------------- | -------------------------- | ------------------------------------------------------------------------------------ |
| `StackedAreaSeries`          | `CategoryYAxis`            | `IgxNumericXAxisComponent`                                                           |
| `StackedBarSeries`           | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`, `IgxOrdinalTimeXAxisComponent`, `IgxTimeXAxisComponent` |
| `StackedColumnSeries`        | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`, `IgxOrdinalTimeXAxisComponent`, `IgxTimeXAxisComponent` |
| `StackedLineSeries`          | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`, `IgxOrdinalTimeXAxisComponent`, `IgxTimeXAxisComponent` |
| `StackedSplineAreaSeries`    | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`, `IgxOrdinalTimeXAxisComponent`, `IgxTimeXAxisComponent` |
| `StackedSplineSeries`        | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`, `IgxOrdinalTimeXAxisComponent`, `IgxTimeXAxisComponent` |
| `Stacked100AreaSeries`       | `CategoryYAxis`            | `IgxNumericXAxisComponent`                                                           |
| `Stacked100BarSeries`        | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`, `IgxOrdinalTimeXAxisComponent`, `IgxTimeXAxisComponent` |
| `Stacked100ColumnSeries`     | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`, `IgxOrdinalTimeXAxisComponent`, `IgxTimeXAxisComponent` |
| `Stacked100LineSeries`       | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`, `IgxOrdinalTimeXAxisComponent`, `IgxTimeXAxisComponent` |
| `Stacked100SplineAreaSeries` | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`, `IgxOrdinalTimeXAxisComponent`, `IgxTimeXAxisComponent` |
| `Stacked100SplineSeries`     | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`, `IgxOrdinalTimeXAxisComponent`, `IgxTimeXAxisComponent` |

### 필요한 데이터

스택 시리즈에는 다음과 같은 데이터 요구 사항이 있습니다:

-   데이터 소스는 배열 또는 데이터 항목 목록이어야 함
-   데이터 소스에는 하나 이상의 데이터 항목이 포함되어야 하며 그렇지 않을 경우에는 차트가 스택 시리즈를 렌더링하지 않습니다.
-   모든 데이터 항목에는 카테고리 축(예: `IgxCategoryXAxisComponent`)의 `Label` 속성에 매핑해야 하는 하나 이상의 데이터 열(문자열 또는 날짜 시간)이 포함되어 있어야 함
-   모든 데이터 항목에는스택 시리즈의  `시리즈` 컬렉션에 추가할 `StackedFragmentSeries`의　`ValueMemberPath` 속성을 사용하여 매핑해야 하는 숫자 데이터 열이 적어도 하나 이상 포함되어야 합니다.

### 필요한 모듈

스택 시리즈에는 다음과 같은 모듈이 필요합니다:

```typescript
// axis' modules:
import { IgxCategoryXAxis } from "igniteui-angular-charts/ES5/igx-category-x-axis";
import { IgxCategoryYAxis } from "igniteui-angular-charts/ES5/igx-category-y-axis";
import { IgxNumericYAxis } from "igniteui-angular-charts/ES5/igx-numeric-y-axis";
import { IgxNumericXAxis } from "igniteui-angular-charts/ES5/igx-numeric-x-axis";
// series' modules:
import { IgxStackedAreaSeries } from "igniteui-angular-charts/ES5/igx-stacked-area-series";
import { IgxStackedBarSeries } from "igniteui-angular-charts/ES5/igx-stacked-bar-series";
import { IgxStackedColumnSeries } from "igniteui-angular-charts/ES5/igx-stacked-column-series";
import { IgxStackedLineSeries } from "igniteui-angular-charts/ES5/igx-stacked-line-series";
import { IgxStackedSplineAreaSeries } from "igniteui-angular-charts/ES5/igx-stacked-spline-area-series";
import { IgxStackedSplineSeries } from "igniteui-angular-charts/ES5/igx-stacked-spline-series";
import { IgxStacked100AreaSeries } from "igniteui-angular-charts/ES5/igx-stacked-100-area-series";
import { IgxStacked100BarSeries } from "igniteui-angular-charts/ES5/igx-stacked-100-bar-series";
import { IgxStacked100ColumnSeries } from "igniteui-angular-charts/ES5/igx-stacked-100-column-series";
import { IgxStacked100LineSeries } from "igniteui-angular-charts/ES5/igx-stacked-100-line-series";
import { IgxStacked100SplineAreaSeries } from "igniteui-angular-charts/ES5/igx-stacked-100-spline-area-series"
import { IgxStacked100SplineSeries } from "igniteui-angular-charts/ES5/igx-stacked-100-spline-series";
import { IgxStacked100SplineAreaSeries } from "igniteui-angular-charts/ES5/igx-stacked-100-spline-area-series";
// data chart's modules:
import { IgxDataChartModule } from 'igniteui-angular-charts/ES5/igx-data-chart-module';
import { IgxDataChartCoreModule } from 'igniteui-angular-charts/ES5/igx-data-chart-core--module';
import { IgxDataChartCategoryModule } from 'igniteui-angular-charts/ES5/igx-data-chart-category--module';
import { IgxDataChartStackedModule } from "igniteui-angular-charts/ES5/igx-data-chart-stacked-module";

@NgModule({
    imports: [
        // ...
        IgxDataChartModule,
        IgxDataChartCoreModule,
        IgxDataChartCategoryModule,
        IgxDataChartStackedModule
        // ...
    ]
})
```

### 코드 예제 - 스택 열 시리즈

이 코드는 `StackedColumnSeries`로 데이터 차트의 인스턴스를 생성하고 데이터 소스에 바인딩하는 방법을 보여줍니다. 또한, 위의 코드를 사용하여 `StackedColumnSeries`를 렌더링할 카테고리 시리즈의 이름으로 대체하여 다른 유형의 시리즈를 생성할 수도 있습니다.

```html
<igx-data-chart #chart height="100%" width="100%" [dataSource]="data">
  <igx-category-x-axis #xAxis label="Country"></igx-category-x-axis>
  <igx-numeric-y-axis #yAxis></igx-numeric-y-axis>

  <igx-stacked-column-series [xAxis]="xAxis" [yAxis]="yAxis">
    <igx-stacked-fragment-series valueMemberPath="Coal"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Hydro"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Nuclear"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Gas"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Oil"></igx-stacked-fragment-series>
  </igx-stacked-column-series>

</igx-data-chart>
```

### 코드 예제 - 스택 바 시리즈

 `StackedBarSeries`는 `CategoryYAxis` 및 `IgxNumericXAxisComponent`를 사용한다는 점에서 다른 유형의 축을 필요로 하기 때문에 `StackedColumnSeries`를 다른 시리즈 이름으로 대체할 수 있다는 규칙에서 예외입니다. 이 코드는 `StackedBarSeries`로 데이터 차트의 인스턴스를 생성하고 데이터 소스에 바인딩하는 방법을 보여줍니다.

```html
<igx-data-chart #chart height="100%" width="100%" [dataSource]="data">
  <igx-numeric-x-axis #xAxis></igx-numeric-x-axis>
  <igx-category-y-axis #yAxis label="Country"></igx-category-y-axis>

  <igx-stacked-bar-series [xAxis]="xAxis" [yAxis]="yAxis">
    <igx-stacked-fragment-series valueMemberPath="Coal"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Hydro"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Nuclear"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Gas"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Oil"></igx-stacked-fragment-series>
  </igx-stacked-bar-series>

</igx-data-chart>
```
