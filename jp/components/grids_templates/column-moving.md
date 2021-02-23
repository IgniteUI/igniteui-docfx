@@if (igxName === 'IgxGrid') {
---
title: Angular Grid 列移動 | 列順序 | Ignite UI for Angular | インフラジスティックス
_description: Angular UI グリッドの列ドラッグ機能でマウス/タッチ ジェスチャまたは列移動 API を使用して、Angular Material テーブルの Ignite UI のカスタム列の順序を設定します。
_keywords: column order, igniteui for angular, infragistics, 列順序
_language: ja
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular グリッドの列移動 | 列順序 | Ignite UI for Angular | インフラジスティックス
_description: Angular UI グリッドの列ドラッグ機能でマウス/タッチ ジェスチャまたは列移動 API を使用して、Angular Material テーブルの Ignite UI のカスタム列の順序を設定します。
_keywords: column order, igniteui for angular, infragistics, 列順序, インフラジスティックス
_language: ja
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular グリッドの列移動 | 列順序 | Ignite UI for Angular | インフラジスティックス
_description: Angular UI グリッドの列ドラッグ機能でマウス/タッチ ジェスチャまたは列移動 API を使用して、Angular Material テーブルの Ignite UI のカスタム列の順序を設定します。
_keywords: column order, igniteui for angular, infragistics, 列順序, インフラジスティックス
_language: ja
---
}

# @@igComponent 列移動の概要

Ignite UI for Angular の @@igComponent のコンポーネントは、標準ドラッグ/ドロップのマウス/タッチによるジェスチャ、または列移動 API を使用した順序変更のための**列移動**機能を提供します。列の移動は、固定列と固定されていない列、および複数列ヘッダーの両方で機能します。列を固定領域に移動すると列が固定され、または逆に固定領域の外に列を移動すると、列の固定が解除されます。

> [!NOTE]
> 列と列グループ間の順序変更は、それらが階層の同じレベルにあり、両方が同じグループにある場合にのみ許可されます。列/列グループが最上位の列である場合、列/列グループ間を移動できます。

> [!NOTE]
> 列ヘッダーがテンプレート化され、対応する列が移動可能 (またはグループ化可能) である場合、テンプレート化された要素は **draggable** 属性を **false** に設定する必要があります。これにより、要素によって発行されたすべてのイベントのハンドラーをアタッチできます。それ以外の場合、イベントは `igxDrag` ディレクティブによって消費されます。

> [!NOTE]
> ピン固定領域が最大幅 (@@igComponent 幅合計の 80%) を超えた場合、ドロップ操作が禁止されていてピン固定ができないことをヒントの表示でエンドユーザーに通知します。つまり、ピン固定領域に列をドロップできません。

```html
<ng-template igxHeader>
    <igx-icon [attr.draggable]="false" (click)="onClick()"></igx-icon>
</ng-template>
```

## Angular @@igComponent 列移動の例

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:650px">
    <iframe id="column-moving-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-moving-sample' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);" alt="Angular @@igComponent 列移動の例"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://jp.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="column-moving-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="column-moving-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:650px">
    <iframe id="treegrid-column-moving-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-column-moving' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);" alt="Angular @@igComponent 列移動の例"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://jp.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-column-moving-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-column-moving-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:660px">
    <iframe id="hierarchical-grid-column-moving-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-moving' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);" alt="Angular @@igComponent 列移動の例"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://jp.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-column-moving-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-column-moving-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>
}

## 概要

