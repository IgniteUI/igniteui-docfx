@@if (igxName === 'IgxGrid') {
---
title: 그리드 행 편집 - 네이티브 Angular | Ignite UI for Angular
_description: Row editing - allows modification of several cells in the row, before submitting, at once, all those changes to the grid's data source. Leverages the pending changes functionality of the new transaction provider.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Component, Angular Grid, Angular Table, Angular Data Grid component, Angular Data Table component, Angular Data Grid control, Angular Data Table control, Angular Grid component, Angular Table component, Angular Grid control, Angular Table control, Angular High Performance Grid, Angular High Performance Data Table, Data Grid Row Editing, Data Table Row Editing
_language: kr
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: 트리 그리드 행 편집 - 네이티브 Angular | Ignite UI for Angular
_description: Row editing - allows modification of several cells in the row, before submitting, at once, all those changes to the grid's data source. Leverages the pending changes functionality of the new transaction provider.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Component, Angular Tree Grid, Angular Tree Table, Angular Tree Grid component, Angular Tree Table component, Angular Tree Grid control, Angular Tree Table control, Angular Tree Grid component, Angular Tree Table component, Angular Tree Grid control, Angular Tree Table control, Angular High Performance Tree Grid, Angular High Performance Tree Table, Tree Grid Row Editing, Tree Table Row Editing
_language: kr
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: 계층 그리드 행 편집 - 네이티브 Angular | Ignite UI for Angular
_description: Row editing - allows modification of several cells in the row, before submitting, at once, all those changes to the grid's data source. Leverages the pending changes functionality of the new transaction provider.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Component, Angular Hierarchical Grid, Angular Hierarchical Table, Angular Hierarchical Grid component, Angular Hierarchical Table component, Angular Hierarchical Grid control, Angular Hierarchical Table control, Angular High Performance Hierarchical Grid, Angular High Performance Hierarchical Table, Hierarchical Grid Row Editing, Hierarchical Table Row Editing
_language: kr
---
}

### @@igComponent 행 편집

행 편집은 @@igComponent의 데이터 소스에 대한 모든 변경 사항을 제출하기 전에 즉시 행의 여러 셀을 수정할 수 있습니다. 새로운 트랜잭션 공급자의 보류 중인 변경 기능을 활용합니다.


#### 데모

다음 샘플에서는 @@igComponent에서 행 편집을 활성화하는 방법을 보여줍니다. 셀 값을 변경한 다음 동일한 행의 다른 셀을 클릭하거나 탐색하면 확인될 때까지 행 값이 업데이트되지 않으며, 종료 버튼을 사용하거나 취소 버튼을 사용하여 취소합니다.

@@if (igxName === 'IgxGrid') {

<code-view style="height:550px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-row-editing" >
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:590px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-row-edit" >
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
   
<code-view style="height:510px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-row-editing" >
</code-view>

<div class="divider--half"></div>
}

> [!NOTE]
> 행이 편집 모드에 있는 경우, 다른 행의 셀을 클릭하면 종료 버튼을 누른 것처럼 작동하며, 이전 행의 모든 변경 사항을 제출합니다. 포커스를 받은 새로운 셀을 편집할 수 있는 경우에는 새로운 행도 편집 모드로 전환되며, 셀을 편집 할 수 없는 경우에는 이전 행만 편집 모드를 종료합니다.

### 사용 방법

시작하려면 **app.module.ts** 파일에서 `@@igxNameModule`을 가져옵니다:

```typescript
// app.module.ts

...
import { @@igxNameModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., @@igxNameModule],
    ...
})
export class AppModule {}
```

