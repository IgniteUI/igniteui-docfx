---
제목: 데이터 차트 구성 요소 - 네이티브 Angular | Ignite UI for Angular
mentionedTypes: ['DataChart']
_description: Ignite UI for Angular 데이터 차트는 축, 마커, 시리즈, 범례 및 주석 레이어의 모듈 식 디자인을 제공하는 차트 구성 요소입니다. 이 차트를 사용하면 동일한 차트 영역에 이러한 시각적 요소의 인스턴스를 여러 개 만들어 복합 차트 뷰를 만들 수 있습니다.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Grid Component, Angular Chart Component, Angular Data Chart
_language: kr
---

## 데이터 차트

`IgxDataChart`는 축, 마커, 시리즈, 범례 및 주석 레이어의 모듈식 디자인을 제공하는 차트 컴포넌트입니다. 이 차트를 사용하면 복합 차트 뷰를 생성하기 위해 동일한 차트 영역에 시각적 요소의 인스턴스를 여러 개 생성할 수 있습니다.

### 데모

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-overview-iframe" src='{environment:demosBaseUrl}/charts/data-chart-overview' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-overview-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기
    </button>
</div>

<div class="divider--half"></div>

### 의존성

차트 패키지를 설치할 때 코어 패키지도 설치해야 합니다.

-   **npm install --save igniteui-angular-core**
-   **npm install --save igniteui-angular-charts**

### 필요한 모듈

`IgxDataChart`에는 다음 모듈이 필요합니다:

