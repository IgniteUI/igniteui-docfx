---
제목: 금융 차트 | 데이터 비주얼라이제이션 도구 | Ignite UI for Angular | Infragistics | 퍼포먼스
_description: 재무 차트 구성 요소를 사용하여 간단한 API를 사용하여 재무 데이터를 시각화하십시오. 자세한 정보는 데모, 종속성, 사용법 및 도구 모음을보십시오.
_keywords: financial chart, Ignite UI for Angular, infragistics
_language: kr
---

## 퍼포먼스

`XamFinancialChart` 컨트롤은 대량의 데이터 점을 렌더링할 수 있는 매우 우수한 성능을 제공합니다. 다음의 데모는 20년간의 데이터를 바인딩하고 캔들 스틱을 사용하여 1일 간격으로 주가를 표시합니다.

### 데모

<div class="sample-container loading" style="height: 500px">
    <iframe id="financial-chart-performance-iframe" src='{environment:dvDemosBaseUrl}/charts/financial-chart-performance' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="financial-chart-performance-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">STACKBLITZ 에서 보기
    </button>
</div>
<div class="divider--half"></div>

다음의 코드는 금융 차트를 대량의 데이터에 바인딩하는 방법을 보여줍니다.

```ts
import { GenerateOhlcPricesService } from "../services/generate-ohlc-prices.service";

export class AppComponent {
    public data: any;

    constructor(private dataService: GenerateOhlcPricesService) {
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

차트의 퍼포먼스에 영향을 주는 여러 Angular 고유 기능이 있으므로 애플리케이션에서 퍼포먼스를 최적화할 때 이를 고려해야 합니다.

-   컴포넌트에 바인딩할 속성에 대량의 데이터를 저장할 경우, `@Component` 데코레이터에서 `changeDetection: ChangeDetectionStrategy.OnPush`를 설정해야 합니다. 이것을 설정하면 Angular에서 데이터 배열 내의 변경 사항을 자세히 검사하지 않으며, 변경 검출 주기마다 Angular가 필요하지 않습니다.
-   Angular가 차트에 자동으로 데이터 변경을 알려주는 대신에 바인딩된 데이터가 변경된 방법을 컴포넌트에 알리도록 할 수 했습니다. 이러한 델타 알림은 Angular가 변경 검출을 실행할 때마다 100만 레코드 배열의 모든 변경을 비교하는 것보다 훨씬 효율적으로 실행할 수 있습니다. 바인딩된 데이터의 변경을 차트에 알리는 방법에 대한 자세한 것은 각 차트의 `notify*` 메소드를 참조하십시오.
-   Angular가 디버그 모드에서 실행된 경우, 일부 브라우저에는 퍼포먼스를 저하시키는 오버헤드가 있습니다. 실제 퍼포먼스를 평가할 경우, 항상 `--prod` 버전을 사용하여 서비스하거나 빌드해야 합니다.

<!-- -->

> [!NOTE]
> 반응:
>
> -   Angular가 개발 모드에서 실행된 경우, 일부 브라우저에는 퍼포먼스를 저하시키는 오버헤드가 있습니다. 실제 퍼포먼스를 평가할 경우, 항상 생산 빌드를 사용해야 합니다.

또한, 애플리케이션에서 퍼포먼스를 최적화할 때 금융 차트의 다음 기능을 고려해야 합니다.

### 차트 유형

[`ChartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/charttype.html) 옵션을 설정하면 차트 퍼포먼스에 다음과 같은 영향을 미칠 수 있습니다:

