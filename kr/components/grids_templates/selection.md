@@if (igxName === 'IgxGrid') {
---
title: 그리드 선택 - 네이티브 Angular | Ignite UI for Angular
_description: Single and multi-cell selection is available within the Grid. Multi-cell selection enables range selection of cells. With the Row Selection component in Ignite UI for Angular, there is a checkbox that precedes all other columns within the row, allowing the row to be either selected or deselected and enabling the user to select multiple rows of data.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Grid, Angular Table, Angular Data Grid component, Angular Data Table component, Angular Data Grid control, Angular Data Table control, Angular Grid component, Angular Table component, Angular Grid control, Angular Table control, Angular High Performance Grid, Angular High Performance Data Table, Angular Grid Row Selection, Angular Data Table Row Selection, Angular Row Selection, Angular Grid Selection, Data Grid Row Selection, Data Table Row Selection, Grid Selection
_language: kr
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: 그리드 선택 - 네이티브 Angular | Ignite UI for Angular
_description: Single and multi-cell selection is available within the Grid. Multi-cell selection enables range selection of cells.  With the Row Selection component in Ignite UI for Angular, there is a checkbox that precedes all other columns within the row, allowing the row to be either selected or deselected and enabling the user to select multiple rows of data.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Tree Grid, Angular Tree Table, Angular Tree Grid component, Angular Tree Table component, Angular Tree Grid control, Angular Tree Table control, Angular Tree Grid component, Angular Tree Table component, Angular Tree Grid control, Angular Tree Table control, Angular High Performance Tree Grid, Angular High Performance Tree Table, Angular Tree Grid Row Selection, Angular Tree Table Row Selection, Angular Row Selection, Angular Tree Grid Selection, Tree Grid Row Selection, Tree Table Row Selection, Tree Grid Selection
_language: kr
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: 그리드 선택 - 네이티브 Angular | Ignite UI for Angular
_description: Single and multi-cell selection is available within the Grid. Multi-cell selection enables range selection of cells.  With the Row Selection component in Ignite UI for Angular, there is a checkbox that precedes all other columns within the row, allowing the row to be either selected or deselected and enabling the user to select multiple rows of data.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Hierarchical Grid, Angular Hierarchical Table, Angular Hierarchical Grid component, Angular Hierarchical Table component, Angular Hierarchical Grid control, Angular Hierarchical Table control, Angular High Performance Hierarchical Grid, Angular High Performance Hierarchical Table, Angular Hierarchical Grid Row Selection, Angular Hierarchical Table Row Selection, Angular Row Selection, Angular Hierarchical Grid Selection, Hierarchical Grid Row Selection, Hierarchical Table Row Selection, Hierarchical Grid Selection
_language: kr
---
}

@@if (igxName !== 'IgxHierarchicalGrid') {

### @@igComponent 다중 셀 선택

다중 셀 선택은 @@igComponent에서 셀의 범위 선택을 가능하게 합니다. 다양한 다중 셀 선택 기능을 사용할 수 있습니다.
- `마우스 드래그` - 직사각형으로 셀 선택을 실행합니다.
- `Ctrl 키` 누름 + `마우스 드래그` - 여러 범위 선택을 실행합니다. 다른 기존 셀 선택은 유지됩니다.
- Shift 키를 사용하여 다중 셀을 인스턴스화합니다. Shift 키를 누른 상태에서 단일 셀을 선택하고 다른 단일 셀을 선택합니다. 2개 셀 사이의 셀 범위가 선택됩니다. `Shift 키`를 누른 상태에서 다른 두 번째 셀을 선택하면 첫 번째 선택된 셀 위치(시작점)를 기준으로 셀 선택 범위가 업데이트됩니다.
- `Shift 키`를 누른 상태에서 `화살표 키`를 사용하여 키보드로 다중 셀을 선택합니다. 다중 셀 선택 범위는 포커스된 셀을 기반으로 생성됩니다.
- `Shift 키`를 누른 상태에서 `Ctrl + 화살표 키`와 `Ctrl + Home/End`를 사용하여 키보드로 다중 셀을 선택합니다. 다중 셀 선택 범위는 포커스된 셀을 기반으로 생성됩니다.
- `Ctrl 키`를 누른 상태에서 `왼쪽 마우스 키`를 클릭하면 선택한 셀 컬렉션에 단일 셀 범위가 추가됩니다.
- 마우스로 클릭하고 드래그하면 연속해 다중 셀 선택이 가능합니다. 

#### 데모

}

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:700px">
    <iframe id="grid-multi-cell-selection-iframe" src='{environment:demosBaseUrl}/grid/grid-multi-cell-selection' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-multi-cell-selection-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:700px">
    <iframe id="tree-grid-multi-cell-selection-iframe" src='{environment:demosBaseUrl}/tree-grid/tree-grid-multi-cell-selection' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-multi-cell-selection-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