그런 다음 바인딩된 데이터 소스 및 [`rowEditable`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#roweditable) 이 true로 설정된 @@igComponent를 정의합니다:
@@if (igxName ==='IgxGrid') {
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
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid #treeGrid [data]="data" [primaryKey]="EmployeID" [foreignKey]="PID" width ="100%"
               height ="500px" [rowEditable]="true" [rowSelectable]="true" [columnHiding]="true">
    <igx-column *ngFor="let c of columns"
        [editable] ="c.editable"
        [field]="c.field"
        [dataType]="c.dataType"
        [header]="c.label"
        [movable]="c.movable"
        [resizable]="c.resizable"
        [sortable]="c.sortable"
        [filterable]="c.filterable">
    </igx-column>
</igx-tree-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
        <igx-hierarchical-grid #hierarchicalGrid class="hgrid" [data]="localdata" [autoGenerate]="false"
        [height]="'600px'" [width]="'100%'">
            <igx-column field="Artist" [editable]="true" [dataType]="'string'"></igx-column>
            <igx-column field="HasGrammyAward" [editable]="true" [dataType]="'boolean'">
            </igx-column>
            <igx-column field="Debut" [editable]="true" [dataType]="'number'"></igx-column>
            <igx-column field="GrammyNominations" [editable]="true" [dataType]="'number'" [hasSummary]="true"></igx-column>
            <igx-column field="GrammyAwards" [editable]="true" [dataType]="'number'"
            [hasSummary]="true"></igx-column>
            <igx-column width="10%">
                <ng-template igxCell let-cell="cell">
                    <button igxButton="icon" (click)="removeRow(cell.cellID.rowIndex)">
                        <igx-icon>delete</igx-icon>
                    </button>
                </ng-template>
            </igx-column>

        <igx-row-island [key]="'Albums'" #layout1 [autoGenerate]="false">
            <igx-column field="Album" [editable]="true" [dataType]="'string'"></igx-column>
            <igx-column field="Launch Date" [editable]="true" [dataType]="'date'"></igx-column>
            <igx-column field="Billboard Review" [editable]="true" [dataType]="'number'"></igx-column>
            <igx-column field="US Billboard 200" [editable]="true" [dataType]="'number'"></igx-column>
            <igx-row-island [key]="'Songs'" [autoGenerate]="false">
                    <igx-column field="No."></igx-column>
                    <igx-column field="Title"></igx-column>
                    <igx-column field="Released"></igx-column>
                    <igx-column field="Genre"></igx-column>
            </igx-row-island>
        </igx-row-island>
    </igx-hierarchical-grid>
```
}

> [!NOTE]
> 기본 키 설정은 행 편집 조작에 필수입니다.

> [!NOTE]
> 개별 열에 대해 편집할 필요가 없습니다. @@igComponent에서 [`rowEditable`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#roweditable) 속성을 사용하면 기본 필드를 제외한 모든 `field` 속성이 편집 가능함을 의미합니다. 특정 열에 대한 편집을 비활성화하려면 [`editable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#editable) 열의 입력을 false로 설정합니다.

@@if (igxName === 'IgxGrid') {
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
}

@@if (igxName === 'IgxTreeGrid') {
```typescript
import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxTreeGridComponent } from "igniteui-angular";
import { FLAT_DATA } from "./data";

@Component({
   providers: [],
    selector: "app-tree-grid-row-editing-sample",
    styleUrls: ["tree-grid-row-editing-sample.component.scss"],
    templateUrl: "tree-grid-row-editing-sample.component.html"
})
export class TreeGridRowEditSampleComponent implements OnInit {

    public data: any[];
    public columns: any[];

    @ViewChild("treeGrid") public treeGrid: IgxTreeGridComponent;
    public ngOnInit(): void {
        this.data = FLAT_DATA;

        this.columns = [
            { field: "FirstName", label: "First Name", resizable: true, movable: true, sortable: true, filterable: true, editable: true, dataType: "string" },
            { field: "LastName", label: "Last Name", resizable: false, movable: false, sortable: false, filterable: false, editable: true, dataType: "string" },
            { field: "Title", label: "Title", resizable: true, movable: true, sortable: true, filterable: true, editable: true, dataType: "string" },
            { field: "HireDate", label: "Hire Date", resizable: true, movable: true, sortable: true, filterable: true, editable: true, dataType: "date" }
        ];
    }
}
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```typescript
import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxRowIslandComponent, IgxHierarchicalGridComponent } from "igniteui-angular";
import { SINGERS } from './data';

@Component({
    selector: "hierarchical-grid-row-editing",
    styleUrls: ["./hierarchical-grid-row-editing.component.scss"],
    templateUrl: "hierarchical-grid-row-editing.component.html"
})

export class HGridRowEditingSampleComponent implements OnInit {
    public localdata;

    @ViewChild('layout1')
    layout1: IgxRowIslandComponent;

    @ViewChild('hierarchicalGrid')
    hierarchicalGrid: IgxHierarchicalGridComponent;

    constructor() {
        this.localdata = SINGERS;
    }
}
```
}

> [!NOTE]
> @@igComponent는 행 상태가 제출되거나 취소될 때까지 보류 중인 셀 변경을 보유한 공급자 [`IgxBaseTransactionService`]({environment:angularApiUrl}/classes/igxbasetransactionservice.html)를 내부적으로 사용합니다.

### 포지셔닝

- 오버레이의 기본 위치는 편집 모드의 행 아래에 위치합니다.

- 행 아래에 공간이 없으면 행 위에 오버레이가 표시됩니다.

- 상단 또는 하단에 표시된 후 오버레이는 오버레이가 닫히기 전까지 이 위치를 유지합니다.

### 비헤이비어

- 행이 편집 모드에 있는 경우, 동일한 행의 셀을 클릭하면 편집이 계속됩니다.

- “종료” 버튼을 클릭하면 행 편집이 종료되고 사용 가능한 경우 데이터 소스 또는 트랜잭션에 변경이 제출됩니다. 또한 행은 편집 모드를 종료합니다.

- “취소” 버튼을 클릭하면 행의 모든 현재 변경이 되돌려지고 행은 편집 모드를 종료합니다.

- 행이 편집 모드에 있는 경우, 다른 행의 셀을 클릭하면 현재 행 편집이 종료되고 새로운 행 변경이 제출됩니다(동일한 비헤이비어는 “종료” 버튼을 클릭). 포커스를 받은 새로운 셀을 편집할 수 있는 경우에는 새로운 행도 편집 모드로 전환되며, 셀을 편집 할 수 없는 경우에는 이전 행만 편집 모드를 종료합니다.

- 행이 편집 모드이고 행이 표시된 영역 밖으로 이동하도록 @@igComponent를 스크롤한 경우에도 행은 여전히 편집 모드에 있습니다. @@igComponent를 스크롤하여 행이 다시 표시되도록 하면 행은 여전히 편집 모드에 있습니다. @@igComponent 이외를 클릭하면 셀도 편집 모드로 유지됩니다.

- *정렬*, *필터링*, *검색* 및 *숨기기* 조작을 실행하면 행의 모든 현재 변경 사항이 되돌아가고 행은 편집 모드를 종료합니다.

- *페이징*, *크기 조정*, *핀 고정* 및 *이동* 조작을 실행하면 편집 모드를 종료하고 최신 값을 제출합니다.

- 수정된 각 셀은 행 편집이 종료될 때까지 편집된 스타일을 가집니다. @@igComponent가 트랜잭션과 함께 제공되지 않는 경우의 비헤이비어입니다. 트랜잭션을 사용할 수 있는 경우, 모든 변경이 확정될 때까지 셀 편집 스타일이 적용됩니다.


### 키보드 탐색

- `Enter`와 `F2`로 행 편집 모드로 들어갑니다

- `Esc`로 행 편집 모드를 종료하고 행이 편집 모드에 있는 동안 만든 셀 변경은 제출하지 않습니다.

- `Tab` 편집 가능한 셀에서 행의 다음 셀로, 오른쪽에서 가장 편집 가능한 셀에서 CANCEL 및 DONE 버튼으로 포커스를 이동합니다. DONE 버튼으로부터의 탐색은 현재 편집된 행 안에서 가장 왼쪽에 있는 편집 가능한 셀로 이동합니다.


### 기능 통합

- 모든 데이터 변경 작업은 행 편집 작업을 종료하고 현재 행 변경을 제출합니다. 여기에는 정렬, 그룹화 및 필터링 기준 변경, 페이징 등의 작업이 포함됩니다.

- 행 편집이 종료되면 요약이 업데이트됩니다. 정렬, 필터링 등의 다른 기능의 경우에도 동일합니다.

@@if (igxName === 'IgxGrid') {
- 그룹화된 행을 확장하거나 축소해도 현재 행에 대한 편집은 종료되지 않습니다.
}

### 사용자 정의 행 편집 오버레이

#### 사용자 정의 텍스트

`igxRowEditTextDirective`를 사용하여 행 편집 오버레이의 텍스트를 사용자 정의할 수 있습니다.
`rowChangesCount` 속성이 노출되고 변경된 셀 수를 유지합니다.

```html
<ng-template igxRowEditText let-rowChangesCount>
	Changes: {{rowChangesCount}}
</ng-template>
 ```

#### 사용자 정의 버튼
`igxRowEditActionsDirective`를 사용하여 행 편집 오버레이 버튼을 사용자 정의할 수 있습니다.
버튼을 키보드 탐색의 일부로 사용하려면 각 버튼에 `igxRowEditTabStopDirective`가 있어야 합니다.

 ```html
 <ng-template igxRowEditActions let-endRowEdit>
	<button igxButton igxRowEditTabStop (click)="endRowEdit(false)">Cancel</button>
	<button igxButton igxRowEditTabStop (click)="endRowEdit(true)">Apply</button>
</ng-template>
 ```

### API 참조

* [rowEditable]({environment:angularApiUrl}/classes/@@igTypeDoc.html#roweditable)
* [onRowEditEnter]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onroweditenter)
* [onRowEdit]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onrowedit)
* [onRowEditCancel]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onroweditcancel)
* [endEdit]({environment:angularApiUrl}/classes/@@igTypeDoc.html#endedit)
* [field]({environment:angularApiUrl}/classes/igxcolumncomponent.html#field)
* [editable]({environment:angularApiUrl}/classes/igxcolumncomponent.html#editable)
* [primaryKey]({environment:angularApiUrl}/classes/@@igTypeDoc.html#primarykey)
* [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)

### 추가 리소스
<div class="divider--half"></div>

* [@@igComponent 개요](@@igMainTopic.md)
* [@@igComponent 편집](editing.md)
* [@@igComponent 트랜잭션](batch-editing.md)

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **포럼**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
