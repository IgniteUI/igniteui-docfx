---
제목: 금융 차트 | 데이터 비주얼라이제이션 도구 | Ignite UI for Angular | Infragistics | 대용량 데이터
_description: 재무 차트 구성 요소를 사용하여 간단한 API를 사용하여 재무 데이터를 시각화하십시오. 자세한 정보는 데모, 종속성, 사용법 및 도구 모음을보십시오.
_keywords: financial chart, Ignite UI for Angular, infragistics
_language: kr
---

## 대용량 데이터

[`IgxFinancialChart`](financialchart_binding_large_data.md) 제어는 대량의 데이터를 처리할 수 있습니다. 다음 데모는 20년간의 데이터를 바인딩하고 선형 차트를 사용하여 1시간 간격으로 주가를 표시합니다.

### 데모

<div class="sample-container loading" style="height: 500px">
    <iframe id="financial-chart-high-volume-iframe" src='{environment:demosBaseUrl}/charts/financial-chart-high-volume' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="financial-chart-high-volume-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기
    </button>
</div>
<div class="divider--half"></div>

차트의 퍼포먼스에 영향을 주는 여러 기능 및 Angular 고유 기능이 있으므로 애플리케이션에서 퍼포먼스를 최적화할 때 이를 고려해야 합니다.

> [!NOTE]
> Angular:
> 컴포넌트에 바인딩할 속성에 대량의 데이터를 저장할 경우, `@Component` 데코레이터에서 `changeDetection: ChangeDetectionStrategy.OnPush`를 설정해야 합니다. 이것을 설정하면 Angular에서 데이터 배열 내의 변경 사항을 자세히 검사하지 않으며, 변경 검출 주기마다 Angular가 필요하지 않습니다.

다음의 코드는 금융 차트를 대량의 데이터에 바인딩하는 방법을 보여줍니다.

```ts
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

-   [차트 퍼포먼스](financialchart_chart_performance.md)
-   [실시간 데이터 바인딩](financialchart_binding_live_data.md)
-   [복수 데이터 소스 바인딩](financialchart_binding_multiple_sources.md)