```typescript
// data chart's modules required for all series:
import { IgxDataChartModule } from 'igniteui-angular-charts/ES5/igx-data-chart-module';
import { IgxDataChartCoreModule } from 'igniteui-angular-charts/ES5/igx-data-chart-core--module';
// scatter series' modules:
import { IgxDataChartScatterCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-scatter-core-module";
import { IgxDataChartScatterModule } from "igniteui-angular-charts/ES5/igx-data-chart-scatter-module";
// scatter series elements:
import { IgxNumericYAxis } from "igniteui-angular-charts/ES5/igx-numeric-y-axis";
import { IgxNumericXAxis } from "igniteui-angular-charts/ES5/igx-numeric-x-axis";
import { IgxBubbleSeries } from "igniteui-angular-charts/ES5/igx-bubble-series";
import { IgxSizeScale } from "igniteui-angular-charts/ES5/igx-size-scale";
import { IgxValueBrushScale } from "igniteui-angular-charts/ES5/igx-value-brush-scale";

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

<div class="divider--half"></div>

### 지원되는 시리즈

`IgxDataChart` 제어는 [카테고리 시리즈](datachart_series_types_category.md), [금융 시리즈](datachart_series_types_financial.md), [폴라 시리즈](datachart_series_types_polar.md), [레이디얼 시리즈](datachart_series_types_radial.md), [범위 시리즈](datachart_series_types_range.md), [분산 시리즈](datachart_series_types_scatter_bubble.md), [모양 시리즈](datachart_series_types_shape.md)를 포함하여 65가지 이상의 시리즈를 지원합니다. 지원되는 시리즈 유형 및 사용 방법의 목록은 [시리즈](datachart_series_types.md) 항목을 참조하십시오.

### 지원되는 축

`IgxDataChart` 제어는 특정 시리즈 유형에 사용할 수 있도록 다양한 유형의 축을 지원합니다. 다음 표에는 시리즈 유형에 사용할 수 있는 축이 열거되어 있습니다.   이러한 축 유형을 사용하는 방법에 대한 자세한 것은 [시리즈](datachart_series_types.md) 및 [축](datachart_axis_types.md) 항목을 참조하십시오.

| 축 유형               | 지원되는 시리즈 유형                                                                                                                                                                                                                                |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CategoryYAxis      | [카테고리 시리즈](datachart_series_types_category.md) 그룹의 `BarSeries`만                                                                                                                                                                            |
| CategoryXAxis      | 모든 [금융 시리즈](datachart_series_types_financial.md), [범위 시리즈](datachart_series_types_range.md),  [카테고리 시리즈](datachart_series_types_category.md)(`BarSeries` 제외)                                                                               |
| TimeXAxis          | 모든 [금융 시리즈](datachart_series_types_financial.md), [범위 시리즈](datachart_series_types_range.md),  [카테고리 시리즈](datachart_series_types_category.md)(`BarSeries` 제외)                                                                               |
| OrdinalTimeXAxis   | 모든 [금융 시리즈](datachart_series_types_financial.md), [범위 시리즈](datachart_series_types_range.md),  [카테고리 시리즈](datachart_series_types_category.md)(`BarSeries` 제외)                                                                               |
| PercentChangeYAxis | 모든 [금융 시리즈](datachart_series_types_financial.md), [범위 시리즈](datachart_series_types_range.md), [카테고리 시리즈](datachart_series_types_category.md), [분산 시리즈](datachart_series_types_scatter_bubble.md), [모양 시리즈](datachart_series_types_shape.md) |
| NumericYAxis       | 모든 [분산 시리즈](datachart_series_types_scatter_bubble.md), [모양 시리즈](datachart_series_types_shape.md), [금융 시리즈](datachart_series_types_financial.md), [범위 시리즈](datachart_series_types_range.md), [카테고리 시리즈](datachart_series_types_category.md) |
| NumericXAxis       | [카테고리 시리즈](datachart_series_types_category.md) 그룹의 모든 [분산 시리즈](datachart_series_types_scatter_bubble.md), [모양 시리즈](datachart_series_types_shape.md) 및 `BarSeries`                                                                          |
| NumericAngleAxis   | 모든 [폴라 시리즈](datachart_series_types_polar.md)                                                                                                                                                                                               |
| NumericRadiusAxis  | 모든 [폴라 시리즈](datachart_series_types_polar.md) 및 [레이디얼 시리즈](datachart_series_types_radial.md)                                                                                                                                                |
| CategoryAngleAxis  | 모든 [레이디얼 시리즈](datachart_series_types_radial.md)                                                                                                                                                                                            |

### 사용 방법

데이터 차트 모듈을 가져 왔으므로 다음 단계는 차트를 데이터에 바인딩하는 것입니다. 모든 시리즈는 올바르게 렌더링하기 위해 특정 수와 유형의 데이터 열을 요구하며 [데이터 소스](datachart_data_sources.md) 항목에서 각 계열 유형에 대한 데이터 소스를 찾을 수 있습니다.

다음 코드 조각은 분산 `BubbleSeries`를 생성하고 이것을 [SampleScatterStats](datachart_data_sources_stats.md) 데이터에 바인딩하는 방법을 보여줍니다.

> [!NOTE]
>
> 차트 컴포넌트에 데이터 소스를 설정하면 모든 시리즈에 적용되지만 데이터 차트에 추가된 각 시리즈에 다른 데이터 소스를 설정할 수도 있습니다.

```html
 <igx-data-chart [dataSource]="data"
                 width="700px"
                 height="500px">
    <igx-numeric-x-axis name="xAxis" isLogarithmic="true" />
    <igx-numeric-y-axis name="yAxis" isLogarithmic="true" />
    <igx-bubble-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        xMemberPath="Population"
        yMemberPath="GdpTotal"
        radiusMemberPath="GdpPerCapita"
        [dataSource]="data"  />
 </igx-data-chart>
```

<div class="divider--half"></div>

### 추가 리소스

-   [축 유형](datachart_axis_types.md)
-   [축 공유](datachart_axis_sharing.md)
-   [축 설정](datachart_axis_settings.md)
-   [차트 범례](datachart_chart_legends.md)
-   [시리즈 마커](datachart_series_markers.md)
-   [시리즈 유형](datachart_series_types.md)
