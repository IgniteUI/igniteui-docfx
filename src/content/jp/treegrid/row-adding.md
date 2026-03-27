---
title: Angular Tree Grid での行追加 - Ignite UI for Angular
_description: Ignite UI for Angular の組み込み行追加機能の使用方法とカスタマイズ方法を説明します。CRUD 機能と直感的なグリッド行追加。例を参照してください。
_keywords: row adding, 行追加, igniteui for angular, infragistics, インフラジスティックス
_license: commercial
_language: ja
_canonicalLink: grid/row-adding
---


# Angular Tree Grid での行追加



Tree Grid コンポーネントはインライン行追加や Angular CRUD 操作のための強力な API を通して便利なデータ操作方法を提供します。グリッドのテンプレートで編集アクションが有効になっている[アクションストリップ](../action-strip.md)コンポーネントを追加し、ホバーして提供されたボタンを使用するか、<kbd>ALT</kbd> + <kbd>+</kbd> を押して、行追加 UI を生成するか、<kbd>ALT</kbd> + <kbd>SHIFT</kbd> + <kbd>+</kbd> を押して、選択した行に子を追加するための UI を生成します。


## Angular Tree Grid 行追加の例

次のサンプルは、Tree Grid でネイティブの行追加を有効にする方法を示しています。セルの値を変更してから、同じ行の別のセルをクリックまたはナビゲートしても、**[完了]** ボタンを使用して確認するか、**[キャンセル]** ボタンを使用して破棄するまで、行の値は更新されません。




<code-view style="height:520px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-add-row/" alt="Angular Tree Grid 行追加の例">
</code-view>

<div class="divider--half"></div>



## 行追加の使用

はじめに、**app.module.ts** ファイルに `IgxTreeGridModule` をインポートします:

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