**列移動**は各列レベルで有効にできます。つまり、[**@@igSelector**]({environment:angularApiUrl}/classes/@@igTypeDoc.html) に移動可能な列と移動不可の列の両方を含むことができます。[`igx-column`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) の [`movable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#movable) 入力によって制御されます。


@@if (igxName === 'IgxGrid') {
```html
<igx-column [field]="'Category'" [movable]="true"></igx-column>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-column [field]="'Title'" [movable]="true"></igx-column>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-column #companyname field="CompanyName" [movable]="true" width="150px">
```
}

## API
ドラッグアンドドロップ機能に加えて、列の移動機能には、プログラムで列を移動/並べ替えできる 2 つの API メソッドも用意されています。 

[`moveColumn`]({environment:angularApiUrl}/classes/igxgridcomponent.html#movecolumn) - 列を別の列 (ターゲット) の前または後に移動します。最初のパラメーターは移動する列で、2 番目のパラメーターはターゲット列です。オプションの 3 番目のパラメーター `position` ([`DropPosition`]({environment:angularApiUrl}/enums/dropposition.html) 値を表す) でターゲット列の前または後に列を配置するかどうかを決定します。

```typescript
// Move the ID column after the Name column
const idColumn = grid.getColumnByName("ID");
const nameColumn = grid.getColumnByName("Name");

grid.moveColumn(idColumn, nameColumn, DropPosition.AfterDropTarget);
```

[`move`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#move) - 列を指定された表示インデックスに移動します。渡されたインデックス パラメーターが無効である場合 (負である/列数を超える場合)、または列がこのインデックスに移動できない場合 (別のグループ内にある場合)、操作は実行されません。

```typescript
// Move the ID column at 3rd position.
const idColumn = grid.getColumnByName("ID");
idColumn.move(3);
```

API を使用する時、操作が成功した場合、[`onColumnMovingEnd`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#oncolumnmovingend) イベントのみが発行されることに注意してください。また、ドラッグアンドドロップ機能と比較して、API を使用するために `movable` プロパティを true に設定する必要がないことにも注意してください。 

## イベント

列のドラッグアンドドロップ操作をカスタマイズするための列移動に関連するイベントが複数あります。[`onColumnMovingStart`]({environment:angularApiUrl}/classes/igxgridcomponent.html#oncolumnmovingstart)、[`onColumnMoving`]({environment:angularApiUrl}/classes/igxgridcomponent.html#oncolumnmoving)、[`onColumnMovingEnd`]({environment:angularApiUrl}/classes/igxgridcomponent.html#oncolumnmovingend) があります。
[`@@igSelector`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) の [`onColumnMovingEnd`]({environment:angularApiUrl}/classes/igxgridcomponent.html#oncolumnmovingend) イベントを処理し、列が新しい位置にドロップされたときにカスタム ロジックを実装できます。たとえば、Change On Year(%) 列の後に Category のドロップをキャンセルできます。

@@if (igxName === 'IgxGrid') {
```html
<igx-grid #dataGrid [data]="data" [autoGenerate]="false" (onColumnMovingEnd)="onColumnMovingEnd($event)">
    <igx-column [field]="'Category'" [movable]="true"></igx-column>
    <igx-column [field]="'Change On Year(%)'" [dataType]="'number'" [movable]="true" ></igx-column>
</igx-grid>
```

```typescript
public onColumnMovingEnd(event) {
    if (event.source.field === "Category" && event.target.field === "Change On Year(%)") {
        event.cancel = true;
    }
}
```
}

@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false" (onColumnMovingEnd)="onColumnMovingEnd($event)">
    <igx-column [field]="'Name'" dataType="string" [movable]="true" width="250px"></igx-column>
    <igx-column [field]="'Title'" dataType="string" [movable]="true" width="250px"></igx-column>
</igx-tree-grid>
```

```typescript
public onColumnMovingEnd(event) {
    if (event.source.field === "Name" && event.target.field === "Title") {
        event.cancel = true;
    }
}
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid #hierarchicalGrid [data]="data" [autoGenerate]="false" (onColumnMovingEnd)="onColumnMovingEnd($event)">
    <igx-column [field]="'Country'" [movable]="true"></igx-column>
    <igx-column [field]="'Phone'" [dataType]="'number'" [movable]="true" ></igx-column>
</igx-hierarchical-grid>
```

```typescript
public onColumnMovingEnd(event) {
    if (event.source.field === "Phone" && event.target.field === "Country") {
        event.cancel = true;
    }
}
```
}

## スタイル設定

@@igComponent 列移動ヘッダーのスタイル設定は、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

 ```scss
// custom-grid-column-moving-style.component.scss
@import '~igniteui-angular/lib/core/styles/themes/index';
 ``` 

