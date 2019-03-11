---
title: 금융 차트 창
_description: Ignite UI for Angular 금융 차트 컴포넌트는 간단하고 직관적인 API를 사용하여 재무 데이터를 표시하도록 쉽게 구성되어 있으며, 사용자가 데이터를 바인딩하면 차트는 데이터를 시각화하고 해석할 수 있는 다양한 방법을 제공합니다.
_keywords: Ignite UI for Angular, Angular, 네이티브 Angular 컴포넌트 세트, 네이티브 Angular 컨트롤, 네이티브 Angular 컴포넌트, 네이티브 Angular 컴포넌트 라이브러리, Angular 차트, Angular 차트 컨트롤, Angular 차트 예제, Angular 그리드 컴포넌트, Angular 차트 컴포넌트, Angular 금융 차트
_language: kr
---
## 금융 차트 창

`igx-financial-chart` 컨트롤에는 금융 데이터를 표시하는 복수의 창이 있습니다.

### 데모
<div class="sample-container loading" style="height: 550px">
    <iframe id="financial-chart-panes-iframe" src='{environment:demosBaseUrl}/charts/financial-chart-panes' width="100%" height="100%" seamless="" frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="financial-chart-panes-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기
    </button>
</div>

다음 창은 금융 차트 컨트롤에서 사용할 수 있습니다:
* 가격 창 - 선, 캔들 스틱, 바(OHLC), 추세선, 금융 오버레이를 사용하여 가격을 렌더링합니다.
* 인디케이터 창 - 별도의 차트에 모든 금융지표를 렌더링하고 `BollingerBands` 및 `PriceChannel` 오버레이가 Y축과 동일한 값 범위를 공유하기 위해서 가격 창에 렌더링됩니다.
* 볼륨 창 - 기둥, 선 및 영역 차트 유형을 사용하여 재고 볼륨을 상기의 모든 창 아래에 렌더링합니다.
* 줌 창 - 모든 창의 줌을 제어하며 항상 차트 하단에 렌더링됩니다.

### 인디케이터 창
금융지표는 종종 거래자가 주가 변화를 계측하고 추세를 확인하기 위해 사용됩니다. 이러한 인디케이터는 일반적으로 동일한 Y축 축척을 공유하지 않기 때문에 가격 창 아래에 표시됩니다.

기본적으로 인디케이터 창은 표시되지 않습니다. 툴 모음을 사용하면 최종 사용자가 런타임 시 표시할 인디케이터를 선택할 수 있습니다.
처음에 인디케이터 창을 표시하려면 다음의 코드와 같이 `indicatorTypes` 속성을 인디케이터 유형 중에서 하나 이상 설정해야 합니다:

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    indicatorTypes="AverageTrueRange,ForceIndex">
 </igx-financial-chart>
```

### 볼륨 창
볼륨 창은 지정한 기간 동안 거래된 주식 수를 나타냅니다. 낮은 볼륨은 적은 관심을 나타내는 반면 높은 볼륨은 거래가 많으며 높은 관심을 나타냅니다.  기둥, 선 또는 영역 차트 유형을 사용하여 표시할 수 있습니다. 툴 모음에서 차트 유형을 선택하면 최종 사용자가 런타임에 데이터를 렌더링할 볼륨 창이 표시됩니다. 창을 표시하려면 다음의 코드와 같이 볼륨 유형을 설정해야 합니다.

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    volumeType="Column">
 </igx-financial-chart>
```

### 가격 창
이 창은 주가를 표시하고 시간 경과에 따라 주가의 고가, 저가, 시작가 및 마감가를 표시합니다. 또한, 추세선 및 오버레이를 표시할 수 있습니다. 최종 사용자는 툴 모음에서 다른 차트 유형을 선택할 수 있습니다. 기본적으로 차트 유형은 `auto`으로 설정되어 있습니다. 다음의 코드와 같이 기본 설정을 무효화할 수 있습니다.

 ```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    chartType="Line">
 </igx-financial-chart>
```

복수의 데이터 소스 또는 데이터 점이 대량으로 있는 데이터 소스를 플로팅하는 경우에는 선형 차트 유형을 사용하는 것이 좋습니다.

### 줌 창
이 창은 표시된 모든 창을 줌할 수 있습니다. 이 창은 기본적으로 표시됩니다. 다음의 코드와 같이 `zoomSliderType`을 `none`으로 설정하면 해제할 수 있습니다.

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    zoomSliderType="none">
 </igx-financial-chart>
```

`zoomSliderType` 옵션을 `chartType` 옵션이 설정된 값과 동일하게 설정해야 합니다. 이렇게 하면 줌 슬라이더는 가격 창의 미리보기가 올바르게 표시됩니다. 다음의 코드는 이를 실행하는 방법을 보여줍니다:

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    chartType="Line"
    zoomSliderType="Line">
 </igx-financial-chart>
```


<div class="divider--half"></div>

### 추가 리소스
<div class="divider--half"></div>

* [차트 퍼포먼스](financialchart_performance.md)
