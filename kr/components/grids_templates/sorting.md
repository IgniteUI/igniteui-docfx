@@if (igxName === 'IgxGrid') {
---
title: Angular Grid Sorting | Data Sorting | Ignite UI for Angular | infragistics
_description: Get started with the Angular Sort feature of Ignite UI Material UI grid and learn how to configure a mix of sortable columns with rich API and angular events
_keywords: angular sort, ignite ui for angular, infragistics
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid Sorting | Data Sorting | Ignite UI for Angular | infragistics
_description: Get started with the Angular Sort feature of Ignite UI Material UI grid and learn how to configure a mix of sortable columns with rich API and angular events
_keywords: angular sort, ignite ui for angular, infragistics
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchical Grid Sorting | Data Sorting | Ignite UI for Angular | infragistics
_description: Get started with the Angular Sort feature of Ignite UI Material UI grid and learn how to configure a mix of sortable columns with rich API and angular events
_keywords: angular sort, ignite ui for angular, infragistics
---
}

### @@igComponent Sorting Overview

In Ignite UI for Angular @@igComponent, data sorting is enabled on a per-column level, meaning that the **@@igSelector** can have a mix of sortable and non-sortable columns. Performing angular sort actions enables you to change the display order of the records based on specified criteria.

#### 데모

@@if (igxName === 'IgxGrid') {

<code-view style="height:550px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-sorting-sample" >
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:550px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-sorting" >
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:510px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-sorting" >
</code-view>

}

<div class="divider--half"></div>

이것은 [`sortable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#sortable) 입력을 통해 실행됩니다. @@igComponent 정렬을 사용하면 [`sortingIgnoreCase`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#sortingignorecase) 속성을 설정하여 대소문자 구분을 실행할 수도 있습니다:

```html
<igx-column field="ProductName" header="Product Name" [dataType]="'string'" sortable="true"></igx-column>
```

#### API를 통한 정렬

@@igComponent [`sort`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#sort) 메소드를 사용하여 @@igComponent API를 통해 모든 열 또는 열 조합을 정렬할 수 있습니다:

```typescript
import { SortingDirection } from 'igniteui-angular';

// Perform a case insensitive ascending sort on the ProductName column.
this.@@igObjectRef.sort({ fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true });

// Perform sorting on both the ProductName and Price columns.
this.@@igObjectRef.sort([
    { fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true },
    { fieldName: 'Price', dir: SortingDirection.Desc }
]);
```

> [!NOTE]
> 정렬은 [`DefaultSortingStrategy`]({environment:angularApiUrl}/classes/defaultsortingstrategy.html) 알고리즘을 사용하여 실행됩니다. [`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#sortStrategy) 또는 [`ISortingExpression`]({environment:angularApiUrl}/interfaces/isortingexpression.html#strategy)은 대체 알고리즘으로 [`ISortingStrategy`]({environment:angularApiUrl}/interfaces/isortingstrategy.html)의 사용자 구현을 사용할 수 있습니다. 예를 들면, 복잡한 템플릿 열 또는 이미지 열에 사용자 정렬을 정의해야 할 때 유용합니다.

필터링 동작과 마찬가지로 [`clearSort`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#clearsort) 메소드를 사용하여 정렬 상태를 해제할 수 있습니다:

```typescript
// Removes the sorting state from the ProductName column
this.@@igObjectRef.clearSort('ProductName');

// Removes the sorting state from every column in the @@igComponent
this.@@igObjectRef.clearSort();
```

> [!NOTE]
> 정렬 조작은 @@igComponent의 기본 데이터 소스를 변경하지 **않습니다**.

#### 초기 정렬 상태

@@igComponent의 [`sortingExpressions`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#sortingexpressions) 속성에 정렬식 배열을 전달하여 @@igComponent의 초기 정렬 상태를 설정할 수 있습니다.

```typescript
public ngOnInit() {
    this.@@igObjectRef.sortingExpressions = [
        { fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true },
        { fieldName: 'Price', dir: SortingDirection.Desc }
    ];
}
```

> [!NOTE]
> `string` 유형의 값이 [`dataType`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#datatype) `Date` 열에서 사용되는 경우, @@igComponent는 `Date` 객체로 구문 분석하지 않으므로 @@igComponent를 사용하면 `sorting`이 예상대로 작동하지 않습니다. `string` 객체를 사용하려면 값을 `Date` 객체로 구문 분석하기 위해 애플리케이션 수준에서 추가 논리를 구현해야 합니다.

<div class="divider--half"></div>

@@if (igxName === 'IgxGrid') {
#### 원격 정렬
[`onDataPreLoad`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#ondatapreload) 및 [`onSortingDone`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onsortingdone) 출력에 서브스크라이브하여 @@igComponent의 원격 정렬을 제공할 수 있습니다. 사용 방법에 대한 자세한 정보는 `@@igComponent 가상화 및 성능` [문서](virtualization.md#remote-sortingfiltering-virtualization)를 참조하십시오.

<div class="divider--half"></div>
}

### API 참조
* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent 스타일]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [ISortingExpression]({environment:angularApiUrl}/interfaces/isortingexpression.html)

### 추가 리소스
<div class="divider--half"></div>

* [@@igComponent 개요](@@igMainTopic.md)
* [가상화 및 성능](virtualization.md)
* [페이징](paging.md)
* [필터링](filtering.md)
* [요약](summaries.md)
* [열 이동](column-moving.md)
* [열 핀 고정](column_pinning.md)
* [열 크기 조정](column-resizing.md)
* [선택](selection.md)

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **포럼**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
