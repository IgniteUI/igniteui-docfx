---
제목: 도넛형 차트 | 계층 데이터 비주얼라이제이션 | Ignite UI for Angular | Infragistics
_description: 도넛 형 차트 구성 요소를 사용하여 계층 적 데이터 시각화를위한 동심 반지 모양의 여러 변수를 표시합니다. 자세한 정보는 데모를보십시오.
_keywords: doughnut chart, Ignite UI for Angular, infragistics
_language: kr
---

## 도넛형 차트

Ignite UI for Angular 도넛형 차트 컴포넌트는 파이형 차트 컴포넌트와 유사하며 변수의 발생을 비례 적으로 보여줍니다. 도넛형 차트는 동심원상 링으로 여러 변수를 표시할 수 있으며, 계층 데이터를 시각화하기 위한 내장 기능도 제공합니다.

### 데모

<div class="sample-container loading" style="height: 450px">
    <iframe id="doughnut-chart-overview-iframe" src='{environment:dvDemosBaseUrl}/charts/doughnut-chart-overview' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="doughnut-chart-overview-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">STACKBLITZ 에서 보기
    </button>
</div>

<div class="divider--half"></div>

### 의존성

차트 패키지를 설치할 때 코어 패키지도 설치해야 합니다.

-   **npm install --save igniteui-angular-core**
-   **npm install --save igniteui-angular-charts**

### 필요한 모듈

[`IgxDoughnutChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdoughnutchartcomponent.html)에는 다음 모듈이 필요합니다:

```ts
// app.module.ts
import { IgxDoughnutChartModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxDoughnutChartModule,
        // ...
    ]
})
export class AppModule {}
```

<div class="divider--half"></div>

### 사용 방법

도넛형 차트 모듈을 불러오기 한 후 다음 단계는 데이터에 바인딩합니다.
컴포넌트를 작성하려면 먼저 데이터를 바인딩해야 합니다. 다음의 코드 조작은 간단한 데이터 소스를 작성하는 방법을 보여줍니다.

```ts
this.state = {
    data: [
        { MarketShare: 30, Company: "Google",    },
        { MarketShare: 15, Company: "Microsoft", },
        { MarketShare: 30, Company: "Apple",     },
        { MarketShare: 15, Company: "Samsung",   },
        { MarketShare: 10, Company: "Other",     },
] };
```

다음의 코드는 도넛형 차트를 상기의 데이터에 바인딩하는 방법을 보여줍니다.

```html
 <igx-doughnut-chart width="700px"
                     height="500px">
        <igx-ring-series  [itemsSource]="data"
                labelMemberPath="Label"
                valueMemberPath="Value">
        </igx-ring-series>
 </igx-doughnut-chart>
```

<div class="divider--half"></div>

### 다중 링

도넛형 차트 컴포넌트는 다중 링을 다른 컬렉션에 바인딩할 수 있는 각 링과 동시에 표시할 수 있으며 공통 데이터 소스를 공유할 수 있습니다.

### 조각 선택

도넛형 차트 컴포넌트는 하나 이상의 조각 상태를 선택한 상태로 설정하는 API를 공개합니다. 임의로 선택한 조각에 단일 사용자 비주얼 스타일을 적용할 수 있습니다.

**조각 선택 활성화/비활성화** - [`allowSliceSelection`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdoughnutchartcomponent.html#allowsliceselection) 속성을 설정하여 도넛형 차트에서 조각 선택을 활성화(기본 설정)하거나 비활성화할 수 있습니다.

**선택한 조각 모양의 설정** - 슬라이스의 `targetType`를 사용하여 모양을 정의하고 이를 도넛형 차트의 `SelectedStyle` 속성에 할당하여 선택한 조각의 모양을 정의할 수 있습니다.

**조각을 클릭하여 선택 상태를 변경** - `SliceClick` 이벤트에 이벤트 핸들러를 연결한 경우, 선택 상태를 수정할 수 있도록 이벤트 인수에서 클릭한 조각에 대한 참조를 제공합니다. 도넛형 차트는 선택한 조각의 모양을 결정하는 `SelectedStyle` 속성을 공개합니다. 기본적으로 모양이 적용되지 않으며 조각을 선택해도 어떤 식으로든 모양이 변경되지는 않습니다. 선택한 조각에 사용자 모양을 적용하려면 조각의 `targetType`로 스타일을 정의하고 선택한 `SelectedStyle` 속성의 값으로 설정해야 합니다.

**IsSelected 속성 설정** - [`IgxDoughnutChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdoughnutchartcomponent.html)는 `IsSelected` 속성을 직접 수정할 수 있도록 모든 조각에 대한 참조를 보유하고 있습니다. 도넛형 차트는 조각의 선택/선택 해제 상태를 변경하는 데 사용되는 `SliceClick` 이벤트를 공개합니다.

**SelectedSlices 컬렉션의 콘텐츠 수정** - `selectedSlices` 컬렉션의 콘텐츠를 변경하여 선택한 조각을 변경할 수 있습니다. 도넛형 차트에는 슬라이스 객체에 대한 `IsSelected` 속성을 직접 수정할 수 있도록 모든 조각에 대한 참조를 보유하고 있습니다.

### 조각 선택 데모

<div class="sample-container loading" style="height: 450px">
    <iframe id="doughnut-chart-selection-iframe" data-src='{environment:dvDemosBaseUrl}/charts/doughnut-chart-selection' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="doughnut-chart-selection-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">STACKBLITZ 에서 보기
    </button>
</div>

<div class="divider--half"></div>

### 조각 전개

도넛형 차트 컴포넌트 조각은 프로그래밍 방식 또는 사용자 상호 작용에 의해 전개됩니다.

**조각 분할 활성화/비활성화**
[`allowSliceExplosion`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdoughnutchartcomponent.html#allowsliceexplosion) 속성을 설정하여 조각 전개 기능을 활성화 또는 비활성화할 수 있습니다.

**조각을 클릭하여 조각의 전개 상태를 변경**
`SliceClick` 이벤트에 이벤트 핸들러를 연결한 경우, 클릭한 조각에 대한 참조가 이벤트 인수에 제공되고 해당 전개 상태를 수정할 수 있습니다.

**IsExploded 속성 설정**
[`IgxDoughnutChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdoughnutchartcomponent.html)에는 모든 조각에 대한 참조가 있으며 `IsExploded` 속성을 직접 수정할 수 있습니다.

**ExplodedSlices 컬렉션의 콘텐츠 수정**
`ExplodedSlices` 컬렉션의 콘텐츠를 변경하여 전개된 조각을 변경할 수 있습니다.

### 조각 전개 데모

<div class="sample-container loading" style="height: 450px">
    <iframe id="doughnut-chart-explosion-iframe" data-src='{environment:dvDemosBaseUrl}/charts/doughnut-chart-explosion' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="doughnut-chart-explosion-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">STACKBLITZ 에서 보기
    </button>
</div>

<div class="divider--half"></div>

### 범례

도넛형 차트 컴포넌트는 범례 사용을 지원합니다. 범례는 차트 시리즈를 통해 연결된 ItemLegend가 사용됩니다.

### 범례 데모

<div class="sample-container loading" style="height: 450px">
    <iframe id="doughnut-chart-legend-iframe" data-src='{environment:dvDemosBaseUrl}/charts/doughnut-chart-legend' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="doughnut-chart-legend-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">STACKBLITZ 에서 보기
    </button>
</div>
