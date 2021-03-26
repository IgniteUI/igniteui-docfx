---
제목: 금융 차트 | 데이터 비주얼라이제이션 도구 | Infragistics | 도구 설명 템플릿
_description: 재무 차트 구성 요소를 사용하여 간단한 API를 사용하여 재무 데이터를 시각화하십시오. 자세한 정보는 데모, 종속성, 사용법 및 도구 모음을보십시오.
_keywords: financial chart, Ignite UI for Angular, Infragistics
_language: kr
---

# Angular 도구 설명 템플릿

`XamFinancialChart` 제어는 각 시리즈 유형에 기본 도구 설명을 제공합니다. 기본 도구 설명에는 시리즈 제목, 데이터 값, 축 값 등의 특정 시리즈 항목과 관련된 모든 정보가 표시됩니다. 이들은 시리즈의 스타일에 맞게 디자인되어 있습니다. 기본 도구 설명이 충분하지 않은 경우 도구 설명 콘텐츠와 룩 앤드 필을 사용자 정의하여 도구 설명 템플릿을 구성할 수 있습니다.

## 데모

<code-view style="height: 500px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-tooltip-template"  
           github-src="charts/financial-chart/tooltip-template">
</code-view>

<div class="divider--half"></div>

도구 설명 콘텐츠는 다음의 코드와 같이 도구 설명 템플릿을 생성하여 사용자 정의화됩니다.

```html
<ng-template let-series="series" let-item="item" #valueTooltip>
    <div>
        <span [style.color]="series.actualBrush">{{series.title}}</span>
        <span> stock opened on {{item.time | date}} with a value of ${{item.open | number}} and closed with a value of ${{item.close | number}}.</span>
    </div>
</ng-template>

<igx-financial-chart
    width="850px"
    height="600px"
    [dataSource]="data"
    [tooltipTemplate]="valueTooltip" >
</igx-financial-chart>
```