<div class="divider--half"></div>
}

@@if (igxName !== 'IgxHierarchicalGrid') {
#### 키보드 탐색 상호 작용

##### Shift 키를 누른 상태에서
- <kbd>Shift</kbd> + <kbd>위 화살표</kbd> - 현재 선택에 위 셀을 추가합니다.
- <kbd>Shift</kbd> + <kbd>아래 화살표</kbd> - 현재 선택에 아래 셀을 추가합니다.
- <kbd>Shift</kbd> + <kbd>왼쪽 화살표</kbd> - 현재 선택에 왼쪽 셀을 추가합니다.
- <kbd>Shift</kbd> + <kbd>오른쪽 화살표</kbd> - 현재 선택에 오른쪽 셀을 추가합니다.

##### Ctrl + Shift 키를 누른 상태에서
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>위 화살표</kbd> - 열에서 포커스된 셀 위에 있는 모든 셀을 선택합니다.
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>아래 화살표</kbd> - 열에서 포커스된 셀 아래에 있는 모든 셀을 선택합니다.
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>왼쪽 화살표</kbd> - 행의 시작 부분까지 모든 셀을 선택합니다.
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>오른쪽 화살표</kbd> - 행의 마지막 부분까지 모든 셀을 선택합니다.
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Home</kbd> - 포커스된 셀에서 그리드의 첫 번째 셀까지의 모든 셀을 선택합니다
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>End</kbd> - 포커스된 셀에서 그리드의 마지막 셀까지의 모든 셀을 선택합니다.

> [!NOTE] 
> 그리드 보디에서만 연속 스크롤이 가능합니다.

### API 사용
다음은 범위 선택, 선택 취소 또는 선택한 셀 데이터를 가져오기에 사용할 수 있는 방법입니다.

##### 선택 범위

[`selectRange(range)`]({environment:angularApiUrl}/classes/igxgridbasedirective.html#selectrange) - API를 사용하여 셀 범위를 선택합니다. `rowStart` 및 `rowEnd`는 행 인덱스를 사용해야 하며, `columnStart` 및 `columnEnd`는 열 인덱스 또는 열 데이터 필드 값을 사용할 수 있습니다. 

```typescript
const range = { rowStart: 2, rowEnd: 2, columnStart: 1, columnEnd: 1 };
this.grid1.selectRange(range);
...

const range = { rowStart: 0, rowEnd: 2, columnStart: 'Name', columnEnd: 'ParentID' };
this.grid1.selectRange(range);

```

> [!NOTE] 
> 선택 범위는 부가 연산입니다. 이전 선택을 삭제하지 않습니다.

##### 셀 선택 삭제

[`clearCellSelection()`]({environment:angularApiUrl}/classes/igxgridbasedirective.html#clearcellselection)은 현재 셀 선택을 삭제합니다.

##### 선택한 데이터 가져오기

[`getSelectedData()`]({environment:angularApiUrl}/classes/igxgridbasedirective.html#getselecteddata)은 선택한 데이터의 배열을 선택 내용에 따라 형식으로 반환합니다. 이하 예:

1. 3개의 다른 단일 셀을 선택한 경우:
```
expectedData = [
    { CompanyName: "Infragistics" },
    { Name: "Michael Langdon" },
    { ParentID: 147 }
];
```
		
2. 1열에서 3개 셀을 선택한 경우:
```
expectedData = [
    { Address: "Obere Str. 57"},
    { Address: "Avda. de la Constitución 2222"},
    { Address: "Mataderos 2312"}
];
```

3. 1행 3열에서 마우스 드래그로 3개 셀을 선택한 경우:
```
expectedData = [
    { Address: "Avda. de la Constitución 2222", City: "México D.F.", ContactTitle: "Owner" }
];
```

4. 2행 3열에서 마우스 드래그로 3개 셀을 선택한 경우:
```
expectedData = [
    { ContactTitle: "Sales Agent", Address: "Cerrito 333", City: "Buenos Aires"},
    { ContactTitle: "Marketing Manager", Address: "Sierras de Granada 9993", City: "México D.F."}
];
```

5. 2개의 다른 범위를 선택한 경우:
```
expectedData = [
    { ContactName: "Martín Sommer", ContactTitle: "Owner"},
    { ContactName: "Laurence Lebihan", ContactTitle: "Owner"},
    { Address: "23 Tsawassen Blvd.", City: "Tsawassen"},
    { Address: "Fauntleroy Circus", City: "London"}
];
```

6. 2개의 중복 범위가 선택되면 형식은 다음과 같이 됩니다:
```
expectedData = [
    { ContactName: "Diego Roel", ContactTitle: "Accounting Manager", Address: "C/ Moralzarzal, 86"},
    { ContactName: "Martine Rancé", ContactTitle: "Assistant Sales Agent", Address: "184, chaussée de Tournai", City: "Lille"},
    { ContactName: "Maria Larsson", ContactTitle: "Owner", Address: "Åkergatan 24", City: "Bräcke"},
    { ContactTitle: "Marketing Manager", Address: "Berliner Platz 43", City: "München"}
];
```

> [!NOTE] 
> 셀이 그리드 뷰 포트에 표시되지 않은 경우, [`selectedCells()`]({environment:angularApiUrl}/classes/igxgridbasedirective.html#selectedcells)는 결과를 반환하지 않지만 [`getSelectedData()`]({environment:angularApiUrl}/classes/igxgridbasedirective.html#getselecteddata)는 선택된 셀 데이터를 반환합니다.
> [`getSelectedRanges(): GridSelectionRange[]`]({environment:angularApiUrl}/classes/igxgridbasedirective.html#getselectedranges)는 키보드와 포인터 상호 작용으로 그리드에서 현재 선택된 범위를 반환합니다. 유형은 GridSelectionRange[]입니다.


### 기능 통합
다중 셀 선택은 인덱스 기반입니다(DOM 요소 선택).

- `Sorting` - 정렬이 실행되면 선택 항목은 삭제되지 않습니다. 오름차순 또는 내림차순으로 정렬하는 동안 현재 선택된 셀은 그대로 유지됩니다.
- `Paging` - 페이징 시 선택된 셀은 삭제됩니다. 선택은 페이지를 넘어서 유지되지 않습니다.
- `Filtering` - 필터링이 실행되면 선택 항목은 삭제되지 않습니다. 필터링이 삭제된 경우에는 처음 선택한 셀이 반환됩니다.
- `Resizing` - 열 크기를 변경 시 선택한 셀이 삭제되지 않습니다.
- `Hiding` - 선택한 셀은 삭제되지 않습니다. 열이 비표시된 경우에는 다음에 표시되는 열의 셀이 선택됩니다.
- `Pinning` - 선택한 셀은 삭제되지 않습니다. 숨기기와 동일합니다
- `Group by` - 열 그룹화 시 선택한 셀은 삭제되지 않습니다.

}

### @@igComponent 행 선택

Ignite UI for Angular에서 행 선택은 해당 행의 모든 열 앞에 체크 박스가 있습니다. 사용자가 체크 박스를 클릭하면 행을 선택하거나 선택 취소할 수 있고 사용자가 데이터를 포함한 복수의 행을 선택할 수 있습니다.  

#### 데모

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:700px">
    <iframe id="grid-selection-iframe" src='{environment:demosBaseUrl}/grid/grid-selection' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-selection-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:700px">
    <iframe id="treegrid-selection-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-selection' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-selection-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:710px">
    <iframe id="hierarchical-grid-selection-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-selection' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-selection-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
<div class="divider--half"></div>
}

@@if (igxName === 'IgxGrid') {
### Selection Based Summaries

This sample demonstrates the usage of multiple selection along with custom summary functions. 
Change the selection to see summaries of the currently selected range.

<div class="sample-container loading" style="height: 560px;">
    <iframe id="grid-selection-custom-summaries" data-src='{environment:demosBaseUrl}/grid/grid-selection-custom-summaries' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-selection-custom-summaries" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}

### 설정

#### 단일 선택

@@igComponent의 단일 선택은 @@igComponent의 [`onSelection`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onselection) 이벤트를 사용하여 간단하게 설정할 수 있습니다. 이 이벤트는 셀 컴포넌트에 대한 참조를 내보냅니다. 셀 컴포넌트에는 포함되는 행 컴포넌트에 대한 참조가 있습니다. 행 컴포넌트 참조의 [`rowID`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/classes/igxgridrowcomponent.html#rowid) 게터를 사용하여 행([`rowData[primaryKey]`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#primarykey) 또는 [`rowData`]({environment:angularApiUrl}/classes/igxgridrowcomponent.html#rowdata) 객체 자체를 사용하여)의 고유 식별자를 선택의 적절한 목록에 전달합니다. 단일 행만 항상 선택되도록 하기 위해 선택 행 선택 목록을 미리 비웁니다([`selectRows`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#selectrows) 메소드 호출의 두 번째 인수):

@@if (igxName === 'IgxGrid') {
```html
<!-- selectionExample.component.html -->

<igx-grid #grid1 [data]="remote | async" [rowSelectable]="false" (onSelection)="handleRowSelection($event)"
    [width]="'800px'" [height]="'600px'" [allowFiltering]="true">
        ...
</igx-grid>
```
```typescript
/* selectionExample.component.ts */

public handleRowSelection(args) {
    const targetCell = args.cell as IgxGridCellComponent;
    if (!this.selection) {
        this.grid1.selectRows([targetCell.row.rowID], true);
    }
}
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<!-- selectionExample.component.html -->

<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false" [height]="'530px'" width="100%"
            [rowSelectable]="selection" [allowFiltering]="true" (onSelection)="handleRowSelection($event)">
    ...
</igx-tree-grid>
```
```typescript
/* selectionExample.component.ts */

public handleRowSelection(event) {
    const targetCell = event.cell;
    if (!this.selection) {
        this.treeGrid.deselectAllRows();
        this.treeGrid.selectRows([targetCell.row.rowID]);
    }
}
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false"
        [height]="'600px'" [width]="'100%'" [rowSelectable]="selection"
        (onSelection)="handleRowSelection($event)" #hierarchicalGrid>
    ...
</igx-hierarchical-grid>
```
```typescript
/* selectionExample.component.ts */

    public handleRowSelection(event) {
        const targetCell = event.cell;
        if (!this.selection) {
            this.hGrid.deselectAllRows();
            this.hGrid.selectRows([targetCell.row.rowID]);
        }
    }
```
}

#### 복수 선택

복수 행 선택을 사용하도록 하기 위해 [`@@igSelector`]({environment:angularApiUrl}/classes/@@igTypeDoc.html)의 [`rowSelectable`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowselectable) 속성을 사용합니다. [`rowSelectable`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowselectable)을 `true`로 설정하면 각 행 및 @@igComponent 헤더에서 체크 박스 필드를 선택할 수 있게 됩니다. 체크 박스를 사용하여 복수의 행을 선택할 수 있으며 스크롤, 페이징 및 정렬 및 필터링 등의 데이터 조작을 통해 선택이 유지됩니다.

@@if (igxName === 'IgxGrid') {
```html
<!-- selectionExample.component.html -->

<igx-grid #grid1 [data]="remote | async" [primaryKey]="'ProductID'" [rowSelectable]="selection" (onSelection)="handleRowSelection($event)"
    [width]="'800px'" [height]="'600px'" [allowFiltering]="true">
    ...
</igx-grid>
```

```typescript
/* selectionExample.component.ts */

public selection = true;
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<!-- selectionExample.component.html -->

<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [height]="'530px'" width="100%" [autoGenerate]="false" [rowSelectable]="selection" [allowFiltering]="true" (onSelection)="handleRowSelection($event)">
    ...
</igx-tree-grid>
```

```typescript
/* selectionExample.component.ts */

public selection = true;
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false"
        [height]="'600px'" [width]="'100%'" [rowSelectable]="selection"
        (onSelection)="handleRowSelection($event)" #hierarchicalGrid>
    ...
</igx-hierarchical-grid>
```
```typescript
/* selectionExample.component.ts */

public selection = true;
```
}

@@if (igxName !== 'IgxTreeGrid') {
**참고:** 적절한 행 선택 및 셀 선택을 위해 @@igComponent가 원격 가상화를 실행하는 동안 [`primaryKey`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#primarykey)를 제공해야 합니다.
}

**참고:** 필터링이 설정된 경우, [`selectAllRows()`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#selectallrows) 및 [`deselectAllRows()`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#deselectallrows)는 *필터링된* 모든 행을 선택/선택 취소합니다.

@@if (igxName !== 'IgxTreeGrid') {
**참고:** @@igComponent에 원격 가상화가 설정된 경우, 헤더 체크 박스를 클릭하면 모든 레코드가 선택/선택 취소됩니다. 그러나, 헤더 체크 박스를 통해 모든 레코드가 선택된 후 가시적인 행이 선택 해제된 경우, 필요에 따라 새로운 데이터가 @@igComponent에 로딩되면 새롭게 로드된 행이 선택되지 않는 제한이 있습니다.
}

**참고:** 셀 선택은 [`onRowSelectionChange`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onrowselectionchange)가 아닌 [`onSelection`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onselection)이 트리거됩니다.

### 코드 조각

#### 프로그래밍 방식으로 행을 선택

다음의 코드 예제를 사용하여 단일 또는 복수 행을 동시에 선택할 수 있습니다([`primaryKey`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#primarykey)를 사용하여):

@@if (igxName === 'IgxGrid' || igxName === 'IgxTreeGrid') {
```html
<!-- selectionExample.component.html -->

<@@igSelector ... [primaryKey]="'ID'">
...
</@@igSelector>
...
<button (click)="this.@@igObjectRef.selectRows([1,2,5])">Select 1,2 and 5</button>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<!-- selectionExample.component.html -->

<@@igSelector ... [primaryKey]="'artist'">
...
</@@igSelector>
...
<button (click)="this.@@igObjectRef.selectRows([1,2,5])">Select 1,2 and 5</button>
```
}

이렇게 하면 ID 1, 2 및 5가 있는 데이터 항목에 해당하는 행을 @@igComponent 선택에 추가할 수 있습니다.

#### 선택 이벤트 취소
```html
<!-- selectionExample.component.html -->

<@@igSelector (onRowSelectionChange)="handleRowSelectionChange($event)">
...
</@@igSelector>
```
```typescript
/* selectionExample.component.ts */

public handleRowSelectionChange(args) {
    args.newSelection = args.oldSelection; // overwrites the new selection, making it so that no new row(s) are entered in the selectionAPI
    args.checked = false; // overwrites the checkbox state
}
```

### API 참조

* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
@@if (igxName !== 'IgxTreeGrid') {* [IgxGridRowComponent API]({environment:angularApiUrl}/classes/igxgridrowcomponent.html)}@@if (igxName === 'IgxTreeGrid') {* [IgxTreeGridRowComponent API]({environment:angularApiUrl}/classes/igxtreegridrowcomponent.html)}
* [IgxGridCellComponent API]({environment:angularApiUrl}/classes/igxgridcellcomponent.html)
* [@@igxNameComponent 스타일]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

### 추가 리소스
<div class="divider--half"></div>

* [@@igComponent 개요](@@igMainTopic.md)
* [페이징](paging.md)
* [필터링](filtering.md)
* [정렬](sorting.md)
* [요약](summaries.md)
* [열 이동](column_moving.md)
* [열 핀 고정](column_pinning.md)
* [열 크기 조정](column_resizing.md)
* [가상화 및 성능](virtualization.md)

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **포럼**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
