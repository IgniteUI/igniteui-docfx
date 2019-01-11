---
title: 금융 차트-실시간 데이터
_description: Ignite UI for Angular 금융 차트 컴포넌트는 간단하고 직관적인 API를 사용하여 재무 데이터를 표시하도록 쉽게 구성되어 있으며, 사용자가 데이터를 바인딩하면 차트는 데이터를 시각화하고 해석할 수 있는 다양한 방법을 제공합니다.
_keywords: Ignite UI for Angular, Angular, 네이티브 Angular 컴포넌트 세트, 네이티브 Angular 컨트롤, 네이티브 Angular 컴포넌트, 네이티브 Angular 컴포넌트 라이브러리, Angular 차트, Angular 차트 컨트롤, Angular 차트 예제, Angular 그리드 컴포넌트, Angular 차트 컴포넌트, Angular 금융 차트
_language: kr
---
## 실시간 데이터 바인딩

`igx-financial-chart` 컨트롤은 실시간으로 데이터의 렌더링을 처리할 수 있는 매우 빠른 컨트롤입니다. 다음 데모에서는 금융 차트의 데이터가 높은 빈도로 업데이트되는 방법을 보여줍니다.

### 데모

<div class="sample-container" style="height: 550px">
    <iframe id="financial-chart-high-frequency-iframe" src='{environment:demosBaseUrl}/charts/financial-chart-high-frequency' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="financial-chart-high-frequency-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기
    </button>
</div>

<div class="divider--half"></div>


### 코드 예제

데이터 소스의 첫 번째 데이터 항목을 제거하고 새로운 데이터 항목을 데이터 끝에 추가하여 높은 빈도로 데이터를 업데이트하는 금융 차트 컨트롤을 작성할 수 있습니다. 또한, 차트에 변경 사항을 알리려면 `notifyRemoveItem` 및 `notifyInsertItem` 함수를 호출해야 합니다. 바인딩된 데이터의 변경을 차트에 알리는 방법에 대한 자세한 정보는 금융 차트의 `notify*` 메소드를 참조하십시오.

다음 예제는 높은 빈도의 데이터 업데이트에 대해 금융 차트 컨트롤에 알리는 방법을 보여줍니다.


```typescript

private tick(): void {
    const newVal = this.getValue();
    const oldVal = this.data[0];

    this.data.push(newVal);
    this.chart.notifyInsertItem(this.data, this.data.length - 1, newVal);

    this.data.splice(0, 1);
    this.chart.notifyRemoveItem(this.data, 0, oldVal);
}

```

<div class="divider--half"></div>

### 추가 리소스
<div class="divider--half"></div>

* [차트 퍼포먼스](financialchart_performance.md)
* [대량의 데이터 바인딩](financialchart_high_volume_data.md)
* [복수 데이터 소스 바인딩](financialchart_binding_to_multiple_data.md)

