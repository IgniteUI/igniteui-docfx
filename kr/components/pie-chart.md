---
제목: 파이형 차트 | 카테고리형 데이터 비주얼라이제이션 | Ignite UI for React | Infragistics
_description: 다채로운 원형 차트를 만들어 데이터 시각화를 위해 Ignite UI 에 범주 형 데이터를 표시합니다.
_keywords: pie chart, ignite ui for react, infragistics
_language: kr
---

## 파이형 차트

Ignite UI for Angular 파이형 차트 컴포넌트는 원형 영역을 섹션으로 나누어 구성된 파이형 차트를 렌더링하는 특별한 컴포넌트입니다. 각 섹션에는 기본 데이터 값에 비례하는 호 길이가 있습니다.

이 제어는 카테고리형 데이터를 표시하는 데 사용됩니다. 카테고리가 적은 경우나 각 카테고리가 전체 데이터에서 비교적 큰 비율을 차지하는 경우에는 가장 효과적입니다.

### 데모

<div class="sample-container loading" style="height: 350px">
    <iframe id="pie-chart-overview-iframe" src='{environment:dvDemosBaseUrl}/charts/pie-chart-overview' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="pie-chart-overview-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">STACKBLITZ 에서 보기
    </button>
</div>

<div class="divider--half"></div>

### 의존성

차트 패키지를 설치할 때 코어 패키지도 설치해야 합니다.

-   **npm install --save igniteui-angular-core**
-   **npm install --save igniteui-angular-charts**

### 필요한 모듈

[`IgxPieChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpiechartcomponent.html)에는 다음 모듈이 필요합니다:

```ts
// app.module.ts

import { IgxPieChartModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxPieChartModule,
        // ...
    ]
})
export class AppModule {}
```

<div class="divider--half"></div>

### 사용 방법

파이형 차트 모듈을 불러오기 한 후 다음 단계는 데이터에 바인딩합니다.
파이형 차트를 작성하려면 먼저 데이터를 바인딩해야 합니다. 다음의 코드 조작은 간단한 데이터 소스를 작성하는 방법을 보여줍니다.

```ts
var data = [
    { MarketShare: 30, Company: "Google",    },
    { MarketShare: 30, Company: "Apple",     },
    { MarketShare: 15, Company: "Microsoft", },
    { MarketShare: 15, Company: "Samsung",   },
    { MarketShare: 10, Company: "Other",     },
];
```

다음의 코드는 파이형 차트를 상기의 데이터에 바인딩하는 방법을 보여줍니다.

```html
<igx-pie-chart [dataSource]="data"
               width="700px"
               height="500px"
               labelMemberPath="Company"
               valueMemberPath="MarketShare">
</igx-pie-chart>
```

<div class="divider--half"></div>

### 범례

파이형 차트 컴포넌트 옆에 범례를 표시하려면 ItemLegend를 생성하여 `Infragistics.Controls.Charts.Legend` 속성에 할당해야 합니다. 그런 다음 `legendLabelMemberPath`를 사용하여 각 파이 조각의 범례에 표시할 데이터 모델 속성을 지정합니다.

또한, `legendItemTemplate` 및 `legendItemBadgeTemplate` 속성과 ItemLegend의 다양한 폰트 속성을 사용하여 범례 항목의 모양을 추가로 사용자 정의화할 수 있습니다.

```html
<igx-pie-chart [dataSource]="data"
               width="700px"
               height="500px"
               valueMemberPath="MarketShare"
               labelMemberPath="Company"
               legendLabelMemberPath="Company"
               [legend]="PieChartLegend">
