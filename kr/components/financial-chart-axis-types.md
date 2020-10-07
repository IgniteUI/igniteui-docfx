---
제목: 금융 차트 | 데이터 비주얼라이제이션 도구 | Infragistics | 차트 유형
_description: 재무 차트 구성 요소를 사용하여 간단한 API를 사용하여 재무 데이터를 시각화하십시오. 자세한 정보는 데모, 종속성, 사용법 및 도구 모음을보십시오.
_keywords: financial chart, Ignite UI for Angular, Infragistics
_language: kr
---

# Angular 차트 유형 탐색

`XamFinancialChart` 제어에서는 축은 축 기본 선, 눈금 표시, 제목 및 축 라벨 모양을 설정하는 기본 속성을 제공합니다.

## 데모

<div class="sample-container loading" style="height: 500px">
    <iframe id="financial-chart-axis-types-iframe" src='{environment:dvDemosBaseUrl}/charts/financial-chart-axis-types' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="financial-chart-axis-types-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">STACKBLITZ 에서 보기
    </button>


</div>

<div class="divider--half"></div>

기본적으로 레이블을 명시적으로 설정할 필요는 없습니다. 금융 차트는 제공한 데이터 내에서 최초의 적절한 속성을 사용하고 이를 레이블에 사용합니다.

## 축 간격

금융 차트 제어에서 `YAxisInterval` 속성은 주 격자선 및 축 레이블이 축에 렌더링되는 빈도를 지정합니다. 마찬가지로 `YAxisMinorInterval` 속성은 축에 부 격자선이 렌더링되는 빈도를 지정합니다.

다음 코드 조각은 Y축의 간격을 설정하는 방법을 보여줍니다.

```html
 <igx-financial-chart
    yAxisInterval="200"
    yAxisMinorInterval="50"
    yAxisMajorStroke="Black"
    yAxisMinorStroke="Gray"
    yAxisMinorStrokeThickness="0.5"
    yAxisMajorStrokeThickness="0.5" >
 </igx-financial-chart>
```

<div class="divider--half"></div>

## 축 레이블

금융 차트 컨트롤을 사용하면 차트에 표시되는 레이블의 구성 및 서식을 완전히 제어할 수 있습니다. 회전 각도, 여백, 수평/수직 정렬, 불투명도, 패딩, 표시 상태를 변경할 수 있습니다.

다음 코드 예제에서는 스타일 속성을 사용하여 X축에 레이블을 스타일하는 방법을 보여줍니다.

```html
<igx-financial-chart
    xAxisLabelTextStyle="8pt Verdana"
    xAxisLabelTextColor="Gray"
    xAxisLabelTopMargin="5"
    xAxisLabelAngle="0"
    yAxisLabelTextStyle="8pt Verdana"
    yAxisLabelTextColor="Gray"
    yAxisLabelLeftMargin="5"
    yAxisLabelAngle="0"
    width="850px"
    height="600px"
    [dataSource]="data">
</igx-financial-chart>
```

<div class="divider--half"></div>

## 축 모드

`XamFinancialChart` 제어를 사용하면 X축 및 Y축에 다른 모드를 설정할 수 있습니다.
X축의 경우 다음 모드 중에서 선택할 수 있습니다:

-   Time - 이 모드는 데이터의 갭을 X축에 스페이스를 사용해 렌더링하는데 예를 들면, 주간이나 공휴일에 주식 거래가 없음을 나타냅니다.
-   Ordinal - 이 모드는 데이터가 없는 날짜 영역을 축소합니다. 이것이 기본값입니다.

Y축의 경우 다음 모드 중에서 선택할 수 있습니다:

-   Numeric - 이 모드는 데이터의 정확한 값을 차트화합니다. 이것이 기본값입니다.
-   PercentChange - 이 모드는 제공된 최초의 데이터 포인트에 상대되는 백분율 변화로 데이터를 표시합니다.

다음의 코드 예제는 축의 모드를 설정하는 방법을 보여줍니다:

```html
<igx-financial-chart
    xAxisMode="time"
    yAxisMode="percentChange"
    width="850px"
    height="600px"
    [dataSource]="data">
</igx-financial-chart>
```

