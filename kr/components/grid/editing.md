---
title: 그리드 편집- 네이티브 Angular| Ignite UI for Angular
_description: Ignite UI for Angular 데이터 그리드 컨트롤은 열의 데이터 유형을 기반으로 하는 편집 가능한 열의 기본 셀 템플릿을 제공합니다.
_keywords: Ignite UI for Angular, UI 컨트롤, Angular 위젯, 웹 위젯, UI 위젯, Angular, 네이티브 Angular 컴포넌트 세트, 네이티브 Angular 컨트롤, 네이티브 Angular 컴포넌트 라이브러리, 네이티브 Angular 컴포넌트, Angular 그리드, Angular 데이터 그리드 컴포넌트, Angular 데이터 그리드 컨트롤, Angular 그리드 컴포넌트, Angular 그리드 컨트롤, Angular 고성능 그리드, 셀 편집
_language: kr
---

### 그리드 편집

Ignite UI for Angular 그리드 컴포넌트는 열의 데이터 유형을 기반으로 편집 가능한 열에 기본 셀 템플릿을 제공합니다. 또한, 편집 가능한 열에 사용자 템플릿을 정의할 수 있고 셀 값의 변경 확정 및 취소로 기본 동작을 무효로 할 수 있습니다.

#### 데모

<div class="sample-container loading" style="height:650px">
    <iframe id="grid-editing-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-editing' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기</button>
</div>
<div class="divider--half"></div>

특정 셀에 대해 편집 모드를 시작하려면 먼저 열을 [`편집 가능`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#editable)으로 설정해야 합니다. 데이터 유형별 *편집 템플릿*을 사용하려면 열 [`dataType`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#datatype)속성을 지정해야 합니다. 이제 각 유형의 기본 템플릿이 무엇인지 살펴 보겠습니다.

 - `string` 문자열 데이터 유형의 경우, 기본 템플릿은 [**igxInput**]({environment:angularApiUrl}/classes/igxinputdirective.html)을 사용함
 - `number` 데이터 유형의 경우, 기본 템플릿은 **[igxInput]({environment:angularApiUrl}/classes/igxinputdirective.html) type="number"**를 사용하므로 셀을 숫자로 구문 분석할 수 없는 값으로 업데이트하려고 하면 변경 내용이 삭제되고 셀 값이 **0**으로 설정됩니다.
 - `date` 데이터 유형의 경우, 기본 템플릿은 [**igx-date-picker**]({environment:angularApiUrl}/classes/igxdatepickercomponent.html)을 사용함
 - `boolean` 데이터 유형의 경우, 기본 템플릿은 [**igx-checkbox**]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html)을 사용함

편집 가능한 셀이 다음 중 하나의 방법으로 포커스되어 있는 경우, 특정 셀에서 편집 모드로 들어갈 수 있습니다:
 - 더블 클릭;
 - 원클릭 - 이전에 선택한 셀이 편집 모드이고 현재 선택한 셀이 편집 가능한 경우에만 원클릭으로 편집 모드에 들어갑니다. 이전에 선택한 셀이 편집 모드에 있지 않은 경우, 원클릭을 하면 편집 모드에 들어가지 않고 셀이 선택됩니다.
 - `Enter` 키를 누름;
 - `F2` 키를 누름;

다음 방법 중 하나를 사용하여 변경을 **확정하지 않고** 편집 모드를 종료할 수 있습니다:
 - `Escape` 키를 누름;
 - *정렬*, *필터링*, *검색*, *숨기기* 조작을 실행할 때;

다음 방법 중 하나를 사용하여 편집 모드를 종료하고 변경을 **확정**할 수 있습니다:
 - `Enter` 키를 누름;
 - `F2` 키를 누름;
 - `Tab` 키를 누름;
 - 다른 셀을 원클릭 - 그리드의 다른 셀을 클릭하면 변경이 제출됩니다.
 - '이동' 및 '고정' 조작을 실행할 때;

> [!NOTE]
> 세로 또는 가로로 스크롤하거나, 그리드 이외를 클릭하거나, 열의 크기를 조정하거나, 열을 핀 고정하거나 다른 페이지로 이동한 경우에는 셀은 편집 모드로 유지됩니다.

프라이머리가 정의되어 있는 경우에만 IgxGrid API를 통해 셀 값을 수정할 수도 있습니다.

```typescript
...
    public updateCell() {
        this.grid1.updateCell(newValue, rowID, 'ReorderLevel');
    }
...
```
업데이트하려는 셀이 그리드의 표시 컨테이너 외부에 있는 경우 새로운 값이 제출되지 않습니다.

