---
title: 카테고리 차트 주석 및 오버레이
_description: Ignite UI for 카테고리 차트 컴포넌트는 데이터 시각화 도메인의 복잡성을 관리 가능한 API로 단순화하여 사용자가 데이터 수집, 그룹 수집, 데이터 속성을 바인딩하고 나머지는 차트 컨트롤이 실행할 수 있도록 합니다.
_keywords: Ignite UI for Angular, Angular, 네이티브 Angular 컴포넌트 세트, 네이티브 Angular 컨트롤, 네이티브 Angular 컴포넌트, 네이티브 Angular 컴포넌트 라이브러리, Angular 차트, Angular 차트 컨트롤, Angular 차트 예제, Angular 그리드 컴포넌트, Angular 차트 컴포넌트, Angular 카테고리 차트
_language: kr
---
## 카테고리 차트 주석 및 오버레이

이 항목에서는 `igx-category-chart`에서 사용할 수 있는 주석 및 오버레이 상호 작용에 대한 개념 정보를 제공합니다.

### 데모
<div class="sample-container" style="height: 550px">
    <iframe id="category-chart-annotations-and-overlays-iframe" src='{environment:demosBaseUrl}/category-chart-annotations-and-overlays' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="category-chart-annotations-and-overlays-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기
    </button>
</div>
<div class="divider--half"></div>

## 오버레이 유형

### 십자형 레이어

십자형 레이어는 모든 대상 시리즈의 실제 값과 만나는 교차 선을 제공합니다.  십자형 유형: 수평, 수직, 양쪽 모두가 포함.

```html
<igx-category-chart
    [dataSource]="data"
    crosshairsDisplayMode="Horizontal"
    crosshairsSnapToData="true"
    crosshairsAnnotationEnabled="true">
</igx-category-chart>
```

### 카테고리 도구 힌트 레이어

카테고리 도구 힌트 레이어는 카테고리 축을 사용하여 시리즈에 대한 그룹화된 도구 힌트를 표시합니다.

```html
<igx-category-chart
    [dataSource]="data"
    toolTipType="Category">
</igx-category-chart>
```

### 항목 도구 힌트 레이어

항목 도구 힌트 레이어는 모든 대상 시리즈에 대한 도구 힌트를 개별적으로 표시합니다.

```html
<igx-category-chart
    [dataSource]="data"
    toolTipType="Item">
</igx-category-chart>
```

### 카테고리 항목 강조 표시 레이어

카테고리 항목 강조 표시 레이어는 밴드 모양을 해당 위치에 그리거나 해당 위치에 마커를 렌더링하여 카테고리 축을 사용하는 시리즈의 항목을 강조 표시합니다.

```html
<igx-category-chart
    [dataSource]="data"
    isCategoryHighlightingEnabled="true">
</igx-category-chart>
```

### 카테고리 강조 표시 레이어

카테고리 강조 표시 레이어는 카테고리 축 또는 차트의 모든 카테고리 축을 대상으로 합니다. 커서 위치에 가장 가까운 축의 영역을 밝게 하는 모양을 그립니다.

```html
<igx-category-chart
    [dataSource]="data"
    isItemHighlightingEnabled="true">
</igx-category-chart>
```

## 주석 유형

### 최종값 레이어

최종값 레이어는 시리즈에 표시된 종료값 축을 따라 빠른 보기를 제공합니다.

```html
<igx-category-chart
    [dataSource]="data"
    finalValueAnnotationsVisible="true">
</igx-category-chart>
```

### 콜아웃 레이어

콜아웃 레이어는 X/Y 위치에서 콜아웃을 표시합니다. 주석 위로 마우스를 가져 가면 레이블과 일부 추가 콘텐츠를 도구 힌트처럼 표시할 수 있습니다.

> 참고: 카테고리 축을 사용하는 경우에는 `calloutsXMemberPath`는 수치 인덱스 또는 시간 축의 시간 값을 가리켜야 합니다.

```html
<igx-category-chart
    [dataSource]="data"
    calloutsVisible="true"
    [calloutsDataSource]="calloutData"
    calloutsXMemberPath="index"
    calloutsYMemberPath="yValue"
    calloutsLabelMemberPath="title"
    calloutssContentMemberPath="content">
</igx-category-chart>
```
