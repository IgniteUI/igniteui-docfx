---
제목: 데이터 차트 구성 요소 - 네이티브 Angular | Ignite UI for Angular
_description: Ignite UI for Angular 데이터 차트는 축, 마커, 시리즈, 범례 및 주석 레이어의 모듈 식 디자인을 제공하는 차트 구성 요소입니다. 이 차트를 사용하면 동일한 차트 영역에 이러한 시각적 요소의 인스턴스를 여러 개 만들어 복합 차트 뷰를 만들 수 있습니다.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Chart Component, Angular Data Chart
_language: kr
---

# Angular 금융 시리즈

이 항목에서는 [`IgxDataChartComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) 제어에서 다양한 유형의 금융 시리즈에 대해 설명합니다. 금융 시리즈는 주가과 같은 금융 데이터를 가져와서 가로 라인을 따라 OHLC바 또는 캔들스틱 컬렉션(예: [`IgxFinancialPriceSeriesComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialpriceseriescomponent.html))으로 렌더링하는 차트 시리즈 중 가장 간단하고 일반적인 형식의 그룹입니다.

## 데모

<div class="sample-container loading" style="height: 400px">
    <iframe id="data-chart-type-financial-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-financial-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-financial-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">STACKBLITZ 에서 보기
    </button>


</div>

<div class="divider--half"></div>

## 금융 시리즈의 유형