次に、バインドしたデータソースに Tree Grid を定義をして [`rowEditable`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#rowEditable) を true に設定し、編集アクションを有効にした[アクション ストリップ](../action-strip.md) コンポーネントを定義します。[`addRow`]({environment:angularApiUrl}/classes/igxgrideditingactionscomponent.html#addRow) 入力は、行追加 UI を生成するボタンの表示状態を制御します。




```html
<igx-tree-grid igxPreventDocumentScroll [data]="data"
    primaryKey="ID" foreignKey="ParentID" [rowEditable]="true">
    <igx-column [field]="'Name'" dataType="string"></igx-column>
    <igx-column [field]="'Title'" dataType="string"></igx-column>
    <igx-column [field]="'HireDate'" dataType="date"></igx-column>
    <igx-column [field]="'OnPTO'" dataType="boolean" width="130px">
        <ng-template igxCell let-cell="cell" let-val>
            <igx-icon [color]="cell.row.data.OnPTO? 'red': 'green'">account_circle</igx-icon>
        </ng-template>
    </igx-column>
    <igx-column [field]="'Age'" dataType="number"></igx-column>
    <igx-action-strip #actionstrip>
        <igx-grid-editing-actions [addRow]="true" [addChild]="actionstrip.context?.treeRow.level < 2">
        </igx-grid-editing-actions>
    </igx-action-strip>
</igx-tree-grid>
```




> [!NOTE]
> プライマリ キーは行追加操作で必須です。

> [!NOTE]
> プライマリ キーを除くすべての列は、デフォルトで行追加 UI で編集可能です。特定の列の編集を無効にする場合、[`editable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#editable) 列の入力を `false` に設定する必要があります。



> [!NOTE]
> [行の追加] と [子の追加] のボタンの表示状態を制御する IgxGridEditingActions 入力は、アクション ストリップ コンテキスト (タイプ [`IgxTreeGridRow`]({environment:angularApiUrl}/classes/igxtreegridrow.html)) を使用して、ボタンが表示するレコードを調整できます。


内部の [`IgxBaseTransactionService`]({environment:angularApiUrl}/classes/igxbasetransactionservice.html) は Tree Grid に自動的に提供されます。行の状態が送信またはキャンセルされるまで、保留中のセルの変更を保持します。

## プログラムで行の追加を開始

Tree Grid を使用すると、2 つの異なるパブリック メソッドを使用して、プログラムで行追加 UI を生成できます。1 つは UI が生成される行を指定するための行 ID を受け入れ、もう 1 つはインデックスによって機能します。これらのメソッドを使用して、現在のデータ ビュー内の任意の場所に UI を生成できます。ページの変更や、たとえばフィルターで除外された行の指定はサポートされていません。

`beginAddRowById` を使用するには、rowID (PK) によって操作のコンテキストとして使用する行を指定する必要があります。このメソッドは、エンドユーザーが指定された行の [行の追加] アクション ストリップ ボタンをクリックしたかのように機能し、その下に UI を生成します。 2 番目のパラメーターは、行を子としてコンテキスト行に追加するか、兄弟として追加するかを制御します。 最初のパラメーターに `null` を渡すことで、UI をグリッドの最初の行としてス生成させることもできます。




```typescript
this.treeGrid.beginAddRowById('ALFKI', true);   // spawns the add row UI to add a child for the row with PK 'ALFKI'
this.treeGrid.beginAddRowById(null);            // spawns the add row UI as the first record
```





`beginAddRowByIndex` メソッドも同様に機能しますが、コンテキストとして使用する行はインデックスによって指定されます。

```typescript
this.treeGrid.beginAddRowByIndex(10, true);   // spawns the add row UI to add a child for the row at index 10
this.treeGrid.beginAddRowByIndex(null);       // spawns the add row UI as the first record
```



## 位置

- 行追加 UI のデフォルト位置は、エンド ユーザーが [行の追加] ボタンをクリックした行の下にあります。

- Tree Grid がスクロールして、行追加 UI が自動的に完全に表示されます。

- 行追加 UI のオーバーレイは、スクロール中もその位置を維持します。

## 動作

行追加 UI は、エンド ユーザーに整合性のある編集エクスペリエンスを提供するように設計されているため、行編集 UI と同じ動作をします。詳細については、[Tree Grid 行編集](row-editing.md)トピックを参照してください。

行追加 UI を介して新しい行が追加された後、その位置や表示状態は、Tree Grid のソート、フィルタリングおよびグループ化の状態によって決定されます。これらの状態のいずれも適用されていない Tree Grid では、最後のレコードとして表示されます。スナックバーが短時間表示され、Tree Grid が表示されていない場合にはエンド ユーザーがコントロールの位置までスクロールするためのボタンが含まれています。

## キーボード ナビゲーション

- <kbd>ALT</kbd> + <kbd>+</kbd> - 行を追加するために編集モードに入ります。


- <kbd>ALT</kbd> + <kbd>SHIFT</kbd> + <kbd>+</kbd> - 子を追加するために編集モードに入ります。


- <kbd>ESC</kbd> 変更を送信せずに行追加モードを終了します。

- <kbd>TAB</kbd> 行の編集可能なセルから次のセルへフォーカスを移動、右端の編集可能なセルから キャンセル と 完了 ボタンへ移動します。[完了] ボタンからのナビゲーションは、現在編集されている行内の一番左の編集可能なセルに移動します。

## 機能の統合

- Tree Grid のデータ ビューが変更されると、行追加の操作は停止します。エンド ユーザーが行った変更はすべて送信されます。データ ビューを変更する操作には、ソート、グループ化、フィルタリング、ページングなどが含まれますが、これらに限定されません。

- 行追加の操作が終了すると、集計が更新されます。同じことが、ソート、フィルタリングなど、他のデータ ビューに依存する機能にも当てはまります。


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

ほとんどのリモート データ シナリオでは、主キーの割り当てはサーバーの作成要求で発生します。この場合、クライアントに追加されたレコードは、サーバーのデータベースに保存されるまで最終的な主キー値を持ちません。Tree Grid でこの更新を処理する推奨される方法は以下のとおりです。

- Tree Grid がトランザクションを使用しない場合

    作成要求が正常に完了し、追加されたレコード データを返すと、ローカル データ レコード インスタンスでそのレコードの ID を置き換えることができます。

- Tree Grid がトランザクションを使用する場合

    作成要求または一括更新要求が正常に完了し、追加されたレコード インスタンス (db で生成された ID) を返すと、[clear]({environment:angularApiUrl}/interfaces/transactionservice.html#clear) API メソッド を使用して関連する ADD トランザクションをトランザクション ログからクリアする必要があります。ローカル トランザクションに生成された id フィールドがあり、データベースで作成された id フィールドと異なる場合があるため、クリアする必要があります。返却されたレコードをローカル データ インスタンスに追加できます。

これにより、リモートで生成された ID がローカル データに常に反映され、以降の更新/削除操作で正しいレコード ID がターゲットになります。

## スタイル設定

行追加 UI は `IgxActionStrip` 編集操作のボタン、編集エディター、オーバーレイ、エンドユーザーが新しく追加された行にスクロールできるスナックバーが構成されます。これらのコンポーネントのスタイル設定には、それぞれのトピックのガイドを参照してください。

- [Tree Grid 行追加](row-editing.md#スタイル設定)
- [IgxSnackbar](../snackbar.md#スタイル設定)
- [IgxActionStrip](../action-strip.md#スタイル設定)

## API リファレンス

- [rowEditable]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#rowEditable)
- [onRowEditEnter]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#onRowEditEnter)
- [onRowEdit]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#onRowEdit)
- [rowEditDone]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#rowEditDone)
- [onRowEditCancel]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#onRowEditCancel)
- [endEdit]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#endEdit)
- [primaryKey]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#primaryKey)
- [IgxTreeGridComponent]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)
- [IgxActionStripComponent]({environment:angularApiUrl}/classes/igxactionstripcomponent.html)
- [IgxGridEditingActionsComponent]({environment:angularApiUrl}/classes/igxgrideditingactionscomponent.html)

## その他のリソース

<div class="divider--half"></div>

- [Tree Grid の概要](tree-grid.md)
- [Tree Grid 編集](editing.md)
- [Tree Grid トランザクション](batch-editing.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)