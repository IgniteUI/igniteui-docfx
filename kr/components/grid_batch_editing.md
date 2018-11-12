---
title: 그리드 트랜잭션 - 네이티브 Angular| Ignite UI for Angular
_description: TransactionService is an injectable middleware that a component can use to accumulate changes without affecting the underlying data. The provider exposes API to access, manipulate changes (undo and redo) and discard or commit all to the data.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Component, Angular Grid, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, Cell Editing, Row Editing, Batch Updating, Batch Editing, Transactions
_language: kr
---

## 그리드 트랜잭션

[`TransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) 는 컴포넌트가 기본 데이터에 영향을 주지 않고 변경을 축적하는데 사용할 수 있는 삽입 가능한 미들웨어입니다. 공급자가 API를 노출하여 액세스, 변경 처리(취소 및 재실행) 및 모든 데이터를 삭제 또는 확정합니다.

[`TransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) 는 셀 편집과 행 편집 모두를 실행합니다. 행이 편집 모드를 종료한 경우 행 트랜잭션이 작성되는 동안 셀이 편집 모드를 종료하면 셀 편집 트랜잭션이 추가됩니다. 그러나, 두 경우 모두 그리드 편집 상태는 모든 업데이트, 추가 및 삭제된 행 및 마지막 상태로 구성됩니다. 이것들은 나중에 검사, 조작, 즉시 제출될 수 있습니다. 변경은 편집 모드에 따라 개별 셀 또는 행별로 수집되고 데이터 행/레코드별로 축적됩니다.

### 데모

다음 샘플은 그리드에 트랜잭션이 공급자로 있고 행 편집이 활성화된 경우를 보여줍니다. 이렇게 하면 전체 행 편집이 확인된 후 트랜잭션이 추가됩니다.

<div class="sample-container loading" style="height:650px">
    <iframe id="grid-batch-editing-sample-iframe" src='{environment:demosBaseUrl}/grid-batch-editing' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-batch-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

> [!NOTE]
> 트랜잭션 상태는 업데이트, 추가 및 삭제된 행과 마지막 상태로 구성됩니다.

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

그런 다음 igxTransactionService를 그리드의 공급자로 정의해야 합니다:

```typescript
import { Component } from "@angular/core";
import { IgxGridTransaction, IgxTransactionService } from "igniteui-angular";

@Component({
    providers: [{ provide: IgxGridTransaction, useClass: IgxTransactionService }],
    selector: "app-grid-with-transactions",
    template: "<ng-content></ng-content>"
})
export class GridWithTransactionsComponent { }

```
> [!NOTE]
> `IgxGridTransaction` 은 그리드에 의해 정의된 주입 토큰입니다.

그런 다음 바인딩된 데이터 소스 및 [`rowEditable`]({environment:angularApiUrl}/classes/igxgridcomponent.html#roweditable)({environment:angularApiUrl}/classes/igxgridcomponent.html#roweditable)이 true로 설정된 그리드를 정의합니다:

```html
<app-grid-with-transactions>
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
</app-grid-with-transactions>
```

다음 코드는 [`transactions`]({environment:angularApiUrl}/classes/igxtransactionservice.html#) API의 취소, 재실행, 확정에 대한 사용 방법을 보여줍니다.

```typescript
...
export class GridBatchEditingSampleComponent {
    @ViewChild("gridRowEditTransaction", { read: IgxGridComponent }) public gridRowEditTransaction: IgxGridComponent;
    ...
    public get undoEnabled(): boolean {
        return this.gridRowEditTransaction.transactions.canUndo;
    }

    public get redoEnabled(): boolean {
        return this.gridRowEditTransaction.transactions.canRedo;
    }

    public undo() {
        this.gridRowEditTransaction.transactions.undo();
    }

    public redo() {
        this.gridRowEditTransaction.transactions.redo();
    }

    public commit() {
        this.gridRowEditTransaction.transactions.commit(this.data);
        this.toggle.close();
    }

    public discard() {
        this.gridRowEditTransaction.transactions.clear();
    }
}

```
> [!NOTE]
> [`rowEditable`]({environment:angularApiUrl}/classes/igxgridcomponent.html#roweditable) 속성을 비활성화하면 그리드가 수정되어 셀 변경 시 트랜잭션이 작성됩니다.

## API

* [`transactions`]({environment:angularApiUrl}/classes/igxgridcomponent.html#transactions)

* [`igxTransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html)


### 추가 리소스

* [그리드 개요](grid.md)
* [그리드 편집](grid_editing.md)
* [그리드 행 편집](grid_row_editing.md)
