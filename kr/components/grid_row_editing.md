---
title: 그리드 행 편집- 네이티브 Angular| Ignite UI for Angular
_description: Row editing - allows modification of several cells in the row, before submitting, at once, all those changes to the grid's data source. Leverages the pending changes functionality of the new transaction provider.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Component, Angular Grid, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, Cell Editing
_language: kr
---

## 그리드 행 편집

행 편집 - 그리드의 데이터 소스에 대한 모든 변경 사항을 제출하기 전에 즉시 행의 여러 셀을 수정할 수 있습니다. 새로운 트랜잭션 공급자의 보류 중인 변경 기능을 활용합니다.



### 데모

다음 샘플에서는 그리드에서 행 편집을 활성화하는 방법을 보여줍니다. 셀 값을 변경한 다음 동일한 행의 다른 셀을 클릭하거나 탐색하면 확인될 때까지 행 값이 업데이트되지 않으며, 종료 버튼을 사용하거나 취소 버튼을 사용하여 취소합니다.

<div class="sample-container loading" style="height:650px">
    <iframe id="grid-row-editing-sample-iframe" src='{environment:demosBaseUrl}/grid-row-editing' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-row-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

> [!NOTE]
> 행이 편집 모드에 있는 경우, 다른 행의 셀을 클릭하면 종료 버튼을 누른 것처럼 작동하며, 이전 행의 모든 변경 사항을 제출합니다. 포커스를 받은 새로운 셀을 편집할 수 있는 경우에는 새로운 행도 편집 모드로 전환되며, 셀을 편집 할 수 없는 경우에는 이전 행만 편집 모드를 종료합니다.

<div class="divider--half"></div>

## 사용 방법

시작하려면 **app.module.ts** 파일에서 [IgxGridModule]({environment:angularApiUrl}/classes/igxgridmodule.html) 을 가져옵니다:

```typescript
// app.module.ts

...
import { IgxGridModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxGridModule],
    ...
})
export class AppModule {}
```

