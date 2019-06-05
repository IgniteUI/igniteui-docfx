---
제목: 데이터 차트 구성 요소 - 네이티브 Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Data Chart is a charting component that provides modular design of axis, markers, series, legend, and annotation layers. With this chart, you can create multiple instances of these visual elements in the same chart plot area in order to create composite chart views.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Chart Component, Angular Data Chart
_language: kr
---

## 마커

`IgxDataChart` 제어의 플롯 영역에서 마커는 데이터 점 위치에 표시되는 시각적 요소입니다. 마커는 주 그리드 선과 보조 그리드 선 사이에 값이 있더라도 데이터 점을 즉시 식별할 수 있도록 최종 사용자를 지원합니다.

### 데모

<div class="sample-container" style="height: 300px">
    <iframe id="data-chart-series-markers-iframe" src='{environment:demosBaseUrl}/charts/data-chart-series-markers' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-series-markers-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기
    </button>
</div>

<div class="divider--half"></div>

### 지원되는 시리즈

대부분의 차트 시리즈는 다음과 같은 마커를 지원합니다:

-   모든 [카테고리 시리즈](datachart_series_types_category.md)
-   모든 [폴라 시리즈](datachart_series_types_polar.md)
-   모든 [레이디얼 시리즈](datachart_series_types_radial.md)
-   분산 시리즈:
    -   [분산 버블 시리즈](datachart_series_types_scatter_bubble.md)
    -   [분산점 시리즈](datachart_series_types_scatter_marker.md)
    -   [분산 라인 시리즈](datachart_series_types_scatter_marker.md)
    -   [분산 스플라인 시리즈](datachart_series_types_scatter_marker.md)

### 마커 속성

위 시리즈는 `MarkerType` 속성을 사용하여 변경할 수 있는 12형태의 마커를 지원합니다.  또한, `MarkerBrush` 및 `MarkerOutline` 속성을 각각 사용하여 채우기 및 스트로크를 변경할 수 있습니다.

아래의 코드 조각은 마커의 형태와 모양을 변경하는 방법을 보여 줍니다.

```html
<igx-column-series name="series1"
    markerType="Square"
    markerBrush="white"
    markerOutline="purple" />
```

<!-- TODO add this section when we add MarkerTemplate

### Marker Templates

You can provide custom shape using the `MarkerTemplate` property.

This code snippet below demonstrate how to create custom  marker with values of data points.


```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">

    TODO

 </igx-data-chart>
```

```tsx
<IgrColumnSeries name="series1"
    markerTemplate="customMarker" />
``` -->

### 추가 리소스

-   [축 유형](datachart_axis_types.md)
-   [시리즈 유형](datachart_series_types.md)
-   [시리즈 도구 설명](datachart_series_tooltips.md)
