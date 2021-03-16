---
제목: 데이터 차트 구성 요소 - 네이티브 Angular | Ignite UI for Angular
_description: Ignite UI for Angular 데이터 차트는 축, 마커, 시리즈, 범례 및 주석 레이어의 모듈 식 디자인을 제공하는 차트 구성 요소입니다. 이 차트를 사용하면 동일한 차트 영역에 이러한 시각적 요소의 인스턴스를 여러 개 만들어 복합 차트 뷰를 만들 수 있습니다.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Chart Component, Angular Data Chart
_language: kr
---

# Angular 마커

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) 제어의 플롯 영역에서 마커는 데이터 점 위치에 표시되는 시각적 요소입니다. 마커는 주 그리드 선과 보조 그리드 선 사이에 값이 있더라도 데이터 점을 즉시 식별할 수 있도록 최종 사용자를 지원합니다.

## 데모

<code-view style="height: 300px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-series-markers"  
           github-src="charts/data-chart/series-markers">
</code-view>

<div class="divider--half"></div>

## 지원되는 시리즈

대부분의 차트 시리즈는 다음과 같은 마커를 지원합니다:

-   모든 [카테고리 시리즈](data-chart-type-category-series.md)
-   모든 [폴라 시리즈](data-chart-type-polar-series.md)
-   모든 [레이디얼 시리즈](data-chart-type-radial-series.md)
-   분산 시리즈:
    -   [분산 버블 시리즈](data-chart-type-scatter-bubble-series.md)
    -   [분산점 시리즈](data-chart-type-scatter-point-series.md)
    -   [분산 라인 시리즈](data-chart-type-scatter-point-series.md)
    -   [분산 스플라인 시리즈](data-chart-type-scatter-point-series.md)

## 마커 속성

위 시리즈는 [`MarkerType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/markertype.html) 속성을 사용하여 변경할 수 있는 12형태의 마커를 지원합니다.  또한, `MarkerBrush` 및 `MarkerOutline` 속성을 각각 사용하여 채우기 및 스트로크를 변경할 수 있습니다.

아래의 코드 조각은 마커의 형태와 모양을 변경하는 방법을 보여 줍니다.

```html
<igx-column-series name="series1"
    markerType="Square"
    markerBrush="white"
    markerOutline="purple">
</igx-column-series>
```

<!-- TODO add this section when we add MarkerTemplate

## Marker Templates

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

## 추가 리소스

-   [축 유형](data-chart-axis-types.md)
-   [시리즈 유형](data-chart-series-types.md)
-   [시리즈 도구 설명](data-chart-series-tooltips.md)
