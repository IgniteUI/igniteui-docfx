---
제목: 데이터 차트 구성 요소 - 네이티브 Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Data Chart is a charting component that provides modular design of axis, markers, series, legend, and annotation layers. With this chart, you can create multiple instances of these visual elements in the same chart plot area in order to create composite chart views.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Chart Component, Angular Data Chart
_language: kr
---

## 축 공유 및 다중 행

 `IgxDataChart` 제어의 동일한 플롯 영역에서 여러 축을 공유하고 추가할 수 있습니다. 모든 축에 대해 차트 플롯 영역과 관련하여 위치를 지정할 수 있습니다. 광범위 값(예: 주가 및 주식 거래량)을 가진 많은 데이터 소스를 플롯하는 경우, 여러 축을 사용하는 것이 일반적인 시나리오입니다.

### 데모

<div class="sample-container" style="height: 450px">
    <iframe id="data-chart-axis-sharing-iframe" src='{environment:demosBaseUrl}/charts/data-chart-axis-sharing' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-axis-sharing-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기
    </button>
</div>

<div class="divider--half"></div>

### 코드 예제

이 코드는 2개의 `IgxNumericYAxisComponent` 및 1개의 `IgxCategoryXAxisComponent`가 2개의 시리즈 사이에서 공유되는 데이터 차트를 생성하는 방법을 보여 줍니다.

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">

    <igx-category-x-axis name="sharedXAxis" label="Date"/>
    <igx-numeric-y-axis  name="rightYAxis" labelLocation="OutsideRight" />
    <igx-numeric-y-axis  name="leftYAxis" labelLocation="OutsideLeft" />

    <igx-financial-price-series
    name="series2"
    xAxisName="sharedXAxis"
    yAxisName="rightYAxis"
    displayType="Candlestick"
    lowMemberPath="Low"
    highMemberPath="High"
    openMemberPath="Open"
    closeMemberPath="Close"
    volumeMemberPath="Volume" />

    <igx-money-flow-index-indicator
    name="series3"
    xAxisName="sharedXAxis"
    yAxisName="leftYAxis"
    displayType="Column"
    lowMemberPath="Low"
    highMemberPath="High"
    openMemberPath="Open"
    closeMemberPath="Close"
    volumeMemberPath="Volume" />

 </igx-data-chart>
```

### 추가 리소스

-   [축 유형](datachart_axis_types.md)
-   [시리즈 유형](datachart_series_types.md)
