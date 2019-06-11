---
제목: 금융 차트 | 데이터 비주얼라이제이션 도구 | Ignite UI for Angular | Infragistics
_description: Use the financial chart component to visualize financial data using a simple API. View the demo, dependencies, usage and toolbar for more information. 
_keywords: financial chart, Ignite UI for Angular, infragistics
_language: kr
---

## 주석

이 항목에서는 `IgxFinancialChart`에서 사용할 수 있는 주석에 대한 개념 정보를 제공합니다.

### 데모

<div class="sample-container" style="height: 500px">
    <iframe id="financial-chart-annotations-iframe" src='{environment:demosBaseUrl}/charts/financial-chart-annotations' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="financial-chart-annotations-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기
    </button>
</div>
<div class="divider--half"></div>

### 십자형 레이어

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
