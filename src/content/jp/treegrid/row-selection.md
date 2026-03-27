---
title: Angular Grid の行選択 - Ignite UI for Angular
_description: 行選択を有効にして UX を改善し、ユーザーが単一または複数の行を管理できるようにします。Ignite UI で行データ選択を簡単に構成できます。
_keywords: データ選択, igniteui for angular, インフラジスティックス
_license: commercial
_language: ja
---



# Angular Tree Grid 行選択

Ignite UI for Angular の行選択では、行内の他のすべての列に先行する行セレクター列があります。行選択ボックスをクリックすると、行の選択や選択解除、複数行にわたるデータの選択が可能になります。

## Angular 行選択の例


以下のサンプルは、Tree Grid の**行選択**の 4 つのタイプを示します。以下のボタンを使用して、使用可能な各選択モードを有効にします。Snackbar メッセージ ボックスで各ボタンの操作について簡単に説明します。切り替えボタンを使用して、行セレクターのチェックボックスを非表示または表示します。





<code-view style="height:700px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-selection/" alt="Angular 行選択の例">
</code-view>

<div class="divider--half"></div>



## 設定

[`igx-tree-grid`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) で行選択を設定するには、**rowSelection** プロパティを設定します。このプロパティは、**GridSelectionMode** 列挙を受け取ります。**GridSelectionMode** は、次の 4 つのモードを公開します: **none**、**single**、**multiple**、**multipleCascade**。以下で、それぞれについて詳しく説明します。

### None 選択

[`igx-tree-grid`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) では、デフォルトで行選択が無効になります。それ以外の場合 ([rowSelection]="'none'")。したがって、Tree Grid UI とのインタラクションを通じて行を選択または選択解除することは**できません**が、選択/選択解除する唯一の方法は、提供された API メソッドを使用することです。

### 単一選択

単一行の選択は、`[rowSelection] = '"single"'` プロパティの設定のみで簡単に設定できるようになりました。これにより、**グリッド内の 1 行のみを選択できます**。行のセルにフォーカスするときにセルをクリックするかスペースキーを押すと行を選択できます。もちろん、行セレクターフィールドをクリックして行を選択できます。行が選択または選択解除されると、**rowSelectionChanging** イベントが生成されます。




```html
<!-- selectionExample.component.html -->

<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="true"
            [rowSelection]="'single'" [allowFiltering]="true" (rowSelectionChanging)="handleRowSelection($event)">
</igx-tree-grid>
```

```typescript
/* selectionExample.component.ts */

public handleRowSelection(event) {
    if (args.added.length && args.added[0] === 3) {
        args.cancel = true;
    }
}
```




### 複数選択

