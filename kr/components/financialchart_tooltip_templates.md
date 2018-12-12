---
title: 금융 차트-툴팁 템플릿
_description: Ignite UI for Angular 금융 차트 컴포넌트는 간단하고 직관적인 API를 사용하여 재무 데이터를 표시하도록 쉽게 구성되어 있으며, 사용자가 데이터를 바인딩하면 차트는 데이터를 시각화하고 해석할 수 있는 다양한 방법을 제공합니다.
_keywords: Ignite UI for Angular, Angular, 네이티브 Angular 컴포넌트 세트, 네이티브 Angular 컨트롤, 네이티브 Angular 컴포넌트, 네이티브 Angular 컴포넌트 라이브러리, Angular 차트, Angular 차트 컨트롤, Angular 차트 예제, Angular 그리드 컴포넌트, Angular 차트 컴포넌트, Angular 금융 차트
_language: kr
---
## 툴팁 템플릿

`igx-financial-chart` 컨트롤은 각 시리즈 유형에 기본 툴 설명을 제공합니다. 기본 툴 설명에는 시리즈 제목, 데이터 값, 축 값 등의 특정 시리즈 항목과 관련된 모든 정보가 표시됩니다. 이들은 시리즈의 스타일에 맞게 디자인되어 있습니다. 기본 툴 설명이 충분하지 않은 경우 툴 설명 콘텐츠와 룩 앤드 필을 사용자 정의하여 사용자 툴 설명을 구성할 수 있습니다.

### 데모

<div class="sample-container" style="height: 500px">
    <iframe id="financial-chart-tooltip-template-iframe" src='{environment:demosBaseUrl}/financial-chart-tooltip-template' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="financial-chart-tooltip-template-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기
    </button>
</div>

<div class="divider--half"></div>

툴 설명 콘텐츠는 다음의 코드와 같이 툴 설명 템플릿을 생성하여 사용자 정의화됩니다.

```html
<ng-template let-series="series" let-item="item" #valueTooltip>
    <div>
        <span [style.color]="series.actualBrush">{{series.title}}</span>
        <span> stock opened on {{item.time | date}} with a value of ${{item.open | number}} and closed with a value of ${{item.close | number}}.</span>
    </div>
</ng-template>

<igx-financial-chart
    width="850px"
    height="600px"
    [dataSource]="data"
    [tooltipTemplate]="valueTooltip" >
</igx-financial-chart>

```