데이터 차트는 2개의 금융 오버레이와 30개 이상의 금융지표 및 시간 경과에 따라 높음, 낮음, 시작가, 마감가와 같은 주가를 표시하는 [`IgxFinancialPriceSeriesComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialpriceseriescomponent.html)를 지원합니다. [`displayType`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialpriceseriescomponent.html#displaytype) 속성을 사용하여 주가를 OHLC바 또는 캔들스틱으로 표시할 수 있습니다. 이 시리즈는 주가의 변화를 측정하고 동향을 분석하기 위해 다수의 금융지표 및 금융 오버레이와 결합하여 종종 사용됩니다.

## 금융 오버레이

금융 오버레이는 일반적으로 [`IgxFinancialPriceSeriesComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialpriceseriescomponent.html)
뒤에 표시되며 주가의 동향을 보여줍니다. 이러한 오버레이는 Y축에서 동일한 비율의 값을 사용하기 때문에 [`IgxFinancialPriceSeriesComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialpriceseriescomponent.html)를 표시하는 동일한 데이터 차트에 표시할 수 있습니다. 다음 목록은 모든 금융 오버레이 유형을 보여줍니다:

-   [`IgxBollingerBandsOverlayComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbollingerbandsoverlaycomponent.html)(BBO)는 가격의 표준 편차를 기반으로 하므로 가격 변동폭을 반영합니다. 밴드는 표준 편차가 증가할 때 더 넓어지고 표준 편차가 감소할 때 더 좁아지며 이동 평균에 의해 평탄해집니다. 사용자가 조정할 수 있는 표준 편차 및 평탄한 기간을 제외하고 BollingerBandsOverlay 너비의 비율에 영향을 주는 사용자가 조정 가능한 승수가 있으며,
-   [`IgxPriceChannelOverlayComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpricechanneloverlaycomponent.html)(PCO)는 가격 변동성 또는 2개의 평행선 간의 시간에 따른 가격 변화입니다. 아래 줄은 추세선으로 저가에 그려지고, 위쪽 줄은 채널선으로 고가에 기초합니다. 채널은 모든 시간대의 추세 방향을 보여줍니다. 가격 채널 또는 추세, 위, 아래 또는 옆으로 가능

## 금융지표

금융지표는 종종 거래자들이 변화를 측정하고 주가의 추세를 보여 주기 위해 사용됩니다. 이러한 지표는 일반적으로 동일한 Y축 비율을 공유하지 않기 때문에 [`IgxFinancialPriceSeriesComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialpriceseriescomponent.html)의 차트 위 또는 아래에 별도의 차트로 표시됩니다. 단, 차트 제어는 원하는 경우, 여러 축을 사용하고 축을 공유하여 동일한 플롯 영역에 가격 시리즈와 지표를 나타내도록 지원합니다. 이에 대한 자세한 것은 [Axis Sharing and Multiple Axes](data-chart-axis-sharing.md) 항목을 참조하십시오. 또한, 모든 금융지표에는 인디케이터가 선, 열 또는 영역을 사용하여 렌더링되는지 여부를 결정하는 [`displayType`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialpriceseriescomponent.html#displaytype) 속성이 있습니다. 다음 목록은 모든 금융지표 유형을 보여줍니다:

-   [`IgxAbsoluteVolumeOscillatorIndicatorComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxabsolutevolumeoscillatorindicatorcomponent.html)(AVO)는 2개의 평균 볼륨 측정값의 차이를 계산합니다. 백분율 볼륨 오실레이터와 유사하지만 점수 범위는 -100%~+100%입니다. 인디케이터는 볼륨 추세가 증가하는지 또는 감소하는지 식별하는 데 사용됩니다. 사용자는 분석 기간을 선택할 수 있으며
-   [`IgxAccumulationDistributionIndicatorComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxaccumulationdistributionindicatorcomponent.html)(ADI)는 매우 인기 있는 볼륨 관련 인디케이터입니다. 투자자가 매도 또는 매수에 대한 차이를 살펴봄으로써 주식, 증권 또는 지수의 공급 및 수요를 시간 경과에 따라 평가하며
-   [`IgxAverageDirectionalIndexIndicatorComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxaveragedirectionalindexindicatorcomponent.html) |  (ADX)는 추세 방향에 상관없이 추세 강도를 측정합니다. 이 인디케이터는 일반적으로 주식 동향의 강도와 방향을 결정하는 데 사용되며
-   [`IgxAverageTrueRangeIndicatorComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxaveragetruerangeindicatorcomponent.html) |  (ATR)는 주어진 기간 내에 증권의 가격 이동이나 변동성을 측정합니다. 이 인디케이터는 가격 방향이나 지속 기간의 측정이 아니라 가격 이동 또는 변동성의 양입니다. 평균 참 범위(ATR)은 종종 매일, 매주 또는 매월을 포함한 여러 기준을 사용하여 14일 기간을 주기로 계산됩니다. 평균 참 범위는 지난 14일 기간의 TR 값의 지수 이동 평균입니다. 실제 사용된 기간은 사용자 선호에 따라 다를 수 있으며
-   [`IgxBollingerBandWidthIndicatorComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbollingerbandwidthindicatorcomponent.html) |  (BBW)는 [`IgxBollingerBandsOverlayComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbollingerbandsoverlaycomponent.html)와 함께 사용됩니다. 이 인디케이터는 주어진 점에서 볼링거 밴드 폭을 나타냅니다. 편차가 클수록 밴드가 넓어집니다. 대역폭(하한값)을 줄이면 표준 편차가 줄어들고 대역폭(상한값)을 넓히면 가격의 표준 편차가 증가함을 나타냅니다. [`IgxBollingerBandsOverlayComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbollingerbandsoverlaycomponent.html)와 같은 계수 인자를 지원하여 값을 일치시킬 수 있으며
-   [`IgxChaikinVolatilityIndicatorComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxchaikinvolatilityindicatorcomponent.html)(CHV)는 특정 기간 동안의 고가 및 저가 가격 차이의 지수 이동 평균의 변화율을 보여줌으로써 증권의 변동성을 반영합니다.
-   [`IgxChaikinOscillatorIndicatorComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxchaikinoscillatorindicatorcomponent.html)(COI)는 누적/분포 인디케이터의 추세를 식별하는 데 사용됩니다. 체킨 오실레이터는 누적/분포 인디케이터의 3일 지수 이동 평균(EMA)에서 뺀 누적/분포 인디케이터의 10일 EMA입니다.
-   [`IgxCommodityChannelIndexIndicatorComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcommoditychannelindexindicatorcomponent.html)(CCI)는 증권의 주기적 추세를 파악하는 데 사용됩니다. 이 인디케이터는 증권 가격이 식별할 수 있는 주기에 따라 변한다는 가정에 기초한 것입니다. 특정 기간 동안의 표준 가격(SMATP)의 단순 이동 평균(SMA)과 이전 기간의 표준 가격(TP)의 차이를 상수와 절대 평균 편차의 곱으로 나눠 계산한 것입니다.
-   [`IgxDetrendedPriceOscillatorIndicatorComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdetrendedpriceoscillatorindicatorcomponent.html) (DPO)는 단기 추세를 파악하기 위해 장기 가격 동향을 제어하도록 설계되었습니다. 이것은 이동 평균의 변화에 의한 것이며 모멘텀 오실레이터가 아닙니다.
-   [`IgxEaseOfMovementIndicatorComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxeaseofmovementindicatorcomponent.html)(EOM)는 증권 가격 변동에 필요한 볼륨을 파악하는 데 사용됩니다. 일반적으로 이동 평균으로 부드럽게 처리됩니다.
-   [`IgxFastStochasticOscillatorIndicatorComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfaststochasticoscillatorindicatorcomponent.html)(FSO)는 특정 기간 동안 고-저 범위에 비례하여 종가를 표시합니다. 스탁캐스틱 오실레이터의 3가지 유형: 패스트, 슬로우, 풀. 이 인디케이터는 0~100 비율을 사용하여 특정 기간 동안 고/저 범위에 비례한 현재 마감가의 관계를 나타내는 모멘텀 인디케이터입니다. 상승하는 시장에서는 가격이 100에 가깝고, 하락하는 시장에서는 가격이 0에 가깝다는 전제에 기반하고 있습니다. 이 인디케이터는 매수 또는 매도 차이를 식별하는 데 사용됩니다.
-   [`IgxForceIndexIndicatorComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxforceindexindicatorcomponent.html)(FII)는 금융 분석가들이 주식 추세가 긍정적인지 부정적인지를 판단하기 위해 사용하는 가격 및 볼륨 오실레이터입니다. 강도 지수는 오늘 종가에서 어제 종가를 뺀 다음 그 차액을 현재 날짜의 볼륨과 곱하여 계산합니다. 오늘 종가가 어제보다 높은 경우에는 강도는 긍정적입니다. 종가가 어제보다 낮은 경우에는 강도는 부정적입니다.
-   [`IgxFullStochasticOscillatorIndicatorComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfullstochasticoscillatorindicatorcomponent.html)(FSO)는 특정 기간 동안 고-저 범위에 비례하여 종가를 표시합니다. 이 인디케이터는 [`IgxSlowStochasticOscillatorIndicatorComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxslowstochasticoscillatorindicatorcomponent.html)와 유사하지만 시간대 사용자 지정이 가능합니다.
-   [`IgxMarketFacilitationIndexIndicatorComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxmarketfacilitationindexindicatorcomponent.html)(MFI)는 효율성 측정을 위해 분석에 가격과 볼륨을 결합합니다. 낮은 가격과 높은 가격의 차이를 볼륨으로 나누어 계산됩니다.
-   [`IgxMassIndexIndicatorComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxmassindexindicatorcomponent.html)(MII)는 추세 역전을 찾는 데 사용됩니다. 가격 범위가 넓어지면 반전이 일어날 수 있다는 전제에 기반하고 있습니다. 이 계산은 이전 거래 범위(하이 마이너스 로우)를 비교합니다. EMA는 이러한 용도로 사용됩니다. 이 인디케이터는 상당한 움직임이 있으면 증가하고 작은 움직임이 있으면 감소하며
-   [`IgxMedianPriceIndicatorComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxmedianpriceindicatorcomponent.html)(MPI)는 고가와 저가 사이의 중간점을 나타냅니다. 중간값은 중심 경향의 척도입니다. 이 인디케이터는 중간값의 차트를 표시합니다.
-   [`IgxMarketFacilitationIndexIndicatorComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxmarketfacilitationindexindicatorcomponent.html)(MFI)는 모멘텀 지표로 상대 강도 지수(RSI)와 유사하며, MFI는 증권에 들어오고 나가는 자금 흐름의 척도로 사용되며 추세 역전을 예측하는 데 사용할 수 있습니다. MFI 범위는 0~100까지이며 RSI처럼 해석됩니다.
-   [`IgxMovingAverageConvergenceDivergenceIndicatorComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxmovingaverageconvergencedivergenceindicatorcomponent.html)(MACD)는 금융 서비스에서 가장 대표적인 인디케이터 중 하나입니다. 주가 추세의 강도, 방향, 모멘텀 또는 길이 변화를 파악하는 데 사용됩니다. MACD는 종가의 두 지수 이동 평균(EMA)의 차이로 계산됩니다. 그 차이는 시간 경과에 따라 차이의 이동 평균으로 차트화됩니다.
-   [`IgxNegativeVolumeIndexIndicatorComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnegativevolumeindexindicatorcomponent.html)(NVI)는 [`IgxPositiveVolumeIndexIndicatorComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpositivevolumeindexindicatorcomponent.html)와 함께 자주 사용됩니다. 이 인디케이터는 불 마켓을 파악하는 데 사용할 수 있습니다. 이 두 인디케이터는 적은 볼륨의 날에 스마트 머니 거래를 하며, 많은 볼륨의 날에 정보가 부족하거나 지나치게 낙관적인 투자자가 거래한다는 전제에 기반하고 있습니다.
-   [`IgxOnBalanceVolumeIndicatorComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxonbalancevolumeindicatorcomponent.html)(OBV)는 주식의 총 판매량의 누계를 계산하고 해당 주식의 유입(구매) 또는 유출(판매) 여부를 표시합니다. 하루 동안의 총 판매량은 전날보다 가격이 높았는지 낮았는지에 따라 양수 또는 음수 값이 부여됩니다. 높은 종가는 양수 값을 산출하고, 낮은 종가는 음수 값을 발생합니다. 이 값은 누계에 누적됩니다.
-   [`IgxPercentagePriceOscillatorIndicatorComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpercentagepriceoscillatorindicatorcomponent.html)(PPO)는 두 이동 평균 사이의 차이를 보여줍니다. 이 차이는 큰 이동 평균의 백분율로 표시됩니다. 최종 사용자는 분석 기간을 선택합니다.
-   [`IgxPercentageVolumeOscillatorIndicatorComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpercentagevolumeoscillatorindicatorcomponent.html)(PVO)는 장기 및 단기 기간을 사용하여 완만해진 볼륨 사이의 백분율 차이입니다. 이 인디케이터는 0을 중심으로 맴돕니다. 사용자는 분석할 다양한 기간 값을 선택할 수 있습니다. 이 인디케이터는 그래픽으로 표시하면 볼륨 패턴을 감지하는 데 유용할 수 있습니다. PVO가 증가하면 볼륨 수준이 증가하고, PVO가 감소하면 볼륨 수준이 감소함을 나타냅니다.
-   [`IgxPositiveVolumeIndexIndicatorComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpositivevolumeindexindicatorcomponent.html)(PVI)는 네거티브 볼륨 인덱스와 함께 사용되며 불 마켓을 파악하는 데 사용할 수 있습니다. 이 두 인디케이터는 적은 볼륨의 날에 스마트 머니 거래를 하며, 많은 볼륨의 날에 정보가 부족하거나 지나치게 낙관적인 투자자가 거래한다는 전제에 기반하고 있습니다.
-   [`IgxPriceVolumeTrendIndicatorComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpricevolumetrendindicatorcomponent.html)(PVT)는 일일 볼륨의 일부를 더하거나 빼서 금전 흐름을 측정하는 데 사용되는 모멘텀 기반의 인디케이터입니다. 이 가산 또는 감산 값은 전날 종가 대비 현재 날의 가격 상승 또는 하락 량에 따라 달라집니다. 이 인디케이터는 주로 추세를 확인하는 데 사용되며 또한 차이로 인해 발생할 수 있는 거래 신호를 포착하기 위해 사용됩니다.
-   [`IgxPriceVolumeTrendIndicatorComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpricevolumetrendindicatorcomponent.html)(PVT)는 일일 볼륨의 일부를 더하거나 빼서 금전 흐름을 측정하는 데 사용되는 모멘텀 기반의 인디케이터입니다. 이 가산 또는 감산 값은 전날 종가 대비 현재 날의 가격 상승 또는 하락 량에 따라 달라집니다. 이 인디케이터는 주로 추세를 확인하는 데 사용되며 또한 차이로 인해 발생할 수 있는 거래 신호를 포착하기 위해 사용됩니다.
-   [`IgxRelativeStrengthIndexIndicatorComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxrelativestrengthindexindicatorcomponent.html)(RSI)는 일반적으로 특정 기간 동안 종가에 따라 산출된 시장 강세/약세의 측정에 사용됩니다. 가격은 시장이 강세 기간일 때 높고, 약세 기간일 때 낮다는 전제에 기반하고 있습니다. RSI는 최고치 대 최저치의 비율입니다. 범위는 0~100입니다.
-   [`IgxSlowStochasticOscillatorIndicatorComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxslowstochasticoscillatorindicatorcomponent.html)(SSO)는 특정 기간 동안 고-저 범위에 비례하여 종가를 표시합니다. 이 인디케이터는 구매 또는 판매 차이를 파악하는 데 사용되며, 이동 평균(SMA)에 3일 기간을 사용합니다.
-   [`IgxStandardDeviationIndicatorComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstandarddeviationindicatorcomponent.html)(SDI)는 주가나 변동성의 통계적 변이성을 측정합니다. 개인 증권의 종가와 평균 증권의 종가 차이를 분산이라고 합니다. 분산이 클수록 표준 편차는 더 커지며 따라서 변동성이 커집니다. 분산이 작을수록(개인 종가와 평균 가격의 차이) 표준 편차가 작아지고 가격 변동성이 낮아집니다.
-   [`IgxStochRSIIndicatorComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstochrsiindicatorcomponent.html)(SRSI)는 특정 기간 내에 증권을 과도하게 구매하거나 초과 판매할 경우에 측정합니다. 값 범위는 0~1입니다. 이 인디케이터는 [`IgxRelativeStrengthIndexIndicatorComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxrelativestrengthindexindicatorcomponent.html) (RSI) 데이터에 스탁캐스틱 오실레이터 수식을 적용하여 계산합니다.
-   [`IgxTRIXIndicatorComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtrixindicatorcomponent.html)(TRIX)는 과다 매입 또는 과다 매도된 증권을 식별하는 데 사용되는 모멘텀 측정입니다. 다른 오실레이터와 마찬가지로 TRIX 점수도 0을 중심으로 맴돕니다. 양수 값은 과다 매입된 증권을 나타내며, 음수 값은 과다 매도된 증권을 나타냅니다. TRIX는 특정 기간 동안 가격의 3배 지수 이동 평균을 사용하여 계산합니다. 신호 라인은 증권 가격이 향후 어디에 위치 할지를 나타내는 데 자주 사용됩니다.
-   [`IgxTypicalPriceIndicatorComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtypicalpriceindicatorcomponent.html)(TPI)는 특정 기간 동안 증권의 고가, 저가 및 종가의 산술 평균을 나타내는 일반적인 금융 피벗 포인트입니다.
-   [`IgxUltimateOscillatorIndicatorComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxultimateoscillatorindicatorcomponent.html)(UOI)는 단일 기간을 기준으로 하는 다른 인디케이터와 관련된 변동성과 노이즈를 줄이기 위해 3가지 다른 기간의 가중 평균을 사용합니다. 이것은 범위 제한 인디케이터이므로 지수는 0~100입니다.
-   [`IgxWeightedCloseIndicatorComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxweightedcloseindicatorcomponent.html)(WCI)는 하루 동안의 고가, 저가 및 종가 평균을 나타내는 점에서 [`IgxTypicalPriceIndicatorComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtypicalpriceindicatorcomponent.html)와 유사합니다. 단, 이 인디케이터는 종가에 더 중점을 두며 산술 평균을 계산할 때 2번 포함됩니다.
-   [`IgxWilliamsPercentRIndicatorComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxwilliamspercentrindicatorcomponent.html)(WPRI)는 스탁캐스틱 오실레이터와 유사합니다. 단, 비율 범위는 0~-100입니다. 과다 매입 및 과다 매도 증권을 식별하는 데 유용합니다. 이 인디케이터는 해당 기간의 가장 높은 최고치와 해당 기간의 가장 높은 최고치에서 가장 낮은 최저치를 뺀 값의 현재 종가 사이의 차이로 나누어 계산합니다.

## 필요한 축

[`IgxDataChartComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) 제어는 다양한 유형의 축을 제공하지만 모든 금융 시리즈에서는 Y축으로 [`IgxNumericYAxisComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html)를, X축으로 [`IgxCategoryXAxisComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html), [`IgxOrdinalTimeXAxisComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html) 또는 [`IgxTimeXAxisComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html)만 사용할 수 있습니다.

## 필요한 데이터

금융 시리즈, 인디케이터 및 오버레이의 데이터 요구 사항은 다음과 같습니다:

-   데이터 소스는 배열 또는 데이터 항목 목록이어야 함
-   데이터 소스에는 하나 이상의 데이터 항목이 포함되어야 하며 그렇지 않을 경우에는 차트가 금융 시리즈를 렌더링하지 않습니다.
-   모든 데이터 항목에는 금융 축의 `라벨` 속성(예: [`IgxCategoryXAxisComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html))에 매핑해야 하는 하나 이상의 데이터 열(문자열 또는 날짜 시간)이 포함되어 있어야 함
-   모든 데이터 항목에는 금융 시리즈의 속성을 사용하여 매핑해야 하는 5개의 숫자 데이터 열을 이 포함되어 있어야 함: `OpenMemberPath`, `HighMemberPath`, `LowMemberPath`, `CloseMemberPath`, `VolumeMemberPath`

