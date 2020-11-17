@@if (igxName === 'IgxGrid') {
---
title: Angular Grid 行選択 | Ignite UI for Angular | インフラジスティックス 
_description: Angular イベント、API、あるいはマウス操作によって、Angular Material の Ignite UI テーブル の行および複数セル データの選択が簡単に実行できます。
_keywords: データ選択, igniteui for angular, インフラジスティックス
_language: ja
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid 行選択| Ignite UI for Angular | インフラジスティックス 
_description: Angular イベント、API、あるいはマウス操作によって、Angular Material の Ignite UI テーブル の行および複数セル データの選択が簡単に実行できます。
_keywords: データ選択, igniteui for angular, インフラジスティックス
_language: ja
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchical Grid 行選択 | Ignite UI for Angular | インフラジスティックス 
_description: Angular イベント、API、あるいはマウス操作によって、Angular Material の Ignite UI テーブル の行および複数セル データの選択が簡単に実行できます。
_keywords: データ選択, igniteui for angular, インフラジスティックス
_language: ja
---
}

# Angular @@igComponent 行選択

Ignite UI for Angular の行選択では、行内の他のすべての列に先行する行セレクター列があります。行選択ボックスをクリックすると、行の選択や選択解除、複数行にわたるデータの選択が可能になります。

## Angular 行選択の例

以下のサンプルは、@@igComponent の**行選択**の 3 つのタイプを示します。以下のボタンを使用して、使用可能な各選択モードを有効にします。Snackbar メッセージ ボックスで各ボタンの操作について簡単に説明します。切り替えボタンを使用して、行セレクターのチェックボックスを非表示または表示します。

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:700px">
    <iframe id="grid-selection-iframe" src='{environment:demosBaseUrl}/grid/grid-selection' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);" alt="Angular 行選択の例"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-selection-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-selection-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:700px">
    <iframe id="treegrid-selection-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-selection' width="100%" height="100%" seamless="" frameborder="0" class="lazyload" onload="onSampleIframeContentLoaded(this);" alt="Angular 行選択の例"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-selection-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-selection-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:710px">
    <iframe id="hierarchical-grid-selection-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-selection' width="100%" height="100%" seamless="" frameborder="0" class="lazyload" onload="onSampleIframeContentLoaded(this);" alt="Angular 行選択の例"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-selection-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-selection-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>
}

## 設定
[`@@igSelector`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) で行選択を設定するには、**rowSelection** プロパティを設定します。このプロパティは、**GridSelectionMode** 列挙を受け取ります。**GridSelectionMode** は、**none**、**single**、**multiple** のツリーモードを公開します。以下で、それぞれについて詳しく説明します。

### None 選択

[`@@igSelector`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) では、デフォルトで行選択が無効になります。それ以外の場合 ([rowSelection]="'none'")。したがって、@@igComponent UI とのインタラクションを通じて行を選択または選択解除することは**できません**が、選択/選択解除する唯一の方法は、提供された API メソッドを使用することです。

### 単一選択

単一行の選択は、`[rowSelection] = '"single"'` プロパティの設定のみで簡単に設定できるようになりました。これにより、**グリッド内の 1 行のみを選択できます**。行のセルにフォーカスするときにセルをクリックするかスペースキーを押すと行を選択できます。もちろん、行セレクターフィールドをクリックして行を選択できます。行が選択または選択解除されると、**onRowSelectionChange** イベントが生成されます。

@@if (igxName === 'IgxGrid') {
```html
<!-- selectionExample.component.html -->

<igx-grid #grid1 [data]="remote | async" [rowSelection]="'single'" (onRowSelectionChange)="handleRowSelection($event)"
    [width]="'800px'" [height]="'600px'" [allowFiltering]="true">
        ...
</igx-grid>
```
```typescript
/* selectionExample.component.ts */

public handleRowSelection(args) {
    if (args.added.length && args.added[0] === 3) {
        args.cancel = true;
    }
}
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<!-- selectionExample.component.html -->

<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false" [height]="'530px'" width="100%"
            [rowSelection]="'single'" [allowFiltering]="true" (onRowSelectionChange)="handleRowSelection($event)">
    ...
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
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false"
        [height]="'600px'" [width]="'100%'" [rowSelection]="'single'"
        (onRowSelectionChange)="handleRowSelection($event)" #hierarchicalGrid>
    ...
</igx-hierarchical-grid>
```
```typescript
/* selectionExample.component.ts */

    public handleRowSelection(event) {
    if (args.added.lenght && args.added[0] === 3) {
        args.cancel = true;
    }
    }
```
}

