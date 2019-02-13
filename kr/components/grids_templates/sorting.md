---
title: 그리드 정렬
_description: Ignite UI for Angular 데이터 그리드 컨트롤은 신속하며, 계층 및 목록 보기를 포함하여 널리 사용되는 기능으로 풍부한 터치 반응 데이터 그리드를 제공합니다.
_keywords: Ignite UI for Angular, UI 컨트롤, Angular 위젯, 웹 위젯, UI 위젯, Angular, 네이티브 Angular 컴포넌트 세트, 네이티브 Angular 컨트롤, 네이티브 Angular 컴포넌트 라이브러리, Angular 데이터 그리드 컴포넌트, Angular 데이터 그리드 컨트롤, Angular 그리드 컴포넌트, Angular 그리드 컨트롤, Angular 고성능 그리드, 정렬, 정렬하기
_language: kr
---

### 그리드 정렬

Ignite UI for Angular에서 **정렬**은 열 단위 수준에서 사용할 수 있으며 **igx-grid**에 정렬 가능한 열 및 정렬 불가한 열을 혼합하여 사용할 수 있습니다.

#### 데모
또한, **igx-grid**의 [`onContextMenu`]({environment:angularApiUrl}/classes/igxgridcomponent.html#oncontextmenu) 출력을 사용하여 정렬하기 위해 사용자 컨텍스트 메뉴가 추가되어 있습니다.

<div class="sample-container loading" style="height:550px">
    <iframe id="grid-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-sorting-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기</button>
</div>
<div class="divider--half"></div>

이것은 [`sortable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#sortable) 입력을 통해 실행됩니다. 그리드 정렬을 사용하면 [`sortingIgnoreCase`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#sortingignorecase) 속성을 설정하여 대소문자 구분을 실행할 수도 있습니다:

```html
<igx-column field="ProductName" header="Product Name" [dataType]="'string'" sortable="true"></igx-column>
```

#### API를 통한 정렬

그리드 [`sort`]({environment:angularApiUrl}/classes/igxgridcomponent.html#sort) 메소드를 사용하여 그리드 API를 통해 모든 열 또는 열 조합을 정렬할 수 있습니다:

```typescript
import { SortingDirection } from 'igniteui-angular';

// Perform a case insensitive ascending sort on the ProductName column.
this.grid.sort({ fieldName: 'ProductName', dir: SortingDirection.Asc });

// Perform sorting on both the ProductName and Price columns.
this.grid.sort([
    { fieldName: 'ProductName', dir: SortingDirection.Asc },
    { fieldName: 'Price', dir: SortingDirection.Desc, ignoreCase: false }
]);
```

> [!NOTE]
> Sorting is performed using our [`DefaultSortingStrategy`]({environment:angularApiUrl}/classes/defaultsortingstrategy.html) algorithm. Any [`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#sortStrategy) or [`ISortingExpression`]({environment:angularApiUrl}/interfaces/isortingexpression.html#strategy) can use a custom implementation of the [`ISortingStrategy`]({environment:angularApiUrl}/interfaces/isortingstrategy.html) as a substitute algorithm. This is useful when custom sorting needs to be defined for complex template columns, or image columns, for example.

필터링 동작과 마찬가지로 [`clearSort`]({environment:angularApiUrl}/classes/igxgridcomponent.html#clearsort) 메소드를 사용하여 정렬 상태를 해제할 수 있습니다:

```typescript
// Removes the sorting state from the ProductName column
this.grid.clearSort('ProductName');

// Removes the sorting state from every column in the grid
this.grid.clearSort();
```

> [!NOTE]
> 정렬 처리는 그리드의 기본 데이터 소스를 변경하지 **않습니다**.

#### 초기 정렬 상태

그리드의 [`sortingExpressions`]({environment:angularApiUrl}/classes/igxgridcomponent.html#sortingexpressions) 속성에 정렬식 배열을 전달하여 그리드의 초기 정렬 상태를 설정할 수 있습니다.

```typescript
public ngOnInit() {
    this.grid.sortingExpressions = [
        { fieldName: 'ProductName', dir: SortingDirection.Asc },
        { fieldName: 'Price', dir: SortingDirection.Desc, ignoreCase: false }
    ];
}
```

> [!NOTE]
> `string` 유형의 값이 [`dataType`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#datatype) `Date`의 열에서 사용되는 경우, 그리드는 `Date` 객체를 분석하지 않으므로 igxGrid `sorting`이 정상으로 작동하지 않습니다. `string` 객체를 사용하는 경우, 값을 `Date` 객체로 분석하기 위해 애플리케이션 수준에서 추가 논리를 구현해야 합니다.

<div class="divider--half"></div>

#### 원격 정렬
[`onDataPreLoad`]({environment:angularApiUrl}/classes/igxgridcomponent.html#ondatapreload) 및 [`onSortingDone`]({environment:angularApiUrl}/classes/igxgridcomponent.html#onsortingdone) 출력에 서브스크라이브하여 그리드의 원격 정렬을 제공할 수 있습니다. 이것을 사용하는 방법에 대한 자세한 것은 `그리드 가상화 및 성능` [documentation](virtualization.md#원격-정렬필터링-가상화)을 참조하십시오.

<div class="divider--half"></div>

### API
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [ISortingExpression]({environment:angularApiUrl}/interfaces/isortingexpression.html)
* [IgxGridComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

### 추가 리소스
<div class="divider--half"></div>

* [그리드 개요](grid.md)
* [가상화 및 성능](virtualization.md)
* [페이징](paging.md)
* [필터링](filtering.md)
* [요약](summaries.md)
* [열 이동](column_moving.md)
* [열 핀 고정](column_pinning.md)
* [열 크기 조정](column_resizing.md)
* [선택](selection.md)

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
