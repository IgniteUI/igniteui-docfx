---
title: Tree Grid 行編集 - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular Tree Grid コントロールは、タッチ レスポンシブなデータ グリッドです。
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Tree Grid component, Angular Tree Grid control, Angular Tree Grid component, Angular High Performance Tree Grid, Tree Grid 
_language: ja
---

## Tree Grid 行編集

行編集 - ツリー グリッド データソースに変更をサブミットする前に行の複数セルを一度に変更することが可能です。新しいトランザクション プロバイダーの保留中の変更を利用できます。

[`rowEditable`]({environment:angularApiUrl}/classes/igxgridcomponent.html#roweditable) が有効で、[`editable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#editable) プロパティを定義しない場合も[field]({environment:angularApiUrl}/classes/igxcolumncomponent.html#field) プロパティが定義されたすべての列 (([`primaryKey`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#primarykey) の列を除く) ) が編集可能になります。特定の列の編集を無効にする場合、[`editable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#editable) 列の入力を false に設定します。
以下の手順では、グリッドの [`rowEditable`]({environment:angularApiUrl}/classes/igxgridcomponent.html#roweditable) プロパティで行編集を有効にする方法を示します。

### デモ

<div class="sample-container loading" style="height:590px">
    <iframe id="tree-grid-row-editing-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-row-edit' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="tree-grid-row-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-row-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>


### 使用方法

**app.module.ts** ファイルの [`IgxTreeGridModule`]({environment:angularApiUrl}/classes/igxtreegridmodule.html) をインポートします。

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

データソースにバインドするツリー グリッドを定義をして [`rowEditable`]({environment:angularApiUrl}/classes/igxgridcomponent.html#roweditable) を true に設定します。

```html
    <igx-tree-grid #treeGrid1 [data]="data" primaryKey="EmployeID" foreignKey="PID" width="100%" height="500px" rowEditable=true 
    rowSelectable=true columnHiding=true (onRowEditDone)="rowEditDone($event)" (onRowEditCancel)="rowEditCancel($event)">
        <igx-column *ngFor="let c of columns"
            [editable]="c.editable"
            [field]="c.field"
            [dataType]="c.dataType"
            [header]="c.label"
            [movable]="c.movable"
            [resizable]="c.resizable"
            [sortable]="c.sortable"
            [filterable]="c.filterable"
            >
        </igx-column>
    </igx-tree-grid>
```

> [!NOTE]
> 行編集を含む編集操作でプライマリキーの設定は必須です。

> [!NOTE]
> 各列の編集を有効にする必要はありません。グリッドで [`rowEditable`]({environment:angularApiUrl}/classes/igxgridcomponent.html#roweditable) プロパティを使用するとプライマリ行以外 [`field`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#field) プロパティを定義したすべての行が編集可能になります。特定の列の編集を無効にする場合、[`editable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#editable) 列の入力を false に設定します。

```typescript
import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxTreeGridComponent } from "igniteui-angular";
...

@Component({
    providers: [],
    selector: "app-tree-grid-row-editing-sample.component",
    styleUrls: ["tree-grid-row-editing-sample.component.scss"],
    templateUrl: "tree-grid-row-editing-sample.component.html"
})
export class TreeGridRowEditSampleComponent implements OnInit {

    public data: any[];
    public columns: any[];

    @ViewChild("treeGrid1") public treeGrid1: IgxTreeGridComponent;
    public ngOnInit(): void {
        this.data = FLAT_DATA;
        this.columns = [
		{ field:"EmployeID", label:"ID", resizable:true, movable:true, sortable:true, filterable:true, editable:false, dataType:"number" },
		{ field:"FirstName", label:"First Name", resizable:true, movable:true, sortable:true, filterable:true, editable:true, dataType:"string" },
		{ field:"LastName", label:"Last Name", resizable:false, movable:false, sortable:false, filterable:false, editable:true, dataType:"string" },
		{ field:"Title", label:"Title", resizable:true, movable:true, sortable:true, filterable:true, editable:true, dataType:"string" }
	];
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

- 行が編集モードの時にグリッドがスクロールされると行が表示領域外になりますが、グリッドは編集モードのままです。グリッドをスクロールすると行が再び表示されて行は編集モードのままになります。

- 行が編集モードの時に親行を縮小すると編集行が非表示になり、親行が編集モードのままになります。親行を展開すると編集行は再度表示されますが編集業が編集モードのままになります。

- 編集した各セルは行編集が終了するまで変更スタイルを取得します。グリッドがトランザクションで提供されない場合の動作です。トランザクションが有効な場合、すべての変更がコミットされるまでセル編集スタイルが適用されます。


## キーボード ナビゲーション

- `Enter` と `F2` で行編集モードに入ります。

- `Esc` で行編集モードを終了し、行の編集モード時に変更されたいずれのセルの変更もサブミットしません。

- `Tab` で行の編集可能なセルから次のセルへフォーカスを移動、右端の編集可能なセルから CANCEL と Done ボタンへ移動します。DONE ボタンからのナビゲーションは現在の編集行内で編集可能なセルへ移動します。


## 機能の統合

- すべてのデータ変更操作は行変更操作を終了し、現在の行の変更をサブミットします。ソート、変更、フィルタリング条件、ページングなどが含まれます。

- 行編集が終了した後に集計が更新されます。同様にソートやフィルタリングなどの他の機能が有効になります。


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

> [!NOTE]
> 一括編集機能は今後リリース予定です。


### API リファレンス

* [`rowEditable`]({environment:angularApiUrl}/classes/igxgridcomponent.html#roweditable)
* [`field`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#field)
* [`editable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#editable)
* [`endRowEdit`]({environment:angularApiUrl}/classes/igxgridcomponent.html#endrowedit)
* [`primaryKey`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#primarykey)
* [`IgxTreeGridModule`]({environment:angularApiUrl}/classes/igxtreegridmodule.html)
* [`IgxTreeGridComponent`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)
* [`IgxGridComponent`]({environment:angularApiUrl}/classes/igxgridcomponent.html)


### その他のリソース

<div class="divider--half"></div>

* [Data Grid](../grid/grid.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)
