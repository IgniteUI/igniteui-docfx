---
제목: 데이터 차트 구성 요소 - 네이티브 Angular | Ignite UI for Angular
_description: Ignite UI for Angular 데이터 차트는 축, 마커, 시리즈, 범례 및 주석 레이어의 모듈 식 디자인을 제공하는 차트 구성 요소입니다. 이 차트를 사용하면 동일한 차트 영역에 이러한 시각적 요소의 인스턴스를 여러 개 만들어 복합 차트 뷰를 만들 수 있습니다.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Chart Component, Angular Data Chart
_language: kr
---

# Angular 축 설정

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) 제어에서는 축은 축 기본 선, 눈금 표시, 제목 및 축 라벨 모양을 설정하는 기본 속성을 제공합니다.

## 데모

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-axis-settings"
           github-src="charts/data-chart/axis-settings">
</code-view>

<div class="divider--half"></div>

## 축 레이블

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) 제어를 사용하면 차트에 표시되는 레이블의 구성, 서식 설정, 글꼴 스타일을 설정할 수 있습니다. 회전 각도, 여백, 수평 및 수직 정렬, 컬러, 패딩, 이러한 라벨의 표시 상태를 변경할 수 있습니다.

다음 코드 예제에서는 차트에서 카테고리 X축의 라벨 스타일을 설정하는 방법을 보여줍니다.

```html
<igx-category-x-axis #xAxis
    name="xAxis"
    label="Country"
    labelTextStyle="9pt Verdana"
    labelTopMargin=5
    labelTextColor="gray">
</igx-category-x-axis>
```

## 축 제목

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) 제어의 축 제목 기능을 사용하면 차트의 X축 및 Y축에 맥락 정보를 추가할 수 있습니다. 축 제목의 글꼴 스타일, 여백, 정렬 등을 다양하게 변경하여 룩 앤드 필을 사용자 정의할 수 있습니다.

다음 코드 예제는 차트에서 카테고리 X축의 제목을 설정하고 사용자 정의화하는 방법을 보여줍니다.

```html
<igx-category-x-axis #xAxis
    name="xAxis"
    title="Country"
    titleTextColor="gray"
    titleTextStyle="12pt Verdana"
    titleAngle=0>
</igx-category-x-axis>
```

## 축 눈금

눈금 표시는 차트의 축에 점을 표시합니다. 축적의 특정 수치 점 또는 카테고리 축의 카테고리 값을 나타냅니다. [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) 제어에서 축 눈금의 길이, 두께 및 컬러를 변경할 수 있습니다.

다음 코드 예제는 차트의 카테고리 X축 눈금의 컬러, 길이 및 두께를 설정하고 사용자 정의화하는 방법을 보여줍니다.

```html
<igx-category-x-axis #xAxis
    name="xAxis"
    tickLength=10
    tickStrokeThickness=0.5
    tickStroke="black">
</igx-category-x-axis>
```

## 축 범위

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) 제어에서 숫자 또는 시간 축의 범위 최소값과 범위 최대값을 정의할 수 있습니다. 범위 최소값은 축의 최소값이며 범위 최대값은 축의 상한값입니다. 이것은 해당 축에 `MinimumValue` 및 `MaximumValue` 옵션을 설정함으로써 설정합니다.

기본적으로 [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) 제어는 데이터에서 최소값과 최대값을 기반으로 숫자 및 시간 축 범위의 최소값과 최대값을 계산하지만, 이 자동 계산은 모든 경우에 데이터 점의 세트에 적합하지 않을 수 있습니다. 예를 들면, 데이터의 최소값이 850인 경우, 숫자 축의 `MinimumValue`를 800으로 설정하여 축의 최소값과 데이터 점의 최소값 사이에 50의 스페이스 값이 되도록 할 수 있습니다. `MaximumValue` 속성을 사용하여 동일한 방법을 데이터 점의 축 최소값과 최대값에 적용할 수 있습니다.

다음 코드 조각은 [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) 제어에서 축 범위를 변경하는 방법을 보여줍니다:

```html
<igx-numeric-y-axis #yAxis
    name="yAxis"
    minimumValue=0
    maximumValue=1000>
</igx-numeric-y-axis>
```

## 축 격자선

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) 제어에서 축의 `Interval` 속성은 주 격자선 및 축 라벨이 해당 축에서 렌더링되는 빈도를 결정합니다. 마찬가지로 `MinorInterval` 속성은 주 격자선 사이에 부 격자선을 렌더링하는 빈도를 지정합니다.

숫자 축의 경우, 이러한 간격은 숫자이지만 카테고리 축의 경우에 이 값은 선을 그리는데 필요한 카테고리 수의 빈도를 나타냅니다. 예를 들면, 카테고리 축에서 `Interval`을 2로 설정한 경우, 주 격자선이 2개 카테고리마다 그려집니다.

또한, 해당 스트로크 및 스트로크 두께 속성을 설정하여 차트의 축에 대한 간격의 컬러 및 두께를 구성할 수 있습니다.

다음의 코드 조각은 차트의 축에 대한 간격을 설정하는 방법을 보여줍니다:

```html
<igx-numeric-y-axis #yAxis
    name="yAxis"
    interval=100
    majorStroke="black"
    majorStrokeThickness=1
    minorInterval=25
    minorStroke="gray"
    minorStrokeThickness=0.5>
</igx-numeric-y-axis>
```

## 축 갭

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) 제어의 카테고리 축에 있는 `Gap` 속성은 차트 시리즈 간의 스페이스 양을 결정합니다.

이 속성은 0과 1사이의 수치 값을 허용합니다. 이 값은 시리즈 간의 사용 가능한 픽셀 수에서 갭의 상대 너비를 나타냅니다. 이 속성을 0으로 설정하면 시리즈 간에 간격이 렌더링되지 않으며, 1로 설정하면 최대 간격이 렌더링됩니다.

다음의 샘플 코드는 X축 간격을 설정하는 방법을 보여줍니다.

```html
<igx-category-x-axis #xAxis
    name="xAxis"
    label="Country"
    gap=0.125>
</igx-category-x-axis>
```

## 축 중복

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html)제어의 카테고리 축의 축 `Overlap` 기능을 사용하면 렌더링된 카테고리의 중복을 설정할 수 있습니다.

이 속성은 -1과 1사이의 수치 값을 허용합니다. 이 값은 각 시리즈에 사용 가능한 픽셀 수에서 상대하는 중복을 나타냅니다.

이 속성을 음수 값(-1까지)으로 설정하면 카테고리가 서로 밀리게 되어 서로 간에 간격이 생깁니다.

이 속성을 양수 값(최대 1)으로 설정하면 카테고리가 서로 겹쳐집니다. 값을 1로 설정한 경우, 차트는 카테고리를 서로의 위에 표시합니다.

다음의 코드 조각은 X축 `Overlap`을 0으로 설정합니다:

```html
<igx-category-x-axis #xAxis
    name="xAxis"
    label="Country"
    overlap=0>
</igx-category-x-axis>
```
