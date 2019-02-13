---
title: Grid 行の編集 - ネイティブ Angular | Ignite UI for Angular
_description: 行編集 - グリッド データソースに変更をサブミットする前に行の複数セルを一度に変更することが可能です。新しいトランザクション プロバイダーの保留中の変更を利用できます。
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Component, Angular Grid, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, Cell Editing
_language: ja
---

## グリッド編集

行編集 - グリッド データソースに変更をサブミットする前に行の複数セルを一度に変更することが可能です。新しいトランザクション プロバイダーの保留中の変更を利用できます。



### デモ

以下の手順では、グリッドで行編集を有効にする方法を示します。セル値を変更してから同じ行の他のセルをクリックまたはナビゲーションした場合も Done ボタンを使用して確定するまで行値を更新しません。または Cancel ボタンを使用して破棄します。

<div class="sample-container loading" style="height:650px">
    <iframe id="grid-row-editing-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-row-editing' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-row-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

> [!NOTE]
> 行が編集モードにある場合、他の行のセルをクリックすると Done ボタンが押されたように動作し、前の行の変更をすべての変更をサブミットします。フォーカスのある新しいセルが編集可能かどうか、新しい行が編集モードに入るかどうか、セルが編集できない場合は前の行のみ編集モードを終了します。

<div class="divider--half"></div>


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

データソースにバインドするグリッドを定義をして [`rowEditable`]({environment:angularApiUrl}/classes/igxgridcomponent.html#roweditable) を true に設定します。

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
> 行編集の処理でプライマリキーの設定は必須です。
> [!NOTE]
> 各列の編集を有効にする必要はありません。グリッドで [`rowEditable`]({environment:angularApiUrl}/classes/igxgridcomponent.html#roweditable) プロパティを使用するとプライマリ行以外 `field` プロパティを定義したすべての行が編集可能になります。特定の列の編集を無効にする場合、[`editable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#editable) 列の入力を false に設定します。


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
> グリッドは、保留中のセル変更を保持するプロバイダー [`IgxBaseTransactionService`]({environment:angularApiUrl}/classes/igxbasetransactionservice.html) を行ステートをサブミットまたはキャンセルするまで内部使用します。

## 配置

- オーバーレイのデフォルトの位置は編集モードで行の下にあります。
     
- 行の下にスペースがない場合、オーバーレイが行の上に表示されます。
     
- 一番上または下に表示されると、オーバーレイは閉じられるまでスクロール時にこの位置を保持します。

## 動作

- 行が編集モードの場合、編集が継続します。同じ行のセルがクリックされたかどうか。

- Done ボタンをクリックすると行編集を完了し、変更をデータソースまたはトランザクションへサブミットします。更に行が編集モードを完了します。

- Cancel ボタンがをクリックすると現在の行のすべての変更を元に戻し、行編集モードを終了します。

- 行が編集モードにある場合、他の行のセルをクリックすると現在の行編集を終了し、行の新規の変更をサブミット (Done ボタンをクリックした場合と同じ) します。フォーカスのある新しいセルが編集可能かどうか、新しい行が編集モードに入るかどうか、セルが編集できない場合は前の行のみ編集モードを終了します。

- 行が編集モードの時にグリッドがスクロールされると行が表示領域外になりますが、グリッドは編集モードのままです。グリッドをスクロールすると編集行は再度表示されますが編集行が編集モードのままになります。グリッド外をクリックしたときにセルも編集モードに残ります。

- サイズ変更、移動、並べ替え列、ページの変更など、その他のグリッド操作は編集モードを終了して最新の値をサブミットします。

- 編集した各セルは行編集が終了するまで変更スタイルを取得します。グリッドがトランザクションで提供されない場合の動作です。トランザクションが有効な場合、すべての変更がコミットされるまでセル編集スタイルが適用されます。


## キーボード ナビゲーション

- `Enter` and `F2` が行編集モードに入ります。

- `Esc` が行編集モードを終了し、行の編集モード時に変更されたいずれのセルの変更もサブミットしません。

- `Tab` は行の編集可能なセルから次のセルへフォーカスを移動、右端の編集可能なセルから CANCEL と Done ボタンへ移動します。DONE ボタンからのナビゲーションは現在の編集行内で編集可能なセルへ移動します。


## 機能の統合

- すべてのデータ変更操作は行変更操作を終了し、現在の行の変更をサブミットします。並べ替え、グループの変更、フィルタリング条件、ページングなどが含まれます。

- 行編集が終了した後に集計が更新されます。同様に並べ替えやフィルタリングなどの他の機能が有効になります。

- グループ行の展開と縮小は現在の行の編集を終了しません。


## 行編集オーバーレイのカスタマイズ

### テキストのカスタマイズ

`igxRowEditTextDirective` を使用した行編集オーバーレイのテキストのカスタマイズが可能です。
`rowChangesCount` プロパティが公開されて変更されたセルのカウントを保持します。

```html
<ng-template igxRowEditText let-rowChangesCount>
	Changes: {{rowChangesCount}}
</ng-template>
 ```

 ### ボタンのカスタマイズ
`igxRowEditActionsDirective` を使用して行編集オーバーレイのボタンのカスタマイズが可能です。
キーボード ナビゲーションにボタンを含める場合、各ボタンに `igxRowEditTabStopDirective` が必要です。

 ```typescript
 <ng-template igxRowEditActions let-endRowEdit>
	<button igxButton igxRowEditTabStop (click)="endRowEdit(false)">Cancel</button>
	<button igxButton igxRowEditTabStop (click)="endRowEdit(true)">Apply</button>
</ng-template>
 ```

## API リファレンス

### igxGrid 入力

* [rowEditable]({environment:angularApiUrl}/classes/igxgridcomponent.html#roweditable)

### igxGrid 出力

* [onRowEditEnter]({environment:angularApiUrl}/classes/igxgridcomponent.html#onroweditenter)
* [onRowEdit]({environment:angularApiUrl}/classes/igxgridcomponent.html#onrowedit)
* [onRowEditCancel]({environment:angularApiUrl}/classes/igxgridcomponent.html#onroweditcancel)

### igxGrid メソッド

* [endEdit]({environment:angularApiUrl}/classes/igxgridcomponent.html#endedit)


### その他のリソース
<div class="divider--half"></div>

* [Grid の概要](grid.md)
* [Grid 編集](grid_editing.md)
* [Grid トランザクション](grid_batch_editing.md)