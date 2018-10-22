---
title: 금융 차트-대용량 데이터
_description: Ignite UI for Angular 금융 차트 컴포넌트는 간단하고 직관적인 API를 사용하여 재무 데이터를 표시하도록 쉽게 구성되어 있으며, 사용자가 데이터를 바인딩하면 차트는 데이터를 시각화하고 해석할 수 있는 다양한 방법을 제공합니다.
_keywords: Ignite UI for Angular, Angular, 네이티브 Angular 컴포넌트 세트, 네이티브 Angular 컨트롤, 네이티브 Angular 컴포넌트, 네이티브 Angular 컴포넌트 라이브러리, Angular 차트, Angular 차트 컨트롤, Angular 차트 예제, Angular 그리드 컴포넌트, Angular 차트 컴포넌트, Angular 금융 차트
_language: kr
---
## 대용량 데이터

`igx-financial-chart` 컨트롤은 대량의 데이터를 처리할 수 있습니다. 다음 데모는 20년간의 데이터를 바인딩하고 선형 차트를 사용하여 1시간 간격으로 주가를 표시합니다.

### 데모
<div class="sample-container" style="height: 550px">
    <iframe id="financial-chart-high-volume-iframe" src='{environment:demosBaseUrl}/financial-chart-high-volume' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="financial-chart-high-volume-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>
<div class="divider--half"></div>

차트의 퍼포먼스에 영향을 주는 여러 기능 및 Angular 고유 기능이 있으므로 애플리케이션에서 퍼포먼스를 최적화할 때 이를 고려해야 합니다.

* 컴포넌트에 바인딩할 속성에 대량의 데이터를 저장할 경우, @Component 데코레이터에서 changeDetection: ChangeDetectionStrategy.OnPush를 설정해야 합니다. Angular가 모든 변경 검출 주기에서 데이터 배열 내의 변경 사항을 확인하지 않도록 설정합니다.

다음의 코드는 금융 차트를 대량의 데이터에 바인딩하는 방법을 보여줍니다.

```typescript
import { GenerateHourlyPricesService } from "../services/generate-hourly-prices.service";

export class AppComponent {
    public data: any;

    constructor(private dataService: GenerateHourlyPricesService) {
        const dateEnd = new Date(2018, 3, 20); // April 20, 2018
        const dateStart = new Date(1998, 3, 20); // April 20, 1998
        this.data = this.dataService.GetStockHistoryBetween(dateStart, dateEnd);
    }
}
```

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px">
 </igx-financial-chart>
```

<div class="divider--half"></div>

### 추가 리소스
<div class="divider--half"></div>

* [차트 퍼포먼스](financialchart_performance.md)
* [실시간 데이터 바인딩](financialchart_real_time_data.md)
* [복수 데이터 소스 바인딩](financialchart_binding_to_multiple_data.md)


