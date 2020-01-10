---
제목: 금융 차트 | 데이터 비주얼라이제이션 도구 | Ignite UI for Angular | Infragistics | 사용자 인디케이터
_description: 재무 차트 구성 요소를 사용하여 간단한 API를 사용하여 재무 데이터를 시각화하십시오. 자세한 정보는 데모, 종속성, 사용법 및 도구 모음을보십시오.
_keywords: financial chart, Ignite UI for Angular, infragistics
_language: kr
---

## 사용자 인디케이터

`XamFinancialChart` 제어를 사용하면 인디케이터 창에 표시하는 사용자 금융지표를 정의할 수 있습니다.

### 데모

<div class="sample-container loading" style="height: 500px">
    <iframe id="financial-chart-custom-indicators-iframe" src='{environment:dvDemosBaseUrl}/charts/financial-chart-custom-indicators' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="financial-chart-custom-indicators-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">STACKBLITZ 에서 보기
    </button>
</div>

<div class="divider--half"></div>

`XamFinancialChart`에서 사용자 금융지표를 사용하려면 `customIndicatorNames` 속성에 이름을 추가하고 `applyCustomIndicators` 이벤트에서 해당 값의 계산을 실행합니다.

다음의 코드 예제는 단순 이동 평균(SMA) 및 임의 값을 표시하는 두 가지 사용자 인디케이터를 설정하고 계산하는 방법을 보여줍니다.

```html
 <igx-financial-chart
    width="850px"
    height="600px"
    [dataSource]="data"
    (applyCustomIndicators)="applyCustomIndicators($event)"
    customIndicatorNames="Open, Open (SMA)">
 </igx-financial-chart>
```

```ts
    public applyCustomIndicators(event: { sender: any, args: IgxFinancialChartCustomIndicatorArgs }) {
        if (event.args.index === 0) {
            const info: IgxFinancialEventArgs = event.args.indicatorInfo;
            const ds = info.dataSource;
            const open = ds.openColumn;
            for (let i = 0; i < ds.indicatorColumn.length; i++) {
                ds.indicatorColumn[i] = open[i];
            }
        } else {
            const info: IgxFinancialEventArgs = event.args.indicatorInfo;
            const ds = info.dataSource;
            const close = ds.closeColumn;
            for (let i = 0; i < ds.indicatorColumn.length; i++) {
                let startIndex = i - 9;
                if (startIndex < 0) {
                    startIndex = 0;
                }
                const count = (i - startIndex) + 1;

                let sum = 0;
                for (let j = startIndex; j <= i; j++) {
                    sum += close[j];
                }
                ds.indicatorColumn[i] = sum / count;
            }
        }
    }
```
