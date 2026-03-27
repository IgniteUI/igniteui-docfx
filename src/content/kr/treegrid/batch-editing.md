---
title: Angular Tree Grid Batch Editing | Angular CRUD | Ignite UI for Angular | Infragistics
_description: Perform data manipulation without affecting the underlying data with Grid Batch Editing and with Angular CRUD using Material UI table by Ignite UI for Angular
_keywords: angular crud, ignite ui for angular, infragistics
---



### Tree Grid Batch Editing and Transactions



[`HierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html)는 컴포넌트가 기본 데이터에 영향을 주지 않고 변경을 축적하는데 사용할 수 있는 삽입 가능한 미들웨어입니다. The provider exposes API for Angular CRUD and data manipulation (undo and redo), also it can discard or commit all of the changes with a grid batch editing capabilities.

[`HierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html)는 셀 편집과 행 편집 모두를 실행합니다. 행이 편집 모드를 종료한 경우 행 트랜잭션이 작성되는 동안 셀이 편집 모드를 종료하면 셀 편집 트랜잭션이 추가됩니다. 그러나, 두 경우 모두 그리드 편집 상태는 모든 업데이트, 추가 및 삭제된 행 및 마지막 상태로 구성됩니다. 이것들은 나중에 검사, 조작, 즉시 제출될 수 있습니다. 변경 사항은 사용 중인 편집 모드에 따라 개별 셀 또는 행별로 수집되고 데이터 행/레코드별로 축적됩니다.

일괄 편집을 사용하면 여러 레코드를 **추가/업데이트/삭제**하고, 편집 변경 사항을 모두 한 번에 수동으로 확정할 수 있습니다. 변경 사항이 확정될 때까지 최종 사용자가 예를 들어 수정되지 않은 레코드와 업데이트 및 삭제 된 레코드를 구별할 수 있도록 편집된 각 레코드에는 시각적 표현이 적용됩니다. 또한, 확정하기 전에 변경 내용을 관리하는 데 사용할 수 있는 **실행 취소/다시 실행** 기능을 제공합니다.

일괄 편집 기능을 사용하려면 "igniteui-angular"에서 [`HierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html)를 불러오기 해야 합니다. Again Transaction은 적용된 변경 사항을 트랜잭션 로그로 축적하고 동시에 수정된 각 행과 마지막 상태에 대한 상태를 보유하는 공급자입니다.



#### 데모



다음 샘플은 트랜잭션을 통해 일괄 편집을 공급자로 설정하고 사용하는 방법을 보여주며 행 편집을 활성화합니다. 후자는 전체 행 편집이 확인된 후 트랜잭션이 추가됩니다. 이 샘플은 플랫 데이터 소스를 사용합니다.


<code-view style="height:600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-batchediting/" >
</code-view>

<div class="divider--half"></div>



> [!NOTE]
> 트랜잭션 상태는 업데이트, 추가 및 삭제된 행과 마지막 상태로 구성됩니다.

### 사용 방법

시작하려면 **app.module.ts** 파일에서 `IgxTreeGridModule`을 가져옵니다:

```typescript
// app.module.ts

...
import { IgxTreeGridModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxTreeGridModule],
    ...
})
export class AppModule {}
```

그런 다음 igxTransactionService를 Tree Grid 또는 상위 컴포넌트의 일부 공급자로 정의해야 합니다.



```typescript
import { Component, ViewChild } from "@angular/core";
import { IgxGridComponent, IgxGridTransaction, IgxToggleDirective,
    IgxTransactionService, IgxTreeGridComponent } from "igniteui-angular";

@Component({
    providers: [{ provide: IgxGridTransaction, useClass: IgxHierarchicalTransactionService }],
    selector: "app-tree-grid-batch-editing-sample",
    styleUrls: ["tree-grid-batch-editing-sample.component.scss"],
    templateUrl: "tree-grid-batch-editing-sample.component.html"
})
export class TreeGridBatchEditingSampleComponent { }

```


> [!NOTE]
> `IgxGridTransaction` 은 그리드에 의해 정의된 주입 토큰입니다.

그런 다음 바인딩된 데이터 소스 및 [`rowEditable`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#roweditable)이 true로 설정되고 바인딩된 Tree Grid를 정의합니다:



```html
<igx-tree-grid #treeGrid [data]="data" primaryKey="employeeID" foreignKey="PID" width ="100%" height ="500px" rowEditable=true rowSelectable=true columnHiding=true>
    ...
</igx-tree-grid>
...
    <button igxButton (click)="addRow()">Add Root Level Row</button>
    <button igxButton [disabled]="!undoEnabled" (click)="undo()">Undo</button>
    <button igxButton [disabled]="!redoEnabled" (click)="redo()">Redo</button>
    <button igxButton [disabled]="!hasTransactions" (click)="openCommitDialog()">Commit</button>
...
```





다음 코드는 [`HierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html) API의 취소, 재실행, 확정에 대한 사용 방법을 보여줍니다.
```typescript
...
export class TreeGridBatchEditingSampleComponent {
    @ViewChild("treeGrid", { read: IgxTreeGridComponent }) public treeGrid: IgxTreeGridComponent;
    ...
    public addRow() {
        this.treeGrid.addRow({
            PID: -1,
            Title: "Junior Sales Representative",
            employeeID: this.data.length + this.nextRow++,
            firstName: "John",
            lastName: "Doe"
        });
    }

    public addChildRow(id) {
        this.treeGrid.addRow(
            {
                Title: "Sales Manager",
                employeeID: this.data.length + this.nextRow++,
                firstName: `Added `,
                lastName: "Added"
            },
            id);
    }

    public deleteRow(id) {
        this.treeGrid.deleteRow(id);
    }

    public undo() {
        this.treeGrid.transactions.undo();
    }

    public redo() {
        this.treeGrid.transactions.redo();
    }

    public commit() {
        this.treeGrid.transactions.commit(this.data);
        this.toggle.close();
    }

    public cancel() {
        this.dialog.close();
    }

    public discard() {
        this.treeGrid.transactions.clear();
        this.dialog.close();
    }

    public get undoEnabled(): boolean {
        return this.treeGrid.transactions.canUndo;
    }

    public get redoEnabled(): boolean {
       return this.treeGrid.transactions.canRedo;
    }

    public openCommitDialog() {
        this.dialog.open();
        this.dialogGrid.reflow();
    }

    public get hasTransactions(): boolean {
        return this.treeGrid.transactions.getAggregatedChanges(false).length > 0;
    }
}
```



> [!NOTE]
> [`rowEditable`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#roweditable) 속성을 비활성화하면 Tree Grid가 수정되고 셀 변경 시 트랜잭션을 생성하며, UI에서 행 편집 오버레이는 공개되지 않습니다.

### API 참조



* [HierarchicalTransactionService]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html) 
* [rowEditable]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#roweditable)
* [IgxTreeGridComponent]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)



### 추가 리소스

* [Build CRUD operations with igxGrid](../general/how-to/how-to-perform-crud.md)
* [Tree Grid 개요](tree-grid.md)
* [Tree Grid 편집](editing.md)
* [Tree Grid 행 편집](row-editing.md)
* [Tree Grid Row Adding](row-adding.md)

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **포럼**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
