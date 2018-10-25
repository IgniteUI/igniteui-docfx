---
title: 그리드 필터링
_description: Ignite UI for Angular 데이터 그리드 컨트롤은 신속하며, 계층 및 목록 보기를 포함하여 널리 사용되는 기능으로 풍부한 터치 반응 데이터 그리드를 제공합니다.
_keywords: Ignite UI for Angular, UI 컨트롤, Angular 위젯, 웹 위젯, UI 위젯, Angular, 네이티브 Angular 컴포넌트 세트, 네이티브 Angular 컨트롤, 네이티브 Angular 컴포넌트 라이브러리, Angular 데이터 그리드 컴포넌트, Angular 데이터 그리드 컨트롤, Angular 그리드 컴포넌트, Angular 그리드 컨트롤, Angular 고성능 그리드, 필터링, 필터
_language: kr
---

### 그리드 필터링

Ignite UI for Angular 그리드 컴포넌트는 그리드가 바인딩되는 데이터 컨테이너에 광범위한 필터링 API를 제공합니다.

#### 데모

<div class="sample-container loading" style="height:600px">
    <iframe id="grid-sample-iframe" src='{environment:demosBaseUrl}/grid-filtering-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

기본적으로 제공되는 기본 필터링 및 표준 필터링 조건이 있으며 개발자가 사용자 구현으로 대체 할 수도 있습니다. 또한, 사용자 필터링 조건을 간단히 플러그인할 수 있습니다. 그리드는 현재 단순한 필터링 UI뿐만 아니라 보다 복잡한 필터링 옵션을 제공합니다. 열에서 설정된 `dataType`에 따라 적절한 [**필터 작업**](grid.md#필터링-조건) 세트가 필터 UI 드롭다운에 로드됩니다. 또한, `ignoreCase` 및 초기 `condition` 속성을 설정할 수 있습니다.

```html
<igx-column field="ProductName" filterable="true" dataType="string"></igx-column>
<igx-column field="Price" filterable="true" dataType="number"></igx-column>
```

> [!NOTE]
> `string` 유형의 값이 dataType `Date`의 열에서 사용되는 경우, 그리드는 `Date` 객체를 분석하지 않으므로 필터링 조건을 사용할 수 없습니다. `string` 객체를 사용하는 경우, 값을 `Date` 객체로 분석하기 위해 애플리케이션 수준에서 추가 논리를 구현해야 합니다.

그리드 API를 통해 모든 열 또는 열 조합을 필터링할 수 있습니다. 그리드는 `filter`, `filterGlobal`, `clearFilter`등의 메소드를 이 작업에 공개합니다.

*   `filter` - 단일 열 또는 열 조합을 필터링합니다.

공개된 5개의 필터링 오퍼랜드 클래스가 있습니다:
   - `IgxFilteringOperand`: 이것은 사용자 필터링 조건을 정의할 때 상속할 수 있는 기본 필터링 오퍼랜드입니다.
   - `IgxBooleanFilteringOperand`는 `boolean` 유형의 모든 기본 필터링 조건을 정의합니다.
   - `IgxNumberFilteringOperand`는 `numeric` 유형의 모든 기본 필터링 조건을 정의합니다.
   - `IgxStringFilteringOperand`는 `string` 유형의 모든 기본 필터링 조건을 정의합니다.
   - `IgxDateFilteringOperand`는 `Date` 유형의 모든 기본 필터링 조건을 정의합니다.

```typescript
// Single column filtering

// Filter the `ProductName` column for values which `contains` the `myproduct` substring, ignoring case
this.grid.filter('ProductName', 'myproduct', IgxStringFilteringOperand.instance().condition("contains"), true);
```

유일한 필수 매개 변수는 열 필드 키 및 필터링 조건입니다. 조건 및 대소문자 구분을 설정하지 않으면 열 속성에서 추측됩니다. 다중 필터링의 경우 이 메소드는 필터링식 배열을 허용합니다.

> [!NOTE]
> 필터링 처리는 그리드의 기본 데이터 소스를 변경하지 **않습니다**.

```typescript
// Multi column filtering

const gridFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And);
const productFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And, "ProductName");
const productExpression = {
    condition: IgxStringFilteringOperand.instance().condition("contains"),
    fieldName: "ProductName",
    ignoreCase: true,
    searchVal: "ch"
};
productFilteringExpressionsTree.filteringOperands.push(productExpression);
gridFilteringExpressionsTree.filteringOperands.push(productFilteringExpressionsTree);

const priceFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And, "Price");
const priceExpression = {
    condition: IgxNumberFilteringOperand.instance().condition("greaterThan"),
    fieldName: "UnitPrice",
    ignoreCase: true,
    searchVal: 20
};
priceFilteringExpressionsTree.filteringOperands.push(priceExpression);
gridFilteringExpressionsTree.filteringOperands.push(priceFilteringExpressionsTree);

this.grid.filteringExpressionsTree = gridFilteringExpressionsTree;
```

*   `filterGlobal` - 기존 필터를 모두 지우고 새 필터링 조건을 모든 그리드 열에 적용합니다.

```typescript
// Filter all cells for a value which contains `myproduct`
this.grid.filteringLogic = FilteringLogic.Or;
this.grid.filterGlobal("myproduct", IgxStringFilteringOperand.instance().condition("contains"), false);
```

*   `clearFilter` - 대상 열에서 적용된 필터링을 제거합니다. 인수 없이 호출하면 모든 열의 필터링이 지워집니다.

```typescript
// Remove the filtering state from the ProductName column
this.grid.clearFilter('ProductName');

// Clears the filtering state from all columns
this.grid.clearFilter();
```

#### 초기 필터링 상태

그리드의 초기 필터링 상태의 설정은 IgxGridComponent `filteringExpressionsTree` 속성을 IFilteringExpressionsTree 배열에 설정하고 각 열을 필터링합니다.

```typescript
public ngOnInit() {
    const gridFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And);
    const productFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And, "ProductName");
    const productExpression = {
        condition: IgxStringFilteringOperand.instance().condition("contains"),
        fieldName: "ProductName",
        ignoreCase: true,
        searchVal: "c"
    };
    productFilteringExpressionsTree.filteringOperands.push(productExpression);
    gridFilteringExpressionsTree.filteringOperands.push(productFilteringExpressionsTree);

    this.grid.filteringExpressionsTree = gridFilteringExpressionsTree;
}
```

#### 필터링 로직

그리드의 `filteringLogic` 속성은 그리드에서 여러 열의 필터링이 해결하는 방법을 제어합니다. 그리드 API 또는 그리드 입력 속성을 통해 언제든지 변경할 수 있습니다.

```typescript
import { FilteringLogic } from 'igniteui-angular';
...

this.grid.filteringLogic = FilteringLogic.OR;
```

`AND`의 기본값은 현재 적용된 모든 필터링식과 일치하는 행만 반환됩니다. 위 예제에 따라 'ProductName' 셀 값에 'myproduct'가 포함되어 있고 'Price' 셀 값이 55보다 큰 경우에는 행이 반환됩니다.

`OR`로 설정된 경우, 'ProductName' 셀 값에 'myproduct'가 포함되거나 'Price' 셀 값이 55보다 큰 경우에는 행이 반환됩니다.

<div class="divider--half"></div>

#### 원격 필터링
onDataPreLoad 및 onFilteringDone 출력에 서브스크라이브하여 그리드의 원격 필터링을 제공할 수 있습니다. 이것을 사용하는 방법에 대한 자세한 것은 `그리드 가상화 및 성능` [documentation](grid_virtualization.md#원격-정렬필터링-가상화)을 참조하십시오.

<div class="divider--half"></div>

#### 6.1.0의 주요 변경 사항
* IgxGridComponent `filteringExpressions` 속성이 제거되었습니다. 대신에 `filteringExpressionsTree`를 사용하십시오.
* `filter_multiple` 메소드가 제거되었습니다. 대신에 `filter` 메소드 및 `filteringExpressionsTree` 속성을 사용하십시오.
* `filter` 메소드에 새로운 서명이 있습니다. 다음의 매개 변수를 허용할 수 있습니다:
  * `name` - 필터링하는 열의 이름.
  * `value` - 필터링에 사용되는 값.
  * `conditionOrExpressionTree` (옵션) - 이 매개 변수는 `IFilteringOperation` 또는 `IFilteringExpressionsTree` 유형의 객체를 허용합니다. 간단한 필터링만 필요한 경우 필터링 처리를 인수로 전달할 수 있습니다. 고급 필터링의 경우, 복잡한 필터링 로직을 포함하는 식 트리를 인수로 전달할 수 있습니다.
  * `ignoreCase` (옵션) - 필터링에서 대소문자를 구분하는지의 여부.
* `onFilteringDone` 이벤트는 이제 필터링된 열의 필터링 상태를 포함하는 `IFilteringExpressionsTree` 유형의 매개 변수 하나만 있습니다.
* 필터링 오퍼랜드: `IFilteringExpression` 조건 속성은 더 이상 필터링 조건 메소드에 직접 참조하지 않고 대신에 `IFilteringOperation`을 참조합니다.
* 이제 `IgxColumnComponent`는 `IgxFilteringOperand` 클래스 참조를 허용하는 `filters` 속성을 공개합니다.
* 사용자 필터는 `IFilteringOperation` 유형의 처리로 `IgxFilteringOperand`의 `operations` 속성을 생성하여 그리드 열에 제공할 수 있습니다.

<div class="divider--half"></div>

### 추가 리소스
<div class="divider--half"></div>

* [그리드 개요](grid.md)
* [가상화 및 성능](grid_virtualization.md)
* [페이징](grid_paging.md)
* [정렬](grid_sorting.md)
* [요약](grid_summaries.md)
* [열 이동](grid_column_moving.md)
* [열 핀 고정](grid_column_pinning.md)
* [열 크기 조정](grid_column_resizing.md)
* [선택](grid_selection.md)

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
