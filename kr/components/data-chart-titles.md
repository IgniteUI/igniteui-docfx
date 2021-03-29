---
제목: 데이터 차트 구성 요소 - 네이티브 Angular | Ignite UI for Angular
_description: 컴포지트 차트 뷰를 만들기 위해 동일한 플롯 영역에 여러 개의 시각적 요소 인스턴스를 표시하는 데이터 차트를 만듭니다.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Chart Component, Angular Data Chart
_language: kr
---

# Angular 제목 및 부제

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) 제어의 `Title` 및 `Subtitle` 기능을 사용하면 차트의 상단 섹션에 정보를 추가할 수 있습니다. 차트에 제목 또는 부제를 추가하면 차트 콘텐츠가 자동으로 크기 조정되어 사용자가 지정한 제목 및 부제 정보가 표시되도록 합니다.

## 데모

<code-view style="height: 500px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-chart-titles"  
           github-src="charts/data-chart/chart-titles">
</code-view>

<div class="divider--half"></div>

차트의 제목과 부제의 텍스트 컬러, 스타일 및 여백의 스타일을 지정할 수 있는 속성이 제공됩니다. 다음 코드 조각은 차트의 제목을 설정하고 사용자 지정하는 방법을 보여 줍니다:

```html
<igx-data-chart [dataSource]="data"
    height="600px"
    width="100%"
    chartTitle="Energy Use Per Country"
    subtitle="Results over a two year period"
    titleTextColor="Red"
    titleTextStyle="24pt Verdana"
    subtitleTextColor="Red"
    subtitleTextStyle="16pt Verdana">
</igx-data-chart>
```
