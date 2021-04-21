---
제목: 카테고리 차트 | 데이터 비주얼라이제이션 도구 | 컨피규레이터 옵션 | Infragistics
_description: 범주 차트 구성 요소를 사용하여 데이터를 나타내는 데 가장 적합한 차트 유형을 분석하고 자동으로 선택합니다. 시각화를위한 차트 유형에 대해 알아보십시오.
_keywords: category chart, Ignite UI for Angular, Infragistics
_language: kr
---

# Angular 컨피규레이터 옵션

마커, 차트 제목 및 부제, 차트 유형 등 Ignite UI for Angular 카테고리 차트 컴포넌트를 사용자 지정이 가능합니다.

## 데모

<code-view style="height: 500px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-marker-options"  
           github-src="charts/category-chart/marker-options">
</code-view>

## 차트 비주얼 구성

상기의 데모와 같이 차트 유형에 브러시를 구성할 수 있습니다. 다음의 코드 예제는 차트 유형을 워터폴로 설정하고 브러시의 기본 색상을 변경합니다.

```html
 <igx-category-chart
    [dataSource]="data"
    width="700px"
    height="500px"
    chartType="waterfall"
	brushes="blue, green"
	negativeBrushes="red, yellow"
	outlines="black"
	thickness="5">
</igx-category-chart>
```

## 차트 마커 구성

마커는 카테고리 차트 컴포넌트의 플롯 영역의 데이터 점 값을 표시하는 시각적 요소입니다. 마커를 사용하면 주 그리드 선과 보조 그리드 선 사이에 값이 있더라도 지정한 데이터 점 값을 즉시 최종 사용자가 식별할 수 있습니다.

차트 마커의 모양은 다음의 코드 예제와 같이 카테고리 차트의 `markerType`, `markerBrushes`, `markerOutlines` 속성에 의해 처리됩니다.

```html
<igx-category-chart
    [dataSource]="data"
    width="700px"
    height="500px"
    markerType="diamondMarker"
    markerBrushes="red"
    markerOutlines="yellow">
</igx-category-chart>
```

## 차트 제목 및 부제 구성

카테고리 차트 컴포넌트의 제목 및 부제 기능을 사용하면 차트의 상단 부분에 정보를 추가할 수 있습니다.
차트에 제목 또는 부제를 추가하면 제목 및 부제 정보에 대해 자동으로 차트 내용의 크기가 조정되도록 허용됩니다.

다음의 코드 예제와 같이 다른 글꼴 스타일, 여백 및 정렬을 적용하는 등 다양한 방법으로 카테고리 차트의 부제 및 제목의 모양과 느낌을 사용자 지정할 수 있습니다.

```html
<igx-category-chart
    [dataSource]="data"
    width="700px"
    height="500px"
    chartTitle="Energy Use Per Country"
    titleTextColor = "Red"
    titleTextStyle="20pt Verdana"
    subtitle="Results over a two year periods"
    subtitleTextColor = "Blue"
    subtitleTextStyle = "10pt Verdana">
</igx-category-chart>
```

## 애니메이션 변환

이 기능을 사용하면 새로운 데이터 소스를 로드할 때 시리즈에 애니메이션을 적용할 수 있습니다. 사용 가능한 애니메이션은 관련 시리즈의 유형에 따라 다릅니다. 예를 들면, X축이 상승하면 열 시리즈가 애니메이션을 재생하고, 선 시리즈는 Y축에서 드로잉하는 애니메이션을 재생합니다.

제목 및 부제 정보에 대한 차트 크기가 조정되도록 허용됩니다.

기본적으로 애니메이션 변환은 비활성화이며, `IsTransitionInEnabled` 옵션을 “true”로 설정하여 애니메이션 변환을 활성화할 수 있습니다.

애니메이션 변환은 변환 유형, 데이터 점에 대한 속도 및 이징 변환(이징 함수로 관리)을 구성할 수 있습니다.

변환 유형은 transitionInMode 옵션을 원하는 변환 이름으로 설정하여 구성합니다. 속성을 `Auto`(기본값)로 설정하면 시리즈 유형에 따라 변환 유형을 자동으로 선택할 수도 있습니다.

다음의 코드 예제는 애니메이션 변환을 활성화하고 차트를 오른쪽에 아코디언 표시하는 방법을 보여줍니다.

```html
 <igx-category-chart
    [dataSource]="data"
    width="700px"
    height="500px"
    isTransitionInEnabled="true"
    transitionInDuration="5000"
    transitionInMode="AccordionFromRight">
</igx-category-chart>
```
