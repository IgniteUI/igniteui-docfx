---
제목: 금융 차트 | 데이터 비주얼라이제이션 도구 | Ignite UI for Angular | Infragistics | 실시간 데이터
_description: 재무 차트 구성 요소를 사용하여 간단한 API를 사용하여 재무 데이터를 시각화하십시오. 자세한 정보는 데모, 종속성, 사용법 및 도구 모음을보십시오.
_keywords: financial chart, Ignite UI for Angular, infragistics
_language: kr
---

## 실시간 데이터 바인딩

`XamFinancialChart` 제어는 실시간으로 데이터의 렌더링을 처리할 수 있는 매우 빠른 컨트롤입니다. 다음 데모에서는 금융 차트의 데이터가 높은 빈도로 업데이트되는 방법을 보여줍니다.

### 데모

<div class="sample-container loading" style="height: 500px">
    <iframe id="financial-chart-high-frequency-iframe" src='{environment:dvDemosBaseUrl}/charts/financial-chart-high-frequency' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="financial-chart-high-frequency-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">STACKBLITZ 에서 보기
    </button>
</div>

<div class="divider--half"></div>

### 코드 예제

데이터 소스의 첫 번째 데이터 항목을 제거하고 새로운 데이터 항목을 데이터 끝에 추가하여 높은 빈도로 데이터를 업데이트하는 금융 차트 컨트롤을 작성할 수 있습니다. 또한, 차트에 변경 사항을 알리려면 `notifyRemoveItem` 및 `notifyInsertItem` 함수를 호출해야 합니다. 바인딩된 데이터의 변경을 차트에 알리는 방법에 대한 자세한 정보는 금융 차트의 `notify*` 메소드를 참조하십시오.

다음 예제는 높은 빈도의 데이터 업데이트에 대해 금융 차트 컨트롤에 알리는 방법을 보여줍니다.

```ts
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

-   [차트 퍼포먼스](financial-chart-performance.md)
-   [대량의 데이터 바인딩](financial-chart-high-volume.md)
-   [복수 데이터 소스 바인딩](financial-chart-multiple-data.md)
