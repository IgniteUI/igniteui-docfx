---
title: 금융 차트-사용자 인디케이터
_description: Ignite UI for Angular 금융 차트 컴포넌트는 간단하고 직관적인 API를 사용하여 재무 데이터를 표시하도록 쉽게 구성되어 있으며, 사용자가 데이터를 바인딩하면 차트는 데이터를 시각화하고 해석할 수 있는 다양한 방법을 제공합니다.
_keywords: Ignite UI for Angular, Angular, 네이티브 Angular 컴포넌트 세트, 네이티브 Angular 컨트롤, 네이티브 Angular 컴포넌트, 네이티브 Angular 컴포넌트 라이브러리, Angular 차트, Angular 차트 컨트롤, Angular 차트 예제, Angular 그리드 컴포넌트, Angular 차트 컴포넌트, Angular 금융 차트
_language: kr
---
## 사용자 인디케이터

`igx-financial-chart` 컨트롤을 사용하면 인디케이터 창에 표시하는 사용자 금융지표를 정의할 수 있습니다.

### 데모

<div class="sample-container loading" style="height: 550px">
    <iframe id="financial-chart-custom-indicators-iframe" src='{environment:demosBaseUrl}/charts/financial-chart-custom-indicators' width="100%" height="100%" seamless="" frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="financial-chart-custom-indicators-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기
    </button>
</div>

<div class="divider--half"></div>

`igx-financial-chart`에서 사용자 금융지표를 사용하려면 `customIndicatorNames` 속성에 이름을 추가하고 `applyCustomIndicators` 이벤트에서 해당 값의 계산을 실행합니다.

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

```typescript
    public applyCustomIndicators(event: { sender: any, args: FinancialChartCustomIndicatorArgs }) {
        if (event.args.index === 0) {
            const info: FinancialEventArgs = event.args.indicatorInfo;
            const ds = info.dataSource;
            const open = ds.openColumn;
            for (let i = 0; i < ds.indicatorColumn.length; i++) {
                ds.indicatorColumn[i] = open[i];
            }
        } else {
            const info: FinancialEventArgs = event.args.indicatorInfo;
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
