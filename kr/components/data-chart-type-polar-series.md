---
제목: 데이터 차트 구성 요소 - 네이티브 Angular | Ignite UI for Angular
_description: Ignite UI for Angular 데이터 차트는 축, 마커, 시리즈, 범례 및 주석 레이어의 모듈 식 디자인을 제공하는 차트 구성 요소입니다. 이 차트를 사용하면 동일한 차트 영역에 이러한 시각적 요소의 인스턴스를 여러 개 만들어 복합 차트 뷰를 만들 수 있습니다.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Chart Component, Angular Data Chart
_language: kr
---

# Angular 폴라 시리즈

이 항목에서는 [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) 제어에서 다양한 유형의 폴라 시리즈에 대해 설명합니다. 폴라 시리즈는 데카르트(x, y) 좌표계 대신 폴라(각도, 반경) 좌표계를 사용하여 차트에 데이터를 플롯하는 일련의 시리즈입니다. 즉, 폴라 시리즈는 [분산 시리즈](data-chart-type-scatter-point-series.md)의 개념을 사용하여 수평선을 따라 늘어서는 것이 아니라 원을 중심으로 감쌉니다. 이 시리즈 그룹은 폴라 좌표계를 사용하여 여러 개의 서로 다른 데이터 시리즈 내의 항목 간의 관계를 표시하는 데 사용됩니다.

폴라 시리즈는 데이터의 불균등한 간격이나 데이터 클러스터에 주의를 끕니다. 이것은 과학적인 데이터(예: 바람의 방향과 속도, 자기장의 강도와 방향, 태양계 내의 물체 위치)를 플롯하는 데 사용되며, 수집된 데이터와 예상 결과의 편차를 강조 표시할 수 있습니다.

## 데모

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-polar-chart-types"
           github-src="charts/data-chart/polar-chart-types">
</code-view>

<div class="divider--half"></div>

## 폴라 시리즈의 유형

데이터 차트는 다음과 같은 유형의 폴라 시리즈를 지원합니다:

| 시리즈 이름                                                                                                                                                                 | 설명                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| [`IgxPolarAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarareaseriescomponent.html)             | 폴라(각도/반경) 좌표에 있는 데이터 점을 연결하는 직선 집합으로 둘러싸여 채워진 폴리곤을 표시합니다.         |
| [`IgxPolarSplineAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarsplineareaseriescomponent.html) | 폴라(각도/반경) 좌표에 있는 데이터 점을 연결하는 매끄럽고/보간된 선 집합으로 둘러싸여 채워진 폴리곤을 표시합니다. |
| [`IgxPolarSplineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarsplineseriescomponent.html)         | 폴라(각도/반경) 좌표에 있는 데이터 점을 연결하는 매끄럽고/보간된 선 집합을 표시합니다.                |
| [`IgxPolarScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarscatterseriescomponent.html)       | 폴라(각도/반경) 좌표에 있는 데이터 점을 나타내는 마커 집합을 표시합니다.                        |
| [`IgxPolarLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarlineseriescomponent.html)             | 폴라(각도/반경) 좌표에 있는 데이터 점을 연결하는 직선 집합을 표시합니다.                        |

## 필요한 축

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) 제어는 다양한 유형의 축을 제공하지만 폴라 시리즈에는 다음의 축 유형만 사용할 수 있습니다.

| 시리즈 유형                                                                                                                                                                 | Radius Axis 유형                                                                                                                                                 | Angle Axis 유형                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`IgxPolarAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarareaseriescomponent.html)             | [`IgxNumericRadiusAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericradiusaxiscomponent.html) | [`IgxNumericAngleAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericangleaxiscomponent.html) |
| [`IgxPolarSplineAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarsplineareaseriescomponent.html) | [`IgxNumericRadiusAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericradiusaxiscomponent.html) | [`IgxNumericAngleAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericangleaxiscomponent.html) |
| [`IgxPolarSplineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarsplineseriescomponent.html)         | [`IgxNumericRadiusAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericradiusaxiscomponent.html) | [`IgxNumericAngleAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericangleaxiscomponent.html) |
| [`IgxPolarScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarscatterseriescomponent.html)       | [`IgxNumericRadiusAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericradiusaxiscomponent.html) | [`IgxNumericAngleAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericangleaxiscomponent.html) |
| [`IgxPolarLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarlineseriescomponent.html)             | [`IgxNumericRadiusAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericradiusaxiscomponent.html) | [`IgxNumericAngleAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericangleaxiscomponent.html) |

