@@if (igxName === 'IgxGrid') {
---
title: 열 이동- 네이티브 Angular | Ignite UI for Angular
_description: Column moving feature provides a means for reordering columns interactively via a standard drag/drop mouse gesture.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Grid, Angular Table, Angular Data Grid component, Angular Data Table component, Angular Data Grid control, Angular Data Table control, Angular Grid component, Angular Table component, Angular Grid control, Angular Table control, Angular High Performance Grid, Angular High Performance Data Table, Column Moving, Grid Column Moving, Angular Grid Column Moving, Angular Data Table Column Moving, Angular column moving
_language: kr
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: 열 이동- 네이티브 Angular | Ignite UI for Angular
_description: Column moving feature provides a means for reordering columns interactively via a standard drag/drop mouse gesture.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Tree Grid, Angular Tree Table, Angular Tree Grid component, Angular Tree Table component, Angular Tree Grid control, Angular Tree Table control, Angular Tree Grid component, Angular Tree Table component, Angular Tree Grid control, Angular Tree Table control, Angular High Performance Tree Grid, Angular High Performance Tree Table, Column Moving, Tree Grid Column Moving, Angular Tree Grid Column Moving, Angular Tree Table Column Moving, Angular column moving
_language: kr
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: 열 이동- 네이티브 Angular | Ignite UI for Angular
_description: Column moving feature provides a means for reordering columns interactively via a standard drag/drop mouse gesture.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Hierarchical Grid, Angular Hierarchical Table, Angular Hierarchical Grid component, Angular Hierarchical Table component, Angular Hierarchical Grid control, Angular Hierarchical Table control, Angular High Performance Hierarchical Grid, Angular High Performance Hierarchical Table, Column Moving, Hierarchical Grid Column Moving, Angular Hierarchical Grid Column Moving, Angular Hierarchical Table Column Moving, Angular column moving
_language: kr
---
}

### @@igComponent 열 이동

Ignite UI for Angular @@igComponent 컴포넌트는 표준 드래그/드롭 마우스 또는 터치 제스처로 **열 이동**을 사용해 열을 재정렬할 수 있도록 합니다.

열 이동은 고정된 열에서도 작동합니다. 핀 고정 해제된 열을 드래그하여 핀 고정 영역 안으로 드롭하여 해당 열을 핀 고정시키거나, 반대로 핀 고정된 열을 드래그하여 핀 고정 영역 밖으로 드롭하여 해당 열을 핀 고정 해제할 수 있습니다.

> [!NOTE]
> 헤더가 다시 적용되고 해당 열이 이동 가능(또는 그룹화 가능)한 경우, 적용된 이벤트를 모두 처리할 수 있도록 적용 요소에서 **draggable**을 **false**로 설정해야 합니다!

```html
<ng-template igxHeader>
    <igx-icon [attr.draggable]="false" (click)="onClick()"></igx-icon>
</ng-template>
```

#### 데모

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:650px">
    <iframe id="column-moving-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-moving-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="column-moving-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:650px">
    <iframe id="treegrid-column-moving-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-column-moving' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-column-moving-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:660px">
    <iframe id="hierarchical-grid-column-moving-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-moving' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-column-moving-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
<div class="divider--half"></div>
}

#### 개요

**열 이동** 기능은 열 단위 수준에서 사용할 수 있으며 [**@@igSelector**]({environment:angularApiUrl}/classes/@@igTypeDoc.html)에 이동 가능한 열 및 이동 불가한 열을 혼합하여 사용할 수 있습니다. 이것은 [`igx-column`]({environment:angularApiUrl}/classes/igxcolumncomponent.html)의 [`movable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#movable) 입력을 통해 제어할 수 있습니다.


@@if (igxName === 'IgxGrid') {
```html
<igx-column [field]="'Category'" [movable]="true"></igx-column>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-column [field]="'Title'" [movable]="true"></igx-column>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-column #companyname field="CompanyName" [movable]="true" width="150px">
```
}

> [!NOTE]
> 핀 고정 영역이 최대 허용 너비(전체 @@igComponent 너비의 80%)를 초과하면 드롭 조작이 금지되어 있어 핀 고정이 불가함을 힌트 표시로 최종 사용자에게 알립니다. 즉, 핀 고정 영역에 열을 드롭할 수 없게 됩니다.

#### 이벤트

열의 드래그 앤드 드롭 조작을 설정하기 위해 열 이동과 관련된 복수의 이벤트가 제공됩니다. [`onColumnMovingStart`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#oncolumnmovingstart), [`onColumnMoving`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#oncolumnmoving) 및 [`onColumnMovingEnd`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#oncolumnmovingend)가 있습니다. 
[`@@igSelector`]({environment:angularApiUrl}/classes/@@igTypeDoc.html)의 [`onColumnMovingEnd`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#oncolumnmovingend) 이벤트를 처리하고 열을 새로운 위치로 드롭할 때 일부 사용자 논리를 구현할 수 있습니다. 예를 들면, Change On Year(%) 열 뒤에 카테고리 드롭을 취소할 수 있습니다.

@@if (igxName === 'IgxGrid') {
```html
<igx-grid #dataGrid [data]="data" [autoGenerate]="false" (onColumnMovingEnd)="onColumnMovingEnd($event)">
    <igx-column [field]="'Category'" [movable]="true"></igx-column>
    <igx-column [field]="'Change On Year(%)'" [dataType]="'number'" [movable]="true" ></igx-column>
</igx-grid>
```

```typescript
public onColumnMovingEnd(event) {
    if (event.source.field === "Category" && event.target.field === "Change On Year(%)") {
        event.cancel = true;
    }
}
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false" (onColumnMovingEnd)="onColumnMovingEnd($event)">
    <igx-column [field]="'Name'" dataType="string" [movable]="true" width="250px"></igx-column>
    <igx-column [field]="'Title'" dataType="string" [movable]="true" width="250px"></igx-column>
</igx-tree-grid>
```

```typescript
public onColumnMovingEnd(event) {
    if (event.source.field === "Name" && event.target.field === "Title") {
        event.cancel = true;
    }
}
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid #hierarchicalGrid [data]="data" [autoGenerate]="false" (onColumnMovingEnd)="onColumnMovingEnd($event)">
    <igx-column [field]="'Country'" [movable]="true"></igx-column>
    <igx-column [field]="'Phone'" [dataType]="'number'" [movable]="true" ></igx-column>
</igx-hierarchical-grid>
```

```typescript
public onColumnMovingEnd(event) {
    if (event.source.field === "Phone" && event.target.field === "Country") {
        event.cancel = true;
    }
}
```
}

### API 참조
<div class="divider--half"></div>
 
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent 스타일]({environment:sassApiUrl}/index.html#mixin-igx-grid)

### 추가 리소스
<div class="divider--half"></div>

* [@@igComponent 개요](@@igMainTopic.md)
* [가상화 및 성능](virtualization.md)
* [페이징](paging.md)
* [필터링](filtering.md)
* [정렬](sorting.md)
* [요약](summaries.md)
* [열 핀 고정](column_pinning.md)
* [열 크기 조정](column_resizing.md)
* [선택](selection.md)
@@if (igxName !== 'IgxHierarchicalGrid') {* [검색](search.md)}

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **포럼**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
