---
제목: 카테고리 차트 | 데이터 비주얼라이제이션 도구 | 주석 | Infragistics
_description: 범주 차트 구성 요소를 사용하여 데이터를 나타내는 데 가장 적합한 차트 유형을 분석하고 자동으로 선택합니다. 시각화를위한 차트 유형에 대해 알아보십시오.
_keywords: category chart, Ignite UI for Angular, Infragistics
_language: kr
---

# Angular 주석

이 항목에서는 Ignite UI for Angular 카테고리 차트 컴포넌트에서 사용할 수 있는 주석 및 오버레이 상호 작용에 대한 개념 정보를 제공합니다.

## 데모

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-annotations"
           github-src="charts/category-chart/annotations">
</code-view>

<div class="divider--half"></div>

## 십자형 레이어

카테고리 차트의 십자형 레이어는 모든 대상 시리즈의 실제 값과 만나는 교차 선을 제공합니다.  십자형 유형: 수평, 수직, 양쪽 모두가 포함.  십자형은 `crosshairsSnapToData` 속성을 true로 설정하여 데이터 점에 스냅하도록 구성할 수 있으며, 그렇지 않으면 데이터 점간에 십자선이 보간됩니다.  주석을 활성화하여 축에 따라 십자선 값을 표시할 수 있습니다.

```html
<igx-category-chart
    [dataSource]="data"
    crosshairsDisplayMode="Horizontal"
    crosshairsSnapToData="true"
    crosshairsAnnotationEnabled="true">
</igx-category-chart>
```

## 최종값 레이어

카테고리 차트 컴포넌트의 최종값 레이어는 시리즈에 표시된 종료값 축을 따라 빠른 보기를 제공합니다.

```html
<igx-category-chart
    [dataSource]="data"
    finalValueAnnotationsVisible="true">
</igx-category-chart>
```

## 콜아웃 레이어

카테고리 차트 컴포넌트의 콜아웃 레이어는 데이터에 지정된 X/Y 위치에 텍스트 콜아웃을 표시합니다.

```html
<igx-category-chart
    [dataSource]="data"
    calloutsVisible="true"
    [calloutsDataSource]="calloutData"
    calloutsXMemberPath="index"
    calloutsYMemberPath="yValue"
    calloutsLabelMemberPath="title">
</igx-category-chart>
```