<div class="divider--half"></div>

## 축 범위

금융 차트 컨트롤에서 숫자 축의 범위는 축 시작부터 끝까지이며 데이터의 최소값에서 최대값까지의 수치 값의 차이입니다. 범위 최소값은 축의 최소값입니다. 범위 최대값은 축의 최대값입니다. 기본적으로 금융 차트 컨트롤은 차트 플롯 영역을 최대화하기 위해 최저 및 최고 데이터 점을 기준으로 Y축 범위의 최소값 및 최대값을 계산합니다. 축의 최소값과 최대값을 자동으로 계산하면 데이터 점의 세트에 적합하지 않을 수 있습니다. 예를 들면, 데이터의 최소값이 850인 경우, Y축의 `YAxisMinimumValue` 속성을 사용하여 축의 최소값을 800으로 설정하면 축의 최소값과 데이터 점의 최소값 사이에 50의 스페이스 값이 생깁니다. Y축의 `YAxisMaximumValue` 속성을 사용하여 축의 최대값과 데이터 점의 최대값에도 동일하게 적용할 수 있습니다.

다음 예제 코드는 Y축의 축 범위를 변경하는 방법을 보여줍니다.

```html
 <igx-financial-chart
    yAxisMinimumValue="-200"
    yAxisMaximumValue="1000"
    width="850px"
    height="600px"
    [dataSource]="data">
 </igx-financial-chart>
```

<div class="divider--half"></div>

## 축 축척

금융 차트 컨트롤에서 차트의 데이터가 Y축에 대해 대수적으로 매핑되는지 여부를 제어할 수 있는데 이 작업은 다음의 속성을 설정하여 실행합니다:

-   `YAxisIsLogarithmic` - Y축이 선형 축적 대신에 대수 축적을 사용하는지 여부를 지정합니다. 기본적으로 이 속성은 false로 설정됩니다.
-   `YAxisLogarithmBase` - Y축에 데이터 항목의 위치를 매핑할 때 로그 함수에 사용하는 기준값입니다.
    yAxisIsLogarithmic이 true인 경우에만 유효합니다.

다음의 코드 조각은 X축에서 눈금 표시의 색상, 길이, 두께를 설정하는 방법을 보여줍니다.

```html
 <igx-financial-chart
    yAxisIsLogarithmic="true"
    yAxisLogarithmBase="10"
    width="850px"
    height="600px"
    [dataSource]="data">
 </igx-financial-chart>
```

<div class="divider--half"></div>

## 축 눈금

눈금 표시는 축에 점을 표시합니다. 축적의 특정 수치 점 또는 카테고리 축의 카테고리 값을 나타냅니다. X축 및 Y축 레이블의 길이, 두께, 색상을 변경할 수 있습니다.

다음의 코드 조각은 X축에서 눈금 표시의 색상, 길이, 두께를 설정하는 방법을 보여줍니다.

```html
 <igx-financial-chart
    xAxisTickLength="10"
    xAxisTickStrokeThickness="1"
    xAxisTickStroke="Gray"
    width="850px"
    height="600px"
    [dataSource]="data">
 </igx-financial-chart>
```

<div class="divider--half"></div>

## 축 제목

금융 차트 컨트롤의 축 제목 기능을 사용하면 차트의 X축 및 Y축에 맥락 정보를 추가할 수 있습니다. 금융 차트는 X축 및 Y축 제목의 글꼴 스타일, 여백, 정렬 등을 다양하게 변경하여 룩 앤드 필을 사용자 정의할 수 있습니다.

다음의 코드 예제는 X축 및 Y축의 제목을 설정하고 사용자 지정하는 방법을 보여줍니다.

```html
<igx-financial-chart
      xAxisTitle="Data Range"
      xAxisTitleTextColor="Black"
      xAxisTitleTextStyle="15pt Times New Roman|Georgia|Serif"
      xAxisTitleAngle="0"
      yAxisTitle="Stock Prices ($)"
      yAxisTitleTextColor="Black"
      yAxisTitleAngle="90"
      width="850px"
      height="600px"
      [dataSource]="data">
 </igx-financial-chart>
```

<div class="divider--half"></div>
