---
제목: 카테고리 차트 | 데이터 비주얼라이제이션 도구 | Ignite UI for Angular | 도구 설명 템플릿 | Infragistics
_description: 범주 차트 구성 요소를 사용하여 데이터를 나타내는 데 가장 적합한 차트 유형을 분석하고 자동으로 선택합니다. 시각화를위한 차트 유형에 대해 알아보십시오.
_keywords: category chart, Ignite UI for Angular, infragistics
_language: kr
---

## 도구 설명 템플릿

`XamCategoryChart` 제어는 각 시리즈 유형에 기본 도구 설명을 제공합니다. 기본 도구 설명에는 시리즈 제목, 데이터 값, 축 값 등의 특정 시리즈 항목과 관련된 모든 정보가 표시됩니다. 이들은 시리즈의 스타일에 맞게 디자인되어 있습니다. 기본 도구 설명이 충분하지 않은 경우 도구 설명 콘텐츠와 룩 앤드 필을 사용자 정의하여 도구 설명 템플릿을 구성할 수 있습니다.

### 데모

<div class="sample-container loading" style="height: 500px">
    <iframe id="category-chart-tooltip-template-iframe" src='{environment:dvDemosBaseUrl}/charts/category-chart-tooltip-template' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="category-chart-tooltip-template-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">STACKBLITZ 에서 보기
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
