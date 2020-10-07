---
제목: 데이터 차트 구성 요소 - 네이티브 Angular | Ignite UI for Angular
_description: Ignite UI for Angular 데이터 차트는 축, 마커, 시리즈, 범례 및 주석 레이어의 모듈 식 디자인을 제공하는 차트 구성 요소입니다. 이 차트를 사용하면 동일한 차트 영역에 이러한 시각적 요소의 인스턴스를 여러 개 만들어 복합 차트 뷰를 만들 수 있습니다.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Chart Component, Angular Data Chart
_language: kr
---

# Angular 도구 설명

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) 제어는 2개의 도구 설명 "레이어"와 함께 도구 설명을 표시할 수 있습니다. 이 도구 설명은 차트의 각 시리즈에 대한 맥락 정보를 확인할 수 있습니다.

## 데모

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-series-tooltips-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-series-tooltips' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-series-tooltips-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">STACKBLITZ 에서 보기
    </button>


</div>

<div class="divider--half"></div>

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) 제어에서 도구 설명 또는 도구 설명 레이어를 사용하려면 대화형 모듈을 가져와서 등록해야 합니다. 다음 코드를 사용하여 이 작업을 실행할 수 있습니다:

```ts
import { IgxDataChartInteractivityModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [ IgxDataChartInteractivityModule ]
})
```

## 기본 도구 설명

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) 제어는 각 시리즈 유형에 기본 도구 설명을 제공합니다. 기본 도구 설명에는 시리즈 제목, 데이터 값, 축 값 등 호버된 특정 시리즈 항목과 관련된 모든 정보가 표시되며 또한, 시리즈 외관에 맞게 스타일 설정되어 있습니다.

다음 코드 조각은 [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) 제어에서 기본 도구 설명을 사용하는 방법을 보여 줍니다:

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
        valueMemberPath="Value"
        showDefaultTooltip=true>
    </igx-column-series>

</igx-data-chart>
```

## 카테고리 도구 설명 레이어

CategoryToolTipLayer는 카테고리 축을 사용하는 [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) 제어 시리즈용의 그룹화된 도구 설명을 표시합니다. 그룹화된 도구 설명은 현재 [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) 제어 상단에 표시됩니다.

다음 코드 조각은 카테고리 도구 설명 레이어를 [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) 제어에 추가하는 방법을 보여 줍니다:

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
        valueMemberPath="Value"
        showDefaultTooltip=true>
    </igx-column-series>

    <igx-category-tooltip-layer></igx-category-tooltip-layer>

</igx-data-chart>
```

## 항목 도구 설명 레이어

항목 도구 설명 레이어는 포인터가 특정 시리즈 위로 이동할 경우에 [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) 제어의 모든 시리즈에 대한 도구 설명을 개별적으로 표시합니다. 도구 설명 스타일은 도구 설명을 표시하는 시리즈에서 상속됩니다.

다음 코드 조각은 항목 도구 설명 레이어를 [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) 제어에 추가하는 방법을 보여 줍니다:

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
        valueMemberPath="Value"
        showDefaultTooltip=true>
    </igx-column-series>

    <igx-item-tooltip-layer></igx-item-tooltip-layer>

</igx-data-chart>
```
