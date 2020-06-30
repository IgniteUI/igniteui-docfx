---
제목: 카테고리 차트 | 데이터 비주얼라이제이션 도구 | Ignite UI for Angular | 도구 설명 유형 | Infragistics 
_description: 범주 차트 구성 요소를 사용하여 데이터를 나타내는 데 가장 적합한 차트 유형을 분석하고 자동으로 선택합니다. 시각화를위한 차트 유형에 대해 알아보십시오.
_keywords: category chart, Ignite UI for Angular, infragistics
_language: kr
---

## 도구 설명 유형

이 항목에서는 Ignite UI for Angular 카테고리 차트 컴포넌트에서 사용할 수 있는 도구 설명 유형에 대한 개념 정보를 제공합니다.

### 데모

<div class="sample-container loading" style="height: 500px">
    <iframe id="category-chart-tooltip-types-iframe" src='{environment:dvDemosBaseUrl}/charts/category-chart-tooltip-types' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="category-chart-tooltip-types-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">STACKBLITZ 에서 보기
    </button>
</div>
<div class="divider--half"></div>

### 도구 설명 유형

카테고리 차트 컴포넌트는 다음과 같은 방법으로 도구 설명을 표시하도록 설정할 수 있습니다:

1.  `Default` 도구 설명은 포인터가 항목 위에 있을 때 단일 항목에 대한 도구 설명을 표시합니다.
2.  `Item` 도구 설명은 포인터가 항목 위에 있을 때 카테고리의 각 데이터 항목에 대한 도구 설명을 표시합니다.
3.  `Category` 도구 설명은 포인터가 항목 위에 있을 때 카테고리의 모든 데이터 점에 대한 그룹화된 도구 설명을 표시합니다.
4.  `None` 도구 설명이 표시되지 않도록 합니다.

```html
<igx-category-chart
    [dataSource]="data"
    toolTipType="Category">
</igx-category-chart>
```
