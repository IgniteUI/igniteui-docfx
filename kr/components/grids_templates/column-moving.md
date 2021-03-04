@@if (igxName === 'IgxGrid') {
---
title: 열 이동- 네이티브 Angular | Ignite UI for Angular
_description: Set custom column order of the Ignite UI for Angular Material table by using the column drag feature of the Angular UI grid with the usage of mouse/touch gestures, or by using the Column Moving API.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Grid, Angular Table, Angular Data Grid component, Angular Data Table component, Angular Data Grid control, Angular Data Table control, Angular Grid component, Angular Table component, Angular Grid control, Angular Table control, Angular High Performance Grid, Angular High Performance Data Table, Column Moving, Grid Column Moving, Angular Grid Column Moving, Angular Data Table Column Moving, Angular column moving
_language: kr
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: 열 이동- 네이티브 Angular | Ignite UI for Angular
_description: Set custom column order of the Ignite UI for Angular Material table by using the column drag feature of the Angular UI grid with the usage of mouse/touch gestures, or by using the Column Moving API.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Tree Grid, Angular Tree Table, Angular Tree Grid component, Angular Tree Table component, Angular Tree Grid control, Angular Tree Table control, Angular Tree Grid component, Angular Tree Table component, Angular Tree Grid control, Angular Tree Table control, Angular High Performance Tree Grid, Angular High Performance Tree Table, Column Moving, Tree Grid Column Moving, Angular Tree Grid Column Moving, Angular Tree Table Column Moving, Angular column moving
_language: kr
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: 열 이동- 네이티브 Angular | Ignite UI for Angular
_description: Set custom column order of the Ignite UI for Angular Material table by using the column drag feature of the Angular UI grid with the usage of mouse/touch gestures, or by using the Column Moving API.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Hierarchical Grid, Angular Hierarchical Table, Angular Hierarchical Grid component, Angular Hierarchical Table component, Angular Hierarchical Grid control, Angular Hierarchical Table control, Angular High Performance Hierarchical Grid, Angular High Performance Hierarchical Table, Column Moving, Hierarchical Grid Column Moving, Angular Hierarchical Grid Column Moving, Angular Hierarchical Table Column Moving, Angular column moving
_language: kr
---
}

### @@igComponent 열 이동

The @@igComponent component in Ignite UI for Angular provides the **Column Moving** feature to allow columns reordering via standard drag/drop mouse or touch gestures, or by using the Column Moving API. Column moving works both with pinned and unpinned columns and with Multi-column Headers. Moving a column into the pinned area pins the column and vice versa, moving a column outside of the pinned area unpins the column.
> [!NOTE]
> Reordering between columns and column groups is allowed only when they are at the same level in the hierarchy and both are in the same group. Moving is allowed between columns/column-groups, if they are top level columns.

> [!NOTE]
> If a column header is templated and the corresponding column is movable (or groupable), then the templated elements need to have the **draggable** attribute set to **false**! This allows to attach handlers for any event emitted by the element, otherwise the event is consumed by the `igxDrag` directive.

> [!NOTE]
> If the pinned area exceeds its maximum allowed width (80% of the total @@igComponent width), a visual clue notifies the end user that the drop operation is forbidden and pinning is not possible. This means you won't be allowed to drop a column in the pinned area.


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
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="column-moving-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:650px">
    <iframe id="treegrid-column-moving-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-column-moving' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-column-moving-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:660px">
    <iframe id="hierarchical-grid-column-moving-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-moving' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
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

#### API
In addition to the drag and drop functionality, the Column Moving feature also provides two API methods to allow moving a column/reordering columns programmatically: 

[`moveColumn`]({environment:angularApiUrl}/classes/igxgridcomponent.html#movecolumn) - Moves a column before or after another column (a target). The first parameter is the column to be moved, and the second parameter is the target column. Also accepts an optional third parameter `position` (representing a `DropPosition`({environment:angularApiUrl}/enums/dropposition.html) value), which determines whether to place the column before or after the target column.

```typescript
// Move the ID column after the Name column
const idColumn = grid.getColumnByName("ID");
const nameColumn = grid.getColumnByName("Name");

grid.moveColumn(idColumn, nameColumn, DropPosition.AfterDropTarget);
```

[`move`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#move) - Moves a column to a specified visible index. If the passed index parameter is invalid (is negative, or exceeds the number of columns), or if the column is not allowed to move to this index (if inside another group), no operation is performed.

```typescript
// Move the ID column at 3rd position.
const idColumn = grid.getColumnByName("ID");
idColumn.move(3);
```

Note that when using the API, only the [`onColumnMovingEnd`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#oncolumnmovingend) event will be emitted, if the operation was successful. Also note that in comparison to the drag and drop functionality, using the API does not require setting the `movable` property to true. 


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
* [열 크기 조정](column-resizing.md)
* [선택](selection.md)
@@if (igxName !== 'IgxHierarchicalGrid') {* [검색](search.md)}

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **포럼**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
