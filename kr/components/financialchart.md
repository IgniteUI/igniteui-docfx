---
title: 금융 차트 컴포넌트- 네이티브 Angular| Ignite UI for Angular
_description: Ignite UI for Angular 금융 차트 컴포넌트는 간단하고 직관적인 API를 사용하여 재무 데이터를 표시하도록 쉽게 구성되어 있으며, 사용자가 데이터를 바인딩하면 차트는 데이터를 시각화하고 해석할 수 있는 다양한 방법을 제공합니다.
_keywords: Ignite UI for Angular, Angular, 네이티브 Angular 컴포넌트 세트, 네이티브 Angular 컨트롤, 네이티브 Angular 컴포넌트, 네이티브 Angular 컴포넌트 라이브러리, Angular 차트, Angular 차트 컨트롤, Angular 차트 예제, Angular 그리드 컴포넌트, Angular 차트 컴포넌트, Angular 금융 차트
_language: kr
---

## 금융 차트

금융 차트는 간단하고 직관적인 API를 사용하여 금융 데이터를 쉽게 시각화할 수 있는 차트 컴포넌트입니다.

### 데모

<div class="sample-container" style="height: 550px">
    <iframe id="financial-chart-overview-sample-iframe" src='{environment:demosBaseUrl}/charts/financial-chart-overview-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="financial-chart-overview-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기
    </button>
</div>

<div class="divider--half"></div>

사용자가 데이터를 바인딩하면 차트는 데이터를 시각화하고 해석할 수 있는 다양한 방법을 제공합니다. 가격, 수량, 금융지표를 위한 다양한 표시 모드가 있습니다. 또한, 차트는 레이블 서식 설정을 사용하여 데이터에 컨텍스트를 부여합니다.

금융 차트 컴포넌트는 데이터 열을 분석하고 선택하며, 날짜/시간 열을 X축으로 사용하여 열기, 높음, 낮음, 닫기, 볼륨 열 또는 최초 5개의 수치 열을 Y축으로 사용합니다. 그 밖에도 사용자가 차트 유형을 바, 캔들, 기둥, 선으로 설정할 수 있습니다. 도구 모음, 가격 보기, 볼륨 보기, 인디케이터 보기 및 탐색 보기의 다섯 가지 주요 시각적 요소로 인해 데이터가 더 많이 인식됩니다.

`chartType` 속성을 다음 옵션 중 하나에 설정하여 차트 유형을 명시적으로 지정할 수 있습니다:

| 속성       | 설명                                                                                                                                                                                                                                                 |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bar`    | Specifies the bar series with markers at each data point                                                                                                                                                                                           |
| `candle` | Specifies the candle series                                                                                                                                                                                                                        |
| `column` | Specifies the column series                                                                                                                                                                                                                        |
| `line`   | Specifies the line series                                                                                                                                                                                                                          |
| `auto`   | Specifies automatic selection of chart type based on Data Adapter which suggest one of above values based names and number of numeric columns in your data. For example, it will suggest `bar` for data items with Open, High, Low, Close columns. |

다른 차트 창에 대한 정보는 [금융 차트 창](financialchart_panes.md) 항목을 참조하십시오.

```html
 <igx-financial-chart
    chartType="candle">
 </igx-financial-chart>
```

### 의존성

차트 패키지를 설치할 때 코어 패키지도 설치해야 합니다.

**npm install igniteui-Angular-charts igniteui-Angular-core**

금융 차트가 `NgModule`로 내보내기 되므로 `AppModule` 내부에 _IgxFinancialChartModule_을 불러오기 해야 합니다:

```typescript
// app.module.ts
import {IgxFinancialChartModule} from 'igniteui-Angular-charts/ES5/igx-financialchart-module'

