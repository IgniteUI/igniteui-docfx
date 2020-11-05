@@if (igxName === 'IgxGrid') {
---
title: Angular Grid Editing | Data Manipulation | Ignite UI for Angular | Infragistics
_description: Configure in cell data manipulation with feature rich Angular UI grid, try the update data features and Angular CRUD by using the Ignite UI for Angular grid editing
_keywords: data manipulation, ignite ui for angular, infragistics
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular TreeGrid Editing | Data Manipulation | Ignite UI for Angular
_description: Configure in cell data manipulation with feature rich Angular UI grid, try the update data features and Angular CRUD by using the Ignite UI for Angular tree grid editing
_keywords: data manipulation, ignite ui for angular, infragistics
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular HierarchicalGrid Editing | Data Manipulation | Ignite UI for Angular
_description: Configure in cell data manipulation with feature rich Angular UI grid, try the update data features and Angular CRUD by using the Ignite UI for Angular hierarchical grid editing
_keywords: data manipulation, ignite ui for angular, infragistics
---
}

### @@igComponent cell editing and edit templates

Ignite UI for Angular @@igComponent component provides a great data manipulation capabilities and powerful API for Angular CRUD operations. By default the @@igComponent is using `in cell` editing and different editors will be shown based on the data type of the column, thanks to the default cell editing template. In addition you can define your own custom templates for update data actions and to override the default behavior for committing and discarding any changes.


#### 데모

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:650px">
    <iframe id="grid-editing-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-editing' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:950px">
    <iframe id="treegrid-editing-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-editing' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:660px">
    <iframe id="hierarchical-grid-editing-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-editing' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
}
<div class="divider--half"></div>

특정 셀에서 편집 모드에 들어가려면 먼저 열을 [`editable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#editable)로 설정해야 합니다. 데이터 유형별 *편집 템플릿*을 사용하려면 열 [`dataType`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#datatype) 속성을 지정해야 합니다. 이제 각 유형의 기본 템플릿이 무엇인지 살펴 보겠습니다.

 - `string` 데이터 형식의 경우 기본 템플릿은 [**igxInput**]({environment:angularApiUrl}/classes/igxinputdirective.html)을 사용합니다
 - `number` 데이터 유형의 경우 기본 템플릿은 **[igxInput]({environment:angularApiUrl}/classes/igxinputdirective.html) type="number"**를 사용하며, 숫자로 분석할 수 없는 값으로 셀을 업데이트한 경우에는 변경이 취소되고 셀 값은 **0**으로 설정됩니다.
 - `date` 데이터 형식의 경우 기본 템플릿은 [**igx-date-picker**]({environment:angularApiUrl}/classes/igxdatepickercomponent.html)를 사용합니다
 - `boolean` 데이터 형식의 경우 기본 템플릿은 [**igx-checkbox**]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html)를 사용합니다

편집 가능한 셀이 다음 중 하나의 방법으로 포커스되어 있는 경우, 특정 셀에서 편집 모드로 들어갈 수 있습니다:
 - 더블 클릭;
 - 원클릭 - 이전에 선택한 셀이 편집 모드이고 현재 선택한 셀이 편집 가능한 경우에만 원클릭으로 편집 모드에 들어갑니다. 이전에 선택한 셀이 편집 모드에 있지 않은 경우, 원클릭을 하면 편집 모드에 들어가지 않고 셀이 선택됩니다.
 - `Enter` 키를 누름;
 - `F2` 키를 누름;

다음 방법 중 하나를 사용하여 **변경을 확정하지 않고** 편집 모드를 종료할 수 있습니다:
 - `Escape` 키를 누름;
 - *정렬*, *필터링*, *검색*, *숨기기* 조작을 실행할 때;

다음 방법 중 하나를 사용하여 편집 모드를 종료하고 변경을 **확정**할 수 있습니다:
 - `Enter` 키를 누름;
 - `F2` 키를 누름;
 - `Tab` 키를 누름;
 - 다른 셀을 원클릭 - @@igComponent의 다른 셀을 클릭하면 변경이 제출됩니다.
 - 페이징, 크기 조정, 핀 고정 또는 이동 등의 조작은 편집 모드를 종료하고 변경 사항이 확정됩니다.

> [!NOTE]
> 셀은 수직 또는 수평으로 스크롤하거나 @@igComponent 이외를 클릭해도 편집 모드로 유지됩니다. 이것은 셀 편집과 행 편집 모두에 유효합니다.

기본 키가 정의되어 있는 경우에만 @@igxName API를 통해 셀 값을 수정할 수도 있습니다.

@@if (igxName === 'IgxGrid') {
```typescript
...
    public updateCell() {
        this.grid1.updateCell(newValue, rowID, 'ReorderLevel');
    }
...
```
}
@@if (igxName === 'IgxTreeGrid') {
```typescript
...
    public updateCell() {
        this.treeGrid.updateCell(newValue, rowID, 'Age');
    }
...
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```typescript
...
    public updateCell() {
        this.hierarchicalGrid.updateCell(newValue, rowID, 'Age');
    }
...
```
}
업데이트하려는 셀이 @@igComponent의 표시 컨테이너 외부에 있는 경우 새로운 값이 제출되지 않습니다.

