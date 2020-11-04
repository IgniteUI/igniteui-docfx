@@if (igxName === 'IgxGrid') {
---
title: Angular Filter | Angular Grid Filtering | Ignite UI for Angular | Infragistics
_description: Start using angular filter to return data with Ignite UI for Angular Material table similar to the one in excel with convenient usage be the Angular grid filtering
_keywords: angular filter, ignite ui for angular, infragistics
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Filter | Angular Tree Grid Filtering | Ignite UI for Angular | Infragistics
_description: Start using angular filter to return data with Ignite UI for Angular Material table similar to the one in excel with convenient usage be the Angular grid filtering
_keywords: angular filter, ignite ui for angular, infragistics
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Filter | Angular Hierarchical Grid Filtering | Ignite UI for Angular | Infragistics
_description: Start using angular filter to return data with Ignite UI for Angular Material table similar to the one in excel with convenient usage be the Angular grid filtering
_keywords: angular filter, ignite ui for angular, infragistics
---
}

### @@igComponent Filtering Overview

Angular grid filtering enables you to display only the records which meet specified criteria. The Material UI grid component in Ignite UI provides angular filter capabilities and extensive filtering API through the Data Container to which the @@igComponent is bound.

#### 데모

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:600px">
    <iframe id="grid-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-filtering-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:600px">
    <iframe id="treegrid-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-filtering' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:610px">
    <iframe id="hierarchical-grid-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-filtering' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
}

<div class="divider--half"></div>

###상호 작용

특정 열에 필터 행을 열려면 헤더 아래에 있는 '필터' 칩을 클릭해야 합니다. 조건을 추가하려면 입력 왼쪽에 있는 드롭다운을 사용하여 필터 오퍼랜드를 선택하고 값을 입력해야 합니다. `number` 및 `date` 열에는 'Equals'이 기본값으로, `string`에는 'Contains', `boolean`에는 'All'이 선택됩니다. 'Enter'를 누르면 조건이 확정되고 다른 조건을 추가할 수 있습니다. '조건' 칩 사이에는 논리 연산자를 결정하는 드롭다운이 있으며 'AND'가 기본값으로 선택됩니다. 조건을 삭제하려면 칩의 'X' 버튼을 클릭하고 편집하려면 칩을 선택해야 하며, 입력은 칩의 데이터로 생성됩니다. 필터 행이 열려 있을 때에 필터 가능한 열의 헤더를 클릭하여 필터 열을 선택하고 필터 조건을 추가할 수 있습니다.

일부 필터링 조건이 열에 적용되어 필터 행이 닫혀 있는 동안 칩의 닫기 버튼을 클릭하여 조건을 삭제하거나 칩 중 하나를 선택하여 필터 행을 열 수 있습니다. 모든 조건을 표시할 공간이 충분하지 않은 경우, 조건 수를 나타내는 배지가 표시된 필터 아이콘이 표시됩니다. 필터 행을 열기 위해 클릭할 수도 있습니다.

###사용 방법

