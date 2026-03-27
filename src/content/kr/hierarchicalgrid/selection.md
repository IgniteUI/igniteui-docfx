---
title: 그리드 선택 - 네이티브 Angular | Ignite UI for Angular
_description: Single and multi-cell selection is available within the Grid. Multi-cell selection enables range selection of cells.  With the Row Selection component in Ignite UI for Angular, there is a checkbox that precedes all other columns within the row, allowing the row to be either selected or deselected and enabling the user to select multiple rows of data.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Hierarchical Grid, Angular Hierarchical Table, Angular Hierarchical Grid component, Angular Hierarchical Table component, Angular Hierarchical Grid control, Angular Hierarchical Table control, Angular High Performance Hierarchical Grid, Angular High Performance Hierarchical Table, Angular Hierarchical Grid Row Selection, Angular Hierarchical Table Row Selection, Angular Row Selection, Angular Hierarchical Grid Selection, Hierarchical Grid Row Selection, Hierarchical Table Row Selection, Hierarchical Grid Selection
_language: kr
---









### Hierarchical Grid 행 선택

Ignite UI for Angular에서 행 선택은 해당 행의 모든 열 앞에 체크 박스가 있습니다. 사용자가 체크 박스를 클릭하면 행을 선택하거나 선택 취소할 수 있고 사용자가 데이터를 포함한 복수의 행을 선택할 수 있습니다.  

#### 데모





<code-view style="height:710px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-selection/" >
</code-view>

<div class="divider--half"></div>




### 설정

#### 단일 선택

Hierarchical Grid의 단일 선택은 Hierarchical Grid의 [`selected`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#selected) 이벤트를 사용하여 간단하게 설정할 수 있습니다. 이 이벤트는 셀 컴포넌트에 대한 참조를 내보냅니다. 셀 컴포넌트에는 포함되는 행 컴포넌트에 대한 참조가 있습니다. 행 컴포넌트 참조의 [`key`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/classes/igxgridrow.html#key) 게터를 사용하여 행([`data[primaryKey]`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#primarykey) 또는 [`data`]({environment:angularApiUrl}/classes/igxgridrow.html#data) 객체 자체를 사용하여)의 고유 식별자를 선택의 적절한 목록에 전달합니다. 단일 행만 항상 선택되도록 하기 위해 선택 행 선택 목록을 미리 비웁니다([`selectRows`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#selectrows) 메소드 호출의 두 번째 인수):




```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false"
        [height]="'600px'" [width]="'100%'" [rowSelectable]="selection"
        (selected)="handleRowSelection($event)" #hierarchicalGrid>
    ...
</igx-hierarchical-grid>
```
```typescript
/* selectionExample.component.ts */

    public handleRowSelection(event) {
        const targetCell = event.cell;
        if (!this.selection) {
            this.hGrid.deselectAllRows();
            this.hGrid.selectRows([targetCell.row.key]);
        }
    }
```


#### 복수 선택

복수 행 선택을 사용하도록 하기 위해 [`igx-hierarchical-grid`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html)의 [`rowSelectable`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#rowselectable) 속성을 사용합니다. [`rowSelectable`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#rowselectable)을 `true`로 설정하면 각 행 및 Hierarchical Grid 헤더에서 체크 박스 필드를 선택할 수 있게 됩니다. 체크 박스를 사용하여 복수의 행을 선택할 수 있으며 스크롤, 페이징 및 정렬 및 필터링 등의 데이터 조작을 통해 선택이 유지됩니다.




```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false"
        [height]="'600px'" [width]="'100%'" [rowSelectable]="selection"
        (selected)="handleRowSelection($event)" #hierarchicalGrid>
    ...
</igx-hierarchical-grid>
```
```typescript
/* selectionExample.component.ts */

public selection = true;
```



**참고:** 적절한 행 선택 및 셀 선택을 위해 Hierarchical Grid가 원격 가상화를 실행하는 동안 [`primaryKey`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#primarykey)를 제공해야 합니다.


**참고:** 필터링이 설정된 경우, [`selectAllRows()`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#selectallrows) 및 [`deselectAllRows()`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#deselectallrows)는 *필터링된* 모든 행을 선택/선택 취소합니다.


**참고:** Hierarchical Grid에 원격 가상화가 설정된 경우, 헤더 체크 박스를 클릭하면 모든 레코드가 선택/선택 취소됩니다. 그러나, 헤더 체크 박스를 통해 모든 레코드가 선택된 후 가시적인 행이 선택 해제된 경우, 필요에 따라 새로운 데이터가 Hierarchical Grid에 로딩되면 새롭게 로드된 행이 선택되지 않는 제한이 있습니다.


**참고:** 셀 선택은 [`rowSelectionChanging`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#rowSelectionChanging)가 아닌 [`selected`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#selected)이 트리거됩니다.

### 코드 조각

#### 프로그래밍 방식으로 행을 선택

다음의 코드 예제를 사용하여 단일 또는 복수 행을 동시에 선택할 수 있습니다([`primaryKey`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#primarykey)를 사용하여):



```html
<!-- selectionExample.component.html -->

<igx-hierarchical-grid ... [primaryKey]="'artist'">
...
</igx-hierarchical-grid>
...
<button (click)="this.hierarchicalGrid.selectRows([1,2,5])">Select 1,2 and 5</button>
```


이렇게 하면 ID 1, 2 및 5가 있는 데이터 항목에 해당하는 행을 Hierarchical Grid 선택에 추가할 수 있습니다.

#### 선택 이벤트 취소
```html
<!-- selectionExample.component.html -->

<igx-hierarchical-grid (rowSelectionChanging)="handleRowSelectionChange($event)">
...
</igx-hierarchical-grid>
```
```typescript
/* selectionExample.component.ts */

public handleRowSelectionChange(args) {
    args.newSelection = args.oldSelection; // overwrites the new selection, making it so that no new row(s) are entered in the selectionAPI
    args.checked = false; // overwrites the checkbox state
}
```

### API 참조

* [IgxHierarchicalGridComponent API]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html)
* [IgxGridRow API]({environment:angularApiUrl}/classes/igxgridrow.html)
* [IgxGridCell API]({environment:angularApiUrl}/classes/igxgridcell.html)
* [IgxHierarchicalGridComponent 스타일]({environment:sassApiUrl}/themes#function-grid-theme)

### 추가 리소스
<div class="divider--half"></div>

* [Hierarchical Grid 개요](hierarchical-grid.md)
* [페이징](paging.md)
* [필터링](filtering.md)
* [정렬](sorting.md)
* [요약](summaries.md)
* [열 이동](column-moving.md)
* [열 핀 고정](column_pinning.md)
* [열 크기 조정](column-resizing.md)
* [가상화 및 성능](virtualization.md)

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **포럼**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
