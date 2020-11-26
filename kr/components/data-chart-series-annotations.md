---
제목: 데이터 차트 구성 요소 - 네이티브 Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Data Chart is a charting component that provides modular design of axis, markers, series, legend, and annotation layers. With this chart, you can create multiple instances of these visual elements in the same chart plot area in order to create composite chart views.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Chart Component, Angular Data Chart
_language: kr
---

# Angular 시리즈 주석

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html)는 차트에 플롯된 점에 대한 맥락 정보를 주석으로 표시할 수 있는 레이어를 지원합니다. 이것은 단순히 시리즈를 보는 것만으로는 파악하기 힘든 더 많은 정보를 최종 사용자에게 표시하여 도움을 줄 수 있습니다.

## 데모

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-series-annotations-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-series-annotations' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-series-annotations-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">STACKBLITZ 에서 보기
    </button>


</div>

<div class="divider--half"></div>

## 콜아웃 레이어

콜아웃 레이어는 [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) 제어의 기존 데이터 또는 새로운 데이터의 주석을 표시합니다. 주석은 데이터 소스의 주어진 데이터 값 옆에 표시됩니다.

콜아웃 주석을 사용하여 사용자에게 알리고자 하는 메모나 데이터 세부 사항 등의 추가 정보를 표시합니다.

서로 다른 구성으로 여러 콜아웃 레이어를 표시하는 경우, 특정 시리즈를 대상으로 콜아웃을 설정할 수 있습니다. 그러기 위해서는 `TargetSeries` 속성을 설정합니다.

다음 코드 조각은 콜아웃 레이어를 차트에 추가하는 방법을 보여 줍니다.

```html
<igx-data-chart dataSource={this.data} width="100%" height="400px">

   <igx-category-x-axis name="xAxis"></igx-category-x-axis>
   <igx-numeric-y-axis  name="yAxis"></igx-numeric-y-axis>

   <igx-column-series name="series1"
       xAxisName="xAxis"
       yAxisName="yAxis"
       valueMemberPath="Value1">
   </igx-column-series>
   <igx-column-series name="series2"
       xAxisName="xAxis"
       yAxisName="yAxis"
       valueMemberPath="Value2">
   </igx-column-series>

   <igx-callout-layer name="callout"
       xMemberPath="Index"
       yMemberPath="Value"
       labelMemberPath="Label">
   </igx-callout-layer>
</igx-data-chart>
```

## 십자형 레이어

십자형 레이어는 각 시리즈를 대상으로 구성된 모든 시리즈의 실제 값과 교차하는 교차선을 별도의 선 세트로 렌더링합니다.

이 레이어는 기본적으로 [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) 제어의 모든 시리즈를 대상으로 하여 하나의 특정 시리즈만 표시하도록 십자형 레이어를 구성할 수 있습니다. 이것을 실행하려면 `TargetSeries` 속성을 설정합니다.

기본적으로 십자선의 컬러는 상호 작용하는 시리즈의 컬러입니다. 단, 이 기본 설정은 십자선에 사용할 컬러를 선택하도록 재정의할 수 있습니다. 이는 `Brush` 속성을 설정하여 실행합니다.

다음 코드 조각은 십자형 레이어를 차트에 추가하는 방법을 보여 줍니다.

```html
<igx-data-chart dataSource={this.data} width="100%" height="400px">
   <igx-category-x-axis name="xAxis"></igx-category-x-axis>
   <igx-numeric-y-axis  name="yAxis"></igx-numeric-y-axis>

   <igx-column-series name="series1"
       xAxisName="xAxis"
       yAxisName="yAxis"
       valueMemberPath="Value1">
   </igx-column-series>
   <igx-column-series name="series2"
       xAxisName="xAxis"
       yAxisName="yAxis"
       valueMemberPath="Value2">
   </igx-column-series>

   <igx-crosshair-layer name="crosshair"></igx-crosshair-layer>
</igx-data-chart>
```

## 최종값 레이어

최종값 레이어는 [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) 제어의 시리즈 최종값을 나타내는 주석을 차트 축에 따라 표시합니다.

서로 다른 구성으로 여러 최종값 레이어를 표시하는 경우, 특정 시리즈를 대상으로 주석을 설정할 수 있습니다. 그러기 위해서는 `TargetSeries` 속성을 설정합니다.

다음 코드 조각은 최종값 레이어를 차트에 추가하는 방법을 보여 줍니다.

```html
<igx-data-chart dataSource={this.data} width="100%" height="400px">
   <igx-category-x-axis name="xAxis"></igx-category-x-axis>
   <igx-numeric-y-axis name="yAxis"></igx-numeric-y-axis>

   <igx-column-series name="series1"
       xAxisName="xAxis"
       yAxisName="yAxis"
       valueMemberPath="Value1">
   </igx-column-series>
   <igx-column-series name="series2"
       xAxisName="xAxis"
       yAxisName="yAxis"
       valueMemberPath="Value2">
   </igx-column-series>

   <igx-final-value-layer name="finalValue"></igx-final-value-layer>
</igx-data-chart>
```