## 필요한 데이터

폴라 시리즈에는 다음과 같은 데이터 요구 사항이 있습니다:

-   데이터 소스는 배열 또는 데이터 항목 목록이어야 함
-   데이터 소스에는 하나 이상의 데이터 항목이 포함되어야 하며 그렇지 않을 경우에는 차트가 폴라 시리즈를 렌더링하지 않습니다.
-   모든 데이터 항목에는 폴라 시리즈의 `AngleMemberPath` 및 `RadiusMemberPath` 속성(예: [`IgxPolarAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarareaseriescomponent.html))을 사용하여 매핑하는 숫자 데이터 열이 2개 이상 있어야 합니다

폴라 좌표계의 데이터 점의 위치는  "극"이라고 하는 고정 방향에서의 각도(각도 좌표)와 고정점(데카르트 좌표의 원점과 유사)에서의 거리(반경 좌표)로 결정됩니다. 극에서 시작하여 바깥 쪽을 향하는 선은 각도 축의 격자선([`IgxNumericAngleAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericangleaxiscomponent.html))이며, 극을 둘러싸는 동심원은 반경 축의 격자선([`IgxNumericRadiusAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericradiusaxiscomponent.html))입니다

[SamplePolarData](data-chart-data-sources-polar.md)는 위의 데이터 요구 사항을 충족하는 데이터 소스로 사용할 수 있습니다.

```ts
this.state = { dataSource: SamplePolarData.create() }
```

## 필요한 모듈

폴라 시리즈를 사용하려면 로딩하는 동안 앱에 다음 모듈을 불러와야 합니다.

```ts
// axis' modules:
import { IgxNumericAngleAxis } from 'igniteui-angular-charts';
import { IgxNumericRadiusAxis } from 'igniteui-angular-charts';
// series modules:
import { IgxPolarAreaSeries } from 'igniteui-angular-charts';
import { IgxPolarLineSeries } from 'igniteui-angular-charts';
import { IgxPolarSplineSeries } from 'igniteui-angular-charts';
import { IgxPolarSplineAreaSeries } from 'igniteui-angular-charts';
import { IgxPolarScatterSeries } from 'igniteui-angular-charts';
// data chart's modules:

import { IgxDataChartCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartPolarCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartPolarModule } from 'igniteui-angular-charts';

// in app.module.ts file
@NgModule({
    imports: [
        // ...
        IgxDataChartCoreModule,
        IgxDataChartPolarCoreModule,
        IgxDataChartPolarModule,
        // ...
    ]
})
```

## 코드 예제

이 코드는 [`IgxPolarLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarlineseriescomponent.html)로 데이터 차트의 인스턴스를 생성하고 데이터 소스에 바인딩하는 방법을 보여줍니다.

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-numeric-angle-axis  name="angleAxis" startAngleOffset="-90"></igx-numeric-angle-axis>
    <igx-numeric-radius-axis name="radiusAxis"></igx-numeric-radius-axis>
    <igx-polar-line-series
        name="series1"
        angleMemberPath="Direction"
        radiusMemberPath="WindSpeed"
        radiusAxisName="radiusAxis"
        angleAxisName="angleAxis">
    </igx-polar-line-series>
 </igx-data-chart>
```

또한, 위의 코드를 사용하여 [`IgxPolarLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarlineseriescomponent.html)를 렌더링할 폴라 시리즈의 이름으로 대체하여 다른 유형의 폴라 시리즈를 생성할 수도 있습니다.

## 추가 리소스

-   [축 유형](data-chart-axis-types.md)
-   [축 공유](data-chart-axis-sharing.md)
-   [차트 범례](data-chart-legends.md)
-   [시리즈 마커](data-chart-series-markers.md)
-   [시리즈 유형](data-chart-series-types.md)
