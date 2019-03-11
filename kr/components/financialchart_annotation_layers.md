---
title: 금융 차트 주석 및 오버레이
_description: Ignite UI for Angular 금융 차트 컴포넌트는 간단하고 직관적인 API를 사용하여 재무 데이터를 표시하도록 쉽게 구성되어 있으며, 사용자가 데이터를 바인딩하면 차트는 데이터를 시각화하고 해석할 수 있는 다양한 방법을 제공합니다.
_keywords: Ignite UI for Angular, Angular, 네이티브 Angular 컴포넌트 세트, 네이티브 Angular 컨트롤, 네이티브 Angular 컴포넌트, 네이티브 Angular 컴포넌트 라이브러리, Angular 차트, Angular 차트 컨트롤, Angular 차트 예제, Angular 그리드 컴포넌트, Angular 차트 컴포넌트, Angular 금융 차트
_language: kr
---
## 금융 차트 주석 및 오버레이

이 항목에서는 `igx-category-chart`에서 사용할 수 있는 주석 및 오버레이 상호 작용에 대한 개념 정보를 제공합니다.

### 데모
<div class="sample-container loading" style="height: 500px">
    <iframe id="financial-chart-annotations-iframe" src='{environment:demosBaseUrl}/charts/financial-chart-annotations' width="100%" height="100%" seamless="" frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="financial-chart-annotations-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기
    </button>
</div>
<div class="divider--half"></div>

## 오버레이 유형

### 십자형 레이어

십자형 레이어는 각 대상 시리즈의 실제 값과 만나는 교차 선을 제공합니다.  십자형 유형: 수평, 수직, 양쪽 모두가 포함.

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

### 카테고리 툴 힌트 레이어

카테고리 툴 힌트 레이어는 카테고리 축을 사용하여 시리즈에 대한 그룹화된 툴 힌트를 표시합니다.

```html
<igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    toolTipType="Category">
</igx-financial-chart>
```

### 항목 툴 힌트 레이어

항목 툴 힌트 레이어는 모든 대상 시리즈에 대한 툴 힌트를 개별적으로 표시합니다.

```html
<igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    toolTipType="Item">
</igx-financial-chart>
```

## 주석 유형

### 최종값 레이어

최종값 레이어는 시리즈에 표시된 종료값 축을 따라 빠른 보기를 제공합니다.

```html
<igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    finalValueAnnotationsVisible="true">
</igx-financial-chart>
```

### 콜아웃 레이어

콜아웃 레이어는 X/Y 위치에서 콜아웃을 표시합니다. 주석 위로 마우스를 가져 가면 레이블과 일부 추가 콘텐츠를 툴 힌트처럼 표시할 수 있습니다.

> 참고: 서수 X 축 모드를 사용하는 경우에는 `calloutsXMemberPath`는 항목의 수치 인덱스를 가리켜야 하거나 그렇지 않으면 `calloutsXMemberPath`가 시간 값을 가리켜야 합니다.

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
