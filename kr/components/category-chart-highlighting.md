---
제목: 카테고리 차트 | 데이터 비주얼라이제이션 도구 | Ignite UI for Angular | 강조 표시 | Infragistics
_description: 범주 차트 구성 요소를 사용하여 데이터를 나타내는 데 가장 적합한 차트 유형을 분석하고 자동으로 선택합니다. 시각화를위한 차트 유형에 대해 알아보십시오.
_keywords: category chart, Ignite UI for Angular, infragistics
_language: kr
---

## 강조 표시

이 항목에서는 Ignite UI for Angular 카테고리 차트 컴포넌트의 강조 표시 기능에 대한 개념 정보를 제공합니다.

### 데모

<div class="sample-container loading" style="height: 500px">
    <iframe id="category-chart-highlighting-iframe" src='{environment:dvDemosBaseUrl}/charts/category-chart-highlighting' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="category-chart-highlighting-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">STACKBLITZ 에서 보기
    </button>
</div>
<div class="divider--half"></div>

### 강조 표시 레이어

카테고리 차트 컴포넌트는 항목 위로 마우스를 가져간 경우, 3가지 유형의 강조 표시를 활성화할 수 있습니다.

1.  시리즈 강조 표시는 포인터가 데이터 점 위에 있을 때 단일 데이터 점을 강조 표시합니다.

2.  항목 강조 표시는 해당 위치에 줄무늬 모양을 그리거나 해당 위치에 마커를 렌더링하여 시리즈의 항목을 강조 표시합니다.

3.  카테고리 강조 표시는 차트의 모든 카테고리 축을 대상으로 합니다. 포인터 위치에 가장 가까운 축의 영역을 밝게 하는 모양을 그립니다.

```html
<igx-category-chart
    [dataSource]="data"
    isSeriesHighlightingEnabled="true"
    isCategoryHighlightingEnabled="true"
    isItemHighlightingEnabled="true">
</igx-category-chart>
```