셀을 업데이트하는 또 다른 방법은 [`IgxGridCellComponent`]({environment:angularApiUrl}/classes/igxgridcellcomponent.html)의 [`update`]({environment:angularApiUrl}/classes/igxgridcellcomponent.html#update) 메소드를 직접 호출하는 것입니다:

@@if (igxName === 'IgxGrid') {
```typescript
...
    public updateCell() {
        const cell = this.grid1.getCellByColumn(rowIndex, 'ReorderLevel');
        // You can also get cell by rowID if primary key is defined
        // cell = this.grid1.getCellByKey(rowID, 'ReorderLevel');
        cell.update(70);
    }
...
```
}
@@if (igxName === 'IgxTreeGrid') {
```typescript
...
    public updateCell() {
        const cell = this.treeGrid.getCellByColumn(rowIndex, 'Age');
        // You can also get cell by rowID if primary key is defined
        // const cell = this.treeGrid.getCellByKey(rowID, 'Age');
        cell.update(9999);
    }
...
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```typescript
...
    public updateCell() {
        const cell = this.hierarchicalGrid.getCellByColumn(rowIndex, 'ReorderLevel');
        // You can also get cell by rowID if primary key is defined
        // cell = this.hierarchicalGrid.getCellByKey(rowID, 'ReorderLevel');
        cell.update(70);
    }
...
```
}

@@if (igxName === 'IgxGrid') {
셀이 편집 모드일 때 적용될 사용자 템플릿을 정의하는 방법에 대해서는 [그리드 열 구성](grid.md#columns-configuration)에 대한 문서를 참조하십시오.
}

### CRUD 조작

> [!NOTE]
> **CRUD 조작**을 실행할 경우에는 **필터링**, **정렬**, **그룹화** 등 적용된 모든 파이프는 다시 적용되고 표시가 자동으로 업데이트된다는 점에 유의하십시오.

[`@@igxNameComponent`]({environment:angularApiUrl}/classes/@@igTypeDoc.html)는 기본적인 CRUD 조작을 위한 간단한 API를 제공합니다.

#### 새로운 레코드 추가

@@igComponent 컴포넌트는 제공된 데이터를 데이터 소스 자체에 추가하는 [`addRow`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#addrow) 메소드를 제공합니다.

@@if (igxName === 'IgxGrid') {
```typescript
// Adding a new record
// Assuming we have a `getNewRecord` method returning the new row data.
const record = this.getNewRecord();
this.grid.addRow(record);
```
}
@@if (igxName === 'IgxTreeGrid') {
```typescript
public addNewChildRow() {
    // Adding a new record
    // Assuming we have a `getNewRecord` method returning the new row data
    // And specifying the parentRowID.
    const record = this.getNewRecord();
    this.treeGrid.addRow(record, 1);
    }
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```typescript
public addRow() {
    // Adding a new record
    // Assuming we have a `getNewRecord` method returning the new row data
    const record = this.getNewRecord();
    this.hierarchicalGrid.addRow(record, 1);
    }
```
}

#### @@igComponent에 데이터를 업데이트

@@igComponent에 데이터를 업데이트하는 것은 [`updateRow`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#updaterow) 및 [`updateCell`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#updatecell) 메소드를 통해 이루어지며 **그리드의 기본 키가 정의되어 있는 경우에만 실행됩니다**. 또한, `update` 메소드를 통해 셀 및/또는 행 값을 직접 업데이트할 수 있습니다.

@@if (igxName === 'IgxGrid') {
```typescript
// Updating the whole row
this.grid.updateRow(newData, this.selectedCell.cellID.rowID);

// Just a particular cell through the Grid API
this.grid.updateCell(newData, this.selectedCell.cellID.rowID, this.selectedCell.column.field);

// Directly using the cell `update` method
this.selectedCell.update(newData);

// Directly using the row `update` method
const row = this.grid.getRowByKey(rowID);
row.update(newData);
```
}
@@if (igxName === 'IgxTreeGrid') {
```typescript
// Updating the whole row
this.treeGrid.updateRow(newData, this.selectedCell.cellID.rowID);

// Just a particular cell through the Tree Grid API
this.treeGrid.updateCell(newData, this.selectedCell.cellID.rowID, this.selectedCell.column.field);

// Directly using the cell `update` method
this.selectedCell.update(newData);

// Directly using the row `update` method
const row = this.treeGrid.getRowByKey(rowID);
row.update(newData);
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```typescript
// Updating the whole row
this.hierarchicalGrid.updateRow(newData, this.selectedCell.cellID.rowID);

// Just a particular cell through the Grid API
this.hierarchicalGrid.updateCell(newData, this.selectedCell.cellID.rowID, this.selectedCell.column.field);

// Directly using the cell `update` method
this.selectedCell.update(newData);

// Directly using the row `update` method
const row = this.hierarchicalGrid.getRowByKey(rowID);
row.update(newData);
```
}

#### @@igComponent에서 데이터 삭제

[`deleteRow()`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#deleterow) 메소드는 기본 키가 정의 된 경우에만 지정된 행을 제거합니다.

@@if (igxName === 'IgxGrid') {
```typescript
// Delete row through Grid API
this.grid.deleteRow(this.selectedCell.cellID.rowID);
// Delete row through row object
const row = this.grid.getRowByIndex(rowIndex);
row.delete();
```
}
@@if (igxName === 'IgxTreeGrid') {
```typescript
// Delete row through Tree Grid API
this.treeGrid.deleteRow(this.selectedCell.cellID.rowID);
// Delete row through row object
const row = this.treeGrid.getRowByIndex(rowIndex);
row.delete();
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```typescript
// Delete row through Grid API
this.hierarchicalGrid.deleteRow(this.selectedCell.cellID.rowID);
// Delete row through row object
const row = this.hierarchicalGrid.getRowByIndex(rowIndex);
row.delete();
```
}
**@@igSelector**와 관계 없이 예를 들면 버튼 클릭 등의 사용자 상호 작용에 연결할 수 있습니다:
```html
<button igxButton igxRipple (click)="deleteRow($event)">Delete Row</button>
```

<div class="divider--half"></div>

### API 참조

* [IgxGridCellComponent]({environment:angularApiUrl}/classes/igxgridcellcomponent.html)
* [@@igxNameComponent 스타일]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
@@if (igxName !== 'IgxTreeGrid') {* [IgxGridRowComponent]({environment:angularApiUrl}/classes/igxgridrowcomponent.html)}@@if (igxName === 'IgxTreeGrid') {* [IgxTreeGridRowComponent]({environment:angularApiUrl}/classes/igxtreegridrowcomponent.html)}
* [IgxInputDirective]({environment:angularApiUrl}/classes/igxinputdirective.html)
* [IgxDatePickerComponent]({environment:angularApiUrl}/classes/igxdatepickercomponent.html)
* [IgxDatePickerComponent 스타일]({environment:sassApiUrl}/index.html#function-igx-date-picker-theme)
* [IgxCheckboxComponent]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html)
* [IgxCheckboxComponent 스타일]({environment:sassApiUrl}/index.html#function-igx-checkbox-theme)
* [IgxOverlay]({environment:angularApiUrl}/interfaces/overlaysettings.html)
* [IgxOverlay 스타일]({environment:sassApiUrl}/index.html#function-igx-overlay-theme)


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
