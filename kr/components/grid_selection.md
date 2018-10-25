---
title: 행 선택 컴포넌트- 네이티브 Angular | Ignite UI for Angular
_description: Ignite UI for Angular 행 선택 컴포넌트는 행의 모든 열 앞에 있는 체크 박스에서 행을 선택하거나 선택 취소할 수 있고 사용자가 데이터를 포함한 복수의 행을 선택할 수 있습니다.
_keywords: Ignite UI for Angular, UI 컨트롤, Angular 위젯, 웹 위젯, UI 위젯, Angular, 네이티브 Angular 컴포넌트 세트, 네이티브 Angular 컨트롤, 네이티브 Angular 컴포넌트 라이브러리, 네이티브 Angular 컴포넌트, Angular 데이터 그리드 컴포넌트, Angular 데이터 그리드 컨트롤, Angular 그리드 컴포넌트, Angular 그리드 컨트롤, Angular 고성능 그리드, Angular 그리드 행 선택, Angular 행 선택, Angular 그리드 선택, 그리드 행 선택, 그리드 선택
_language: kr
---

### 데이터 그리드 행 선택

Ignite UI for Angular에서 행 선택은 해당 행의 모든 열 앞에 체크 박스가 있습니다. 사용자가 체크 박스를 클릭하면 행을 선택하거나 선택 취소할 수 있고 사용자가 데이터를 포함한 복수의 행을 선택할 수 있습니다.  

#### 데모

<div class="sample-container loading" style="height:730px">
    <iframe id="grid-selection-iframe" src='{environment:demosBaseUrl}/grid-selection' width="100%" height="90%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-selection-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>


### 설정

#### 단일 선택

그리드의 `onSelection` 이벤트를 사용하여 그리드 단일 선택을 간단히 설정할 수 있습니다. 이 이벤트는 셀 컴포넌트에 대한 참조를 내보냅니다. 셀 컴포넌트에는 포함되는 행 컴포넌트에 대한 참조가 있습니다. 행 컴포넌트 참조의 `rowID` 게터를 사용하여 행(`rowData[primaryKey]` 또는 `rowData` 객체 자체를 사용하여)의 고유 식별자를 selectionAPI의 적절한 목록에 전달합니다. 단일 행만 항상 선택되도록 하기 위해 `selectionAPI` 행 선택 목록을 미리 비웁니다(`selectRows` 메소드 호출의 두 번째 인수):

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

복수 행 선택을 사용하도록 하기 위해 `igx-grid`의 `rowSelectable` 속성을 사용합니다. `rowSelectable`을 `true`로 설정하면 각 행 및 그리드 헤더에서 체크 박스 필드를 선택할 수 있게 됩니다. 체크 박스를 사용하여 복수의 행을 선택할 수 있으며 스크롤, 페이징 및 정렬 및 필터링 등의 데이터 조작을 통해 선택이 유지됩니다.

```html
    <igx-grid #grid1 [data]="remote | async" [primaryKey]="'ProductID'" [rowSelectable]="selection" (onSelection)="handleRowSelection($event)"
      [width]="'800px'" [height]="'600px'">
```

*Note:* In order to have proper row selection and cell selection, while grid has remote virtualization, `primaryKey` should be provided.
*Note:* When grid has remote virtualization then clicking the header checkox will select/deselect all records. But when all records are selected through header checkbox and then a visible row has been deselected, when new data is loaded in the grid on demand, it is a limitation that the newly loaded rows are not selected.

### 메소드

#### IgxGridComponent

   | 이름     | 설명                | 반환 유형                                       | 매개 변수           |
   |----------|----------------------------|---------------------------------------------------|----------------------|
   | selectedRows | 현재 선택 상태를 가져옴    | `Array<any>`- 선택된 행의 ID(primaryKey 또는 rowData)를 가진 배열| |
   | selectRows   | ID로 지정한 행을 선택함      | `void`- 아무것도 반환하지 않습니다. | `Array<any>`, clearCurrentSelection: `boolean`    |
   | deselectRows | ID로 지정한 행을 선택 취소함    | `void`- 아무것도 반환하지 않습니다. | `Array<any>` |
   | selectAllRows | 모든 행을 선택함            | `void`- 아무것도 반환하지 않습니다. |    N/A                    |
   | deselectAllRows | 모든 행을 선택함          | `void`- 아무것도 반환하지 않습니다. |    N/A                    |

*Note:* If filtering is in place, `selectAllRows()` and `deselectAllRows()` select/deselect all *filtered* rows.

### 이벤트
|이름|설명|매개 변수|
|--|--|--|
| onRowSelectionChange | 선택이 변경될 때 발생합니다. | { selection: `Array<any>`, row: IgxRowComponent, rowID: any|

*Note:* Cell selection will trigger onSelection and not onRowSelection.

### 코드 조각

#### 프로그래밍 방식으로 행을 선택
다음의 코드 예제를 사용하여 단일 또는 복수 행을 동시에 선택할 수 있습니다(`primaryKey`를 사용하여):
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

### 추가 리소스
<div class="divider--half"></div>

* [그리드 개요](grid.md)
* [페이징](grid_paging.md)
* [필터링](grid_filtering.md)
* [정렬](grid_sorting.md)
* [요약](grid_summaries.md)
* [열 이동](grid_column_moving.md)
* [열 핀 고정](grid_column_pinning.md)
* [열 크기 조정](grid_column_resizing.md)
* [가상화 및 성능](grid_virtualization.md)

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
