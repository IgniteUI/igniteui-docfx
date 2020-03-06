---
제목: 데이터 차트 구성 요소 - 네이티브 Angular | Ignite UI for Angular
_description: Ignite UI for Angular 데이터 차트는 축, 마커, 시리즈, 범례 및 주석 레이어의 모듈 식 디자인을 제공하는 차트 구성 요소입니다. 이 차트를 사용하면 동일한 차트 영역에 이러한 시각적 요소의 인스턴스를 여러 개 만들어 복합 차트 뷰를 만들 수 있습니다.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Chart Component, Angular Data Chart
_language: kr
---

## Radial Series

이 항목에서는 [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) 제어에서 다양한 유형의 레이디얼 시리즈에 대해 설명합니다. 레이디얼 시리즈는 [카테고리 시리즈](data-chart-type-category-series.md)처럼 가로 라인에 따라 늘어나는 것이 아니라 데이터를 원형으로 감싼 데이터 점 컬렉션으로 데이터를 렌더링하는 시리즈의 그룹입니다. 레이디얼 시리즈는 차트 범위의 최소값에서 최대값까지 카테고리 목록을 매핑하고 [카테고리 시리즈](data-chart-type-category-series.md)의 동일한 카테고리 그룹화 메커니즘을 지원합니다.

### 데모

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-type-radial-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-radial-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-radial-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">STACKBLITZ 에서 보기
    </button>
</div>

<div class="divider--half"></div>

### 레이디얼 시리즈의 유형

다음 표에는 모든 유형의 레이디얼 시리즈와 그 설명이 표시되어 있습니다.

| 시리즈 이름                                                                                                                                                       | 설명                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| [`IgxRadialAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialareaseriescomponent.html) | 레이디얼(각도/반경) 좌표에 있는 데이터 점을 연결하는 직선 집합으로 둘러싸여 채워진 폴리곤을 표시합니다.         |
| `RadialSplineAreaSeries`                                                                                                                                     | 레이디얼(각도/반경) 좌표에 있는 데이터 점을 연결하는 매끄럽고/보간된 선 집합으로 둘러싸여 채워진 폴리곤을 표시합니다. |
| `RadialSplineSeries`                                                                                                                                         | 레이디얼(각도/반경) 좌표에 있는 데이터 점을 연결하는 매끄럽고/보간된 선 집합을 표시합니다.                |
| `RadialScatterSeries`                                                                                                                                        | 레이디얼(각도/반경) 좌표에 있는 데이터 점을 나타내는 마커 집합을 표시합니다.                        |
| [`IgxRadialLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradiallineseriescomponent.html) | 레이디얼(각도/반경) 좌표에 있는 데이터 점을 연결하는 직선 집합을 표시합니다.                        |

### 필요한 축

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) 제어는 다양한 유형의 축을 제공하지만 레이디얼 시리즈에는 다음의 축 유형만 사용할 수 있습니다.

| 시리즈 유형                                                                                                                                                           | Radius Axis 유형                                                                                                                                                 | Angle Axis 유형                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`IgxRadialAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialareaseriescomponent.html)     | [`IgxNumericRadiusAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericradiusaxiscomponent.html) | [`IgxCategoryAngleAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryangleaxiscomponent.html) |
| [`IgxRadialPieSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialpieseriescomponent.html)       | [`IgxNumericRadiusAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericradiusaxiscomponent.html) | [`IgxCategoryAngleAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryangleaxiscomponent.html) |
| [`IgxRadialColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialcolumnseriescomponent.html) | [`IgxNumericRadiusAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericradiusaxiscomponent.html) | [`IgxCategoryAngleAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryangleaxiscomponent.html) |
| [`IgxRadialLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradiallineseriescomponent.html)     | [`IgxNumericRadiusAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericradiusaxiscomponent.html) | [`IgxCategoryAngleAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryangleaxiscomponent.html) |

### 필요한 데이터

레이디얼 시리즈에는 다음과 같은 데이터 요구 사항이 있습니다:

-   데이터 소스는 배열 또는 데이터 항목 목록이어야 함
-   데이터 소스에는 하나 이상의 데이터 항목이 포함되어야 하며 그렇지 않을 경우에는 차트가 레이디얼 시리즈를 렌더링하지 않습니다.
-   모든 데이터 항목에는 카테고리 축(예: [`IgxCategoryAngleAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryangleaxiscomponent.html))의 `Label` 속성에 매핑해야 하는 하나 이상의 라벨 데이터 열(문자열 또는 날짜 시간)이 포함되어 있어야 함
-   모든 데이터 항목에는 카테고리 시리즈(예: [`IgxRadialAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialareaseriescomponent.html))의 `ValueMemberPath` 속성을 사용하여 매핑하는 숫자 데이터 열이 하나 이상 있어야 합니다

[SampleRadialData](data-chart-data-sources-radial.md)는 위의 데이터 요구 사항을 충족하는 데이터 소스로 사용할 수 있습니다.

```ts
this.state = { dataSource: SampleRadialData.create() }
```

### 필요한 모듈

<!-- Angular -->

레이디얼 시리즈를 사용하려면 로딩하는 동안 앱에 다음 모듈을 불러와야 합니다.

```ts
// axis' modules:
import { IgxCategoryAngleAxis } from 'igniteui-angular-charts';
import { IgxNumericRadiusAxis } from 'igniteui-angular-charts';
// series modules:
import { IgxRadialAreaSeries } from 'igniteui-angular-charts';
import { IgxRadialLineSeries } from 'igniteui-angular-charts';
import { IgxRadialPieSeries } from 'igniteui-angular-charts';
import { IgxRadialColumnSeries } from 'igniteui-angular-charts';
// data chart's modules:

import { IgxDataChartCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartRadialCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartRadialModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxDataChartCoreModule,
        IgxDataChartRadialCoreModule,
        IgxDataChartRadialModule,
        // ...
    ]
})
```

### 코드 예제

이 코드는 [`IgxRadialAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialareaseriescomponent.html)로 데이터 차트의 인스턴스를 생성하고 데이터 소스에 바인딩하는 방법을 보여줍니다.

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-category-angle-axis name="angleAxis" label="Department"></igx-category-angle-axis>
    <igx-numeric-radius-axis name="radiusAxis"></igx-numeric-radius-axis>
    <igx-radial-pie-series
        name="series1"
        valueMemberPath="Budget"
        valueAxisName="radiusAxis"
        angleAxisName="angleAxis">
    </igx-radial-pie-series>
 </igx-data-chart>
```

또한, 위의 코드를 사용하여 [`IgxRadialAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialareaseriescomponent.html)를 렌더링할 레이디얼 시리즈의 이름으로 대체하여 다른 유형의 시리즈를 생성할 수도 있습니다.

### 추가 리소스

-   [축 유형](data-chart-axis-types.md)
-   [축 공유](data-chart-axis-sharing.md)
-   [차트 범례](data-chart-legends.md)
-   [시리즈 마커](data-chart-series-markers.md)
-   [시리즈 유형](data-chart-series-types.md)