### 複数選択

[`@@igSelector`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) で複数行選択を有効にするには、[`rowSelection`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowSelection) プロパティを `multiple` に設定します。これにより、各行および @@igComponent ヘッダーで行セレクター フィールドが有効になります。行セレクターを使用して複数行を選択できます。選択はスクロール、ページング、およびソートとフィルターリング、などのデータ操作で保持されます。行を選択するには、セルをクリックするか、セルにフォーカスがあるときにスペースキーを押します。1 つの行を選択し、Shift キーを押しながら別の行をクリックすると、行の範囲全体が選択されます。この選択モードでは、単一の行をクリックすると、前に選択した行が選択解除されます。Ctrl キーを押しながらクリックすると、行が切り替わり、前の選択が保持されます。

@@if (igxName === 'IgxGrid') {
```html
<!-- selectionExample.component.html -->

<igx-grid #grid1 [data]="remote | async" [primaryKey]="'ProductID'" [rowSelection]="'multiple'" (onRowSelectionChange)="handleRowSelection($event)"
    [width]="'800px'" [height]="'600px'" [allowFiltering]="true">
    ...
</igx-grid>
```

}
@@if (igxName === 'IgxTreeGrid') {
```html
<!-- selectionExample.component.html -->

<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [height]="'530px'" width="100%" [rowSelection]="'multiple'" [allowFiltering]="true" (onRowSelectionChange)="handleRowSelection($event)">
    ...
</igx-tree-grid>
```

}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false"
        [height]="'600px'" [width]="'100%'" [rowSelection]="'multiple'"
        (onRowSelectionChange)="handleRowSelection($event)" #hierarchicalGrid>
    ...
</igx-hierarchical-grid>
```
}

**注**
@@if (igxName !== 'IgxTreeGrid') {
* 行選択およびセル選択を正しく実行するには、@@igComponent にリモート仮想化がある場合、[`primaryKey`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#primarykey) を設定します。
}
@@if (igxName !== 'IgxTreeGrid') {
* @@igComponent でリモート仮想化を使用した場合、ヘッダーのチェックボックスをクリックすると、現在グリッドにあるすべてのレコードが選択/選択解除されます。新しいデータがオンデマンドで @@igComponent にロードされると、新、しく追加された行は選択されない制限があるため、これらの行を選択するには API メソッドを使用して動作を処理する必要があります。
}
* 行を選択すると、[`onRowSelectionChange`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onrowselectionchange) イベントがトリガーされます。このイベントは、新しい選択、古い選択、古い選択に対して追加および削除された行に関する情報を提供します。また、イベントはキャンセル可能であるため、選択を防ぐことができます。
* 行選択が有効になっている場合、行セレクターが表示されますが、表示しない場合は、`[hideRowSelectors] = true` に設定できます。
* 行選択モードのランタイムを切り替えると、優先行選択状態がクリアされます。


## API の使用

### コードで行を選択

以下は、単一または複数の行を同時に選択できるコード スニペットです ([`primaryKey`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#primarykey) を介して)。さらに、このメソッドの 2 番目のパラメーターは boolean プロパティです。それを使用して、前の行の選択をクリアするかどうかを選択できます。以前の選択はデフォルトで保存されます。

@@if (igxName === 'IgxGrid' || igxName === 'IgxTreeGrid') {
```html
<!-- selectionExample.component.html -->

<@@igSelector ... [primaryKey]="'ID'">
...
</@@igSelector>
...
<button (click)="this.@@igObjectRef.selectRows([1,2,5], true)">Select 1,2 and 5</button> // select rows and clear previous selection state
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<!-- selectionExample.component.html -->

<@@igSelector ... [primaryKey]="'artist'">
...
</@@igSelector>
...
<button (click)="this.@@igObjectRef.selectRows([1,2,5], false)">Select 1,2 and 5</button> // select rows and preserve previous selection state
```
}

1、2、および 5 の ID を持つデータ エントリに対応する行を @@igComponent の選択に追加します。

### 行選択の解除
プログラムで行を選択解除する必要がある場合は、`deselectRows(rowIds: [])` を使用できます。

```html
<!-- selectionExample.component.html -->

