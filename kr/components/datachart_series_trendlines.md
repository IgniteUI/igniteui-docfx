---
제목: 데이터 차트 구성 요소 - 네이티브 Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Data Chart is a charting component that provides modular design of axis, markers, series, legend, and annotation layers. With this chart, you can create multiple instances of these visual elements in the same chart plot area in order to create composite chart views.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Chart Component, Angular Data Chart
_language: kr
---

## 추세선

`IgxDataChart` 제어는 시리즈에 바인딩된 데이터의 추세를 식별하는 데 도움이 되는 추세선을 지원합니다.

### 데모

<div class="sample-container" style="height: 500px">
    <iframe id="data-chart-series-trendlines-iframe" src='{environment:demosBaseUrl}/charts/data-chart-series-trendlines' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-series-trendlines-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기
    </button>
</div>

<div class="divider--half"></div>

`IgxDataChart` 제어의 추세선은 기본적으로 무효로 되어 있습니다. 이것을 설정하기 위해 추세선을 표시할 해당 시리즈에서 `TrendLineType` 속성을 설정할 수 있습니다. 브러시, 기간, 두께, 대시 배열과 같은 추세선의 여러 모양 속성을 수정할 수 있습니다.

추세선은 스택 시리즈 및 범위 시리즈를 제외한 모든 시리즈에서 지원됩니다. 다음은 차트 시리즈에서 사용할 수 있는 추세선 목록입니다:

-   `None`
-   `CubicFit`
-   `CumulativeAverage`
-   `ExponentialAverage`
-   `ExponentialFit`
-   `LinearFit`
-   `LogarithmicFit`
-   `ModifiedAverage`
-   `PowerLawFit`
-   `QuadraticFit`
-   `QuarticFit`
-   `QuinticFit`
-   `SimpleAverage`
-   `WeightedAverage`

다음 코드 조각은 `IgxDataChart` 제어의 시리즈에 추세선을 추가하는 방법을 보여 줍니다:

```html
<igx-data-chart  [dataSource]="data"
    height="400px"
    width="100%">

    <igx-category-x-axis #xAxis></igx-category-x-axis>
    <igx-numeric-y-axis #yAxis></igx-numeric-y-axis>

    <igx-financial-price-series
        [xAxis]="xAxis"
        [yAxis]="yAxis"
        highMemberPath="High"
        lowMemberPath="Low"
        closeMemberPath="Close"
        openMemberPath="Open"
        volumeMemberPath="Volume"
        trendLineType="CubicFit">
    </igx-financial-price-series>

</igx-data-chart>
```