[SampleFinancialData](data-chart-data-sources-financial.md)는 위의 데이터 요구 사항을 충족하는 데이터 소스로 사용할 수 있습니다.

```ts
this.state = { dataSource: SampleFinancialData.create() }
```

## 필요한 모듈

금융 시리즈에는 다음과 같은 모듈이 필요합니다:

```ts
// axis' modules:
import { IgxNumericYAxis } from 'igniteui-angular-charts';
import { IgxCategoryXAxis } from 'igniteui-angular-charts';
// series' modules:
import { IgxFinancialPriceSeries } from 'igniteui-angular-charts';
import { IgxBollingerBandsOverlay } from 'igniteui-angular-charts';
import { IgxMedianPriceIndicator } from 'igniteui-angular-charts';
// data chart's modules:

import { IgxDataChartCoreModule } from 'igniteui-angular-charts';

// in app.module.ts file
@NgModule({
    imports: [
        // ...
        IgxDataChartCoreModule,
        // ...
    ]
})
```

## 코드 예제

이 코드는 [`IgxFinancialPriceSeriesComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialpriceseriescomponent.html), [`IgxBollingerBandsOverlayComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbollingerbandsoverlaycomponent.html) 및 [`IgxMedianPriceIndicatorComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxmedianpriceindicatorcomponent.html)를 사용하여 데이터 차트의 예를 만드는 방법을 보여줍니다. 이 시리즈는 동일한 X축과 Y축을 사용하지만 여러 축을 사용하여 서로 다른 시리즈에 할당할 수 있습니다. 자세한 것은 [축 공유 및 다중 축](data-chart-axis-sharing.md) 항목을 참조하십시오.

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-category-x-axis name="xAxis" label="Date"></igx-category-x-axis>
    <igx-numeric-y-axis  name="yAxis"></igx-numeric-y-axis>
    <igx-bollinger-bands-overlay
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        lowMemberPath="Low"
        highMemberPath="High"
        openMemberPath="Open"
        closeMemberPath="Close"
        volumeMemberPath="Volume">
    </igx-bollinger-bands-overlay>

    <igx-financial-price-series
        name="series2"
        xAxisName="xAxis"
        yAxisName="yAxis"
        displayType="Candlestick"
        lowMemberPath="Low"
        highMemberPath="High"
        openMemberPath="Open"
        closeMemberPath="Close"
        volumeMemberPath="Volume">
    </igx-financial-price-series>

    <igx-median-price-indicator
        name="series3"
        xAxisName="xAxis"
        yAxisName="yAxis"
        displayType="Line"
        lowMemberPath="Low"
        highMemberPath="High"
        openMemberPath="Open"
        closeMemberPath="Close"
        volumeMemberPath="Volume">
    </igx-median-price-indicator>
 </igx-data-chart>
```

## 추가 리소스

-   [축 유형](data-chart-axis-types.md)
-   [축 공유](data-chart-axis-sharing.md)
-   [차트 범례](data-chart-legends.md)
-   [시리즈 주석](data-chart-series-annotations.md)
-   [시리즈 강조 표시](data-chart-series-highlighting.md)
-   [시리즈 마커](data-chart-series-markers.md)
-   [시리즈 도구 설명](data-chart-series-tooltips.md)
-   [시리즈 추세선](data-chart-series-trendlines.md)
-   [시리즈 유형](data-chart-series-types.md)
