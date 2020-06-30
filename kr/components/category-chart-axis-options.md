---
제목: 카테고리 차트 | 데이터 비주얼라이제이션 도구 | Ignite UI for Angular | 축 옵션 | Infragistics
_description: 범주 차트 구성 요소를 사용하여 데이터를 나타내는 데 가장 적합한 차트 유형을 분석하고 자동으로 선택합니다. 시각화를위한 차트 유형에 대해 알아보십시오.
_keywords: category chart, Ignite UI for Angular, infragistics
_language: kr
---

## 축 옵션

Ignite UI for Angular 카테고리 차트 컴포넌트에서는 축은 축 기본 선, 눈금 표시, 제목 및 축 레이블의 모양을 설정하는 기본 속성을 제공합니다.

### 데모

<div class="sample-container loading" style="height: 500px">
    <iframe id="category-chart-axis-options-iframe" src='{environment:dvDemosBaseUrl}/charts/category-chart-axis-options' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="category-chart-axis-options-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">STACKBLITZ 에서 보기
    </button>
</div>

<div class="divider--half"></div>

기본적으로 레이블을 명시적으로 설정할 필요는 없습니다. 카테고리 차트 컴포넌트는 제공한 데이터 내에서 최초의 적절한 문자열 속성을 사용하고 레이블에 사용할 속성을 명시적으로 설정합니다.

### 축 레이블

카테고리 차트 컴포넌트를 사용하면 차트에 표시되는 레이블의 구성, 서식 설정, 글꼴 스타일을 설정할 수 있습니다. 회전 각도, 여백, 수평/수직 정렬, 불투명도, 패딩, 표시 상태를 변경할 수 있습니다.

다음 코드 예제에서는 스타일 속성을 사용하여 X축에 레이블을 스타일하는 방법을 보여줍니다.

```html
<igx-category-chart
    [dataSource]="data"
    width="700px"
    height="500px"
    xAxisLabelTextStyle="10pt Verdana"
    xAxisLabelTopMargin="5"
    xAxisLabelTextColor="gray"
    yAxisLabelTextStyle="10pt Verdana"
    yAxisLabelRightMargin="5"
    yAxisLabelTextColor="gray">
</igx-category-chart>
```

<div class="divider--half"></div>

### 축 제목

카테고리 차트의 축 제목 기능을 사용하면 차트의 X축 및 Y축에 맥락 정보를 추가할 수 있습니다. 카테고리 차트는 X축 및 Y축 제목의 글꼴 스타일, 여백, 정렬 등을 다양하게 변경하여 룩 앤드 필을 사용자 정의할 수 있습니다.

다음의 코드 예제는 X축 및 Y축의 제목을 설정하고 사용자 지정하는 방법을 보여줍니다.

```html
 <igx-category-chart
      [dataSource]="data"
      width="700px"
      height="500px"
      xAxisTitle="Countries"
      xAxisTitleTextColor="gray"
      xAxisTitleTextStyle="12pt Verdana"
      xAxisTitleAngle="0"
      yAxisTitle="Trillions of Watt-hours (TWh)"
      yAxisTitleTextStyle="12pt Verdana"
      yAxisTitleTextColor="gray"
      yAxisTitleAngle="90"
      yAxisTitleLeftMargin="5">
 </igx-category-chart>
```

### 축 눈금

눈금 표시는 축에 점을 표시합니다. 축적의 특정 수치 점 또는 카테고리 축의 카테고리 값을 나타냅니다. X축 및 Y축 레이블의 길이, 두께, 색상을 변경할 수 있습니다.

다음의 코드 조각은 X축에서 눈금 표시의 색상, 길이, 두께를 설정하는 방법을 보여줍니다.

```html
 <igx-category-chart
      [dataSource]="data"
      width="700px"
      height="500px"
      xAxisTickLength="15"
      xAxisTickStrokeThickness="2"
      xAxisTickStroke="gray"
      yAxisTickLength="0">
 </igx-category-chart>
```