最も簡単な方法は、[`igx-grid-theme`]({environment:sassApiUrl}/index.html#function-igx-grid-theme) を拡張して `$ghost-header-background`、`$ghost-header-text-color`、`$ghost-header-icon-color` パラメーターを受け入れる新しいテーマを作成します。

```scss
// Define dark theme for the column moving
$dark-grid-column-moving-theme: igx-grid-theme(
    $ghost-header-text-color: #F4D45C,
    $ghost-header-background: #575757,
    $ghost-header-icon-color: #f4bb5c
);
```

最後の手順は、それぞれのテーマを持つコンポーネント mixins を**含める**ことです。

```scss
@include igx-grid($dark-grid-column-moving-theme);
```

> [!NOTE]
> コンポーネントの [**View Encapsulation**](../themes/component-themes.md#表示のカプセル化) ストラテジに基づいて、`::ng-deep` を使用してこのカプセル化を解除する必要な場合があります。

```scss
:host {
    ::ng-deep {
        @include igx-grid($dark-grid-column-moving-theme);
    }
}
```

### カラーパレットの定義

上記のように色の値をハードコーディングする代わりに、[igx-palette]({environment:sassApiUrl}/index.html#function-igx-palette) と [igx-color]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用することによって色に関してより高い柔軟性を持つことができます。


**igx-palette** は渡された一次色と二次色に基づいてカラーパレットを生成します。
```scss
$yellow-color: #F4D45C;
$black-color: #575757;

$dark-palette: igx-palette($primary: $yellow-color, $secondary: $black-color);
```

次に [**igx-color**]({environment:sassApiUrl}/index.html#function-igx-color) を使用してパレットから簡単に色を取り出すことができます。

```scss
$dark-grid-column-moving-theme: igx-grid-theme(
    $palette: $dark-palette,
    $ghost-header-text-color: igx-color($dark-palette, "primary", 400),
    $ghost-header-background: igx-color($dark-palette, "secondary", 200),
    $ghost-header-icon-color:  igx-color($dark-palette, "primary", 500)
);
```


> [!NOTE]
> igx-color および igx-palette は、色を生成および取得するための重要な機能です。使い方の詳細については[パレット](../themes/palette.md)のトピックを参照してください。

### スキーマの使用

テーマ エンジンを使用して[スキーマ](../themes/schemas.md)の利点を使用でき、堅牢で柔軟な構造を構築できます。**スキーマ**はテーマを使用する方法です。

すべてのコンポーネントに提供されている 2 つの定義済みスキーマ (ここでは [light-grid]({environment:sassApiUrl}/index.html#variable-_light-grid)) の 1 つを拡張します。

```scss
// Extending the dark grid schema
$dark-grid-column-moving-schema: extend($_light-grid,
        (
            ghost-header-text-color:(
                igx-color: ("primary", 400)
            ),
            ghost-header-background:(
                igx-color: ("secondary", 200)
            ),
            ghost-header-icon-color:(
                igx-color:( "primary", 500)
            )
        )
);
```

カスタム スキーマを適用するには、グローバル ([light]({environment:sassApiUrl}/index.html#variable-light-schema) または [dark]({environment:sassApiUrl}/index.html#variable-dark-schema)) の 1 つを拡張する必要があります。これは基本的にカスタム スキーマでコンポーネントを指し示し、その後それぞれのコンポーネントテーマに追加するものです。

```scss
// Extending the global dark-schema
$custom-light-schema: extend($light-schema,(
    igx-grid: $dark-grid-column-moving-schema,
));

// Defining dark-grid-theme with the global dark schema
$dark-grid-column-moving-theme: igx-grid-theme(
  $palette: $dark-palette,
  $schema: $custom-light-schema
);
```

テーマを上記と同じ方法で含めることに注意してください。

### デモ

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:650px">
    <iframe id="column-moving-styled-sample-iframe" data-src='{environment:demosBaseUrl}/grid/grid-moving-styled-sample' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="column-moving-styled-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="column-moving-styled-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>
}

@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:650px">
    <iframe id="treegrid-column-moving-styled-sample-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-column-moving-styled' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-column-moving-styled-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-column-moving-styled-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>
}

@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:660px">
    <iframe id="hierarchical-grid-column-moving-styled-sample-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-moving-styled' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-column-moving-styled-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-column-moving-styled-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>
}

## API リファレンス
<div class="divider--half"></div>

* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent スタイル]({environment:sassApiUrl}/index.html#mixin-igx-grid)

## その他のリソース
<div class="divider--half"></div>

* [@@igComponent 概要](@@igMainTopic.md)
* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列のピン固定](column-pinning.md)
* [列のサイズ変更](column-resizing.md)
* [選択](selection.md)
@@if (igxName !== 'IgxHierarchicalGrid') {* [検索](search.md)}

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
