---
title: 행 선택 컴포넌트- 네이티브 Angular| Ignite UI for Angular
_description: Ignite UI for Angular 행 선택 컴포넌트는 행의 모든 열 앞에 있는 체크 박스에서 행을 선택하거나 선택 취소할 수 있고 사용자가 데이터를 포함한 복수의 행을 선택할 수 있습니다.
_keywords: Ignite UI for Angular, UI 컨트롤, Angular 위젯, 웹 위젯, UI 위젯, Angular, 네이티브 Angular 컴포넌트 세트, 네이티브 Angular 컨트롤, 네이티브 Angular 컴포넌트 라이브러리, 네이티브 Angular 컴포넌트, Angular 데이터 그리드 컴포넌트, Angular 데이터 그리드 컨트롤, Angular 그리드 컴포넌트, Angular 그리드 컨트롤, Angular 고성능 그리드, Angular 그리드 행 선택, Angular 행 선택, Angular 그리드 선택, 그리드 행 선택, 그리드 선택
_language: kr
---

### 데이터 그리드 행 선택

Ignite UI for Angular에서 행 선택은 해당 행의 모든 열 앞에 체크 박스가 있습니다. 사용자가 체크 박스를 클릭하면 행을 선택하거나 선택 취소할 수 있고 사용자가 데이터를 포함한 복수의 행을 선택할 수 있습니다.  

#### 데모

<div class="sample-container loading" style="height:730px">
    <iframe id="grid-selection-iframe" src='{environment:demosBaseUrl}/grid/grid-selection' width="100%" height="90%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-selection-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기</button>
</div>
<div class="divider--half"></div>


### 설정

#### 단일 선택

그리드의 [`onSelection`]({environment:angularApiUrl}/classes/igxgridcomponent.html#onselection) 이벤트를 사용하여 그리드 단일 선택을 간단히 설정할 수 있습니다. 이 이벤트는 셀 컴포넌트에 대한 참조를 내보냅니다. 셀 컴포넌트에는 포함되는 행 컴포넌트에 대한 참조가 있습니다. 행 컴포넌트 참조의 [`rowID`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/classes/igxgridrowcomponent.html#rowid) 게터를 사용하여 행([`rowData[primaryKey]`]({environment:angularApiUrl}/classes/igxgridcomponent.html#primarykey) 또는 [`rowData`]({environment:angularApiUrl}/classes/igxgridrowcomponent.html#rowdata) 객체 자체를 사용하여)의 고유 식별자를 selection의 적절한 목록에 전달합니다. 단일 행만 항상 선택되도록 하기 위해 selection 행 선택 목록을 미리 비웁니다([`selectRows`]({environment:angularApiUrl}/classes/igxgridcomponent.html#selectrows) 메소드 호출의 두 번째 인수):

```html
    <!-- in example.component.html -->
    ...
    <igx-grid #grid1 [data]="remote | async" [rowSelectable]="false" (onSelection)="handleRowSelection($event)"
      [width]="'800px'" [height]="'600px'">
            ...
    </igx-grid>
    ...
```
```typescript
    /* in examplegrid.component.ts */
    public handleRowSelection(args) {
        const targetCell = args.cell as IgxGridCellComponent;
        if (!this.selection) {
            this.grid1.selectRows([targetCell.row.rowID], true);
        }
    }

```

#### 복수 선택

복수 행 선택을 사용하도록 하기 위해 [`igx-grid`]({environment:angularApiUrl}/classes/igxgridcomponent.html)의 [`rowSelectable`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowselectable) 속성을 사용합니다. [`rowSelectable`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowselectable)을 `true`로 설정하면 각 행 및 그리드 헤더에서 체크 박스 필드를 선택할 수 있게 됩니다. 체크 박스를 사용하여 복수의 행을 선택할 수 있으며 스크롤, 페이징 및 정렬 및 필터링 등의 데이터 조작을 통해 선택이 유지됩니다.

```html
    <igx-grid #grid1 [data]="remote | async" [primaryKey]="'ProductID'" [rowSelectable]="selection" (onSelection)="handleRowSelection($event)"
      [width]="'800px'" [height]="'600px'">
```

**참고:** 적절한 행 선택 및 셀 선택을 위해 그리드가 원격 가상화를 실행하는 동안 [`primaryKey`]({environment:angularApiUrl}/classes/igxgridcomponent.html#primarykey)를 제공해야 합니다.

**참고:** 필터링이 있는 경우, [`selectAllRows()`]({environment:angularApiUrl}/classes/igxgridcomponent.html#selectallrows) 및 [`deselectAllRows()`]({environment:angularApiUrl}/classes/igxgridcomponent.html#deselectallrows)가 *필터링된* 모든 행을 선택/선택 해제합니다.


**참고:** 그리드에 원격 가상화가 있는 경우 헤더 체크 박스을 클릭하면 모든 레코드가 선택/선택 해제됩니다. 그러나, 헤더 체크 박스를 통해 모든 레코드가 선택된 후 가시적인 행이 선택 해제된 경우, 필요에 따라 새로운 데이터가 그리드에 로드되면 새롭게 로드된 행이 선택되지 않는 제한이 있습니다.

**참고:** 셀 선택은 [`onSelection`]({environment:angularApiUrl}/classes/igxgridcomponent.html#onselection)이 트리거되고 [`onRowSelectionChange`]({environment:angularApiUrl}/classes/igxgridcomponent.html#onrowselectionchange)에서는 실행되지 않습니다.

### 코드 조각

#### 프로그래밍 방식으로 행을 선택
다음의 코드 예제를 사용하여 단일 또는 복수 행을 동시에 선택할 수 있습니다([`primaryKey`]({environment:angularApiUrl}/classes/igxgridcomponent.html#primarykey)를 사용하여):
```html
<!-- in component.html -->
<igx-grid ... [primaryKey]="'ID'">
...
</igx-grid>
...
<button (click)="this.grid.selectRows([1,2,5])">Select 1,2 and 5</button>
```
이렇게 하면 ID 1, 2 및 5가 있는 데이터 항목에 해당하는 행을 그리드 선택에 추가할 수 있습니다.

#### 선택 이벤트 취소
```html
<!-- in component.html -->
<igx-grid
    (onRowSelectionChange)="handleRowSelectionChange($event)"
>
...
</igx-grid>
```
```typescript
// in component.ts
public handleRowSelectionChange(args) {
    args.newSelection = args.oldSelection; // overwrites the new selection, making it so that no new row(s) are entered in the selectionAPI
    args.checked = false; // overwrites the checkbox state
}
```
### API 참조
* [IgxGridComponent API]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridRowComponent API]({environment:angularApiUrl}/classes/igxgridrowcomponent.html)
* [IgxGridCellComponent API]({environment:angularApiUrl}/classes/igxgridcellcomponent.html)
* [IgxGridComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

### 추가 리소스
<div class="divider--half"></div>

* [그리드 개요](grid.md)
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

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
