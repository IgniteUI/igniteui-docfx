---
제목: 금융 차트 | 데이터 비주얼라이제이션 도구 | Infragistics
_description: 재무 차트 구성 요소를 사용하여 간단한 API를 사용하여 재무 데이터를 시각화하십시오. 자세한 정보는 데모, 종속성, 사용법 및 도구 모음을보십시오.
_keywords: financial chart, Ignite UI for Angular, Infragistics
_language: kr
---

# Angular 주석

이 항목에서는 [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html)에서 사용할 수 있는 주석에 대한 개념 정보를 제공합니다.

## 데모

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-annotations"
           github-src="charts/financial-chart/annotations">
</code-view>

<div class="divider--half"></div>

## 십자형 레이어

십자형 레이어는 모든 대상 시리즈의 실제 값과 만나는 교차 선을 제공합니다.  십자형 유형: 수평, 수직, 양쪽 모두가 포함.  십자형은 `crosshairsSnapToData` 속성을 true로 설정하여 데이터 점에 스냅하도록 구성할 수 있으며, 그렇지 않으면 데이터 점간에 십자선이 보간됩니다.  주석을 활성화하여 축에 따라 십자선 값을 표시할 수 있습니다.

```html
<igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    crosshairsDisplayMode="Horizontal"
    crosshairsSnapToData="true"
    crosshairsAnnotationEnabled="true">
</igx-financial-chart>
```

## 최종값 레이어

최종값 레이어는 시리즈에 표시된 종료값 축을 따라 빠른 보기를 제공합니다.

```html
<igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    finalValueAnnotationsVisible="true">
</igx-financial-chart>
```

## 콜아웃 레이어

콜아웃 레이어는 X/Y 위치에서 콜아웃을 표시합니다.

> 참고: 서수 X축 모드를 사용하는 경우에는 `calloutsXMemberPath`는 항목의 수치 인덱스를 가리켜야 하거나 그렇지 않으면 `calloutsXMemberPath`가 시간 값을 가리켜야 합니다.

```html
<igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    calloutsVisible="true"
    [calloutsDataSource]="calloutData"
    calloutsXMemberPath="index"
    calloutsYMemberPath="yValue"
    calloutsLabelMemberPath="title"
    calloutsContentMemberPath="content">
</igx-financial-chart>
```