<@@igSelector ... [primaryKey]="'ID'">
...
</@@igSelector>
...
<button (click)="this.@@igObjectRef.deselectRows([1,2,5])">Deselect 1,2 and 5</button>
```

### 行選択イベント
行選択に何らかの変更があると、**`onRowSelectionChange`** イベントが発生します。 **`onRowSelectionChange`** は次の引数を公開します。
- `oldSelection` - 行選択の前の状態を含む行 ID の配列。
- `newSelection` - 行選択の新しい状態に一致する行 ID の列。
- `added` - 現在選択に追加されている行 ID の配列。
- `removed` - 古い選択状態に従って現在削除されている行 ID の配列。
- `event` - 行選択の変更をトリガーする元のイベント。
- `cancel` - 行選択の変更を防ぐことができます。
@@if (igxName === 'IgxHierarchicalGrid') {
- `owner` - イベントが子グリッドからトリガーされる場合、これにより、イベントの発行元であるコンポーネントへの参照が提供されます。
}

```html
<!-- selectionExample.component.html -->

<@@igSelector (onRowSelectionChange)="handleRowSelectionChange($event)">
...
</@@igSelector>
```
```typescript
/* selectionExample.component.ts */

public handleRowSelectionChange(args) {
    args.cancel = true; // this will cancel the row selection
}

```

### 全行の選択
[`@@igSelector`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) が提供するもう 1 つの便利な API メソッドが `selectAll(onlyFilteredData)` です。このメソッドはデフォルトですべてのデータ行を選択しますが、フィルタリングが適用される場合、フィルター条件に一致する行のみが選択されます。ただし、false パラメーターを指定してメソッドを呼び出すと、`selectAll(false)` は、フィルターが適用されているかどうかに関係なく、常にグリッド内のすべてのデータを選択します。
> **注**: `selectAll()` は削除された行を選択しないことに注意してください。

### 全行の選択解除
[`@@igSelector`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) は、デフォルトですべてのデータ行の選択を解除する `deselectAll(onlyFilteredData)` メソッドを提供しますが、フィルタリングが適用される場合、フィルター条件に一致する行のみを選択解除します。ただし、false パラメーターを指定してメソッドを呼び出すと、`deselectAll(false)` は、フィルターが適用されているかどうかに関係なく、常にグリッド内のすべてのデータをクリアします。

### 選択した行を取得する方法
現在選択されている行を確認する必要がある場合は、`selectedRows` ゲッターを使用して行 ID を取得できます。

```typescript

public getSelectedRows() {
    const currentSelection = this.@@igObjectRef.selectedRows; // return array of row IDs
}
```

さらに、`selectedRows` に行 ID を割り当てると、グリッドの選択状態を変更できます。

@@if (igxName === 'IgxGrid') {
```typescript
public mySelectedRows = [1, 2, 3]; // an array of row IDs
```
```html
<igx-grid primaryKey="ProductID" rowSelection="multiple" [mySelectedRows]="selectedRows" [data]="data">
    <igx-column [field]="'ProductID'"></igx-column>
    <igx-column [field]="'ProductName'"></igx-column>
    <igx-column [field]="'UnitsInStock'"></igx-column>
</igx-grid>
```
}

@@if (igxName === 'IgxTreeGrid') {
```typescript
public mySelectedRows = ['Johnathan Winchester', 'Ana Sanders']; // an array of row IDs
```
```html
<igx-tree-grid primaryKey="ID" rowSelection="multiple" [selectedRows]="mySelectedRows" [data]="data">
    <igx-column [field]="'Name'"></igx-column>
    <igx-column [field]="'Title'"></igx-column>
</igx-tree-grid>
```
}


@@if (igxName === 'IgxHierarchicalGrid') {
```typescript
// arrays of row IDs
public mySelectedRows = ['Naomi Yepes', 'Ahmad Nazeri'];
public childSelectedRows = ['Initiation', 'Emergency'];
```
```html
<igx-hierarchical-grid primaryKey="Artist" rowSelection="multiple" [selectedRows]="mySelectedRows" [data]="data">
    <igx-column field="Artist"></igx-column>
    <igx-row-island [key]="'Albums'" rowSelection="multiple">
        <igx-column field="Album"></igx-column>
        <igx-column field="LaunchDate"></igx-column>
    </igx-row-island>
