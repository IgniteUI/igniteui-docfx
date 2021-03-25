@@if(igxName==='IgxGrid') {
---
title: Angular グリッド行追加 | UI グリッド | Ignite UI for Angular | インフラジスティックス
_description: Ignite UI for Angular を使用して、定義済みの行追加機能の使用およびカスタマイズする方法を学びます。UI グリッドで、直感的なグリッド行の追加と CRUD 機能を利用できます。
_keywords: row adding, 行追加, igniteui for angular, infragistics, インフラジスティックス
_language: ja
---
}

@@if(igxName!=='IgxGrid') {
---
title: Angular グリッド行追加 | UI グリッド | Ignite UI for Angular | インフラジスティックス
_description: Ignite UI for Angular を使用して、定義済みの行追加機能の使用およびカスタマイズする方法を学びます。UI グリッドで、直感的なグリッド行の追加と CRUD 機能を利用できます。
_keywords: row adding, 行追加, igniteui for angular, infragistics, インフラジスティックス
_language: ja
_canonicalLink: grid/row-adding
---
}

# @@igComponent 行追加

@@if (igxName !== 'IgxTreeGrid') {
@@igComponent コンポーネントはインライン行追加や Angular CRUD 操作のための強力な API を通して便利なデータ操作方法を提供します。グリッドのテンプレートで編集アクションが有効になっている[アクション ストリップ](../action-strip.md)コンポーネントを追加し、行にホバーして提供されたボタンを使用するか、<kbd>ALT</kbd> + <kbd>+</kbd> を押して、行追加 UI を生成します。
}
@@if (igxName === 'IgxTreeGrid') {
@@igComponent コンポーネントはインライン行追加や Angular CRUD 操作のための強力な API を通して便利なデータ操作方法を提供します。グリッドのテンプレートで編集アクションが有効になっている[アクションストリップ](../action-strip.md)コンポーネントを追加し、ホバーして提供されたボタンを使用するか、<kbd>ALT</kbd> + <kbd>+</kbd> を押して、行追加 UI を生成するか、<kbd>ALT</kbd> + <kbd>SHIFT</kbd> + <kbd>+</kbd> を押して、選択した行に子を追加するための UI を生成します。
}

## Angular @@igComponent 行追加の例

次のサンプルは、@@igComponent でネイティブの行追加を有効にする方法を示しています。セルの値を変更してから、同じ行の別のセルをクリックまたはナビゲートしても、**[完了]** ボタンを使用して確認するか、**[キャンセル]** ボタンを使用して破棄するまで、行の値は更新されません。

@@if (igxName === 'IgxGrid') {

<code-view style="height:520px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-add-row" >
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:520px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-add-row" alt="Angular @@igComponent 行追加の例">
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
   
<code-view style="height:510px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-add-row" alt="Angular @@igComponent 行追加の例">
</code-view>

<div class="divider--half"></div>
}

## 行追加の使用

はじめに、**app.module.ts** ファイルに `@@igxNameModule` をインポートします:

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

