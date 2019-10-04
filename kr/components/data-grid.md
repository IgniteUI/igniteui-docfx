---
제목: 반응형 데이터 그리드 | 테이블 제어 | Ignite UI for Angular | Infragistics
_description: Ignite UI for Angular Table / Grid 구성 요소는 그리드 도메인의 복잡성을 관리 가능한 API로 단순화하여 사용자가 데이터 컬렉션을 바인딩 할 수 있도록합니다.
_keywords: react table, Ignite UI for Angular, infragistics
_language: kr
---

## Angular 표/그리드

Ignite UI for Angular 데이터 표/데이터 그리드는 표 형식의 Angular 컴포넌트로 거의 코딩이나 설정 없이 데이터를 빠르게 바인딩하여 표시할 수 있습니다. Angular 데이터 그리드의 기능에는 필터링, 정렬, 템플릿, 행 선택, 행 그룹화, 행 핀 고정, 열 이동이 있습니다.  Angular 데이터 표는 라이브 스트리밍 데이터에 최적화되어 있으며, 복수의 행 또는 열에서 무제한으로 데이터 세트 크기를 처리할 수 있습니다.

### 데모

<div class="sample-container loading" style="height: 500px">
    <iframe id="live-grid-overview-sample-iframe" src='{environment:demosBaseUrl}/grids/data-grid-local-data' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="live-grid-overview-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기
    </button>
</div>

<div class="divider--half"></div>

### 의존성

Angular 그리드 패키지를 설치할 때 코어 패키지도 설치해야 합니다.

-   **npm install --save igniteui-angular-core**
-   **npm install --save igniteui-angular-grids**

### 필요한 모듈

[`IgxLiveGrid`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlivegrid.html)에는 다음 모듈이 필요합니다:

<div class="divider--half"></div>

### 사용 방법

Angular 데이터 그리드 모듈을 가져 왔으므로 다음은 로컬 데이터에 바인딩하는 Angular 그리드의 기본 설정입니다.

```ts
    this.data = [{
        Discontinued: false,
        OrderDate: new Date("2012-02-12"),
        ProductID: 1,
        ProductName: "Chai",
        QuantityPerUnit: "10 boxes x 20 bags",
        ReorderLevel: 10,
        UnitPrice: 18.0000,
        UnitsInStock: 39
    }, {
        Discontinued: false,
        OrderDate: new Date("2003-03-17"),
        ProductID: 2,
        ProductName: "Chang",
        QuantityPerUnit: "24 - 12 oz bottles",
        ReorderLevel: 25,
        UnitPrice: 19.0000,
        UnitsInStock: 17
    }, {
        Discontinued: false,
        OrderDate: new Date("2006-03-17"),
        ProductID: 3,
        ProductName: "Aniseed Syrup",
        QuantityPerUnit: "12 - 550 ml bottles",
        ReorderLevel: 25,
        UnitPrice: 10.0000,
        UnitsInStock: 13
    }, {
        Discontinued: false,
        OrderDate: new Date("2016-03-17"),
        ProductID: 4,
        ProductName: "Chef Antons Cajun Seasoning",
        QuantityPerUnit: "48 - 6 oz jars",
        ReorderLevel: 0,
        UnitPrice: 22.0000,
        UnitsInStock: 53
    }, {
        Discontinued: true,
        OrderDate: new Date("2011-11-11"),
        ProductID: 5,
        ProductName: "Chef Antons Gumbo Mix",
        QuantityPerUnit: "36 boxes",
        ReorderLevel: 0,
        UnitPrice: 21.3500,
        UnitsInStock: 0
    }];
```

다음의 코드는 Angular 데이터 그리드를 상기의 데이터에 바인딩하는 방법을 보여줍니다.

자동 생성된 열:

열의 수동 정의:
