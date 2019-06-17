---
제목: 데이터 차트 구성 요소 - 네이티브 Angular | Ignite UI for Angular
_description: Ignite UI for Angular 데이터 차트는 축, 마커, 시리즈, 범례 및 주석 레이어의 모듈 식 디자인을 제공하는 차트 구성 요소입니다. 이 차트를 사용하면 동일한 차트 영역에 이러한 시각적 요소의 인스턴스를 여러 개 만들어 복합 차트 뷰를 만들 수 있습니다.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Chart Component, Angular Data Chart
_language: kr
---

## 분산 등고선 시리즈

이 항목에서는 코드 예제를 사용하여 `IgxDataChart` 제어에서 `ScatterContourSeries`를 사용하는 방법을 설명합니다. 이 시리즈는
각 점에 할당된 숫치 값으로X 및 Y 데이터의 삼각 측량을 기반으로 색상이 입혀진 등고선을 그립니다. 이 유형의 시리즈는 히트 맵, 자기장 강도 또는 사무실에서 Wi-Fi 강도를 렌더링하는 경우 등에 유용합니다. `ScatterContourSeries`는 데이터를 채우기 비율로 채색된 등고선으로 나타내며, 분산 영역 시리즈는 데이터를 컬러 스케일을 사용하여 보간된 면으로 나타내는 점을 제외하고는 `ScatterAreaSeries`와 매우 유사하게 작동합니다.

### 데모

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-type-contour-series-iframe" src='{environment:demosBaseUrl}/charts/data-chart-type-contour-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-contour-series-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기
    </button>
</div>

<div class="divider--half"></div>

### 필요한 축

`IgxDataChart` 제어는 다양한 유형의 축을 제공하며, `IgxNumericYAxisComponent` 및 `IgxNumericYAxisComponent`만 `ScatterContourSeries`와 함께 사용할 수 있습니다.

### 필요한 데이터

`ScatterContourSeries`에는 다음과 같은 데이터 요구 사항이 있습니다:

-   데이터 소스는 배열 또는 데이터 항목 목록이어야 함
-   데이터 소스에는 하나 이상의 데이터 항목이 포함되어야 하며 그렇지 않을 경우에는 차트가 분산형 시리즈를 렌더링하지 않습니다.
-   모든 데이터 항목에는 `XMemberPath`, `YMemberPath` 및 `ValueMemberPath` 속성에 매핑되는 3개의 숫자 데이터 열이 있어야 합니다.

[SampleScatterData](datachart_data_sources_scatter.md)는 위의 데이터 요구 사항을 충족하는 데이터 소스로 사용할 수 있습니다.

```typescript
this.state = { dataSource: SampleScatterData.create() }
```

### 필요한 모듈

분산 등고선 시리즈에는 다음과 같은 모듈이 필요합니다:

```typescript
// axis' modules:
import { IgxNumericYAxis } from "igniteui-angular-charts/ES5/igx-numeric-y-axis";
import { IgxNumericXAxis } from "igniteui-angular-charts/ES5/igx-numeric-x-axis";
// series' modules:
import { IgxScatterContourSeries } from "igniteui-angular-charts/ES5/igx-scatter-contour-series";
import { IgxValueBrushScale } from "igniteui-angular-charts/ES5/igx-value-brush-scale";
import { IgxLinearContourValueResolver } from "igniteui-angular-charts/ES5/igx-linear-contour-value-resolver";
// data chart's modules:
import { IgxDataChartModule } from 'igniteui-angular-charts/ES5/igx-data-chart-module';
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

이 코드는 `ScatterContourSeries`로 데이터 차트의 인스턴스를 생성하고 데이터 소스에 바인딩하는 방법을 보여줍니다.

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-numeric-x-axis name="xAxis"></igx-numeric-x-axis>
    <igx-numeric-y-axis name="yAxis"></igx-numeric-y-axis>
    <igx-scatter-contour-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        xMemberPath="X"
        yMemberPath="Y"
        colorMemberPath="Z">
    </igx-scatter-contour-series>
 </igx-data-chart>
```

### 등고선 채우기 비율

`ScatterContourSeries`의 `FillScale` 속성을 사용하여 등고선의 채우기 브러시를 해결합니다.

제공된 `ValueBrushScale` 클래스는 대부분의 착색 요구 사항을 만족시킬 수 있지만 이 클래스에서 상속하고 독자적인 착색 논리를 제공할 수 있습니다. 다음 표에는 `ScatterContourSeries`의 면 채색에 영향을 주는 `ValueBrushScale`의 속성이 열거되어 있습니다:

-   `Brushes`는 등고선을 채우기 위한 브러시 컬렉션을 설정합니다.
-   `MaximumValue`는 브러시를 할당할 수 있는 상한값을 설정합니다. 지정한 값이 이 값보다 큰 경우에는 투명하게 됩니다.
-   `MinimumValue`는 브러시를 할당할 수 있는 최소값을 설정합니다. 지정한 값이 이 값보다 작은 경우에는 투명하게 됩니다.

### 등고선 값 리졸버

`ScatterContourSeries`는 `ValueMemberPath` 속성에 매핑된 항목의 최소값과 최대값 사이를 균일 한 간격으로 정확히 10개의 등고선을 사용하여 렌더링합니다. 더 많거나 더 적은 등고선을 원하는 경우, 여러 등고선이 있는 `LinearContourValueResolver`를 `ScatterContourSeries`의 `ValueResolver` 속성에 할당할 수 있습니다.

다음 코드는 `ScatterContourSeries`의 등고선 수를 구성하는 방법을 보여줍니다.

### 추가 리소스

-   [축 유형](datachart_axis_types.md)
-   [차트 범례](datachart_chart_legends.md)
-   [시리즈 유형](datachart_series_types.md)