</igx-hierarchical-grid>
```
}

### 行セレクター テンプレート
@@igComponent でヘッダーおよび行セレクターをテンプレート化し、さまざまなシナリオに役立つ機能を提供するコンテキストにアクセスすることもできます。

デフォルトでは、@@igComponent は、行セレクターの親コンテナまたは行自体の**すべての行選択操作を処理**し、テンプレートの状態の可視化のみになります。基本機能のオーバーライドは通常、[`onRowSelectionChange` イベント](#行選択イベント) を使用して実行する必要があります。基本機能をオーバーライドする `click` ハンドラーを使用してカスタムテンプレートを実装する場合、イベントの伝播を停止して、正しい行の状態を保持する必要があります。

#### 行テンプレート
カスタム行セレクター テンプレートを作成するには、`@@igSelector` 内で` igxRowSelector` ディレクティブを使用して `<ng-template>` を宣言します。テンプレートから、行の状態に関する情報を提供するプロパティを使用して、暗黙的に提供されたコンテキスト変数にアクセスできます。

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

`rowID` プロパティを使用して、`@@igSelector` 行の参照を取得できます。行セレクター要素に `click` ハンドラーを実装する場合に便利です。
```html
<ng-template igxRowSelector let-rowContext>
    <igx-checkbox (click)="onSelectorClick($event, rowContext.rowID)"></igx-checkbox>
</ng-template>
```
上の例では、`igx-checkbox` を使用しており、`rowContext.selected` をその `checked` プロパティにバインドしています。[`行番号のデモ`](#行の番号付けデモ)で実際にこれをご覧ください。

@@if (igxName === 'IgxHierarchicalGrid') {
> [!NOTE]
`rowContext.select()` および `rowContext.deselect()` メソッドは、`@@igSelector` のテンプレート コンテキストで公開されます。基本機能をオーバーライドするクリック ハンドラーを実装した場合、特に子グリッドで現在の行を簡単に切り替えることができます。
}

### ヘッダー テンプレート 
@@igComponent 内でカスタムヘッダーセレクターテンプレートを作成するには、`igxHeadSelector` ディレクティブで `<ng-template>` を宣言します。テンプレートから、ヘッダーの状態に関する情報を提供するプロパティを使用して、暗黙的に提供されたコンテキスト変数にアクセスできます。

`selectedCount` プロパティは現在選択されている行数を示し、`totalCount` は @@igComponent に合計の行数を示します。
```html
<ng-template igxHeadSelector let-headContext>
    {{ headContext.selectedCount }} / {{ headContext.totalCount  }}
</ng-template>
```

`selectedCount` および `totalCount` プロパティを使用して、ヘッド セレクターをチェックするか、不確定にする（部分的に選択する）かを決定できます。
@@if (igxName === 'IgxGrid') {
```html
<igx-grid #grid [data]="gridData" primaryKey="ProductID" rowSelection="multiple">
    <!-- ... -->
    <ng-template igxHeadSelector let-headContext>
        <igx-checkbox
            [checked]=" headContext.selectedCount > 0 && headContext.selectedCount === headContext.totalCount"
            [indeterminate]="headContext.selectedCount > 0 && headContext.selectedCount !== headContext.totalCount">
        </igx-checkbox>
    </ng-template>
</igx-grid>
```
}

@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid #tGrid [data]="tGridData" primaryKey="ProductID" childDataKey="Products">
    <!-- ... -->
    <ng-template igxHeadSelector let-headContext>
        <igx-checkbox
            [checked]="headContext.selectedCount > 0 && headContext.selectedCount === headContext.totalCount"
            [indeterminate]="headContext.selectedCount > 0 && headContext.selectedCount !== headContext.totalCount">
        </igx-checkbox>
    </ng-template>
</igx-tree-grid>
```
}