<div class="divider--half"></div>

### 축 범위

카테고리 차트 컴포넌트에서 숫자 축의 범위는 축 시작부터 끝까지이며 데이터의 최소값에서 최대값까지의 수치 값의 차이입니다. 범위 최소값은 축의 최소값입니다. 범위 최대값은 축의 최대값입니다. 기본적으로 카테고리 차트 컴포넌트는 차트 플롯 영역을 최대화하기 위해 최저 및 최고 데이터 점을 기준으로 Y축 범위의 최소값 및 최대값을 계산합니다. 축의 최소값과 최대값을 자동으로 계산하면 데이터 점의 세트에 적합하지 않을 수 있습니다. 예를 들면, 데이터의 최소값이 850인 경우, Y축의 `YAxisMinimumValue` 속성을 사용하여 축의 최소값을 800으로 설정하면 축의 최소값과 데이터 점의 최소값 사이에 50의 스페이스 값이 생깁니다. Y축의 `YAxisMaximumValue` 속성을 사용하여 축의 최대값과 데이터 점의 최대값에도 동일하게 적용할 수 있습니다.

다음 예제 코드는 Y축의 축 범위를 변경하는 방법을 보여줍니다.

```html
 <igx-category-chart
      [dataSource]="data"
      width="700px"
      height="500px"
      yAxisMinimumValue="0"
      yAxisMaximumValue="1000">
 </igx-category-chart>
```

<div class="divider--half"></div>

### 축 간격

카테고리 차트 컴포넌트에서 `YAxisInterval` 속성은 주 격자선 및 축 레이블이 축에 렌더링되는 빈도를 지정합니다. 마찬가지로 `YAxisMinorInterval` 속성은 축에 부 격자선이 렌더링되는 빈도를 지정합니다.

다음의 코드 조각은 Y축의 간격을 설정하는 방법을 보여줍니다.

```html
 <igx-category-chart
    [dataSource]="data"
    width="700px"
    height="500px"
    yAxisInterval="100"
    yAxisMajorStroke="black"
    yAxisMajorStrokeThickness="1"
    yAxisMinorInterval="20"
    yAxisMinorStroke="gray"
    yAxisMinorStrokeThickness="0.5">
 </igx-category-chart>
```

<div class="divider--half"></div>

### 축 갭

카테고리 차트의 축 갭 기능을 사용하면 차트 시리즈 간의 갭을 설정할 수 있습니다.

이 속성은 0과 1 사이의 수치 소수값을 허용합니다. 이 값은 시리즈 간의 사용 가능한 픽셀 수에서 갭의 상대 너비를 나타냅니다.
   0 - 시리즈 간에 갭이 렌더링되지 않습니다;
   1 - 시리즈 간에 사용 가능한 최대 갭이 렌더링됩니다.

`XAxisGap`이 `0.125`인 카테고리 차트를 설정하려면 다음 코드를 사용합니다:

```html
<igx-category-chart
    [dataSource]="data"
    width="700px"
    height="500px"
    xAxisGap="0.125">
</igx-category-chart>
```

<div class="divider--half"></div>

### 축 중복

카테고리 차트 컴포넌트의 축 중복 기능을 사용하면 렌더링되는 카테고리의 중복을 설정할 수 있습니다.

이 속성은 -1과 1 사이의 수치 소수값을 허용합니다. 이 값은 각 시리즈에 사용 가능한 픽셀 수에서 상대하는 중복을 나타냅니다.

-   음수 값(-1까지): 카테고리가 서로 생성하는 갭에 의해 떨어집니다.
-   양수 값(1까지): 카테고리가 서로 중복됩니다. 값1은 서로 차트 위에 카테고리를 렌더링합니다.

다음의 코드 예제는 `XAxisOverlap`을 0으로 설정합니다.

```html
 <igx-category-chart
    [dataSource]="data"
    width="700px"
    height="500px"
    xAxisOverlap="0">
</igx-category-chart>
```

<div class="divider--half"></div>
