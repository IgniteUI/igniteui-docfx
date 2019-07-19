@@if (igxName === 'IgxGrid') {
---
title: Angular Grid ソート|データ ソート |Ignite UI for Angular |infragistics
_description: Ignite UI Material UI グリッドの Angular Sort 機能を使用し、機能豊かなな API と Angular イベントを使って並べ替え可能な列の組み合わせを構成する方法。
_keywords: angular sort, ignite ui for angular, infragistics
_language: ja
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid ソート|データ ソート |Ignite UI for Angular |infragistics
_description: Ignite UI Material UI グリッドの Angular Sort 機能を使用し、機能豊かなな API と Angular イベントを使って並べ替え可能な列の組み合わせを構成する方法。
_keywords: angular sort, ignite ui for angular, infragistics
_language: ja
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchical Grid ソート |データ ソート|Ignite UI for Angular |“infragistics”
_description: Ignite UI Material UI グリッドの Angular Sort 機能を使用し、機能豊かなな API と Angular イベントを使って並べ替え可能な列の組み合わせを構成する方法。
_keywords: angular sort, ignite ui for angular, infragistics
_language: ja
---
}

### @@igComponent ソートの概要

Ignite UI for Angular @@igComponent では、列レベルでのデータ ソートが可能です。つまり、**@@igSelector** にソート可能な列とソート不可の列の両方を持つことができます。Angular でソートを実行すると、指定した条件に基づいてレコードの表示順序を変更できます。

#### デモ

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="grid-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-sorting-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="tree-grid-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-sorting' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:510px">
    <iframe id="hierarchical-grid-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-sorting' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>
}

<div class="divider--half"></div>

[`sortable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#sortable) 入力で可能です。@@igComponent の並べ替えで、[`sortingIgnoreCase`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#sortingignorecase) プロパティを設定して大文字と小文字を区別する並べ替えができます。

```html
<igx-column field="ProductName" header="Product Name" [dataType]="'string'" sortable="true"></igx-column>
```

#### API での並べ替え

@@igComponent [`sort`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#sort) メソッドを使用して列、複数の列の組み合わせを並べ替えできます。

```typescript
import { SortingDirection } from 'igniteui-angular';

// Perform a case insensitive ascending sort on the ProductName column.
this.@@igObjectRef.sort({ fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true });

// Perform sorting on both the ProductName and Price columns.
this.@@igObjectRef.sort([
    { fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true },
    { fieldName: 'Price', dir: SortingDirection.Desc }
]);
```

> [!NOTE]
> Sorting は、[`DefaultSortingStrategy`]({environment:angularApiUrl}/classes/defaultsortingstrategy.html) アルゴリズムを使用して実行されます。[`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#sortStrategy) または [`ISortingExpression`]({environment:angularApiUrl}/interfaces/isortingexpression.html#strategy) は、代替アルゴリズムとして [`ISortingStrategy`]({environment:angularApiUrl}/interfaces/isortingstrategy.html) のカスタム実装を使用できます。たとえば複雑なテンプレート列や画像列にユーザー定義の並べ替えを定義する必要がある場合に便利です。

フィルター動作で、並べ替え状態をクリアするには [`clearSort`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#clearsort) メソッドを使用します。

```typescript
// Removes the sorting state from the ProductName column
this.@@igObjectRef.clearSort('ProductName');

// Removes the sorting state from every column in the @@igComponent
this.@@igObjectRef.clearSort();
```

> [!NOTE]
> 並べ替え操作で @@igComponent の基になるデータ ソースは変更**しません**。

#### 初期の並べ替え状態

@@igComponent で並べ替え状態を初期設定するには、並べ替え式の配列を @@igComponent の [`sortingExpressions`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#sortingexpressions) プロパティに渡します。

```typescript
public ngOnInit() {
    this.@@igObjectRef.sortingExpressions = [
        { fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true },
        { fieldName: 'Price', dir: SortingDirection.Desc }
    ];
}
```

> [!NOTE]
> `string` 型の値が [`dataType`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#datatype) `Date` の列で使用される場合、@@igComponent が値を  `Date` オブジェクトに解析しないため i@@igComponent `sorting` が正しく動作しません。`string` オブジェクトを使用する場合、値を `Date` オブジェクトに解析するためのロジックをアプリケーション レベルで実装する必要があります。

<div class="divider--half"></div>

@@if (igxName === 'IgxGrid') {
#### リモート並べ替え
[`onDataPreLoad`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#ondatapreload) と [`onSortingDone`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onsortingdone) アウトプットにサブスクライブして @@igComponent のリモート並べ替えが可能です。詳細については、[@@igComponent の仮想化とパフォーマンス](virtualization.md#remote-sortingfiltering-virtualization)をご覧ください。

<div class="divider--half"></div>
}

### API リファレンス
* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [ISortingExpression]({environment:angularApiUrl}/interfaces/isortingexpression.html)

### その他のリソース
<div class="divider--half"></div>

* [@@igComponent 概要](@@igMainTopic.md)
* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [集計](summaries.md)
* [列移動](column_moving.md)
* [列のピン固定](column_pinning.md)
* [列のサイズ変更](column_resizing.md)
* [選択](selection.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)
