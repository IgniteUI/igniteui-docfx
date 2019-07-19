---
제목: 데이터 차트 구성 요소 - 네이티브 Angular | Ignite UI for Angular
_description: Ignite UI for Angular 데이터 차트는 축, 마커, 시리즈, 범례 및 주석 레이어의 모듈 식 디자인을 제공하는 차트 구성 요소입니다. 이 차트를 사용하면 동일한 차트 영역에 이러한 시각적 요소의 인스턴스를 여러 개 만들어 복합 차트 뷰를 만들 수 있습니다.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Chart Component, Angular Data Chart
_language: kr
---

## 분산 버블 시리즈

이 항목에서는 코드 예제를 사용하여 [`IgxDataChart`](datachart_series_types_scatter_bubble.md) 제어에서 분산 [`IgxBubbleSeriesComponent`](datachart_series_types_scatter_bubble.md)를 사용하는 방법을 설명합니다. 이 시리즈는
데카르트(x, y) 좌표계를 사용하여 데이터를 플롯하는 [분산 마커 시리즈](datachart_series_types_scatter_marker.md)와 유사합니다. 이 시리즈는 데이터를 크기가 변경된 버블 집합으로 표시하는데 각 버블에는 위치를 결정하는 숫자 X /Y 값과 크기를 결정하는 세 번째 값이 있습니다.

### 데모

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-type-scatter-series-iframe" src='{environment:demosBaseUrl}/charts/data-chart-type-scatter-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-scatter-series-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기
    </button>
</div>

<div class="divider--half"></div>

### 필요한 축

[`IgxDataChart`](datachart_series_types_scatter_bubble.md) 제어는 다양한 유형의 축을 제공하며, [`IgxNumericYAxisComponent`](datachart_series_types_scatter_bubble.md) 및 [`IgxNumericYAxisComponent`](datachart_series_types_scatter_bubble.md)만 [`IgxBubbleSeriesComponent`](datachart_series_types_scatter_bubble.md)와 함께 사용할 수 있습니다.

### 필요한 데이터

[`IgxBubbleSeriesComponent`](datachart_series_types_scatter_bubble.md)에는 다음과 같은 데이터 요구 사항이 있습니다:

-   데이터 소스는 배열 또는 데이터 항목 목록이어야 함
-   데이터 소스에는 하나 이상의 데이터 항목이 포함되어야 하며 그렇지 않을 경우에는 차트가 분산형 시리즈를 렌더링하지 않습니다.
-   모든 데이터 항목에는 `XMemberPath`, `YMemberPath` 및 [`radiusMemberPath`](datachart_series_types_scatter_bubble.md) 속성에 매핑되는 3개의 숫자 데이터 열이 있어야 합니다

[SampleScatterStats](datachart_data_sources_stats.md)는 위의 데이터 요구 사항을 충족하는 데이터 소스로 사용할 수 있습니다.

```ts
this.state = { dataSource: SampleScatterStats.getCountries() }
```

### 필요한 모듈

분산 버블 시리즈에는 다음과 같은 모듈이 필요합니다:

```ts
// axis' modules:
import { IgxNumericYAxis } from "igniteui-angular-charts/ES5/igx-numeric-y-axis";
import { IgxNumericXAxis } from "igniteui-angular-charts/ES5/igx-numeric-x-axis";
// series' modules:
import { IgxBubbleSeries } from "igniteui-angular-charts/ES5/igx-bubble-series";
import { IgxSizeScale } from "igniteui-angular-charts/ES5/igx-size-scale";
import { IgxValueBrushScale } from "igniteui-angular-charts/ES5/igx-value-brush-scale";
import { IgxCustomPaletteBrushScale } from "igniteui-angular-charts/ES5/igx-custom-palette-brush-scale";
import { BrushSelectionMode } from "igniteui-angular-charts/ES5/BrushSelectionMode";
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

이 코드는 [`IgxBubbleSeriesComponent`](datachart_series_types_scatter_bubble.md)로 데이터 차트의 인스턴스를 생성하고 데이터 소스에 바인딩하는 방법을 보여줍니다.

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-numeric-x-axis name="xAxis" isLogarithmic="true"></igx-numeric-x-axis>
    <igx-numeric-y-axis name="yAxis" isLogarithmic="true"></igx-numeric-y-axis>

    <igx-bubble-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        xMemberPath="Population"
        yMemberPath="GdpTotal"
        radiusMemberPath="GdpPerCapita">
    </igx-bubble-series>
 </igx-data-chart>
```

