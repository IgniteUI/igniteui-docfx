---
제목: 데이터 차트 구성 요소 - 네이티브 Angular | Ignite UI for Angular
_description: Ignite UI for Angular 데이터 차트는 축, 마커, 시리즈, 범례 및 주석 레이어의 모듈 식 디자인을 제공하는 차트 구성 요소입니다. 이 차트를 사용하면 동일한 차트 영역에 이러한 시각적 요소의 인스턴스를 여러 개 만들어 복합 차트 뷰를 만들 수 있습니다.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Chart Component, Angular Data Chart
_language: kr
---

## 강조 표시

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) 제어를 사용하면 차트에 플롯된 시리즈를 강조 표시하여 마우스가 이동하는 항목이나 시리즈를 시각화하거나 강조 표시 레이어를 사용하여 시각화할 수 있습니다.

### 데모

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-series-highlighting-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-series-highlighting' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-series-highlighting-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">STACKBLITZ 에서 보기
    </button>
</div>

<div class="divider--half"></div>

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) 제어에서 강조 표시를 활성화하려면 대화형 모듈을 가져와 등록해야 합니다. 다음 코드를 사용하여 이 작업을 실행할 수 있습니다:

```ts
import { IgxDataChartInteractivityModule } from 'igniteui-angular-charts';
import { IgxDataChartAnnotationModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        IgxDataChartInteractivityModule,
        IgxDataChartAnnotationModule,
    ]
})
```

### 시리즈 비주얼 강조 표시

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) 제어의 시리즈 강조 표시 기능을 사용하면 단일 항목이나 전체 시리즈를 강조 표시할 수 있습니다. 예를 들면, 선 시리즈를 사용하는 경우, 강조 표시는 선의 전체 모양을 하나의 단일 모양으로 강조 표시합니다. 단, 열 시리즈와 같은 시리즈의 각 항목에 강조 표시를 적용할 수 있습니다.

다음 코드 조각은 차트 시리즈에서 강조 표시를 활성화하는 방법을 보여 줍니다:

```html
<igx-data-chart #chart
    height="400px"
    width="100%"
    [dataSource]="data">

    <igx-category-x-axis #xAxis></igx-category-x-axis>
    <igx-numeric-y-axis #yAxis></igx-numeric-y-axis>

    <igx-column-series name="series1"
        [xAxis]="xAxis"
        [yAxis]="yAxis"
        valueMemberPath="Value1"
        isHighlightingEnabled=true>
    </igx-column-series>

    <igx-column-series name="series2"
        [xAxis]="xAxis"
        [yAxis]="yAxis"
        valueMemberPath="Value2"
        isHighlightingEnabled=true>
    </igx-column-series>
</igx-data-chart>
```

### 시리즈 카테고리 강조 표시

카테고리 강조 표시 레이어는 카테고리 축 또는 [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) 제어의 모든 카테고리 축을 대상으로 합니다. 축에 축의 주 격자선 사이에 정렬된 시리즈, 예를 들면 열 시리즈 등이 있으면 현재 카테고리를 채우는 모양이 렌더링됩니다.

선 시리즈 등 다른 시리즈의 경우, 포인터 위치에 가장 가까운 격자선에서 조절 가능한 두께를 가진 줄무늬를 렌더링합니다. 이 경우, `UseInterpolation` 속성을 활성화하면 x 위치가 포인터의 x 위치에 고정됩니다.

`Brush` 속성을 설정하여 강조 표시 영역의 컬러를 변경할 수도 있습니다.

다음은 차트에 카테고리 강조 표시 레이어를 추가하는 방법을 보여 주는 코드 조각입니다:

```html
<igx-data-chart #chart
    height="400px"
    width="100%"
    [dataSource]="data">

    <igx-category-x-axis #xAxis></igx-category-x-axis>
    <igx-numeric-y-axis #yAxis></igx-numeric-y-axis>

    <igx-column-series name="series1"
        [xAxis]="xAxis"
        [yAxis]="yAxis"
        valueMemberPath="Value1"
        isHighlightingEnabled=true>
    </igx-column-series>

    <igx-column-series name="series2"
        [xAxis]="xAxis"
        [yAxis]="yAxis"
        valueMemberPath="Value2"
        isHighlightingEnabled=true>
    </igx-column-series>

    <igx-category-highlight-layer></igx-category-highlight-layer>

</igx-data-chart>
```

### 시리즈 항목 강조 표시

카테고리 항목 강조 표시 레이어는 줄무늬 모양을 그리거나 해당 위치에 마커를 렌더링하여 카테고리 축을 사용하는 시리즈의 항목을 강조 표시합니다.

기본 강조 표시는 시리즈 유형에 따라 다릅니다. 예를 들면, 열 시리즈와 선 시리즈의 강조 표시가 다릅니다. 열 시리즈의 경우에는 줄무늬 모양이지만 줄 시리즈의 경우에는 마커입니다. `HighlightType` 속성을 설정하여 기본 강조 표시를 재정의할 수 있습니다.

다음 코드 조각은 [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) 제어에 카테고리 항목 강조 표시 레이어를 추가하는 방법을 보여 줍니다:

```html
<igx-data-chart #chart
    height="400px"
    width="100%"
    [dataSource]="data">

    <igx-category-x-axis #xAxis></igx-category-x-axis>
    <igx-numeric-y-axis #yAxis></igx-numeric-y-axis>

    <igx-column-series name="series1"
        [xAxis]="xAxis"
        [yAxis]="yAxis"
        valueMemberPath="Value1"
        isHighlightingEnabled=true>
    </igx-column-series>

    <igx-column-series name="series2"
        [xAxis]="xAxis"
        [yAxis]="yAxis"
        valueMemberPath="Value2"
        isHighlightingEnabled=true>
    </igx-column-series>

    <igx-category-item-highlight-layer></igx-category-item-highlight-layer>

</igx-data-chart>
```
