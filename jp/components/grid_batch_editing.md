---
title: Grid �g�����U�N�V���� - �l�C�e�B�u Angular | Ignite UI for Angular
_description: TransactionService �̓~�h���E�F�A�v���o�C�_�[�́A�f�[�^�̃A�N�Z�X�A�ύX�̑��� (undo �� redo)�A���ׂĔj���܂��͊m��̂��߂� API ����J���܂��B 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Component, Angular Grid, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, Cell Editing, Row Editing, Batch Updating, Batch Editing, Transactions
_language: ja
---

## Grid �g�����U�N�V����

[`TransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) is an injectable middleware that a component can use to accumulate changes without affecting the underlying data. The provider exposes API to access, manipulate changes (undo and redo) and discard or commit all to the data.

[`TransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) �̓Z���ҏW�ƍs�ҏW�̗����Ɠ��삵�܂��B�s�ҏW�̏I�����ɍs�g�����U�N�V�������ǉ����ꂽ�ꍇ�A�Z���ҏW�̃g�����U�N�V�����̓Z�����ҏW���[�h��I�������Ƃ��ɒǉ�����܂��B�O���b�h�ҏW�̃X�e�[�g�́A���ׂĂ̍s��ҏW�ς݁A�ǉ��ς݁A�폜�ς݁A�����čŌ�̃X�e�[�g�ō\������܂��B�����͌�ŃC���X�y�N�g�A����A�T�u�~�b�g���x�ɍs���܂��B�X�̃Z���܂��͍s�̕ύX��W�߂āA�ҏW���[�h�Ɋ�Â��ăf�[�^�s/���R�[�h���Ƃɒ~�ς��܂��B

### �f��

�ȉ��̃T���v���́A�O���b�h�Ƀv���o�C�_�[�̃g�����U�N�V����������A�s�ҏW���L������Ă��܂��B�s�ҏW�S�̂�m���Ƀg�����U�N�V�������ǉ������悤�ɂ��܂��B

<div class="sample-container loading" style="height:650px">
    <iframe id="grid-transaction-sample-iframe" src='{environment:demosBaseUrl}/grid-transaction' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-transaction-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

> [!NOTE]
> �g�����U�N�V���� �X�e�[�g�́A���ׂĂ̍X�V�A�ǉ��A�폜���ꂽ�s�A�����čŌ�̃X�e�[�g�ō\������܂��B

## �g�p���@
**app.module.ts** �t�@�C���� [`IgxGridModule`]({environment:angularApiUrl}/classes/igxgridmodule.html) ��C���|�[�g���܂��B

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

�O���b�h�� igxTransactionService ��`����K�v������܂��B

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

��: `IgxGridTransaction` �̓O���b�h�Œ�`���ꂽ�C���W�F�N�V���� �g�[�N���ł��B

�f�[�^�\�[�X�Ƀo�C���h����O���b�h���`��� [`rowEditable`]({environment:angularApiUrl}/classes/igxgridcomponent.html#roweditable) �� true �ɐݒ肵�܂��B

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

�ȉ��̃R�[�h��́A[`transactions`]({environment:angularApiUrl}/classes/igxtransactionservice.html) API (undo, redo, commit) �̎g�p���@����܂��B

```typescript
import { Component, ViewChild } from "@angular/core";
import { data } from "./data";

import { IgxGridComponent, IgxToggleDirective, Transaction } from "igniteui-angular";

@Component({
    selector: "app-grid-row-edit",
    styleUrls: [`grid-transaction-sample.component.css`],
    templateUrl: "grid-transaction-sample.component.html"
})
export class GridTransactionSampleComponent {
    @ViewChild("gridRowEditTransaction", { read: IgxGridComponent }) public gridRowEditTransaction: IgxGridComponent;
    @ViewChild(IgxToggleDirective) public toggle: IgxToggleDirective;

    public currentActiveGrid: { id: string, transactions: any[] } = { id: "", transactions: [] };

    public data: any[];
    private addProductId: number;

    constructor() {
        this.data = data;
        this.addProductId = this.data.length + 1;
    }

    public addRow(gridID) {
        const currentGrid: IgxGridComponent = this.gridRowEditTransaction;
        currentGrid.addRow({
            CategoryID: this.getRandomInt(1, 10),
            Discontinued: this.getRandomInt(1, 10) % 2 === 0,
            OrderDate: new Date(this.getRandomInt(2000, 2050), this.getRandomInt(0, 11), this.getRandomInt(1, 25))
            .toISOString().slice(0, 10),
            ProductID: this.addProductId++,
            ProductName: "Product with index " + this.getRandomInt(0, 20),
            QuantityPerUnit: (this.getRandomInt(1, 10) * 10).toString() + " pcs.",
            ReorderLevel: this.getRandomInt(10, 20),
            SupplierID: this.getRandomInt(1, 20),
            UnitPrice: this.getRandomInt(10, 1000),
            UnitsInStock: this.getRandomInt(1, 100),
            UnitsOnOrder: this.getRandomInt(1, 20)
        });
        this.refresh();
    }

    public deleteRow(event, gridID, rowID) {
        this.gridRowEditTransaction.deleteRow(rowID);
    }

    public undo(gridID) {
        this.gridRowEditTransaction.transactions.undo();
        this.refresh();
    }

    public redo(gridID) {
        this.gridRowEditTransaction.transactions.redo();
        this.refresh();
    }

    public openCommitDialog(gridID) {
        this.toggle.open();
    }
    public commit() {
        this.gridRowEditTransaction.transactions.commit(this.data);
        this.toggle.close();
    }
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    private refresh(): void {
        const grid = this.gridRowEditTransaction;
        (grid as any)._pipeTrigger++;
        (grid as any).cdr.markForCheck();
    }
}

```
> [!NOTE]
> [`rowEditable`]({environment:angularApiUrl}/classes/igxgridcomponent.html#roweditable) �v���p�e�B�𖳌��ɂ���ƃO���b�h��ύX���ăZ���ύX�Ńg�����U�N�V������쐬���܂��B

## API

* [`igxTransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html)

### ���\�b�h


* [`aggregatedState`]({environment:angularApiUrl}/classes/igxtransactionservice.html#aggregatedstate)
* [`getAggregatedValue`]({environment:angularApiUrl}/classes/igxtransactionservice.html#getaggregatedvalue)
* [`getState`]({environment:angularApiUrl}/classes/igxtransactionservice.html#getstate)
* [`add`]({environment:angularApiUrl}/classes/igxtransactionservice.html#add)
* [`getTransactionLog`]({environment:angularApiUrl}/classes/igxtransactionservice.html#gettransactionlog)
* [`clear`]({environment:angularApiUrl}/classes/igxtransactionservice.html#clear)
* [`commit`]({environment:angularApiUrl}/classes/igxtransactionservice.html#commit)
* [`undo`]({environment:angularApiUrl}/classes/igxtransactionservice.html#undo)
* [`redo`]({environment:angularApiUrl}/classes/igxtransactionservice.html#redo)

### ���̑��̃��\�[�X

* [Grid �̊T�v](grid.md)
* [Grid �ҏW](grid_editing.md)
* [�O���b�h�̍s�ҏW�e���v���[�g](grid_row_editing.md)