그런 다음 바인딩된 데이터 소스 및 [`rowEditable`]({environment:angularApiUrl}/classes/igxgridcomponent.html#roweditable)({environment:angularApiUrl}/classes/igxgridcomponent.html#roweditable)이 true로 설정된 그리드를 정의합니다:

```html
<div class="sample-wrapper">
    <igx-grid #gridRowEditTransaction [data]="data" [primaryKey]="'ProductID'" width="100%" height="500px"
        [rowEditable]="true">
        <igx-column field="ProductID" header="Product ID" editable="false"></igx-column>
        <igx-column field="ReorderLevel" header="ReorderLever" [dataType]="'number'"></igx-column>
        <igx-column field="ProductName" header="ProductName" [dataType]="'string'"></igx-column>
        <igx-column field="UnitsInStock" header="UnitsInStock" [dataType]="'number'">
            <ng-template igxCellEditor let-cell="cell">
                <input name="units" [(ngModel)]="cell.value" style="color: black" />
            </ng-template>
        </igx-column>
        <igx-column field="OrderDate" [dataType]="'date'"></igx-column>
        <igx-column field="Discontinued" header="Discontinued" [dataType]="'boolean'"></igx-column>
    </igx-grid>
</div>
```

> [!NOTE]
> 행 편집을 포함한 편집 작업에는 기본 키를 설정해야 합니다.
> [!NOTE]
> 개별 열에 대해 편집할 필요가 없습니다. 그리드에서 [`rowEditable`]({environment:angularApiUrl}/classes/igxgridcomponent.html#roweditable)({environment:angularApiUrl}/classes/igxgridcomponent.html#roweditable) 속성을 사용하면 기본 필드를 제외한 모든 `field` 속성이 편집 가능함을 의미합니다. 특정 열에 대한 편집을 비활성화하려면 [`editable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#editable)({environment:angularApiUrl}/classes/igxcolumncomponent.html#editable) 열의 입력을 false로 설정합니다.


```typescript

import { Component, ViewChild } from "@angular/core";
import { data } from "./data";

import { IgxGridComponent } from "igniteui-angular";

@Component({
    selector: "app-grid-row-edit",
    styleUrls: [`grid-row-editing-sample.component.css`],
    templateUrl: "grid-row-editing-sample.component.html"
})
export class GridRowEditSampleComponent {
    @ViewChild("gridRowEdit", { read: IgxGridComponent }) public gridRowEdit: IgxGridComponent;

    public data: any[];

    constructor() {
        this.data = data;
    }
}

```

> [!NOTE]
> 그리드는 행 상태가 제출되거나 취소될 때까지 보류 중인 셀 변경을 보유한 공급자 [`IgxBaseTransactionService`]({environment:angularApiUrl}/classes/igxbasetransactionservice.html)({environment:angularApiUrl}/classes/igxbasetransactionservice.html)를 내부적으로 사용합니다.

## 포지셔닝

- 오버레이의 기본 위치는 편집 모드의 행 아래에 위치합니다.
     
- 행 아래에 공간이 없으면 행 위에 오버레이가 표시됩니다.
     
- 상단 또는 하단에 표시된 후 오버레이는 오버레이가 닫히기 전까지 이 위치를 유지합니다.

## 비헤이비어

- 행이 편집 모드에 있는 경우, 동일한 행의 셀을 클릭하면 편집이 계속됩니다.

- “종료” 버튼을 클릭하면 행 편집이 종료되고 사용 가능한 경우 데이터 소스 또는 트랜잭션에 변경이 제출됩니다. 또한 행은 편집 모드를 종료합니다.

- “취소” 버튼을 클릭하면 행의 모든 현재 변경이 되돌려지고 행은 편집 모드를 종료합니다.

- 행이 편집 모드에 있는 경우, 다른 행의 셀을 클릭하면 현재 행 편집이 종료되고 새로운 행 변경이 제출됩니다(동일한 비헤이비어는 “종료” 버튼을 클릭). 포커스를 받은 새로운 셀을 편집할 수 있는 경우에는 새로운 행도 편집 모드로 전환되며, 셀을 편집 할 수 없는 경우에는 이전 행만 편집 모드를 종료합니다.

- 행이 편집 모드이고 행이 표시된 영역 밖으로 이동하도록 그리드를 스크롤한 경우에도 행은 여전히 편집 모드에 있습니다. 그리드를 스크롤하여 행이 다시 표시되도록 하면 행은 여전히 편집 모드에 있습니다.

- 수정된 각 셀은 행 편집이 종료될 때까지 편집된 스타일을 가집니다. 그리드가 트랜잭션과 함께 제공되지 않는 경우의 비헤이비어입니다. 트랜잭션을 사용할 수 있는 경우, 모든 변경이 확정될 때까지 셀 편집 스타일이 적용됩니다.


## 키보드 탐색

- `Enter` 와 `F2` 행 편집 모드로 들어갑니다.

- `Esc` 행 편집 모드를 종료하고 행이 편집 모드에 있는 동안 만든 셀 변경은 제출하지 않습니다.

- `Tab` 편집 가능한 셀에서 행의 다음 셀로, 오른쪽에서 가장 편집 가능한 셀에서 CANCEL 및 DONE 버튼으로 포커스를 이동합니다. DONE 버튼으로부터의 탐색은 현재 편집된 행 안에서 가장 왼쪽에 있는 편집 가능한 셀로 이동합니다.


## 기능 통합

- 모든 데이터 변경 작업은 행 편집 작업을 종료하고 현재 행 변경을 제출합니다. 여기에는 정렬, 그룹화 및 필터링 기준 변경, 페이징 등의 작업이 포함됩니다.

- 행 편집이 종료되면 요약이 업데이트됩니다. 정렬, 필터링 등의 다른 기능의 경우에도 동일합니다.

- 그룹화된 행을 확장하거나 축소해도 현재 행에 대한 편집은 종료되지 않습니다.


## 사용자 정의 행 편집 오버레이

### 사용자 정의 텍스트

`igxRowEditTextDirective` 를 사용하여 행 편집 오버레이의 텍스트를 사용자 정의할 수 있습니다.
`rowChangesCount` 속성이 노출되고 변경된 셀 수를 유지합니다.

```html
<ng-template igxRowEditText let-rowChangesCount>
	Changes: {{rowChangesCount}}
</ng-template>
 ```

 ### 사용자 정의 버튼
`igxRowEditActionsDirective` 를 사용하여 행 편집 오버레이 버튼을 사용자 정의할 수 있습니다.
버튼을 키보드 탐색의 일부로 사용하려면 각 버튼에 `igxRowEditTabStopDirective` 가 있어야 합니다.

 ```typescript
 <ng-template igxRowEditActions let-endRowEdit>
	<button igxButton igxRowEditTabStop (click)="endRowEdit(false)">Cancel</button>
	<button igxButton igxRowEditTabStop (click)="endRowEdit(true)">Apply</button>
</ng-template>
 ```

## API

### igxGrid 입력

* [rowEditable]({environment:angularApiUrl}/classes/igxgridcomponent.html#roweditable)

### igxGrid 출력

* [onRowEditEnter]({environment:angularApiUrl}/classes/igxgridcomponent.html#onroweditenter)
* [onRowEdit]({environment:angularApiUrl}/classes/igxgridcomponent.html#onrowedit)
* [onRowEditCancel]({environment:angularApiUrl}/classes/igxgridcomponent.html#onroweditcancel)

### igxGrid 메소드

* [endEdit]({environment:angularApiUrl}/classes/igxgridcomponent.html#endedit)


### 추가 리소스
<div class="divider--half"></div>

* [그리드 개요](grid.md)
* [그리드 편집](grid_editing.md)
* [그리드 트랜잭션](grid_transactions.md)