@NgModule({
    imports: [
        ...
        IgxFinancialChartModule,
        ...
    ]
})
export class AppModule {}
```

<div class="divider--half"></div>

### 사용 방법

금융 차트 모듈을 불러오기 한 후 다음 단계는 데이터에 바인딩합니다.

`IgxFinancialChart` 컨트롤을 작성하려면 먼저 데이터를 바인딩해야 합니다. 다음의 코드 조작은 간단한 데이터 소스를 작성하는 방법을 보여줍니다.

```typescript
let data = [
	{ time: new Date(2013, 1, 1), open: 268.93, high: 268.93, low: 262.80, close: 265.00, volume: 6118146 },
	{ time: new Date(2013, 1, 4), open: 262.78, high: 264.68, low: 259.07, close: 259.98, volume: 3723793 },
	{ time: new Date(2013, 1, 5), open: 262.00, high: 268.03, low: 261.46, close: 266.89, volume: 4013780 },
	{ time: new Date(2013, 1, 6), open: 265.16, high: 266.89, low: 261.11, close: 262.22, volume: 2772204 },
	{ time: new Date(2013, 1, 7), open: 264.10, high: 264.10, low: 255.11, close: 260.23, volume: 3977065 },
	{ time: new Date(2013, 1, 8), open: 261.40, high: 265.25, low: 260.56, close: 261.95, volume: 3879628 },
	{ time: new Date(2013, 1, 11), open: 263.20, high: 263.25, low: 256.60, close: 257.21, volume: 3407457 },
	{ time: new Date(2013, 1, 12), open: 259.19, high: 260.16, low: 257.00, close: 258.70, volume: 2944730 },
	{ time: new Date(2013, 1, 13), open: 261.53, high: 269.96, low: 260.30, close: 269.47, volume: 5295786 },
	{ time: new Date(2013, 1, 14), open: 267.37, high: 270.65, low: 265.40, close: 269.24, volume: 3464080 },
	{ time: new Date(2013, 1, 15), open: 267.63, high: 268.92, low: 263.11, close: 265.09, volume: 3981233 }
];
```

다음의 코드는 금융 차트를 상기의 데이터에 바인딩하는 방법을 보여줍니다.

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px">
 </igx-financial-chart>
```

### 도구 모음

도구 모음이 금융 차트의 맨 위에 표시됩니다. 최종 사용자가 표시되는 데이터에 대한 다양한 세부 정보를 변경할 수 있고 다른 창을 표시할 수 있습니다. 도구 모음에는 다음의 선택기가 포함되어 있습니다:

-   인디케이터 유형 선택기 - 여러 유형의 금융지표를 선택할 수 있습니다. 가격이나 다른 인디케이터와 동일한 Y축 축척을 공유하지 않기 때문에 이러한 인디케이터는 가격 창 아래의 창에 표시됩니다.
-   오버레이 유형 선택기 - 사용자가 여러 유형의 금융 오버레이를 선택할 수 있습니다. 이러한 오버레이는 동일한 Y축 축척을 공유하기 때문에 금융 가격 시리즈와 함께 표시됩니다. `BollingerBands` 및 `PriceChannel`의 두 가지 유형의 오버레이가 있습니다.
-   추세선 유형 선택기 - 사용자가 여러 유형의 추세선을 선택할 수 있습니다. 추세선은 가격 창 및 볼륨 창 위에 추세선 레이어로 표시됩니다.
-   날짜 범위 선택기 - 사용자가 다른 범위 사전 설정을 선택하여 데이터를 표시할 수 있습니다. 데이터 범위가 1년 미만인 경우 일부 버튼이 작동하지 않습니다.
-   차트 유형 선택기 - 사용자가 금융 차트의 차트 유형을 선택할 수 있습니다. 이들은 가격 창에 표시됩니다.
-   볼륨 유형 선택기 - 사용자가 볼륨 창에서 재고 볼륨 데이터를 표시합니다. 사용자는 없음, 기둥, 선, 영역 차트 유형 중에서 선택할 수 있습니다.

금융 차트의 너비에 따라 도구 모음은 상기 부분에서 설명한 요소를 모두 포함하지 않을 수도 있습니다. 금융 차트 및 해당 컨테이너 너비를 늘리면 도구 모음에 더 많은 선택기가 표시됩니다.

또한, 차트 창의 수직 공간을 최대화하기 위해 도구 막대를 숨길 수 있습니다. 다음의 코드는 도구 막대를 숨기는 방법을 보여줍니다:

```html
 <igx-financial-chart
    isToolbarVisible="false">
 </igx-financial-chart>
```