기본적으로 제공되는 기본 필터링 및 표준 필터링 조건이 있으며 개발자가 사용자 구현으로 대체 할 수도 있습니다. 또한, 사용자 필터링 조건을 간단히 플러그인할 수 있습니다. @@igComponent는 현재 간단한 필터링 UI뿐만 아니라 더 복잡한 필터링 옵션을 제공합니다. 열에서 설정된 [`dataType`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#datatype)에 따라 적절한 [**필터링 처리**]({environment:angularApiUrl}/interfaces/ifilteringoperation.html)의 설정이 필터 UI 드롭다운에 로딩됩니다. 또한, [`ignoreCase`]({environment:angularApiUrl}/interfaces/ifilteringexpression.html) 및 초기 [`condition`]({environment:angularApiUrl}/interfaces/ifilteringexpression.html#condition) 속성을 설정할 수 있습니다.

필터링 기능은 [`allowFiltering`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#allowfiltering) 입력을 `true`로 설정하여 @@igComponent 컴포넌트에 활성화할 수 있습니다. 기본값 [`filterMode`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filtermode)는 `quickFilter`이며 실행 시에는 변경할 수 **없습니다**. 특정 열에 대해 이 기능을 비활성화하려면 [`filterable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#filterable) 입력을 `false`로 설정합니다. 

@@if (igxName !== 'IgxHierarchicalGrid') {
```html
<@@igSelector #grid1 [data]="data" [autoGenerate]="false" [allowFiltering]="true">
    <igx-column field="ProductName" dataType="string"></igx-column>
    <igx-column field="Price" dataType="number"></igx-column>
    ...
    <igx-column field="Discontinued" [dataType]="'boolean'" [filterable]="false">
</@@igSelector>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
 <igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false" [allowFiltering]='true' [height]="'600px'" 
 [width]="'100%'" #hierarchicalGrid>
    <igx-column field="Artist" [filterable]='true'></igx-column>
    <igx-column field="Photo" [filterable]='false'>
    ...
</igx-hierarchical-grid>
```
}

> [!NOTE]
> `string` 유형의 값이 dataType `Date` 열에서 사용되는 경우, @@igComponent는 `Date` 객체로 구문 분석하지 않으므로 필터링 조건을 사용할 수 없습니다. `string` 객체를 사용하려면 값을 `Date` 객체로 구문 분석하기 위해 애플리케이션 수준에서 추가 논리를 구현해야 합니다.

@@igComponent API를 통해 모든 열 또는 열 조합을 필터링할 수 있습니다. @@igComponent는 이 작업에 복수의 메소드를 공개합니다 - [`filter`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filter), [`filterGlobal`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filterglobal) 및 [`clearFilter`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#clearfilter).

*   [`filter`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filter) - 단일 열 또는 열 조합을 필터링합니다.

공개된 5개의 필터링 오퍼랜드 클래스가 있습니다:
   - [`IgxFilteringOperand`]({environment:angularApiUrl}/classes/igxfilteringoperand.html): 기본 필터링 오퍼랜드이며 사용자 필터링 조건을 정의할 때 상속될 수 있습니다.
   - [`IgxBooleanFilteringOperand`]({environment:angularApiUrl}/classes/igxbooleanfilteringoperand.html) `boolean` 유형의 모든 기본 필터링 조건을 정의합니다.
   - [`IgxNumberFilteringOperand`]({environment:angularApiUrl}/classes/igxnumberfilteringoperand.html) `numeric` 유형의 모든 기본 필터링 조건을 정의합니다.
   - [`IgxStringFilteringOperand`]({environment:angularApiUrl}/classes/igxstringfilteringoperand.html) `string` 유형의 모든 기본 필터링 조건을 정의합니다.
   - [`IgxDateFilteringOperand`]({environment:angularApiUrl}/classes/igxdatefilteringoperand.html) `Date` 유형의 모든 기본 필터링 조건을 정의합니다.

```typescript
// Single column filtering

// Filter the `ProductName` column for values which `contains` the `myproduct` substring, ignoring case
this.@@igObjectRef.filter('ProductName', 'myproduct', IgxStringFilteringOperand.instance().condition("contains"), true);
```

유일한 필수 매개 변수는 열 필드 키 및 필터링 조건입니다. 조건 및 대소문자 구분을 설정하지 않으면 열 속성에서 추측됩니다. 다중 필터링의 경우 이 메소드는 필터링식 배열을 허용합니다.

> [!NOTE]
> 필터링 조작은 @@igComponent의 기본 데이터 소스를 변경하지 **않습니다**.

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

this.@@igObjectRef.filteringExpressionsTree = gridFilteringExpressionsTree;
```

*   [`filterGlobal`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filterglobal) - 기존의 필터를 모두 지우고 모든 @@igComponent 열에 새로운 필터링 조건을 적용합니다.

```typescript
// Filter all cells for a value which contains `myproduct`
this.@@igObjectRef.filteringLogic = FilteringLogic.Or;
this.@@igObjectRef.filterGlobal("myproduct", IgxStringFilteringOperand.instance().condition("contains"), false);
```

*   [`clearFilter`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#clearfilter) - 대상 열에서 적용된 모든 필터링을 삭제합니다. 인수 없이 호출하면 모든 열의 필터링이 지워집니다.

```typescript
// Remove the filtering state from the ProductName column
this.@@igObjectRef.clearFilter('ProductName');

// Clears the filtering state from all columns
this.@@igObjectRef.clearFilter();
```

#### 초기 필터링 상태

@@igComponent의 초기 필터링 상태를 설정하려면 [`@@igxNameComponent`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) [`filteringExpressionsTree`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filteringexpressionstree) 속성을 [`IFilteringExpressionsTree`]({environment:angularApiUrl}/interfaces/ifilteringexpressionstree.html)의 배열로 설정하여 각 열을 필터링합니다.

```typescript
public ngAfterViewInit() {
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

    this.@@igObjectRef.filteringExpressionsTree = gridFilteringExpressionsTree;
}
```

#### 필터링 로직

@@igComponent의 [`filteringLogic`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filteringlogic) 속성은 @@igComponent에서 여러 열을 필터링하여 해결하는 방법을 제어합니다. 언제든지 @@igComponent API 또는 @@igComponent 입력 속성을 통해 변경할 수 있습니다.

```typescript
import { FilteringLogic } from 'igniteui-angular';
...

this.@@igObjectRef.filteringLogic = FilteringLogic.OR;
```

[`AND`]({environment:angularApiUrl}/enums/filteringlogic.html#and)의 기본값은 현재 적용된 모든 필터링식과 일치하는 행만 반환합니다. 위 예제에 따라 'ProductName' 셀 값에 'myproduct' 가 포함되어 있고 'Price' 셀 값이 55 보다 큰 경우에는 행이 반환됩니다.

[`OR`]({environment:angularApiUrl}/enums/filteringlogic.html#or)로 설정하면 'ProductName' 셀 값에 'myproduct' 가 포함되거나 'Price' 셀 값이 55 보다 큰 경우에 행이 반환됩니다.

<div class="divider--half"></div>

@@if (igxName === 'IgxGrid') {
#### 원격 필터링
[`onDataPreLoad`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#ondatapreload) 및 [`onFilteringDone`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onfilteringdone) 출력에 서브스크라이브하여 @@igComponent의 원격 필터링을 제공할 수 있습니다. 사용 방법에 대한 자세한 정보는 `그리드 가상화 및 성능` [문서](virtualization.md#remote-sortingfiltering-virtualization)를 참조하십시오.

<div class="divider--half"></div>
}

#### 사용자 필터링 오퍼랜드
필터링 오퍼랜드를 추가, 삭제 또는 수정하여 필터링 메뉴를 사용자 정의할 수 있습니다. 기본적으로 필터링 메뉴에는 열의 데이터 유형([`IgxBooleanFilteringOperand`]({environment:angularApiUrl}/classes/igxbooleanfilteringoperand.html), [`IgxDateFilteringOperand`]({environment:angularApiUrl}/classes/igxdatefilteringoperand.html), [`IgxNumberFilteringOperand`]({environment:angularApiUrl}/classes/igxnumberfilteringoperand.html) 및 [`IgxStringFilteringOperand`]({environment:angularApiUrl}/classes/igxstringfilteringoperand.html))을 기반으로 하는 특정 오퍼랜드가 포함됩니다. 이러한 클래스 또는 기본 클래스인 [`IgxFilteringOperand`]({environment:angularApiUrl}/classes/igxfilteringoperand.html)를 확장하여 필터링 메뉴 항목의 동작을 변경할 수 있습니다.

아래 샘플에서 “Product Name” 및 “Discontinued” 열 필터링 메뉴를 확인하십시오. “Discontinued” 열 필터의 경우, 오퍼랜드 수를 All, True, False으로 제한합니다. “Product Name” 열 필터의 경우, Contains 및 Does Not Contain 오퍼랜드 논리를 수정하여 대/소문자를 구분하여 검색을 실행하고 Empty 및 Not Empty 오퍼랜드를 추가했습니다.

이를 실행하려면 [`IgxStringFilteringOperand`]({environment:angularApiUrl}/classes/igxstringfilteringoperand.html) 및 [`IgxBooleanFilteringOperand`]({environment:angularApiUrl}/classes/igxbooleanfilteringoperand.html)를 확장하고 연산 및 논리를 수정하고 열 [`filters`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#filters) 입력을 새로운 오퍼랜드에 설정합니다.

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
@@if (igxName !== 'IgxHierarchicalGrid') {
```html
<!-- grid-custom-filtering.component.html -->

 <@@igSelector #grid1 [data]="data" [autoGenerate]="false" height="600px" width="100%" [allowFiltering]="true">
    <igx-column field="ProductName" header="Product Name" [dataType]="'string'" [filters]="caseSensitiveFilteringOperand"></igx-column>
    <igx-column field="Discontinued" header="Discontinued" [dataType]="'boolean'" [filters]="booleanFilteringOperand">
        <ng-template igxCell let-cell="cell" let-val>
            <img *ngIf="val" src="assets/images/grid/active.png" title="Continued" alt="Continued" />
            <img *ngIf="!val" src="assets/images/grid/expired.png" title="Discontinued" alt="Discontinued" />
        </ng-template>
    </igx-column>
    ...
</@@igSelector>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<!-- hierarchical-grid-custom-filtering.component.html -->

  <igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false" [allowFiltering]='true'
        [height]="'600px'" [width]="'100%'" #hierarchicalGrid>
        <igx-column field="Artist" [filterable]='true' [dataType]="'string'" [filters]="caseSensitiveFilteringOperand"></igx-column>
        <igx-column field="HasGrammyAward" [filterable]='true' [dataType]="'boolean'" [filters]="booleanFilteringOperand">
            <ng-template igxCell let-cell="cell" let-val>
                <img *ngIf="val" src="https://www.infragistics.com/angular-demos/assets/images/grid/active.png" title="True" alt="True" />
                <img *ngIf="!val" src="https://www.infragistics.com/angular-demos/assets/images/grid/expired.png" title="False" alt="False" />
            </ng-template>
        </igx-column>
...
 </igx-hierarchical-grid>
```
}
@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:600px">
    <iframe id="grid-filtering-iframe" data-src='{environment:demosBaseUrl}/grid/grid-filter-conditions' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-filtering-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:600px">
    <iframe id="treegrid-filtering-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-filtering-custom' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-filtering-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
   <div class="sample-container loading" style="height:610px">
    <iframe id="hierarchical-grid-filtering-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-custom-filtering' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-filtering-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
}

#### 필터 셀 재템플레이팅
필터 셀을 재템플레이팅하기 위해 `igxFilterCellTemplate`으로 표시된 템플릿을 추가할 수 있습니다. 아래 샘플에서는 문자열 열에는 입력이 추가되고 날짜 열에는 IgxDatePicker가 추가됩니다. 사용자가 값을 입력하거나 선택하면 문자열 열에는 contains 연산자, 날짜 열에는 equals 연산자를 가진 필터가 그리드의 공개 API를 사용하여 적용됩니다.

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:500px">
    <iframe id="grid-filtering-template-iframe" data-src='{environment:demosBaseUrl}/grid/grid-filtering-template-sample' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-filtering-template-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:500px">
    <iframe id="treegrid-filtering-template-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-filtering-template' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-filtering-template-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
   <div class="sample-container loading" style="height:610px">
    <iframe id="hierarchical-grid-filtering-template-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-filtering-template' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-filtering-template-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
}

@@if (igxName !== 'IgxHierarchicalGrid') {
#### 6.1.0의 주요 변경 사항
* @@igxName `filteringExpressions` 속성이 삭제되었습니다. 대신 [`filteringExpressionsTree`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filteringexpressionstree) 를 사용하십시오.
* `filter_multiple` 메소드가 삭제되었습니다. 대신에 [`filter`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filter) 메소드 및 [`filteringExpressionsTree`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filteringexpressionstree) 속성을 사용하십시오.
* [`filter`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filter) 메소드에는 새로운 구문이 있습니다. 다음의 매개 변수를 허용할 수 있습니다:
  * `name` - 필터링할 열의 이름.
  * `value` - 필터링에 사용할 값.
  * `conditionOrExpressionTree`(옵션) - 이 매개 변수는 [`IFilteringOperation`]({environment:angularApiUrl}/interfaces/ifilteringoperation.html) 또는 [`IFilteringExpressionsTree`]({environment:angularApiUrl}/interfaces/ifilteringexpressionstree.html) 유형의 객체를 받아들입니다. 간단한 필터링만 필요한 경우 필터링 처리를 인수로 전달할 수 있습니다. 고급 필터링의 경우, 복잡한 필터링 로직을 포함하는 식 트리를 인수로 전달할 수 있습니다.
  * `ignoreCase`(옵션) - 필터링이 대/소문자를 구분하는지 여부.
* [`onFilteringDone`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onfilteringdone) 이벤트에는 이제 필터링된 열의 필터링 상태를 포함하는 유형 [`IFilteringExpressionsTree`]({environment:angularApiUrl}/interfaces/ifilteringexpressionstree.html)의 매개 변수가 하나만 있습니다.
* 필터링 오퍼랜드: [`IFilteringExpression`]({environment:angularApiUrl}/interfaces/ifilteringexpression.html) 조건 속성은 필터링 조건 메소드에 직접 참조하지 않고 대신에 [`IFilteringOperation`]({environment:angularApiUrl}/interfaces/ifilteringoperation.html)을 참조하게 됩니다.
* [`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html)는 [`IgxFilteringOperand`]({environment:angularApiUrl}/classes/igxfilteringoperand.html) 클래스 참조를 사용하는 [`filters`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#filters) 속성을 공개합니다.
* 사용자 필터는 [`IFilteringOperation`]({environment:angularApiUrl}/interfaces/ifilteringoperation.html) 유형의 작업으로 [`IgxFilteringOperand`]({environment:angularApiUrl}/classes/igxfilteringoperand.html)의 [`operations`]({environment:angularApiUrl}/classes/igxfilteringoperand.html#operations) 속성을 생성하여 @@igComponent 열에 제공할 수 있습니다.
}
<div class="divider--half"></div>

### API 참조
<div class="divider--half"></div>

* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent 스타일]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

### 추가 리소스
<div class="divider--half"></div>

* [@@igComponent 개요](@@igMainTopic.md)
* [가상화 및 성능](virtualization.md)
* [페이징](paging.md)
* [정렬](sorting.md)
* [요약](summaries.md)
* [열 이동](column-moving.md)
* [열 핀 고정](column_pinning.md)
* [열 크기 조정](column-resizing.md)
* [선택](selection.md)

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **포럼**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
