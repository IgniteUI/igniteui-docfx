---
title: 금융 차트-복수 데이터 소스 바인딩
_description: Ignite UI for Angular 금융 차트 컴포넌트는 간단하고 직관적인 API를 사용하여 재무 데이터를 표시하도록 쉽게 구성되어 있으며, 사용자가 데이터를 바인딩하면 차트는 데이터를 시각화하고 해석할 수 있는 다양한 방법을 제공합니다.
_keywords: Ignite UI for Angular, Angular, 네이티브 Angular 컴포넌트 세트, 네이티브 Angular 컨트롤, 네이티브 Angular 컴포넌트, 네이티브 Angular 컴포넌트 라이브러리, Angular 차트, Angular 차트 컨트롤, Angular 차트 예제, Angular 그리드 컴포넌트, Angular 차트 컴포넌트, Angular 금융 차트
_language: kr
---
## 금융 차트를 복수의 데이터 소스에 바인딩

`igx-financial-chart` 컨트롤은 다음 데모에서처럼 복수의 데이터 소스에 간단히 바인딩할 수 있습니다.

### 데모
<div class="sample-container" style="height: 550px">
    <iframe id="financial-chart-multiple-data-iframe" src='{environment:demosBaseUrl}/financial-chart-multiple-data' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="financial-chart-multiple-data-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>
<div class="divider--half"></div>

각 데이터 소스를 배열에 추가하여 금융 차트에서 복수의 데이터 소스를 작성할 수 있습니다. 다음의 코드 조작은 복수의 데이터 소스를 작성하는 방법을 보여줍니다.


```typescript
let dataSource1: any = [
	{ time: new Date(2013, 1, 1), open: 268.93, high: 268.93, low: 262.80, close: 265.00, volume: 6118146 },
	{ time: new Date(2013, 1, 4), open: 262.78, high: 264.68, low: 259.07, close: 259.98, volume: 3723793 },
	{ time: new Date(2013, 1, 5), open: 262.00, high: 268.03, low: 261.46, close: 266.89, volume: 4013780 },
	{ time: new Date(2013, 1, 6), open: 265.16, high: 266.89, low: 261.11, close: 262.22, volume: 2772204 },
	{ time: new Date(2013, 1, 7), open: 264.10, high: 264.10, low: 255.11, close: 260.23, volume: 3977065 },
];
let dataSource2: any = [
	{ time: new Date(2013, 1, 1), open: 263.20, high: 263.25, low: 256.60, close: 257.21, volume: 3407457 },
	{ time: new Date(2013, 1, 4), open: 259.19, high: 260.16, low: 257.00, close: 258.70, volume: 2944730 },
	{ time: new Date(2013, 1, 5), open: 261.53, high: 269.96, low: 260.30, close: 269.47, volume: 5295786 },
	{ time: new Date(2013, 1, 6), open: 267.37, high: 270.65, low: 265.40, close: 269.24, volume: 3464080 },
	{ time: new Date(2013, 1, 7), open: 267.63, high: 268.92, low: 263.11, close: 265.09, volume: 3981233 }
];
dataSource1.title = "Stock1 Name (Symbol)";
dataSource2.title = "Stock2 Name (Symbol)";

let data: any = [ dataSource1, dataSource2 ]

```

다음의 코드는 금융 차트를 상기의 데이터에 바인딩하는 방법을 보여줍니다.

```html
 <igx-financial-chart
    [dataSource]="data" >
 </igx-financial-chart>
```

<div class="divider--half"></div>

### 추가 리소스
<div class="divider--half"></div>

* [차트 퍼포먼스](financialchart_performance.md)
* [실시간 데이터 바인딩](financialchart_real_time_data.md)
* [대량의 데이터 바인딩](financialchart_high_volume_data.md)