또한, 셀을 직접 업데이트하는 또 다른 방법은[`IgxGridCellComponent`]({environment:angularApiUrl}/classes/igxgridcellcomponent.html)의 [`update`]({environment:angularApiUrl}/classes/igxgridcellcomponent.html#update) 메소드입니다:

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
셀이 편집 모드일 때 적용될 사용자 템플릿을 정의하는 방법에 대해서는 [그리드 열 구성](grid.md#columns-configuration)에 대한 문서를 참조하십시오.

### CRUD 조작

> [!NOTE]
> **CRUD 조작**을 실행할 경우에는 **필터링**, **정렬**, **그룹화** 등 적용된 모든 파이프는 다시 적용되고 표시가 자동으로 업데이트된다는 점에 유의하십시오.

[`IgxGridComponent`]({environment:angularApiUrl}/classes/igxgridcomponent.html) 는 기본 CRUD 작업을 위한 명확한 API를 제공합니다.

#### 새로운 레코드 추가

그리드 컴포넌트는 제공된 데이터를 데이터 소스 자체에 추가하는 [`addRow`]({environment:angularApiUrl}/classes/igxgridcomponent.html#addrow) 메소드를 노출합니다.

```typescript
// Adding a new record
// Assuming we have a `getNewRecord` method returning the new row data.
const record = this.getNewRecord();
this.grid.addRow(record);
```

#### 그리드 데이터 업데이트

그리드의 데이터 업데이트는 [`updateRow`]({environment:angularApiUrl}/classes/igxgridcomponent.html#updaterow) 및 [`updateCell`]({environment:angularApiUrl}/classes/igxgridcomponent.html#updatecell) 메소드를 통해 실시할 수 있지만 **그리드에 기본 키가 정의된 경우에만 가능합니다**. [`update`]({environment:angularApiUrl}/classes/igxgridcellcomponent.html#update) 메소드를 통해 셀 및 행 값을 직접 업데이트 할 수도 있습니다.

```typescript
// Updating the whole row
this.grid.updateRow(newData, this.selectedCell.cellID.rowID);

// Just a particualr cell through the Grid API
this.grid.updateCell(newData, this.selectedCell.cellID.rowID, this.selectedCell.column.field);

// Directly using the cell `update` method
this.selectedCell.update(newData);

// Directly using the row `update` method
const row = this.grid.getRowByKey(rowID);
row.update(newData);
```

#### 그리드에서 데이터 삭제

[`deleteRow()`]({environment:angularApiUrl}/classes/igxgridcomponent.html#deleterow) 메소드는 기본 키가 정의된 경우에만 지정된 행을 제거합니다.

```typescript
// Delete row through Grid API
this.grid.deleteRow(this.selectedCell.cellID.rowID);
// Delete row through row object
const row = this.grid.getRowByIndex(rowIndex);
row.delete();
```
**igx-grid**와 관계 없이 예를 들면 버튼 클릭 등의 사용자 상호 작용에 연결할 수 있습니다:
```html
<button igxButton igxRipple (click)="deleteRow($event)">Delete Row</button>
```

<div class="divider--half"></div>

### API 참조
* [IgxGridCellComponent]({environment:angularApiUrl}/classes/igxgridcellcomponent.html)
* [IgxGridComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [IgxGridRowComponent]({environment:angularApiUrl}/classes/igxgridrowcomponent.html)
* [IgxInputDirective]({environment:angularApiUrl}/classes/igxinputdirective.html)
* [IgxDatePickerComponent]({environment:angularApiUrl}/classes/igxdatepickercomponent.html)
* [IgxDatePickerComponent Styles]({environment:sassApiUrl}/index.html#function-igx-date-picker-theme)
* [IgxCheckboxComponent]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html)
* [IgxCheckboxComponent Styles]({environment:sassApiUrl}/index.html#function-igx-checkbox-theme) 
* [IgxOverlay]({environment:angularApiUrl}/interfaces/overlaysettings.html)
* [IgxOverlay Styles]({environment:sassApiUrl}/index.html#function-igx-overlay-theme)


### 추가 리소스
<div class="divider--half"></div>

* [그리드 개요](grid.md)
* [가상화 및 성능](virtualization.md)
* [페이징](paging.md)
* [필터링](filtering.md)
* [정렬](sorting.md)
* [요약](summaries.md)
* [열 핀 고정](column_pinning.md)
* [열 크기 조정](column_resizing.md)
* [선택](selection.md)
* [검색](search.md)
