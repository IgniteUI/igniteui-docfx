---
title: グリッドの並べ替え
_description: Ignite UI for Angular Data Grid コントロールは、タッチ レスポンシブなデータ グリッドです。階層およびリスト ビューなどの機能があります。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Data Grid コンポーネント, Angular Data Grid コントロール, Angular Grid コンポーネント, Angular Grid コントロール, Angular 高いパフォーマンス Grid, 並べ替え機能, 並べ替え
_language: ja
---

### グリッドの並べ替え

Ignite UI for Angular では、列レベルでの**並べ替え**が可能です。つまり、`igx-grid` に並べ替え可能な列および並べ替え不可の列の両方を含むことができます。

#### デモ
以下のデモは、**igx-grid** の [`onContextMenu`]({environment:angularApiUrl}/classes/igxgridcomponent.html#oncontextmenu) 出力を使用してカスタム コンテキスト メニューを追加しています。

<div class="sample-container loading" style="height:550px">
    <iframe id="grid-sample-iframe" src='{environment:demosBaseUrl}/grid-sorting-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider--half"></div>

以下のように [`sortable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#sortable) 入力を使用します。グリッド フィルター同様、[`sortingIgnoreCase`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#sortingignorecase) プロパティを設定して大文字と小文字を区別する並べ替えを実行できます。

```html
<igx-column field="ProductName" header="Product Name" dataType="'string'" sortable="true"></igx-column>
```

#### API での並べ替え

グリッドの [`sort`]({environment:angularApiUrl}/classes/igxgridcomponent.html#sort) メソッドを使用し、列または複数の列をグリッド API で並べ替えできます。

```typescript
import { SortingDirection } from 'igniteui-angular';

// Perform a case insensitive ascending sort on the ProductName column.
this.grid.sort({fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true});

// Perform sorting on both the ProductName and Price columns.
this.grid.sort([
    { fieldName: 'ProductName' dir: SortingDirection.Asc, ignoreCase: true },
    { fieldName: 'Price', dir: SortingDirection.Desc }
]);
```

フィルター動作と同様に、並べ替え状態をクリアするには [`clearSort`]({environment:angularApiUrl}/classes/igxgridcomponent.html#clearsort) メソッドを使用します。

```typescript
// Removes the sorting state from the ProductName column
this.grid.clearSort('ProductName');

// Removes the sorting state from every column in the grid
this.grid.clearSort();
```

> [!NOTE]
> 並べ替え操作では、グリッドにバインドされているデータ ソースは変更**されません**。

#### 初期の並べ替え状態

グリッドの初期の並べ替え状態を設定するには、並べ替え式の配列をグリッドの [`sortingExpressions`]({environment:angularApiUrl}/classes/igxgridcomponent.html#sortingexpressions)` プロパティに渡します。

```typescript
public ngOnInit() {
    this.grid.[`sortingExpressions`]({environment:angularApiUrl}/classes/igxgridcomponent.html#sortingexpressions) = [
        { fieldName: 'ProductName' dir: SortingDirection.Asc, ignoreCase: true },
        { fieldName: 'Price', dir: SortingDirection.Desc }
    ];
}
```

> [!NOTE]
> `string` 型の値が `Date` [`dataType`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#datatype) の列で使用される場合、グリッドが値を `Date` オブジェクトに解析しないため igxGrid 並べ替え機能が正しく動作しません。`string` オブジェクトを使用する場合、値を `Date` オブジェクトに解析するためのロジックをアプリケーション レベルで実装する必要があります。

<div class="divider--half"></div>

#### リモート並べ替え
[`onDataPreLoad`]({environment:angularApiUrl}/classes/igxgridcomponent.html#ondatapreload) と [`onSortingDone`]({environment:angularApiUrl}/classes/igxgridcomponent.html#onsortingdone) アウトプットにサブスクライブしてグリッドでリモートの並べ替えができます。詳細については、`グリッドの仮想化とパフォーマンス` [ヘルプ](grid_virtualization.md#リモートの並べ替えフィルタリングの仮想化)をご覧ください。

<div class="divider--half"></div>

### API
* [IgxGridComponent API]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent Styles]({environment:sassApiUrl}/index.html#mixin-igx-grid)

### 追加のリソース
<div class="divider--half"></div>

* [グリッドの概要](grid.md)
* [仮想化とパフォーマンス](grid_virtualization.md)
* [ページング](grid_paging.md)
* [フィルタリング](grid_filtering.md)
* [集計](grid_summaries.md)
* [列移動](grid_column_moving.md)
* [列のピン固定](grid_column_pinning.md)
* [列のサイズ変更](grid_column_resizing.md)
* [選択](grid_selection.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