次に、バインドしたデータソースに @@igComponent を定義をして [`rowEditable`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#roweditable) を true に設定し、編集アクションを有効にした[アクション ストリップ](../action-strip.md) コンポーネントを定義します。[`addRow`]({environment:angularApiUrl}/classes/igxgrideditingactionscomponent.html#addRow) 入力は、行追加 UI を生成するボタンの表示状態を制御します。

@@if (igxName === 'IgxGrid') {
```html
<igx-grid [data]="data" [primaryKey]="'ProductID'" width="100%" height="500px" [rowEditable]="true">
    <igx-column field="ProductID" header="Product ID" dataType="number"></igx-column>
    <igx-column field="ReorderLevel" header="ReorderLever" dataType="number"></igx-column>
    <igx-column field="ProductName" header="ProductName" dataType="string"></igx-column>
    <igx-column field="UnitsInStock" header="UnitsInStock" dataType="number"></igx-column>
    <igx-column field="OrderDate" dataType="date"></igx-column>
    <igx-column field="Discontinued" header="Discontinued" dataType="boolean"></igx-column>
    
    <igx-action-strip #actionstrip>
        <igx-grid-editing-actions [addRow]="true"></igx-grid-editing-actions>
    </igx-action-strip>
</igx-grid>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid igxPreventDocumentScroll #treeGrid [data]="data"
    primaryKey="ID" foreignKey="ParentID" [rowEditable]="true">
    <igx-column [field]="'Name'" dataType="string"></igx-column>
    <igx-column [field]="'Title'" dataType="string"></igx-column>
    <igx-column [field]="'HireDate'" dataType="date"></igx-column>
    <igx-column [field]="'OnPTO'" dataType="boolean" width="130px">
        <ng-template igxCell let-cell="cell" let-val>
            <igx-icon [color]="cell.row.rowData.OnPTO? 'red': 'green'">account_circle</igx-icon>
        </ng-template>
    </igx-column>
    <igx-column [field]="'Age'" dataType="number"></igx-column>
    <igx-action-strip #actionstrip>
        <igx-grid-editing-actions [addRow]="true" [addChild]="actionstrip.context?.treeRow.level < 2">
        </igx-grid-editing-actions>
    </igx-action-strip>
</igx-tree-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid igxPreventDocumentScroll #hierarchicalGrid class="hgrid" [data]="localdata"
    [autoGenerate]="false" [height]="'500px'" [width]="'100%'" [primaryKey]="'Debut'" [rowEditable]="true">
    <igx-column field="Artist" [dataType]="'string'"></igx-column>
    <igx-column field="HasGrammyAward" header="Has Grammy Award?" [dataType]="'boolean'">
    </igx-column>
    <igx-column field="Debut" dataType="number"></igx-column>
    <igx-column field="GrammyNominations" header="Grammy Nominations" dataType="number"></igx-column>
    <igx-column field="GrammyAwards" header="Grammy Awards" dataType="number"></igx-column>

    <igx-action-strip #actionstrip1>
        <igx-grid-editing-actions [addRow]="true"></igx-grid-editing-actions>
    </igx-action-strip>

    <igx-row-island [key]="'Albums'" [autoGenerate]="false" [primaryKey]="'USBillboard200'" [rowEditable]="true">
        <igx-column field="Album" [dataType]="'string'"></igx-column>
        <igx-column field="LaunchDate" header="Launch Date" [dataType]="'date'"></igx-column>
        <igx-column field="BillboardReview" header="Billboard Review" dataType="number"></igx-column>
        <igx-column field="USBillboard200" header="US Billboard 200" dataType="number"></igx-column>
        <igx-row-island [key]="'Songs'" [autoGenerate]="false" [primaryKey]="'Number'" [rowEditable]="true">
            <igx-column field="Number" header="No." dataType="number"></igx-column>
            <igx-column field="Title" [dataType]="'string'"></igx-column>
            <igx-column field="Released" [dataType]="'date'"></igx-column>
            <igx-column field="Genre" [dataType]="'string'"></igx-column>

            <igx-action-strip #actionstrip3>
                <igx-grid-editing-actions [addRow]="true"></igx-grid-editing-actions>
            </igx-action-strip>

        </igx-row-island>

        <igx-action-strip #actionstrip2>
            <igx-grid-editing-actions [addRow]="true"></igx-grid-editing-actions>
        </igx-action-strip>
    </igx-row-island>
</igx-hierarchical-grid>
```
}

> [!NOTE]
> プライマリ キーは行追加操作で必須です。

> [!NOTE]
> プライマリ キーを除くすべての列は、デフォルトで行追加 UI で編集可能です。特定の列の編集を無効にする場合、[`editable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#editable) 列の入力を `false` に設定する必要があります。

@@if (igxName !== 'IgxTreeGrid') {
> [!NOTE]
> [行の追加] のボタンの表示状態を制御する IgxGridEditingActions 入力は、アクション ストリップ コンテキスト (タイプ [`IgxGridRowComponent`]({environment:angularApiUrl}/classes/igxgridrowcomponent.html)) を使用して、ボタンが表示するレコードを調整できます。
}
@@if (igxName === 'IgxTreeGrid') {
> [!NOTE]
> [行の追加] と [子の追加] のボタンの表示状態を制御する IgxGridEditingActions 入力は、アクション ストリップ コンテキスト (タイプ [`IgxTreeGridRowComponent`]({environment:angularApiUrl}/classes/igxtreegridrowcomponent.html)) を使用して、ボタンが表示するレコードを調整できます。
}

内部の [`IgxBaseTransactionService`]({environment:angularApiUrl}/classes/igxbasetransactionservice.html) は @@igComponent に自動的に提供されます。行の状態が送信またはキャンセルされるまで、保留中のセルの変更を保持します。

## 位置

- 行追加 UI のデフォルト位置は、エンド ユーザーが [行の追加] ボタンをクリックした行の下にあります。

- @@igComponent がスクロールして、行追加 UI が自動的に完全に表示されます。

- 行追加 UI のオーバーレイは、スクロール中もその位置を維持します。

## 動作

行追加 UI は、エンド ユーザーに整合性のある編集エクスペリエンスを提供するように設計されているため、行編集 UI と同じ動作をします。詳細については、[@@igComponent 行編集](row-editing.md)トピックを参照してください。

行追加 UI を介して新しい行が追加された後、その位置や表示状態は、@@igComponent のソート、フィルタリングおよびグループ化の状態によって決定されます。これらの状態のいずれも適用されていない @@igComponent では、最後のレコードとして表示されます。スナックバーが短時間表示され、@@igComponent が表示されていない場合にはエンド ユーザーがコントロールの位置までスクロールするためのボタンが含まれています。

## キーボード ナビゲーション

- <kbd>ALT</kbd> + <kbd>+</kbd> - 行を追加するために編集モードに入ります。
@@if (igxName === 'IgxTreeGrid') {

- <kbd>ALT</kbd> + <kbd>SHIFT</kbd> + <kbd>+</kbd> - 子を追加するために編集モードに入ります。
}

- <kbd>ESC</kbd> 変更を送信せずに行追加モードを終了します。

- <kbd>TAB</kbd> 行の編集可能なセルから次のセルへフォーカスを移動、右端の編集可能なセルから キャンセル と 完了 ボタンへ移動します。[完了] ボタンからのナビゲーションは、現在編集されている行内の一番左の編集可能なセルに移動します。

## 機能の統合

- @@igComponent のデータ ビューが変更されると、行追加の操作は停止します。エンド ユーザーが行った変更はすべて送信されます。データ ビューを変更する操作には、ソート、グループ化、フィルタリング、ページングなどが含まれますが、これらに限定されません。

- 行追加の操作が終了すると、集計が更新されます。同じことが、ソート、フィルタリングなど、他のデータ ビューに依存する機能にも当てはまります。
@@if (igxName === 'IgxHierarchicalGrid') {

- 階層グリッドの UI を生成すると、エンド ユーザーが [行の追加] ボタンをクリックした行に対して現在展開されている子レイアウトはすべて縮小されます。
}

## 行追加オーバーレイのカスタマイズ

### テキストのカスタマイズ

行追加オーバーレイのテキストのカスタマイズは、`igxRowAddTextDirective` を使用して可能です。

```html
<ng-template igxRowAddText>
	Adding Row
</ng-template>
 ```

### ボタンのカスタマイズ
`igxRowEditActionsDirective` を使用して行編集オーバーレイのボタンのカスタマイズが可能です。
キーボード ナビゲーションにボタンを含める場合、各ボタンに `igxRowEditTabStopDirective` が必要です。

 ```html
 <ng-template igxRowEditActions let-endRowEdit>
	<button igxButton igxRowEditTabStop (click)="endRowEdit(false)">Cancel</button>
	<button igxButton igxRowEditTabStop (click)="endRowEdit(true)">Apply</button>
</ng-template>
 ```
> [!NOTE]
> `igxRowEditActions` ディレクティブを使用すると、オーバーレイ ボタンの編集と追加の両方の編集アクションが変更されます。

## リモート シナリオ

ほとんどのリモート データ シナリオでは、主キーの割り当てはサーバーの作成要求で発生します。この場合、クライアントに追加されたレコードは、サーバーのデータベースに保存されるまで最終的な主キー値を持ちません。@@igComponent でこの更新を処理する推奨される方法は以下のとおりです。

- @@igComponent がトランザクションを使用しない場合

    作成要求が正常に完了し、追加されたレコード データを返すと、ローカル データ レコード インスタンスでそのレコードの ID を置き換えることができます。

- @@igComponent がトランザクションを使用する場合

    作成要求または一括更新要求が正常に完了し、追加されたレコード インスタンス (db で生成された ID) を返すと、[clear]({environment:angularApiUrl}/interfaces/transactionservice.html#clear) API メソッド を使用して関連する ADD トランザクションをトランザクション ログからクリアする必要があります。  ローカル トランザクションに生成された id フィールドがあり、データベースで作成された id フィールドと異なる場合があるため、クリアする必要があります。返却されたレコードをローカル データ インスタンスに追加できます。

これにより、リモートで生成された ID がローカル データに常に反映され、以降の更新/削除操作で正しいレコード ID がターゲットになります。

## スタイル設定

行追加 UI は `IgxActionStrip` 編集操作のボタン、編集エディター、オーバーレイ、エンドユーザーが新しく追加された行にスクロールできるスナックバーが構成されます。これらのコンポーネントのスタイル設定には、それぞれのトピックのガイドを参照してください。

- [@@igComponent 行追加](row-editing.md#スタイル設定)
- [IgxSnackbar](../snackbar.html#スタイル設定)
- [IgxActionStrip](../action-strip.md#スタイル設定)

## API リファレンス

* [rowEditable]({environment:angularApiUrl}/classes/@@igTypeDoc.html#roweditable)
* [onRowEditEnter]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onroweditenter)
* [onRowEdit]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onrowedit)
* [rowEditDone]({environment:angularApiUrl}/classes/@@igTypeDoc.html#roweditdone)
* [onRowEditCancel]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onroweditcancel)
* [endEdit]({environment:angularApiUrl}/classes/@@igTypeDoc.html#endedit)
* [primaryKey]({environment:angularApiUrl}/classes/@@igTypeDoc.html#primarykey)
* [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [IgxActionStripComponent]({environment:angularApiUrl}/classes/igxactionstripcomponent.html)
* [IgxGridEditingActionsComponent]({environment:angularApiUrl}/classes/igxgrideditingactionscomponent.html)

## その他のリソース
<div class="divider--half"></div>

* [@@igComponent の概要](@@igMainTopic.md)
* [@@igComponent 編集](editing.md)
* [@@igComponent トランザクション](batch-editing.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)