</igx-pie-chart>
```

<div class="sample-container loading" style="height: 350px">
    <iframe id="pie-chart-legend-iframe" data-src='{environment:dvDemosBaseUrl}/charts/pie-chart-legend' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="pie-chart-legend-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">STACKBLITZ 에서 보기
    </button>
</div>

<div class="divider--half"></div>

### 기타 카테고리

파이형 차트 컴포넌트의 기본 데이터에 작은 값을 가진 많은 항목이 포함되는 경우가 있습니다. 이 경우, 기타 카테고리는 여러 데이터 값을 하나의 슬라이스로 자동 집계할 수 있습니다

아래 샘플에서 `othersCategoryThreshold`는 2로 설정되고, `othersCategoryType`는 Number로 설정됩니다. 따라서 값이 2 이하인 항목은 “기타” 카테고리에 할당됩니다.

`othersCategoryType`을 Percent로 설정하면 `othersCategoryThreshold`는 값이 아닌 백분율로 해석되는데 즉, 값이 모든 항목 값의 합계의 2% 미만인 항목이 기타 카테고리에 할당됩니다. 애플리케이션에 가장 적합한 `othersCategoryType`을 사용할 수 있습니다.

```html
<igx-pie-chart [dataSource]="data"
               width="700px"
               height="500px"
               labelMemberPath="Company"
               valueMemberPath="MarketShare"
               othersCategoryThreshold="2"
               othersCategoryType="Number"
               othersCategoryText="Others">
</igx-pie-chart>
```

<div class="sample-container loading" style="height: 350px">
    <iframe id="pie-chart-others-iframe" data-src='{environment:dvDemosBaseUrl}/charts/pie-chart-others' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="pie-chart-others-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">STACKBLITZ 에서 보기
    </button>
</div>

<div class="divider--half"></div>

### 전개

파이형 차트 컴포넌트는 개별 파이 조각의 전개뿐만 아니라 선택 상태를 수정하고 사용자 논리를 구현할 수 있는 `SliceClick` 이벤트를 지원합니다

```html
<igx-pie-chart [dataSource]="data"
               width="700px"
               height="500px"
               allowSliceExplosion="true"
               sliceClick="piechart_SliceClick">
</igx-pie-chart>
```

<div class="sample-container loading" style="height: 350px">
    <iframe id="pie-chart-explosion-iframe" data-src='{environment:dvDemosBaseUrl}/charts/pie-chart-explosion' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

<div class="divider--half"></div>

### 선택

파이형 차트는 마우스 클릭에 의한 조각 선택을 기본 동작으로 지원합니다. `selectedItems` 속성을 사용하여 선택한 조각을 확정할 수 있습니다. 선택한 조각이 강조 표시됩니다.

파이형 차트의 모드는 `selectionMode` 속성으로 설정합니다. 기본값은 `single`입니다. 선택을 해제하려면 속성을 `manual`로 설정합니다.

파이형 차트 컴포넌트는 3가지 다른 선택 모드를 지원합니다.

-   Single - 모드가 Single 모드로 설정된 경우, 한 번에 하나의 조각만 선택할 수 있습니다. 새로운 조각을 선택하면 이전에 선택한 조각은 선택 해제되고 새로운 조각이 선택됩니다.
-   Multiple - 모드가 Multiple모드로 설정된 경우, 한 번에 여러 조각을 선택할 수 있습니다. 조각을 클릭하면 해당 조각이 선택되고 다른 조각을 클릭하면 이전 조각을 선택한 상태로 해당 조각이 선택됩니다.
-   Manual - 모드가 Manual 모드로 설정된 경우, 선택이 해제됩니다.

파이형 차트 컴포넌트에는 선택과 관련된 4개의 이벤트가 있습니다:

-   SelectedItemChanging
-   SelectedItemChanged
-   SelectedItemsChanging
-   SelectedItemsChanged

“Changing”으로 끝나는 이벤트는 취소 가능한 이벤트이며, 이벤트 인수 속성 `Cancel`을 true로 설정하여 조각 선택을 중지할 수 있습니다. true로 설정하면 연결된 속성이 업데이트되지 않고 조각이 선택되지 않습니다. 이 설정은 사용자가 내부 데이터를 기반으로 특정 조각을 선택할 수 없도록 하려는 경우에 유용합니다.

다른 조각을 클릭하면 파이형 차트는 `pieSliceOthersContext` 객체를 반환합니다. 이 객체에는 다른 조각에 포함된 데이터 항목의 목록이 있습니다.

```html
<igx-pie-chart [dataSource]="data"
               width="700px"
               height="500px"
               selectionMode="multiple">
</igx-pie-chart>
```

<div class="sample-container loading" style="height: 350px">
    <iframe id="pie-chart-selection-iframe" data-src='{environment:dvDemosBaseUrl}/charts/pie-chart-selection' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="pie-chart-selection-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">STACKBLITZ 에서 보기
    </button>
</div>

<div class="divider--half"></div>
