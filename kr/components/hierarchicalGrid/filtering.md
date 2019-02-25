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
    <iframe id="grid-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-filtering-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기</button>
</div>
<div class="divider--half"></div>

###Interaction

In order to open the filter row for a particular column, the 'Filter' chip below its header should be clicked. To add conditions you should choose filter operand using the dropdown on the left of the input and enter value. For `number` and `date` columns 'Equals' is selected by default, for `string` - 'Contains' and for `boolean` - 'All'. Pressing 'Enter' confirms the condition and you are now able to add another one. There is a dropdown, between 'condition' chips, which determines the logical operator between them, 'AND' is selected by default. To remove a condition you can click the 'X' button of the chip, and to edit it you should select the chip and the input will be populated with the chip's data. While filter row is opened you can click on any filterable column's header in order to select it and to be able to add filter conditions for it.

While there are applied conditions for a column and the filter row is closed, you can either remove the conditions by clicking the chip's close button or you can open the filter row by selecting any of the chips. When there is not enough space to show all conditions a filter icon is shown with a badge that indicates how many more conditions there are. It can also be clicked in order to open the filter row.

###Usage

기본적으로 제공되는 기본 필터링 및 표준 필터링 조건이 있으며 개발자가 사용자 구현으로 대체 할 수도 있습니다. 또한, 사용자 필터링 조건을 간단히 플러그인할 수 있습니다. 그리드는 현재 단순한 필터링 UI뿐만 아니라 보다 복잡한 필터링 옵션을 제공합니다. 열의 [`dataType`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#datatype)에 따라 올바른 [**필터링 처리**](grid.md#필터링-조건) 세트가 필터 UI 드롭다운에 로드됩니다. 또한, [`ignoreCase`]({environment:angularApiUrl}/interfaces/ifilteringexpression.html) 및 초기 [`condition`]({environment:angularApiUrl}/interfaces/ifilteringexpression.html#condition) 속성을 설정할 수 있습니다.

```html
<igx-column field="ProductName" filterable="true" dataType="string"></igx-column>
<igx-column field="Price" filterable="true" dataType="number"></igx-column>
```

> [!NOTE]
> `string` 유형의 값이 dataType `Date`의 열에서 사용되는 경우, 그리드는 `Date` 객체를 분석하지 않으므로 필터링 조건을 사용할 수 없습니다. `string` 객체를 사용하는 경우, 값을 `Date` 객체로 분석하기 위해 애플리케이션 수준에서 추가 논리를 구현해야 합니다.

그리드 API를 통해 모든 열 또는 열 조합을 필터링할 수 있습니다. 그리드는 이 작업에 대한 몇 가지 메소드를 제공합니다 - [`filter`]({environment:angularApiUrl}/classes/igxgridcomponent.html#filter), [`filterGlobal`]({environment:angularApiUrl}/classes/igxgridcomponent.html#filterglobal), [`clearFilter`]({environment:angularApiUrl}/classes/igxgridcomponent.html#clearfilter).

*   [`filter`]({environment:angularApiUrl}/classes/igxgridcomponent.html#filter) - 단일 열 또는 열 조합을 필터링합니다.

공개된 5개의 필터링 오퍼랜드 클래스가 있습니다:
   - [`IgxFilteringOperand`]({environment:angularApiUrl}/classes/igxfilteringoperand.html): 사용자 필터링 조건을 정의할 때 상속될 수 있는 기본 필터링 오퍼랜드입니다.
   - [`IgxBooleanFilteringOperand`]({environment:angularApiUrl}/classes/igxbooleanfilteringoperand.html)는 `boolean` 유형에 대한 모든 기본 필터링 조건을 정의합니다.
   - [`IgxNumberFilteringOperand`]({environment:angularApiUrl}/classes/igxnumberfilteringoperand.html)는 `numeric` 유형에 대한 모든 기본 필터링 조건을 정의합니다.
   - [`IgxStringFilteringOperand`]({environment:angularApiUrl}/classes/igxstringfilteringoperand.html)는 `string` 유형에 대한 모든 기본 필터링 조건을 정의합니다.
   - [`IgxDateFilteringOperand`]({environment:angularApiUrl}/classes/igxdatefilteringoperand.html)는 `Date` 유형에 대한 모든 기본 필터링 조건을 정의합니다.

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

*   [`filterGlobal`]({environment:angularApiUrl}/classes/igxgridcomponent.html#filterglobal) - 모든 기존 필터를 지우고 새 필터링 조건을 모든 그리드 열에 적용합니다.

```typescript
// Filter all cells for a value which contains `myproduct`
this.grid.filteringLogic = FilteringLogic.Or;
this.grid.filterGlobal("myproduct", IgxStringFilteringOperand.instance().condition("contains"), false);
```

*   [`clearFilter`]({environment:angularApiUrl}/classes/igxgridcomponent.html#clearfilter) - 모든 적용된 필터링을 대상 열에서 제거합니다. 인수 없이 호출하면 모든 열의 필터링이 지워집니다.

```typescript
// Remove the filtering state from the ProductName column
this.grid.clearFilter('ProductName');

// Clears the filtering state from all columns
this.grid.clearFilter();
```

#### 초기 필터링 상태

그리드의 초기 필터링 상태를 설정하려면 필터링할 각 열에 대해 [`IgxGridComponent`]({environment:angularApiUrl}/classes/igxgridcomponent.html) [`filteringExpressionsTree`]({environment:angularApiUrl}/classes/igxgridcomponent.html#filteringexpressionstree) 속성을 [`IFilteringExpressionsTree`]({environment:angularApiUrl}/interfaces/ifilteringexpressionstree.html) 배열에 설정합니다.

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

그리드의 [`filteringLogic`]({environment:angularApiUrl}/classes/igxgridcomponent.html#filteringlogic) 속성은 그리드에서 여러 열을 필터링하는 방법을 제어합니다. 그리드 API 또는 그리드 입력 속성을 통해 언제든지 변경할 수 있습니다.

```typescript
import { FilteringLogic } from 'igniteui-angular';
...

this.grid.filteringLogic = FilteringLogic.OR;
```

[`AND`]({environment:angularApiUrl}/enums/filteringlogic.html#and)의 기본값은 현재 적용된 모든 필터링식과 일치하는 행만 반환합니다. 위 예제에 따라 'ProductName' 셀 값에 'myproduct'가 포함되어 있고 'Price' 셀 값이 55보다 큰 경우에는 행이 반환됩니다.

[`OR`]({environment:angularApiUrl}/enums/filteringlogic.html#or)로 설정하면 'ProductName' 셀 값에 'myproduct'가 포함되거나 'Price' 셀 값이 55보다 큰 경우에 행이 반환됩니다.

<div class="divider--half"></div>

#### 원격 필터링
[`onDataPreLoad`]({environment:angularApiUrl}/classes/igxgridcomponent.html#ondatapreload) 및 [`onFilteringDone`]({environment:angularApiUrl}/classes/igxgridcomponent.html#onfilteringdone) 출력을 서브스크라이브하면 그리드의 원격 필터링을 제공할 수 있습니다. 이것을 사용하는 방법에 대한 자세한 것은 `그리드 가상화 및 성능` [documentation](virtualization.md#원격-정렬필터링-가상화)을 참조하십시오.

<div class="divider--half"></div>

#### Custom Filtering Operands
You can customize the filtering menu by adding, removing or modifying the filtering operands. By default, the filtering menu contains certain operands based on the column’s data type ([`IgxBooleanFilteringOperand`]({environment:angularApiUrl}/classes/igxbooleanfilteringoperand.html), [`IgxDateFilteringOperand`]({environment:angularApiUrl}/classes/igxdatefilteringoperand.html), [`IgxNumberFilteringOperand`]({environment:angularApiUrl}/classes/igxnumberfilteringoperand.html) and [`IgxStringFilteringOperand`]({environment:angularApiUrl}/classes/igxstringfilteringoperand.html)). You can extend these classes or their base class [`IgxFilteringOperand`]({environment:angularApiUrl}/classes/igxfilteringoperand.html) to change the filtering menu items’ behavior.

In the sample below, inspect the “Product Name” and “Discontinued” columns filters menus. For the “Discontinued” column filter, we have limited the number of operands to All, True and False. For the “Product Name” column filter – we have modified the Contains and Does Not Contain operands logic to perform case sensitive search and added also Empty and Not Empty operands.

To do that, extend the [`IgxStringFilteringOperand`]({environment:angularApiUrl}/classes/igxstringfilteringoperand.html) and [`IgxBooleanFilteringOperand`]({environment:angularApiUrl}/classes/igxbooleanfilteringoperand.html), modify the operations and their logic and set the column [`filters`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#filters) input to the new operands.

```typescript
// grid-custom-filtering.component.ts

export class GridCustomFilteringComponent implements OnInit {
    public caseSensitiveFilteringOperand = CaseSensitiveFilteringOperand.instance();
    public booleanFilteringOperand = BooleanFilteringOperand.instance();
    ...
}
...
export class CaseSensitiveFilteringOperand extends IgxStringFilteringOperand {
    private constructor() {
        super();
        const customOperations = [
            {
                iconName: "contains",
                isUnary: false,
                logic: (target: string, searchVal: string, ignoreCase?: boolean) => {
                    ignoreCase = false;
                    const search = IgxStringFilteringOperand.applyIgnoreCase(searchVal, ignoreCase);
                    target = IgxStringFilteringOperand.applyIgnoreCase(target, ignoreCase);
                    return target.indexOf(search) !== -1;
                },
                name: "Contains (case sensitive)"
            },
            {
                iconName: "does_not_contain",
                isUnary: false,
                logic: (target: string, searchVal: string, ignoreCase?: boolean) => {
                    ignoreCase = false;
                    const search = IgxStringFilteringOperand.applyIgnoreCase(searchVal, ignoreCase);
                    target = IgxStringFilteringOperand.applyIgnoreCase(target, ignoreCase);
                    return target.indexOf(search) === -1;
                },
                name: "Does Not Contain (case sensitive)"
            }
        ];

        const emptyOperators = [
            // "Empty"
            this.operations[6],
            // "Not Empty"
            this.operations[7]
        ];

        this.operations = customOperations.concat(emptyOperators);
    }
}

export class BooleanFilteringOperand extends IgxBooleanFilteringOperand {
    private constructor() {
        super();
        this.operations = [
            // "All"
            this.operations[0],
            // "TRUE"
            this.operations[1],
            // "FALSE"
            this.operations[2]
        ];
    }
}
```

```html
<!-- grid-custom-filtering.component.html -->

 <igx-grid #grid1 [data]="data" [autoGenerate]="false" height="600px" width="100%" [allowFiltering]="true">
    <igx-column field="ProductName" header="Product Name" [dataType]="'string'" [filters]="caseSensitiveFilteringOperand"></igx-column>
    <igx-column field="Discontinued" header="Discontinued" [dataType]="'boolean'" [filters]="booleanFilteringOperand">
        <ng-template igxCell let-cell="cell" let-val>
            <img *ngIf="val" src="assets/images/grid/active.png" title="Continued" alt="Continued" />
            <img *ngIf="!val" src="assets/images/grid/expired.png" title="Discontinued" alt="Discontinued" />
        </ng-template>
    </igx-column>
    ...
</igx-grid>
```

<div class="sample-container loading" style="height:600px">
    <iframe id="grid-filtering-iframe" src='{environment:demosBaseUrl}/grid/grid-filter-conditions' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-filtering-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기</button>
</div>

#### 6.1.0의 주요 변경 사항
* IgxGridComponent `filteringExpressions` 속성이 제거되었습니다. 대신에 [`filteringExpressionsTree`]({environment:angularApiUrl}/classes/igxgridcomponent.html#filteringexpressionstree)를 사용합니다.
* `filter_multiple` 메소드가 제거되었습니다. 대신에 [`filter`]({environment:angularApiUrl}/classes/igxgridcomponent.html#filter) 메소드 및 [`filteringExpressionsTree`]({environment:angularApiUrl}/classes/igxgridcomponent.html#filteringexpressionstree) 속성을 사용합니다.
* [`filter`]({environment:angularApiUrl}/classes/igxgridcomponent.html#filter) 메소드에 새로운 구문이 있습니다. 다음의 매개 변수를 허용할 수 있습니다:
  * `name` - 필터링하는 열의 이름.
  * `value` - 필터링에 사용되는 값.
  * `conditionOrExpressionTree`(옵션) - 이 매개 변수는 [`IFilteringOperation`]({environment:angularApiUrl}/interfaces/ifilteringoperation.html) 또는 [`IFilteringExpressionsTree`]({environment:angularApiUrl}/interfaces/ifilteringexpressionstree.html) 유형의 객체를 허용합니다. 간단한 필터링만 필요한 경우 필터링 처리를 인수로 전달할 수 있습니다. 고급 필터링의 경우, 복잡한 필터링 로직을 포함하는 식 트리를 인수로 전달할 수 있습니다.
  * `ignoreCase` (옵션) - 필터링에서 대소문자를 구분하는지의 여부.
* [`onFilteringDone`]({environment:angularApiUrl}/classes/igxgridcomponent.html#onfilteringdone) 이벤트는 이제 필터링된 열의 필터링 상태를 포함하는 [`IFilteringExpressionsTree`]({environment:angularApiUrl}/interfaces/ifilteringexpressionstree.html) 유형의 매개 변수 하나만 있습니다.
* 필터링 오퍼랜드: [`IFilteringExpression`]({environment:angularApiUrl}/interfaces/ifilteringexpression.html) 조건 속성은 더 이상 필터링 조건 메소드에 직접 참조하지 않고 대신에 [`IFilteringOperation`]({environment:angularApiUrl}/interfaces/ifilteringoperation.html)을 참조합니다.
* [이제 `IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html)는 [`IgxFilteringOperand`]({environment:angularApiUrl}/classes/igxfilteringoperand.html) 클래스 참조를 허용하는 [`filters`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#filters) 속성을 공개합니다.
* 사용자 필터는 [`IFilteringOperation`]({environment:angularApiUrl}/interfaces/ifilteringoperation.html) 유형의 처리로 [`IgxFilteringOperand`]({environment:angularApiUrl}/classes/igxfilteringoperand.html)의 [`operations`]({environment:angularApiUrl}/classes/igxfilteringoperand.html#operations) 속성을 생성하여 그리드 열에 제공할 수 있습니다.

<div class="divider--half"></div>

### API 참조
<div class="divider--half"></div>

* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent Styles]({environment:sassApiUrl}/index.html#mixin-igx-grid)

### 추가 리소스
<div class="divider--half"></div>

* [그리드 개요](grid.md)
* [가상화 및 성능](virtualization.md)
* [페이징](paging.md)
* [정렬](sorting.md)
* [요약](summaries.md)
* [열 이동](column_moving.md)
* [열 핀 고정](column_pinning.md)
* [열 크기 조정](column_resizing.md)
* [선택](selection.md)

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
