---
title: Tree Grid �ꊇ�ҏW - �l�C�e�B�u Angular | Ignite UI for Angular
_description:  TransactionService �́A��ɂȂ�f�[�^�ɉe�������ɕύX��~�ς��邽�߂ɃR���|�[�l���g���g�p���钍���\�ȃ~�h���E�F�A�ł��B�v���o�C�_�[�́A�f�[�^�̃A�N�Z�X�A�ύX�̑��� (undo �� redo)�A���ׂĔj���܂��͊m��̂��߂� API ����J���܂��B
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Tree Grid component, Angular Tree Grid control, Angular Tree Grid component, Angular High Performance Tree Grid, Tree Grid 
---

## Tree Grid �ꊇ�ҏW 

[`TransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) �́A��ɂȂ�f�[�^�ɉe�������ɕύX��~�ς��邽�߂ɃR���|�[�l���g���g�p���钍���\�ȃ~�h���E�F�A�ł��B �v���o�C�_�[�́A�f�[�^�̃A�N�Z�X�A�ύX�̑��� (undo �� redo)�A���ׂĔj���܂��͊m��̂��߂� API ����J���܂��B

[`TransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) �̓Z���ҏW�ƍs�ҏW�̗����Ɠ��삵�܂��B�s�ҏW�̏I�����ɍs�g�����U�N�V�������ǉ����ꂽ�ꍇ�A�Z���ҏW�̃g�����U�N�V�����̓Z�����ҏW���[�h��I�������Ƃ��ɒǉ�����܂��B�O���b�h�ҏW�̃X�e�[�g�́A���ׂĂ̍s��ҏW�ς݁A�ǉ��ς݁A�폜�ς݁A�����čŌ�̃X�e�[�g�ō\������܂��B�����͌�ŃC���X�y�N�g�A����A�T�u�~�b�g���x�ɍs���܂��B�X�̃Z���܂��͍s�̕ύX��W�߂āA�ҏW���[�h�Ɋ�Â��ăf�[�^�s/���R�[�h���Ƃɒ~�ς��܂��B

�ꊇ�ҏW�ł́A�������R�[�h��**�ǉ�/�X�V/�폜**���Ă��ׂĂ̕ύX���x�ɃR�~�b�g���邱�Ƃ��\�ł��B�ύX���R�~�b�g�����O�͊e�ҏW�ς݂̃��R�[�h�̃r�W���A���\��������A�G���h���[�U�[�͍X�V�ς݂ƍ폜�ς݂̍��ڂ�m�F�ł��܂��B�X�ɃR�~�b�g�O�̕ύX��Ǘ�����**��ɖ߂�/��蒼��**�@�\����J���܂��B

�ꊇ�ҏW�@�\��g�p����ɂ� igniteui-angular ���� [`TransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) ��C���|�[�g����K�v������܂��B�g�����U�N�V�����́A�K�p���ꂽ�ύX��g�����U�N�V���� ���O�Ƃ��Ē~�ς��A�e�ύX�ς݂̍s�Ƃ��̏�Ԃ�ێ�����v���o�C�_�[�ł��B

### �f��

�ȉ��́A�g�����U�N�V�����Ńv���o�C�_�[�Ƃ��Ĉꊇ�ҏW��L���ɂ��A�܂��s�ҏW��L���ɂ�����@�ł��B�s�ҏW�S�̂�m���Ƀg�����U�N�V�������ǉ������悤�ɂ��܂��B�T���v���ł̓t���b�g �f�[�^�\�[�X��g�p���܂��B

<div class="sample-container loading" style="height:890px">
    <iframe id="tree-grid-batch-editing-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-batch-edit' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-batch-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>


> [!NOTE]
> �g�����U�N�V���� �X�e�[�g�́A���ׂĂ̍X�V�A�ǉ��A�폜���ꂽ�s�A�����čŌ�̃X�e�[�g�ō\������܂��B

## �g�p���@

**app.module.ts** �t�@�C���� [`IgxTreeGridModule`]({environment:angularApiUrl}/classes/igxtreegridmodule.html) ��C���|�[�g���܂��B

```typescript
// app.module.ts

import { IgxTreeGridModule } from 'igniteui-angular';

@NgModule({
    imports: [
        ...
        IgxTreeGridModule,
        ...
    ]
})
export class AppModule {}
```
igxTransactionService ��c���[ �O���b�h�̃v���o�C�_�[�Ƃ��āA�܂��͂��̐e�R���|�[�l���g�Ƃ��Ē�`����K�v������܂��B

```typescript
import { Component, ViewChild } from "@angular/core";
import { IgxGridComponent, IgxGridTransaction, IgxToggleDirective,
    IgxTransactionService, IgxTreeGridComponent } from "igniteui-angular";

@Component({
    providers: [{ provide: IgxGridTransaction, useClass: IgxTransactionService }],
    selector: "app-tree-grid-batch-editing-sample.component",
    styleUrls: ["tree-grid-batch-editing-sample.component.scss"],
    templateUrl: "tree-grid-batch-editing-sample.component.html"
})
export class TreeGridBatchEditingSampleComponent {

```
> [!NOTE]
> `IgxGridTransaction` �̓O���b�h�Œ�`���ꂽ�C���W�F�N�V���� �g�[�N���ł��B


�f�[�^�\�[�X�Ƀo�C���h����c���[ �O���b�h���`��� [`rowEditable`]({environment:angularApiUrl}/classes/igxgridcomponent.html#roweditable) �� true �ɐݒ肵�ăo�C���h���܂��B

```html
    <igx-tree-grid #treeGrid [data]="data" primaryKey="EmployeID" foreignKey="PID" width ="100%" height ="500px" rowEditable=true rowSelectable=true columnHiding=true>
        ...
    </igx-tree-grid>
    ...
        <button igxButton (click)="addRow('treeGrid')">Add Row</button>
        <button igxButton [disabled]="!undoEnabled" (click)="undo('treeGrid')">Undo</button>
        <button igxButton [disabled]="!redoEnabled" (click)="redo('treeGrid')">Redo</button>
        <button igxButton [disabled]="!hasTransactions" (click)="openCommitDialog('treeGrid')">Commit</button>
    ...
```

�ȉ��̃R�[�h��́A[`transactions`]({environment:angularApiUrl}/classes/igxtransactionservice.html#) API (undo, redo, commit) �̎g�p���@����܂��B

```typescript

export class TreeGridBatchEditingSampleComponent {
    @ViewChild("treeGrid", { read: IgxTreeGridComponent }) public treeGrid: IgxTreeGridComponent;
    ...
    public deleteRow(event, gridID, rowID) {
        this.treeGrid.deleteRow(rowID);
    }

    public undo(gridID) {
        this.treeGrid.transactions.undo();
    }

    public redo(gridID) {
        this.treeGrid.transactions.redo();
    }

    public commit() {
        this.treeGrid.transactions.commit(this.data);
        this.toggle.close();
    }

    public discard() {
        this.treeGrid.transactions.clear();
    }

    public get undoEnabled(): boolean {
        return this.treeGrid.transactions.canUndo;
    }

    public get redoEnabled(): boolean {
       return this.treeGrid.transactions.canRedo;
    }

```

> [!NOTE]
> [`rowEditable`]({environment:angularApiUrl}/classes/igxgridcomponent.html#roweditable) �v���p�e�B�𖳌��ɂ���ƃO���b�h��ύX���ăZ���ύX�Ńg�����U�N�V������쐬���AUI �ōs�ҏW�I�[�o�[���C����J���܂���B


### API ���t�@�����X

* [`TransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) 
* [`rowEditable`]({environment:angularApiUrl}/classes/igxgridcomponent.html#roweditable)
* [`IgxTreeGridModule`]({environment:angularApiUrl}/classes/igxtreegridmodule.html)
* [`IgxTreeGridComponent`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)
* [`IgxGridComponent`]({environment:angularApiUrl}/classes/igxgridcomponent.html)


### ���̑��̃��\�[�X

<div class="divider--half"></div>

* [Data Grid](grid.md)

<div class="divider--half"></div>
�R�~���j�e�B�ɎQ�����ĐV�����A�C�f�A���Ă��������B

* [Ignite UI for Angular** �t�H�[����** (�p��) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (�p��) ](https://github.com/IgniteUI/igniteui-angular)