@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid #hGrid [data]="hGridData" primaryKey="ProductID">
    <ng-template igxHeadSelector let-headContext>
        <igx-checkbox
            [checked]="headContext.selectedCount > 0 && headContext.selectedCount === headContext.totalCount"
            [indeterminate]="headContext.selectedCount > 0 && headContext.selectedCount !== headContext.totalCount">
        </igx-checkbox>
    </ng-template>

    <igx-row-island [key]="'ProductInfo'">
        <ng-template igxHeadSelector let-childHeadContext>
            <!-- header template goes here -->
        </ng-template>
        <ng-template igxRowSelector let-childRowContext>
            <!-- row template goes here -->
        </ng-template>
    </igx-row-island>
</igx-hierarchical-grid>
```
`@@igSelector` の各階層レベルには、独自の行とヘッダーのテンプレートを設定できます。
}

@@if (igxName === 'IgxHierarchicalGrid') {
> [!NOTE]
`headContext.selectAll()` と `headContext.deselectAll()` メソッドは、`@@igSelector` のテンプレート コンテキストで公開されます。基本機能をオーバーライドするクリック ハンドラーを実装した場合、特に子グリッドで現在の行を簡単に切り替えることができます。
}

### 行の番号付けデモ
このデモでは、カスタム ヘッダーと行セレクターの使用方法を示します。後者は、`rowContext.index` を使用して行番号と、`rowContext.selected` にバインドされた `igx-checkbox` を表示します。
@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="grid-selection-template-numbering-iframe" src='{environment:demosBaseUrl}/grid/grid-selection-template-numbering' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-selection-template-numbering-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-selection-template-numbering-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="tree-grid-selection-template-numbers-iframe" data-src='{environment:demosBaseUrl}/tree-grid/tree-grid-selection-template-numbers' width="100%" height="100%" seamless frameborder="0" class="lazyload" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="tree-grid-selection-template-numbers-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-selection-template-numbers-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:610px">
    <iframe id="hierarchical-grid-selection-template-numbers-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-selection-template-numbers' width="100%" height="100%" seamless frameborder="0" class="lazyload" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-selection-template-numbers-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-selection-template-numbers-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>
}

@@if (igxName === 'IgxGrid') {
### Excel スタイル行セレクターのデモ
このデモは、カスタム テンプレートを使用して Excel ライクなヘッダーおよび行セレクターを示します。
<div class="sample-container loading" style="height:550px">
    <iframe id="grid-selection-template-excel-iframe" src='{environment:demosBaseUrl}/grid/grid-selection-template-excel' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-selection-template-excel-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-selection-template-excel-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>
}

### 条件付き選択のデモ
このデモでは、`onRowSelectionChange` イベントと、選択できない行のチェックボックスが無効になっているカスタム テンプレートを使用して、一部の行が選択されないようにします。
@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="grid-conditional-row-selectors-iframe" src='{environment:demosBaseUrl}/grid/grid-conditional-row-selectors' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-conditional-row-selectors-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-conditional-row-selectors-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="treegrid-conditional-row-selectors-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-conditional-row-selectors' width="100%" height="100%" seamless frameborder="0" class="lazyload" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-conditional-row-selectors-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-conditional-row-selectors-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:630px">
    <iframe id="hierarchical-grid-conditional-row-selectors-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-conditional-row-selectors' width="100%" height="100%" seamless frameborder="0" class="lazyload" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-conditional-row-selectors-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-conditional-row-selectors-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>
}

## API リファレンス

* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
@@if (igxName !== 'IgxTreeGrid') {* [IgxGridRowComponent API]({environment:angularApiUrl}/classes/igxgridrowcomponent.html)}@@if (igxName === 'IgxTreeGrid') {* [IgxTreeGridRowComponent API]({environment:angularApiUrl}/classes/igxtreegridrowcomponent.html)}
* [IgxGridCellComponent API]({environment:angularApiUrl}/classes/igxgridcellcomponent.html)
* [@@igxNameComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

## その他のリソース
<div class="divider--half"></div>

* [@@igComponent 概要](@@igMainTopic.md)
* [選択](selection.md)
* [セル選択](cell-selection.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [並び替え](sorting.md)
* [集計](summaries.md)
* [列移動](column-moving.md)
* [列のピン固定](column-pinning.md)
* [列のサイズ変更](column-resizing.md)
* [仮想化とパフォーマンス](virtualization.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
