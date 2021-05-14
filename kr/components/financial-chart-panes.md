---
제목: 금융 차트 | 데이터 비주얼라이제이션 도구 | Infragistics | 창
_description: 재무 차트 구성 요소를 사용하여 간단한 API를 사용하여 재무 데이터를 시각화하십시오. 자세한 정보는 데모, 종속성, 사용법 및 도구 모음을보십시오.
_keywords: financial chart, Ignite UI for Angular, Infragistics
_language: kr
---

# Angular 금융 차트 창

[`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html) 제어에는 금융 데이터를 표시하는 복수의 창이 있습니다.

## 데모

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-panes"
           github-src="charts/financial-chart/panes">
</code-view>

<div class="divider--half"></div>

다음 창은 금융 차트 컨트롤에서 사용할 수 있습니다:

-   가격 창 - 선, 캔들 스틱, 바(OHLC), 추세선, 금융 오버레이를 사용하여 가격을 렌더링합니다.
-   Indicator Pane - 별도의 차트에 모든 금융지표를 렌더링하고 `BollingerBands` 및 `PriceChannel` 오버레이가 Y축과 동일한 값 범위를 공유하기 위해서 가격 창에 렌더링됩니다.
-   볼륨 창 - 기둥, 선 및 영역 차트 유형을 사용하여 재고 볼륨을 상기의 모든 창 아래에 렌더링합니다.
-   줌 창 - 모든 창의 줌을 제어하며 항상 차트 하단에 렌더링됩니다.

## 인디케이터 창

금융지표는 종종 거래자가 주가 변화를 계측하고 추세를 확인하기 위해 사용됩니다. 이러한 인디케이터는 일반적으로 동일한 Y축 축척을 공유하지 않기 때문에 가격 창 아래에 표시됩니다.

기본적으로 인디케이터 창은 표시되지 않습니다. 도구 모음을 사용하면 최종 사용자가 런타임 시 표시할 인디케이터를 선택할 수 있습니다.
처음에 인디케이터 창을 표시하려면 다음의 코드와 같이 `indicatorTypes` 속성을 인디케이터 유형 중에서 하나 이상 설정해야 합니다:

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    indicatorTypes="AverageTrueRange,ForceIndex">
 </igx-financial-chart>
```

## 볼륨 창

볼륨 창은 지정한 기간 동안 거래된 주식 수를 나타냅니다. 낮은 볼륨은 적은 관심을 나타내는 반면 높은 볼륨은 거래가 많으며 높은 관심을 나타냅니다.  기둥, 선 또는 영역 차트 유형을 사용하여 표시할 수 있습니다. 도구 모음에서 차트 유형을 선택하면 최종 사용자가 런타임에 데이터를 렌더링할 볼륨 창이 표시됩니다. 창을 표시하려면 다음의 코드와 같이 볼륨 유형을 설정해야 합니다.

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    volumeType="Column">
 </igx-financial-chart>
```

## 가격 창

이 창은 주가를 표시하고 시간 경과에 따라 주가의 고가, 저가, 시작가 및 마감가를 표시합니다. 또한, 추세선 및 오버레이를 표시할 수 있습니다. 최종 사용자는 도구 모음에서 다른 차트 유형을 선택할 수 있습니다. 기본적으로 차트 유형은 `Auto`로 설정되어 있습니다. 다음의 코드와 같이 기본 설정을 무효화할 수 있습니다.

```html
<igx-financial-chart
   [dataSource]="data"
   width="850px"
   height="600px"
   chartType="Line">
</igx-financial-chart>
```

복수의 데이터 소스 또는 데이터 점이 대량으로 있는 데이터 소스를 플로팅하는 경우에는 선형 차트 유형을 사용하는 것이 좋습니다.

## 줌 창

이 창은 표시된 모든 창을 줌할 수 있습니다. 이 창은 기본적으로 표시됩니다. 다음의 코드와 같이 [`zoomSliderType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#zoomslidertype)을 `none`으로 설정하면 해제할 수 있습니다:

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    zoomSliderType="none">
 </igx-financial-chart>
```

[`zoomSliderType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#zoomslidertype) 옵션을 [`chartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#charttype) 옵션이 설정된 값과 동일하게 설정해야 합니다. 이렇게 하면 줌 슬라이더는 가격 창의 미리보기가 올바르게 표시됩니다. 다음의 코드는 이를 실행하는 방법을 보여줍니다:

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

## 추가 리소스

<div class="divider--half"></div>

-   [차트 퍼포먼스](financial-chart-performance.md)