-   [`line`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/charttype.html#line) - 간단히 렌더링할 차트 유형이며 대량의 데이터 점을 렌더링하거나 대량의 데이터 소스를 플로팅할 때 권장됩니다.
-   [`IgxColumnComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcolumncomponent.html) - `Line` 차트 유형보다 렌더링이 복잡하며 단일 수치 값을 가진 데이터 항목을 렌더링할 경우에 권장됩니다.
-   `Bar` - [`IgxColumnComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcolumncomponent.html) 차트 유형보다 렌더링이 복잡하며 OHLC 수치 값을 가진 데이터 항목을 렌더링할 경우에 권장됩니다.
-   `Candle` - `Bar` 차트 유형보다 렌더링이 복잡하며 OHLC 수치 값을 가진 데이터 항목을 렌더링할 경우에도 권장됩니다.

### 볼륨 유형

`VolumeType` 옵션을 설정하면 차트 퍼포먼스에 다음과 같은 영향을 미칠 수 있습니다:

-   `Line` - 간단히 렌더링할 볼륨 유형이며 대량의 데이터 점을 렌더링하거나 대량의 데이터 소스를 플로팅할 때 권장됩니다.
-   `area` - `Line` 볼륨 유형보다 렌더링이 복잡합니다.
-   [`IgxColumnComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcolumncomponent.html) - `area` 볼륨 유형보다 렌더링이 복잡하며 1-3 재고의 볼륨 데이터를 렌더링할 경우에 권장됩니다.

### 마커 유형

`MarkerTypes` 옵션을 `none`으로 설정하면 다른 유형보다 렌더링할 항목의 양이 줄어 듭니다.

### 범례 표시

`IsLegendVisible` 옵션을 `false`로 설정하면 범례가 렌더링되지 않으므로 성능이 향상됩니다.

### 줌 슬라이더 유형

`ZoomSliderType` 옵션을 `none`으로 설정하면 차트 퍼포먼스가 향상되고 다른 인디케이터 및 볼륨 창을 위해 수직 공간을 더 많이 사용할 수 있습니다.

### 차트 창

`inidicatorTypes` 및 `OverlayTypes` 옵션을 사용하여 복수의 창을 설정한 경우, 퍼포먼스가 저하될 수 있으므로 소수의 금융지표와 단일 금융 오버레이를 사용하는 것이 좋습니다.

### X축 모드

`XAxisMode` 옵션을 설정하면 차트 퍼포먼스에 다음과 같은 영향을 미칠 수 있습니다:

-   `Ordinal` - 금융 차트에서 사용할 수 있는 가장 간단한 X축 모드이며 데이터 범위(예: 주말 또는 공휴일) 내에서 브레이크 렌더링이 필요하지 않은 경우에 권장됩니다.
-   `Time` - 금융 차트에서 `Ordinal` 보다 복잡합니다. 데이터 범위(예: 주말 또는 공휴일) 내에서 브레이크 렌더링이 필요할 경우에 권장됩니다.

### Y축 모드

성능 향상을 위해 `PercentChange` 모드를 사용할 때보다 더 적은 작업이 필요한 `YAxisMode` 옵션의 `numeric`로 설정하는 것이 좋습니다.

### 주석

Callout 주석(`calloutsVisible`) 또는 Final Value 주석(`finalValueAnnotationsVisible`)을 사용하면 금융 차트의 성능이 저하됩니다.

### 축 비주얼

기본적으로 금융 차트는 최상의 퍼포먼스를 발휘하도록 최적화되어 있지만, 추가 차트 비주얼을 사용하면 퍼포먼스가 저하될 수 있는데 예를 들면 다음과 같습니다:

-   `XAxisInterval`
-   `YAxisInterval`
-   `XAxisTitle`
-   `YAxisTitle`
-   `XAxisTick`
-   `YAxisTick`
-   `XAxisMajor`
-   `YAxisMajor`
-   `XAxisMinor`
-   `YAxisMinor`
-   `XAxisLabel`
-   `YAxisLabel`
-   `XAxisStroke`
-   `YAxisStroke`
-   `XAxisStrip`
-   `YAxisStrip`

<div class="divider--half"></div>

### 추가 리소스

<div class="divider--half"></div>

-   [대량의 데이터 바인딩](financial-chart-high-volume.md)
-   [실시간 데이터 바인딩](financial-chart-high-frequency.md)
-   [복수 데이터 소스 바인딩](financial-chart-multiple-data.md)
