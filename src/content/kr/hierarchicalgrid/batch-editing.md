---
title: Angular HierarchicalGrid Grid Batch Editing | Angular CRUD | Ignite UI for Angular | Infragistics
_description: Perform data manipulation without affecting the underlying data with Grid Batch Editing and with Angular CRUD using Material UI table by Ignite UI for Angular
_keywords: angular crud, ignite ui for angular, infragistics
---


### Hierarchical Grid Batch Editing and Transactions


[`TransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) 는 컴포넌트가 기본 데이터에 영향을 주지 않고 변경을 축적하는데 사용할 수 있는 삽입 가능한 미들웨어입니다. The provider exposes API for Angular CRUD and data manipulation (undo and redo), also it can discard or commit all of the changes with a grid batch editing capabilities.

[`TransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) 는 셀 편집과 행 편집 모두를 실행합니다. 행이 편집 모드를 종료한 경우 행 트랜잭션이 작성되는 동안 셀이 편집 모드를 종료하면 셀 편집 트랜잭션이 추가됩니다. 그러나, 두 경우 모두 그리드 편집 상태는 모든 업데이트, 추가 및 삭제된 행 및 마지막 상태로 구성됩니다. 이것들은 나중에 검사, 조작, 즉시 제출될 수 있습니다. 변경은 편집 모드에 따라 개별 셀 또는 행별로 수집되고 데이터 행/레코드별로 축적됩니다.



[`TransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html)를 [`IgxHierarchicalGridComponent`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html)와 함께 사용하기 위해 각 아일랜드에 대해 별도의 트랜잭션 로그를 축적시키려면 대신 서비스 공급자를 제공해야 합니다. 하나는 내보내기 되어 [`IgxHierarchicalTransactionServiceFactory`]({environment:angularApiUrl}/index.html#igxhierarchicaltransactionservicefactory)로 사용할 수 있습니다.


#### 데모





<code-view style="height:680px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-batch-editing/" >
</code-view>

<div class="divider--half"></div>


> [!NOTE]
> 트랜잭션 상태는 업데이트, 추가 및 삭제된 행과 마지막 상태로 구성됩니다.

### 사용 방법

시작하려면 **app.module.ts** 파일에서 `IgxHierarchicalGridModule`을 가져옵니다:

```typescript
// app.module.ts

...
import { IgxHierarchicalGridModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxHierarchicalGridModule],
    ...
})
export class AppModule {}
```

그런 다음 igxTransactionService를 Hierarchical Grid 또는 상위 컴포넌트의 일부 공급자로 정의해야 합니다.




```typescript
import { Component } from "@angular/core";
import { IgxHierarchicalTransactionServiceFactory } from "igniteui-angular";
@Component({
    providers: [ IgxHierarchicalTransactionServiceFactory ],
    selector: "app-hierarchical-grid-with-transactions",
    template: "<ng-content></ng-content>"
})
export class HierarchicalGridWithTransactionsComponent { }
```

> [!NOTE]
> `IgxGridTransaction` 은 그리드에 의해 정의된 주입 토큰입니다.

그런 다음 바인딩된 데이터 소스 및 [`rowEditable`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#roweditable)이 true로 설정되고 바인딩된 Hierarchical Grid를 정의합니다:




```html
<app-hierarchical-grid-with-transactions>
    <igx-hierarchical-grid #parentGridProducts [data]="data" [primaryKey]="'ProductID'" width="100%" height="500px"
        [rowEditable]="true">
        <igx-row-island #rowIslandShipments [key]="'Shipments'" [primaryKey]="'ShipmentID'" [rowEditable]="true">
        </igx-row-island>
    </igx--hierarchical-grid>
</app-hierarchical-grid-with-transactions>
...
<button igxButton [disabled]="!productsUndoEnabled" (click)="productsUndo()">Undo Products</button>
<button igxButton [disabled]="!productsRedoEnabled" (click)="productsRedo()">Redo Products</button>
<button igxButton [disabled]="!shipmentsUndoEnabled" (click)="shipmentsUndo()">Undo Shipments</button>
<button igxButton [disabled]="!shipmentsRedoEnabled" (click)="shipmentsRedo()">Redo Shipments</button>
...
<button igxButton (click)="productsCommit()">Commit Products</button>
<button igxButton (click)="productsDiscard()">Discard Products</button>
<button igxButton (click)="shipmentsCommit()">Commit Shipments</button>
<button igxButton (click)="shipmentsDiscard()">Discard Shipments</button>
...

```





다음 코드는 [`transactions`]({environment:angularApiUrl}/classes/igxtransactionservice.html#) API의 취소, 재실행, 확정에 대한 사용 방법을 보여줍니다.

```typescript
...
export class HierarchicalGridBatchEditingSampleComponent {
    @ViewChild("parentGridProducts", { read: IgxHierarchicalGridComponent }) public parentGridProducts: IgxHierarchicalGridComponent;
    @ViewChild("rowIslandShipments", { read: IgxRowIslandComponent }) public rowIslandShipments: IgxRowIslandComponent;
    ...
    public get productsUndoEnabled(): boolean {
        return this.parentGridProducts.transactions.canUndo;
    }
    public get productsRedoEnabled(): boolean {
        return this.parentGridProducts.transactions.canRedo;
    }
    public get shipmentsUndoEnabled(): boolean {
        return this.rowIslandShipments.transactions.canUndo;
    }
    public get shipmentsRedoEnabled(): boolean {
        return this.rowIslandShipments.transactions.canRedo;
    }
    public productsUndo() {
        this.parentGridProducts.transactions.undo();
    }
    public productsRedo() {
        this.parentGridProducts.transactions.redo();
    }
    public shipmentsUndo() {
        this.rowIslandShipments.transactions.undo();
    }
    public shipmentsRedo() {
        this.rowIslandShipments.transactions.redo();
    }
    public productsCommit() {
        this.parentGridProducts.transactions.commit(this.data);
    }
    public productsDiscard() {
        this.parentGridProducts.transactions.clear();
    }
     public shipmentsCommit() {
        this.rowIslandShipments.transactions.commit(this.data);
    }
    public shipmentsDiscard() {
        this.rowIslandShipments.transactions.clear();
    }
}
```


> [!NOTE]
> [`rowEditable`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#roweditable) 속성을 비활성화하면 Hierarchical Grid가 수정되고 셀 변경 시 트랜잭션을 생성하며, UI에서 행 편집 오버레이는 공개되지 않습니다.

### API 참조




* [igxHierarchicalTransactionServiceFactory]({environment:angularApiUrl}/index.html#igxhierarchicaltransactionservicefactory)


### 추가 리소스

* [Build CRUD operations with igxGrid](../general/how-to/how-to-perform-crud.md)
* [Hierarchical Grid 개요](hierarchical-grid.md)
* [Hierarchical Grid 편집](editing.md)
* [Hierarchical Grid 행 편집](row-editing.md)
* [Hierarchical Grid Row Adding](row-adding.md)

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **포럼**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
