---
제목: 데이터 차트 구성 요소 - 네이티브 Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Data Chart is a charting component that provides modular design of axis, markers, series, legend, and annotation layers. With this chart, you can create multiple instances of these visual elements in the same chart plot area in order to create composite chart views.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Chart Component, Angular Data Chart
_language: kr
---

## 범위 시리즈

이 항목에서는 `IgxDataChart` 제어의 다양한 범위 시리즈 유형에 대해 설명하며, 범위 시리즈는 2개의 숫자 데이터 열을 사용하여 수평 방향으로 늘어선 데이터 점 컬렉션으로 렌더링하는 차트 시리즈 그룹입니다(예: `IgxRangeAreaSeriesComponent`)

### 데모

<div class="sample-container" style="height: 400px">
    <iframe id="data-chart-type-range-series-iframe" src='{environment:demosBaseUrl}/charts/data-chart-type-range-series' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-range-series-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기
    </button>
</div>

<div class="divider--half"></div>

### 범위 시리즈의 유형

다음 표에는 모든 유형의 범위 시리즈와 그 설명이 표시되어 있습니다.

| Series Name                     | Description                                                                                                                                                |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `IgxRangeAreaSeriesComponent`   | Displays filled region/area between pairs of High/Low values of data points. Categories are arranged horizontally and values – vertically.                 |
| `IgxRangeColumnSeriesComponent` | Displays discrete data in separate columns between High/Low values of data points. Categories are arranged horizontally and values are plotted vertically. |

### 필요한 축

`IgxDataChart` 제어는 다양한 유형의 축을 제공하지만 범위 시리즈에는 다음의 축 유형만 사용할 수 있습니다.

| Series Type                     | YAxis Type                 | XAxis Type                                                                           |
| ------------------------------- | -------------------------- | ------------------------------------------------------------------------------------ |
| `IgxRangeAreaSeriesComponent`   | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`, `IgxOrdinalTimeXAxisComponent`, `IgxTimeXAxisComponent` |
| `IgxRangeColumnSeriesComponent` | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`, `IgxOrdinalTimeXAxisComponent`, `IgxTimeXAxisComponent` |

### 필요한 데이터

범위 시리즈에는 다음과 같은 데이터 요구 사항이 있습니다:

-   데이터 소스는 배열 또는 데이터 항목 목록이어야 함
-   데이터 소스에는 하나 이상의 데이터 항목이 포함되어야 하며 그렇지 않을 경우에는 차트가 범위 시리즈를 렌더링하지 않습니다.
-   모든 데이터 항목에는 카테고리 축(예: `IgxCategoryXAxisComponent`)의 `Label` 속성에 매핑해야 하는 하나 이상의 라벨 데이터 열(문자열 또는 날짜 시간)이 포함되어 있어야 함
-   모든 데이터 항목에는 범위 시리즈의 `HighMemberPath` 및 `LowMemberPath` 속성(예: `IgxRangeAreaSeriesComponent`)을 사용하여 매핑하는 숫자 데이터 열이 2개 이상 있어야 합니다

[SampleRangeData](datachart_data_sources_range.md)는 위의 데이터 요구 사항을 충족하는 데이터 소스로 사용할 수 있습니다.

```typescript
this.state = { dataSource: SampleRangeData.create() }
```

### 필요한 모듈

범위 시리즈를 사용하려면 로딩하는 동안 앱에 다음 모듈을 불러와야 합니다.

```typescript
// in app.module.ts file

// axis' modules:
import { IgxCategoryXAxis } from "igniteui-angular-charts/ES5/igx-category-x-axis";
import { IgxNumericYAxis } from "igniteui-angular-charts/ES5/igx-numeric-y-axis";
// series' modules:
import { IgxRangeAreaSeries } from "igniteui-angular-charts/ES5/igx-range-area-series";
import { IgxRangeColumnSeries } from "igniteui-angular-charts/ES5/igx-range-column-series";
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

### 코드 예제

이 코드는 `IgxRangeColumnSeriesComponent`로 데이터 차트의 인스턴스를 생성하고 데이터 소스에 바인딩하는 방법을 보여줍니다.

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-category-x-axis name="xAxis" label="Year" />
    <igx-numeric-y-axis  name="yAxis" />
    <igx-range-column-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        highMemberPath="High"
        lowMemberPath="Low" />
 </igx-data-chart>
```

위의 코드를 사용하면 `IgxRangeColumnSeriesComponent`를 대체하여 `IgxRangeAreaSeriesComponent`를 생성할 수도 있습니다.

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
