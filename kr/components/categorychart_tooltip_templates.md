---
title: 툴팁 템플릿
_description: Ignite UI for 카테고리 차트 컴포넌트는 데이터 시각화 도메인의 복잡성을 관리 가능한 API로 단순화하여 사용자가 데이터 수집, 그룹 수집, 데이터 속성을 바인딩하고 나머지는 차트 컨트롤이 실행할 수 있도록 합니다. 
_keywords: Ignite UI for Angular, Angular, 네이티브 Angular 컴포넌트 세트, 네이티브 Angular 컨트롤, 네이티브 Angular 컴포넌트, 네이티브 Angular 컴포넌트 라이브러리, Angular 차트, Angular 차트 컨트롤, Angular 차트 예제, Angular 그리드 컴포넌트, Angular 차트 컴포넌트, Angular 카테고리 차트
_language: kr
---

## 툴팁 템플릿

카테고리 차트는 각 시리즈 유형에 기본 도구 설명을 제공합니다. 기본 도구 설명에는 시리즈 제목, 데이터 값, 축 값 등의 특정 시리즈 항목과 관련된 모든 정보가 표시됩니다. 이들은 시리즈의 스타일에 맞게 디자인되어 있습니다. 기본 도구 설명이 충분하지 않은 경우 도구 설명 콘텐츠와 룩 앤드 필을 사용자 정의하여 사용자 도구 설명을 구성할 수 있습니다.

### 데모

<div class="sample-container" style="height: 500px">
    <iframe id="category-chart-tooltip-template-iframe" src='{environment:demosBaseUrl}/charts/category-chart-tooltip-template' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="category-chart-tooltip-template-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기
    </button>
</div>

<div class="divider--half"></div>

도구 설명 콘텐츠는 다음의 코드와 같이 도구 설명 템플릿을 생성하여 사용자 정의화됩니다.

```html
<ng-template let-series="series" let-item="item" #valueTooltip>
   <div>
      <span> {{item.Country}} energy use: <br/></span>
      <span> Coal :{{item.Coal | number}}<br/></span>
      <span> Oil :{{item.Oil | number}}<br/></span>
      <span> Gas :{{item.Gas | number}}<br/></span>
      <span> Nuclear :{{item.Nuclear | number}}<br/></span>
      <span> Hyrdo :{{item.Hydro | number}}<br/></span>
    </div>
</ng-template>
    
<div class="chart">
    <igx-category-chart height="100%" width="100%"
        [dataSource]="data" chartTitle="Energy Production"
        subtitle="by Country"
        [tooltipTemplate]="valueTooltip"
        [chartType]="chartType">
    </igx-category-chart>
</div>
```