[`igx-tree-grid`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) で複数行選択を有効にするには、[`rowSelection`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#rowSelection) プロパティを `multiple` に設定します。これにより、各行および Tree Grid ヘッダーで行セレクター フィールドが有効になります。行セレクターを使用して複数行を選択できます。選択はスクロール、ページング、およびソートとフィルターリング、などのデータ操作で保持されます。行を選択するには、セルをクリックするか、セルにフォーカスがあるときにスペースキーを押します。1 つの行を選択し、Shift キーを押しながら別の行をクリックすると、行の範囲全体が選択されます。この選択モードでは、単一の行をクリックすると、前に選択した行が選択解除されます。Ctrl キーを押しながらクリックすると、行が切り替わり、前の選択が保持されます。




```html
<!-- selectionExample.component.html -->

<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID" [rowSelection]="'multiple'"
        [allowFiltering]="true" (rowSelectionChanging)="handleRowSelection($event)" >
</igx-tree-grid>
```




### カスケード選択

[`igx-tree-grid`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) で行のカスケード選択を有効にするには、[`rowSelection`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#rowSelection) プロパティを `multipleCascade` に設定するだけです。これにより、各行および Tree Grid ヘッダーで行セレクター フィールドが有効になります。行セレクターを使用すると、ユーザーは複数の行を選択して、下のツリーのすべての子を選択できます。選択は、スクロール、ページング、および並べ替えやフィルタリングなどのデータ操作を通じて保持されます。行は、セルをクリックするか、セルがフォーカスされているときに _space_ キーを押すことによっても選択できます。1 つの行を選択し、_shift_ キーを押しながら別の行をクリックすると、親レコードの選択を通じて選択した範囲内にない場合でも、そのすべての子が選択されます。この選択モードでは、単一の行をクリックすると、前に選択した行が選択解除されます。_ctrl_ キーを押しながらクリックすると、行とその子が切り替えられ、前の選択が保持されます。

```html
<!-- selectionExample.component.html -->

<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="true"
        [rowSelection]="'multipleCascade'" [allowFiltering]="true" (rowSelectionChanging)="handleRowSelection($event)">
</igx-tree-grid>
```

このモードでは、親の選択状態はその子の選択状態に完全に依存します。親に選択された子と選択解除された子がある場合、そのチェックボックスは不確定な状態になります。


```ts
<!-- selectionExample.component.ts -->

 public handleRowSelection(event: IRowSelectionEventArgs) {
    // use event.newSelection to retrieve primary key/row data of latest selected row
    this.selectedRowsCount = event.newSelection.length;
    this.selectedRowIndex = event.newSelection[0];
 }
```

**注**


- 行を選択すると、[`rowSelectionChanging`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#rowSelectionChanging) イベントがトリガーされます。このイベントは、新しい選択、古い選択、古い選択に対して追加および削除された行に関する情報を提供します。また、イベントはキャンセル可能であるため、選択を防ぐことができます。
- 行選択が有効になっている場合、行セレクターが表示されますが、表示しない場合は、`[hideRowSelectors] = true` に設定できます。
- 行選択モードのランタイムを切り替えると、優先行選択状態がクリアされます。


## API の使用

### コードで行を選択

以下は、単一または複数の行を同時に選択できるコード スニペットです ([`primaryKey`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#primaryKey) を介して)。さらに、このメソッドの 2 番目のパラメーターは boolean プロパティです。それを使用して、前の行の選択をクリアするかどうかを選択できます。以前の選択はデフォルトで保存されます。



```html
<!-- selectionExample.component.html -->

<igx-tree-grid ... [primaryKey]="'ID'">
...
</igx-tree-grid>
...
<button (click)="this.treeGrid.selectRows([1,2,5], true)">Select 1,2 and 5</button> // select rows and clear previous selection state
```




1、2、および 5 の ID を持つデータ エントリに対応する行を Tree Grid の選択に追加します。

### 行選択の解除

プログラムで行を選択解除する必要がある場合は、`deselectRows(rowIds: [])` を使用できます。

```html
<!-- selectionExample.component.html -->

<igx-tree-grid ... [primaryKey]="'ID'">
...
</igx-tree-grid>
...
<button (click)="this.treeGrid.deselectRows([1,2,5])">Deselect 1,2 and 5</button>
```

### 行選択イベント

行選択に変更がある場合、**[`rowSelectionChanging`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowSelectionChanging)** イベントが発行されます。**`rowSelectionChanging`** は次の引数を公開します:
- `oldSelection` - 行選択の前の状態を含む行データの配列。
- `newSelection` - 行選択の新しい状態に一致する行データの列。
- `added` - 現在選択に追加されている行データの配列。
- `removed` - 古い選択状態に従って現在削除されている行 データの配列。
- `event` - 行選択の変更をトリガーする元のイベント。
- `cancel` - 行選択の変更をトリガーする元のイベント。


#### リモート データ シナリオでの行選択イベント

リモート データ シナリオでは、グリッドに `primaryKey` が設定されている場合、[`rowSelectionChanging.oldSelection`]({environment:angularApiUrl}/interfaces/IRowSelectionEventArgs.html#oldSelection) イベント引数には、現在データ ビューに含まれていない行の完全な行データ オブジェクトが含まれません。この場合、`rowSelectionChanging.oldSelection` オブジェクトには、`primaryKey` フィールドである 1 つのプロパティのみが含まれます。現在データ ビューにある残りの行については、`rowSelectionChanging.oldSelection` に行データ全体が含まれます。

```html
<!-- selectionExample.component.html -->

<igx-tree-grid (rowSelectionChanging)="handleRowSelectionChange($event)">
...
</igx-tree-grid>
```

```typescript
/* selectionExample.component.ts */

public handleRowSelectionChange(args) {
    args.cancel = true; // this will cancel the row selection
}

```

### 全行の選択

[`igx-tree-grid`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) が提供するもう 1 つの便利な API メソッドが `selectAll(onlyFilteredData)` です。このメソッドはデフォルトですべてのデータ行を選択しますが、フィルタリングが適用される場合、フィルター条件に一致する行のみが選択されます。ただし、false パラメーターを指定してメソッドを呼び出すと、`selectAll(false)` は、フィルターが適用されているかどうかに関係なく、常にグリッド内のすべてのデータを選択します。
>[!NOTE]
> `selectAll()` は削除された行を選択しないことに注意してください。

### 全行の選択解除

[`igx-tree-grid`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) は、デフォルトですべてのデータ行の選択を解除する `deselectAll(onlyFilteredData)` メソッドを提供しますが、フィルタリングが適用される場合、フィルター条件に一致する行のみを選択解除します。ただし、false パラメーターを指定してメソッドを呼び出すと、`deselectAll(false)` は、フィルターが適用されているかどうかに関係なく、常にグリッド内のすべてのデータをクリアします。

### 選択した行を取得する方法

現在選択されている行を確認する必要がある場合は、`selectedRows` ゲッターを使用して行 ID を取得できます。

```typescript

public getSelectedRows() {
    const currentSelection = this.treeGrid.selectedRows; // return array of row IDs
}
```

さらに、`selectedRows` に行 ID を割り当てると、グリッドの選択状態を変更できます。





```typescript
public mySelectedRows = ['Johnathan Winchester', 'Ana Sanders']; // an array of row IDs
```

```html
<igx-tree-grid primaryKey="ID" rowSelection="multiple" [autoGenerate]="false" [selectedRows]="mySelectedRows" [data]="data">
    <igx-column [field]="'Name'"></igx-column>
    <igx-column [field]="'Title'"></igx-column>
</igx-tree-grid>
```






### 行セレクター テンプレート

Tree Grid でヘッダーおよび行セレクターをテンプレート化し、さまざまなシナリオに役立つ機能を提供するコンテキストにアクセスすることもできます。

デフォルトでは、Tree Grid は、行セレクターの親コンテナーまたは行自体の**すべての行選択操作を処理**し、テンプレートの状態の可視化のみになります。基本機能のオーバーライドは通常、[`rowSelectionChanging` イベント](#行選択イベント) を使用して実行する必要があります。基本機能をオーバーライドする `click` ハンドラーを使用してカスタムテンプレートを実装する場合、イベントの伝播を停止して、正しい行の状態を保持する必要があります。

#### 行テンプレート

カスタム行セレクター テンプレートを作成するには、`igx-tree-grid` 内で`igxRowSelector` ディレクティブを使用して `<ng-template>` を宣言します。テンプレートから、行の状態に関する情報を提供するプロパティを使用して、暗黙的に提供されたコンテキスト変数にアクセスできます。

`selected` プロパティは、現在の行が選択されているかどうかを示しますが、`index` プロパティを使用して行インデックスにアクセスできます。

```html
<ng-template igxRowSelector let-rowContext>
    {{ rowContext.index }}
    <igx-checkbox
        [checked]="rowContext.selected"
        [readonly]="true"
    ></igx-checkbox>
</ng-template>
```

`rowID` プロパティを使用して、`igx-tree-grid` 行の参照を取得できます。行セレクター要素に `click` ハンドラーを実装する場合に便利です。

```html
<ng-template igxRowSelector let-rowContext>
    <igx-checkbox (click)="onSelectorClick($event, rowContext.key)"></igx-checkbox>
</ng-template>
```

上の例では、`igx-checkbox` を使用しており、`rowContext.selected` をその `checked` プロパティにバインドしています。[`行番号のデモ`](#行の番号付けデモ)で実際にこれをご覧ください。



### ヘッダー テンプレート

Tree Grid 内でカスタムヘッダーセレクターテンプレートを作成するには、`igxHeadSelector` ディレクティブで `<ng-template>` を宣言します。テンプレートから、ヘッダーの状態に関する情報を提供するプロパティを使用して、暗黙的に提供されたコンテキスト変数にアクセスできます。

`selectedCount` プロパティは現在選択されている行数を示し、`totalCount` は Tree Grid に合計の行数を示します。

```html
<ng-template igxHeadSelector let-headContext>
    {{ headContext.selectedCount }} / {{ headContext.totalCount  }}
</ng-template>
```

`selectedCount` および `totalCount` プロパティを使用して、ヘッド セレクターをチェックするか、不確定にする (部分的に選択する) かを決定できます。




```html
<igx-tree-grid [data]="tGridData" primaryKey="ProductID" childDataKey="Products">
    <!-- ... -->
    <ng-template igxHeadSelector let-headContext>
        <igx-checkbox
            [checked]="headContext.selectedCount > 0 && headContext.selectedCount === headContext.totalCount"
            [indeterminate]="headContext.selectedCount > 0 && headContext.selectedCount !== headContext.totalCount">
        </igx-checkbox>
    </ng-template>
</igx-tree-grid>
```







### 行の番号付けデモ

このデモでは、カスタム ヘッダーと行セレクターの使用方法を示します。後者は、`rowContext.index` を使用して行番号と、`rowContext.selected` にバインドされた `igx-checkbox` を表示します。



<code-view style="height:550px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-selection-template-numbers/" >
</code-view>

<div class="divider--half"></div>





### 条件付き選択のデモ

このデモでは、`rowSelectionChanging` イベントと、選択できない行のチェックボックスが無効になっているカスタム テンプレートを使用して、一部の行が選択されないようにします。



<code-view style="height:550px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-conditional-row-selectors/" >
</code-view>

<div class="divider--half"></div>



## API リファレンス

- [IgxTreeGridComponent API]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)
- [IgxTreeGridRow API]({environment:angularApiUrl}/classes/igxtreegridrow.html)
- [IgxGridCell API]({environment:angularApiUrl}/classes/igxgridcell.html)
- [IgxTreeGridComponent スタイル]({environment:sassApiUrl}/themes#function-grid-theme)

## その他のリソース

<div class="divider--half"></div>

- [Tree Grid 概要](tree-grid.md)
- [選択](selection.md)
- [セル選択](cell-selection.md)
- [ページング](paging.md)
- [フィルタリング](filtering.md)
- [並び替え](sorting.md)
- [集計](summaries.md)
- [列移動](column-moving.md)
- [列のピン固定](column-pinning.md)
- [列のサイズ変更](column-resizing.md)
- [仮想化とパフォーマンス](virtualization.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