### 버블 모양

[`IgxBubbleSeriesComponent`](datachart_series_types_scatter_bubble.md)의 모양은 [Markers](datachart_series_markers.md) 속성을 사용하여 버블 모양을 미리 정의된 모양 중 하나로 변경할 수 있는데 예를 들면 다음과 같습니다:

```html
<igx-bubble-series
 name="series1"
 markerType="Square"
 markerBrush="White"
 markerOutline="Blue">
</igx-bubble-series>
```

### 버블 반경 비율

[`radiusScale`](datachart_series_types_scatter_bubble.md)은 버블의 크기를 결정하는 [`IgxBubbleSeriesComponent`](datachart_series_types_scatter_bubble.md)의 옵션 기능입니다. 이 기능은 [`IgxSizeScaleComponent`](datachart_series_types_scatter_bubble.md) 객체를 통해 구현됩니다. 반경 비율이 설정되면 가장 작은 버블은 [`minimumValue`](datachart_series_types_scatter_bubble.md)와 같게 되며, 가장 큰 버블은 [`maximumValue`](datachart_series_types_scatter_bubble.md)와 같게 되고 나머지 모든 버블은 그에 따라 변경됩니다. 크기 비율은 선형 또는 로그여도 상관 없습니다. 반경 비율이 설정되지 않은 경우, 각 버블의 크기는 `RadiusMemberPath` 속성에 매핑된 데이터 열의 값과 동일하게 됩니다

### 버블 채우기 비율

`FillScale`은 단일 [`IgxBubbleSeriesComponent`](datachart_series_types_scatter_bubble.md) 내의 컬러 패턴을 결정하는 옵션 기능입니다. 이 시리즈는 다음과 같은 채우기 비율을 지원합니다:

-   [`IgxValueBrushScaleComponent`](datachart_series_types_scatter_bubble.md)은 `FillMemberPath` 속성에 매핑된 데이터 열의 값 집합을 사용하여 버블의 보간 브러시를 결정합니다. 또한, 사용자가 지정한 [`minimumValue`](datachart_series_types_scatter_bubble.md) 및 [`maximumValue`](datachart_series_types_scatter_bubble.md)를 가질 수 있습니다. 이 비율로 범위를 설정하면 범위 밖에 있는 값을 가진 버블은 `Brushes` 컬렉션으로부터 브러시를 얻지 못하고 컬러도 없습니다.
-   [`IgxCustomPaletteBrushScaleComponent`](datachart_series_types_scatter_bubble.md)은 버블 마커의 인덱스를 사용하여 `Brushes` 컬렉션으로부터 브러시를 선택합니다. [`brushSelectionMode`](datachart_series_types_scatter_bubble.md) 속성을 `Select` enumerable 값으로 설정하면 버블이 순차적으로 색칠되어 `Interpolate`로 설정되고, 브러시는 버블의 인덱스와 컬렉션의 브러시 수에 따라 보간됩니다.

### 추가 리소스

-   [축 유형](datachart_axis_types.md)
-   [축 공유](datachart_axis_sharing.md)
-   [차트 범례](datachart_chart_legends.md)
-   [시리즈 마커](datachart_series_markers.md)
-   [시리즈 도구 설명](datachart_series_tooltips.md)
-   [시리즈 추세선](datachart_series_trendlines.md)
-   [시리즈 유형](datachart_series_types.md)
